export type TargetClass = 'Kelas 5' | 'Kelas 6';

export type SubjectIconKey =
  | 'moon-star'
  | 'shield'
  | 'book'
  | 'palette'
  | 'calculator'
  | 'activity'
  | 'leaf'
  | 'sprout'
  | 'languages'
  | 'cpu'
  | 'scroll';

export type DifficultyLevel = 'Mudah' | 'Sedang' | 'Sukar';

export type IndicatorForm =
  | 'Pilihan Ganda'
  | 'Pilihan Ganda Kompleks'
  | 'Benar/Salah'
  | 'Isian Singkat'
  | 'Uraian';

export interface KisiKisiItem {
  id: string;
  kode: string;
  tp?: string;
  materi: string;
  indikator: string;
  level: 'Pemahaman' | 'Penerapan' | 'Penalaran';
}

export interface RingkasanMateriItem {
  id: string;
  judul: string;
  poinPenting: string[];
  contohSingkat: string;
  tipsPipo: string;
}

export interface QuizQuestion {
  id: string;
  topik: string;
  tp?: string;
  tingkatKesulitan?: DifficultyLevel;
  bentukIndikator?: IndicatorForm;
  pertanyaan: string;
  pilihan: [string, string, string, string];
  jawabanBenar: 0 | 1 | 2 | 3;
  pembahasan: string;
}

export interface TpDescriptor {
  kode: string;
  deskripsi: string;
}

export interface SubjectClassContent {
  description: string;
  isUnavailable?: boolean;
  unavailableNote?: string;
  docQuestionCount?: number;
  tpList?: TpDescriptor[];
  kisiKisi: KisiKisiItem[];
  ringkasanMateri: RingkasanMateriItem[];
  latihanSoal: QuizQuestion[];
}

export interface SubjectData extends SubjectClassContent {
  id: string;
  name: string;
  shortName: string;
  icon: SubjectIconKey;
  kkm: number;
  theme: {
    accentHex: string;
    softBg: string;
    softText: string;
    barBg: string;
  };
  /** Konten khusus per kelas (Kelas 5 / Kelas 6) jika memiliki kisi-kisi tersendiri */
  classContent?: Partial<Record<TargetClass, SubjectClassContent>>;
}

export interface ScheduleItem {
  id: string;
  subjectId: string;
  /** Format YYYY-MM-DD */
  date: string;
  /** Format HH.MM */
  startTime: string;
  /** Format HH.MM */
  endTime: string;
  room: string;
  note: string;
}
