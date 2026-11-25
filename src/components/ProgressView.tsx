import React, { useMemo, useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  ChevronRight,
  BookOpen,
  PenTool,
  Lightbulb,
} from 'lucide-react';
import {
  SUBJECTS,
  getSubjectById,
  getSubjectContentForClass,
} from '../data/assessmentData';
import { QuizAttempt, UserSettings } from '../hooks/useAppState';
import { PipoMascot } from './PipoMascot';
import { SubjectIcon } from './HomeView';
import type { LearnSubTab } from './LearnView';

interface ProgressViewProps {
  settings: UserSettings;
  quizHistory: QuizAttempt[];
  onNavigateLearn: (subTab: LearnSubTab, subjectId?: string, startQuizNow?: boolean) => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  settings,
  quizHistory,
  onNavigateLearn,
}) => {
  const [filterSubjectId, setFilterSubjectId] = useState<string>('all');

  const filteredAttempts = useMemo(() => {
    if (filterSubjectId === 'all') return quizHistory;
    return quizHistory.filter((item) => item.subjectId === filterSubjectId);
  }, [quizHistory, filterSubjectId]);

  const metrics = useMemo(() => {
    const totalAttempts = filteredAttempts.length;
    const totalQuestions = filteredAttempts.reduce(
      (sum, item) => sum + item.totalQuestions,
      0
    );
    const totalCorrect = filteredAttempts.reduce(
      (sum, item) => sum + item.correctCount,
      0
    );
    const avgScore =
      totalAttempts > 0
        ? Math.round(
            filteredAttempts.reduce((sum, item) => sum + item.score, 0) /
              totalAttempts
          )
        : 0;

    let delta: number | null = null;
    if (totalAttempts >= 2) {
      const latest = filteredAttempts[totalAttempts - 1].score;
      const prev = filteredAttempts[totalAttempts - 2].score;
      delta = latest - prev;
    }

    const completedPackages = new Set(quizHistory.map((item) => item.subjectId))
      .size;

    return {
      totalAttempts,
      totalQuestions,
      totalCorrect,
      avgScore,
      delta,
      completedPackages,
    };
  }, [filteredAttempts, quizHistory]);

  const subjectProgress = useMemo(() => {
    return SUBJECTS.map((subj) => {
      const content = getSubjectContentForClass(subj, settings.studentClass);
      const isUnavailable = Boolean(
        content.isUnavailable || content.latihanSoal.length === 0
      );
      const attempts = quizHistory.filter((a) => a.subjectId === subj.id);
      const count = attempts.length;
      const bestScore =
        count > 0 ? Math.max(...attempts.map((a) => a.score)) : 0;
      const avg =
        count > 0
          ? Math.round(attempts.reduce((s, a) => s + a.score, 0) / count)
          : 0;

      return {
        subject: subj,
        isUnavailable,
        attemptsCount: count,
        bestScore,
        avgScore: avg,
        readiness:
          !isUnavailable && count > 0
            ? Math.min(100, Math.round(bestScore * 0.7 + avg * 0.3))
            : 0,
      };
    });
  }, [quizHistory, settings.studentClass]);

  const availableSubjectsCount = useMemo(
    () => subjectProgress.filter((s) => !s.isUnavailable).length,
    [subjectProgress]
  );

  const recommendedSubject = useMemo(() => {
    const candidates = subjectProgress.filter((s) => !s.isUnavailable);
    const pool = candidates.length > 0 ? candidates : subjectProgress;
    const sorted = [...pool].sort((a, b) => a.readiness - b.readiness);
    return sorted[0];
  }, [subjectProgress]);

  const pipoInsight = useMemo(() => {
    const name = settings.studentName || 'Teman';
    if (metrics.totalAttempts === 0) {
      return {
        mood: 'wave' as const,
        text: `Halo ${name}! Kamu belum mengerjakan latihan soal nih. Yuk coba 1 paket dulu biar Pipo bisa bantu pantau kesiapan asesmenmu!`,
      };
    }
    if (metrics.avgScore >= 85) {
      return {
        mood: 'celebrate' as const,
        text: `Keren, ${name}! Rata-rata nilaimu ${metrics.avgScore} dari ${metrics.totalQuestions} soal latihan. Kamu sudah makin siap menghadapi asesmen!`,
      };
    }
    if (metrics.avgScore >= 70) {
      return {
        mood: 'study' as const,
        text: `Progresmu bagus, ${name}! Rata-rata nilaimu ${metrics.avgScore}. Yuk ulangi sedikit mapel ${recommendedSubject.subject.shortName} agar makin mantap!`,
      };
    }
    return {
      mood: 'encourage' as const,
      text: `Semangat terus, ${name}! Kamu sudah berlatih ${metrics.totalQuestions} soal. Pelajari lagi ringkasan ${recommendedSubject.subject.shortName} ya, pasti nilaimu naik!`,
    };
  }, [metrics, recommendedSubject, settings.studentName]);

  const chartPoints = useMemo(() => {
    const recent = filteredAttempts.slice(-7);
    if (recent.length === 0) return [];
    const width = 280;
    const height = 110;
    const padX = 20;
    const padY = 14;
    const usableW = width - padX * 2;
    const usableH = height - padY * 2;

    return recent.map((att, idx) => {
      const x =
        recent.length === 1
          ? width / 2
          : padX + (idx / (recent.length - 1)) * usableW;
      const y = padY + ((100 - att.score) / 100) * usableH;
      const subj = getSubjectById(att.subjectId);
      return {
        id: att.id,
        x,
        y,
        score: att.score,
        label: `L${filteredAttempts.length - recent.length + idx + 1}`,
        subjectShort: subj?.shortName ?? '',
      };
    });
  }, [filteredAttempts]);

  const polylineStr = chartPoints.map((p) => `${p.x},${p.y}`).join(' ');
  const areaStr =
    chartPoints.length > 1
      ? `${chartPoints[0].x},110 ${polylineStr} ${chartPoints[chartPoints.length - 1].x},110`
      : '';

  return (
    <div className="space-y-5 px-5 pt-6 pb-28">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-[22px] font-extrabold tracking-tight text-slate-900 dark:text-white">
            Progres
          </h1>
          <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
            Ringkasan latihan dan kesiapan {settings.studentClass}
          </p>
        </div>
      </header>

      {/* Horizontal Filter for 11 Subjects */}
      <div
        role="tablist"
        aria-label="Filter progres per mata pelajaran"
        className="no-scrollbar -mx-5 flex items-center gap-2 overflow-x-auto px-5 py-1.5"
      >
        {[
          { id: 'all', label: 'Semua' },
          ...SUBJECTS.map((s) => ({ id: s.id, label: s.shortName })),
        ].map((tab) => {
          const isActive = filterSubjectId === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setFilterSubjectId(tab.id)}
              className={`min-h-[40px] rounded-full px-4 text-xs font-semibold transition-all duration-150 active:scale-95 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] ${
                isActive
                  ? 'bg-[#1F2937] dark:bg-[#0066FF] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 ring-1 ring-slate-200/80 dark:ring-slate-700/80'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Pipo Insight Speech Card */}
      <section aria-label="Ringkasan dari Pipo" className="flex items-center gap-3">
        <div className="shrink-0 -ml-1">
          <PipoMascot mood={pipoInsight.mood} size={92} alt="Pipo menyampaikan ringkasan belajar" />
        </div>
        <div className="min-w-0 flex-1 rounded-3xl bg-white dark:bg-slate-900 p-4 shadow-[0_6px_22px_rgba(15,23,42,0.05)] dark:shadow-[0_6px_22px_rgba(0,0,0,0.3)] ring-1 ring-slate-100 dark:ring-slate-800">
          <p className="text-[13px] leading-relaxed font-medium text-slate-700 dark:text-slate-200">
            {pipoInsight.text}
          </p>
        </div>
      </section>

      {/* Main Summary Metrics Grid */}
      <section aria-label="Statistik utama">
        <div className="mb-2.5 flex items-center justify-between px-1">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">
            Ringkasan
          </h2>
          <span className="text-xs font-medium text-slate-400 dark:text-slate-500 tabular-nums">
            {metrics.totalAttempts} sesi latihan
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-3xl bg-white dark:bg-slate-900 p-4 shadow-[0_4px_18px_rgba(15,23,42,0.04)] dark:shadow-[0_4px_18px_rgba(0,0,0,0.28)] ring-1 ring-slate-100 dark:ring-slate-800">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Rata-rata nilai
            </p>
            <div className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
              {metrics.totalAttempts > 0 ? metrics.avgScore : '—'}
            </div>
            <div className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold">
              {metrics.delta !== null ? (
                metrics.delta >= 0 ? (
                  <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 tabular-nums">
                    <TrendingUp className="h-3.5 w-3.5" />+{metrics.delta} poin
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-rose-600 dark:text-rose-400 tabular-nums">
                    <TrendingDown className="h-3.5 w-3.5" />
                    {metrics.delta} poin
                  </span>
                )
              ) : (
                <span className="text-slate-400 dark:text-slate-500">
                  Skala 0–100
                </span>
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-white dark:bg-slate-900 p-4 shadow-[0_4px_18px_rgba(15,23,42,0.04)] dark:shadow-[0_4px_18px_rgba(0,0,0,0.28)] ring-1 ring-slate-100 dark:ring-slate-800">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Soal dikerjakan
            </p>
            <div className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
              {metrics.totalQuestions}
            </div>
            <p className="mt-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums">
              {metrics.totalCorrect} jawaban benar
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-3xl bg-white dark:bg-slate-900 p-4 shadow-[0_4px_18px_rgba(15,23,42,0.04)] dark:shadow-[0_4px_18px_rgba(0,0,0,0.28)] ring-1 ring-slate-100 dark:ring-slate-800">
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Paket mapel selesai
            </p>
            <div className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
              {metrics.completedPackages} dari {availableSubjectsCount} mapel
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigateLearn('latihan', recommendedSubject.subject.id, true)}
            className="flex min-h-[40px] items-center gap-1 rounded-full bg-sky-50 dark:bg-sky-950/70 px-3.5 text-xs font-bold text-[#0066FF] dark:text-sky-300 transition-transform active:scale-95"
          >
            <PenTool className="h-3.5 w-3.5" />
            <span>Latihan</span>
          </button>
        </div>
      </section>

      {/* Score Trend Line Chart */}
      <section
        aria-label="Grafik tren nilai latihan"
        className="rounded-3xl bg-white dark:bg-slate-900 p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] ring-1 ring-slate-100 dark:ring-slate-800"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Tren nilai latihan
            </h2>
            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              {chartPoints.length > 0
                ? `${chartPoints.length} latihan terakhir`
                : 'Belum ada riwayat nilai'}
            </p>
          </div>
          {chartPoints.length > 0 && (
            <span className="text-xs font-bold text-[#0066FF] dark:text-sky-400 tabular-nums">
              Terbaru: {chartPoints[chartPoints.length - 1].score}
            </span>
          )}
        </div>

        {chartPoints.length > 0 ? (
          <div className="mt-4">
            <svg
              viewBox="0 0 280 132"
              className="w-full h-auto overflow-visible"
              role="img"
              aria-label="Grafik garis tren nilai latihan"
            >
              <defs>
                <linearGradient id="scoreAreaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0066FF" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
                </linearGradient>
              </defs>

              {[14, 55, 96].map((yPos, idx) => (
                <line
                  key={idx}
                  x1="12"
                  y1={yPos}
                  x2="268"
                  y2={yPos}
                  stroke="currentColor"
                  className="text-slate-200 dark:text-slate-800"
                  strokeDasharray="3 4"
                  strokeWidth="1"
                />
              ))}

              {areaStr && <polygon points={areaStr} fill="url(#scoreAreaGrad)" />}

              {chartPoints.length > 1 && (
                <polyline
                  points={polylineStr}
                  fill="none"
                  stroke="#0066FF"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {chartPoints.map((pt) => (
                <g key={pt.id}>
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r="5"
                    className="fill-white dark:fill-slate-900"
                    stroke="#0066FF"
                    strokeWidth="2.8"
                  />
                  <text
                    x={pt.x}
                    y={pt.y - 10}
                    textAnchor="middle"
                    className="fill-slate-700 dark:fill-slate-200 text-[9.5px] font-bold"
                  >
                    {pt.score}
                  </text>
                  <text
                    x={pt.x}
                    y="126"
                    textAnchor="middle"
                    className="fill-slate-400 dark:fill-slate-500 text-[9.5px] font-semibold"
                  >
                    {pt.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        ) : (
          <div className="mt-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-5 text-center">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Kerjakan 1 paket latihan soal untuk melihat grafik perkembangan nilaimu di sini.
            </p>
            <button
              type="button"
              onClick={() => onNavigateLearn('latihan', SUBJECTS[0].id, true)}
              className="mt-3 inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-[#1F2937] dark:bg-[#0066FF] px-4 text-xs font-bold text-white"
            >
              <span>Mulai Latihan Pertama</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </section>

      {/* Per-Subject Readiness Bars (All 11 Subjects) */}
      <section
        aria-label="Kesiapan per mata pelajaran"
        className="rounded-3xl bg-white dark:bg-slate-900 p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] ring-1 ring-slate-100 dark:ring-slate-800 space-y-4"
      >
        <h2 className="text-sm font-bold text-slate-900 dark:text-white">
          Kesiapan 11 mata pelajaran
        </h2>

        <div className="space-y-4">
          {subjectProgress.map(({ subject, isUnavailable, readiness, bestScore, attemptsCount }) => (
            <div key={subject.id} className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${subject.theme.softBg} ${subject.theme.softText}`}
                  >
                    <SubjectIcon icon={subject.icon} className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {subject.name}
                    </p>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 tabular-nums">
                      {isUnavailable
                        ? 'Kisi-kisi & soal belum tersedia'
                        : attemptsCount > 0
                        ? `Terbaik ${bestScore} · ${attemptsCount}× latihan`
                        : 'Belum dicoba'}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-xs tabular-nums ${
                    isUnavailable
                      ? 'font-semibold text-slate-400 dark:text-slate-500'
                      : 'font-extrabold text-slate-900 dark:text-white'
                  }`}
                >
                  {isUnavailable ? 'Belum tersedia' : `${readiness}%`}
                </span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${subject.theme.barBg}`}
                  style={{
                    width: `${
                      isUnavailable ? 0 : Math.max(readiness, attemptsCount > 0 ? 8 : 0)
                    }%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 rounded-2xl bg-[#EFF6FF] dark:bg-sky-950/50 p-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#0066FF] dark:text-sky-400">
            <Lightbulb className="h-3.5 w-3.5" />
            <span>Rekomendasi Belajar Berikutnya</span>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-200">
            {recommendedSubject.attemptsCount === 0 ? (
              <>
                Kamu belum mencoba latihan{' '}
                <strong className="font-bold">{recommendedSubject.subject.name}</strong>. Yuk mulai dari membaca ringkasan materinya!
              </>
            ) : (
              <>
                Mapel <strong className="font-bold">{recommendedSubject.subject.name}</strong>{' '}
                (kesiapan {recommendedSubject.readiness}%) paling baik dipelajari ulang supaya semua nilai asesmenmu merata tinggi.
              </>
            )}
          </p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => onNavigateLearn('materi', recommendedSubject.subject.id)}
              className="flex min-h-[38px] flex-1 items-center justify-center gap-1.5 rounded-full bg-white dark:bg-slate-900 px-3 text-xs font-bold text-slate-800 dark:text-slate-100 shadow-sm transition-transform duration-150 active:scale-95"
            >
              <BookOpen className="h-3.5 w-3.5 text-[#0066FF]" />
              <span>Baca Materi</span>
            </button>
            <button
              type="button"
              onClick={() =>
                onNavigateLearn('latihan', recommendedSubject.subject.id, true)
              }
              className="flex min-h-[38px] flex-1 items-center justify-center gap-1.5 rounded-full bg-[#1F2937] dark:bg-[#0066FF] px-3 text-xs font-bold text-white transition-transform duration-150 active:scale-95"
            >
              <span>Mulai Latihan</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
