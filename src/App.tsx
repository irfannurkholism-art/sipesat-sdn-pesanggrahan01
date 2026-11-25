import { useCallback, useState } from 'react';
import { WifiOff } from 'lucide-react';
import { useAppState } from './hooks/useAppState';
import { useOnlineStatus } from './hooks/usePWAInstall';
import { BottomNav, MainTab } from './components/BottomNav';
import { OnboardingView } from './components/OnboardingView';
import { HomeView } from './components/HomeView';
import { LearnSubTab, LearnView } from './components/LearnView';
import { ChatView } from './components/ChatView';
import { ProgressView } from './components/ProgressView';
import { SettingsView } from './components/SettingsView';

export default function App() {
  const {
    settings,
    needsOnboarding,
    completeOnboarding,
    logout,
    updateSettings,
    toggleTheme,
    quizHistory,
    recordQuizAttempt,
    resetProgress,
    chatMessages,
    appendChatMessage,
    clearChat,
  } = useAppState();

  const isOnline = useOnlineStatus();

  const [activeTab, setActiveTab] = useState<MainTab>('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');
  const [learnSubTab, setLearnSubTab] = useState<LearnSubTab>('jadwal');
  const [learnFocusSubjectId, setLearnFocusSubjectId] = useState<string | undefined>(
    undefined
  );
  const [autoStartQuizSubjectId, setAutoStartQuizSubjectId] = useState<string | null>(
    null
  );
  const [pendingChatPrompt, setPendingChatPrompt] = useState<string | null>(null);
  const [chatFocusSubjectId, setChatFocusSubjectId] = useState<string | undefined>(
    undefined
  );

  const handleNavigateLearn = useCallback(
    (subTab: LearnSubTab, subjectId?: string, startQuizNow = false) => {
      setIsChatOpen(false);
      setActiveTab('learn');
      setLearnSubTab(subTab);
      if (subjectId && subjectId !== 'all') {
        setLearnFocusSubjectId(subjectId);
      }
      if (startQuizNow && subjectId) {
        setAutoStartQuizSubjectId(subjectId);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  const handleOpenChat = useCallback(
    (initialPrompt?: string, subjectId?: string) => {
      if (initialPrompt) {
        setPendingChatPrompt(initialPrompt);
      }
      setChatFocusSubjectId(subjectId);
      setIsChatOpen(true);
    },
    []
  );

  const handleSelectMainTab = useCallback((tab: MainTab) => {
    setIsChatOpen(false);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleConsumeAutoStart = useCallback(() => {
    setAutoStartQuizSubjectId(null);
  }, []);

  const handleConsumePendingPrompt = useCallback(() => {
    setPendingChatPrompt(null);
  }, []);

  return (
    <div className="min-h-[100dvh] w-full bg-slate-200/70 dark:bg-slate-950 transition-colors duration-200 flex justify-center">
      {/* Mobile-First Centered Frame (max-w-md) */}
      <div className="relative min-h-[100dvh] w-full max-w-md bg-[#F8FAFC] dark:bg-[#0F172A] sm:shadow-[0_0_50px_rgba(15,23,42,0.12)] dark:sm:shadow-[0_0_50px_rgba(0,0,0,0.6)] transition-colors duration-200 overflow-x-clip">
        {/* Non-intrusive Offline Banner (when outside chat) */}
        {!isOnline && !isChatOpen && (
          <div className="flex items-center justify-center gap-2 bg-amber-500 px-4 py-1.5 text-[11px] font-semibold text-white">
            <WifiOff className="h-3.5 w-3.5 shrink-0" />
            <span>Mode Offline — Jadwal, kisi-kisi & latihan tetap siap digunakan</span>
          </div>
        )}

        {needsOnboarding ? (
          <OnboardingView
            initialClass={settings.studentClass}
            onComplete={(name, cls) => {
              completeOnboarding(name, cls);
              setActiveTab('home');
              window.scrollTo({ top: 0 });
            }}
          />
        ) : isChatOpen ? (
          <ChatView
            settings={settings}
            messages={chatMessages}
            pendingPrompt={pendingChatPrompt}
            focusSubjectId={chatFocusSubjectId}
            onConsumePendingPrompt={handleConsumePendingPrompt}
            onAppendMessage={appendChatMessage}
            onClearChat={clearChat}
            onBack={() => setIsChatOpen(false)}
            onOpenSubjectMaterial={(subjectId) =>
              handleNavigateLearn('materi', subjectId)
            }
          />
        ) : (
          <>
            <main>
              {activeTab === 'home' && (
                <HomeView
                  settings={settings}
                  selectedSubjectId={selectedSubjectId}
                  onSelectSubject={setSelectedSubjectId}
                  quizHistory={quizHistory}
                  onToggleTheme={toggleTheme}
                  onNavigateLearn={handleNavigateLearn}
                  onOpenChat={handleOpenChat}
                />
              )}

              {activeTab === 'learn' && (
                <LearnView
                  studentClass={settings.studentClass}
                  activeSubTab={learnSubTab}
                  onChangeSubTab={setLearnSubTab}
                  focusSubjectId={learnFocusSubjectId}
                  autoStartQuizSubjectId={autoStartQuizSubjectId}
                  onConsumeAutoStart={handleConsumeAutoStart}
                  textSize={settings.textSize}
                  soundEnabled={settings.soundEnabled}
                  quizHistory={quizHistory}
                  onCompleteQuiz={recordQuizAttempt}
                  onAskPipo={(prompt, subjectId) =>
                    handleOpenChat(prompt, subjectId)
                  }
                />
              )}

              {activeTab === 'progress' && (
                <ProgressView
                  settings={settings}
                  quizHistory={quizHistory}
                  onNavigateLearn={handleNavigateLearn}
                />
              )}

              {activeTab === 'settings' && (
                <SettingsView
                  settings={settings}
                  quizCount={quizHistory.length}
                  onUpdateSettings={updateSettings}
                  onResetProgress={resetProgress}
                  onLogout={() => {
                    logout();
                    setActiveTab('home');
                  }}
                />
              )}
            </main>

            <BottomNav
              activeTab={activeTab}
              onSelectTab={handleSelectMainTab}
              onOpenChat={() =>
                handleOpenChat(
                  undefined,
                  selectedSubjectId !== 'all' ? selectedSubjectId : undefined
                )
              }
            />
          </>
        )}
      </div>
    </div>
  );
}
