import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowUp,
  BookOpen,
  ChevronRight,
  Trash2,
  WifiOff,
  AlertCircle,
} from 'lucide-react';
import {
  ASSESSMENT_INFO,
  formatIndonesianDate,
  getSubjectById,
  getSubjectContentForClass,
} from '../data/assessmentData';
import { ChatMessage, UserSettings } from '../hooks/useAppState';
import { useOnlineStatus } from '../hooks/usePWAInstall';
import { PipoMascot } from './PipoMascot';

interface ChatViewProps {
  settings: UserSettings;
  messages: ChatMessage[];
  pendingPrompt: string | null;
  focusSubjectId?: string;
  onConsumePendingPrompt: () => void;
  onAppendMessage: (msg: ChatMessage) => void;
  onClearChat: () => void;
  onBack: () => void;
  onOpenSubjectMaterial: (subjectId: string) => void;
}

function renderFormattedLine(line: string, lineKey: number) {
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span key={lineKey} className="block min-h-[0.75em]">
      {parts.map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
          return (
            <strong key={idx} className="font-bold text-slate-900 dark:text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}
    </span>
  );
}

export const ChatView: React.FC<ChatViewProps> = ({
  settings,
  messages,
  pendingPrompt,
  focusSubjectId,
  onConsumePendingPrompt,
  onAppendMessage,
  onClearChat,
  onBack,
  onOpenSubjectMaterial,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isOnline = useOnlineStatus();
  const scrollEndRef = useRef<HTMLDivElement>(null);
  const sentPendingRef = useRef<string | null>(null);

  const isLarge = settings.textSize === 'large';
  const bubbleTextClass = isLarge ? 'text-[16px] leading-relaxed' : 'text-[13.5px] leading-relaxed';

  useEffect(() => {
    scrollEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  async function sendMessage(rawText: string) {
    const trimmed = rawText.trim();
    if (!trimmed || isLoading) return;

    const nowTime = new Date().toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      text: trimmed,
      timestamp: nowTime,
    };

    const historySnapshot = messages
      .filter((m) => !m.isError)
      .slice(-10)
      .map((m) => ({ role: m.role, text: m.text }));

    onAppendMessage(userMsg);
    setInputValue('');

    if (!navigator.onLine) {
      onAppendMessage({
        id: `p-off-${Date.now()}`,
        role: 'pipo',
        text: 'Sepertinya koneksi internetmu sedang terputus. Sambungkan internet dulu ya untuk ngobrol dengan Pipo, atau kamu tetap bisa baca kisi-kisi dan latihan soal secara offline!',
        timestamp: nowTime,
        isError: true,
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: historySnapshot,
          studentName: settings.studentName,
          studentClass: settings.studentClass,
          focusSubjectId: focusSubjectId !== 'all' ? focusSubjectId : undefined,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        reply?: string;
        relatedSubjectId?: string;
        error?: string;
      };

      const replyTime = new Date().toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
      });

      if (!response.ok || !data.reply) {
        onAppendMessage({
          id: `p-err-${Date.now()}`,
          role: 'pipo',
          text:
            data.error ||
            'Maaf, Pipo belum berhasil terhubung ke server AI saat ini. Coba kirim ulang sebentar lagi ya.',
          timestamp: replyTime,
          isError: true,
        });
      } else {
        onAppendMessage({
          id: `p-${Date.now()}`,
          role: 'pipo',
          text: data.reply,
          timestamp: replyTime,
          relatedSubjectId: data.relatedSubjectId,
        });
      }
    } catch {
      onAppendMessage({
        id: `p-net-${Date.now()}`,
        role: 'pipo',
        text: 'Koneksi sedang tidak stabil. Pastikan internet aktif lalu coba tanya Pipo lagi ya!',
        timestamp: new Date().toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        isError: true,
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (pendingPrompt && sentPendingRef.current !== pendingPrompt) {
      sentPendingRef.current = pendingPrompt;
      onConsumePendingPrompt();
      void sendMessage(pendingPrompt);
    }
  }, [pendingPrompt]);

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    void sendMessage(inputValue);
  }

  const todayHeader = formatIndonesianDate(new Date());

  return (
    <div className="flex h-[100dvh] flex-col bg-[#F8FAFC] dark:bg-[#0F172A]">
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-200/70 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-2.5 min-w-0">
          <button
            type="button"
            onClick={onBack}
            aria-label="Kembali"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <PipoMascot mood="avatar" size={38} alt="Avatar Pipo" className="shrink-0" />

          <div className="min-w-0">
            <h1 className="text-sm font-extrabold text-slate-900 dark:text-white truncate">
              Tanya Pipo
            </h1>
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
              Teman belajar {settings.studentClass}
            </p>
          </div>
        </div>

        {messages.length > 0 && (
          <button
            type="button"
            onClick={onClearChat}
            aria-label="Bersihkan percakapan"
            title="Mulai obrolan baru"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        )}
      </header>

      {!isOnline && (
        <div className="flex items-center justify-center gap-2 bg-amber-50 dark:bg-amber-950/60 px-4 py-2 text-xs font-medium text-amber-800 dark:text-amber-300 border-b border-amber-200/60 dark:border-amber-900/60">
          <WifiOff className="h-3.5 w-3.5 shrink-0" />
          <span>Mode offline — Chat AI butuh internet untuk membalas.</span>
        </div>
      )}

      <main className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        <div className="text-center text-[11px] font-medium text-slate-400 dark:text-slate-500">
          {todayHeader}
        </div>

        {messages.length === 0 && (
          <div className="flex flex-col items-center pt-4 pb-2 text-center">
            <PipoMascot mood="wave" size={114} alt="Pipo menyapa di chat" />
            <h2 className="mt-3 text-base font-extrabold text-slate-900 dark:text-white">
              Hai {settings.studentName}! Ada yang bikin bingung?
            </h2>
            <p className="mt-1 max-w-[290px] text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Tanyakan materi dari 11 mapel sumatif {settings.studentClass}. Pipo siap bantu jelasin dari kisi-kisi!
            </p>

            <div className="mt-6 w-full space-y-2.5">
              <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                Coba mulai dengan pertanyaan cepat:
              </p>
              {ASSESSMENT_INFO.pipoQuickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => void sendMessage(prompt)}
                  className="flex min-h-[46px] w-full items-center justify-between gap-2 rounded-2xl bg-white dark:bg-slate-900 px-4 py-3 text-left text-xs font-semibold text-slate-800 dark:text-slate-100 shadow-[0_2px_12px_rgba(15,23,42,0.05)] ring-1 ring-slate-200/70 dark:ring-slate-800 transition-all hover:ring-[#0066FF]/50 active:scale-[0.99]"
                >
                  <span>{prompt}</span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-[#0066FF]" />
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => {
          if (msg.role === 'user') {
            return (
              <div key={msg.id} className="flex justify-end">
                <div className="max-w-[82%] rounded-2xl rounded-br-md bg-[#1F2937] dark:bg-[#0066FF] px-4 py-3 text-white shadow-sm">
                  <p className={`whitespace-pre-wrap ${bubbleTextClass}`}>{msg.text}</p>
                </div>
              </div>
            );
          }

          const relatedSubject = msg.relatedSubjectId
            ? getSubjectById(msg.relatedSubjectId)
            : undefined;

          return (
            <div key={msg.id} className="flex items-end gap-2">
              <PipoMascot
                mood="avatar"
                size={28}
                alt="Pipo"
                className="shrink-0 mb-0.5"
              />
              <div
                className={`max-w-[84%] rounded-2xl rounded-bl-md px-4 py-3 shadow-[0_3px_14px_rgba(15,23,42,0.05)] dark:shadow-[0_3px_14px_rgba(0,0,0,0.3)] ${
                  msg.isError
                    ? 'bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-200 ring-1 ring-rose-200 dark:ring-rose-900'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 ring-1 ring-slate-100 dark:ring-slate-800'
                }`}
              >
                {msg.isError && (
                  <div className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-rose-700 dark:text-rose-300">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>Kendala Koneksi</span>
                  </div>
                )}

                <div className={`space-y-1 ${bubbleTextClass}`}>
                  {msg.text.split('\n').map((line, idx) => renderFormattedLine(line, idx))}
                </div>

                {relatedSubject && !msg.isError && (() => {
                  const relatedContent = getSubjectContentForClass(
                    relatedSubject,
                    settings.studentClass
                  );
                  return (
                    <button
                      type="button"
                      onClick={() => onOpenSubjectMaterial(relatedSubject.id)}
                      className="mt-3 flex w-full items-center justify-between gap-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 px-3.5 py-2.5 text-left transition-colors hover:bg-sky-50 dark:hover:bg-slate-800"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <BookOpen className="h-4 w-4 shrink-0 text-[#0066FF] dark:text-sky-400" />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                            Lihat materi {relatedSubject.name}
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                            {relatedContent.isUnavailable
                              ? 'Kisi-kisi & materi belum tersedia'
                              : `${relatedContent.kisiKisi.length} kisi-kisi & ringkasan inti`}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                    </button>
                  );
                })()}
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-end gap-2">
            <PipoMascot mood="avatar" size={28} alt="Pipo sedang berpikir" className="shrink-0 mb-0.5" />
            <div className="rounded-2xl rounded-bl-md bg-white dark:bg-slate-900 px-4 py-3.5 shadow-sm ring-1 ring-slate-100 dark:ring-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#0066FF]/70 animate-bounce [animation-delay:-0.2s]" />
                <span className="h-2 w-2 rounded-full bg-[#0066FF]/70 animate-bounce [animation-delay:-0.1s]" />
                <span className="h-2 w-2 rounded-full bg-[#0066FF]/70 animate-bounce" />
              </div>
            </div>
          </div>
        )}

        <div ref={scrollEndRef} />
      </main>

      <footer className="shrink-0 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC] to-transparent dark:from-[#0F172A] dark:via-[#0F172A] px-4 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <form
          onSubmit={handleFormSubmit}
          className="flex items-center gap-2 rounded-full bg-white dark:bg-slate-900 p-1.5 pl-4 shadow-[0_6px_24px_rgba(15,23,42,0.08)] dark:shadow-[0_6px_24px_rgba(0,0,0,0.4)] ring-1 ring-slate-200/80 dark:ring-slate-800"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Tanya materi atau minta latihan soal..."
            disabled={isLoading}
            className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            aria-label="Kirim pesan"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1F2937] dark:bg-[#0066FF] text-white transition-all disabled:opacity-40 active:scale-95"
          >
            <ArrowUp className="h-5 w-5" strokeWidth={2.4} />
          </button>
        </form>
        <p className="mt-2 text-center text-[10.5px] font-medium text-slate-400 dark:text-slate-500">
          Tanyakan apapun soal materi asesmenmu ke Pipo
        </p>
      </footer>
    </div>
  );
};
