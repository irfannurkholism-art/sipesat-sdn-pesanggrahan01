import React, { useEffect, useMemo, useState } from 'react';
import {
  Moon,
  Sun,
  Calculator,
  BookOpen,
  Leaf,
  ClipboardList,
  PenTool,
  CalendarDays,
  FileText,
  Clock,
  ChevronRight,
  Layers,
  MoonStar,
  Shield,
  Palette,
  Activity,
  Sprout,
  Languages,
  Cpu,
  ScrollText,
} from 'lucide-react';
import {
  SUBJECTS,
  SubjectIconKey,
  formatIndonesianDate,
  getEnrichedSchedule,
  getSubjectContentForClass,
} from '../data/assessmentData';
import { QuizAttempt, UserSettings } from '../hooks/useAppState';
import { PipoMascot } from './PipoMascot';
import type { LearnSubTab } from './LearnView';

interface HomeViewProps {
  settings: UserSettings;
  selectedSubjectId: string;
  onSelectSubject: (subjectId: string) => void;
  quizHistory: QuizAttempt[];
  onToggleTheme: () => void;
  onNavigateLearn: (subTab: LearnSubTab, subjectId?: string, startQuizNow?: boolean) => void;
  onOpenChat: (initialPrompt?: string, subjectId?: string) => void;
}

export function SubjectIcon({
  icon,
  className = 'h-4 w-4',
}: {
  icon: SubjectIconKey;
  className?: string;
}) {
  switch (icon) {
    case 'moon-star':
      return <MoonStar className={className} />;
    case 'shield':
      return <Shield className={className} />;
    case 'book':
      return <BookOpen className={className} />;
    case 'palette':
      return <Palette className={className} />;
    case 'calculator':
      return <Calculator className={className} />;
    case 'activity':
      return <Activity className={className} />;
    case 'leaf':
      return <Leaf className={className} />;
    case 'sprout':
      return <Sprout className={className} />;
    case 'languages':
      return <Languages className={className} />;
    case 'cpu':
      return <Cpu className={className} />;
    case 'scroll':
      return <ScrollText className={className} />;
    default:
      return <BookOpen className={className} />;
  }
}

export const HomeView: React.FC<HomeViewProps> = ({
  settings,
  selectedSubjectId,
  onSelectSubject,
  quizHistory,
  onToggleTheme,
  onNavigateLearn,
  onOpenChat,
}) => {
  const [now, setNow] = useState<Date>(() => new Date());

  // Keep countdown synced with real clock every 30 seconds
  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 30000);
    return () => window.clearInterval(timer);
  }, []);

  const todayFormatted = useMemo(() => formatIndonesianDate(now), [now]);
  const enrichedSchedule = useMemo(() => getEnrichedSchedule(now), [now]);

  // Automatically pick the nearest upcoming (or ongoing) exam matching selected subject filter
  const highlightExam = useMemo(() => {
    const filtered =
      selectedSubjectId === 'all'
        ? enrichedSchedule
        : enrichedSchedule.filter((s) => s.subjectId === selectedSubjectId);

    const nextActive = filtered.find((s) => s.status !== 'done');
    return nextActive ?? filtered[filtered.length - 1] ?? enrichedSchedule[0];
  }, [enrichedSchedule, selectedSubjectId]);

  const availableSubjectsCount = useMemo(
    () =>
      SUBJECTS.filter(
        (s) => !getSubjectContentForClass(s, settings.studentClass).isUnavailable
      ).length,
    [settings.studentClass]
  );

  const highlightContent = useMemo(
    () => getSubjectContentForClass(highlightExam.subject, settings.studentClass),
    [highlightExam.subject, settings.studentClass]
  );

  const isHighlightUnavailable = Boolean(
    highlightContent.isUnavailable || highlightContent.latihanSoal.length === 0
  );

  const readinessStats = useMemo(() => {
    if (selectedSubjectId !== 'all' && isHighlightUnavailable) {
      return {
        label: 'Kisi-kisi & soal belum tersedia',
      };
    }

    const relevantAttempts =
      selectedSubjectId === 'all'
        ? quizHistory
        : quizHistory.filter((q) => q.subjectId === selectedSubjectId);

    if (relevantAttempts.length === 0) {
      return {
        label: 'Belum ada latihan selesai',
      };
    }

    const avg = Math.round(
      relevantAttempts.reduce((acc, item) => acc + item.score, 0) /
        relevantAttempts.length
    );
    const completedSubjects = new Set(quizHistory.map((q) => q.subjectId)).size;
    return {
      label: `Rata-rata ${avg} · ${completedSubjects}/${availableSubjectsCount} mapel`,
    };
  }, [quizHistory, selectedSubjectId, availableSubjectsCount, isHighlightUnavailable]);

  const targetSubjectId =
    selectedSubjectId === 'all'
      ? highlightExam?.subjectId ?? SUBJECTS[0].id
      : selectedSubjectId;

  const quickMenuItems: {
    id: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    bg: string;
    color: string;
    action: () => void;
  }[] = [
    {
      id: 'kisi',
      label: 'Kisi-kisi',
      icon: ClipboardList,
      bg: 'bg-sky-50 dark:bg-sky-950/60',
      color: 'text-[#0066FF] dark:text-sky-400',
      action: () => onNavigateLearn('materi', targetSubjectId),
    },
    {
      id: 'latihan',
      label: 'Latihan',
      icon: PenTool,
      bg: 'bg-emerald-50 dark:bg-emerald-950/60',
      color: 'text-emerald-600 dark:text-emerald-400',
      action: () => onNavigateLearn('latihan', targetSubjectId),
    },
    {
      id: 'jadwal',
      label: 'Jadwal',
      icon: CalendarDays,
      bg: 'bg-amber-50 dark:bg-amber-950/60',
      color: 'text-amber-600 dark:text-amber-400',
      action: () => onNavigateLearn('jadwal', targetSubjectId),
    },
    {
      id: 'ringkasan',
      label: 'Ringkasan',
      icon: FileText,
      bg: 'bg-indigo-50 dark:bg-indigo-950/60',
      color: 'text-indigo-600 dark:text-indigo-400',
      action: () => onNavigateLearn('materi', targetSubjectId),
    },
  ];

  return (
    <div className="space-y-5 px-5 pt-6 pb-28">
      {/* Header Greeting with Class Badge & Quick Theme Switch */}
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-[22px] font-extrabold tracking-tight text-slate-900 dark:text-white truncate">
              Halo, {settings.studentName}!
            </h1>
            <span className="inline-flex items-center rounded-full bg-[#EBF3FF] dark:bg-[#0066FF]/20 px-2.5 py-0.5 text-[11px] font-bold text-[#0066FF] dark:text-sky-300 whitespace-nowrap shrink-0">
              {settings.studentClass}
            </span>
          </div>
          <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
            {todayFormatted}
          </p>
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={
            settings.theme === 'dark'
              ? 'Ganti ke Mode Terang'
              : 'Ganti ke Mode Gelap'
          }
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-amber-300 shadow-[0_2px_10px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 dark:ring-slate-700 transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]"
        >
          {settings.theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
      </header>

      {/* Horizontal Subject Quick Filter Pills (All 11 Official Subjects) */}
      <div
        className="no-scrollbar -mx-5 flex items-center gap-2 overflow-x-auto px-5 py-1.5"
        role="tablist"
        aria-label="Filter mata pelajaran"
      >
        <button
          type="button"
          role="tab"
          aria-selected={selectedSubjectId === 'all'}
          onClick={() => onSelectSubject('all')}
          className={`flex min-h-[40px] items-center gap-1.5 rounded-full px-4 text-xs font-semibold transition-all duration-150 active:scale-95 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] ${
            selectedSubjectId === 'all'
              ? 'bg-[#1F2937] dark:bg-[#0066FF] text-white shadow-sm'
              : 'bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 ring-1 ring-slate-200/80 dark:ring-slate-700/80'
          }`}
        >
          <Layers className="h-3.5 w-3.5" />
          <span>Semua Mapel</span>
        </button>

        {SUBJECTS.map((subj) => {
          const isActive = selectedSubjectId === subj.id;
          return (
            <button
              key={subj.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectSubject(subj.id)}
              className={`flex min-h-[40px] items-center gap-1.5 rounded-full px-4 text-xs font-semibold transition-all duration-150 active:scale-95 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] ${
                isActive
                  ? 'bg-[#1F2937] dark:bg-[#0066FF] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 ring-1 ring-slate-200/80 dark:ring-slate-700/80'
              }`}
            >
              <SubjectIcon icon={subj.icon} className="h-3.5 w-3.5" />
              <span>{subj.shortName}</span>
            </button>
          );
        })}
      </div>

      {/* Highlight Reminder Card with Pipo Mascot & Date+Time Countdown */}
      <section aria-label="Pengingat asesmen terdekat" className="flex items-center gap-3">
        <div className="shrink-0 -ml-1">
          <PipoMascot mood="study" size={102} alt="Pipo membawa catatan jadwal" />
        </div>

        <div className="min-w-0 flex-1 rounded-3xl bg-white dark:bg-slate-900 p-4 shadow-[0_6px_24px_rgba(15,23,42,0.06)] dark:shadow-[0_6px_24px_rgba(0,0,0,0.3)] ring-1 ring-slate-100 dark:ring-slate-800">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            <span className="tabular-nums">{highlightExam.countdownHeadline}</span>
          </div>

          <p className="mt-1.5 text-sm leading-snug text-slate-700 dark:text-slate-200">
            Asesmen{' '}
            <strong className="font-bold text-slate-900 dark:text-white">
              {highlightExam.subject.name}
            </strong>{' '}
            pada{' '}
            <span className="font-semibold text-slate-900 dark:text-white tabular-nums">
              {highlightExam.formattedDayDate}
            </span>
            , jam{' '}
            <span className="font-semibold tabular-nums">
              {highlightExam.startTime}–{highlightExam.endTime}
            </span>
            .
          </p>

          {isHighlightUnavailable ? (
            <button
              type="button"
              onClick={() => onNavigateLearn('materi', highlightExam.subjectId)}
              className="mt-3.5 flex min-h-[42px] w-full items-center justify-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300 transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]"
            >
              <ClipboardList className="h-3.5 w-3.5" />
              <span>Kisi-kisi Belum Tersedia</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onNavigateLearn('latihan', highlightExam.subjectId, true)}
              className="mt-3.5 flex min-h-[42px] w-full items-center justify-center gap-2 rounded-full bg-[#1F2937] dark:bg-[#0066FF] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]"
            >
              <PenTool className="h-3.5 w-3.5" />
              <span>Mulai Latihan</span>
            </button>
          )}
        </div>
      </section>

      {/* Clean Single-Line Readiness Row */}
      <div className="flex items-center justify-between px-1 text-xs">
        <span className="font-medium text-slate-500 dark:text-slate-400">
          Kesiapan {selectedSubjectId === 'all' ? 'Sumatif' : highlightExam.subject.shortName}
        </span>
        <span className="font-bold text-slate-900 dark:text-slate-100 tabular-nums">
          {readinessStats.label}
        </span>
      </div>

      {/* Quick Menu 4-Icon Grid Card */}
      <section
        aria-label="Menu cepat belajar"
        className="rounded-3xl bg-white dark:bg-slate-900 p-4 shadow-[0_6px_24px_rgba(15,23,42,0.05)] dark:shadow-[0_6px_24px_rgba(0,0,0,0.3)] ring-1 ring-slate-100 dark:ring-slate-800"
      >
        <div className="grid grid-cols-4 gap-2">
          {quickMenuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={item.action}
                className="group flex flex-col items-center gap-2 rounded-2xl py-2 transition-all duration-150 hover:bg-slate-50 dark:hover:bg-slate-800/60 active:scale-90 active:bg-slate-100 dark:active:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg} ${item.color} transition-transform duration-150 group-hover:scale-105`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Bottom Tanya Pipo Invitation Card */}
      <section
        aria-label="Ajakan tanya Pipo"
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#EAF3FF] via-[#EFF6FF] to-[#DBEAFE] dark:from-slate-900 dark:via-slate-900 dark:to-sky-950/60 p-5 ring-1 ring-sky-200/70 dark:ring-slate-800"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-extrabold leading-snug text-slate-900 dark:text-white text-balance">
              Ada materi yang bikin bingung?
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              Tanya Pipo yuk! Pipo siap bantu jelasin kisi-kisi dengan bahasa sederhana.
            </p>
            <button
              type="button"
              onClick={() => onOpenChat(undefined, targetSubjectId)}
              className="mt-4 inline-flex min-h-[42px] items-center gap-1.5 rounded-full bg-white dark:bg-[#0066FF] px-4 py-2 text-xs font-bold text-[#0066FF] dark:text-white shadow-sm ring-1 ring-sky-200/80 dark:ring-transparent transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]"
            >
              <span>Tanya Pipo</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="shrink-0 -mr-2 -mb-3">
            <PipoMascot mood="wave" size={96} alt="Pipo melambaikan tangan" />
          </div>
        </div>
      </section>
    </div>
  );
};
