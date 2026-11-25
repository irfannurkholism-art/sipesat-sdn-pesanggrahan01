import React, { useEffect, useMemo, useState } from 'react';
import {
  CalendarDays,
  Clock,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowLeft,
  MessageCircle,
  Lightbulb,
  BookMarked,
  Award,
} from 'lucide-react';
import {
  QuizQuestion,
  SUBJECTS,
  SubjectClassContent,
  SubjectData,
  TargetClass,
  getEnrichedSchedule,
  getSubjectById,
  getSubjectContentForClass,
  getTpPacketsForContent,
} from '../data/assessmentData';
import { QuizAttempt, TextSizeMode } from '../hooks/useAppState';
import {
  playCorrectSound,
  playFinishSound,
  playWrongSound,
} from '../utils/sound';
import { PipoMascot } from './PipoMascot';
import { SubjectIcon } from './HomeView';

export type LearnSubTab = 'jadwal' | 'materi' | 'latihan';

interface LearnViewProps {
  studentClass: TargetClass;
  activeSubTab: LearnSubTab;
  onChangeSubTab: (tab: LearnSubTab) => void;
  focusSubjectId?: string;
  autoStartQuizSubjectId?: string | null;
  onConsumeAutoStart: () => void;
  textSize: TextSizeMode;
  soundEnabled: boolean;
  quizHistory: QuizAttempt[];
  onCompleteQuiz: (attempt: Omit<QuizAttempt, 'id' | 'completedAt'>) => void;
  onAskPipo: (prompt: string, subjectId?: string) => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

export const LearnView: React.FC<LearnViewProps> = ({
  studentClass,
  activeSubTab,
  onChangeSubTab,
  focusSubjectId,
  autoStartQuizSubjectId,
  onConsumeAutoStart,
  textSize,
  soundEnabled,
  quizHistory,
  onCompleteQuiz,
  onAskPipo,
}) => {
  const schedule = useMemo(() => getEnrichedSchedule(), []);

  // Accordion open state for Kisi-kisi & Materi
  const [expandedSubjectId, setExpandedSubjectId] = useState<string>(
    focusSubjectId && focusSubjectId !== 'all' ? focusSubjectId : SUBJECTS[0].id
  );

  // Active quiz state
  const [activeQuizSubject, setActiveQuizSubject] = useState<SubjectData | null>(null);
  const [activeQuizContent, setActiveQuizContent] = useState<SubjectClassContent | null>(null);
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<QuizQuestion[]>([]);
  const [activeQuizTpFilter, setActiveQuizTpFilter] = useState<string | undefined>(undefined);
  const [activeQuizPacketLabel, setActiveQuizPacketLabel] = useState<string>('Paket Lengkap');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongTopics, setWrongTopics] = useState<string[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (focusSubjectId && focusSubjectId !== 'all') {
      setExpandedSubjectId(focusSubjectId);
    }
  }, [focusSubjectId]);

  useEffect(() => {
    if (autoStartQuizSubjectId) {
      const subj = getSubjectById(autoStartQuizSubjectId) ?? SUBJECTS[0];
      startQuiz(subj);
      onConsumeAutoStart();
    }
  }, [autoStartQuizSubjectId, onConsumeAutoStart]);

  const isLarge = textSize === 'large';
  const bodySizeClass = isLarge ? 'text-[17px] leading-relaxed' : 'text-sm leading-relaxed';
  const questionSizeClass = isLarge
    ? 'text-[19px] leading-relaxed font-bold'
    : 'text-[16px] leading-snug font-bold';
  const optionSizeClass = isLarge ? 'text-[16px] leading-snug' : 'text-sm leading-snug';
  const subTextSizeClass = isLarge ? 'text-[15px] leading-relaxed' : 'text-xs leading-relaxed';

  function startQuiz(subject: SubjectData, tpFilter?: string) {
    const content = getSubjectContentForClass(subject, studentClass);
    if (content.isUnavailable || content.latihanSoal.length === 0) {
      setExpandedSubjectId(subject.id);
      onChangeSubTab('materi');
      return;
    }
    const filtered = tpFilter
      ? content.latihanSoal.filter((q) => q.tp === tpFilter)
      : content.latihanSoal;
    const questions = filtered.length > 0 ? filtered : content.latihanSoal;

    setActiveQuizSubject(subject);
    setActiveQuizContent(content);
    setActiveQuizQuestions(questions);
    setActiveQuizTpFilter(tpFilter);
    setActiveQuizPacketLabel(
      tpFilter ? `Paket ${tpFilter} (${questions.length} Soal)` : `Paket Lengkap (${questions.length} Soal)`
    );
    setCurrentIndex(0);
    setSelectedOption(null);
    setCorrectCount(0);
    setWrongTopics([]);
    setQuizFinished(false);
    onChangeSubTab('latihan');
  }

  function handleSelectOption(optionIdx: number) {
    if (!activeQuizSubject || activeQuizQuestions.length === 0 || selectedOption !== null) return;
    const question = activeQuizQuestions[currentIndex];
    const isCorrect = optionIdx === question.jawabanBenar;

    setSelectedOption(optionIdx);
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      playCorrectSound(soundEnabled);
    } else {
      setWrongTopics((prev) =>
        prev.includes(question.topik) ? prev : [...prev, question.topik]
      );
      playWrongSound(soundEnabled);
    }
  }

  function handleNextQuestion() {
    if (!activeQuizSubject || activeQuizQuestions.length === 0) return;
    const total = activeQuizQuestions.length;
    if (currentIndex + 1 < total) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      const finalScore = Math.round((correctCount / total) * 100);
      onCompleteQuiz({
        subjectId: activeQuizSubject.id,
        score: finalScore,
        correctCount,
        totalQuestions: total,
        wrongTopics,
      });
      playFinishSound(soundEnabled);
      setQuizFinished(true);
    }
  }

  function exitQuiz() {
    setActiveQuizSubject(null);
    setActiveQuizContent(null);
    setActiveQuizQuestions([]);
    setActiveQuizTpFilter(undefined);
    setQuizFinished(false);
    setSelectedOption(null);
  }

  // Active Interactive Quiz Screen
  if (activeSubTab === 'latihan' && activeQuizSubject && activeQuizContent && activeQuizQuestions.length > 0) {
    const total = activeQuizQuestions.length;

    if (quizFinished) {
      const score = Math.round((correctCount / total) * 100);
      const wrongCount = total - correctCount;
      const isGreat = score >= 80;
      const isGood = score >= 60 && score < 80;

      const pipoMood = isGreat ? 'celebrate' : isGood ? 'happy' : 'encourage';
      const pipoMessage = isGreat
        ? 'Keren banget! Penguasaan materimu sudah mantap. Pertahankan semangat belajarmu ya!'
        : isGood
        ? 'Bagus! Sudah banyak yang benar. Yuk baca sebentar ringkasan materi untuk menyempurnakan nilaimu!'
        : 'Tidak apa-apa, latihan memang tempatnya belajar! Yuk ulangi materinya pelan-pelan bareng Pipo.';

      return (
        <div className="px-5 pt-6 pb-28">
          <div className="rounded-3xl bg-white dark:bg-slate-900 p-6 text-center shadow-[0_8px_28px_rgba(15,23,42,0.06)] dark:shadow-[0_8px_28px_rgba(0,0,0,0.35)] ring-1 ring-slate-100 dark:ring-slate-800">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Hasil Latihan · {activeQuizSubject.name} · {activeQuizPacketLabel}
            </p>

            <div className="mt-4 flex justify-center">
              <PipoMascot mood={pipoMood} size={118} alt="Ekspresi Pipo merayakan hasil kuis" />
            </div>

            <div className="mt-3">
              <div className="text-5xl font-extrabold tracking-tight text-[#0066FF] dark:text-sky-400 tabular-nums">
                {score}
              </div>
              <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                Skor Akhir (Skala 0–100)
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 p-3.5">
                <div className="flex items-center justify-center gap-1.5 text-emerald-700 dark:text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-xs font-semibold">Benar</span>
                </div>
                <div className="mt-1 text-2xl font-extrabold text-emerald-700 dark:text-emerald-300 tabular-nums">
                  {correctCount}
                </div>
              </div>
              <div className="rounded-2xl bg-rose-50 dark:bg-rose-950/50 p-3.5">
                <div className="flex items-center justify-center gap-1.5 text-rose-700 dark:text-rose-300">
                  <XCircle className="h-4 w-4" />
                  <span className="text-xs font-semibold">Salah</span>
                </div>
                <div className="mt-1 text-2xl font-extrabold text-rose-700 dark:text-rose-300 tabular-nums">
                  {wrongCount}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 p-4 text-left">
              <p className={`font-medium text-slate-700 dark:text-slate-200 ${bodySizeClass}`}>
                "{pipoMessage}"
              </p>
            </div>

            {wrongTopics.length > 0 && (
              <button
                type="button"
                onClick={() =>
                  onAskPipo(
                    `Pipo, tadi aku masih salah di soal ${activeQuizSubject.name} bagian ${wrongTopics.join(', ')}. Bisa tolong jelaskan ulang dengan bahasa sederhana?`,
                    activeQuizSubject.id
                  )
                }
                className="mt-4 flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-sky-50 dark:bg-sky-950/60 px-4 text-xs font-bold text-[#0066FF] dark:text-sky-300 transition-colors hover:bg-sky-100 dark:hover:bg-sky-900/60"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Tanya Pipo tentang materi yang salah</span>
              </button>
            )}

            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={exitQuiz}
                className="flex min-h-[48px] flex-1 items-center justify-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800 px-4 text-xs font-bold text-slate-700 dark:text-slate-200 transition-transform active:scale-95"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Kembali</span>
              </button>
              <button
                type="button"
                onClick={() => startQuiz(activeQuizSubject, activeQuizTpFilter)}
                className="flex min-h-[48px] flex-1 items-center justify-center gap-1.5 rounded-full bg-[#1F2937] dark:bg-[#0066FF] px-4 text-xs font-bold text-white shadow-sm transition-transform active:scale-95"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Ulangi Paket</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    const question = activeQuizQuestions[currentIndex];
    const progressPct = Math.round(((currentIndex + 1) / total) * 100);
    const hasAnswered = selectedOption !== null;
    const isRight = selectedOption === question.jawabanBenar;
    const metaLabel = [
      question.tp,
      question.topik,
      question.tingkatKesulitan,
      question.bentukIndikator ? `Adaptasi ${question.bentukIndikator}` : '',
    ]
      .filter(Boolean)
      .join(' · ');

    return (
      <div className="px-5 pt-5 pb-28">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={exitQuiz}
            aria-label="Keluar dari kuis"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-sm ring-1 ring-slate-200/70 dark:ring-slate-700"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="flex-1 text-center min-w-0">
            <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
              {activeQuizSubject.name}
            </p>
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 tabular-nums truncate">
              Soal {currentIndex + 1} dari {total} · {activeQuizTpFilter ?? 'Semua TP'}
            </p>
          </div>

          <div className="w-10 text-right text-xs font-bold text-[#0066FF] dark:text-sky-400 tabular-nums">
            {progressPct}%
          </div>
        </div>

        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800">
          <div
            className="h-full rounded-full bg-[#0066FF] transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <div className="mt-5 rounded-3xl bg-white dark:bg-slate-900 p-5 shadow-[0_6px_24px_rgba(15,23,42,0.06)] dark:shadow-[0_6px_24px_rgba(0,0,0,0.3)] ring-1 ring-slate-100 dark:ring-slate-800">
          <p className="text-xs font-semibold text-[#0066FF] dark:text-sky-400">
            {metaLabel}
          </p>
          <h2 className={`mt-2 whitespace-pre-line text-slate-900 dark:text-white ${questionSizeClass}`}>
            {question.pertanyaan}
          </h2>

          <div className="mt-5 space-y-2.5">
            {question.pilihan.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectChoice = idx === question.jawabanBenar;

              let buttonStyle =
                'bg-slate-50 dark:bg-slate-800/70 text-slate-800 dark:text-slate-100 ring-1 ring-slate-200/80 dark:ring-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800';
              let badgeStyle =
                'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 ring-1 ring-slate-200 dark:ring-slate-700';

              if (hasAnswered) {
                if (isCorrectChoice) {
                  buttonStyle =
                    'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-100 ring-2 ring-emerald-500';
                  badgeStyle = 'bg-emerald-600 text-white';
                } else if (isSelected && !isCorrectChoice) {
                  buttonStyle =
                    'bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-100 ring-2 ring-rose-500';
                  badgeStyle = 'bg-rose-600 text-white';
                } else {
                  buttonStyle =
                    'bg-slate-50/70 dark:bg-slate-800/40 text-slate-400 dark:text-slate-500 ring-1 ring-slate-200/60 dark:ring-slate-800';
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={hasAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`flex min-h-[52px] w-full items-center gap-3 rounded-2xl px-3.5 py-3 text-left transition-all ${buttonStyle}`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${badgeStyle}`}
                  >
                    {OPTION_LETTERS[idx]}
                  </span>
                  <span className={`flex-1 font-medium ${optionSizeClass}`}>
                    {opt}
                  </span>
                  {hasAnswered && isCorrectChoice && (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  )}
                  {hasAnswered && isSelected && !isCorrectChoice && (
                    <XCircle className="h-5 w-5 shrink-0 text-rose-600 dark:text-rose-400" />
                  )}
                </button>
              );
            })}
          </div>

          {hasAnswered && (
            <div
              className={`mt-5 rounded-2xl p-4 ${
                isRight
                  ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-100'
                  : 'bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-100'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-sm">
                {isRight ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Hebat! Jawabanmu Benar</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                    <span>
                      Kurang tepat — Jawaban benar: {OPTION_LETTERS[question.jawabanBenar]}
                    </span>
                  </>
                )}
              </div>
              <p className={`mt-1.5 opacity-95 ${subTextSizeClass}`}>
                <strong className="font-semibold">Pembahasan:</strong> {question.pembahasan}
              </p>
            </div>
          )}

          {hasAnswered && (
            <button
              type="button"
              onClick={handleNextQuestion}
              className="mt-4 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#1F2937] dark:bg-[#0066FF] px-5 text-sm font-bold text-white shadow-sm transition-transform active:scale-[0.98]"
            >
              <span>
                {currentIndex + 1 < total ? 'Soal Berikutnya' : 'Lihat Hasil Latihan'}
              </span>
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5 px-5 pt-6 pb-28">
      <header>
        <h1 className="text-[22px] font-extrabold tracking-tight text-slate-900 dark:text-white">
          Belajar
        </h1>
        <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
          Jadwal, kisi-kisi, ringkasan materi, dan latihan soal
        </p>
      </header>

      {/* 3 Sub-Tabs Segmented Switch */}
      <div
        role="tablist"
        aria-label="Menu halaman belajar"
        className="grid grid-cols-3 gap-1 rounded-2xl bg-slate-200/70 dark:bg-slate-800/80 p-1"
      >
        {(
          [
            { id: 'jadwal', label: 'Jadwal' },
            { id: 'materi', label: 'Kisi & Materi' },
            { id: 'latihan', label: 'Latihan Soal' },
          ] as { id: LearnSubTab; label: string }[]
        ).map((tab) => {
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChangeSubTab(tab.id)}
              className={`min-h-[40px] rounded-xl px-2 text-xs font-bold transition-all duration-150 active:scale-95 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] ${
                isActive
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* TAB 1: JADWAL ASESMEN (11 MAPEL) */}
      {activeSubTab === 'jadwal' && (
        <div className="space-y-3.5">
          {schedule.map((item) => {
            const isToday = item.status === 'today' || item.status === 'ongoing';
            const isDone = item.status === 'done';
            const itemContent = getSubjectContentForClass(item.subject, studentClass);
            const isUnavailable = Boolean(
              itemContent.isUnavailable || itemContent.latihanSoal.length === 0
            );

            return (
              <div
                key={item.id}
                className="rounded-3xl bg-white dark:bg-slate-900 p-4 shadow-[0_4px_20px_rgba(15,23,42,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] ring-1 ring-slate-100 dark:ring-slate-800"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.subject.theme.softBg} ${item.subject.theme.softText}`}
                    >
                      <SubjectIcon icon={item.subject.icon} className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-base font-bold text-slate-900 dark:text-white truncate">
                        {item.subject.name}
                      </h2>
                      <p className="mt-0.5 flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                        <CalendarDays className="h-3.5 w-3.5 shrink-0" />
                        <span>{item.formattedDayDate} 2026</span>
                      </p>
                    </div>
                  </div>

                  <span
                    className={`shrink-0 text-xs font-bold tabular-nums ${
                      isToday
                        ? 'text-[#0066FF] dark:text-sky-400'
                        : isDone
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-amber-600 dark:text-amber-400'
                    }`}
                  >
                    {item.statusLabel}
                  </span>
                </div>

                <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800 pt-3 text-xs text-slate-600 dark:text-slate-300">
                  <span className="inline-flex items-center gap-1.5 font-semibold tabular-nums">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    {item.startTime} – {item.endTime} WIB
                  </span>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500">
                    {item.note}
                  </span>
                </div>

                {isUnavailable ? (
                  <div className="mt-3.5 flex items-center justify-between gap-2 rounded-2xl bg-slate-50 dark:bg-slate-800/70 px-3.5 py-2.5 text-xs">
                    <span className="font-medium text-slate-500 dark:text-slate-400">
                      Kisi-kisi &amp; soal latihan belum tersedia
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        onAskPipo(
                          `Pipo, aku mau tanya konsep dasar olahraga ${item.subject.name} untuk persiapan asesmen.`,
                          item.subjectId
                        )
                      }
                      className="shrink-0 font-bold text-[#0066FF] dark:text-sky-400 transition-transform active:scale-95"
                    >
                      Tanya Pipo
                    </button>
                  </div>
                ) : (
                  <div className="mt-3.5 flex gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setExpandedSubjectId(item.subjectId);
                        onChangeSubTab('materi');
                      }}
                      className="flex min-h-[40px] flex-1 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 px-3 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all duration-150 hover:bg-slate-200/70 dark:hover:bg-slate-700 active:scale-95"
                    >
                      Baca Kisi-kisi
                    </button>
                    <button
                      type="button"
                      onClick={() => startQuiz(item.subject)}
                      className="flex min-h-[40px] flex-1 items-center justify-center rounded-full bg-[#1F2937] dark:bg-[#0066FF] px-3 text-xs font-semibold text-white transition-transform active:scale-95"
                    >
                      Latihan Soal
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 2: KISI-KISI & RINGKASAN MATERI (11 MAPEL) */}
      {activeSubTab === 'materi' && (
        <div className="space-y-3.5">
          {SUBJECTS.map((subj) => {
            const isOpen = expandedSubjectId === subj.id;
            const content = getSubjectContentForClass(subj, studentClass);
            const isUnavailable = Boolean(
              content.isUnavailable ||
                (content.kisiKisi.length === 0 && content.ringkasanMateri.length === 0)
            );
            return (
              <div
                key={subj.id}
                className="overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-[0_4px_20px_rgba(15,23,42,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] ring-1 ring-slate-100 dark:ring-slate-800"
              >
                <button
                  type="button"
                  onClick={() => setExpandedSubjectId(isOpen ? '' : subj.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 p-4 text-left transition-all duration-150 active:bg-slate-50 dark:active:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0066FF]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${subj.theme.softBg} ${subj.theme.softText}`}
                    >
                      <SubjectIcon icon={subj.icon} className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-base font-bold text-slate-900 dark:text-white truncate">
                        {subj.name}
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                        {isUnavailable
                          ? 'Kisi-kisi & materi belum tersedia'
                          : `${content.latihanSoal.length} soal latihan · ${content.kisiKisi.length} kisi-kisi · ${content.ringkasanMateri.length} ringkasan`}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0066FF]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 dark:border-slate-800 px-4 pt-4 pb-5 space-y-5">
                    {isUnavailable ? (
                      <div className="space-y-3.5">
                        <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/70 p-4">
                          <p className={`text-slate-600 dark:text-slate-300 ${bodySizeClass}`}>
                            {content.unavailableNote ??
                              `Kisi-kisi dan ringkasan materi resmi untuk ${subj.name} belum tersedia saat ini.`}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            onAskPipo(
                              `Pipo, aku mau tanya konsep dasar ${subj.name} ${studentClass} untuk persiapan asesmen.`,
                              subj.id
                            )
                          }
                          className="flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 px-4 text-xs font-bold text-[#0066FF] dark:text-sky-300 transition-transform duration-150 active:scale-95"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>Tanya Pipo seputar {subj.shortName}</span>
                        </button>
                      </div>
                    ) : (
                      <>
                        <div>
                          <div className="flex items-center justify-between gap-2 text-xs font-bold text-slate-900 dark:text-white">
                            <div className="flex items-center gap-1.5">
                              <BookMarked className="h-4 w-4 text-[#0066FF]" />
                              <span>Daftar Kisi-kisi Soal ({studentClass})</span>
                            </div>
                            {content.docQuestionCount && (
                              <span className="text-[11px] font-semibold text-[#0066FF] dark:text-sky-400 tabular-nums">
                                Target {content.docQuestionCount} soal
                              </span>
                            )}
                          </div>
                          <ul className="mt-3 divide-y divide-slate-100 dark:divide-slate-800">
                            {content.kisiKisi.map((item, idx) => (
                              <li key={item.id} className="py-2.5 first:pt-0 last:pb-0">
                                <div className="flex items-center justify-between gap-2 text-xs">
                                  <span className="font-bold text-slate-800 dark:text-slate-100">
                                    {idx + 1}. {item.materi}
                                  </span>
                                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 shrink-0">
                                    {item.level}
                                  </span>
                                </div>
                                <p className={`mt-1 text-slate-600 dark:text-slate-300 ${bodySizeClass}`}>
                                  {item.indikator}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                            <Lightbulb className="h-4 w-4 text-amber-500" />
                            <span>Ringkasan Materi Inti</span>
                          </div>
                          <div className="mt-3 space-y-3">
                            {content.ringkasanMateri.map((mat) => (
                              <div
                                key={mat.id}
                                className="rounded-2xl bg-slate-50 dark:bg-slate-800/70 p-4 space-y-2.5"
                              >
                                <h3 className={`font-bold text-slate-900 dark:text-white ${isLarge ? 'text-lg' : 'text-sm'}`}>
                                  {mat.judul}
                                </h3>
                                <ul className={`list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-200 ${bodySizeClass}`}>
                                  {mat.poinPenting.map((poin, idx) => (
                                    <li key={idx}>{poin}</li>
                                  ))}
                                </ul>
                                <p className={`rounded-xl bg-white dark:bg-slate-900/90 px-3 py-2 text-slate-700 dark:text-slate-200 ring-1 ring-slate-200/70 dark:ring-slate-700/70 ${subTextSizeClass}`}>
                                  <strong className="font-semibold text-slate-900 dark:text-white">
                                    Contoh:
                                  </strong>{' '}
                                  {mat.contohSingkat}
                                </p>
                                <p className={`text-[#0066FF] dark:text-sky-400 font-medium ${subTextSizeClass}`}>
                                  Tips Pipo: {mat.tipsPipo}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2.5 pt-1">
                          <button
                            type="button"
                            onClick={() =>
                              onAskPipo(
                                `Pipo, tolong jelaskan ringkasan materi ${subj.name} ${studentClass} dengan contoh mudah dipahami ya!`,
                                subj.id
                              )
                            }
                            className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 px-3 text-xs font-bold text-[#0066FF] dark:text-sky-300 transition-transform duration-150 active:scale-95"
                          >
                            <MessageCircle className="h-4 w-4" />
                            <span>Tanya Pipo</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => startQuiz(subj)}
                            className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-full bg-[#1F2937] dark:bg-[#0066FF] px-3 text-xs font-bold text-white transition-transform duration-150 active:scale-95"
                          >
                            <span>Mulai Latihan</span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 3: PILIHAN PAKET LATIHAN SOAL (11 MAPEL) */}
      {activeSubTab === 'latihan' && (
        <div className="space-y-3.5">
          {SUBJECTS.map((subj) => {
            const content = getSubjectContentForClass(subj, studentClass);
            const isUnavailable = Boolean(
              content.isUnavailable || content.latihanSoal.length === 0
            );
            const tpPackets = isUnavailable ? [] : getTpPacketsForContent(content);
            const subjectAttempts = quizHistory.filter(
              (a) => a.subjectId === subj.id
            );
            const bestScore =
              subjectAttempts.length > 0
                ? Math.max(...subjectAttempts.map((a) => a.score))
                : null;

            return (
              <div
                key={subj.id}
                className="rounded-3xl bg-white dark:bg-slate-900 p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] ring-1 ring-slate-100 dark:ring-slate-800"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${subj.theme.softBg} ${subj.theme.softText}`}
                    >
                      <SubjectIcon icon={subj.icon} className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-base font-bold text-slate-900 dark:text-white truncate">
                        Paket {subj.name}
                      </h2>
                      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                        {isUnavailable
                          ? 'Belum tersedia · Menunggu kisi-kisi resmi'
                          : `${content.latihanSoal.length} soal pilihan ganda · Pembahasan lengkap`}
                      </p>
                    </div>
                  </div>
                </div>

                <p className={`mt-3 text-slate-600 dark:text-slate-300 ${bodySizeClass}`}>
                  {isUnavailable
                    ? content.unavailableNote ?? content.description
                    : content.description}
                </p>

                {isUnavailable ? (
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800 pt-3.5">
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                      Latihan soal belum tersedia
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        onAskPipo(
                          `Pipo, aku mau tanya konsep dasar ${subj.name} ${studentClass} untuk persiapan asesmen.`,
                          subj.id
                        )
                      }
                      className="flex min-h-[40px] shrink-0 items-center gap-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 px-4 text-xs font-bold text-[#0066FF] dark:text-sky-300 transition-transform duration-150 active:scale-95"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Tanya Pipo</span>
                    </button>
                  </div>
                ) : (
                  <>
                    {tpPackets.length > 0 && (
                      <div className="mt-3.5">
                        <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                          Pilih latihan bertahap per Tujuan Pembelajaran (TP):
                        </p>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          {tpPackets.map((pkt) => (
                            <button
                              key={pkt.tp}
                              type="button"
                              onClick={() => startQuiz(subj, pkt.tp)}
                              className="flex min-h-[42px] items-center justify-between rounded-2xl bg-slate-50 dark:bg-slate-800/80 px-3 text-xs font-bold text-slate-700 dark:text-slate-200 ring-1 ring-slate-200/70 dark:ring-slate-700 transition-all duration-150 hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-[#0066FF] dark:hover:text-sky-300 active:scale-95 tabular-nums"
                            >
                              <span>{pkt.label}</span>
                              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                                {pkt.questions.length} soal
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800 pt-3.5">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 tabular-nums min-w-0">
                        <Award className="h-4 w-4 shrink-0 text-[#0066FF]" />
                        {bestScore !== null ? (
                          <span className="truncate">
                            Terbaik:{' '}
                            <strong className="text-slate-900 dark:text-white">{bestScore}</strong> ({subjectAttempts.length}×)
                          </span>
                        ) : (
                          <span>Belum dicoba</span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => startQuiz(subj)}
                        className="flex min-h-[44px] shrink-0 items-center gap-1 rounded-full bg-[#1F2937] dark:bg-[#0066FF] px-4 text-xs font-bold text-white transition-transform duration-150 active:scale-95 tabular-nums"
                      >
                        <span>
                          {tpPackets.length > 0
                            ? `Semua (${content.latihanSoal.length} Soal)`
                            : bestScore !== null
                            ? 'Latihan Lagi'
                            : 'Mulai'}
                        </span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
