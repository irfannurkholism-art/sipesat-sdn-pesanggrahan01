import type { QuizQuestion } from './types.ts';

/**
 * Matematika Kelas 5 — 25 Soal Baru (TP 1: 6, TP 2: 6, TP 3: 7, TP 4: 6)
 * Proporsi indikator: 10 Pilihan Ganda, 5 PGK (adaptasi), 5 Isian Singkat, 5 Uraian
 */
export const MATEMATIKA_KELAS5_SOAL: QuizQuestion[] = [
  // TP 1 — Nilai Tempat & Hitung Bilangan Cacah (6 soal)
  {
    id: 'mtk5-q01',
    topik: 'Nilai Tempat Bilangan 5 Angka',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Pada bilangan 74.925, angka 4 menempati nilai tempat ...',
    pilihan: ['Puluhan ribu', 'Ribuan', 'Ratusan', 'Puluhan'],
    jawabanBenar: 1,
    pembahasan:
      '7 = puluhan ribu (70.000), 4 = ribuan (4.000), 9 = ratusan (900), 2 = puluhan (20), dan 5 = satuan.',
  },
  {
    id: 'mtk5-q02',
    topik: 'Selisih Nilai Angka pada Bilangan Cacah',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Perhatikan bilangan 58.352. Berapakah selisih nilai dua angka 5 pada bilangan tersebut?',
    pilihan: ['49.950', '49.500', '50.050', '45.000'],
    jawabanBenar: 0,
    pembahasan:
      'Angka 5 di depan bernilai 50.000 dan angka 5 di belakang bernilai 50. Selisihnya = 50.000 - 50 = 49.950.',
  },
  {
    id: 'mtk5-q03',
    topik: 'Menyusun Bilangan Terbesar',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Dari lima kartu angka: 3, 8, 1, 9, dan 4 (masing-masing dipakai tepat satu kali), bilangan lima angka terbesar yang dapat dibentuk adalah ...',
    pilihan: ['98.431', '98.341', '94.831', '89.431'],
    jawabanBenar: 0,
    pembahasan:
      'Urutkan angka dari paling besar ke paling kecil di nilai tempat tertinggi: 9, 8, 4, 3, 1 → 98.431.',
  },
  {
    id: 'mtk5-q04',
    topik: 'Hitung Campuran Tambah Kurang',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Gudang koperasi sekolah memiliki persediaan 425 buku tulis. Hari Senin terjual 168 buku, lalu hari Selasa datang kiriman baru sebanyak 195 buku. Banyak buku tulis di koperasi sekarang adalah ...',
    pilihan: ['442 buku', '452 buku', '462 buku', '788 buku'],
    jawabanBenar: 1,
    pembahasan: '425 - 168 + 195 = 257 + 195 = 452 buku.',
  },
  {
    id: 'mtk5-q05',
    topik: 'Pernyataan Benar Bilangan Cacah',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan perbandingan dan penulisan bilangan berikut:\n(1) 46.780 dibaca "empat puluh enam ribu tujuh ratus delapan puluh".\n(2) 39.850 > 39.580.\n(3) Pada 61.204, angka 2 bernilai 20.\n(4) 24.500 + 15.500 = 40.000.\nPernyataan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(1) dan (3) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Pernyataan (1), (2), dan (4) benar; pada 61.204 angka 2 menempati ratusan sehingga bernilai 200.',
  },
  {
    id: 'mtk5-q06',
    topik: 'Soal Cerita Pengeluaran & Sisa Uang',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Uang kas kelas V mula-mula Rp85.000,00. Pada minggu pertama digunakan Rp27.500,00 untuk membeli alat kebersihan dan Rp14.500,00 untuk spidol. Lalu seluruh siswa menyetor iuran minggu kedua sebesar Rp32.000,00. Berapakah saldo uang kas kelas V sekarang?',
    pilihan: ['Rp65.000,00', 'Rp75.000,00', 'Rp78.000,00', 'Rp85.000,00'],
    jawabanBenar: 1,
    pembahasan:
      'Total belanja = 27.500 + 14.500 = 42.000. Sisa = 85.000 - 42.000 = 43.000. Saldo akhir = 43.000 + 32.000 = Rp75.000,00.',
  },

  // TP 2 — Faktor Persekutuan, FPB & KPK (6 soal)
  {
    id: 'mtk5-q07',
    topik: 'Faktor Persekutuan Dua Bilangan',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Semua faktor persekutuan dari bilangan 18 dan 24 adalah ...',
    pilihan: [
      '1, 2, 3, dan 4',
      '1, 2, 3, dan 6',
      '2, 3, 6, dan 9',
      '1, 3, 6, dan 12',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Faktor 18 = {1, 2, 3, 6, 9, 18}. Faktor 24 = {1, 2, 3, 4, 6, 8, 12, 24}. Faktor yang sama (persekutuan) = 1, 2, 3, 6.',
  },
  {
    id: 'mtk5-q08',
    topik: 'KPK Lampu Taman Menyala Bersamaan',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Di taman kota terdapat lampu hias biru yang berkedip setiap 8 detik sekali dan lampu kuning setiap 12 detik sekali. Jika pada detik ke-0 keduanya berkedip bersamaan, setiap berapa detik sekali kedua lampu akan berkedip bersamaan kembali?',
    pilihan: ['16 detik', '20 detik', '24 detik', '36 detik'],
    jawabanBenar: 2,
    pembahasan:
      'Kelipatan 8 = 8, 16, 24, ... Kelipatan 12 = 12, 24, ... KPK(8, 12) = 24 detik.',
  },
  {
    id: 'mtk5-q09',
    topik: 'KPK Jadwal Latihan dengan Tanggal',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Tania pergi ke perpustakaan daerah setiap 4 hari sekali, sedangkan Bagus pergi setiap 6 hari sekali. Mereka terakhir kali bertemu di perpustakaan pada tanggal 3 November. Pada tanggal berapa mereka akan bertemu bersama lagi berikutnya?',
    pilihan: ['13 November', '15 November', '19 November', '27 November'],
    jawabanBenar: 1,
    pembahasan:
      'KPK(4, 6) = 12 hari. Tanggal bertemu lagi = 3 November + 12 hari = 15 November.',
  },
  {
    id: 'mtk5-q10',
    topik: 'FPB Membagi Paket Sama Rata',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Ibu menyiapkan 36 kue lemper dan 48 kue lapis untuk dimasukkan ke dalam kotak oleh-oleh. Setiap kotak harus berisi jenis dan jumlah kue sama banyak. Paling banyak berapa kotak yang dapat diisi?',
    pilihan: ['6 kotak', '8 kotak', '12 kotak', '18 kotak'],
    jawabanBenar: 2,
    pembahasan:
      'Faktor 36 = {1,2,3,4,6,9,12,18,36}; Faktor 48 = {1,2,3,4,6,8,12,16,24,48}. FPB(36, 48) = 12 kotak.',
  },
  {
    id: 'mtk5-q11',
    topik: 'Analisis FPB & Isi Tiap Paket',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Panitia bakti sosial mempunyai 40 botol minyak goreng dan 60 bungkus mi instan untuk dibagikan ke sebanyak-banyaknya keluarga secara merata. Berapa banyak keluarga penerima dan berapa isi setiap paketnya?',
    pilihan: [
      '10 keluarga; tiap paket 4 botol minyak dan 6 bungkus mi',
      '20 keluarga; tiap paket 2 botol minyak dan 3 bungkus mi',
      '20 keluarga; tiap paket 3 botol minyak dan 2 bungkus mi',
      '12 keluarga; tiap paket 3 botol minyak dan 5 bungkus mi',
    ],
    jawabanBenar: 1,
    pembahasan:
      'FPB(40, 60) = 20 keluarga. Isi per paket: minyak = 40 ÷ 20 = 2 botol, mi instan = 60 ÷ 20 = 3 bungkus.',
  },
  {
    id: 'mtk5-q12',
    topik: 'Identifikasi Konsep KPK dan FPB',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan pernyataan mengenai FPB dan KPK berikut:\n(1) KPK dari 10 dan 15 adalah 30.\n(2) FPB dari 24 dan 32 adalah 8.\n(3) Soal menanyakan kapan dua jadwal bertemu lagi diselesaikan dengan KPK.\n(4) FPB dari dua bilangan selalu lebih besar daripada KPK-nya.\nPernyataan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'KPK(10,15)=30, FPB(24,32)=8, dan jadwal bertemu memakai KPK. FPB selalu lebih kecil atau sama dengan KPK.',
  },

  // TP 3 — Membandingkan, Menyetarakan & Mengurutkan Pecahan (7 soal)
  {
    id: 'mtk5-q13',
    topik: 'Membandingkan Dua Pecahan',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Tanda perbandingan yang tepat untuk mengisi titik-titik pada pecahan 3/5 ... 5/8 adalah ...',
    pilihan: ['>', '<', '=', '≥'],
    jawabanBenar: 1,
    pembahasan:
      'Samakan penyebut menjadi 40: 3/5 = 24/40 dan 5/8 = 25/40. Karena 24/40 < 25/40, maka 3/5 < 5/8.',
  },
  {
    id: 'mtk5-q14',
    topik: 'Pecahan Senilai',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Pecahan manakah yang nilainya senilai dengan 3/4?',
    pilihan: ['6/12', '9/12', '12/20', '15/24'],
    jawabanBenar: 1,
    pembahasan: 'Pembilang dan penyebut 3/4 sama-sama dikali 3 menghasilkan 9/12.',
  },
  {
    id: 'mtk5-q15',
    topik: 'Mengubah Pecahan Biasa ke Desimal',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Bentuk pecahan desimal dari 7/20 adalah ...',
    pilihan: ['0,25', '0,35', '0,45', '0,70'],
    jawabanBenar: 1,
    pembahasan: 'Kalikan pembilang dan penyebut dengan 5: 7/20 = 35/100 = 0,35.',
  },
  {
    id: 'mtk5-q16',
    topik: 'Kesetaraan Pecahan, Desimal & Persen',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan pasangan bilangan yang senilai di bawah ini:\n(1) 3/5 = 0,6 = 60%\n(2) 1/8 = 0,125 = 12,5%\n(3) 3/4 = 0,34 = 34%\n(4) 2/5 = 0,4 = 40%\nPasangan yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      '3/5=0,60=60%; 1/8=0,125=12,5%; 2/5=0,40=40%. Sedangkan 3/4 seharusnya 0,75 atau 75%.',
  },
  {
    id: 'mtk5-q17',
    topik: 'Mengurutkan Berbagai Bentuk Pecahan',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Urutan bilangan berikut dari yang paling kecil ke yang paling besar untuk 70% ; 2/5 ; 0,55 ; dan 3/4 adalah ...',
    pilihan: [
      '2/5 ; 0,55 ; 70% ; 3/4',
      '0,55 ; 2/5 ; 70% ; 3/4',
      '2/5 ; 70% ; 0,55 ; 3/4',
      '3/4 ; 70% ; 0,55 ; 2/5',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Ubah ke desimal: 2/5 = 0,40; 0,55 = 0,55; 70% = 0,70; 3/4 = 0,75. Urutannya: 2/5 ; 0,55 ; 70% ; 3/4.',
  },
  {
    id: 'mtk5-q18',
    topik: 'Perbandingan Panjang Pita dalam Pecahan',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Empat siswa membawa pita untuk prakarya: Lani 0,8 m, Dodo 3/4 m, Ayu 65% m, dan Bayu 4/5 m. Manakah pernyataan yang benar?\n(1) Pita Lani dan pita Bayu sama panjang.\n(2) Pita Ayu adalah pita yang paling pendek.\n(3) Pita Dodo lebih panjang daripada pita Lani.\n(4) Pita Dodo lebih panjang daripada pita Ayu.\nPilihan yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(1) dan (3) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Lani=0,80 m, Bayu=4/5=0,80 m, Dodo=3/4=0,75 m, Ayu=65%=0,65 m. Jadi Lani=Bayu, Ayu terpendek, dan Dodo > Ayu.',
  },
  {
    id: 'mtk5-q19',
    topik: 'Membandingkan Bagian Kue atau Kebun',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Pak Anton membagi lahan kebunnya yang sama luas di dua tempat: 3/8 bagian kebun timur ditanami wortel, sedangkan 0,4 bagian kebun barat ditanami brokoli. Tanaman manakah yang menempati lahan lebih luas, dan berapa selisih bagiannya?',
    pilihan: [
      'Wortel lebih luas dengan selisih 0,025 bagian',
      'Brokoli lebih luas dengan selisih 0,025 bagian (atau 1/40)',
      'Keduanya sama luas karena 3/8 sama dengan 0,4',
      'Brokoli lebih luas dengan selisih 0,125 bagian',
    ],
    jawabanBenar: 1,
    pembahasan:
      '3/8 = 0,375 sedangkan brokoli = 0,400. Jadi brokoli lebih luas sebesar 0,400 - 0,375 = 0,025 (atau 1/40 bagian).',
  },

  // TP 4 — Keliling & Luas Bangun Datar (6 soal)
  {
    id: 'mtk5-q20',
    topik: 'Keliling Segitiga (Putaran Lari)',
    tp: 'TP 4',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Sebuah taman berbentuk segitiga memiliki panjang sisi-sisi 14 m, 16 m, dan 20 m. Jika Dani berlari mengelilingi taman tersebut sebanyak 2 putaran penuh, jarak yang ditempuh Dani adalah ...',
    pilihan: ['50 m', '80 m', '100 m', '120 m'],
    jawabanBenar: 2,
    pembahasan: 'Keliling 1 putaran = 14 + 16 + 20 = 50 m. Untuk 2 putaran = 2 × 50 = 100 m.',
  },
  {
    id: 'mtk5-q21',
    topik: 'Luas Segitiga',
    tp: 'TP 4',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Sebuah bendera pramuka berbentuk segitiga memiliki panjang alas 24 cm dan tinggi 15 cm. Berapakah luas bendera tersebut?',
    pilihan: ['160 cm²', '180 cm²', '240 cm²', '360 cm²'],
    jawabanBenar: 1,
    pembahasan: 'Luas segitiga = (alas × tinggi) ÷ 2 = (24 × 15) ÷ 2 = 360 ÷ 2 = 180 cm².',
  },
  {
    id: 'mtk5-q22',
    topik: 'Mencari Sisi Persegi dari Keliling',
    tp: 'TP 4',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Keliling sebuah bingkai foto berbentuk persegi adalah 96 cm. Berapakah luas bingkai foto tersebut?',
    pilihan: ['384 cm²', '512 cm²', '576 cm²', '625 cm²'],
    jawabanBenar: 2,
    pembahasan:
      'Sisi persegi = Keliling ÷ 4 = 96 ÷ 4 = 24 cm. Luas persegi = 24 × 24 = 576 cm².',
  },
  {
    id: 'mtk5-q23',
    topik: 'Mencari Lebar & Keliling Persegi Panjang',
    tp: 'TP 4',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Lantai panggung kelas berbentuk persegi panjang memiliki luas 72 m² dengan panjang 9 m. Berapakah keliling panggung tersebut?',
    pilihan: ['17 m', '34 m', '36 m', '68 m'],
    jawabanBenar: 1,
    pembahasan:
      'Lebar = Luas ÷ panjang = 72 ÷ 9 = 8 m. Keliling = 2 × (9 + 8) = 2 × 17 = 34 m.',
  },
  {
    id: 'mtk5-q24',
    topik: 'Sifat & Perhitungan Bangun Datar',
    tp: 'TP 4',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan ukuran dan pernyataan bangun datar berikut:\n(1) Persegi panjang berukuran 15 cm × 8 cm memiliki luas 120 cm².\n(2) Persegi dengan panjang sisi 11 cm memiliki keliling 44 cm.\n(3) Segitiga dengan alas 12 cm dan tinggi 10 cm memiliki luas 120 cm².\n(4) Persegi panjang 10 cm × 6 cm memiliki keliling 32 cm.\nPernyataan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Nomor (1), (2), dan (4) benar. Untuk nomor (3), luas segitiga = (12 × 10) ÷ 2 = 60 cm², bukan 120 cm².',
  },
  {
    id: 'mtk5-q25',
    topik: 'Menghitung Kebutuhan Ubin Lantai',
    tp: 'TP 4',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Lantai sebuah ruang kelas berukuran panjang 6 m dan lebar 4 m akan dipasangi ubin persegi berukuran sisi 50 cm. Berapakah banyak ubin yang diperlukan untuk menutup seluruh lantai ruangan tersebut?',
    pilihan: ['48 ubin', '84 ubin', '96 ubin', '120 ubin'],
    jawabanBenar: 2,
    pembahasan:
      'Ubah ke cm: 6 m = 600 cm, 4 m = 400 cm. Luas ruangan = 600 × 400 = 240.000 cm². Luas 1 ubin = 50 × 50 = 2.500 cm². Banyak ubin = 240.000 ÷ 2.500 = 96 ubin.',
  },
];

/**
 * PLH Kelas 5 — 35 Soal Baru (TP 1: 12, TP 2: 12, TP 3: 11)
 * Proporsi indikator: 10 Pilihan Ganda, 10 PGK (adaptasi), 10 Isian Singkat, 5 Uraian
 */
export const PLH_KELAS5_SOAL: QuizQuestion[] = [
  // TP 1 — Kelestarian Lingkungan & Budidaya Anggrek Bulan (12 soal)
  {
    id: 'plh5-q01',
    topik: 'Sentra Tanaman Hias Kota Batu',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Di Kota Batu, desa yang terkenal sebagai sentra pembudidayaan dan wisata bunga hias seperti mawar, krisan, dan anggrek adalah Desa ...',
    pilihan: ['Pesanggrahan', 'Sidomulyo', 'Junrejo', 'Oro-oro Ombo'],
    jawabanBenar: 1,
    pembahasan:
      'Desa Sidomulyo di Kota Batu dikenal luas sebagai sentra tanaman hias dan wisata petik bunga.',
  },
  {
    id: 'plh5-q02',
    topik: 'Bunga Nasional Puspa Pesona',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Tanaman Anggrek Bulan (Phalaenopsis amabilis) ditetapkan di Indonesia sebagai bunga nasional dengan julukan ...',
    pilihan: ['Puspa Bangsa', 'Puspa Pesona', 'Puspa Langka', 'Puspa Rimba'],
    jawabanBenar: 1,
    pembahasan:
      'Melati putih = Puspa Bangsa, Anggrek Bulan = Puspa Pesona, dan Padma Raksasa = Puspa Langka.',
  },
  {
    id: 'plh5-q03',
    topik: 'Sifat Hidup Anggrek Bulan',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Anggrek bulan tumbuh menempel pada batang pohon lain hanya untuk bertumpu tanpa menyerap makanan dari pohon inangnya. Sifat hidup seperti ini disebut ...',
    pilihan: ['Parasit', 'Epifit', 'Hidrofit', 'Karnivora'],
    jawabanBenar: 1,
    pembahasan:
      'Epifit berarti menumpang pada tumbuhan lain untuk mendapat cahaya dan sirkulasi udara tanpa merugikan inangnya.',
  },
  {
    id: 'plh5-q04',
    topik: 'Manfaat Tanaman Hias bagi Udara',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Manakah manfaat nyata merawat tanaman hias di pekarangan rumah maupun sekolah?\n(1) Menghasilkan gas oksigen (O₂) saat berfotosintesis di siang hari.\n(2) Membantu menyerap debu dan gas karbon dioksida.\n(3) Menyejukkan suasana dan memperindah pemandangan.\n(4) Membuat tanah halaman menjadi beracun.\nManfaat yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Tanaman hias menghasilkan oksigen, menyaring polusi, sekaligus memperindah dan menyejukkan lingkungan.',
  },
  {
    id: 'plh5-q05',
    topik: 'Syarat Media Tanam Anggrek',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Mengapa menanam anggrek bulan lebih baik menggunakan pot tanah liat berlubang dengan isi arang kayu, pakis cacah, dan sabut kelapa daripada tanah liat basah?',
    pilihan: [
      'Agar air cepat mengalir dan akar anggrek mendapat cukup rongga udara sehingga tidak membusuk',
      'Supaya pot menjadi sangat berat dan sulit dipindahkan',
      'Agar cacing tanah mudah masuk ke dalam batang bunga',
      'Supaya air hujan tergenang penuh di permukaan pot sepanjang minggu',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Akar anggrek epifit membutuhkan sirkulasi udara baik dan tidak boleh terendam air terus-menerus.',
  },
  {
    id: 'plh5-q06',
    topik: 'Penggunaan Jaring Paranet',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan perawatan anggrek bulan berikut:\n(1) Dipasang jaring paranet peneduh agar terhindar dari terik matahari langsung.\n(2) Disiram secukupnya pada pagi atau sore hari saat media mulai kering.\n(3) Ditempatkan di ruangan yang memiliki sirkulasi udara lancar.\n(4) Direndam di ember berisi air selama tiga hari berturut-turut.\nPerawatan yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Anggrek menyukai cahaya teduh (paranet), udara segar, dan penyiraman teratur tanpa genangan.',
  },
  {
    id: 'plh5-q07',
    topik: 'Menghitung Air Siram & Pupuk Tanaman',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Setiap satu pot anggrek disiram memakai 150 ml air larutan pupuk cair. Jika sekolah memiliki 12 pot anggrek bulan, berapa ml total air siram yang dibutuhkan dalam sekali penyiraman?',
    pilihan: ['1.500 ml', '1.650 ml', '1.800 ml', '2.100 ml'],
    jawabanBenar: 2,
    pembahasan: '12 pot × 150 ml = 1.800 ml (atau 1,8 liter).',
  },
  {
    id: 'plh5-q08',
    topik: 'Hemat Air dengan Air Cucian Beras',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Tindakan hemat air sekaligus menyuburkan tanaman hias di rumah dapat dilakukan dengan cara ...',
    pilihan: [
      'Menyiram tanaman memakai air sisa cucian beras atau cucian sayur',
      'Membiarkan keran air terus mengalir di halaman sepanjang siang',
      'Menyiram tanaman dengan air sabun bekas mencuci piring',
      'Menyiram bunga tepat di tengah terik pukul 12.00 siang dengan selang besar',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Air cucian beras (leri) mengandung nutrisi alami bagi tanaman dan mengurangi pemborosan air bersih.',
  },
  {
    id: 'plh5-q09',
    topik: 'Menghitung Kebutuhan Pot dan Bibit',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Di taman sekolah terdapat 3 rak bunga. Setiap rak menampung 8 pot anggrek, dan setiap pot membutuhkan 250 gram pecahan arang kayu. Berapa kilogram total arang kayu yang diperlukan?',
    pilihan: ['4 kg', '5 kg', '6 kg', '8 kg'],
    jawabanBenar: 2,
    pembahasan:
      'Jumlah pot = 3 × 8 = 24 pot. Total arang = 24 × 250 gram = 6.000 gram = 6 kg.',
  },
  {
    id: 'plh5-q10',
    topik: 'Fungsi Lubang Drainase pada Pot',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Jika seorang siswa menanam anggrek bulan dalam botol plastik tanpa melubangi bagian bawah maupun sampingnya, dampak yang akan terjadi adalah ...',
    pilihan: [
      'Air siraman menggenang di dalam wadah sehingga akar anggrek menjadi busuk dan layu',
      'Bunga anggrek mekar dua kali lebih cepat',
      'Media tanam berubah menjadi arang kering seketika',
      'Daun anggrek berubah menjadi tanaman kaktus',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Tanpa lubang drainase, kelebihan air tidak dapat keluar sehingga akar kekurangan oksigen dan membusuk.',
  },
  {
    id: 'plh5-q11',
    topik: 'Merancang Kebun Sekolah Hijau',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Sebuah halaman kelas terasa panas dan gersang. Jika siswa ingin menata sudut tanaman hias sekaligus menanam anggrek, rencana penataan yang paling tepat adalah ...',
    pilihan: [
      'Menanam pohon peneduh atau memasang paranet, meletakkan pot anggrek berlubang berisi arang/pakis di tempat teduh, dan membuat jadwal piket penyiraman hemat air',
      'Meletakkan semua anggrek langsung di tengah lapangan aspal tanpa peneduh',
      'Mengisi seluruh pot dengan tanah liat padat lalu menutupnya dengan plastik rapat',
      'Menyiram seluruh halaman dengan air deterjen setiap pagi',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Kombinasi peneduh, media berongga, dan perawatan rutin hemat air membuat tanaman tumbuh subur dan halaman sejuk.',
  },
  {
    id: 'plh5-q12',
    topik: 'Sikap Peduli Lingkungan Sekolah',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Saat musim kemarau panjang, beberapa tanaman di kebun sekolah mulai layu. Tindakan bijak siswa agar tanaman bertahan hidup sekaligus menghemat air adalah ...\n(1) Menyiram pada pagi/sore hari agar air tidak cepat menguap.\n(2) Memanfaatkan air tampungan bekas mencuci tangan bersih/air cucian buah di kantin.\n(3) Menggemburkan tanah dan memberi mulsa daun kering di permukaan pot penutup.\n(4) Menyiram tepat pukul 13.00 siang sampai air meluber ke jalan.\nPilihan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Menyiram pagi/sore, memakai air guna ulang aman, dan memberi mulsa daun mengurangi penguapan air.',
  },

  // TP 2 — Penyakit Lingkungan: Diare, DBD & Malaria (12 soal)
  {
    id: 'plh5-q13',
    topik: 'Penyebab Penyakit Diare',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Penyakit diare akibat jajan sembarangan yang dihinggapi lalat atau tidak mencuci tangan sebelum makan umumnya disebabkan oleh infeksi bakteri ...',
    pilihan: ['Plasmodium', 'Escherichia coli (E. coli)', 'Aedes aegypti', 'Anopheles'],
    jawabanBenar: 1,
    pembahasan:
      'Bakteri E. coli sering mencemari makanan dan air yang kurang higienis sehingga memicu diare.',
  },
  {
    id: 'plh5-q14',
    topik: 'Pertolongan Pertama Diare (LGG/Oralit)',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Pertolongan pertama paling tepat untuk mengganti cairan tubuh yang hilang saat mengalami diare adalah meminum ...',
    pilihan: [
      'Minuman bersoda dingin',
      'Oralit atau Larutan Gula Garam (LGG)',
      'Kopi pahit kental',
      'Sirup sangat manis dengan es batu',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Oralit atau Larutan Gula Garam mengembalikan cairan serta elektrolit tubuh agar penderita tidak dehidrasi.',
  },
  {
    id: 'plh5-q15',
    topik: 'Takaran Membuat Larutan Gula Garam',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Dalam 1 gelas air matang hangat (200 ml), takaran tepat untuk membuat Larutan Gula Garam (LGG) adalah ...',
    pilihan: [
      '1 sendok teh gula pasir dan 1/4 sendok teh garam dapur',
      '5 sendok makan garam dan 1 sendok teh gula',
      '1 sendok makan merica dan 1 sendok makan garam',
      '3 sendok makan gula tanpa garam',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Takaran baku 1 gelas LGG (200 ml air matang) adalah 1 sendok teh gula pasir ditambah 1/4 sendok teh garam halus.',
  },
  {
    id: 'plh5-q16',
    topik: 'Pencegahan Diare dengan CTPS',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Kebiasaan penting untuk mencegah penyakit diare di sekolah adalah ...\n(1) Cuci Tangan Pakai Sabun (CTPS) dengan air mengalir sebelum makan dan sesudah dari toilet.\n(2) Memilih jajanan kantin yang bersih, tertutup, dan dimasak matang.\n(3) Meminum air keran mentah langsung dari halaman sekolah.\n(4) Menjaga kebersihan kuku jari agar tidak menjadi sarang kuman.\nKebiasaan yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'CTPS, jajan higienis tertutup, minum air matang, dan kuku bersih memutus penularan kuman penyebab diare.',
  },
  {
    id: 'plh5-q17',
    topik: 'Vektor & Waktu Menggigit DBD',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Penyakit Demam Berdarah Dengue (DBD) ditularkan oleh nyamuk Aedes aegypti bercorak belang hitam-putih yang aktif menggigit pada waktu ...',
    pilihan: [
      'Tengah malam saat tidur lelap',
      'Pagi hingga sore hari',
      'Hanya saat cuaca bersalju',
      'Pukul 01.00 sampai 03.00 dini hari',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Nyamuk Aedes aegypti aktif menggigit pada pagi hari (sekitar 08.00–10.00) dan sore hari (sekitar 15.00–17.00).',
  },
  {
    id: 'plh5-q18',
    topik: 'Sarang Jentik Aedes aegypti & 3M Plus',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Setelah hujan reda, tim Kader Tiwisada memeriksa halaman sekolah. Tempat manakah yang berisiko menjadi sarang bertelurnya nyamuk Aedes aegypti?\n(1) Tatakan bawah pot bunga yang tergenang air jernih.\n(2) Kaleng bekas dan ban tua terbuka yang menampung air hujan.\n(3) Bak mandi kelas yang tidak pernah dikuras dan disikat.\n(4) Lapangan rumput kering yang panas tanpa genangan.\nTempat berisiko adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Aedes aegypti bertelur di genangan air jernih yang tidak berhubungan langsung dengan tanah seperti tatakan pot, kaleng, dan bak mandi.',
  },
  {
    id: 'plh5-q19',
    topik: 'Peran Kader Tiwisada',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Siswa SD yang dilatih sebagai petugas kesehatan sekolah (UKS) untuk membantu memantau jentik nyamuk serta mengajak teman hidup bersih disebut Kader ...',
    pilihan: ['Pramuka', 'Tiwisada', 'Paskibra', 'Koperasi'],
    jawabanBenar: 1,
    pembahasan:
      'Kader Tiwisada (Dokter Kecil) berperan aktif menjaga kebersihan, UKS, dan pemberantasan sarang nyamuk di sekolah.',
  },
  {
    id: 'plh5-q20',
    topik: 'Ciri Nyamuk Malaria (Anopheles)',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Berbeda dengan nyamuk DBD, ciri khas nyamuk Anopheles betina pembawa parasit Plasmodium penyebab Malaria ketika hinggap di dinding adalah ...',
    pilihan: [
      'Posisi tubuhnya sejajar rata dengan dinding',
      'Posisi tubuhnya menungging membentuk sudut tajam dengan permukaan',
      'Berukuran sebesar burung pipit dan tidak bersayap',
      'Hanya hidup di dalam lemari pakaian kering',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Nyamuk Anopheles memiliki ciri posisi tubuh menungging saat hinggap dan aktif menggigit pada malam hari.',
  },
  {
    id: 'plh5-q21',
    topik: 'Pencegahan Malaria di Malam Hari',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Cara pencegahan yang efektif agar terhindar dari gigitan nyamuk Anopheles penyebab malaria di malam hari adalah ...\n(1) Memasang kelambu pada tempat tidur dan kasa kawat di ventilasi jendela.\n(2) Membersihkan semak belukar dan parit tergenang di sekitar rumah.\n(3) Memakai pakaian lengan panjang atau losion antinyamuk saat malam.\n(4) Membuka jendela lebar-lebar tanpa kasa sambil mematikan seluruh lampu.\nCara yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Kelambu, kasa nyamuk, losion, dan membersihkan parit/semak mencegah nyamuk Anopheles masuk dan berkembang biak.',
  },
  {
    id: 'plh5-q22',
    topik: 'Perbedaan Gejala & Pencegahan 3 Penyakit',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Manakah pasangan penyakit dan penyebab/pencegahannya yang paling tepat?\n(1) Diare → bakteri E. coli → cegah dengan CTPS dan air matang.\n(2) DBD → virus Dengue (Aedes aegypti) → cegah dengan 3M Plus.\n(3) Malaria → parasit Plasmodium (Anopheles) → cegah dengan kelambu & bersihkan rawa/parit.\n(4) DBD → bakteri E. coli → cegah dengan minum Oralit saja.\nPasangan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Nomor (1), (2), dan (3) mencocokkan penyakit, penyebab/vektor, dan pencegahannya dengan akurat.',
  },
  {
    id: 'plh5-q23',
    topik: 'Analisis Kasus Demam & Gerakan Jumantik',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Di lingkungan RT 04, dua warga terserang demam tinggi mendadak dan muncul bintik merah di kulit setelah musim hujan. Sebagai siswa peduli lingkungan, tindakan nyata apa yang paling tepat diusulkan kepada warga?',
    pilihan: [
      'Melakukan kerja bakti 3M Plus serentak (menguras bak mandi, menutup tandon air, mendaur ulang kaleng bekas) serta memelihara ikan pemakan jentik',
      'Menyuruh seluruh warga tidak keluar rumah selama satu tahun',
      'Membuang seluruh pot bunga warga ke sungai agar cepat kering',
      'Meminum larutan gula garam setiap pagi walaupun tidak diare',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Demam tinggi mendadak disertai bintik merah mengarah pada DBD, sehingga pemutusan siklus jentik nyamuk lewat 3M Plus adalah langkah paling tepat.',
  },
  {
    id: 'plh5-q24',
    topik: 'Hitung Penyiapan Gelas Oralit',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Satu saset oralit dilarutkan dalam 200 ml air matang. Jika ruang UKS menyiapkan persediaan untuk 5 gelas takar, berapa liter total air matang yang harus disiapkan?',
    pilihan: ['0,5 liter', '1 liter', '1,5 liter', '2 liter'],
    jawabanBenar: 1,
    pembahasan: '5 gelas × 200 ml = 1.000 ml = 1 liter air matang.',
  },

  // TP 3 — Pengelolaan Sampah Prinsip 3R & Bank Sampah (11 soal)
  {
    id: 'plh5-q25',
    topik: 'Sampah Organik vs Anorganik',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Kelompok sampah berikut yang semuanya tergolong sampah organik karena mudah membusuk secara alami adalah ...',
    pilihan: [
      'Botol air mineral, kaleng susu, dan pecahan kaca',
      'Kulit pisang, daun kering gugur, dan sisa sayuran',
      'Kantong kresek, sedotan plastik, dan bungkus permen',
      'Baterai bekas, besi tua, dan styrofoam',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Sisa tumbuhan dan bahan alam seperti kulit buah, daun kering, serta sayur mudah diuraikan mikroorganisme (organik).',
  },
  {
    id: 'plh5-q26',
    topik: 'Contoh Prinsip Reduce',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Membawa botol minum isi ulang (tumbler) dan kotak makan sendiri ke sekolah agar tidak membeli minuman gelas plastik setiap hari merupakan penerapan prinsip ...',
    pilihan: ['Reduce (Mengurangi)', 'Reuse (Memakai ulang)', 'Recycle (Mendaur ulang)', 'Reject semua makanan'],
    jawabanBenar: 0,
    pembahasan:
      'Reduce berarti mengurangi timbulnya sampah sejak awal sebelum sampah dihasilkan.',
  },
  {
    id: 'plh5-q27',
    topik: 'Contoh Prinsip Reuse',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Membersihkan kaleng bekas biskuit lalu memakainya kembali untuk menyimpan pensil warna dan penggaris di meja belajar adalah contoh prinsip ...',
    pilihan: ['Reduce', 'Reuse', 'Recycle', 'Refill'],
    jawabanBenar: 1,
    pembahasan:
      'Reuse berarti memanfaatkan kembali barang bekas secara langsung untuk fungsi baru tanpa dilebur/diolah ulang.',
  },
  {
    id: 'plh5-q28',
    topik: 'Contoh Prinsip Recycle',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Siswa kelas V merendam sobekan koran bekas hingga menjadi bubur kertas (pulp), lalu mencetaknya menjadi bingkai foto dan topeng seni. Kegiatan tersebut menerapkan prinsip ...',
    pilihan: ['Reduce', 'Reuse', 'Recycle (Mendaur ulang)', 'Replant'],
    jawabanBenar: 2,
    pembahasan:
      'Mengubah wujud bahan bekas melalui pengolahan menjadi produk baru bernilai guna disebut Recycle (daur ulang).',
  },
  {
    id: 'plh5-q29',
    topik: 'Pemilahan Sampah di Sekolah',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Di halaman sekolah tersedia tempat sampah terpilah: Hijau (Organik), Kuning (Anorganik), dan Merah (B3/berbahaya). Manakah pembuangan sampah yang benar?\n(1) Daun mangga gugur dan kulit jeruk → Tempat sampah Hijau.\n(2) Botol plastik bekas dan bungkus makanan ringan → Tempat sampah Kuning.\n(3) Pecahan lampu neon dan baterai bekas → Tempat sampah Merah.\n(4) Kaleng minuman aluminium → Tempat sampah Hijau.\nPasangan yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Kaleng minuman adalah sampah anorganik (Kuning), bukan organik (Hijau). Nomor (1), (2), dan (3) sudah benar.',
  },
  {
    id: 'plh5-q30',
    topik: 'Manfaat Mengolah Sampah Daun Jadi Kompos',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Mengapa mengolah guguran daun di halaman sekolah dalam komposter jauh lebih baik daripada membakarnya?\n(1) Menghasilkan pupuk kompos alami yang menyuburkan tanaman sekolah.\n(2) Tidak menimbulkan asap tebal yang mencemari udara dan mengganggu pernapasan.\n(3) Menjaga kesuburan mikroorganisme tanah di sekitar kebun.\n(4) Menghasilkan sampah plastik tambahan di halaman.\nAlasan yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Pengomposan menghasilkan pupuk berguna sekaligus mencegah polusi asap akibat pembakaran daun.',
  },
  {
    id: 'plh5-q31',
    topik: 'Hitung Saldo Bank Sampah Sekolah',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Setiap Jumat, kelas V menyetor sampah terpilah ke Bank Sampah sekolah. Minggu ini terkumpul 6 kg kardus bekas (harga Rp2.500,00/kg) dan 4 kg botol plastik bersih (harga Rp3.500,00/kg). Berapa total uang tabungan kelas V minggu ini?',
    pilihan: ['Rp25.000,00', 'Rp27.500,00', 'Rp29.000,00', 'Rp31.000,00'],
    jawabanBenar: 2,
    pembahasan:
      'Kardus = 6 × 2.500 = Rp15.000,00. Botol = 4 × 3.500 = Rp14.000,00. Total = 15.000 + 14.000 = Rp29.000,00.',
  },
  {
    id: 'plh5-q32',
    topik: 'Menghitung Pengurangan Sampah Plastik',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Jika 28 siswa kelas V rutin membawa tumbler dan kotak bekal sendiri sehingga setiap hari mengurangi 2 bungkus plastik per anak, berapa bungkus sampah plastik yang berhasil dicegah dalam 5 hari sekolah?',
    pilihan: ['140 bungkus', '240 bungkus', '280 bungkus', '320 bungkus'],
    jawabanBenar: 2,
    pembahasan: '1 hari = 28 × 2 = 56 bungkus. Dalam 5 hari = 56 × 5 = 280 bungkus plastik.',
  },
  {
    id: 'plh5-q33',
    topik: 'Kreasi Pot Gantung Botol Bekas',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Langkah yang aman dan tepat saat memanfaatkan botol plastik bekas air mineral menjadi pot bunga gantung di kelas adalah ...\n(1) Mencuci botol sampai bersih dan memotong sisi samping/atas secara hati-hati.\n(2) Membuat lubang kecil di bagian dasar agar air siraman tidak tergenang.\n(3) Memakai tali kuat untuk menggantungkannya di pagar teras sekolah.\n(4) Mengisi botol dengan minyak tanah agar tanaman cepat berbunga.\nLangkah yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Pot botol bekas perlu dicuci bersih, dilubangi bagian bawahnya untuk drainase, dan digantung kuat di tempat aman.',
  },
  {
    id: 'plh5-q34',
    topik: 'Strategi Sekolah Bebas Sampah (Zero Waste)',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Setelah acara perkemahan sekolah, masih banyak sisa kulit buah, dus makanan kertas bersih, dan botol plastik. Bagaimana pembagian pengelolaan 3R paling tepat agar hampir tidak ada sampah yang terbuang sia-sia?',
    pilihan: [
      'Kulit buah dimasukkan ke komposter (Recycle), dus bersih dipakai ulang sebagai wadah alat (Reuse), dan botol plastik dicuci lalu disetor ke Bank Sampah',
      'Semua sampah dicampur ke dalam satu lubang lalu dibakar di belakang sekolah',
      'Botol plastik dan kulit buah dimasukkan bersama ke kantong kertas lalu dibuang ke selokan',
      'Semua siswa diminta meninggalkan sampah di lapangan untuk petugas kota',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Memilah sampah sesuai jenisnya dan mengolah lewat kompos, pemakaian ulang, serta Bank Sampah meminimalkan limbah akhir.',
  },
  {
    id: 'plh5-q35',
    topik: 'Evaluasi Efektivitas Bank Sampah',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Selama satu semester, program Bank Sampah kelas V mengurangi timbunan sampah anorganik sekolah dari 80 kg menjadi 20 kg per bulan, dan hasil penjualannya dibelikan 10 pot bunga baru. Manfaat ganda apa yang dibuktikan oleh data tersebut?',
    pilihan: [
      'Volume sampah ke tempat pembuangan berkurang 75% (60 kg/bulan) sekaligus menghasilkan dana untuk memperindah lingkungan sekolah',
      'Sampah di sekolah menjadi bertambah empat kali lipat setiap bulan',
      'Siswa tidak perlu lagi membawa bekal karena kantin ditutup',
      'Semua tanaman sekolah berubah menjadi sampah anorganik',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Pengurangan = (80 - 20) ÷ 80 = 60/80 = 75%. Bank sampah memberi manfaat ekologis (bersih) dan ekonomis (dana kas/taman).',
  },
];

/**
 * Bahasa Inggris Kelas 5 — 35 Soal Baru (TP 1: 12, TP 2: 12, TP 3: 11)
 * Proporsi indikator: 10 Pilihan Ganda, 10 PGK (adaptasi), 10 Isian Singkat, 5 Uraian
 */
export const BINGGRIS_KELAS5_SOAL: QuizQuestion[] = [
  // TP 1 — Fruits, Vegetables, Partitives, Kitchen & Cooking Steps (12 soal)
  {
    id: 'en5-q01',
    topik: 'Fruits vs Vegetables',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Which group below consists ONLY of vegetables?',
    pilihan: [
      'Watermelon, mango, and papaya',
      'Spinach, carrot, and cabbage',
      'Banana, pineapple, and cabbage',
      'Apple, broccoli, and grape',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Spinach (bayam), carrot (wortel), dan cabbage (kubis) semuanya adalah sayuran (vegetables).',
  },
  {
    id: 'en5-q02',
    topik: 'Plural Nouns of Fruits & Vegetables',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Mother buys three red ... (tomato) and two ... (potato) at the market. The correct plural words are ...',
    pilihan: [
      'tomatos and potatos',
      'tomatoes and potatoes',
      'tomato and potato',
      'tomatoies and potatoies',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Kata benda berakhiran -o seperti tomato dan potato ditambah -es pada bentuk jamak: tomatoes dan potatoes.',
  },
  {
    id: 'en5-q03',
    topik: 'Partitives (Satuan Benda Makanan)',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'On the dining table, there are two ... of bananas and three ... of bread.',
    pilihan: [
      'bunches / slices',
      'heads / bottles',
      'bars / glasses',
      'loaves / bunches',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Pisang dihitung dengan "bunches" (sisir/ikat) dan roti tawar potong dihitung dengan "slices" (iris/potong).',
  },
  {
    id: 'en5-q04',
    topik: 'Satuan Sayuran (Cabbage & Spinach)',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Look at these shopping items:\n(1) a head of cabbage (satu bonggol kubis)\n(2) a bunch of spinach (satu ikat bayam)\n(3) a slice of soup (satu potong sup)\n(4) a bag of potatoes (satu kantong kentang)\nWhich pairs use the CORRECT unit expressions?',
    pilihan: [
      '(1), (2), and (3)',
      '(1), (2), and (4)',
      '(2) and (3) only',
      '(3) and (4) only',
    ],
    jawabanBenar: 1,
    pembahasan:
      '"Head of cabbage", "bunch of spinach", dan "bag of potatoes" tepat. Sup adalah cairan sehingga memakai "a bowl of soup".',
  },
  {
    id: 'en5-q05',
    topik: 'Things in the Kitchen',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Father wants to fry an egg for breakfast. He needs a ... to cook it on the stove.',
    pilihan: ['refrigerator', 'frying pan', 'sink', 'broom'],
    jawabanBenar: 1,
    pembahasan: '"Frying pan" adalah wajan penggorengan; sink = wastafel; stove = kompor.',
  },
  {
    id: 'en5-q06',
    topik: 'Prepositions of Place in Kitchen',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Look at the kitchen description: "The kettle is on the stove, the milk is inside the refrigerator, and the trash bin is beside the sink." Where is the trash bin?',
    pilihan: [
      'Di atas kompor',
      'Di dalam kulkas',
      'Di samping wastafel',
      'Di bawah meja makan',
    ],
    jawabanBenar: 2,
    pembahasan: '"Beside the sink" berarti di samping/sebelah wastafel.',
  },
  {
    id: 'en5-q07',
    topik: 'Preposition Between & Under',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Read the sentences carefully:\n(1) The knife is between the cutting board and the plate. (di antara talenan dan piring)\n(2) The cat is sleeping under the dining table. (di atas meja makan)\n(3) The bowl is in the cupboard. (di dalam lemari)\n(4) The clock is on the wall. (di dinding)\nWhich sentences match their Indonesian meanings?',
    pilihan: [
      '(1), (2), and (3)',
      '(1), (3), and (4)',
      '(2) and (3) only',
      '(2) and (4) only',
    ],
    jawabanBenar: 1,
    pembahasan:
      '"Under" artinya di bawah (bukan di atas). Kalimat (1), (3), dan (4) memiliki arti yang tepat.',
  },
  {
    id: 'en5-q08',
    topik: 'Cooking Verbs (Kata Kerja Memasak)',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Before cutting the carrots, you should ... them under clean running water to remove any dirt.',
    pilihan: ['wash', 'fry', 'boil', 'burn'],
    jawabanBenar: 0,
    pembahasan: '"Wash" berarti mencuci sebelum mengolah bahan makanan.',
  },
  {
    id: 'en5-q09',
    topik: 'Mengurutkan Cooking Steps',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Rearrange these steps to make fresh mango juice:\n(1) Pour the juice into a glass.\n(2) Wash and peel the ripe mango.\n(3) Blend the mango slices with water and ice.\n(4) Cut the mango flesh into small pieces.\nThe best order is ...',
    pilihan: [
      '2 – 4 – 3 – 1',
      '2 – 3 – 4 – 1',
      '4 – 2 – 3 – 1',
      '1 – 2 – 3 – 4',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Urutan logis: cuci & kupas (2) → potong kecil (4) → haluskan di blender (3) → tuang ke gelas (1).',
  },
  {
    id: 'en5-q10',
    topik: 'Recipe Math (Menghitung Bahan Resep)',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'To make 1 glass of avocado juice, Lina needs 2 avocados and 150 ml of milk. How many avocados does she need to make 4 glasses of avocado juice?',
    pilihan: ['4 avocados', '6 avocados', '8 avocados', '10 avocados'],
    jawabanBenar: 2,
    pembahasan: '4 glasses × 2 avocados = 8 avocados.',
  },
  {
    id: 'en5-q11',
    topik: 'Kitchen Tools & Functions',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Match the kitchen tool to its correct function:\n(1) Ladle → to scoop and serve hot soup.\n(2) Cutting board → as a base when slicing vegetables.\n(3) Blender → to fry fish in hot oil.\n(4) Pot / Saucepan → to boil water or cook vegetable soup.\nWhich matches are CORRECT?',
    pilihan: [
      '(1), (2), and (3)',
      '(1), (2), and (4)',
      '(2) and (3) only',
      '(3) and (4) only',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Blender digunakan untuk menghaluskan buah/bumbu, bukan menggoreng ikan. Nomor (1), (2), dan (4) benar.',
  },
  {
    id: 'en5-q12',
    topik: 'Menulis Instruksi Memasak Sederhana',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Riko wants to make hot sweet tea for his grandfather. Which complete set of English steps is the clearest and most accurate?',
    pilihan: [
      'First, put a tea bag and sugar into a cup. Next, pour hot water. Then, stir it well with a spoon.',
      'First, fry the tea bag in a pan. Next, peel the sugar. Finally, wash the cup.',
      'First, cut the water into slices. Next, sleep in the kitchen.',
      'First, put ice cream into the frying pan and boil the spoon.',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Kata kerja tepat untuk membuat teh manis adalah "put" (masukkan), "pour" (tuangkan air panas), dan "stir" (aduk).',
  },

  // TP 2 — Places in Neighborhood, Market Shopping & Landmarks (12 soal)
  {
    id: 'en5-q13',
    topik: 'Places in the Neighborhood',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Dina wants to send a birthday parcel to her cousin in Surabaya. Which public place should she go to?',
    pilihan: ['Library', 'Post office', 'Bakery', 'Bank'],
    jawabanBenar: 1,
    pembahasan: '"Post office" (kantor pos) adalah tempat mengirim surat dan paket.',
  },
  {
    id: 'en5-q14',
    topik: 'Public Places & Professions',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Dr. Ratna takes care of sick patients every day. She works at a ...',
    pilihan: ['museum', 'hospital', 'park', 'bakery'],
    jawabanBenar: 1,
    pembahasan: 'Dokter memeriksa dan merawat pasien di "hospital" (rumah sakit).',
  },
  {
    id: 'en5-q15',
    topik: 'Mengenali Fungsi Tempat Umum',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Read these descriptions of neighborhood places:\n(1) People borrow and read many books quietly in a library.\n(2) People save money safely at a bank.\n(3) People buy fresh medicine and bandages at a bakery.\n(4) Students see historical statues and old artifacts at a museum.\nWhich descriptions are TRUE?',
    pilihan: [
      '(1), (2), and (3)',
      '(1), (2), and (4)',
      '(2) and (3) only',
      '(3) and (4) only',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Bakery menjual roti dan kue, bukan obat-obatan (pharmacy/drugstore). Nomor (1), (2), dan (4) benar.',
  },
  {
    id: 'en5-q16',
    topik: 'Membaca Denah Lingkungan (Landmarks)',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Read the short map note: "The elementary school is on Jalan Merpati. Across from the school is the town square. Beside the school is the library." Where is the town square located?',
    pilihan: [
      'Behind the library',
      'Opposite (across from) the elementary school',
      'Inside the school yard',
      'Far from Jalan Merpati',
    ],
    jawabanBenar: 1,
    pembahasan:
      '"Across from the school is the town square" berarti alun-alun berada di seberang sekolah.',
  },
  {
    id: 'en5-q17',
    topik: 'Shopping Total at the Fruit Stall',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'At the market, a kilogram of oranges costs Rp18.000 and a bunch of bananas costs Rp12.000. If Beni buys 2 kilograms of oranges and 1 bunch of bananas, how much must he pay in total?',
    pilihan: ['Rp30.000', 'Rp42.000', 'Rp48.000', 'Rp54.000'],
    jawabanBenar: 2,
    pembahasan: '2 kg oranges = 2 × 18.000 = Rp36.000. Plus 1 bunch bananas Rp12.000 = Rp48.000.',
  },
  {
    id: 'en5-q18',
    topik: 'Shopping Change Calculation',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Siska buys a basket of strawberries for Rp27.000 and a head of lettuce for Rp8.000. She pays with a Rp50.000 bill. How much change (kembalian) does she get?',
    pilihan: ['Rp12.000', 'Rp15.000', 'Rp18.000', 'Rp23.000'],
    jawabanBenar: 1,
    pembahasan: 'Total belanja = 27.000 + 8.000 = Rp35.000. Kembalian = 50.000 - 35.000 = Rp15.000.',
  },
  {
    id: 'en5-q19',
    topik: 'Membaca Teks Rute Sederhana',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Read the route text: "From the bus stop, Edo walks straight along Jalan Anggrek for two blocks. At the crossroads, he turns left. Then he walks past the park and sees the police station on his right." Which statements are CORRECT?\n(1) Edo starts walking from the bus stop.\n(2) He turns right at the crossroads.\n(3) He passes a park before reaching the police station.\n(4) The police station is on his right side.\nCorrect statements:',
    pilihan: [
      '(1), (2), and (3)',
      '(1), (3), and (4)',
      '(2) and (3) only',
      '(2) and (4) only',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Di teks tertulis "turns left" (belok kiri), bukan belok kanan. Pernyataan (1), (3), dan (4) sesuai bacaan.',
  },
  {
    id: 'en5-q20',
    topik: 'Vocabulary of Roads & Intersections',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'A place where four roads meet and cross each other is called a ...',
    pilihan: ['T-junction', 'crossroads', 'bridge', 'parking lot'],
    jawabanBenar: 1,
    pembahasan:
      '"Crossroads" adalah perempatan (4 arah jalan bertemu), sedangkan "T-junction" adalah pertigaan.',
  },
  {
    id: 'en5-q21',
    topik: 'Neighborhood Map Comprehension',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'On Jalan Mawar, there are four buildings from west to east in order: Bank – Bakery – Bookshop – Park.\nWhich statements are TRUE?\n(1) The bakery is between the bank and the bookshop.\n(2) The park is next to the bookshop.\n(3) The bank is next to the park.\n(4) The bookshop is between the bakery and the park.\nCorrect statements:',
    pilihan: [
      '(1), (2), and (3)',
      '(1), (2), and (4)',
      '(2) and (3) only',
      '(3) and (4) only',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Urutannya Bank–Bakery–Bookshop–Park, sehingga Bank dan Park berada di ujung yang berlawanan (tidak bersebelahan).',
  },
  {
    id: 'en5-q22',
    topik: 'Comparing Prices at Two Stalls',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Stall A sells 1 kilogram of apples for Rp24.000, while Stall B sells 500 grams of the same apples for Rp10.500. Which stall is cheaper for buying 1 kilogram of apples, and how much money do you save?',
    pilihan: [
      'Stall B is cheaper because 1 kg costs Rp21.000, saving Rp3.000',
      'Stall A is cheaper because Rp24.000 is less than Rp25.000',
      'Both stalls have the exact same price per kilogram',
      'Stall B is cheaper, saving Rp13.500 per kilogram',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Di Stall B, 1 kg (2 × 500 gram) = 2 × Rp10.500 = Rp21.000. Lebih murah Rp24.000 - Rp21.000 = Rp3.000.',
  },
  {
    id: 'en5-q23',
    topik: 'Matching Activities to Places',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'On Sunday morning, Maya and her friends want to jog and play on the swings outdoors. They go to the ...',
    pilihan: ['hospital', 'park', 'post office', 'police station'],
    jawabanBenar: 1,
    pembahasan: '"Park" (taman) adalah tempat bermain ayunan dan berolahraga pagi.',
  },
  {
    id: 'en5-q24',
    topik: 'Describing Your School Location',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'If a tourist asks where the town museum is, and you know it sits right next to the post office and across from the city park, which description is most helpful?',
    pilihan: [
      '"The museum is beside the post office, just across from the city park."',
      '"The museum is inside the post office refrigerator."',
      '"Go buy some bread and ask the apples."',
      '"The museum is nowhere near any street."',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Menyebutkan bangunan penanda (landmarks) di samping ("beside") dan di seberang ("across from") membantu pendatang menemukan lokasi dengan cepat.',
  },

  // TP 3 — How Many / How Much, Prices in English & Giving Direction (11 soal)
  {
    id: 'en5-q25',
    topik: 'How Many vs How Much',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Complete the question: "... oranges are inside that fruit basket?" Answer: "There are ten oranges."',
    pilihan: ['How much', 'How many', 'Where', 'Who'],
    jawabanBenar: 1,
    pembahasan:
      'Oranges adalah benda dapat dihitung (countable plural), jadi gunakan "How many".',
  },
  {
    id: 'en5-q26',
    topik: 'Asking Price with How Much',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Buyer: "... is one kilogram of red grapes?" Seller: "It is thirty-five thousand rupiahs."',
    pilihan: ['How many', 'How much', 'How old', 'How tall'],
    jawabanBenar: 1,
    pembahasan: 'Menanyakan harga selalu menggunakan "How much ...?".',
  },
  {
    id: 'en5-q27',
    topik: 'Reading Rupiah Prices in English',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'A price tag on a bottle of honey says "Rp45.000". How do you say this price in English?',
    pilihan: [
      'Fourteen thousand rupiahs',
      'Forty-five thousand rupiahs',
      'Fifty-four thousand rupiahs',
      'Four hundred five rupiahs',
    ],
    jawabanBenar: 1,
    pembahasan: '45.000 dalam bahasa Inggris dibaca "forty-five thousand rupiahs".',
  },
  {
    id: 'en5-q28',
    topik: 'Writing Price Numbers from English Words',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'The shopkeeper says, "The watermelon costs twenty-two thousand rupiahs." Written in numbers, the price is ...',
    pilihan: ['Rp12.000', 'Rp20.200', 'Rp22.000', 'Rp32.000'],
    jawabanBenar: 2,
    pembahasan: '"Twenty-two thousand" berarti 22.000.',
  },
  {
    id: 'en5-q29',
    topik: 'Choosing How Many vs How Much',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Which questions are grammatically CORRECT?\n(1) How many carrots do you need for the soup?\n(2) How much sugar do you put in the tea?\n(3) How much is a head of broccoli?\n(4) How many water is in the glass?\nCorrect questions:',
    pilihan: [
      '(1), (2), and (3)',
      '(1), (2), and (4)',
      '(2) and (4) only',
      '(3) and (4) only',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Water tidak bisa dihitung satu per satu (uncountable), sehingga seharusnya memakai "How much water". Nomor (1), (2), dan (3) benar.',
  },
  {
    id: 'en5-q30',
    topik: 'Polite Asking for Directions',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'You are lost and want to ask a police officer politely how to get to the nearest hospital. What should you say?',
    pilihan: [
      '"Hey! Tell me where the hospital is now!"',
      '"Excuse me, could you tell me the way to the nearest hospital, please?"',
      '"Give me your map immediately!"',
      '"Why are you standing near the hospital?"',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Mengawali dengan "Excuse me" dan memakai "...could you tell me the way..., please?" adalah ungkapan yang sangat sopan.',
  },
  {
    id: 'en5-q31',
    topik: 'Direction Phrases (Go Straight & Turn)',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Match the English direction command with its Indonesian meaning:\n(1) Go straight ahead → Jalan lurus ke depan.\n(2) Turn left at the crossroads → Belok kanan di pertigaan.\n(3) Turn right at the T-junction → Belok kanan di pertigaan.\n(4) Walk for two blocks → Berjalanlah sejauh dua blok.\nWhich matches are CORRECT?',
    pilihan: [
      '(1), (2), and (3)',
      '(1), (3), and (4)',
      '(2) and (3) only',
      '(2) and (4) only',
    ],
    jawabanBenar: 1,
    pembahasan:
      '"Turn left at the crossroads" artinya belok kiri di perempatan. Nomor (1), (3), dan (4) benar.',
  },
  {
    id: 'en5-q32',
    topik: 'Calculating Market Dialog Payment',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Seller: "One bag of onions is fifteen thousand rupiahs, and one bottle of cooking oil is twenty thousand rupiahs." If Rina buys two bags of onions and one bottle of cooking oil, how much is the total in English?',
    pilihan: [
      'Thirty-five thousand rupiahs',
      'Forty-five thousand rupiahs',
      'Fifty thousand rupiahs',
      'Fifty-five thousand rupiahs',
    ],
    jawabanBenar: 2,
    pembahasan:
      '2 bags × Rp15.000 = Rp30.000 + Rp20.000 = Rp50.000 ("Fifty thousand rupiahs").',
  },
  {
    id: 'en5-q33',
    topik: 'Giving Direction from School to Library',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'To go from the school gate to the public library: walk straight for one block, turn left at the T-junction, and stop at the second building on your left. Which instruction summarizes this?',
    pilihan: [
      'Go straight one block, turn left at the T-junction, and the library is on your left',
      'Turn right immediately and cross the highway',
      'Go straight three blocks and turn right at the crossroads',
      'Stay at the school gate and wait for the bus',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Kalimat A merangkum arah jalan lurus 1 blok, belok kiri di pertigaan, dan lokasi di sebelah kiri dengan tepat.',
  },
  {
    id: 'en5-q34',
    topik: 'Complete Market Shopping Dialogue',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Nana wants to buy 3 bunches of spinach. Which dialogue between Nana and the vegetable seller is the most natural and accurate?',
    pilihan: [
      'Nana: "How much is a bunch of spinach?" Seller: "It is four thousand rupiahs." Nana: "I want three bunches, please. Here is twelve thousand rupiahs."',
      'Nana: "How many is spinach price?" Seller: "Turn left at the crossroads." Nana: "Thank you, doctor."',
      'Nana: "Where is the museum?" Seller: "It is five slices of spinach."',
      'Nana: "Give me free spinach now." Seller: "Go straight for two blocks."',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Dialog pertama memakai "How much" untuk harga, satuan "bunches", dan hitungan total 3 × 4.000 = 12.000 dengan tepat.',
  },
  {
    id: 'en5-q35',
    topik: 'Writing Step-by-Step Direction',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'A new student stands in front of the Bakery and wants to reach the Hospital, which is two blocks straight ahead, then one block to the right after the crossroads. What clear direction should you give?',
    pilihan: [
      '"From the bakery, go straight ahead for two blocks. At the crossroads, turn right and walk one block. You will see the hospital."',
      '"From the bakery, turn left behind the park and stay inside the bank."',
      '"How much does the hospital cost?"',
      '"Peel the potatoes and put them on the stove."',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Petunjuk arah memandu secara urut: jalan lurus 2 blok, belok kanan di perempatan, lalu jalan 1 blok hingga rumah sakit.',
  },
];
