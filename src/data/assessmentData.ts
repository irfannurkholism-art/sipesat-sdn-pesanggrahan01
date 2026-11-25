/**
 * ============================================================================
 * DATA KONTEN ASESMEN SUMATIF SiPESAT (SATU SUMBER DATA TERPUSAT)
 * ============================================================================
 * Edit file ini untuk mengganti nama sekolah, judul asesmen, jadwal ujian,
 * daftar mata pelajaran, kisi-kisi, ringkasan materi, atau bank soal latihan
 * tanpa perlu menyentuh kode tampilan aplikasi.
 */

export type {
  TargetClass,
  SubjectIconKey,
  DifficultyLevel,
  IndicatorForm,
  KisiKisiItem,
  RingkasanMateriItem,
  QuizQuestion,
  TpDescriptor,
  SubjectClassContent,
  SubjectData,
  ScheduleItem,
} from './types';

import type {
  TargetClass,
  SubjectClassContent,
  SubjectData,
  ScheduleItem,
  QuizQuestion,
} from './types';

import {
  PANCASILA_KELAS5_SOAL,
  BINDO_KELAS5_SOAL,
  SENI_RUPA_KELAS5_SOAL,
} from './bankSoalKelas5Bagian1';
import {
  MATEMATIKA_KELAS5_SOAL,
  PLH_KELAS5_SOAL,
  BINGGRIS_KELAS5_SOAL,
} from './bankSoalKelas5Bagian2';
import {
  KKA_KELAS5_SOAL,
  BJAWA_KELAS5_SOAL,
} from './bankSoalKelas5Bagian3';
import {
  BINGGRIS_KELAS6_SOAL,
  KKA_KELAS6_SOAL,
} from './bankSoalKelas6';
import {
  IPAS_KELAS5_SOAL,
  PAI_KELAS5_SOAL,
} from './bankSoalIpasPaiKelas5';

export const TARGET_CLASSES: TargetClass[] = ['Kelas 5', 'Kelas 6'];

export const ASSESSMENT_INFO = {
  appName: 'SiPESAT',
  mascotName: 'Pipo',
  schoolName: 'SD Negeri Pesanggrahan 01 Batu',
  assessmentTitle: 'Asesmen Sumatif Akhir Semester Ganjil',
  academicYear: 'Tahun Ajaran 2026/2027',
  targetLabel: 'Kelas 5 & 6',
  defaultStudentClass: 'Kelas 5' as TargetClass,
  pipoQuickPrompts: [
    'Buatkan 1 soal latihan',
    'Jelaskan materi dengan bahasa sederhana',
    'Tips belajar biar cepat hafal',
  ],
};

/**
 * JADWAL ASESMEN SUMATIF AKHIR SEMESTER GANJIL 2026/2027
 * KHUSUS KELAS 5 & 6
 */
export const ASSESSMENT_SCHEDULE: ScheduleItem[] = [
  {
    id: 'sch-pai',
    subjectId: 'pai',
    date: '2026-11-30',
    startTime: '09.30',
    endTime: '11.00',
    room: 'Ruang Ujian',
    note: 'Sesi 1 · Setelah ini istirahat 11.00–11.30 WIB',
  },
  {
    id: 'sch-pancasila',
    subjectId: 'pancasila',
    date: '2026-11-30',
    startTime: '11.30',
    endTime: '13.00',
    room: 'Ruang Ujian',
    note: 'Sesi 2 · Dimulai usai istirahat pukul 11.30 WIB',
  },
  {
    id: 'sch-bindo',
    subjectId: 'bahasa-indonesia',
    date: '2026-12-01',
    startTime: '09.30',
    endTime: '11.00',
    room: 'Ruang Ujian',
    note: 'Sesi 1 · Setelah ini istirahat 11.00–11.30 WIB',
  },
  {
    id: 'sch-seni-rupa',
    subjectId: 'seni-rupa',
    date: '2026-12-01',
    startTime: '11.30',
    endTime: '13.00',
    room: 'Ruang Ujian',
    note: 'Sesi 2 · Siapkan pensil warna atau alat gambar sesuai arahan guru',
  },
  {
    id: 'sch-matematika',
    subjectId: 'matematika',
    date: '2026-12-02',
    startTime: '10.00',
    endTime: '11.30',
    room: 'Ruang Ujian',
    note: 'Sesi 1 · Setelah ini istirahat 11.30–12.00 WIB',
  },
  {
    id: 'sch-pjok',
    subjectId: 'pjok',
    date: '2026-12-02',
    startTime: '12.00',
    endTime: '13.30',
    room: 'Ruang Ujian',
    note: 'Sesi 2 · Dimulai usai istirahat pukul 12.00 WIB',
  },
  {
    id: 'sch-ipas',
    subjectId: 'ipas',
    date: '2026-12-03',
    startTime: '10.00',
    endTime: '11.30',
    room: 'Ruang Ujian',
    note: 'Sesi 1 · Setelah ini istirahat 11.30–12.00 WIB',
  },
  {
    id: 'sch-plh',
    subjectId: 'plh',
    date: '2026-12-03',
    startTime: '12.00',
    endTime: '13.30',
    room: 'Ruang Ujian',
    note: 'Sesi 2 · Dimulai usai istirahat pukul 12.00 WIB',
  },
  {
    id: 'sch-binggris',
    subjectId: 'bahasa-inggris',
    date: '2026-12-04',
    startTime: '08.30',
    endTime: '10.00',
    room: 'Ruang Ujian',
    note: 'Sesi 1 · Setelah ini istirahat 10.00–10.30 WIB',
  },
  {
    id: 'sch-kka',
    subjectId: 'kka',
    date: '2026-12-04',
    startTime: '10.30',
    endTime: '12.00',
    room: 'Ruang Ujian',
    note: 'Sesi 2 · Dimulai usai istirahat pukul 10.30 WIB',
  },
  {
    id: 'sch-b-daerah',
    subjectId: 'bahasa-daerah',
    date: '2026-12-07',
    startTime: '08.30',
    endTime: '10.00',
    room: 'Ruang Ujian',
    note: 'Hari terakhir asesmen · Tetap semangat dan teliti!',
  },
];

/**
 * 11 MATA PELAJARAN RESMI
 */
export const SUBJECTS: SubjectData[] = [
  {
    id: 'pai',
    name: 'PAI & Budi Pekerti',
    shortName: 'PAI',
    icon: 'moon-star',
    description: 'Q.S. Al-Ma’un, 5 Asmaul Husna, toleransi & khalifah, zakat fitrah, serta keteladanan Madinah.',
    kkm: 75,
    theme: {
      accentHex: '#059669',
      softBg: 'bg-emerald-50 dark:bg-emerald-950/50',
      softText: 'text-emerald-700 dark:text-emerald-300',
      barBg: 'bg-emerald-500',
    },
    docQuestionCount: 35,
    tpList: [
      { kode: 'TP 1', deskripsi: 'Memahami makna dan pesan pokok Q.S. Al-Ma’un serta menjauhi ciri pendusta agama.' },
      { kode: 'TP 2', deskripsi: 'Mengenal arti dan meneladani Asmaul Husna Al-Qawiyy, Al-Qayyum, Al-Muhyi, Al-Mumit, dan Al-Ba’its.' },
      { kode: 'TP 3', deskripsi: 'Membiasakan sikap saling menghargai (toleransi), menjaga bumi sebagai khalifah, dan gemar berbagi.' },
      { kode: 'TP 4', deskripsi: 'Memahami ketentuan zakat fitrah, perbedaan infak/sedekah/hadiah, golongan mustahik, serta fungsi zakat.' },
      { kode: 'TP 5', deskripsi: 'Meneladani peradaban Islam Madinah (Masjid Nabawi), ketabahan dakwah Thaif, dan gelar Al-Amin Rasulullah Saw.' },
    ],
    kisiKisi: [
      {
        id: 'pai-k1',
        kode: 'Indikator 1',
        tp: 'TP 1',
        materi: 'Pesan Pokok & Kosakata Q.S. Al-Ma’un',
        indikator: 'Mengartikan Al-Ma’un, memahami lafaz penting (‘ala tha’amil miskin, wayamna’unal ma’un), ciri pendusta agama, dan hikmah peduli anak yatim serta fakir miskin.',
        level: 'Pemahaman',
      },
      {
        id: 'pai-k2',
        kode: 'Indikator 2',
        tp: 'TP 2',
        materi: '5 Asmaul Husna (Al-Qawiyy, Al-Qayyum, Al-Muhyi, Al-Mumit, Al-Ba’its)',
        indikator: 'Menjelaskan arti dan penerapan nyata sifat Maha Kuat, Maha Mandiri, Maha Menghidupkan, Maha Mematikan, dan Maha Membangkitkan.',
        level: 'Penerapan',
      },
      {
        id: 'pai-k3',
        kode: 'Indikator 3',
        tp: 'TP 3',
        materi: 'Toleransi, Tugas Khalifah & Perilaku Berbagi',
        indikator: 'Menentukan sikap menghargai perbedaan agama/pendapat, tanggung jawab manusia memakmurkan bumi sebagai khalifah, dan manfaat hidup berbagi.',
        level: 'Penerapan',
      },
      {
        id: 'pai-k4',
        kode: 'Indikator 4',
        tp: 'TP 4',
        materi: 'Zakat Fitrah, Infak, Sedekah & Mustahik',
        indikator: 'Membedakan hukum zakat fitrah (rukun Islam ke-3) dengan infak/sedekah/hadiah, mengenali golongan fakir/muzakki, serta menjelaskan 2 fungsi zakat.',
        level: 'Penalaran',
      },
      {
        id: 'pai-k5',
        kode: 'Indikator 5',
        tp: 'TP 5',
        materi: 'Peradaban Madinah & Keteladanan Nabi Muhammad Saw.',
        indikator: 'Mengidentifikasi peran Masjid Nabawi, kesabaran dakwah di Thaif, makna gelar Al-Amin, persaudaraan Muhajirin–Anshar, dan sifat kepemimpinan Nabi.',
        level: 'Pemahaman',
      },
    ],
    ringkasanMateri: [
      {
        id: 'pai-m1',
        judul: 'Pesan Pokok Q.S. Al-Ma’un & Kepedulian Sosial',
        poinPenting: [
          'Q.S. Al-Ma’un terdiri atas 7 ayat; "Al-Ma’un" berarti barang-barang yang berguna.',
          'Kosakata penting: ‘ala tha’āmil-miskīn = atas memberi makan orang miskin; wayamna‘ūnal mā‘ūn = dan enggan memberikan bantuan barang berguna.',
          'Ciri pendusta agama menurut Al-Ma’un: menghardik anak yatim, tidak menganjurkan memberi makan fakir miskin, lalai salat, berbuat riya’ (ingin dipuji), dan enggan menolong sesama.',
        ],
        contohSingkat: 'Menyantuni teman yatim dan menyumbang kotak amal secara ikhlas tanpa pamer.',
        tipsPipo: 'Ingat! Salat yang baik membuat hati lembut untuk menyayangi yatim dan fakir miskin.',
      },
      {
        id: 'pai-m2',
        judul: '5 Asmaul Husna Pilihan & Teladannya',
        poinPenting: [
          'Al-Qawiyy (Maha Kuat): menolong yang lemah dengan kekuatan dan teguh beriman.',
          'Al-Qayyum (Maha Berdiri Sendiri): melatih diri mandiri mengurus perlengkapan sekolah dan tugas sendiri.',
          'Al-Muhyi (Maha Menghidupkan) & Al-Mumit (Maha Mematikan): bersyukur atas kehidupan, rajin ibadah, cepat tobat, dan tidak sombong.',
          'Al-Ba’its (Maha Membangkitkan): yakin setelah kiamat manusia dibangkitkan sehingga selalu jujur dan beramal baik.',
        ],
        contohSingkat: 'Menyiapkan seragam dan tas sekolah sendiri tiap malam meneladani Al-Qayyum.',
        tipsPipo: 'Hafalkan pasangan: Muhyi = Menghidupkan, Mumit = Mematikan, Ba’its = Membangkitkan!',
      },
      {
        id: 'pai-m3',
        judul: 'Toleransi, Khalifah, Zakat Fitrah & Keteladanan Madinah',
        poinPenting: [
          'Toleransi (tasamuh): menghormati ibadah dan hari besar umat agama lain tanpa mengganggu untuk mencegah permusuhan dan perpecahan.',
          'Khalifah di bumi: manusia diberi amanah memimpin, merawat, dan memakmurkan alam ciptaan Allah Swt.',
          'Zakat Fitrah hukumnya wajib (Rukun Islam ke-3) sebelum Idulfitri; muzakki = pembayar zakat, mustahik = penerima (misal fakir yang tak punya pekerjaan maupun penanggung biaya). Fungsi zakat menyucikan harta/jiwa muzakki serta meringankan fakir miskin.',
          'Di Madinah, Masjid Nabawi menjadi pusat ibadah, pendidikan, musyawarah, dan sosial. Nabi bergelar Al-Amin (dapat dipercaya), tabah saat dihina di Thaif, adil, dan bijaksana.',
        ],
        contohSingkat: 'Mengembalikan uang kembalian berlebih ke kantin meneladani sifat amanah (Al-Amin).',
        tipsPipo: 'Bedakan: Muzakki = memberi zakat, Mustahik = menerima zakat!',
      },
    ],
    latihanSoal: PAI_KELAS5_SOAL,
  },
  {
    id: 'pancasila',
    name: 'Pendidikan Pancasila',
    shortName: 'Pancasila',
    icon: 'shield',
    description: 'Sejarah perumusan dasar negara, penerapan nilai Pancasila, norma, hak, dan kewajiban.',
    kkm: 75,
    theme: {
      accentHex: '#DC2626',
      softBg: 'bg-rose-50 dark:bg-rose-950/50',
      softText: 'text-rose-700 dark:text-rose-300',
      barBg: 'bg-rose-500',
    },
    docQuestionCount: 35,
    tpList: [
      { kode: 'TP 1', deskripsi: 'Memahami kedudukan dan kronologi perumusan Pancasila (sidang BPUPKI, Piagam Jakarta, PPKI) serta keteladanan pendiri bangsa.' },
      { kode: 'TP 2', deskripsi: 'Menerapkan nilai sila ke-1 sampai ke-5 dalam kerukunan, toleransi, musyawarah, dan keadilan di keluarga, sekolah, serta masyarakat.' },
      { kode: 'TP 3', deskripsi: 'Membedakan macam-macam norma beserta sanksinya serta menyeimbangkan hak, kewajiban, dan tanggung jawab.' },
    ],
    kisiKisi: [
      {
        id: 'pp-k1',
        kode: 'Indikator 1',
        tp: 'TP 1',
        materi: 'Sejarah & Kedudukan Pancasila',
        indikator: 'Mengidentifikasi tokoh perumus dasar negara dalam sidang BPUPKI (29 Mei–1 Juni 1945), Piagam Jakarta (Panitia Sembilan), serta makna Pancasila sebagai dasar negara dan pandangan hidup.',
        level: 'Pemahaman',
      },
      {
        id: 'pp-k2',
        kode: 'Indikator 2',
        tp: 'TP 1',
        materi: 'Semangat Kebangsaan Pendiri Bangsa',
        indikator: 'Menganalisis sikap teladan para pendiri bangsa (mengutamakan persatuan, pantang menyerah, berjiwa besar pada perubahan sila pertama Piagam Jakarta).',
        level: 'Penalaran',
      },
      {
        id: 'pp-k3',
        kode: 'Indikator 3',
        tp: 'TP 2',
        materi: 'Penerapan Sila Ke-1 sampai Ke-5',
        indikator: 'Menentukan dan menganalisis penerapan sila ke-1 (toleransi doa), sila ke-2 (kemanusiaan/bantuan), sila ke-3 (persatuan), sila ke-4 (musyawarah/voting lapang dada), dan sila ke-5 (keadilan sosial).',
        level: 'Penerapan',
      },
      {
        id: 'pp-k4',
        kode: 'Indikator 4',
        tp: 'TP 3',
        materi: 'Macam Norma & Sanksinya',
        indikator: 'Membedakan norma agama, kesusilaan (hati nurani), kesopanan (pergaulan), dan hukum (negara) beserta contoh perilaku dan sanksinya.',
        level: 'Pemahaman',
      },
      {
        id: 'pp-k5',
        kode: 'Indikator 5',
        tp: 'TP 3',
        materi: 'Keseimbangan Hak, Kewajiban & Tanggung Jawab',
        indikator: 'Menghubungkan pelaksanaan kewajiban dengan hak yang diterima serta menganalisis akibat jika menuntut hak tanpa melaksanakan kewajiban.',
        level: 'Penalaran',
      },
    ],
    ringkasanMateri: [
      {
        id: 'pp-m1',
        judul: 'Sejarah Singkat Perumusan Pancasila',
        poinPenting: [
          'Sidang BPUPKI (29 Mei–1 Juni 1945) menghadirkan 3 tokoh pengusul dasar negara: Mr. Muhammad Yamin, Prof. Dr. Soepomo, dan Ir. Soekarno (pengusul nama Pancasila pada 1 Juni 1945).',
          'Panitia Sembilan (9 orang) merumuskan Piagam Jakarta pada 22 Juni 1945 sebagai cikal bakal Pembukaan UUD 1945.',
          'Demi menjaga persatuan bangsa, para tokoh sepakat mengubah 7 kata pada sila pertama menjadi "Ketuhanan Yang Maha Esa" lalu Pancasila disahkan PPKI pada 18 Agustus 1945.',
          'Kedudukan Pancasila: sebagai Dasar Negara (pedoman mengatur negara) dan Pandangan Hidup Bangsa (pedoman sikap sehari-hari).',
        ],
        contohSingkat: 'Dari 1 Juni 1945 hingga tahun 2026, Indonesia memperingati Hari Lahir Pancasila ke-81.',
        tipsPipo: 'Hafal 3 tanggal penting: 1 Juni (Lahir Pancasila), 22 Juni (Piagam Jakarta), 18 Agustus (Pengesahan PPKI)!',
      },
      {
        id: 'pp-m2',
        judul: 'Penerapan Nilai Sila Ke-1 sampai Ke-5',
        poinPenting: [
          'Sila 1 (Ketuhanan): Menghormati dan memberi waktu teman berbeda agama saat berdoa atau beribadah.',
          'Sila 2 (Kemanusiaan): Membantu korban bencana/yatim dengan adil dan tidak mengejek logat teman.',
          'Sila 3 (Persatuan): Khidmat saat upacara bendera, bangga produk batik dalam negeri, dan menjaga kerukunan.',
          'Sila 4 (Kerakyatan): Mengutamakan musyawarah mufakat; jika voting dilakukan, menerima hasil dengan lapang dada.',
          'Sila 5 (Keadilan): Membagi tugas piket secara adil, menghargai karya seni teman, dan suka berhemat.',
        ],
        contohSingkat: 'Tidak mencela lukisan teman dan memuji usahanya mencerminkan Sila ke-5.',
        tipsPipo: 'Ingat kata kunci tiap sila: 1=Doa/Tuhan, 2=Sesama manusia, 3=Bersatu, 4=Musyawarah, 5=Adil!',
      },
      {
        id: 'pp-m3',
        judul: '4 Macam Norma, Hak & Kewajiban',
        poinPenting: [
          'Norma Agama: Bersumber dari Tuhan (berdoa/beribadah; sanksi dosa).',
          'Norma Kesusilaan: Bersumber dari hati nurani (jujur, tidak menyontek; sanksi rasa menyesal).',
          'Norma Kesopanan: Bersumber dari pergaulan masyarakat (ketuk pintu, salam, santun ke orang tua).',
          'Norma Hukum: Dibuat negara dan tertulis (menaati lampu lalu lintas, pakai helm; sanksi denda/penjara).',
          'Kewajiban harus dijalankan lebih dulu dengan penuh tanggung jawab sebelum menuntut hak.',
        ],
        contohSingkat: 'Melaksanakan kewajiban merapikan kamar membuat kita berhak menikmati kamar yang bersih dan nyaman.',
        tipsPipo: 'Kewajiban dulu baru hak! Jika hanya menuntut hak tanpa kewajiban, hidup jadi tidak harmonis.',
      },
    ],
    latihanSoal: PANCASILA_KELAS5_SOAL,
  },
  {
    id: 'bahasa-indonesia',
    name: 'Bahasa Indonesia',
    shortName: 'B. Indo',
    icon: 'book',
    description: 'Buku fiksi & nonfiksi, ide pokok, sinonim-antonim, majas, kalimat langsung, dan bahasa santun.',
    kkm: 75,
    theme: {
      accentHex: '#F97316',
      softBg: 'bg-amber-50 dark:bg-amber-950/50',
      softText: 'text-amber-700 dark:text-amber-300',
      barBg: 'bg-amber-500',
    },
    docQuestionCount: 35,
    tpList: [
      { kode: 'TP 1', deskripsi: 'Mengidentifikasi informasi penting, perbedaan buku fiksi & nonfiksi, bagian buku, puisi akrostik, ide pokok, dan unsur intrinsik cerita.' },
      { kode: 'TP 2', deskripsi: 'Memahami kosakata sifat, sinonim-antonim, imbuhan pe-, serta membedakan majas personifikasi, metafora, dan hiperbola.' },
      { kode: 'TP 3', deskripsi: 'Menyimpulkan amanat cerita serta mengubah kalimat langsung menjadi kalimat tidak langsung dan sebaliknya sesuai ejaan.' },
      { kode: 'TP 4', deskripsi: 'Menyampaikan gagasan, perkenalan, saran terhadap karya teman, dan sanggahan diskusi dengan bahasa Indonesia yang santun.' },
    ],
    kisiKisi: [
      {
        id: 'bi-k1',
        kode: 'Indikator 1',
        tp: 'TP 1',
        materi: 'Buku Fiksi, Nonfiksi & Bagian Buku',
        indikator: 'Membedakan buku fiksi (imajinasi) dan nonfiksi (fakta), mengenali bagian sampul/daftar isi, profesi ilustrator, serta puisi akrostik.',
        level: 'Pemahaman',
      },
      {
        id: 'bi-k2',
        kode: 'Indikator 2',
        tp: 'TP 1',
        materi: 'Ide Pokok & Unsur Intrinsik Cerita',
        indikator: 'Menganalisis ide pokok paragraf deskripsi serta menentukan tokoh, watak, dan latar waktu/tempat/suasana dalam cerita.',
        level: 'Penalaran',
      },
      {
        id: 'bi-k3',
        kode: 'Indikator 3',
        tp: 'TP 2',
        materi: 'Sinonim, Antonim, Imbuhan pe- & Majas',
        indikator: 'Menentukan sinonim, antonim, kata sifat berimbuhan pe-, serta membedakan majas personifikasi, metafora, dan hiperbola.',
        level: 'Penerapan',
      },
      {
        id: 'bi-k4',
        kode: 'Indikator 4',
        tp: 'TP 3',
        materi: 'Amanat Cerita & Kalimat Langsung / Tidak Langsung',
        indikator: 'Menyimpulkan amanat cerita fiksi dan mengubah kalimat langsung bertanda petik ("...") menjadi kalimat tidak langsung dengan kata hubung "bahwa".',
        level: 'Penerapan',
      },
      {
        id: 'bi-k5',
        kode: 'Indikator 5',
        tp: 'TP 4',
        materi: 'Komunikasi Lisan, Saran & Sanggahan Santun',
        indikator: 'Menyampaikan gagasan, perkenalan diri/sahabat, tanggapan saran, dan sanggahan diskusi menggunakan bahasa yang sopan dan baku.',
        level: 'Penalaran',
      },
    ],
    ringkasanMateri: [
      {
        id: 'bi-m1',
        judul: 'Buku Fiksi, Nonfiksi & Puisi Akrostik',
        poinPenting: [
          'Buku Fiksi: Berisi cerita khayalan/imajinasi (dongeng, fabel, cerpen, novel).',
          'Buku Nonfiksi: Berisi fakta, data nyata, dan pengetahuan (kamus, ensiklopedia, buku panduan/cara membuat sesuatu, biografi).',
          'Sampul depan (cover) memuat judul, nama penulis, dan gambar sampul; pembuat gambar cerita disebut ilustrator.',
          'Puisi Akrostik: Puisi yang huruf-huruf awal tiap barisnya disusun menurun membentuk sebuah kata atau nama.',
        ],
        contohSingkat: 'Buku "Mengenal Tata Surya dan Planet" = Nonfiksi; "Legenda Rawa Pening" = Fiksi.',
        tipsPipo: 'Nonfiksi = Nyata/Fakta, Fiksi = Fiktif/Khayalan. Mudah dibedakan kan!',
      },
      {
        id: 'bi-m2',
        judul: 'Sinonim, Antonim, Imbuhan pe- & 3 Majas',
        poinPenting: [
          'Sinonim = persamaan makna (giat = rajin/tekun, sabar = tabah); Antonim = lawan kata (angkuh >< rendah hati, giat >< malas).',
          'Imbuhan pe- pada kata sifat membentuk makna orang yang memiliki sifat itu (tolong → penolong, sabar → penyabar).',
          'Majas Personifikasi: benda mati seolah bertindak seperti manusia ("Peluit wasit menjerit panjang").',
          'Majas Metafora: kiasan perbandingan langsung ("Buku adalah jendela dunia", "Raja siang" = matahari).',
          'Majas Hiperbola: melebih-lebihkan kenyataan ("Suaranya membelah angkasa").',
        ],
        contohSingkat: '"Ombak berkejaran menyapa kaki di pantai" → Personifikasi.',
        tipsPipo: 'Person = orang (benda mati beraksi seperti orang), Meta = kiasan, Hiper = lebay!',
      },
      {
        id: 'bi-m3',
        judul: 'Kalimat Langsung ↔ Tidak Langsung & Bahasa Santun',
        poinPenting: [
          'Kalimat langsung menirukan ucapan persis di dalam tanda petik dua ("..."), diawali koma sebelum tanda petik.',
          'Saat diubah ke kalimat tidak langsung: tanda petik dihapus, ditambah kata hubung "bahwa", dan kata ganti disesuaikan (aku → ia/dia, kamu/-mu → -nya).',
          'Saat memberi saran atau menyanggah teman dalam diskusi, dahului dengan apresiasi/terima kasih, dengarkan sampai selesai, dan ucapkan dengan sopan (kata tolong/izin).',
        ],
        contohSingkat: 'Langsung: Ibu berkata, "Aku akan datang nanti." → Tidak langsung: Ibu berkata bahwa ia akan datang nanti.',
        tipsPipo: 'Cek selalu tanda petik ("...") dan perubahan kata ganti "aku" menjadi "ia/dia"!',
      },
    ],
    latihanSoal: BINDO_KELAS5_SOAL,
  },
  {
    id: 'seni-rupa',
    name: 'Seni Rupa',
    shortName: 'Seni Rupa',
    icon: 'palette',
    description: 'Unsur seni rupa, prinsip ritme/keseimbangan/proporsi, teknik kering & basah, serta karya 2D.',
    kkm: 75,
    theme: {
      accentHex: '#EC4899',
      softBg: 'bg-pink-50 dark:bg-pink-950/50',
      softText: 'text-pink-700 dark:text-pink-300',
      barBg: 'bg-pink-500',
    },
    docQuestionCount: 35,
    tpList: [
      { kode: 'TP 1', deskripsi: 'Mengenal dan menganalisis unsur seni rupa (titik, garis, bidang, warna, tekstur, gelap terang) serta prinsip ritme, keseimbangan, dan proporsi.' },
      { kode: 'TP 2', deskripsi: 'Membedakan media, alat, bahan, pencampuran warna, serta penerapan teknik kering dan teknik basah (aquarel & plakat).' },
      { kode: 'TP 3', deskripsi: 'Merancang karya seni rupa 2 dimensi mulai dari garis tepi, sketsa tipis, komposisi still-life/perspektif, hingga efek bayangan.' },
    ],
    kisiKisi: [
      {
        id: 'sr-k1',
        kode: 'Indikator 1',
        tp: 'TP 1',
        materi: 'Unsur Seni Rupa & Warna Primer',
        indikator: 'Mengidentifikasi unsur seni rupa (titik, garis, bidang, bentuk, warna, tekstur, gelap terang) serta kelompok warna primer (merah, kuning, biru).',
        level: 'Pemahaman',
      },
      {
        id: 'sr-k2',
        kode: 'Indikator 2',
        tp: 'TP 1',
        materi: 'Prinsip Ritme, Keseimbangan & Proporsi',
        indikator: 'Membedakan jenis prinsip ritme (repetisi, alternasi, progresif), keseimbangan simetris, serta menganalisis ketepatan proporsi (perbandingan ukuran) objek.',
        level: 'Penalaran',
      },
      {
        id: 'sr-k3',
        kode: 'Indikator 3',
        tp: 'TP 2',
        materi: 'Media, Alat & Teknik Kering / Basah',
        indikator: 'Mengidentifikasi alat menggambar (palet, pensil kode B, krayon, kuas), pencampuran warna sekunder, teknik arsir, pointilis, gradasi krayon, serta perbedaan aquarel dan plakat.',
        level: 'Penerapan',
      },
      {
        id: 'sr-k4',
        kode: 'Indikator 4',
        tp: 'TP 3',
        materi: 'Berkarya 2D, Sketsa & Komposisi Perspektif',
        indikator: 'Menentukan fungsi sketsa tipis di awal, contoh karya seni rupa 2 dimensi, serta menata komposisi objek depan–tengah–belakang secara seimbang dan proporsional.',
        level: 'Penerapan',
      },
    ],
    ringkasanMateri: [
      {
        id: 'sr-m1',
        judul: 'Unsur Rupa, Warna & Prinsip Ritme/Proporsi',
        poinPenting: [
          'Unsur dasar: Titik (unsur terkecil), Garis (hubungan titik memanjang), Bidang, Bentuk, Warna, Tekstur (sifat permukaan kasar/halus), dan Gelap Terang (bayangan berlawanan arah cahaya).',
          'Warna Primer: Merah, Kuning, Biru. Warna Sekunder: Merah+Kuning=Jingga, Biru+Kuning=Hijau, Merah+Biru=Ungu.',
          'Ritme (irama): Repetisi (pengulangan sama persis), Alternasi (selang-seling, misal bunga–daun), Progresif (ukuran berubah bertahap kecil ke besar).',
          'Proporsi adalah perbandingan ukuran antarbagian objek agar wajar; Keseimbangan simetris berarti sisi kiri dan kanan sama.',
        ],
        contohSingkat: 'Jika arah sinar matahari dari kanan atas, maka bayangan gelap digambar jatuh ke arah kiri bawah.',
        tipsPipo: 'Hafal 3 jenis ritme: Repetisi (sama), Alternasi (bergantian), Progresif (makin besar/kecil)!',
      },
      {
        id: 'sr-m2',
        judul: 'Teknik Kering vs Teknik Basah & Karya 2D',
        poinPenting: [
          'Teknik Kering (tanpa air/minyak): pensil kode B (2B/4B/6B untuk arsir gelap terang), pensil warna, krayon/oil pastel (gradasi dengan memutar halus batas warna gelap ke muda), dan pointilis (kumpulan titik-titik).',
          'Teknik Basah (pakai pengencer air & kertas gambar tebal): teknik Aquarel (cat air encer/transparan) vs teknik Plakat (cat poster kental/pekat menutup kertas), dibantu kuas dan palet.',
          'Karya 2D (panjang & lebar, dilihat dari depan): lukisan, gambar ilustrasi, gambar dekoratif.',
          'Langkah menggambar: buat garis tepi/bingkai → sketsa tipis agar mudah dihapus bila salah → tebalkan garis → beri warna dan bayangan.',
        ],
        contohSingkat: 'Menggambar pot 10 cm dan bunga 20 cm (2× lipat pot) menjaga prinsip proporsi.',
        tipsPipo: 'Aquarel = Airnya banyak (transparan), Plakat = Pekat dan tebal!',
      },
    ],
    latihanSoal: SENI_RUPA_KELAS5_SOAL,
  },
  {
    id: 'matematika',
    name: 'Matematika',
    shortName: 'Matematika',
    icon: 'calculator',
    description: 'Nilai tempat & hitung cacah, FPB & KPK, membandingkan pecahan, serta keliling-luas bangun datar.',
    kkm: 75,
    theme: {
      accentHex: '#0066FF',
      softBg: 'bg-sky-50 dark:bg-sky-950/50',
      softText: 'text-sky-700 dark:text-sky-300',
      barBg: 'bg-[#0066FF]',
    },
    docQuestionCount: 25,
    tpList: [
      { kode: 'TP 1', deskripsi: 'Menentukan nilai tempat bilangan cacah lima angka dan menyelesaikan operasi hitung campuran penjumlahan serta pengurangan.' },
      { kode: 'TP 2', deskripsi: 'Menentukan faktor persekutuan serta memecahkan soal cerita berkaitan dengan FPB dan KPK.' },
      { kode: 'TP 3', deskripsi: 'Membandingkan, menyetarakan pecahan biasa/desimal/persen, dan mengurutkan pecahan dari terkecil hingga terbesar.' },
      { kode: 'TP 4', deskripsi: 'Menghitung keliling, luas, ukuran sisi/lebar inversi, serta luas gabungan/ubin bangun datar persegi, persegi panjang, dan segitiga.' },
    ],
    kisiKisi: [
      {
        id: 'mtk-k1',
        kode: 'Indikator 1',
        tp: 'TP 1',
        materi: 'Nilai Tempat & Hitung Campuran Bilangan Cacah',
        indikator: 'Menentukan nilai tempat bilangan cacah lima angka (puluhan ribu sampai satuan) serta menyelesaikan operasi hitung campuran penjumlahan dan pengurangan dalam soal cerita.',
        level: 'Penerapan',
      },
      {
        id: 'mtk-k2',
        kode: 'Indikator 2',
        tp: 'TP 2',
        materi: 'Faktor Persekutuan, FPB & KPK',
        indikator: 'Mengidentifikasi faktor persekutuan serta menerapkan KPK (jadwal bersamaan) dan FPB (pembagian paket terbanyak sama rata) dalam masalah sehari-hari.',
        level: 'Penalaran',
      },
      {
        id: 'mtk-k3',
        kode: 'Indikator 3',
        tp: 'TP 3',
        materi: 'Membandingkan, Menyetarakan & Mengurutkan Pecahan',
        indikator: 'Membandingkan dua pecahan (<, >, =), menyetarakan pecahan biasa, desimal, dan persen, serta mengurutkannya dari terkecil ke terbesar.',
        level: 'Penerapan',
      },
      {
        id: 'mtk-k4',
        kode: 'Indikator 4',
        tp: 'TP 4',
        materi: 'Keliling & Luas Bangun Datar',
        indikator: 'Menghitung keliling dan luas persegi, persegi panjang, segitiga, mencari sisi/lebar secara inversi, serta menganalisis luas gabungan/kebutuhan ubin.',
        level: 'Penalaran',
      },
    ],
    ringkasanMateri: [
      {
        id: 'mtk-m1',
        judul: 'Nilai Tempat 5 Angka & Hitung Campuran',
        poinPenting: [
          'Pada bilangan lima angka ABCDE: A = puluhan ribu, B = ribuan, C = ratusan, D = puluhan, E = satuan.',
          'Operasi penjumlahan dan pengurangan setara: kerjakan berurutan dari kiri ke kanan.',
        ],
        contohSingkat: 'Pada 68.415: angka 6 = puluhan ribu, 8 = ribuan, 4 = ratusan, 1 = puluhan, 5 = satuan.',
        tipsPipo: 'Susun ke bawah sejajar sesuai nilai tempatnya agar tidak salah menjumlah atau mengurang!',
      },
      {
        id: 'mtk-m2',
        judul: 'KPK vs FPB dalam Soal Cerita',
        poinPenting: [
          'KPK dipakai jika soal menanyakan jadwal bertemu atau menyala bersama-sama lagi setiap beberapa hari/detik.',
          'FPB dipakai jika soal menanyakan jumlah paket/kantong terbanyak dengan isi yang dibagi sama rata.',
        ],
        contohSingkat: '30 penghapus dan 45 pensil dibagi sama rata → FPB(30, 45) = 15 paket (isi 2 penghapus & 3 pensil).',
        tipsPipo: 'Kata kunci: "bersamaan lagi = KPK", "paling banyak / sama rata = FPB"!',
      },
      {
        id: 'mtk-m3',
        judul: 'Membandingkan Pecahan, Desimal & Persen',
        poinPenting: [
          'Samakan bentuknya ke desimal atau samakan penyebutnya terlebih dahulu sebelum membandingkan atau mengurutkan.',
          'Cara cepat ke desimal: pembilang ÷ penyebut (misal 1/4 = 0,25; 1/2 = 0,50; 3/4 = 0,75; 3/5 = 0,60; 3/8 = 0,375).',
          'Persen (%) artinya per seratus: 75% = 75/100 = 0,75 = 3/4.',
        ],
        contohSingkat: 'Mengurutkan 0,4 ; 3/4 ; 50% ; 1/5 → ubah jadi 0,40 ; 0,75 ; 0,50 ; 0,20 → urutan: 1/5 ; 0,4 ; 50% ; 3/4.',
        tipsPipo: 'Ubah semuanya ke desimal 2 angka di belakang koma (perseratus) biar gampang dibandingkan!',
      },
      {
        id: 'mtk-m4',
        judul: 'Keliling, Luas & Bangun Gabungan',
        poinPenting: [
          'Persegi: Keliling = 4 × sisi, Luas = sisi × sisi. Jika diketahui keliling, sisi = Keliling ÷ 4.',
          'Persegi Panjang: Keliling = 2 × (p + l), Luas = p × l. Jika diketahui luas & panjang, lebar = Luas ÷ panjang.',
          'Segitiga: Keliling = jumlah ketiga sisinya, Luas = (alas × tinggi) ÷ 2.',
          'Untuk soal ubin: samakan satuan panjang ruangan ke cm dulu (1 m = 100 cm), lalu Luas ruangan ÷ Luas 1 ubin.',
        ],
        contohSingkat: 'Lapangan segitiga sisi 10 m, 12 m, 14 m → 1 putaran = 36 m; 2 putaran = 72 m.',
        tipsPipo: 'Selalu cek satuan akhir (cm, m, atau cm²/m²) sebelum memilih jawaban!',
      },
    ],
    latihanSoal: MATEMATIKA_KELAS5_SOAL,
  },
  {
    id: 'pjok',
    name: 'PJOK',
    shortName: 'PJOK',
    icon: 'activity',
    description: 'Kisi-kisi dan soal latihan PJOK belum tersedia saat ini.',
    isUnavailable: true,
    unavailableNote:
      'Dokumen kisi-kisi dan bank soal latihan resmi untuk mata pelajaran PJOK belum tersedia. Jadwal asesmen PJOK tetap aktif agar kamu tetap ingat waktunya, dan kamu tetap bisa bertanya konsep dasar olahraga kepada Pipo.',
    kkm: 75,
    theme: {
      accentHex: '#0284C7',
      softBg: 'bg-cyan-50 dark:bg-cyan-950/50',
      softText: 'text-cyan-700 dark:text-cyan-300',
      barBg: 'bg-cyan-500',
    },
    tpList: [],
    kisiKisi: [],
    ringkasanMateri: [],
    latihanSoal: [],
  },
  {
    id: 'ipas',
    name: 'IPAS',
    shortName: 'IPAS',
    icon: 'leaf',
    description: 'Sistem organ manusia, ekosistem & rantai makanan, siklus air & konservasi, serta penjernihan air.',
    kkm: 75,
    theme: {
      accentHex: '#10B981',
      softBg: 'bg-emerald-50 dark:bg-emerald-950/50',
      softText: 'text-emerald-700 dark:text-emerald-300',
      barBg: 'bg-emerald-500',
    },
    docQuestionCount: 35,
    tpList: [
      { kode: 'TP 1', deskripsi: 'Mengenal sistem peredaran darah, pencernaan, dan pernapasan manusia beserta gangguan dan pencegahannya.' },
      { kode: 'TP 2', deskripsi: 'Menganalisis komponen biotik/abiotik, rantai & jaring makanan, aliran energi 10%, serta keseimbangan ekosistem.' },
      { kode: 'TP 3', deskripsi: 'Memahami tahapan siklus air, krisis ketersediaan air bersih, dampak alih lahan, serta upaya konservasi hemat air.' },
      { kode: 'TP 4', deskripsi: 'Merancang dan mengevaluasi alat penjernihan air sederhana (filtrasi bertingkat) serta kelayakan konsumsi air.' },
    ],
    kisiKisi: [
      {
        id: 'ipas-k1',
        kode: 'Indikator 1',
        tp: 'TP 1',
        materi: 'Sistem Peredaran Darah, Pencernaan & Pernapasan',
        indikator: 'Mengidentifikasi bagian jantung (bilik kiri/serambi kiri), pembuluh nadi/vena, data denyut nadi, pencegahan hipertensi/anemia/maag/diare, usus halus, serta penyaringan udara di hidung & trakea.',
        level: 'Penerapan',
      },
      {
        id: 'ipas-k2',
        kode: 'Indikator 2',
        tp: 'TP 2',
        materi: 'Ekosistem, Aliran Energi & Pencemaran',
        indikator: 'Membedakan biotik-abiotik, peran pengurai (jamur/bakteri), dampak hilangnya predator, pengendalian hayati, hukum aliran energi 10%, eutrofikasi detergen, dan kestabilan hutan vs monokultur.',
        level: 'Penalaran',
      },
      {
        id: 'ipas-k3',
        kode: 'Indikator 3',
        tp: 'TP 3',
        materi: 'Siklus Air & Konservasi Air Bersih',
        indikator: 'Menentukan tahapan siklus air (evaporasi, transpirasi, kondensasi, presipitasi, infiltrasi), komposisi 1% air tawar cair, dampak betonisasi & hutan gundul, biopori, serta hitung hemat air.',
        level: 'Penerapan',
      },
      {
        id: 'ipas-k4',
        kode: 'Indikator 4',
        tp: 'TP 4',
        materi: 'Penjernihan Air Sederhana (Filtrasi)',
        indikator: 'Menjelaskan fungsi arang aktif, kerikil, pasir, dan ijuk/kapas, urutan susunan lapisan filtrasi botol bekas, serta keharusan memasak air sebelum diminum.',
        level: 'Penalaran',
      },
    ],
    ringkasanMateri: [
      {
        id: 'ipas-m1',
        judul: 'Sistem Organ Manusia & Cara Menjaganya',
        poinPenting: [
          'Jantung & Pembuluh: Bilik kiri berotot paling tebal memompa darah kaya O₂ ke seluruh tubuh. Darah bersih dari paru-paru masuk serambi kiri lewat vena pulmonalis. Pembuluh nadi (arteri) keluar jantung dan berdinding tebal elastis.',
          'Gangguan Darah & Pencegahannya: Hipertensi dicegah kurangi garam & olahraga; anemia = kurang sel darah merah/Hb; penumpukan kolesterol menyempitkan pembuluh dan membebani jantung.',
          'Pencernaan & Pernapasan: Maag dicegah makan teratur; usus halus menyerap sari makanan ke darah; rambut hidung & lendir menyaring debu serta menyesuaikan suhu udara; silia trakea/bronkus mendorong kotoran keluar.',
        ],
        contohSingkat: 'Denyut nadi naik saat lari karena otot butuh lebih banyak oksigen dan energi.',
        tipsPipo: 'Ingat urutan ruang jantung: serambi menerima darah, bilik memompa darah keluar!',
      },
      {
        id: 'ipas-m2',
        judul: 'Ekosistem, Rantai Makanan & Aliran Energi',
        poinPenting: [
          'Komponen abiotik (air, cahaya, CO₂, mineral, batu) mendukung makhluk hidup (biotik). Tumbuhan menyerap air/mineral lewat akar dan CO₂ lewat daun.',
          'Jamur & bakteri berperan sebagai dekomposer pengembali zat hara ke tanah. Setiap naik 1 tingkat trofik hanya sekitar 10% energi yang berpindah.',
          'Jika predator alami (burung hantu/katak) hilang, hama tikus/serangga meledak; limbah detergen memicu eutrofikasi eceng gondok sehingga oksigen terlarut turun dan ikan mati.',
        ],
        contohSingkat: 'Hutan alami lebih tahan hama dibanding kebun monokultur karena punya banyak predator alami.',
        tipsPipo: 'Hukum 10%: tinggal bagi 10 tiap naik 1 langkah di rantai makanan!',
      },
      {
        id: 'ipas-m3',
        judul: 'Siklus Air, Konservasi & Filtrasi Sederhana',
        poinPenting: [
          'Tahapan siklus air: Evaporasi (penguapan air), Transpirasi (dari daun), Kondensasi (menjadi awan), Presipitasi (hujan), Infiltrasi (meresap ke air tanah).',
          'Air Bumi = 97% air asin, 3% air tawar (2% es/gletser, hanya ~1% air tawar cair di sungai/danau/tanah). Betonisasi menghambat infiltrasi sehingga perlu lubang biopori dan perilaku hemat air.',
          'Urutan filtrasi botol dari atas ke bawah: kerikil besar → kerikil kecil → pasir kasar → pasir halus → arang aktif (serap bau & zat kimia) → ijuk/kapas. Air jernih tetap harus dimasak mendidih sebelum diminum.',
        ],
        contohSingkat: 'Keran bocor 25 mL/menit selama 2 jam membuang 3.000 mL = 3 liter air bersih.',
        tipsPipo: 'Lapisan saringan air: besar di atas (kerikil), makin halus ke bawah, arang penyerap bau, ijuk/kapas penutup!',
      },
    ],
    latihanSoal: IPAS_KELAS5_SOAL,
  },
  {
    id: 'plh',
    name: 'PLH',
    shortName: 'PLH',
    icon: 'sprout',
    description: 'Kelestarian lingkungan & budidaya anggrek bulan, penyakit lingkungan (Diare/DBD/Malaria), dan 3R.',
    kkm: 75,
    theme: {
      accentHex: '#16A34A',
      softBg: 'bg-lime-50 dark:bg-lime-950/50',
      softText: 'text-lime-700 dark:text-lime-300',
      barBg: 'bg-lime-600',
    },
    docQuestionCount: 35,
    tpList: [
      { kode: 'TP 1', deskripsi: 'Menjelaskan kelestarian lingkungan, tanaman hias Kota Batu, sifat epifit & budidaya Anggrek Bulan, serta tindakan hemat air.' },
      { kode: 'TP 2', deskripsi: 'Mengidentifikasi penyebab, penularan, pertolongan pertama, dan pencegahan penyakit lingkungan (Diare, DBD, dan Malaria).' },
      { kode: 'TP 3', deskripsi: 'Memilah sampah organik & anorganik serta menerapkan prinsip 3R (Reduce, Reuse, Recycle) dan kegiatan Bank Sampah.' },
    ],
    kisiKisi: [
      {
        id: 'plh-k1',
        kode: 'Indikator 1',
        tp: 'TP 1',
        materi: 'Kelestarian Lingkungan & Tanaman Hias Kota Batu',
        indikator: 'Mengidentifikasi fungsi tanaman hias (menghasilkan oksigen, menyerap polusi), sentra bunga Desa Sidomulyo, serta ciri bunga nasional Anggrek Bulan (Phalaenopsis amabilis).',
        level: 'Pemahaman',
      },
      {
        id: 'plh-k2',
        kode: 'Indikator 2',
        tp: 'TP 1',
        materi: 'Budidaya Anggrek Bulan & Hemat Air',
        indikator: 'Menentukan sifat epifit anggrek bulan, media tanam berongga (arang, pakis, sabut kelapa), peneduh/paranet, serta memanfaatkan air bekas cucian beras/sayur.',
        level: 'Penerapan',
      },
      {
        id: 'plh-k3',
        kode: 'Indikator 3',
        tp: 'TP 2',
        materi: 'Penyakit Lingkungan (Diare, DBD & Malaria)',
        indikator: 'Mengidentifikasi penyebab, gejala, dan pencegahan Diare (E. coli, CTPS, Oralit/LGG), DBD (Aedes aegypti, 3M Plus), serta Malaria (Anopheles menungging, Plasmodium).',
        level: 'Penalaran',
      },
      {
        id: 'plh-k4',
        kode: 'Indikator 4',
        tp: 'TP 3',
        materi: 'Pengelolaan Sampah Prinsip 3R & Bank Sampah',
        indikator: 'Memilah sampah organik dan anorganik serta menerapkan Reduce (tumbler), Reuse (wadah bekas/kertas buram), dan Recycle (komposter, bubur kertas/pulp, pot botol gantung).',
        level: 'Penerapan',
      },
    ],
    ringkasanMateri: [
      {
        id: 'plh-m1',
        judul: 'Tanaman Hias & Budidaya Anggrek Bulan',
        poinPenting: [
          'Merawat tanaman hias menghasilkan oksigen, menyerap polusi, dan membuat pekarangan indah. Di Kota Batu, Desa Sidomulyo dikenal sebagai sentra tanaman hias (mawar, krisan, hortensia, anggrek).',
          'Anggrek Bulan (Phalaenopsis amabilis) adalah Puspa Pesona Indonesia yang bersifat epifit (menempel di pohon lain tanpa merugikan).',
          'Syarat tumbuh anggrek: pot berlubang agar air tidak menggenang, media tanam berongga (arang kayu, pakis cacah, sabut kelapa), dan tempat teduh/jaring paranet (tidak tahan matahari langsung).',
        ],
        contohSingkat: 'Air bekas cucian beras bisa ditampung untuk menyiram tanaman agar hemat air bersih.',
        tipsPipo: 'Ingat media anggrek harus berongga (arang, pakis, sabut kelapa) supaya akarnya bisa bernapas!',
      },
      {
        id: 'plh-m2',
        judul: 'Cegah Diare, DBD & Malaria',
        poinPenting: [
          'Diare: disebabkan bakteri E. coli dari makanan/tangan kotor (gejala BAB cair & lemas/dehidrasi). Cegah dengan CTPS (Cuci Tangan Pakai Sabun) & jajan tertutup; pertolongan pertama minum Oralit / Larutan Gula Garam (1 sdt gula + 1/4 sdt garam per gelas 200 ml).',
          'DBD: disebabkan virus Dengue lewat nyamuk Aedes aegypti (menggigit pagi–sore, bertelur di genangan air jernih seperti kaleng bekas & tatakan pot). Cegah dengan 3M Plus (Menguras, Menutup, Mendaur ulang).',
          'Malaria: disebabkan parasit Plasmodium lewat nyamuk Anopheles betina (menggigit malam hari, posisi tubuh menungging saat hinggap).',
        ],
        contohSingkat: 'Membuang air di tatakan bawah pot bunga mencegah nyamuk Aedes aegypti bertelur.',
        tipsPipo: 'Bedakan 2 nyamuk: Aedes aegypti = DBD (pagi/sore, air jernih); Anopheles = Malaria (malam, menungging)!',
      },
      {
        id: 'plh-m3',
        judul: 'Prinsip 3R & Pemilahan Sampah',
        poinPenting: [
          'Sampah Organik (daun gugur, sisa sayur/buah) mudah membusuk → diolah di komposter menjadi pupuk kompos.',
          'Sampah Anorganik (botol plastik, kaleng, kaca) sulit terurai → disetor ke Bank Sampah atau didaur ulang.',
          'Reduce: mengurangi sampah sejak awal (bawa tumbler & kotak bekal). Reuse: memakai ulang (kaleng biskuit jadi tempat pensil). Recycle: mengolah jadi produk baru (bubur kertas jadi topeng/bingkai).',
        ],
        contohSingkat: 'Mengolah 10 kg daun kering menjadi kompos di kebun sekolah adalah contoh Recycle.',
        tipsPipo: 'Reduce = Kurangi, Reuse = Pakai Ulang, Recycle = Olah Jadi Barang Baru!',
      },
    ],
    latihanSoal: PLH_KELAS5_SOAL,
  },
  {
    id: 'bahasa-inggris',
    name: 'Bahasa Inggris',
    shortName: 'B. Inggris',
    icon: 'languages',
    description: 'Fruits & vegetables, singular/plural & partitives, things in the kitchen, cooking steps, dan directions.',
    kkm: 75,
    theme: {
      accentHex: '#6366F1',
      softBg: 'bg-indigo-50 dark:bg-indigo-950/50',
      softText: 'text-indigo-700 dark:text-indigo-300',
      barBg: 'bg-indigo-500',
    },
    docQuestionCount: 35,
    tpList: [
      { kode: 'TP 1', deskripsi: 'Memahami teks lisan, tulis, dan visual tentang fruits/vegetables, satuan benda (partitives), kitchen tools & prepositions, serta cooking steps.' },
      { kode: 'TP 2', deskripsi: 'Mengidentifikasi informasi penting seputar tempat umum (neighborhood places), belanja di pasar, dan pemahaman denah/landmarks.' },
      { kode: 'TP 3', deskripsi: 'Menggunakan ungkapan lisan menanyakan jumlah/harga (How many/How much) serta menanyakan dan memberi petunjuk arah (giving direction).' },
    ],
    kisiKisi: [
      {
        id: 'en5-k1',
        kode: 'Indikator 1',
        tp: 'TP 1',
        materi: 'Fruits, Vegetables & Partitives (Satuan Benda)',
        indikator: 'Mengidentifikasi nama buah dan sayur (vegetables & fruits) serta menuliskan bentuk singular/plural dan satuan (a head of, a bunch of, a slice of, a basket of, a bag of).',
        level: 'Pemahaman',
      },
      {
        id: 'en5-k2',
        kode: 'Indikator 2',
        tp: 'TP 1 & 2',
        materi: 'Things in the Kitchen & Preposition of Place',
        indikator: 'Mengenali peralatan dapur (stove, sink, knife, frying pan, pot, ladle) dan menentukan letak benda menggunakan kata depan (on, in, under, beside, behind, between, across from).',
        level: 'Penerapan',
      },
      {
        id: 'en5-k3',
        kode: 'Indikator 3',
        tp: 'TP 1 & 2',
        materi: 'Cooking Steps (Urutan Memasak)',
        indikator: 'Mengurutkan langkah memasak dan memahami kata kerja dapur (wash, peel, cut, put, pour, stir, boil, fry, mix, blend).',
        level: 'Penalaran',
      },
      {
        id: 'en5-k4',
        kode: 'Indikator 4',
        tp: 'TP 2 & 3',
        materi: 'Places in Neighborhood, How Many & How Much',
        indikator: 'Mengidentifikasi tempat umum (hospital, post office, bakery, library, museum), menggunakan "How many" (countable) vs "How much" (harga/uncountable), dan menghitung belanja.',
        level: 'Penerapan',
      },
      {
        id: 'en5-k5',
        kode: 'Indikator 5',
        tp: 'TP 3',
        materi: 'Asking & Giving Direction (Menanyakan & Memberi Arah)',
        indikator: 'Memahami denah serta menggunakan ungkapan arah seperti "Excuse me, can you tell me the way...", "Go straight", "Turn left/right", "crossroads", dan "T-junction".',
        level: 'Penerapan',
      },
    ],
    ringkasanMateri: [
      {
        id: 'en5-m1',
        judul: 'Fruits, Vegetables & Satuan Benda (Partitives)',
        poinPenting: [
          'Vegetables: carrot (wortel), spinach (bayam), cabbage (kubis), broccoli (brokoli), eggplant (terung), tomato → plural: tomatoes.',
          'Satuan benda: a head of cabbage (1 bonggol kubis), a bunch of spinach/bananas (1 ikat bayam / 1 sisir pisang), a slice of bread/watermelon (1 potong roti/semangka), a basket of strawberries, a bag of potatoes.',
          'Jika lebih dari satu (plural), satuannya ditambah -s/-es: two bunches of bananas, four slices of bread.',
        ],
        contohSingkat: '"Ibu membeli 2 sisir pisang" → "two bunches of bananas".',
        tipsPipo: 'Ingat: 1 buah = singular (a slice), lebih dari 1 = plural (three slices)!',
      },
      {
        id: 'en5-m2',
        judul: 'Things in the Kitchen, Prepositions & Cooking Steps',
        poinPenting: [
          'Alat dapur: stove (kompor), sink (wastafel), refrigerator (kulkas), frying pan (wajan), pot/saucepan (panci), knife (pisau), cutting board (talenan), ladle (sendok sayur).',
          'Preposition of place: on (di atas), in (di dalam), under (di bawah), beside (di samping), behind (di belakang), in front of (di depan), between (di antara 2 benda), across from (di seberang).',
          'Cooking steps: wash (cuci), peel (kupas), cut (potong), put (masukkan), pour (tuangkan), boil (rebus), fry (goreng), stir (aduk), blend (haluskan).',
        ],
        contohSingkat: '"The lamp is between the book and the clock." / "Please peel the mango skin!"',
        tipsPipo: 'Between selalu untuk di antara DUA benda (A and B)!',
      },
      {
        id: 'en5-m3',
        judul: 'How Many vs How Much & Giving Direction',
        poinPenting: [
          '"How many ..." untuk menanyakan jumlah benda yang dapat dihitung ("How many apples are there?").',
          '"How much ..." untuk menanyakan harga ("How much is a kilogram of grapes?") atau benda tak terhitung.',
          'Tempat umum: Hospital (rumah sakit), Post office (kantor pos), Bakery (toko roti), Library (perpustakaan), Police station (kantor polisi).',
          'Petunjuk arah: Go straight (jalan lurus), Turn left (belok kiri), Turn right (belok kanan), Crossroads (perempatan), T-junction (pertigaan).',
        ],
        contohSingkat: '"Go straight, then turn right at the T-junction. The bakery is across from the park."',
        tipsPipo: 'How MANY = bisa dihitung (Many = Macam-macam jumlah), How MUCH = harga/uang!',
      },
    ],
    latihanSoal: BINGGRIS_KELAS5_SOAL,
    classContent: {
      'Kelas 6': {
        description: 'Describing vegetables, expressing like/dislike, hygiene frequency habits, order activities, & past tense.',
        docQuestionCount: 35,
        tpList: [
          { kode: 'TP 1', deskripsi: 'Memahami teks lisan, tulis, dan visual tentang ciri sayuran (describing vegetables), kebiasaan kebersihan (frequency habits), serta urutan langkah kegiatan.' },
          { kode: 'TP 2', deskripsi: 'Menafsirkan makna teks naratif/prosedur lampau memakai Simple Past Tense (regular & irregular verbs) dan ekspresi like/dislike.' },
          { kode: 'TP 3', deskripsi: 'Menyampaikan kesukaan/ketidaksukaan secara santun, laporan lisan kegiatan masa lalu, dan evaluasi survei kelas.' },
        ],
        kisiKisi: [
          {
            id: 'en6-k1',
            kode: 'Indikator 1',
            tp: 'TP 1',
            materi: 'Describing Vegetables (Ciri Fisik Sayuran)',
            indikator: 'Mengidentifikasi dan membedakan sayuran (lettuce, carrot, spinach, broccoli, eggplant, bitter gourd) berdasarkan warna, bentuk, dan rasanya dalam bahasa Inggris.',
            level: 'Pemahaman',
          },
          {
            id: 'en6-k2',
            kode: 'Indikator 2',
            tp: 'TP 1',
            materi: 'Frequency Hygiene Habits & Order Activities',
            indikator: 'Menentukan urutan kebiasaan hidup bersih memakai kata frekuensi (always, usually, sometimes, never) dan menganalisis teks prosedur memakai "First", "Next", "Finally".',
            level: 'Penerapan',
          },
          {
            id: 'en6-k3',
            kode: 'Indikator 3',
            tp: 'TP 2',
            materi: 'Simple Past Tense (Regular & Irregular Verbs)',
            indikator: 'Menggunakan dan membedakan kata kerja lampau beraturan (-ed/-d seperti washed, cleaned, cooked, planted) dan tak beraturan (went, ate, bought, swept) dalam cerita pengalaman kemarin.',
            level: 'Penalaran',
          },
          {
            id: 'en6-k4',
            kode: 'Indikator 4',
            tp: 'TP 3',
            materi: 'Expressing Like/Dislike & Oral Past Report',
            indikator: 'Menggunakan ungkapan kesukaan ("I love...", "I really enjoy...") dan penolakan sopan ("I dislike...", "I’m sorry, I don’t like...") serta menyusun laporan lisan kegiatan masa lampau.',
            level: 'Penerapan',
          },
        ],
        ringkasanMateri: [
          {
            id: 'en6-m1',
            judul: 'Describing Vegetables & Expressing Like/Dislike',
            poinPenting: [
              'Ciri sayuran: Broccoli (green, looks like a small tree), Carrot (orange, long, rich in vitamin A), Lettuce (green, curly, slightly bitter), Eggplant (purple, oval/round), Spinach (green with soft leaves), Bitter gourd (pare, bitter).',
              'Expressing Like (Suka): "I love eating...", "I really enjoy...", "My favorite vegetable is..."',
              'Expressing Dislike (Tidak suka secara sopan): "I’m sorry, I dislike bitter gourd because it tastes bitter."',
            ],
            contohSingkat: '"I really love crunchy carrots because they are good for my eyes."',
            tipsPipo: 'Tambahkan alasan memakai "because..." supaya kalimat bahasa Inggrismu makin lengkap!',
          },
          {
            id: 'en6-m2',
            judul: 'Frequency Hygiene Habits & Order Activities',
            poinPenting: [
              'Kata keterangan frekuensi (dari tersering ke terjarang): Always (selalu/100%), Usually (biasanya), Sometimes (kadang-kadang), Never (tidak pernah).',
              'Order activities (urutan langkah kegiatan): First (pertama), Next / Then (selanjutnya), Finally (terakhir).',
            ],
            contohSingkat: '"First, wash the tomatoes. Next, cut them. Finally, blend them into juice."',
            tipsPipo: 'Always = selalu tanpa terlewat, Sometimes = kadang-kadang!',
          },
          {
            id: 'en6-m3',
            judul: 'Simple Past Tense (Regular vs Irregular Verbs)',
            poinPenting: [
              'Penanda waktu lampau: yesterday (kemarin), last week (minggu lalu), last Sunday, last holiday.',
              'Regular verb (ditambah -ed/-d): wash → washed, clean → cleaned, cook → cooked, slice → sliced, plant → planted.',
              'Irregular verb (berubah bentuk): go → went, eat → ate, buy → bought, sweep → swept.',
            ],
            contohSingkat: '"Last week, we cleaned the garden and bought some flower seeds."',
            tipsPipo: 'Kalau ada kata "yesterday" atau "last...", pastikan kata kerjanya bentuk lampau (Verb 2)!',
          },
        ],
        latihanSoal: BINGGRIS_KELAS6_SOAL,
      },
    },
  },
  {
    id: 'kka',
    name: 'KKA',
    shortName: 'KKA',
    icon: 'cpu',
    description: 'Berpikir komputasional (dekomposisi, pola, abstraksi, algoritma) dan mesin cerdas vs noncerdas.',
    kkm: 75,
    theme: {
      accentHex: '#7C3AED',
      softBg: 'bg-violet-50 dark:bg-violet-950/50',
      softText: 'text-violet-700 dark:text-violet-300',
      barBg: 'bg-violet-500',
    },
    docQuestionCount: 35,
    tpList: [
      { kode: 'TP 1', deskripsi: 'Memahami konsep 4 pilar berpikir komputasional: Dekomposisi, Pengenalan Pola, Abstraksi, dan Algoritma.' },
      { kode: 'TP 2', deskripsi: 'Menerapkan berpikir komputasional dalam urutan langkah, gerak petak, pengemasan, antrean, dan efisiensi rute/jadwal.' },
      { kode: 'TP 3', deskripsi: 'Membedakan mesin cerdas berbasis kecerdasan artifisial (AI) yang belajar dari data latih dengan mesin noncerdas.' },
    ],
    kisiKisi: [
      {
        id: 'kka5-k1',
        kode: 'Indikator 1',
        tp: 'TP 1',
        materi: '4 Pilar Berpikir Komputasional',
        indikator: 'Mengidentifikasi pengertian dan contoh dari Dekomposisi, Pengenalan Pola, Abstraksi, dan Algoritma.',
        level: 'Pemahaman',
      },
      {
        id: 'kka5-k2',
        kode: 'Indikator 2',
        tp: 'TP 2',
        materi: 'Penerapan Berpikir Komputasional',
        indikator: 'Menerapkan algoritma urutan langkah, posisi pergerakan petak, pengelompokan/pengemasan efisien, pengenalan pola bilangan/kode, serta penentuan prioritas.',
        level: 'Penalaran',
      },
      {
        id: 'kka5-k3',
        kode: 'Indikator 3',
        tp: 'TP 3',
        materi: 'Mesin Cerdas (AI) vs Mesin Noncerdas',
        indikator: 'Membedakan mesin cerdas berbasis kecerdasan artifisial (belajar dari data, adaptif dengan sensor) dan mesin noncerdas (bekerja tetap sesuai tombol/waktu).',
        level: 'Penerapan',
      },
    ],
    ringkasanMateri: [
      {
        id: 'kka5-m1',
        judul: '4 Pilar Utama Berpikir Komputasional',
        poinPenting: [
          'Dekomposisi: Memecah masalah besar yang rumit menjadi bagian-bagian kecil agar mudah dikerjakan (contoh: membagi tim dekorasi, kebersihan, dan penerima tamu untuk pameran kelas).',
          'Pengenalan Pola: Menemukan kesamaan atau keteraturan berulang (contoh: pola nomor kursi A2, A4, A6, A8 atau manik-manik merah-putih-biru).',
          'Abstraksi: Fokus pada informasi yang paling penting dan mengabaikan detail yang tidak relevan (contoh: fokus pada jarak/waktu tercepat dan mengabaikan warna tiang lampu di jalan).',
          'Algoritma: Menyusun urutan langkah logis dan sistematis dari awal sampai selesai (jika urutan terbalik, tujuan bisa gagal).',
        ],
        contohSingkat: 'Saat membaca soal cerita, mencatat angka penting dan mengabaikan warna baju tokoh = Abstraksi.',
        tipsPipo: 'Hafalkan 4 huruf D-P-A-A: Dekomposisi (Pecah), Pola (Ulang), Abstraksi (Saring), Algoritma (Urutkan)!',
      },
      {
        id: 'kka5-m2',
        judul: 'Mesin Cerdas (AI) vs Mesin Noncerdas',
        poinPenting: [
          'Mesin Cerdas dilengkapi Kecerdasan Artifisial (AI): mampu belajar dari data/pengalaman, mengenali suara/gambar/wajah, dan beradaptasi dengan lingkungan (contoh: Face Unlock ponsel, asisten suara pintar, rekomendasi video, kamera pemilah sampah/buah).',
          'Mesin Noncerdas: hanya bekerja menjalankan instruksi tetap sesuai tombol atau pengatur waktu manusia, tidak bisa belajar sendiri (contoh: kipas angin tombol angka, kalkulator saku, mesin cuci biasa, pintu geser keset pemicu tetap).',
          'Keakuratan mesin cerdas bergantung pada banyaknya data latih yang dipelajarinya (misal melatih kamera dengan lebih banyak foto dalam berbagai cahaya).',
        ],
        contohSingkat: 'Lampu taman bersensor gerak & cahaya lebih hemat energi dibanding lampu pengatur waktu tetap.',
        tipsPipo: 'Tanya pada dirimu: "Apakah alat ini bisa belajar & mengenali situasi?" Jika YA = Mesin Cerdas!',
      },
    ],
    latihanSoal: KKA_KELAS5_SOAL,
    classContent: {
      'Kelas 6': {
        description: 'Pemrograman blok & debugging, cara kerja internet & konten digital, serta etika & anti-phishing.',
        docQuestionCount: 35,
        tpList: [
          { kode: 'TP 1', deskripsi: 'Menerapkan berpikir algoritmis, kategori blok pemrograman visual (Events, Motion, Looks, Sound, Wait, Repeat), serta debugging.' },
          { kode: 'TP 2', deskripsi: 'Memahami cara kerja paket data internet, ukuran file & cloud storage, serta merancang storyboard, infografis, dan poster digital.' },
          { kode: 'TP 3', deskripsi: 'Menerapkan sikap bijak berinternet, menjaga kerahasiaan data pribadi/OTP/sandi kuat, hak cipta, dan kewaspadaan anti-phishing.' },
        ],
        kisiKisi: [
          {
            id: 'kka6-k1',
            kode: 'Indikator 1',
            tp: 'TP 1',
            materi: 'Pemrograman Blok & Debugging',
            indikator: 'Mengenal kategori blok (Events, Motion, Looks, Sound, Wait/Tunggu, Repeat), menghitung pergerakan koordinat/sudut, serta menganalisis kesalahan kode (bug) dan perbaikannya (debugging).',
            level: 'Penalaran',
          },
          {
            id: 'kka6-k2',
            kode: 'Indikator 2',
            tp: 'TP 2',
            materi: 'Cara Kerja Internet & Ukuran Data',
            indikator: 'Memahami cara kerja paket data (file dipecah jadi paket kecil saat dikirim), membedakan aktivitas online vs offline, serta menghitung total ukuran file, sisa cloud storage, dan waktu unduh.',
            level: 'Penerapan',
          },
          {
            id: 'kka6-k3',
            kode: 'Indikator 3',
            tp: 'TP 2',
            materi: 'Merancang Konten Digital (Infografis, Poster, Video)',
            indikator: 'Mengenal storyboard (sketsa alur cerita), infografis, kriteria konten edukatif yang menarik dan jelas, serta menghitung durasi total slide presentasi.',
            level: 'Penerapan',
          },
          {
            id: 'kka6-k4',
            kode: 'Indikator 4',
            tp: 'TP 3',
            materi: 'Keamanan Data Pribadi, Etika Digital & Anti-Phishing',
            indikator: 'Membedakan data pribadi rahasia (NIK, password, PIN, OTP, alamat) dengan data umum, meminta izin sebelum unggah foto teman, mencantumkan sumber hak cipta, dan mengenali jebakan phishing.',
            level: 'Penalaran',
          },
        ],
        ringkasanMateri: [
          {
            id: 'kka6-m1',
            judul: 'Pemrograman Blok, Perulangan & Debugging',
            poinPenting: [
              'Bug adalah kesalahan pada kode sehingga program tidak berjalan semestinya; proses mencari dan memperbaikinya disebut Debugging.',
              'Kategori blok Scratch: Events (pemicu mulai, misal bendera hijau diklik), Motion (gerak & putar sudut), Looks (tampilan/ucapan), Sound (suara), Wait/Tunggu (memberi jeda agar dialog tidak bertumpuk).',
              'Blok Repeat (perulangan): contoh menggambar persegi butuh "Ulangi 4 kali [Maju, Putar 90 derajat]".',
            ],
            contohSingkat: 'Repeat 5 [Maju 12 langkah] = 5 × 12 = 60 langkah; Repeat 4 [Putar 90°] = 360° (persegi).',
            tipsPipo: 'Jika animasi atau robot salah arah/menabrak, cek urutan bloknya satu per satu (debugging)!',
          },
          {
            id: 'kka6-m2',
            judul: 'Internet, Paket Data & Konten Digital',
            poinPenting: [
              'Saat mengirim foto/file lewat internet, file dipecah menjadi paket-paket data berukuran kecil agar cepat sampai lalu disatukan kembali di perangkat penerima.',
              'Sebelum membuat video atau animasi, buat Storyboard (sketsa papan cerita berurutan). Konten edukasi seperti Infografis memadukan grafik data, ilustrasi, dan teks ringkas.',
              'Hitung waktu unduh = Ukuran file (MB) ÷ Kecepatan (MB/detik).',
            ],
            contohSingkat: 'File 60 MB diunduh dengan kecepatan 5 MB/detik → waktu unduh = 60 ÷ 5 = 12 detik.',
            tipsPipo: 'Poster/infografis yang bagus memakai kalimat ringkas, warna kontras jelas, dan gambar sesuai tema!',
          },
          {
            id: 'kka6-m3',
            judul: 'Etika Digital & Waspada Phishing',
            poinPenting: [
              'Data pribadi rahasia yang dilarang disebar di medsos: kata sandi (password), kode OTP, PIN rekening, NIK, dan alamat rumah lengkap.',
              'Buat kata sandi kuat (minimal 12 karakter campuran huruf kapital, huruf kecil, angka, dan simbol).',
              'Phishing adalah penipuan lewat tautan palsu/hadiah mendesak untuk mencuri password, PIN, atau OTP.',
              'Etika digital: minta izin teman sebelum mengunggah fotonya dan cantumkan sumber/pembuat asli foto yang diambil dari internet.',
            ],
            contohSingkat: 'Jika ada pesan "Menang hadiah, klik link dan masukkan OTP dalam 5 menit!" → JANGAN diklik, itu Phishing!',
            tipsPipo: 'Kode OTP dan Password itu rahasia pribadi—jangan pernah berikan ke siapa pun!',
          },
        ],
        latihanSoal: KKA_KELAS6_SOAL,
      },
    },
  },
  {
    id: 'bahasa-daerah',
    name: 'Bahasa Daerah',
    shortName: 'B. Jawa',
    icon: 'scroll',
    description: 'Unggah-ungguh basa Jawa, aksara legena & sandhangan swara, dolanan tradisional, dan cerita rakyat Kota Batu.',
    kkm: 75,
    theme: {
      accentHex: '#B45309',
      softBg: 'bg-orange-50 dark:bg-orange-950/50',
      softText: 'text-orange-700 dark:text-orange-300',
      barBg: 'bg-orange-600',
    },
    docQuestionCount: 35,
    tpList: [
      { kode: 'TP 1', deskripsi: 'Memahami kosakata Ngoko & Krama Alus/Inggil, bilangan Jawa (selawe/selangkung), 20 aksara legena, dan 5 sandhangan swara.' },
      { kode: 'TP 2', deskripsi: 'Menerapkan pacelathon (percakapan) santun sesuai unggah-ungguh Jawa serta aturan tidak memakai krama inggil untuk diri sendiri.' },
      { kode: 'TP 3', deskripsi: 'Memahami teks bahasa Jawa tentang dolanan tradisional, tembang dolanan, serta legenda asal-usul Desa Pesanggrahan & Sidomulyo.' },
    ],
    kisiKisi: [
      {
        id: 'bd-k1',
        kode: 'Indikator 1',
        tp: 'TP 1',
        materi: 'Kosakata & Unggah-Ungguh Basa Jawa',
        indikator: 'Membedakan penggunaan Ngoko Lugu (teman sebaya/adik) dan Krama Alus / Krama Inggil (untuk orang tua/guru: dhahar, sare, tindak, mundhut, maos) serta angka Jawa (25 = selawe/selangkung).',
        level: 'Penerapan',
      },
      {
        id: 'bd-k2',
        kode: 'Indikator 2',
        tp: 'TP 1',
        materi: 'Aksara Jawa Legena & Sandhangan Swara',
        indikator: 'Mengetahui jumlah aksara legena (20 aksara Ha–Nga) dan menerapkan 5 sandhangan swara: Wulu (i), Suku (u), Pepet (e), Taling (é), dan Taling Tarung (o).',
        level: 'Penerapan',
      },
      {
        id: 'bd-k3',
        kode: 'Indikator 3',
        tp: 'TP 2',
        materi: 'Pacelathon Santun & Tata Krama',
        indikator: 'Menggunakan salam sapaan (Sugeng enjing/siang/sonten/dalu), pamit sekolah, bertamu (Kula nuwun), permisi lewat (Ndherek langkung), terima kasih (Matur nuwun), dan tidak memakai krama inggil untuk diri sendiri.',
        level: 'Penalaran',
      },
      {
        id: 'bd-k4',
        kode: 'Indikator 4',
        tp: 'TP 3',
        materi: 'Dolanan Tradisional, Tembang & Legenda Kota Batu',
        indikator: 'Mengenal dolanan tradisional (Egrang, Dakon, Gobag Sodor, Benthik, Jamuran, Bekelan, Cublak-cublak suweng), lirik tembang dolanan, serta pesan moral legenda asal-usul Desa Pesanggrahan dan Desa Sidomulyo.',
        level: 'Pemahaman',
      },
    ],
    ringkasanMateri: [
      {
        id: 'bd-m1',
        judul: 'Unggah-Ungguh Basa Jawa & Aturan Diri Sendiri',
        poinPenting: [
          'Ngoko Lugu dipakai bersama teman sebaya yang akrab atau adik kandung. Krama Alus dipakai saat berbicara dengan orang tua, guru, atau Eyang.',
          'Kosakata Krama Inggil untuk orang yang dihormati: makan = dhahar, minum = ngunjuk, tidur = sare, pergi = tindak, pulang = kondur, membaca = maos, membeli = mundhut.',
          'PENTING: Jangan memakai kata Krama Inggil untuk diri sendiri! Untuk diri sendiri gunakan krama andhap/madya: pulang = wangsul (bukan kondur), tidur = tilem (bukan sare), makan = nedha.',
          'Kata ganti "Kowe" dalam krama alus menjadi "Panjenengan". Angka 25: Selawe (ngoko) / Selangkung (krama).',
        ],
        contohSingkat: 'Benar: "Ibu tindak dhateng peken mundhut sekul." / "Kula wangsul saking sekolah lajeng tilem."',
        tipsPipo: 'Ingat bedanya: Eyang/Bapak/Ibu = sare & kondur; Saya (kula) = tilem & wangsul!',
      },
      {
        id: 'bd-m2',
        judul: 'Aksara Jawa (20 Legena) & 5 Sandhangan Swara',
        poinPenting: [
          'Aksara Jawa dasar (legena) dari Ha sampai Nga berjumlah 20 aksara.',
          '5 Sandhangan Swara untuk mengubah bunyi vokal dasar "a":',
          '• Wulu (di atas aksara) → swara i (contoh: pipi, siji).',
          '• Suku (di bawah aksara) → swara u (contoh: tuku, buku).',
          '• Pepet (di atas aksara) → swara e lemah seperti "sega", "pecel".',
          '• Taling (di depan aksara) → swara é jelas seperti "lele", "sate".',
          '• Taling Tarung (mengapit aksara) → swara o (contoh: soto, toko).',
        ],
        contohSingkat: 'Kata "buku" butuh 2 sandhangan suku (u); kata "siji" butuh 2 sandhangan wulu (i).',
        tipsPipo: 'Bedakan E: "sega" pakai Pepet di atas, "lele" pakai Taling di depan aksara!',
      },
      {
        id: 'bd-m3',
        judul: 'Pacelathon Santun, Dolanan & Legenda Kota Batu',
        poinPenting: [
          'Salam waktu: Sugeng enjing (pagi), Sugeng siang (siang), Sugeng sonten (sore), Sugeng dalu (malam).',
          'Saat bertamu ucapkan "Kula nuwun"; saat lewat di depan orang tua membungkuk sedikit dan ucapkan "Ndherek langkung"; saat diberi hadiah ucapkan "Matur nuwun"; saat salah ucapkan "Nyuwun pangapunten".',
          'Dolanan tradisional: Egrang (2 bambu berpijakan kaki), Dakon/congklak (7 lubang kecil tiap sisi), Gobag sodor (2 regu jaga & serang), Cublak-cublak suweng (tembang "...mambu ketundhung gudel").',
          'Legenda asal-usul tempat: Desa Pesanggrahan (tempat istirahat/mesanggrah di lereng Gunung Panderman yang sejuk); Desa Sidomulyo ("sido mulyo" = harapan warga bertani bunga agar hidup mulia & makmur).',
        ],
        contohSingkat: 'Cerita rakyat tentang asal-usul terjadinya suatu desa/tempat disebut Legenda.',
        tipsPipo: 'Dolanan tradisional melatih kekompakan, kesehatan gerak tubuh, dan melestarikan budaya!',
      },
    ],
    latihanSoal: BJAWA_KELAS5_SOAL,
  },
];

export function getSubjectById(subjectId: string): SubjectData | undefined {
  return SUBJECTS.find((s) => s.id === subjectId);
}

export function getSubjectContentForClass(
  subject: SubjectData,
  studentClass: TargetClass
): SubjectClassContent {
  return subject.classContent?.[studentClass] ?? subject;
}

export interface TpPacket {
  tp: string;
  label: string;
  questions: QuizQuestion[];
}

export function getTpPacketsForContent(content: SubjectClassContent): TpPacket[] {
  const map = new Map<string, QuizQuestion[]>();
  for (const q of content.latihanSoal) {
    if (q.tp) {
      const arr = map.get(q.tp) ?? [];
      arr.push(q);
      map.set(q.tp, arr);
    }
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([tp, questions]) => ({
      tp,
      label: `Paket ${tp}`,
      questions,
    }));
}

/**
 * Helper status jadwal berdasarkan waktu & tanggal aktual (YYYY-MM-DD + startTime)
 */
export interface EnrichedScheduleItem extends ScheduleItem {
  subject: SubjectData;
  daysDiff: number;
  minutesUntilStart: number;
  minutesUntilEnd: number;
  status: 'ongoing' | 'today' | 'tomorrow' | 'upcoming' | 'done';
  statusLabel: string;
  countdownHeadline: string;
  formattedDayDate: string;
  shortDate: string;
}

const DAYS_ID = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const MONTHS_SHORT_ID = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Mei',
  'Jun',
  'Jul',
  'Agu',
  'Sep',
  'Okt',
  'Nov',
  'Des',
];

export function formatIndonesianDate(date: Date): string {
  return `${DAYS_ID[date.getDay()]}, ${date.getDate()} ${MONTHS_SHORT_ID[date.getMonth()]} ${date.getFullYear()}`;
}

function parseScheduleDateTime(dateStr: string, timeStr: string): Date {
  const [y, m, d] = dateStr.split('-').map(Number);
  const [hh, mm] = timeStr.split('.').map(Number);
  return new Date(y, m - 1, d, hh || 0, mm || 0, 0, 0);
}

export function getEnrichedSchedule(now: Date = new Date()): EnrichedScheduleItem[] {
  const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return ASSESSMENT_SCHEDULE.map((item) => {
    const [y, m, d] = item.date.split('-').map(Number);
    const examMidnight = new Date(y, m - 1, d);
    const startDt = parseScheduleDateTime(item.date, item.startTime);
    const endDt = parseScheduleDateTime(item.date, item.endTime);

    const daysDiff = Math.round(
      (examMidnight.getTime() - todayMidnight.getTime()) / (1000 * 60 * 60 * 24)
    );
    const minutesUntilStart = Math.ceil(
      (startDt.getTime() - now.getTime()) / (1000 * 60)
    );
    const minutesUntilEnd = Math.ceil(
      (endDt.getTime() - now.getTime()) / (1000 * 60)
    );

    const subject = getSubjectById(item.subjectId) ?? SUBJECTS[0];

    let status: EnrichedScheduleItem['status'] = 'upcoming';
    let statusLabel = `${daysDiff} hari lagi`;
    let countdownHeadline = `${daysDiff} hari lagi`;

    if (minutesUntilEnd <= 0) {
      status = 'done';
      statusLabel = 'Selesai';
      countdownHeadline = 'Asesmen Selesai';
    } else if (minutesUntilStart <= 0 && minutesUntilEnd > 0) {
      status = 'ongoing';
      statusLabel = 'Sedang berlangsung';
      countdownHeadline = `Sedang berlangsung · sisa ${minutesUntilEnd} menit`;
    } else if (daysDiff === 0) {
      status = 'today';
      statusLabel = 'Hari ini';
      const hrs = Math.floor(minutesUntilStart / 60);
      const mins = minutesUntilStart % 60;
      countdownHeadline =
        hrs > 0 ? `Hari ini · ${hrs} jam ${mins} mnt lagi` : `Hari ini · ${mins} menit lagi`;
    } else if (daysDiff === 1) {
      status = 'tomorrow';
      statusLabel = 'Besok';
      countdownHeadline = `1 hari lagi · Besok ${item.startTime}`;
    } else {
      status = 'upcoming';
      statusLabel = `${daysDiff} hari lagi`;
      countdownHeadline = `${daysDiff} hari lagi · ${item.startTime} WIB`;
    }

    return {
      ...item,
      subject,
      daysDiff,
      minutesUntilStart,
      minutesUntilEnd,
      status,
      statusLabel,
      countdownHeadline,
      formattedDayDate: `${DAYS_ID[examMidnight.getDay()]}, ${examMidnight.getDate()} ${MONTHS_SHORT_ID[examMidnight.getMonth()]}`,
      shortDate: `${examMidnight.getDate()} ${MONTHS_SHORT_ID[examMidnight.getMonth()]}`,
    };
  }).sort((a, b) => {
    const dateCmp = a.date.localeCompare(b.date);
    if (dateCmp !== 0) return dateCmp;
    return a.startTime.localeCompare(b.startTime);
  });
}

/**
 * Membangun ringkasan pengetahuan kurikulum dari assessmentData.ts
 * sesuai kelas siswa (Kelas 5 atau Kelas 6) untuk Tutor AI Pipo.
 */
export function buildPipoKnowledgeContext(studentClass: TargetClass = 'Kelas 5'): string {
  const scheduleText = ASSESSMENT_SCHEDULE.map((s) => {
    const subj = getSubjectById(s.subjectId);
    return `- ${subj?.name ?? s.subjectId}: tanggal ${s.date}, jam ${s.startTime}–${s.endTime} WIB. Catatan: ${s.note}`;
  }).join('\n');

  const subjectsText = SUBJECTS.map((subj) => {
    const content = getSubjectContentForClass(subj, studentClass);
    if (content.isUnavailable) {
      return `MATA PELAJARAN: ${subj.name} (id: ${subj.id}, target: ${studentClass})\nStatus: Belum tersedia. ${content.unavailableNote ?? 'Kisi-kisi dan bank soal latihan belum tersedia.'}`;
    }
    const tps = content.tpList?.length
      ? `Tujuan Pembelajaran:\n${content.tpList.map((t) => `  * ${t.kode}: ${t.deskripsi}`).join('\n')}\n`
      : '';
    const kisi = content.kisiKisi
      .map((k) => `  * [${k.tp ? `${k.tp} · ` : ''}${k.materi}] ${k.indikator}`)
      .join('\n');
    const materi = content.ringkasanMateri
      .map(
        (m) =>
          `  * ${m.judul}: ${m.poinPenting.join(' ')} Contoh: ${m.contohSingkat}`
      )
      .join('\n');
    const countInfo = content.docQuestionCount
      ? ` · Jumlah soal resmi ASAS: ${content.docQuestionCount} soal`
      : '';
    return `MATA PELAJARAN: ${subj.name} (id: ${subj.id}, target: ${studentClass}${countInfo})\n${tps}Kisi-kisi:\n${kisi}\nRingkasan Materi:\n${materi}`;
  }).join('\n\n');

  return `INFORMASI ASESMEN:
Aplikasi: ${ASSESSMENT_INFO.appName}
Sekolah: ${ASSESSMENT_INFO.schoolName}
Judul: ${ASSESSMENT_INFO.assessmentTitle} (${ASSESSMENT_INFO.academicYear} - ${studentClass})

JADWAL ASESMEN RESMI:
${scheduleText}

MATERI & KISI-KISI 11 MATA PELAJARAN (${studentClass}):
${subjectsText}`;
}
