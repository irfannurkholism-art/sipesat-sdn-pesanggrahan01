import type { QuizQuestion } from './types.ts';

/**
 * Pendidikan Pancasila Kelas 5 — 35 Soal Baru (TP 1: 11, TP 2: 12, TP 3: 12)
 * Proporsi indikator: 10 Pilihan Ganda, 10 PGK (adaptasi), 10 Isian Singkat, 5 Uraian
 */
export const PANCASILA_KELAS5_SOAL: QuizQuestion[] = [
  // TP 1 — Sejarah & Kedudukan Pancasila (11 soal)
  {
    id: 'pp5-q01',
    topik: 'Sidang Pertama BPUPKI',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Dalam sidang pertama BPUPKI tanggal 29 Mei–1 Juni 1945, tiga tokoh bangsa menyampaikan gagasan dasar negara Indonesia merdeka. Tiga tokoh tersebut adalah ...',
    pilihan: [
      'Mr. Muhammad Yamin, Prof. Dr. Soepomo, dan Ir. Soekarno',
      'Drs. Moh. Hatta, Ki Hajar Dewantara, dan Bung Tomo',
      'Sutan Sjahrir, Jenderal Sudirman, dan Agus Salim',
      'Ahmad Soebardjo, Dewi Sartika, dan K.H. Wachid Hasyim',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Usulan dasar negara pada sidang pertama BPUPKI disampaikan oleh Mr. Muhammad Yamin (29 Mei), Prof. Dr. Soepomo (31 Mei), dan Ir. Soekarno (1 Juni 1945).',
  },
  {
    id: 'pp5-q02',
    topik: 'Hari Lahir Pancasila',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Nama "Pancasila" untuk lima dasar negara Indonesia pertama kali diusulkan oleh Ir. Soekarno dalam pidatonya pada tanggal ...',
    pilihan: ['17 Agustus 1945', '1 Juni 1945', '22 Juni 1945', '18 Agustus 1945'],
    jawabanBenar: 1,
    pembahasan:
      'Ir. Soekarno memperkenalkan istilah Pancasila pada 1 Juni 1945, yang kini diperingati sebagai Hari Lahir Pancasila.',
  },
  {
    id: 'pp5-q03',
    topik: 'Panitia Sembilan & Piagam Jakarta',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Rumusan dasar negara yang dihasilkan oleh Panitia Sembilan pada tanggal 22 Juni 1945 dikenal dengan nama ...',
    pilihan: ['Teks Proklamasi', 'Sumpah Pemuda', 'Piagam Jakarta', 'Maklumat Kemerdekaan'],
    jawabanBenar: 2,
    pembahasan:
      'Panitia Sembilan merumuskan rancangan Pembukaan UUD 1945 beserta dasar negara pada 22 Juni 1945 yang dinamai Piagam Jakarta.',
  },
  {
    id: 'pp5-q04',
    topik: 'Menghitung Usia Hari Lahir Pancasila',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Hari Lahir Pancasila diperingati setiap 1 Juni sejak pidato Soekarno tahun 1945. Pada tanggal 1 Juni 2026, bangsa Indonesia memperingati Hari Lahir Pancasila yang ke-...',
    pilihan: ['79 tahun', '80 tahun', '81 tahun', '82 tahun'],
    jawabanBenar: 2,
    pembahasan: 'Usia peringatan dari 1945 hingga 2026 adalah 2026 - 1945 = 81 tahun.',
  },
  {
    id: 'pp5-q05',
    topik: 'Pengesahan Pancasila',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Rumusan resmi Pancasila yang tercantum dalam Pembukaan UUD 1945 disahkan sehari setelah Proklamasi Kemerdekaan, yaitu pada tanggal 18 Agustus 1945 oleh ...',
    pilihan: ['BPUPKI', 'PPKI', 'Panitia Kecil', 'KNIP'],
    jawabanBenar: 1,
    pembahasan:
      'PPKI (Panitia Persiapan Kemerdekaan Indonesia) mengesahkan UUD 1945 beserta rumusan resmi Pancasila pada 18 Agustus 1945.',
  },
  {
    id: 'pp5-q06',
    topik: 'Sikap Berjiwa Besar Pendiri Bangsa',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Pada 18 Agustus 1945, tujuh kata pada sila pertama Piagam Jakarta diubah menjadi "Ketuhanan Yang Maha Esa". Nilai keteladanan utama dari keputusan para tokoh tersebut adalah ...',
    pilihan: [
      'Memaksakan pendapat golongan sendiri agar menang',
      'Mengutamakan persatuan dan keutuhan bangsa di atas kepentingan kelompok',
      'Menunda pengesahan UUD 1945 hingga semua daerah setuju',
      'Menghapus seluruh rumusan dasar negara yang lama',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Para pendiri bangsa berjiwa besar mengubah kalimat sila pertama demi menjaga persatuan seluruh rakyat Indonesia yang beragam.',
  },
  {
    id: 'pp5-q07',
    topik: 'Dasar Negara vs Pandangan Hidup',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan pernyataan berikut tentang kedudukan Pancasila:\n(1) Sebagai dasar negara untuk mengatur pemerintahan dan hukum.\n(2) Sebagai pandangan hidup dalam bersikap sehari-hari.\n(3) Hanya berlaku bagi pejabat pemerintah di ibu kota.\n(4) Menjadi pedoman penyelesaian masalah bangsa secara adil.\nPernyataan yang benar ditunjukkan oleh nomor ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(1) dan (3) saja',
      '(2), (3), dan (4)',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Pancasila berkedudukan sebagai dasar negara, pandangan hidup seluruh warga, dan pedoman bersama, bukan hanya untuk pejabat saja.',
  },
  {
    id: 'pp5-q08',
    topik: 'Nilai Juang Perumus Pancasila',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Manakah pasangan sikap berikut yang mencerminkan semangat para tokoh perumus Pancasila di kelas V?\n(1) Menghargai perbedaan usulan teman saat diskusi kelompok.\n(2) Meninggalkan ruang rapat jika idenya tidak dipilih.\n(3) Tekun belajar dan pantang menyerah menyelesaikan proyek kelas.\n(4) Mengejek teman yang berbeda pendapat.\nPasangan yang benar adalah ...',
    pilihan: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Semangat perumus Pancasila tampak dari sikap menghargai pendapat teman dan pantang menyerah dalam berkarya.',
  },
  {
    id: 'pp5-q09',
    topik: 'Penerapan Pandangan Hidup di Sekolah',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Ketika siswa membiasakan antre dengan tertib di kantin dan berkata jujur kepada guru, siswa tersebut menerapkan Pancasila dalam kedudukannya sebagai ...',
    pilihan: [
      'Lambang negara',
      'Pandangan hidup bangsa',
      'Lagu kebangsaan',
      'Peraturan lalu lintas',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Pancasila sebagai pandangan hidup menjadi pedoman sikap dan perilaku baik dalam kehidupan sehari-hari.',
  },
  {
    id: 'pp5-q10',
    topik: 'Komposisi Panitia Sembilan',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Panitia Sembilan terdiri atas tokoh dari golongan kebangsaan dan golongan Islam yang berdiskusi dengan penuh kekeluargaan. Mengapa kerja sama kedua golongan tersebut penting bagi kelahiran dasar negara Indonesia?',
    pilihan: [
      'Agar hasil rumusan dasar negara dapat diterima dan menyatukan seluruh lapisan masyarakat Indonesia',
      'Supaya sidang BPUPKI selesai lebih cepat tanpa perlu mendengar masukan daerah lain',
      'Karena hanya anggota Panitia Sembilan yang berhak memilih presiden pertama',
      'Agar penjajah tidak berani masuk kembali ke Pulau Jawa',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Keterlibatan wakil berbagai golongan memastikan rumusan dasar negara mencerminkan kepentingan seluruh bangsa yang majemuk.',
  },
  {
    id: 'pp5-q11',
    topik: 'Meneladani Musyawarah Pendiri Bangsa',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Dalam diskusi lomba kebersihan kelas, Tim A ingin menghias dinding dengan kertas lipat, sedangkan Tim B ingin menanam bunga di teras. Jika meneladani sikap musyawarah perumus Pancasila, langkah terbaik yang sebaiknya dilakukan ketua kelas adalah ...',
    pilihan: [
      'Memilih usulan teman akrabnya saja tanpa berdiskusi',
      'Membatalkan keikutsertaan kelas dalam lomba kebersihan',
      'Mengajak kedua tim berdiskusi mencari jalan tengah, misalnya membagi tugas hiasan dinding dan taman teras',
      'Menyuruh Tim A dan Tim B bertanding lari untuk menentukan pemenang usulan',
    ],
    jawabanBenar: 2,
    pembahasan:
      'Musyawarah mencari jalan tengah yang merangkul kebaikan semua pihak mencerminkan semangat persatuan para pendiri bangsa.',
  },

  // TP 2 — Penerapan Nilai Sila Ke-1 sampai Ke-5 (12 soal)
  {
    id: 'pp5-q12',
    topik: 'Pengamalan Sila Pertama',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Sebelum memulai kerja kelompok di rumah Edo, Edo mengajak teman-teman berdoa sesuai agama dan keyakinan masing-masing. Sikap Edo mengamalkan sila ke-...',
    pilihan: ['Pertama', 'Kedua', 'Ketiga', 'Kelima'],
    jawabanBenar: 0,
    pembahasan:
      'Berdoa sebelum kegiatan dan menghormati keyakinan teman merupakan pengamalan Sila Pertama, Ketuhanan Yang Maha Esa.',
  },
  {
    id: 'pp5-q13',
    topik: 'Lambang Sila Kelima',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Dalam perisai Garuda Pancasila, sila "Keadilan sosial bagi seluruh rakyat Indonesia" dilambangkan oleh gambar ...',
    pilihan: [
      'Bintang bersudut lima',
      'Rantai emas bermata bulat dan persegi',
      'Pohon beringin',
      'Padi dan kapas',
    ],
    jawabanBenar: 3,
    pembahasan:
      'Padi (pangan) dan kapas (sandang) melambangkan kebutuhan pokok rakyat yang merata sesuai Sila Kelima.',
  },
  {
    id: 'pp5-q14',
    topik: 'Pengamalan Sila Kedua',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Di kelas V baru saja bergabung murid pindahan yang memiliki logat bicara daerah berbeda. Sikap yang sesuai dengan Sila Kedua Pancasila adalah ...',
    pilihan: [
      'Menirukan logatnya sambil tertawa bersama teman lain',
      'Menyambutnya dengan ramah, berteman tanpa membeda-bedakan, dan membantunya beradaptasi',
      'Memintanya duduk sendirian di pojok kelas sampai logatnya berubah',
      'Tidak mengajaknya ikut bermain saat jam istirahat',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Sila Kedua (Kemanusiaan yang adil dan beradab) mengajarkan menghormati martabat sesama manusia dan tidak merundung.',
  },
  {
    id: 'pp5-q15',
    topik: 'Pengamalan Sila Ketiga',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan perilaku siswa berikut:\n(1) Berdiri tegap dan khidmat saat upacara bendera hari Senin.\n(2) Bangga memakai seragam batik khas daerah pada hari Kamis.\n(3) Hanya mau bekerja kelompok dengan teman satu kampung saja.\n(4) Ikut serta menjaga kerukunan saat pentas seni daerah.\nPerilaku yang mencerminkan Sila Ketiga Pancasila adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(1), (3), dan (4)',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Khidmat saat upacara, bangga produk budaya bangsa seperti batik, dan menjaga kerukunan adalah wujud cinta tanah air dan persatuan (Sila ke-3).',
  },
  {
    id: 'pp5-q16',
    topik: 'Toleransi Beribadah (Sila 1)',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Saat jam latihan menari bersama di balai desa, waktu salat Zuhur tiba dan dua temanmu meminta izin beribadah sebentar. Sikap yang tepat sesuai Sila Pertama adalah nomor ...\n(1) Memberi jeda istirahat agar teman dapat beribadah dengan tenang.\n(2) Mengecilkan suara musik latihan selama mereka beribadah.\n(3) Meminta mereka menunda ibadah sampai latihan selesai malam hari.\n(4) Meninggalkan mereka karena dianggap memperlambat latihan.',
    pilihan: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)'],
    jawabanBenar: 0,
    pembahasan:
      'Memberikan kesempatan beribadah dan menjaga ketenangan menunjukkan toleransi antarumat beragama sesuai Sila Pertama.',
  },
  {
    id: 'pp5-q17',
    topik: 'Menghitung Hasil Voting (Sila 4)',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Kelas V melakukan pemungutan suara memilih ketua kelas dari 32 siswa. Beni memperoleh 19 suara, sedangkan sisanya memilih Siska. Berapa selisih perolehan suara Beni dan Siska?',
    pilihan: ['4 suara', '6 suara', '13 suara', '19 suara'],
    jawabanBenar: 1,
    pembahasan:
      'Suara Siska = 32 - 19 = 13 suara. Selisih suara Beni dan Siska = 19 - 13 = 6 suara.',
  },
  {
    id: 'pp5-q18',
    topik: 'Sikap Menerima Hasil Musyawarah',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Setelah voting selesai, pilihan warna seragam kelas yang kamu usulkan kalah suara. Sikap yang tepat sesuai Sila Keempat Pancasila adalah ...',
    pilihan: [
      'Meminta pemungutan suara diulang terus sampai usulanmu menang',
      'Menerima keputusan bersama dengan lapang dada dan ikut memakainya dengan bangga',
      'Menolak membayar iuran seragam karena kecewa',
      'Memengaruhi teman lain untuk memboikot keputusan kelas',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Dalam musyawarah atau voting, setiap peserta wajib menghormati dan melaksanakan keputusan terbanyak dengan ikhlas.',
  },
  {
    id: 'pp5-q19',
    topik: 'Berbagi Adil (Sila 5)',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Siswa kelas V mengumpulkan donasi sebesar Rp540.000,00 untuk dibagikan sama rata kepada 9 keluarga korban tanah longsor. Setiap keluarga menerima Rp...',
    pilihan: ['Rp50.000,00', 'Rp55.000,00', 'Rp60.000,00', 'Rp65.000,00'],
    jawabanBenar: 2,
    pembahasan: 'Rp540.000,00 ÷ 9 keluarga = Rp60.000,00 per keluarga.',
  },
  {
    id: 'pp5-q20',
    topik: 'Menghargai Karya Orang Lain (Sila 5)',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Saat pameran gambar kelas, pernyataan mana saja yang mencerminkan Sila Kelima dalam hal keadilan dan menghargai hasil karya teman?\n(1) Memuji usaha teman yang sudah menggambar dengan sungguh-sungguh.\n(2) Membagi tugas piket merapikan pameran secara adil tanpa pilih kasih.\n(3) Mencoret-coret poster teman karena gambarnya kalah rapi.\n(4) Menyimpan hasil karya semua kelompok di tempat yang aman.\nJawaban yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(1) dan (3) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Menghargai karya orang lain dan membagi tugas secara adil merupakan pengamalan Sila Kelima.',
  },
  {
    id: 'pp5-q21',
    topik: 'Piket Adil & Gotong Royong',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Jika dalam satu regu piket terdapat 6 siswa dan semua bekerja bersama membersihkan 18 meja, maka masing-masing siswa membersihkan rata-rata ... meja.',
    pilihan: ['2 meja', '3 meja', '4 meja', '6 meja'],
    jawabanBenar: 1,
    pembahasan: '18 meja ÷ 6 siswa = 3 meja per siswa agar tugas terbagi adil.',
  },
  {
    id: 'pp5-q22',
    topik: 'Analisis Kasus Sila 2 & Sila 5',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Di sekolah ada teman yang lupa membawa pensil saat ulangan, sementara kamu membawa dua pensil cadangan. Apa tindakan terbaik yang menggabungkan nilai Sila Kedua dan Sila Kelima?',
    pilihan: [
      'Meminjamkan satu pensil dengan ikhlas tanpa membedakan siapa temannya agar ia tetap bisa mengerjakan ulangan dengan adil',
      'Menyewakan pensil cadangan itu dengan harga tinggi agar kamu mendapat untung',
      'Membiarkannya kebingungan karena salahnya sendiri lupa membawa pensil',
      'Memberikan pensil yang patah ujungnya saja agar ia cepat selesai',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Membantu teman yang kesulitan tanpa pamrih dan memberi kesempatan yang adil untuk belajar mencerminkan Sila Kedua dan Kelima.',
  },
  {
    id: 'pp5-q23',
    topik: 'Keragaman Budaya & Sila 3',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Sekolah mengadakan bazar makanan tradisional Nusantara dari berbagai suku. Bagaimana sikap yang mencerminkan kesatuan nilai Sila Ketiga dan Sila Kelima?\n(1) Membeli dan mencicipi jajanan daerah lain dengan antusias.\n(2) Membagi stan bazar secara adil bagi setiap kelas.\n(3) Menganggap makanan daerah sendiri paling enak dan meremehkan daerah lain.\n(4) Membersihkan area bazar bersama setelah acara selesai.\nKombinasi yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Menghargai ragam budaya daerah, bersikap adil, dan bergotong royong menjaga persatuan adalah wujud pengamalan Pancasila.',
  },

  // TP 3 — Norma, Hak, Kewajiban & Tanggung Jawab (12 soal)
  {
    id: 'pp5-q24',
    topik: 'Sumber Norma Kesusilaan',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Norma yang bersumber dari bisikan hati nurani manusia, seperti merasa bersalah jika berbohong atau menyontek, disebut norma ...',
    pilihan: ['Agama', 'Kesopanan', 'Kesusilaan', 'Hukum'],
    jawabanBenar: 2,
    pembahasan:
      'Norma kesusilaan berasal dari hati nurani manusia yang membedakan perbuatan baik dan buruk.',
  },
  {
    id: 'pp5-q25',
    topik: 'Sanksi Norma Hukum',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Pengendara sepeda motor yang melanggar rambu lampu merah dapat dikenai tilang dan denda oleh polisi. Aturan lalu lintas tersebut termasuk contoh norma ...',
    pilihan: ['Kesopanan', 'Hukum', 'Agama', 'Kesusilaan'],
    jawabanBenar: 1,
    pembahasan:
      'Norma hukum dibuat secara tertulis oleh negara dan memiliki sanksi tegas seperti denda atau kurungan.',
  },
  {
    id: 'pp5-q26',
    topik: 'Norma Kesopanan di Rumah & Sekolah',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Mengetuk pintu sebelum masuk ruang guru dan mengucapkan salam saat bertemu orang yang lebih tua merupakan penerapan norma ...',
    pilihan: ['Hukum', 'Kesopanan', 'Agama', 'Lalu lintas'],
    jawabanBenar: 1,
    pembahasan:
      'Norma kesopanan mengatur tata pergaulan yang pantas dan santun di lingkungan masyarakat atau sekolah.',
  },
  {
    id: 'pp5-q27',
    topik: 'Norma Agama',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Manakah pasangan pernyataan tentang norma agama yang tepat?\n(1) Bersumber dari wahyu atau ajaran Tuhan Yang Maha Esa.\n(2) Sanksinya berupa dosa dan pertanggungjawaban di akhirat.\n(3) Mengatur tata cara beribadah serta berbuat baik kepada sesama.\n(4) Dibuat oleh ketua RT melalui rapat warga.\nPernyataan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(1) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Norma agama bersumber dari ajaran Tuhan, berisi perintah ibadah dan akhlak baik, serta bersanksi dosa jika dilanggar.',
  },
  {
    id: 'pp5-q28',
    topik: 'Membedakan Hak dan Kewajiban',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan daftar kegiatan siswa berikut:\n(1) Mendapat penjelasan materi pelajaran dari guru.\n(2) Mengerjakan tugas rumah dan piket kelas tepat waktu.\n(3) Menggunakan fasilitas buku di perpustakaan sekolah.\n(4) Memakai seragam sekolah sesuai jadwal.\nManakah yang termasuk HAK siswa di sekolah?',
    pilihan: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Mendapat pelajaran dan memakai perpustakaan adalah hak siswa, sedangkan mengerjakan tugas dan berseragam rapi adalah kewajiban.',
  },
  {
    id: 'pp5-q29',
    topik: 'Keseimbangan Waktu Belajar (Matematika Sederhana)',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Raka menyisihkan 90 menit sepulang sekolah untuk membaca buku dan mengulang pelajaran, lalu 30 menit untuk bermain sepeda. Perbandingan waktu belajar dan waktu bermain Raka paling sederhana adalah ...',
    pilihan: ['2 : 1', '3 : 1', '1 : 3', '3 : 2'],
    jawabanBenar: 1,
    pembahasan: '90 menit : 30 menit sama-sama dibagi 30 menjadi 3 : 1.',
  },
  {
    id: 'pp5-q30',
    topik: 'Kewajiban di Rumah',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Manakah sikap bertanggung jawab anak di rumah sebelum menikmati hak bermain?\n(1) Merapikan tempat tidur dan peralatan sekolahnya sendiri.\n(2) Membantu menyiram tanaman atau menyapu teras.\n(3) Membiarkan piring kotor menumpuk di ruang tamu.\n(4) Menyelesaikan PR terlebih dahulu.\nPilihan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(1) dan (3) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Merapikan kamar, membantu orang tua, dan menyelesaikan PR adalah bentuk tanggung jawab menjalankan kewajiban di rumah.',
  },
  {
    id: 'pp5-q31',
    topik: 'Sanksi Pelanggaran Norma Kesopanan',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Seseorang yang berbicara kasar atau menyerobot antrean di tempat umum akan menerima sanksi dari masyarakat berupa ...',
    pilihan: [
      'Denda uang dari pengadilan',
      'Hukuman penjara lima tahun',
      'Teguran, celaan, atau rasa malu di masyarakat',
      'Penambahan nilai rapor sekolah',
    ],
    jawabanBenar: 2,
    pembahasan:
      'Pelanggaran norma kesopanan mendapat sanksi sosial seperti teguran, gunjingan, atau dijauhi pergaulan.',
  },
  {
    id: 'pp5-q32',
    topik: 'Hak Pengguna Jalan',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Saat menyeberang jalan di depan sekolah melalui zebra cross, hak pejalan kaki yang harus dihormati pengendara adalah ...',
    pilihan: [
      'Pengendara memperlambat laju kendaraan dan memberi kesempatan pejalan kaki menyeberang dengan aman',
      'Pejalan kaki harus berlari kencang tanpa melihat kanan dan kiri',
      'Pengendara membunyikan klakson keras agar pejalan kaki mundur',
      'Pejalan kaki boleh bermain bola di tengah zebra cross',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Pejalan kaki berhak menyeberang dengan aman di zebra cross apabila menaati aturan lalu lintas.',
  },
  {
    id: 'pp5-q33',
    topik: 'Jadwal Piket & Tanggung Jawab',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Regu piket hari Rabu terdiri atas 5 siswa. Hari itu 1 siswa sakit sehingga tidak masuk sekolah. Sikap bertanggung jawab yang sebaiknya dilakukan 4 siswa lainnya adalah ...\n(1) Membagi tugas teman yang sakit agar kelas tetap bersih sebelum bel masuk.\n(2) Membiarkan papan tulis kotor karena merasa bukan tugasnya.\n(3) Bekerja sama lebih cepat agar ruangan siap dipakai belajar.\n(4) Mengeluh kepada guru dan menolak masuk kelas.\nPilihan yang tepat adalah ...',
    pilihan: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Bekerja sama saling membantu saat ada anggota regu berhalangan menunjukkan tanggung jawab dan kepedulian.',
  },
  {
    id: 'pp5-q34',
    topik: 'Menuntut Hak Tanpa Kewajiban',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Apa akibat yang paling mungkin terjadi jika seorang siswa selalu menuntut hak mendapat nilai bagus dan ruang kelas bersih, tetapi tidak pernah mau belajar dan selalu membuang sampah sembarangan?',
    pilihan: [
      'Teman-teman merasa dirugikan, lingkungan kelas kotor, dan nilai belajarnya pun tidak akan memuaskan karena hak dan kewajiban tidak seimbang',
      'Siswa tersebut tetap mendapat juara satu tanpa perlu belajar',
      'Lingkungan sekolah otomatis menjadi bersih oleh angin',
      'Guru akan menaikkan nilainya karena sering protes',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Menuntut hak tanpa menjalankan kewajiban merugikan diri sendiri dan orang lain serta merusak ketertiban bersama.',
  },
  {
    id: 'pp5-q35',
    topik: 'Analisis Pelanggaran Norma Hukum & Kesopanan',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Mengapa menaati peraturan di sekolah dan di jalan raya harus berasal dari kesadaran diri sendiri, bukan hanya karena takut ada guru piket atau polisi?',
    pilihan: [
      'Karena kesadaran diri menjaga keselamatan, kenyamanan, dan ketertiban bersama setiap saat meskipun tidak ada yang mengawasi',
      'Supaya bisa melanggar aturan diam-diam ketika petugas sedang istirahat',
      'Agar tidak perlu lagi membaca rambu lalu lintas dan tata tertib sekolah',
      'Karena sanksi hukum hanya berlaku bagi orang dewasa saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Kepatuhan atas dasar kesadaran diri membuat ketertiban dan keselamatan terjaga konsisten di mana pun kita berada.',
  },
];

/**
 * Bahasa Indonesia Kelas 5 — 35 Soal Baru (TP 1: 9, TP 2: 9, TP 3: 9, TP 4: 8)
 * Proporsi indikator: 10 Pilihan Ganda, 10 PGK (adaptasi), 10 Isian Singkat, 5 Uraian
 */
export const BINDO_KELAS5_SOAL: QuizQuestion[] = [
  // TP 1 — Informasi, Fiksi/Nonfiksi, Ide Pokok & Unsur Intrinsik (9 soal)
  {
    id: 'bi5-q01',
    topik: 'Buku Fiksi dan Nonfiksi',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Nadia ingin membaca buku yang berisi fakta nyata tentang cara merawat tanaman stroberi di dataran tinggi. Jenis buku yang harus dicari Nadia adalah ...',
    pilihan: ['Buku fiksi', 'Buku nonfiksi', 'Kumpulan dongeng', 'Novel fantasi'],
    jawabanBenar: 1,
    pembahasan:
      'Buku nonfiksi memuat fakta nyata, ilmu pengetahuan, atau panduan praktis yang dapat dibuktikan kebenarannya.',
  },
  {
    id: 'bi5-q02',
    topik: 'Profesi Pembuat Gambar Buku',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Pada halaman sampul sebuah buku cerita tertulis "Gambar oleh: Ardi Pratama". Orang yang bertugas membuat gambar-gambar isi buku disebut ...',
    pilihan: ['Pencetak', 'Ilustrator', 'Pustakawan', 'Editor bahasa'],
    jawabanBenar: 1,
    pembahasan:
      'Ilustrator adalah seniman atau pekerja kreatif yang menggambar ilustrasi untuk memperjelas cerita dalam buku.',
  },
  {
    id: 'bi5-q03',
    topik: 'Membaca Daftar Isi (Hitung Halaman Bab)',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Pada daftar isi sebuah buku tertulis: Bab 2 "Makhluk Hidup" dimulai di halaman 18, dan Bab 3 "Energi Panas" dimulai di halaman 33. Berapakah banyak halaman pada Bab 2 tersebut?',
    pilihan: ['14 halaman', '15 halaman', '16 halaman', '17 halaman'],
    jawabanBenar: 1,
    pembahasan:
      'Bab 2 menempati halaman 18 sampai halaman 32, sehingga jumlah halamannya = 33 - 18 = 15 halaman.',
  },
  {
    id: 'bi5-q04',
    topik: 'Puisi Akrostik',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Perhatikan bait puisi berikut:\n"Bunga mekar di taman pagi\nUdara sejuk menyapa hati\nLangkah ringan menuju sekolah\nAnak rajin tak mudah menyerah\nNiat tulus menimba ilmu"\nPuisi yang huruf awal tiap barisnya membentuk kata "BULAN" ini disebut ...',
    pilihan: ['Pantun nasihat', 'Puisi akrostik', 'Syair lama', 'Prosa lirik'],
    jawabanBenar: 1,
    pembahasan:
      'Puisi akrostik disusun dengan merangkai huruf-huruf awal setiap baris menjadi satu kata atau nama.',
  },
  {
    id: 'bi5-q05',
    topik: 'Unsur Sampul & Bagian Buku',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan daftar bagian buku berikut:\n(1) Judul buku pada sampul depan.\n(2) Daftar isi untuk mencari letak bab.\n(3) Harga diskon toko buku bulan lalu.\n(4) Nama penulis dan penerbit.\nInformasi yang lazim terdapat langsung pada buku cetakan adalah nomor ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Judul, nama penulis, penerbit, dan daftar isi merupakan bagian baku buku cetak; promo diskon toko bukan bagian dari isi buku.',
  },
  {
    id: 'bi5-q06',
    topik: 'Ide Pokok Paragraf',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Bacalah paragraf berikut: "Taman baca di sudut kelas V tertata sangat rapi. Rak kayu bercat biru berjajar bersih di dekat jendela. Karpet hijau empuk terhampar agar siswa nyaman duduk membaca. Lampu belajar yang terang juga membuat mata tidak mudah lelah." Ide pokok paragraf tersebut adalah ...',
    pilihan: [
      'Warna cat rak buku di kelas V adalah biru',
      'Taman baca di sudut kelas V tertata rapi dan nyaman',
      'Lampu belajar membantu penerangan di malam hari',
      'Karpet hijau dibeli oleh siswa kelas V',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Kalimat utama di awal paragraf merangkum seluruh rincian rak, karpet, dan lampu: taman baca tertata rapi dan nyaman.',
  },
  {
    id: 'bi5-q07',
    topik: 'Unsur Intrinsik Latar & Watak',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Bacalah kutipan cerita: "Ketika langit senja mulai memerah di tepi dermaga, Arman tetap sabar membantu kakeknya melipat jala ikan meski tangannya lelah." Pernyataan yang tepat mengenai unsur intrinsik kutipan tersebut adalah ...\n(1) Latar waktu kejadian adalah sore menjelang malam (senja).\n(2) Latar tempat berada di tepi dermaga.\n(3) Watak Arman adalah pemalas dan mudah menyerah.\n(4) Watak Arman adalah sabar dan berbakti membantu kakek.\nPilihan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(1) dan (3) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Kata "langit senja" menunjukkan sore hari, "tepi dermaga" adalah tempat, dan tindakan Arman menunjukkan watak sabar serta ringan tangan.',
  },
  {
    id: 'bi5-q08',
    topik: 'Koleksi Pojok Baca',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Pojok baca kelas V memiliki 24 buku cerita fiksi dan 18 buku pengetahuan nonfiksi. Jika 7 buku dipinjam siswa, berapa buku yang masih tersisa di rak pojok baca?',
    pilihan: ['33 buku', '35 buku', '42 buku', '49 buku'],
    jawabanBenar: 1,
    pembahasan: 'Total awal = 24 + 18 = 42 buku. Setelah dipinjam 7 buku, tersisa 42 - 7 = 35 buku.',
  },
  {
    id: 'bi5-q09',
    topik: 'Membedakan Ciri Fiksi & Nonfiksi',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Mengapa buku "Kisah Tupai yang Pintar Berhitung" termasuk buku fiksi, sedangkan buku "Mengenal Cara Kerja Kincir Angin" termasuk buku nonfiksi?',
    pilihan: [
      'Karena kisah tupai yang dapat berbicara dan berhitung berasal dari imajinasi pengarang, sedangkan buku kincir angin memuat fakta ilmiah yang dapat diuji',
      'Karena buku fiksi selalu memiliki sampul berwarna merah dan nonfiksi berwarna biru',
      'Karena buku fiksi tidak boleh dibaca di perpustakaan sekolah',
      'Karena buku nonfiksi tidak memiliki gambar ilustrasi sama sekali',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Perbedaan mendasarnya adalah sifat isi: fiksi bersumber dari daya khayal/imajinasi, sedangkan nonfiksi berdasarkan fakta dan pengetahuan nyata.',
  },

  // TP 2 — Kosakata, Sinonim/Antonim, Imbuhan pe- & Majas (9 soal)
  {
    id: 'bi5-q10',
    topik: 'Sinonim Kata Sifat',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      '"Dina adalah siswi yang tekun berlatih menyanyi setiap sore." Sinonim (persamaan kata) dari kata "tekun" adalah ...',
    pilihan: ['Lalai', 'Rajin dan bersungguh-sungguh', 'Cepat menyerah', 'Pemalu'],
    jawabanBenar: 1,
    pembahasan: 'Tekun bersinonim dengan rajin, gigih, atau bersungguh-sungguh.',
  },
  {
    id: 'bi5-q11',
    topik: 'Antonim Kata Sifat',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Meskipun juara lomba melukis tingkat kota, Tika tetap rendah hati saat dipuji teman-temannya. Antonim (lawan kata) dari "rendah hati" adalah ...',
    pilihan: ['Sopan santun', 'Sombong / angkuh', 'Ramah tamah', 'Pemurah'],
    jawabanBenar: 1,
    pembahasan: 'Rendah hati berarti tidak sombong, sehingga lawan katanya adalah sombong atau angkuh.',
  },
  {
    id: 'bi5-q12',
    topik: 'Imbuhan pe- Pembentuk Kata Sifat',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Kata dasar "sabar" jika diberi awalan pe- untuk menyatakan orang yang memiliki sifat sabar berubah menjadi ...',
    pilihan: ['Pesabar', 'Penabar', 'Penyabar', 'Pemsabar'],
    jawabanBenar: 2,
    pembahasan:
      'Kata dasar berawal huruf s yang diberi awalan pe- mengalami peluluhan s menjadi ny-, yaitu "penyabar".',
  },
  {
    id: 'bi5-q13',
    topik: 'Pasangan Sinonim & Antonim',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan pasangan kata berikut:\n(1) Hemat >< Boros (Antonim)\n(2) Cermat = Teliti (Sinonim)\n(3) Ramah >< Sopan (Antonim)\n(4) Berani = Penakut (Sinonim)\nPasangan yang tepat adalah nomor ...',
    pilihan: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)'],
    jawabanBenar: 0,
    pembahasan:
      'Hemat berlawanan dengan boros (antonim), sedangkan cermat bermakna sama dengan teliti (sinonim).',
  },
  {
    id: 'bi5-q14',
    topik: 'Majas Personifikasi',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Kalimat manakah yang menggunakan majas personifikasi?',
    pilihan: [
      'Ayah membawa oleh-oleh buah apel dari Kota Batu.',
      'Angin malam berbisik lembut menggoyangkan dedaunan bambu.',
      'Suara tepuk tangan penonton sangat meriah di gedung kesenian.',
      'Buku adalah gudang ilmu yang membuka cakrawala dunia.',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Personifikasi mengumpamakan benda mati ("angin malam") melakukan tindakan manusia ("berbisik lembut").',
  },
  {
    id: 'bi5-q15',
    topik: 'Majas Metafora & Hiperbola',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan kalimat bermajas berikut:\n(1) Tangis adik menggelegar hingga membelah angkasa.\n(2) Pak Budi dikenal sebagai tulang punggung keluarganya.\n(3) Padi di sawah menunduk memberi salam kepada petani.\n(4) Ombak lautan menari riang di pinggir pantai.\nManakah yang termasuk majas metafora dan hiperbola secara berturut-turut?',
    pilihan: ['(2) dan (1)', '(1) dan (3)', '(3) dan (4)', '(4) dan (2)'],
    jawabanBenar: 0,
    pembahasan:
      '"Tulang punggung" adalah kiasan penopang hidup (metafora), sedangkan "membelah angkasa" melebih-lebihkan (hiperbola).',
  },
  {
    id: 'bi5-q16',
    topik: 'Peluluhan Awalan pe-',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Kata berimbuhan pe- manakah yang penulisannya baku sesuai kaidah K, T, S, P?\n(1) pe- + tolong → penolong\n(2) pe- + bohong → pembohong\n(3) pe- + malu → pemmalu\n(4) pe- + takut → pentakut\nPilihan yang benar adalah ...',
    pilihan: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)'],
    jawabanBenar: 0,
    pembahasan:
      'Huruf t pada tolong luluh menjadi "penolong", dan bohong menjadi "pembohong". Pemalu dan penakut tidak ditulis ganda atau dengan -nt-.',
  },
  {
    id: 'bi5-q17',
    topik: 'Takaran Resep dalam Teks Prosedur',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Dalam resep puding buah tertulis: "Untuk 1 loyang puding diperlukan 250 gram gula pasir dan 800 ml air." Jika Ibu ingin membuat 3 loyang puding yang sama, berapa gram gula pasir yang dibutuhkan?',
    pilihan: ['500 gram', '650 gram', '750 gram', '900 gram'],
    jawabanBenar: 2,
    pembahasan: '3 loyang × 250 gram gula pasir = 750 gram gula pasir.',
  },
  {
    id: 'bi5-q18',
    topik: 'Makna Kiasan & Konteks Kalimat',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Bacalah kalimat: "Setelah mengikuti latihan rutin selama tiga bulan, Farhan akhirnya menjadi bintang lapangan dalam pertandingan sepak bola antarsekolah." Apakah arti ungkapan "bintang lapangan" pada kalimat tersebut dan jenis majas apakah itu?',
    pilihan: [
      'Artinya pemain yang paling menonjol dan berprestasi di lapangan; menggunakan majas metafora',
      'Artinya benda langit yang jatuh ke lapangan rumput; menggunakan majas hiperbola',
      'Artinya lapangan sepak bola bercahaya di malam hari; menggunakan majas personifikasi',
      'Artinya penonton yang duduk paling depan di stadion; menggunakan majas antonim',
    ],
    jawabanBenar: 0,
    pembahasan:
      '"Bintang lapangan" adalah kiasan (metafora) bagi pemain terbaik yang tampil cemerlang selama pertandingan.',
  },

  // TP 3 — Amanat Cerita & Kalimat Langsung / Tidak Langsung (9 soal)
  {
    id: 'bi5-q19',
    topik: 'Amanat Cerita Fiksi',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Seekor semut kecil mengumpulkan biji-bijian sejak musim panas, sedangkan belalang hanya bersantai bernyanyi. Ketika hujan lebat turun berminggu-minggu, semut cukup makan di sarangnya sementara belalang kelaparan. Amanat cerita tersebut adalah ...',
    pilihan: [
      'Menyanyi di taman lebih menyenangkan daripada bekerja',
      'Kita harus rajin bekerja dan menabung persediaan sebelum kesulitan datang',
      'Semut tidak perlu berbagi dengan siapa pun di hutan',
      'Musim hujan selalu membuat semua hewan kelaparan',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Pesan moral (amanat) fabel ini mengajarkan ketekunan menyiapkan bekal masa depan dan tidak bermalas-malasan.',
  },
  {
    id: 'bi5-q20',
    topik: 'Tanda Baca Kalimat Langsung',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Penulisan kalimat langsung berikut ini yang tanda bacanya paling tepat adalah ...',
    pilihan: [
      'Ibu berpesan "Jangan lupa membawa jas hujan."',
      'Ibu berpesan, "Jangan lupa membawa jas hujan."',
      '"Ibu berpesan, Jangan lupa membawa jas hujan."',
      'Ibu berpesan; jangan lupa membawa jas hujan!',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Kalimat langsung memakai tanda koma setelah kata pengiring lalu ucapan persis diapit tanda petik dua ("...").',
  },
  {
    id: 'bi5-q21',
    topik: 'Kata Hubung Kalimat Tidak Langsung',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Saat mengubah kalimat langsung menjadi kalimat tidak langsung, tanda petik dua dihilangkan dan biasanya ditambahkan kata hubung ...',
    pilihan: ['tetapi', 'bahwa', 'atau', 'padahal'],
    jawabanBenar: 1,
    pembahasan:
      'Kata hubung "bahwa" (atau "agar/supaya" untuk kalimat perintah) digunakan dalam kalimat tidak langsung tanpa tanda petik.',
  },
  {
    id: 'bi5-q22',
    topik: 'Mengubah Kalimat Langsung ke Tidak Langsung',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Kalimat langsung: Riko berkata kepada Sinta, "Aku sudah menyiapkan kertas gambar untuk tugas kita." Jika diubah menjadi kalimat tidak langsung yang tepat adalah ...',
    pilihan: [
      'Riko berkata kepada Sinta bahwa aku sudah menyiapkan kertas gambar untuk tugas kita.',
      'Riko berkata kepada Sinta bahwa ia sudah menyiapkan kertas gambar untuk tugas mereka.',
      'Riko berkata kepada Sinta: "Ia sudah menyiapkan kertas gambar."',
      'Sinta berkata bahwa Riko lupa membawa kertas gambar untuk tugasnya.',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Kata ganti orang pertama "aku" berubah menjadi "ia/dia", dan "kita" menjadi "mereka", dengan tanda petik dihapus dan ditambah "bahwa".',
  },
  {
    id: 'bi5-q23',
    topik: 'Ciri Kalimat Tidak Langsung',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan kalimat-kalimat di bawah ini:\n(1) Pak Guru mengingatkan bahwa besok ada penilaian harian.\n(2) "Kapan kita berangkat ke museum?" tanya Mira.\n(3) Ayah mengatakan bahwa ia akan pulang pukul lima sore.\n(4) Adik berteriak, "Lihat, ada pelangi di langit!"\nKalimat yang termasuk kalimat TIDAK LANGSUNG adalah ...',
    pilihan: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Kalimat (1) dan (3) menceritakan kembali ucapan orang lain memakai kata "bahwa" tanpa tanda petik.',
  },
  {
    id: 'bi5-q24',
    topik: 'Mengubah Kalimat Tidak Langsung ke Langsung',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Kalimat tidak langsung: "Dokter berpesan kepada Tono agar ia rajin minum air putih." Manakah pengubahan ke kalimat langsung yang benar dan sesuai ejaan?\n(1) Dokter berpesan kepada Tono, "Kamu harus rajin minum air putih."\n(2) "Rajinlah minum air putih," pesan dokter kepada Tono.\n(3) Dokter berpesan kepada Tono bahwa "Ia rajin minum air putih."\n(4) Dokter berpesan, bahwa kamu rajin minum air putih.\nJawaban yang benar adalah ...',
    pilihan: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)'],
    jawabanBenar: 0,
    pembahasan:
      'Nomor (1) dan (2) memakai tanda petik dan tanda koma yang benar tanpa mencampur kata hubung "bahwa" bersama tanda petik.',
  },
  {
    id: 'bi5-q25',
    topik: 'Jadwal Hobi & Teks Informasi',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Dalam teks wawancara hobi tertulis: "Fajar berlatih catur setiap hari Selasa dan Jumat selama 45 menit per pertemuan." Berapa menit total waktu Fajar berlatih catur dalam dua minggu?',
    pilihan: ['90 menit', '135 menit', '180 menit', '225 menit'],
    jawabanBenar: 2,
    pembahasan:
      '1 minggu ada 2 hari latihan = 2 × 45 = 90 menit. Dalam 2 minggu = 2 × 90 = 180 menit.',
  },
  {
    id: 'bi5-q26',
    topik: 'Ciri Teks Nonfiksi',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Ciri-ciri sebuah bacaan tergolong teks nonfiksi ditunjukkan oleh pernyataan ...\n(1) Menggunakan bahasa yang jelas, lugas, dan tidak bermakna ganda.\n(2) Berisi data pengamatan, wawancara, atau langkah-langkah nyata.\n(3) Mengisahkan tokoh hewan yang bisa menyanyi dan berbicara.\n(4) Dapat dipertanggungjawabkan kebenaran informasinya.\nPilihan yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(1) dan (3) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Teks nonfiksi bersifat faktual, memakai bahasa lugas, dan datanya dapat dipertanggungjawabkan.',
  },
  {
    id: 'bi5-q27',
    topik: 'Menafsirkan Amanat & Mengubah Ucapan',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Dalam sebuah cerita, Nenek berkata kepada Cucunya, "Jangan pernah membuang nasi yang masih bisa dimakan karena petani merawatnya berbulan-bulan." Jika pesan Nenek diubah menjadi kalimat tidak langsung sekaligus disimpulkan amanatnya, pernyataan yang tepat adalah ...',
    pilihan: [
      'Nenek berpesan agar cucunya tidak membuang nasi; amanatnya kita harus menghargai makanan dan jerih payah petani',
      'Nenek berkata bahwa ia tidak suka makan nasi; amanatnya kita boleh menyisakan nasi',
      'Nenek berpesan bahwa petani tidak menanam padi lagi; amanatnya kita makan kue saja',
      'Nenek berkata agar cucunya membeli nasi baru setiap jam',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Kalimat perintah langsung "Jangan..." berubah memakai "agar", dengan amanat menghargai makanan serta kerja keras petani.',
  },

  // TP 4 — Gagasan, Perkenalan, Saran & Sanggahan Santun (8 soal)
  {
    id: 'bi5-q28',
    topik: 'Perkenalan Diri & Sahabat Santun',
    tp: 'TP 4',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Saat memperkenalkan teman barumu di depan kelas, kalimat perkenalan yang sopan dan jelas adalah ...',
    pilihan: [
      '"Hei, lihat anak baru ini, namanya Lala!"',
      '"Selamat pagi teman-teman, perkenalkan ini sahabat baruku bernama Lala. Hobinya menggambar pemandangan."',
      '"Ini Lala, kalian tanya sendiri saja rumahnya di mana."',
      '"Namanya Lala, jangan ganggu dia ya."',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Perkenalan yang baik diawali salam sapaan sopan, menyebut nama dengan jelas, dan informasi singkat yang positif.',
  },
  {
    id: 'bi5-q29',
    topik: 'Kata Permohonan Pinjam Santun',
    tp: 'TP 4',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Ketika kamu lupa membawa penggaris dan ingin meminjam milik teman sebangku, kata sopan yang sebaiknya mengawali permintaanmu adalah ...',
    pilihan: ['Cepat berikan', 'Maaf, bolehkah aku meminjam', 'Mana milikmu', 'Serahkan sekarang'],
    jawabanBenar: 1,
    pembahasan:
      'Mengawali dengan "Maaf, bolehkah..." atau "Tolong..." menunjukkan tata krama yang menghargai pemilik barang.',
  },
  {
    id: 'bi5-q30',
    topik: 'Memberi Saran Terhadap Karya Teman',
    tp: 'TP 4',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Temanmu membuat poster ajakan hemat air, tetapi ukuran huruf judulnya terlalu kecil sehingga kurang terbaca dari jauh. Saran yang santun adalah ...',
    pilihan: [
      '"Tulisanmu jelek dan kekecilan, ganti saja semua!"',
      '"Gambar tetes air pada postermu sudah sangat menarik. Sebaiknya judulnya diperbesar sedikit agar lebih mudah terbaca dari jauh."',
      '"Tidak ada gunanya membuat poster kalau hurufnya kecil begitu."',
      '"Biar aku saja yang menulis ulang karena tulisanmu tidak rapi."',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Saran membangun memuji kelebihan karya terlebih dahulu lalu memberi masukan perbaikan dengan bahasa lembut.',
  },
  {
    id: 'bi5-q31',
    topik: 'Etika Menyanggah dalam Diskusi',
    tp: 'TP 4',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Dalam diskusi kelompok, kamu kurang setuju dengan usulan ketua kelompok. Etika menyanggah yang santun ditunjukkan oleh sikap ...\n(1) Menunggu teman selesai berbicara sebelum mengangkat tangan.\n(2) Mengucapkan terima kasih atas pendapatnya lalu menyampaikan alasan sanggahan dengan tenang.\n(3) Memotong pembicaraan dengan suara keras agar segera didengar.\n(4) Menyertakan usulan jalan keluar yang lebih baik.\nPilihan yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Menghargai pembicara, menunggu giliran, berkata tenang, dan memberi solusi adalah kunci sanggahan yang santun.',
  },
  {
    id: 'bi5-q32',
    topik: 'Mengatur Durasi Bicara Presentasi',
    tp: 'TP 4',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Satu kelompok beranggotakan 4 siswa diberi waktu presentasi selama 12 menit secara merata. Jika moderator memakai 2 menit untuk pembukaan dan penutupan, sisa waktu dibagi rata untuk 3 penyaji materi. Berapa menit lebih tepatnya? Hitung ulang jika 4 penyaji masing-masing bicara 2 menit, berapa sisa waktu tanya jawab dari 12 menit?',
    pilihan: ['2 menit', '4 menit', '6 menit', '8 menit'],
    jawabanBenar: 1,
    pembahasan:
      'Total waktu 4 penyaji = 4 × 2 menit = 8 menit. Sisa waktu untuk tanya jawab = 12 - 8 = 4 menit.',
  },
  {
    id: 'bi5-q33',
    topik: 'Laporan Survei Hobi Kelas',
    tp: 'TP 4',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Hasil wawancara hobi 30 siswa kelas V menunjukkan: 12 siswa gemar olahraga, 8 siswa gemar membaca, 6 siswa gemar menggambar, dan sisanya gemar menari. Berdasarkan data tersebut, berapa siswa yang gemar menari?',
    pilihan: ['3 siswa', '4 siswa', '5 siswa', '6 siswa'],
    jawabanBenar: 1,
    pembahasan: '30 - (12 + 8 + 6) = 30 - 26 = 4 siswa gemar menari.',
  },
  {
    id: 'bi5-q34',
    topik: 'Kalimat Sanggahan Sopan',
    tp: 'TP 4',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Kelompokmu berencana membuat taman kelas dari botol bekas, tetapi seorang teman mengusulkan membeli pot keramik mahal. Manakah kalimat sanggahan yang santun dan logis?\n(1) "Maaf, ide pot keramik memang indah, namun biayanya cukup besar dan mudah pecah."\n(2) "Bagaimana jika kita tetap memakai botol bekas yang dicat rapi agar hemat dan ramah lingkungan?"\n(3) "Ide kamu boros sekali, tidak usah didengarkan!"\n(4) "Lebih baik kamu keluar dari kelompok kalau mengusulkan pot mahal."\nPilihan yang tepat adalah ...',
    pilihan: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)'],
    jawabanBenar: 0,
    pembahasan:
      'Kalimat (1) dan (2) menolak dengan halus, memberi alasan masuk akal, dan menawarkan solusi alternatif.',
  },
  {
    id: 'bi5-q35',
    topik: 'Menyusun Gagasan Presentasi Hasil Wawancara',
    tp: 'TP 4',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Setelah mewawancarai seorang perajin anyaman bambu, hal-hal penting apa yang harus disampaikan secara runtut saat mempresentasikan hasilnya di depan kelas?',
    pilihan: [
      'Salam pembuka, nama dan profesi narasumber, inti hasil wawancara (proses dan kendala usaha), serta kesimpulan dan penutup yang santun',
      'Langsung menyebutkan harga barang tanpa salam maupun nama narasumber',
      'Menceritakan pengalaman bermain sebelum berangkat wawancara saja',
      'Membacakan daftar belanja pribadi selama di pasar',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Laporan wawancara yang runtut meliputi pembukaan, identitas narasumber, isi temuan pokok, serta simpulan dan salam penutup.',
  },
];

/**
 * Seni Rupa Kelas 5 — 35 Soal Baru (TP 1: 12, TP 2: 12, TP 3: 11)
 * Proporsi indikator: 10 Pilihan Ganda, 10 PGK (adaptasi), 10 Isian Singkat, 5 Uraian
 */
export const SENI_RUPA_KELAS5_SOAL: QuizQuestion[] = [
  // TP 1 — Unsur & Prinsip Seni Rupa (12 soal)
  {
    id: 'sr5-q01',
    topik: 'Unsur Terkecil Seni Rupa',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Unsur seni rupa yang paling kecil dan menjadi dasar terbentuknya garis serta bidang adalah ...',
    pilihan: ['Warna', 'Titik', 'Tekstur', 'Ruang'],
    jawabanBenar: 1,
    pembahasan: 'Titik merupakan unsur paling dasar dalam seni rupa sebelum dirangkai menjadi garis.',
  },
  {
    id: 'sr5-q02',
    topik: 'Kelompok Warna Primer',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Tiga warna pokok (warna primer) yang tidak dapat diperoleh dari campuran warna lain adalah ...',
    pilihan: [
      'Hijau, jingga, dan ungu',
      'Merah, kuning, dan biru',
      'Hitam, putih, dan abu-abu',
      'Cokelat, merah muda, dan krem',
    ],
    jawabanBenar: 1,
    pembahasan: 'Warna primer terdiri atas merah, kuning, dan biru.',
  },
  {
    id: 'sr5-q03',
    topik: 'Unsur Tekstur',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Sifat permukaan suatu benda yang dapat dirasakan halus, licin, atau kasar ketika diraba atau dilihat disebut ...',
    pilihan: ['Bidang', 'Tekstur', 'Ritme', 'Proporsi'],
    jawabanBenar: 1,
    pembahasan: 'Tekstur adalah nilai raba atau kesan permukaan benda (kasar, halus, bergelombang).',
  },
  {
    id: 'sr5-q04',
    topik: 'Jenis-Jenis Prinsip Ritme',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Santi menggambar deretan pohon cemara dari ukuran sangat kecil di sebelah kiri, sedang di tengah, hingga besar di sebelah kanan. Prinsip ritme yang diterapkan Santi adalah ...',
    pilihan: ['Ritme repetisi sama besar', 'Ritme progresif', 'Ritme acak', 'Keseimbangan asimetris'],
    jawabanBenar: 1,
    pembahasan:
      'Ritme progresif menampilkan perubahan ukuran, warna, atau jarak objek secara bertahap.',
  },
  {
    id: 'sr5-q05',
    topik: 'Menghitung Motif Ritme Alternasi',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Pola hiasan tepi taplak meja menggunakan urutan berulang: "lingkaran, segitiga, persegi" lalu kembali lagi ke awal. Pada urutan ke-11, bentuk apa yang harus digambar?',
    pilihan: ['Lingkaran', 'Segitiga', 'Persegi', 'Bintang'],
    jawabanBenar: 1,
    pembahasan:
      'Pola berulang setiap 3 bentuk. Kelipatan 3 terdekat sebelum 11 adalah 9 (persegi), urutan 10 = lingkaran, urutan 11 = segitiga.',
  },
  {
    id: 'sr5-q06',
    topik: 'Menghitung Panjang Pola Berulang',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Sebuah bingkai gambar memiliki panjang 36 cm dan akan diisi motif bunga berjarak 4 cm untuk satu gambarnya secara rapat tanpa sela. Berapa banyak motif bunga dalam satu baris penuh?',
    pilihan: ['8 motif', '9 motif', '10 motif', '12 motif'],
    jawabanBenar: 1,
    pembahasan: '36 cm ÷ 4 cm per motif = 9 motif bunga dalam satu baris.',
  },
  {
    id: 'sr5-q07',
    topik: 'Unsur Seni Rupa dalam Gambar',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Manakah pernyataan yang benar tentang unsur-unsur seni rupa?\n(1) Garis lengkung dan bergelombang memberi kesan luwes dan lembut.\n(2) Gabungan beberapa garis yang ujungnya bertemu membentuk sebuah bidang.\n(3) Gelap terang membuat gambar benda datar tampak memiliki volume.\n(4) Warna sekunder berasal dari campuran tiga warna netral.\nPilihan yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(1) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Garis lengkung berkesan luwes, garis tertutup membentuk bidang, dan gelap terang menciptakan kesan ruang/volume.',
  },
  {
    id: 'sr5-q08',
    topik: 'Keseimbangan Simetris',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Gambar kupu-kupu yang sayap kiri dan kanannya memiliki bentuk, ukuran, serta corak sama persis saat dilipat di tengah menerapkan prinsip ...',
    pilihan: [
      'Keseimbangan simetris',
      'Keseimbangan asimetris',
      'Ritme progresif',
      'Kontras acak',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Keseimbangan simetris terjadi apabila bagian kiri dan kanan sumbu tengah tampak seimbang dan serupa.',
  },
  {
    id: 'sr5-q09',
    topik: 'Proporsi Teko dan Cangkir',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Pada gambar meja makan, sebuah teko teh tingginya dua kali tinggi cangkir di sebelahnya. Jika cangkir digambar setinggi 4 cm, tinggi teko agar proporsional adalah ...',
    pilihan: ['2 cm', '4 cm', '8 cm', '16 cm'],
    jawabanBenar: 2,
    pembahasan: 'Agar proporsional sesuai perbandingan 2 kali cangkir, tinggi teko = 2 × 4 cm = 8 cm.',
  },
  {
    id: 'sr5-q10',
    topik: 'Mengidentifikasi Prinsip Ritme & Keseimbangan',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Manakah contoh penerapan prinsip ritme dalam karya seni rupa?\n(1) Motif batik yang mengulang bentuk kawung secara teratur.\n(2) Deretan daun hijau-kuning-hijau-kuning pada bingkai gambar.\n(3) Menggambar satu titik saja di tengah kertas kosong.\n(4) Susunan ombak laut yang berulang dari kecil ke besar.\nPilihan yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Ritme selalu melibatkan pengulangan bentuk, warna, atau ukuran secara teratur (repetisi, alternasi, atau progresif).',
  },
  {
    id: 'sr5-q11',
    topik: 'Pentingnya Proporsi dalam Menggambar',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Bayu menggambar pemandangan sekolah: gedung sekolah digambar jauh lebih kecil daripada sebuah tempat sampah di sebelahnya padahal jaraknya sejajar. Prinsip seni rupa apa yang belum tepat dan bagaimana cara memperbaikinya?',
    pilihan: [
      'Prinsip proporsi belum tepat; gedung sekolah harus digambar jauh lebih besar daripada tempat sampah agar perbandingan ukurannya wajar',
      'Prinsip warna belum tepat; gedung harus dicat hitam seluruhnya',
      'Prinsip tekstur belum tepat; tempat sampah harus digambar tanpa garis',
      'Prinsip ritme belum tepat; tempat sampah harus digambar sepuluh buah',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Proporsi mengatur kesesuaian perbandingan ukuran antarobjek dalam satu gambar agar terlihat nyata dan wajar.',
  },
  {
    id: 'sr5-q12',
    topik: 'Analisis Garis & Bidang pada Ragam Hias',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Sebuah motif hias dinding sekolah menggabungkan unsur titik, garis zig-zag, bidang segitiga, dan pengulangan warna merah-putih. Mengapa perpaduan tersebut membuat gambar terlihat harmonis?\n(1) Adanya kesatuan unsur titik, garis, dan bidang.\n(2) Adanya ritme alternasi warna merah dan putih.\n(3) Semua warna dicampur menjadi abu-abu gelap.\n(4) Penataan garis dan bidang tersusun seimbang.\nPilihan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(1) dan (3) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Keharmonisan lahir dari keterpaduan unsur rupa, pengulangan warna (ritme), dan keseimbangan susunan.',
  },

  // TP 2 — Media, Alat, Bahan & Teknik Kering/Basah (12 soal)
  {
    id: 'sr5-q13',
    topik: 'Alat Pencampur Cat',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Wadah pipih berlekuk-lekuk yang digunakan pelukis untuk menaruh dan mencampur cat air atau cat poster disebut ...',
    pilihan: ['Kanvas', 'Palet', 'Kuas datar', 'Easel'],
    jawabanBenar: 1,
    pembahasan: 'Palet adalah wadah khusus untuk menampung dan mencampur berbagai warna cat.',
  },
  {
    id: 'sr5-q14',
    topik: 'Kelompok Teknik Kering',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Alat menggambar berikut ini yang semuanya termasuk media teknik kering adalah ...',
    pilihan: [
      'Cat air, tinta bak, dan cat poster',
      'Pensil 2B, pensil warna, dan krayon',
      'Cat akrilik, air bersih, dan kuas basah',
      'Cat minyak, pengencer terpentin, dan cat air',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Teknik kering tidak memerlukan air atau minyak pengencer, contohnya pensil grafit, pensil warna, krayon, dan spidol.',
  },
  {
    id: 'sr5-q15',
    topik: 'Kode Pensil Lunak untuk Arsir',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Untuk membuat arsiran gelap terang yang tebal dan lembut, pensil gambar bertanda huruf ... lebih cocok dipakai daripada pensil H.',
    pilihan: ['F', 'B (seperti 2B, 4B, 6B)', '2H', '4H'],
    jawabanBenar: 1,
    pembahasan:
      'Kode B (Blackness) berarti grafitnya lunak dan menghasilkan goresan hitam pekat, cocok untuk arsiran.',
  },
  {
    id: 'sr5-q16',
    topik: 'Teknik Aquarel vs Plakat',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Perbedaan utama antara melukis teknik aquarel dan teknik plakat terletak pada ...',
    pilihan: [
      'Aquarel menggunakan cat encer dengan sapuan transparan, sedangkan plakat memakai cat kental yang menutup bidang kertas',
      'Aquarel hanya memakai warna hitam putih, sedangkan plakat memakai krayon',
      'Aquarel digambar di atas tanah liat, sedangkan plakat di atas kaca',
      'Aquarel tidak boleh memakai kuas sama sekali',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Teknik aquarel menghasilkan warna tipis tembus pandang karena banyak air, sementara plakat bersifat pekat dan menutup rata.',
  },
  {
    id: 'sr5-q17',
    topik: 'Pemilihan Kertas untuk Cat Air',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Agar hasil lukisan cat air tidak berlubang atau bergelombang parah, kertas dan perlengkapan yang tepat adalah ...\n(1) Kertas gambar khusus cat air yang tebal dan menyerap air.\n(2) Kertas tisu tipis atau kertas koran bekas.\n(3) Kuas lembut dan gelas air bersih untuk membilas kuas.\n(4) Lap kain bersih untuk mengeringkan kelebihan air di kuas.\nPilihan yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (3), dan (4)',
      '(2) dan (3) saja',
      '(2) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Cat air membutuhkan kertas tebal (minimal 150–300 gsm), kuas lembut, air bilasan, dan lap kain.',
  },
  {
    id: 'sr5-q18',
    topik: 'Gradasi dengan Krayon',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Langkah yang tepat untuk menghasilkan gradasi warna langit yang halus menggunakan krayon (oil pastel) adalah ...\n(1) Mulai mewarnai bagian tepi dengan warna biru tua.\n(2) Lanjutkan dengan biru muda secara memutar di batas pertemuan dua warna.\n(3) Menggosok kuat dengan penghapus karet hingga kertas robek.\n(4) Membersihkan remah krayon memakai tisu atau kuas kering secara perlahan.\nPilihan yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Gradasi krayon dibuat dengan memadukan warna gelap ke terang secara memutar halus lalu membersihkan serbuk kotornya.',
  },
  {
    id: 'sr5-q19',
    topik: 'Pencampuran Warna Sekunder',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Jika kamu hanya memiliki cat air warna biru dan kuning di palet, lalu ingin melukis dedaunan berwarna hijau, tindakan yang harus dilakukan adalah ...',
    pilihan: [
      'Mencampurkan cat biru dan kuning secara merata',
      'Menambahkan banyak air pada warna biru saja',
      'Mencampur biru dengan warna hitam',
      'Mengeringkan cat kuning lalu menimpanya dengan pensil',
    ],
    jawabanBenar: 0,
    pembahasan: 'Campuran warna primer biru dan kuning menghasilkan warna sekunder hijau.',
  },
  {
    id: 'sr5-q20',
    topik: 'Kebutuhan Alat Lukis Kelompok',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Dalam satu kelompok berisi 6 siswa, setiap siswa membutuhkan 2 lembar kertas gambar tebal dan bersama-sama memakai 3 palet cat. Untuk 4 kelompok di kelas V, berapa total lembar kertas gambar yang dibutuhkan?',
    pilihan: ['24 lembar', '36 lembar', '48 lembar', '60 lembar'],
    jawabanBenar: 2,
    pembahasan: '1 kelompok butuh 6 × 2 = 12 lembar. Jadi 4 kelompok = 4 × 12 = 48 lembar kertas.',
  },
  {
    id: 'sr5-q21',
    topik: 'Teknik Pointilis & Arsir',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Manakah pernyataan yang benar mengenai teknik arsir dan teknik pointilis?\n(1) Teknik arsir menyusun garis sejajar atau menyilang untuk memberi kesan gelap terang.\n(2) Teknik pointilis membentuk gambar dengan susunan titik-titik rapat dan renggang.\n(3) Semakin rapat titik atau arsiran, bagian gambar tampak semakin gelap.\n(4) Keduanya harus dicelupkan ke dalam minyak goreng sebelum digoreskan.\nPilihan yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Arsir memakai goresan garis dan pointilis memakai titik; kerapatan goresan/titik menentukan tingkat gelapnya.',
  },
  {
    id: 'sr5-q22',
    topik: 'Merawat Alat Gambar',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Setelah selesai melukis dengan cat poster, kuas harus langsung dicuci bersih menggunakan air dan dikeringkan. Mengapa hal itu penting dilakukan?',
    pilihan: [
      'Agar bulu kuas tidak mengeras akibat cat kering dan warna tidak bercampur saat dipakai lagi',
      'Supaya gagang kayu kuas berubah warna menjadi mengilap',
      'Agar cat di dalam botol langsung membeku',
      'Supaya kertas gambar menjadi lebih tipis',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Cat yang mengering pada bulu kuas membuat kuas kaku dan merusak kebersihan warna pada pemakaian berikutnya.',
  },
  {
    id: 'sr5-q23',
    topik: 'Memilih Teknik Sesuai Tema Karya',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Kelompokmu ingin membuat poster ajakan menjaga lingkungan dengan warna cerah yang solid, menutup rapat, dan terlihat tegas dari kejauhan. Teknik basah mana yang paling tepat dipilih beserta alasannya?',
    pilihan: [
      'Teknik plakat menggunakan cat poster/akrilik kental karena menghasilkan warna solid, pekat, dan jelas terbaca dari jauh',
      'Teknik aquarel yang sangat encer karena warnanya hampir tidak terlihat',
      'Teknik arsir pensil tipis agar pembaca harus melihat dari jarak dekat',
      'Teknik ukir batu karena poster dibuat di atas beton',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Poster membutuhkan daya tarik visual kuat dan warna pekat merata, sehingga teknik plakat paling sesuai.',
  },
  {
    id: 'sr5-q24',
    topik: 'Pencampuran Warna Bertingkat',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Untuk melukis matahari terbenam berwarna jingga lalu memudar menjadi kuning terang di sekitar awan, warna dasar apa yang harus dicampur agar muncul warna jingga terlebih dahulu?',
    pilihan: [
      'Biru dan merah',
      'Merah dan kuning',
      'Biru dan kuning',
      'Hijau dan hitam',
    ],
    jawabanBenar: 1,
    pembahasan: 'Warna jingga (oranye) dihasilkan dari pencampuran warna merah dan kuning.',
  },

  // TP 3 — Karya Seni Rupa 2D, Sketsa & Komposisi Perspektif (11 soal)
  {
    id: 'sr5-q25',
    topik: 'Ciri Karya Seni Rupa 2 Dimensi',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Karya seni rupa dua dimensi hanya memiliki ukuran panjang dan lebar sehingga paling tepat dinikmati dari arah depan. Contoh karya 2 dimensi adalah ...',
    pilihan: [
      'Patung batu dan guci gerabah',
      'Lukisan pemandangan, poster, dan gambar dekoratif',
      'Vas bunga tanah liat dan miniatur rumah',
      'Topeng kayu dan kursi ukir',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Lukisan, poster, dan gambar dekoratif memiliki ukuran panjang serta lebar di bidang datar (2 dimensi).',
  },
  {
    id: 'sr5-q26',
    topik: 'Fungsi Sketsa Tipis',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Saat mulai menggambar bentuk benda, goresan awal sketsa sebaiknya dibuat tipis menggunakan pensil agar ...',
    pilihan: [
      'Langsung menjadi garis akhir yang tidak dapat diubah',
      'Mudah dihapus dan diperbaiki apabila proporsi atau letaknya kurang tepat',
      'Kertas gambar cepat sobek dan berlubang',
      'Cat air tidak bisa menempel di kertas',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Sketsa tipis memudahkan perbaikan bentuk maupun ukuran sebelum garis ditebalkan dan diwarnai.',
  },
  {
    id: 'sr5-q27',
    topik: 'Menghitung Bidang Bersih Garis Tepi',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Kertas gambar berukuran panjang 30 cm dan lebar 20 cm diberi garis tepi 2 cm di keempat sisinya (atas, bawah, kiri, kanan). Berapakah panjang dan lebar bidang gambar bersih di bagian dalam?',
    pilihan: ['28 cm × 18 cm', '26 cm × 16 cm', '24 cm × 14 cm', '32 cm × 22 cm'],
    jawabanBenar: 1,
    pembahasan:
      'Panjang bersih = 30 - (2 + 2) = 26 cm; lebar bersih = 20 - (2 + 2) = 16 cm.',
  },
  {
    id: 'sr5-q28',
    topik: 'Pembagian Kolom Bidang Gambar',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Bidang bersih kertas gambar selebar 24 cm akan dibagi menjadi 3 kolom sama besar untuk menggambar komik cerita berurutan. Berapa cm lebar setiap kolom komik?',
    pilihan: ['6 cm', '8 cm', '10 cm', '12 cm'],
    jawabanBenar: 1,
    pembahasan: '24 cm ÷ 3 kolom = 8 cm per kolom.',
  },
  {
    id: 'sr5-q29',
    topik: 'Komposisi Benda (Still Life)',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Ketika menggambar susunan benda (still life) berupa kendi tinggi, mangkuk sedang, dan buah apel kecil di atas meja, penataan komposisi yang paling indah dan wajar adalah ...',
    pilihan: [
      'Menempatkan kendi tinggi di bagian belakang agar tidak menutupi mangkuk dan apel yang ada di depan',
      'Menumpuk semua benda berjajar persis di satu pojok kertas',
      'Menggambar apel di belakang kendi sehingga apel hilang tak terlihat',
      'Menggambar apel berukuran lebih besar daripada kendi',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Objek paling tinggi diletakkan di belakang dan objek lebih kecil di depan agar seluruh benda tampak jelas dan berirama.',
  },
  {
    id: 'sr5-q30',
    topik: 'Perspektif Depan, Tengah, Belakang',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Dalam menggambar pemandangan jalan pedesaan dari dekat ke jauh, ciri perspektif yang tepat adalah ...\n(1) Pohon di bagian depan tampak besar, tinggi, dan detail daunnya jelas.\n(2) Gunung di bagian belakang tampak lebih kecil dan warnanya agak memudar.\n(3) Jalan yang lurus terlihat semakin menyempit ke arah titik hilang di kejauhan.\n(4) Rumah yang sangat jauh digambar jauh lebih besar daripada rumah di depan mata.\nPilihan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Menurut hukum perspektif, benda dekat tampak besar dan jelas, sedangkan benda jauh tampak makin kecil dan memudar.',
  },
  {
    id: 'sr5-q31',
    topik: 'Arah Cahaya & Bayangan',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Sebuah vas bunga disinari lampu belajar dari arah kiri atas. Di manakah sisi terang dan arah bayangan vas bunga yang benar pada gambar?',
    pilihan: [
      'Sisi terang di sebelah kiri, dan bayangan jatuh ke arah kanan bawah',
      'Sisi terang di sebelah kanan, dan bayangan jatuh ke kiri atas',
      'Seluruh sisi vas diwarnai hitam pekat tanpa bayangan',
      'Bayangan digambar mengambang di bagian atas vas bunga',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Bagian yang menghadap cahaya (kiri) menjadi terang, sedangkan bayangan jatuh berlawanan arah (ke kanan bawah).',
  },
  {
    id: 'sr5-q32',
    topik: 'Tahapan Menggambar Berurutan',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Urutan langkah yang benar saat berkarya gambar pemandangan 2 dimensi adalah ...\n(1) Menentukan tema dan membuat sketsa tipis posisi objek.\n(2) Menyempurnakan detail bentuk serta menebalkan garis utama.\n(3) Memberi warna serta efek gelap terang/bayangan.\n(4) Langsung menyiram seluruh kertas dengan cat hitam sebelum ada sketsa.\nLangkah yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (3), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Berkarya dimulai dari tema & sketsa tipis, penyempurnaan garis, lalu pewarnaan beserta gelap terang.',
  },
  {
    id: 'sr5-q33',
    topik: 'Pameran & Apresiasi Karya 2D',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Saat mengapresiasi lukisan teman di papan pajang kelas, sikap yang tepat ditunjukkan oleh nomor ...\n(1) Mengamati keindahan komposisi, warna, dan pesan gambarnya.\n(2) Memberi pujian atau masukan dengan kata-kata santun.\n(3) Menyentuh atau melipat lukisan teman dengan tangan kotor.\n(4) Menghargai usaha kreatif setiap pembuat karya.\nPilihan yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Apresiasi seni berarti mengamati, memahami, dan menghargai karya orang lain tanpa merusaknya.',
  },
  {
    id: 'sr5-q34',
    topik: 'Evaluasi Keseimbangan & Perspektif Gambar',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Niko menggambar ruang tamu yang kosong di sisi kanan, sementara sofa, meja, vas, dan lemari semuanya menumpuk di sisi kiri. Saran komposisi apa yang paling tepat agar lukisannya tampak seimbang?',
    pilihan: [
      'Menata objek secara tersebar seimbang antara sisi kiri dan kanan, misalnya meletakkan pot tanaman atau jendela di sisi kanan',
      'Memotong separuh kertas di sisi kanan dengan gunting',
      'Mewarnai sisi kanan dengan warna putih saja tanpa objek',
      'Menghapus seluruh gambar sofa dan membiarkan kertas kosong',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Keseimbangan ruang dapat diperbaiki dengan menempatkan objek pendukung di sisi kosong sehingga beban visual kiri dan kanan seimbang.',
  },
  {
    id: 'sr5-q35',
    topik: 'Menghubungkan Sketsa, Pewarnaan & Bayangan',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Mengapa gambar buah jeruk yang sudah diwarnai jingga tetap terlihat datar seperti kertas, dan sentuhan akhir apa yang dapat membuatnya tampak bulat tiga dimensi (bervolume)?',
    pilihan: [
      'Karena belum diberi gradasi gelap terang dan bayangan jatuh di permukaan meja pada sisi berlawanan dari arah datangnya cahaya',
      'Karena buah jeruk digambar memakai kertas gambar berwarna putih',
      'Karena garis tepi buah jeruk tidak menggunakan penggaris besi',
      'Karena ukurannya lebih kecil daripada lebar kertas gambar',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Gradasi warna gelap terang pada tubuh benda serta bayangan jatuh di bawahnya menciptakan ilusi kedalaman/volume.',
  },
];
