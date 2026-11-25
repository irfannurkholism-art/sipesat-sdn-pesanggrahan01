import React, { useState } from 'react';
import {
  User,
  Sun,
  Moon,
  Type,
  Volume2,
  VolumeX,
  Download,
  CheckCircle2,
  RotateCcw,
  Share,
  Smartphone,
  X,
  GraduationCap,
  LogOut,
} from 'lucide-react';
import { TARGET_CLASSES } from '../data/assessmentData';
import { UserSettings } from '../hooks/useAppState';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { playCorrectSound } from '../utils/sound';

interface SettingsViewProps {
  settings: UserSettings;
  quizCount: number;
  onUpdateSettings: (patch: Partial<UserSettings>) => void;
  onResetProgress: () => void;
  onLogout: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  settings,
  quizCount,
  onUpdateSettings,
  onResetProgress,
  onLogout,
}) => {
  const { canNativeInstall, isInstalled, isIOS, promptInstall } = usePWAInstall();
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetDoneNotice, setResetDoneNotice] = useState(false);

  async function handleInstallClick() {
    if (canNativeInstall) {
      const accepted = await promptInstall();
      if (!accepted) {
        setShowInstallModal(true);
      }
    } else {
      setShowInstallModal(true);
    }
  }

  function handleConfirmReset() {
    onResetProgress();
    setShowResetModal(false);
    setResetDoneNotice(true);
    window.setTimeout(() => setResetDoneNotice(false), 3000);
  }

  return (
    <div className="space-y-5 px-5 pt-6 pb-28">
      <header>
        <h1 className="text-[22px] font-extrabold tracking-tight text-slate-900 dark:text-white">
          Pengaturan
        </h1>
        <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
          Sesuaikan profil dan kenyamanan belajarmu di SiPESAT
        </p>
      </header>

      {/* 1. Profil Siswa (Kelas hanya Kelas 5 & Kelas 6) */}
      <section className="rounded-3xl bg-white dark:bg-slate-900 p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] ring-1 ring-slate-100 dark:ring-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
            <User className="h-4 w-4 text-[#0066FF]" />
            <span>Profil Siswa</span>
          </div>
          <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
            Tersimpan otomatis
          </span>
        </div>

        <div className="space-y-3.5">
          <div>
            <label
              htmlFor="student-name"
              className="block text-xs font-semibold text-slate-600 dark:text-slate-300"
            >
              Nama Panggilan / Username
            </label>
            <input
              id="student-name"
              type="text"
              maxLength={32}
              value={settings.studentName}
              onChange={(e) => {
                const val = e.target.value;
                if (val.trim().length > 0) {
                  onUpdateSettings({ studentName: val });
                }
              }}
              placeholder="Contoh: Azmi"
              className="mt-1.5 min-h-[44px] w-full rounded-2xl bg-slate-50 dark:bg-slate-800/80 px-4 text-sm font-medium text-slate-900 dark:text-white ring-1 ring-slate-200/80 dark:ring-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
            />
          </div>

          <div>
            <span className="block text-xs font-semibold text-slate-600 dark:text-slate-300">
              Kelas
            </span>
            <div className="mt-1.5 grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 dark:bg-slate-800/80 p-1">
              {TARGET_CLASSES.map((cls) => {
                const isActive = settings.studentClass === cls;
                return (
                  <button
                    key={cls}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => onUpdateSettings({ studentClass: cls })}
                    className={`flex min-h-[42px] items-center justify-center gap-1.5 rounded-xl text-xs font-bold transition-all duration-150 active:scale-95 ${
                      isActive
                        ? 'bg-white dark:bg-slate-900 text-[#0066FF] dark:text-sky-400 shadow-sm'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    <GraduationCap className="h-4 w-4 shrink-0" />
                    <span>{cls}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Tampilan, Ukuran Teks & Efek Suara */}
      <section className="rounded-3xl bg-white dark:bg-slate-900 p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] ring-1 ring-slate-100 dark:ring-slate-800 space-y-5">
        <h2 className="text-sm font-bold text-slate-900 dark:text-white">
          Tampilan & Kenyamanan
        </h2>

        <div className="space-y-2">
          <span className="block text-xs font-semibold text-slate-600 dark:text-slate-300">
            Tema Warna
          </span>
          <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 dark:bg-slate-800/80 p-1">
            <button
              type="button"
              onClick={() => onUpdateSettings({ theme: 'light' })}
              className={`flex min-h-[42px] items-center justify-center gap-2 rounded-xl text-xs font-bold transition-all duration-150 active:scale-95 ${
                settings.theme === 'light'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              <Sun className="h-4 w-4 text-amber-500" />
              <span>Mode Terang</span>
            </button>
            <button
              type="button"
              onClick={() => onUpdateSettings({ theme: 'dark' })}
              className={`flex min-h-[42px] items-center justify-center gap-2 rounded-xl text-xs font-bold transition-all duration-150 active:scale-95 ${
                settings.theme === 'dark'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              <Moon className="h-4 w-4 text-sky-400" />
              <span>Mode Gelap</span>
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <Type className="h-3.5 w-3.5 text-[#0066FF]" />
            <span>Ukuran Teks Materi & Soal</span>
          </div>
          <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 dark:bg-slate-800/80 p-1">
            <button
              type="button"
              onClick={() => onUpdateSettings({ textSize: 'normal' })}
              className={`min-h-[42px] rounded-xl text-xs font-bold transition-all duration-150 active:scale-95 ${
                settings.textSize === 'normal'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Normal
            </button>
            <button
              type="button"
              onClick={() => onUpdateSettings({ textSize: 'large' })}
              className={`min-h-[42px] rounded-xl text-sm font-bold transition-all duration-150 active:scale-95 ${
                settings.textSize === 'large'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Besar
            </button>
          </div>
          <p
            className={`rounded-2xl bg-slate-50 dark:bg-slate-800/60 px-3.5 py-2.5 text-slate-600 dark:text-slate-300 transition-all ${
              settings.textSize === 'large'
                ? 'text-[17px] leading-relaxed'
                : 'text-xs leading-relaxed'
            }`}
          >
            Pratinjau bacaan: Samakan penyebut pecahan sebelum menjumlahkan pembilangnya.
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800 pt-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-[#0066FF] dark:text-sky-400">
              {settings.soundEnabled ? (
                <Volume2 className="h-5 w-5" />
              ) : (
                <VolumeX className="h-5 w-5" />
              )}
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">
                Efek Suara Kuis
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Bunyi lembut saat menjawab benar/salah
              </p>
            </div>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={settings.soundEnabled}
            aria-label="Aktifkan efek suara kuis"
            onClick={() => {
              const next = !settings.soundEnabled;
              onUpdateSettings({ soundEnabled: next });
              if (next) playCorrectSound(true);
            }}
            className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] ${
              settings.soundEnabled
                ? 'bg-[#0066FF]'
                : 'bg-slate-300 dark:bg-slate-700'
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </section>

      {/* 3. Instal Aplikasi PWA */}
      <section className="rounded-3xl bg-white dark:bg-slate-900 p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] ring-1 ring-slate-100 dark:ring-slate-800">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-[#0066FF] dark:text-sky-400">
            <Smartphone className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Pasang di Layar Utama HP
            </h2>
            <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Buka SiPESAT lebih cepat seperti aplikasi asli dan tetap lancar membaca kisi-kisi saat sinyal lemah.
            </p>
          </div>
        </div>

        {isInstalled ? (
          <div className="mt-4 flex items-center justify-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-950/50 py-2.5 text-xs font-bold text-emerald-700 dark:text-emerald-300">
            <CheckCircle2 className="h-4 w-4" />
            <span>Sudah terpasang di perangkat ini</span>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => void handleInstallClick()}
            className="mt-4 flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#1F2937] dark:bg-[#0066FF] px-4 text-xs font-bold text-white shadow-sm transition-all duration-150 active:scale-[0.96]"
          >
            <Download className="h-4 w-4" />
            <span>
              {canNativeInstall
                ? 'Pasang Aplikasi Sekarang'
                : 'Lihat Cara Pasang di HP'}
            </span>
          </button>
        )}
      </section>

      {/* 4. Reset Progres Latihan & Log Out */}
      <section className="rounded-3xl bg-white dark:bg-slate-900 p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] ring-1 ring-slate-100 dark:ring-slate-800 space-y-3">
        <div>
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">
            Akun & Data Latihan
          </h2>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
            {quizCount > 0
              ? `${quizCount} riwayat sesi latihan tersimpan di perangkat ini`
              : 'Belum ada riwayat latihan tersimpan'}
          </p>
        </div>

        {resetDoneNotice && (
          <p className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 px-3.5 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            Progres latihan berhasil direset. Kamu bisa mulai dari awal!
          </p>
        )}

        <button
          type="button"
          disabled={quizCount === 0}
          onClick={() => setShowResetModal(true)}
          className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-rose-50 dark:bg-rose-950/50 px-4 text-xs font-bold text-rose-600 dark:text-rose-400 transition-all duration-150 hover:bg-rose-100 dark:hover:bg-rose-950/80 active:scale-[0.96] disabled:opacity-45"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Reset Progres Latihan</span>
        </button>

        <button
          type="button"
          onClick={onLogout}
          className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800 px-4 text-xs font-bold text-slate-800 dark:text-slate-100 transition-all duration-150 hover:bg-slate-200/80 dark:hover:bg-slate-700 active:scale-[0.96]"
        >
          <LogOut className="h-4 w-4" />
          <span>Log Out</span>
        </button>
      </section>

      {/* Modal: Panduan Instalasi PWA */}
      {showInstallModal && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/55 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pwa-guide-title"
        >
          <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-slate-900 p-6 shadow-2xl ring-1 ring-slate-200/70 dark:ring-slate-800">
            <div className="flex items-center justify-between gap-2">
              <h3
                id="pwa-guide-title"
                className="text-base font-extrabold text-slate-900 dark:text-white"
              >
                Cara Pasang di Layar Utama
              </h3>
              <button
                type="button"
                onClick={() => setShowInstallModal(false)}
                aria-label="Tutup panduan"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 transition-transform active:scale-90"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {isIOS ? (
              <ol className="mt-4 space-y-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0066FF] text-[11px] font-bold text-white">
                    1
                  </span>
                  <span>
                    Ketuk tombol <strong className="text-slate-900 dark:text-white">Bagikan (Share)</strong>{' '}
                    <Share className="inline h-3.5 w-3.5 text-[#0066FF]" /> di bilah bawah Safari.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0066FF] text-[11px] font-bold text-white">
                    2
                  </span>
                  <span>
                    Geser ke bawah lalu pilih{' '}
                    <strong className="text-slate-900 dark:text-white">Tambah ke Layar Utama</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0066FF] text-[11px] font-bold text-white">
                    3
                  </span>
                  <span>
                    Ketuk <strong className="text-slate-900 dark:text-white">Tambah</strong> di pojok kanan atas.
                  </span>
                </li>
              </ol>
            ) : (
              <div className="mt-4 space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  <strong className="text-slate-900 dark:text-white">Android (Chrome):</strong>{' '}
                  Ketuk menu titik tiga (⋮) di pojok kanan atas, lalu pilih{' '}
                  <strong className="text-slate-900 dark:text-white">Tambahkan ke layar utama</strong> atau{' '}
                  <strong className="text-slate-900 dark:text-white">Instal aplikasi</strong>.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">iPhone / iPad (Safari):</strong>{' '}
                  Ketuk ikon Bagikan (Share) di bawah, lalu pilih{' '}
                  <strong className="text-slate-900 dark:text-white">Tambah ke Layar Utama</strong>.
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowInstallModal(false)}
              className="mt-5 flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#1F2937] dark:bg-[#0066FF] text-xs font-bold text-white transition-transform active:scale-95"
            >
              Mengerti
            </button>
          </div>
        </div>
      )}

      {/* Modal: Konfirmasi Reset Progres */}
      {showResetModal && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/55 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reset-modal-title"
        >
          <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-slate-900 p-6 shadow-2xl ring-1 ring-slate-200/70 dark:ring-slate-800">
            <h3
              id="reset-modal-title"
              className="text-base font-extrabold text-slate-900 dark:text-white"
            >
              Reset semua progres latihan?
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              Semua riwayat nilai dan grafik latihanmu akan dihapus dari perangkat ini. Nama siswa dan pengaturan tampilan tetap tersimpan.
            </p>
            <div className="mt-5 flex gap-2.5">
              <button
                type="button"
                onClick={() => setShowResetModal(false)}
                className="flex min-h-[44px] flex-1 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 transition-transform active:scale-95"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleConfirmReset}
                className="flex min-h-[44px] flex-1 items-center justify-center rounded-full bg-rose-600 text-xs font-bold text-white transition-transform active:scale-95"
              >
                Ya, Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
