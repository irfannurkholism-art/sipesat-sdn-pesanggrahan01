import React, { useState } from 'react';
import { ArrowRight, GraduationCap } from 'lucide-react';
import {
  ASSESSMENT_INFO,
  TARGET_CLASSES,
  TargetClass,
} from '../data/assessmentData';
import { PipoMascot } from './PipoMascot';

interface OnboardingViewProps {
  initialClass?: TargetClass;
  onComplete: (name: string, studentClass: TargetClass) => void;
}

export const OnboardingView: React.FC<OnboardingViewProps> = ({
  initialClass = 'Kelas 5',
  onComplete,
}) => {
  const [name, setName] = useState('');
  const [selectedClass, setSelectedClass] = useState<TargetClass>(initialClass);
  const [errorMsg, setErrorMsg] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setErrorMsg('Yuk isi nama panggilanmu dulu supaya Pipo bisa menyapamu!');
      return;
    }
    setErrorMsg('');
    onComplete(trimmed, selectedClass);
  }

  return (
    <div className="flex min-h-[100dvh] flex-col justify-between px-6 pt-10 pb-8 bg-gradient-to-b from-[#EAF3FF] via-[#F8FAFC] to-[#F8FAFC] dark:from-slate-900 dark:via-[#0F172A] dark:to-[#0F172A]">
      {/* Brand & Hero Greeting with Pipo */}
      <div className="flex flex-col items-center text-center">
        <div className="text-lg font-extrabold tracking-tight text-[#0066FF] dark:text-sky-400">
          {ASSESSMENT_INFO.appName}
        </div>

        <div className="mt-4">
          <PipoMascot
            mood="wave"
            size={136}
            alt="Maskot Pipo menyambut siswa"
          />
        </div>

        <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
          Halo! Kenalan sama Pipo yuk!
        </h1>
        <p className="mt-2 max-w-[300px] text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Siap menghadapi Asesmen Sumatif? Pipo akan menemanimu cek jadwal, baca kisi-kisi, dan latihan soal.
        </p>
      </div>

      {/* Onboarding Form Card */}
      <form
        onSubmit={handleSubmit}
        className="mt-6 rounded-3xl bg-white dark:bg-slate-900 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.08)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.4)] ring-1 ring-slate-100 dark:ring-slate-800 space-y-5"
      >
        <div>
          <label
            htmlFor="onboarding-name"
            className="block text-xs font-bold text-slate-700 dark:text-slate-200"
          >
            Nama Panggilan / Username
          </label>
          <input
            id="onboarding-name"
            type="text"
            maxLength={32}
            autoFocus
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errorMsg) setErrorMsg('');
            }}
            placeholder="Ketik namamu di sini, misal: Azmi"
            className="mt-2 min-h-[48px] w-full rounded-2xl bg-slate-50 dark:bg-slate-800/80 px-4 text-sm font-semibold text-slate-900 dark:text-white placeholder:font-normal placeholder:text-slate-400 ring-1 ring-slate-200/80 dark:ring-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
          />
          {errorMsg && (
            <p className="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
              {errorMsg}
            </p>
          )}
        </div>

        <div>
          <span className="block text-xs font-bold text-slate-700 dark:text-slate-200">
            Pilih Kelasmu
          </span>
          <div className="mt-2 grid grid-cols-2 gap-3">
            {TARGET_CLASSES.map((cls) => {
              const isSelected = selectedClass === cls;
              return (
                <button
                  key={cls}
                  type="button"
                  onClick={() => setSelectedClass(cls)}
                  aria-pressed={isSelected}
                  className={`flex min-h-[50px] items-center justify-center gap-2 rounded-2xl px-4 text-sm font-bold transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] ${
                    isSelected
                      ? 'bg-[#0066FF] text-white shadow-sm ring-2 ring-[#0066FF]'
                      : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 ring-1 ring-slate-200/80 dark:ring-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <GraduationCap className="h-4 w-4 shrink-0" />
                  <span>{cls}</span>
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="submit"
          className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#1F2937] dark:bg-[#0066FF] px-6 text-sm font-bold text-white shadow-md transition-all duration-150 active:scale-[0.96] active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]"
        >
          <span>Mulai Belajar</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <p className="mt-5 text-center text-[11px] font-medium text-slate-400 dark:text-slate-500">
        {ASSESSMENT_INFO.assessmentTitle} · {ASSESSMENT_INFO.academicYear}
      </p>
    </div>
  );
};
