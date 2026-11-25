import { useCallback, useEffect, useState } from 'react';
import { ASSESSMENT_INFO, TARGET_CLASSES, TargetClass } from '../data/assessmentData';

export type ThemeMode = 'light' | 'dark';
export type TextSizeMode = 'normal' | 'large';

export interface UserSettings {
  studentName: string;
  studentClass: TargetClass;
  hasOnboarded: boolean;
  theme: ThemeMode;
  textSize: TextSizeMode;
  soundEnabled: boolean;
}

export interface QuizAttempt {
  id: string;
  subjectId: string;
  score: number;
  correctCount: number;
  totalQuestions: number;
  completedAt: string;
  wrongTopics: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'pipo';
  text: string;
  timestamp: string;
  relatedSubjectId?: string;
  isError?: boolean;
}

const SETTINGS_KEY = 'sipesat_settings_v2';
const HISTORY_KEY = 'sipesat_quiz_history_v1';
const LEGACY_HISTORY_KEY = 'siapsumatif_quiz_history_v1';
const CHAT_KEY = 'sipesat_chat_v1';

const DEFAULT_SETTINGS: UserSettings = {
  studentName: '',
  studentClass: ASSESSMENT_INFO.defaultStudentClass,
  hasOnboarded: false,
  theme: 'light',
  textSize: 'normal',
  soundEnabled: true,
};

function normalizeTargetClass(value: unknown): TargetClass {
  if (value === 'Kelas 6' || value === 'Kelas 6A' || value === '6') {
    return 'Kelas 6';
  }
  return TARGET_CLASSES[0];
}

function safeReadSettings(): UserSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const raw = window.localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw) as Partial<UserSettings> & { studentClass?: unknown };
    const studentName = typeof parsed.studentName === 'string' ? parsed.studentName : '';
    const hasOnboarded = Boolean(parsed.hasOnboarded) && studentName.trim().length > 0;
    return {
      ...DEFAULT_SETTINGS,
      ...parsed,
      studentName,
      hasOnboarded,
      studentClass: normalizeTargetClass(parsed.studentClass),
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

function safeReadStorage<T>(key: string, legacyKey: string | null, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw =
      window.localStorage.getItem(key) ||
      (legacyKey ? window.localStorage.getItem(legacyKey) : null);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function safeWriteStorage<T>(key: string, value: T) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore quota or private-mode errors
  }
}

export function useAppState() {
  const [settings, setSettings] = useState<UserSettings>(safeReadSettings);

  const [quizHistory, setQuizHistory] = useState<QuizAttempt[]>(() =>
    safeReadStorage<QuizAttempt[]>(HISTORY_KEY, LEGACY_HISTORY_KEY, [])
  );

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() =>
    safeReadStorage<ChatMessage[]>(CHAT_KEY, 'siapsumatif_chat_v1', [])
  );

  const needsOnboarding = !settings.hasOnboarded || settings.studentName.trim().length === 0;

  useEffect(() => {
    const root = document.documentElement;
    if (settings.theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute(
        'content',
        settings.theme === 'dark' ? '#0F172A' : '#0066FF'
      );
    }
    if (settings.hasOnboarded && settings.studentName.trim().length > 0) {
      safeWriteStorage(SETTINGS_KEY, settings);
    }
  }, [settings]);

  useEffect(() => {
    safeWriteStorage(HISTORY_KEY, quizHistory);
  }, [quizHistory]);

  useEffect(() => {
    safeWriteStorage(CHAT_KEY, chatMessages);
  }, [chatMessages]);

  const completeOnboarding = useCallback((name: string, studentClass: TargetClass) => {
    const cleanedName = name.trim();
    if (!cleanedName) return;
    setSettings((prev) => {
      const next: UserSettings = {
        ...prev,
        studentName: cleanedName,
        studentClass: normalizeTargetClass(studentClass),
        hasOnboarded: true,
      };
      safeWriteStorage(SETTINGS_KEY, next);
      return next;
    });
  }, []);

  const logout = useCallback(() => {
    setSettings((prev) => {
      const next: UserSettings = {
        ...prev,
        studentName: '',
        hasOnboarded: false,
      };
      safeWriteStorage(SETTINGS_KEY, next);
      return next;
    });
  }, []);

  const updateSettings = useCallback((patch: Partial<UserSettings>) => {
    setSettings((prev) => {
      const next: UserSettings = {
        ...prev,
        ...patch,
        studentClass:
          patch.studentClass !== undefined
            ? normalizeTargetClass(patch.studentClass)
            : prev.studentClass,
      };
      safeWriteStorage(SETTINGS_KEY, next);
      return next;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setSettings((prev) => {
      const next: UserSettings = {
        ...prev,
        theme: prev.theme === 'dark' ? 'light' : 'dark',
      };
      if (next.hasOnboarded && next.studentName.trim().length > 0) {
        safeWriteStorage(SETTINGS_KEY, next);
      }
      return next;
    });
  }, []);

  const recordQuizAttempt = useCallback((attempt: Omit<QuizAttempt, 'id' | 'completedAt'>) => {
    const newEntry: QuizAttempt = {
      ...attempt,
      id: `att-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      completedAt: new Date().toISOString(),
    };
    setQuizHistory((prev) => [...prev, newEntry]);
    return newEntry;
  }, []);

  const resetProgress = useCallback(() => {
    setQuizHistory([]);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(HISTORY_KEY);
        window.localStorage.removeItem(LEGACY_HISTORY_KEY);
      } catch {
        // ignore
      }
    }
  }, []);

  const appendChatMessage = useCallback((msg: ChatMessage) => {
    setChatMessages((prev) => [...prev, msg]);
  }, []);

  const clearChat = useCallback(() => {
    setChatMessages([]);
  }, []);

  return {
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
  };
}
