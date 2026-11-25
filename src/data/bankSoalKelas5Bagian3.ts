import type { QuizQuestion } from './types.ts';

/**
 * KKA Kelas 5 — 35 Soal Baru (TP 1: 11, TP 2: 12, TP 3: 12)
 * Proporsi indikator: 10 Pilihan Ganda, 10 PGK (adaptasi), 10 Isian Singkat, 5 Uraian
 */
export const KKA_KELAS5_SOAL: QuizQuestion[] = [
  // TP 1 — Konsep 4 Pilar Berpikir Komputasional (11 soal)
  {
    id: 'kka5-q01',
    topik: 'Pengertian Dekomposisi',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Memecah pekerjaan besar yang terlihat rumit menjadi bagian-bagian tugas yang lebih kecil agar mudah dikerjakan disebut ...',
    pilihan: ['Abstraksi', 'Dekomposisi', 'Pengenalan pola', 'Otomatisasi'],
    jawabanBenar: 1,
    pembahasan:
      'Dekomposisi adalah langkah memecah persoalan kompleks menjadi subbagian kecil yang lebih mudah ditangani.',
  },
  {
    id: 'kka5-q02',
    topik: 'Pengertian Pengenalan Pola',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Pilar berpikir komputasional yang melatih kita menemukan kesamaan, keteraturan, atau perulangan dari suatu data atau kejadian disebut ...',
    pilihan: ['Algoritma', 'Pengenalan pola', 'Dekomposisi', 'Abstraksi'],
    jawabanBenar: 1,
    pembahasan:
      'Pengenalan pola (pattern recognition) mencari ciri berulang atau kesamaan untuk memprediksi langkah selanjutnya.',
  },
  {
    id: 'kka5-q03',
    topik: 'Pengertian Abstraksi',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Saat mencari rute ke taman kota di peta, Rudi hanya memperhatikan nama jalan dan persimpangan penting sambil mengabaikan gambar awan atau warna atap rumah di peta. Rudi menerapkan pilar ...',
    pilihan: ['Abstraksi', 'Algoritma', 'Dekomposisi', 'Pengenalan pola'],
    jawabanBenar: 0,
    pembahasan:
      'Abstraksi berfokus pada informasi yang relevan dengan tujuan dan menyaring detail yang tidak perlu.',
  },
  {
    id: 'kka5-q04',
    topik: 'Pengertian Algoritma',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Urutan langkah-langkah logis yang tersusun rapi dari awal hingga akhir untuk menyelesaikan sebuah masalah disebut ...',
    pilihan: ['Algoritma', 'Abstraksi', 'Sensor', 'Data latih'],
    jawabanBenar: 0,
    pembahasan:
      'Algoritma adalah daftar instruksi atau langkah berurutan yang jelas dan logis untuk mencapai hasil tertentu.',
  },
  {
    id: 'kka5-q05',
    topik: 'Contoh Dekomposisi di Sekolah',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Manakah kegiatan siswa yang mencerminkan penerapan DEKOMPOSISI?\n(1) Mempersiapkan pentas seni kelas dengan membaginya menjadi seksi kostum, seksi panggung, dan seksi konsumsi.\n(2) Membersihkan rumah dengan membagi tugas menyapu kamar, mengelap kaca, dan mencuci piring.\n(3) Mengabaikan warna sampul buku saat mencatat jadwal pelajaran.\n(4) Menyusun langkah-langkah menyalakan komputer secara berurutan.\nKegiatan yang benar adalah ...',
    pilihan: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)'],
    jawabanBenar: 0,
    pembahasan:
      'Nomor (1) dan (2) memecah proyek besar (pentas seni, bersih rumah) menjadi tugas-tugas kecil yang jelas.',
  },
  {
    id: 'kka5-q06',
    topik: 'Pasangan 4 Pilar & Kata Kuncinya',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan pasangan pilar berpikir komputasional dan kata kuncinya:\n(1) Dekomposisi → Memecah masalah besar menjadi bagian kecil.\n(2) Pengenalan pola → Mencari aturan yang berulang.\n(3) Abstraksi → Menyaring informasi penting dan membuang detail tidak perlu.\n(4) Algoritma → Menebak jawaban tanpa urutan yang jelas.\nPasangan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Algoritma bukan menebak acak, melainkan menyusun urutan langkah yang pasti dan terstruktur.',
  },
  {
    id: 'kka5-q07',
    topik: 'Mengidentifikasi Abstraksi dalam Soal Cerita',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Dalam teks: "Roni memakai topi merah pergi ke toko buku pukul 09.00 membawa uang Rp20.000 untuk membeli 2 buku tulis seharga Rp4.000 per buku." Untuk menghitung kembalian Roni, detail mana yang boleh diabaikan saat melakukan abstraksi?',
    pilihan: [
      'Harga satu buku tulis',
      'Jumlah buku yang dibeli dan uang yang dibawa',
      'Warna topi yang dipakai Roni dan jam berangkat',
      'Operasi hitung perkalian dan pengurangan',
    ],
    jawabanBenar: 2,
    pembahasan:
      'Warna topi dan jam keberangkatan tidak memengaruhi perhitungan uang kembalian sehingga disaring keluar pada tahap abstraksi.',
  },
  {
    id: 'kka5-q08',
    topik: 'Pentingnya Urutan Algoritma',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Jika siswa memakai sepatu lebih dulu sebelum memakai kaus kaki, langkah tersebut melanggar pilar ... karena urutannya tidak logis.',
    pilihan: ['Pengenalan pola', 'Algoritma', 'Abstraksi', 'Dekomposisi'],
    jawabanBenar: 1,
    pembahasan:
      'Algoritma menuntut urutan langkah yang logis agar hasil yang diinginkan tercapai dengan benar.',
  },
  {
    id: 'kka5-q09',
    topik: 'Mengenali Pola dari Kebiasaan',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Manakah peristiwa yang menunjukkan penerapan PENGENALAN POLA?\n(1) Ibu melihat bahwa setiap hari Jumat pagi pasar selalu ramai pembeli.\n(2) Dito menyadari deret lampu taman menyala merah–kuning–hijau berulang terus.\n(3) Siska membagi daftar belanja menjadi buah, sayur, dan bumbu.\n(4) Pak Guru melihat nilai kuis selalu naik saat siswa rajin berlatih sebelumnya.\nPeristiwa yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Nomor (1), (2), dan (4) mengamati keteraturan/pola kejadian yang berulang; nomor (3) lebih mengarah ke dekomposisi/pengelompokan.',
  },
  {
    id: 'kka5-q10',
    topik: 'Urutan Penerapan 4 Pilar',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Kelas V ingin membuat majalah dinding (mading) bertema lingkungan agar selesai tepat waktu. Bagaimana contoh penerapan lengkap ke-4 pilar berpikir komputasionalnya?',
    pilihan: [
      'Dekomposisi: bagi tim artikel/gambar/hias; Pola: pakai ukuran bingkai artikel yang seragam; Abstraksi: pilih berita paling penting saja; Algoritma: ikuti urutan kerja dari sketsa hingga tempel',
      'Cukup menyuruh satu anak mengerjakan semuanya tanpa rencana agar cepat selesai',
      'Langsung menempel semua kertas acak tanpa membaca isi beritanya',
      'Membuat papan mading tanpa membagi tugas dan tanpa urutan kerja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Keempat pilar saling melengkapi: memecah tugas, meniru pola tata letak, menyaring info inti, dan menjalankan urutan kerja.',
  },
  {
    id: 'kka5-q11',
    topik: 'Perbedaan Abstraksi & Dekomposisi',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Mengapa saat mengerjakan soal matematika panjang, siswa perlu memakai abstraksi terlebih dahulu sebelum membuat algoritma perhitungannya?',
    pilihan: [
      'Karena abstraksi membantu menyaring angka dan data penting yang dibutuhkan saja, sehingga langkah hitung (algoritma) menjadi tepat dan tidak terganggu cerita tambahan',
      'Karena abstraksi menghapus semua angka dalam soal agar tidak perlu dihitung',
      'Karena algoritma tidak boleh mengandung langkah penjumlahan',
      'Karena dekomposisi hanya boleh dipakai pada pelajaran olahraga',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Dengan menyaring informasi inti lewat abstraksi, penyusunan langkah perhitungan menjadi jauh lebih fokus dan akurat.',
  },

  // TP 2 — Penerapan Berpikir Komputasional (12 soal)
  {
    id: 'kka5-q12',
    topik: 'Algoritma Pergerakan Petak Robot',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Sebuah bidak berada di petak angka 3 pada lintasan garis lurus. Jika bidak menjalankan perintah: "Maju 6 langkah, mundur 2 langkah, maju 4 langkah", di petak angka berapakah bidak berhenti?',
    pilihan: ['Petak 9', 'Petak 10', 'Petak 11', 'Petak 13'],
    jawabanBenar: 2,
    pembahasan: '3 + 6 - 2 + 4 = 11. Bidak berhenti di petak angka 11.',
  },
  {
    id: 'kka5-q13',
    topik: 'Urutan Algoritma Membuat Minuman',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Perhatikan langkah acak menyeduh susu cokelat hangat:\n(1) Aduk hingga bubuk susu larut rata.\n(2) Tuang air hangat secukupnya ke dalam gelas.\n(3) Masukkan 2 sendok bubuk susu cokelat ke gelas bersih.\n(4) Susu hangat siap diminum.\nUrutan algoritma yang benar adalah ...',
    pilihan: [
      '3 – 2 – 1 – 4',
      '2 – 1 – 3 – 4',
      '1 – 2 – 3 – 4',
      '3 – 1 – 2 – 4',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Masukkan bubuk susu (3) → tuang air hangat (2) → aduk rata (1) → siap diminum (4).',
  },
  {
    id: 'kka5-q14',
    topik: 'Dampak Urutan Algoritma Salah',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Dalam algoritma mencuci tangan pakai sabun, apa akibatnya jika langkah "membilas dengan air bersih" dilakukan sebelum "menggosok telapak tangan dengan sabun"?',
    pilihan: [
      'Tangan masih bersabun dan licin sehingga tidak bersih higienis untuk memegang makanan',
      'Kuman di tangan langsung hilang dua kali lebih cepat',
      'Air keran berubah menjadi sabun wangi',
      'Tangan langsung kering tanpa perlu dilap handuk',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Jika membilas dilakukan sebelum memakai sabun, busa sabun akan tertinggal di tangan saat proses selesai.',
  },
  {
    id: 'kka5-q15',
    topik: 'Pola Kode Warna Kelereng',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Niko menyusun manik-manik gelang dengan pola berulang: "Biru – Kuning – Merah – Hijau". Manik-manik ke-14 pada urutan gelang tersebut berwarna ...',
    pilihan: ['Biru', 'Kuning', 'Merah', 'Hijau'],
    jawabanBenar: 1,
    pembahasan:
      'Pola berulang setiap 4 warna. Urutan ke-12 adalah Hijau, ke-13 Biru, dan ke-14 adalah Kuning.',
  },
  {
    id: 'kka5-q16',
    topik: 'Pola Bilangan & Kode Kursi',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Kursi di aula sekolah diberi label berpola: K4, K8, K12, ..., K20. Label kursi yang hilang di tengah adalah ...',
    pilihan: ['K14', 'K15', 'K16', 'K18'],
    jawabanBenar: 2,
    pembahasan: 'Angka selalu bertambah 4 (4, 8, 12, 16, 20), jadi kursi berikutnya adalah K16.',
  },
  {
    id: 'kka5-q17',
    topik: 'Pengelompokan & Pengemasan Kardus Buku',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Sebuah kardus besar hanya muat diisi maksimal 8 paket buku. Jika perpustakaan harus mengirim 38 paket buku ke sekolah cabang, paling sedikit berapa kardus yang diperlukan?',
    pilihan: ['4 kardus', '5 kardus', '6 kardus', '7 kardus'],
    jawabanBenar: 1,
    pembahasan:
      '38 ÷ 8 = 4 kardus penuh (32 paket) dan masih tersisa 6 paket yang tetap butuh 1 kardus lagi → minimal 5 kardus.',
  },
  {
    id: 'kka5-q18',
    topik: 'Menghitung Poin Unplugged Coding',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Dalam permainan papan coding tanpa komputer (unplugged): mengambil bintang memberi +5 poin, mengambil kunci memberi +3 poin, dan menabrak rintangan mengurangi -2 poin. Jika robot mengumpulkan 3 bintang, 2 kunci, dan 2 kali menabrak rintangan, berapa total poinnya?',
    pilihan: ['15 poin', '17 poin', '19 poin', '21 poin'],
    jawabanBenar: 1,
    pembahasan: 'Total = (3 × 5) + (2 × 3) - (2 × 2) = 15 + 6 - 4 = 17 poin.',
  },
  {
    id: 'kka5-q19',
    topik: 'Efisiensi Antrean Printer',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Ada 3 tugas cetak di satu printer: Tugas A (2 menit), Tugas B (6 menit), dan Tugas C (1 menit). Agar rata-rata waktu tunggu siswa paling cepat, pernyataan mana yang benar?\n(1) Mendahulukan tugas tersingkat (C → A → B) mengurangi lama menunggu siswa lain.\n(2) Tugas C selesai hanya dalam 1 menit pertama.\n(3) Mendahulukan Tugas B selama 6 menit membuat dua anak lainnya menunggu lama.\n(4) Semua tugas tetap bisa dicetak serentak keluar dalam 1 detik.\nPernyataan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Strategi antrean terpendek dahulu (Shortest Job First: 1 mnt, 2 mnt, 6 mnt) memangkas waktu tunggu total semua pengguna.',
  },
  {
    id: 'kka5-q20',
    topik: 'Abstraksi & Penataan Lemari Efisien',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Agar rak buku dan alat tulis kelas mudah ditemukan cepat oleh seluruh siswa, cara penataan berpikir komputasional yang tepat adalah ...\n(1) Mengelompokkan buku berdasarkan mata pelajaran (Dekomposisi).\n(2) Memberi label warna kode jelas pada punggung buku (Pengenalan Pola).\n(3) Menyembunyikan buku di belakang lemari terkunci tanpa daftar isi.\n(4) Meletakkan buku yang paling sering dipakai di rak setinggi tangan anak.\nPilihan yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Pengelompokan, pelabelan pola warna, dan penempatan prioritas barang yang sering dipakai membuat pencarian jauh lebih cepat.',
  },
  {
    id: 'kka5-q21',
    topik: 'Efisiensi Rute Pengantaran',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Petugas piket harus mengantar surat dari Ruang Guru ke Kelas 5 (jarak 10 m), lalu Kelas 6 (jarak 8 m dari Kelas 5), lalu kembali ke Ruang Guru (jarak 12 m). Rute alternatif lain memutar lewat lapangan sejauh total 42 m. Berapa meter jarak yang dihemat jika memilih rute pertama?',
    pilihan: ['10 m', '12 m', '18 m', '30 m'],
    jawabanBenar: 1,
    pembahasan: 'Jarak rute pertama = 10 + 8 + 12 = 30 m. Penghematan = 42 - 30 = 12 m.',
  },
  {
    id: 'kka5-q22',
    topik: 'Menentukan Prioritas Jadwal Belajar',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Sepulang sekolah pukul 13.30, Dani memiliki tiga kegiatan: mengerjakan tugas Matematika yang dikumpulkan besok pagi (40 menit), bermain gim bebas (30 menit), dan membereskan tas sekolah (10 menit). Urutan prioritas algoritma jadwal sore yang paling bijak adalah ...',
    pilihan: [
      'Istirahat sejenak, kerjakan tugas Matematika lebih dulu, bereskan tas sekolah untuk besok, baru bermain gim secukupnya',
      'Bermain gim selama dua jam dulu sampai lupa waktu belajar',
      'Tidak mengerjakan tugas Matematika karena bisa menyontek di pagi hari',
      'Membereskan tas tanpa memasukkan buku pelajaran besok',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Menyelesaikan kewajiban mendesak (tugas esok pagi) sebelum waktu luang bermain merupakan penerapan algoritma prioritas.',
  },
  {
    id: 'kka5-q23',
    topik: 'Analisis Jalur Robot Menghindari Rintangan',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Sebuah robot di kotak (1,1) ingin menuju kotak tujuan (3,3). Setiap perintah memindah robot 1 kotak ke Utara (+1 baris) atau ke Timur (+1 kolom). Jika kotak (2,2) berisi batu penghalang, jalur mana saja yang berhasil sampai tanpa menabrak batu?\n(1) Timur → Timur → Utara → Utara\n(2) Utara → Timur → Utara → Timur\n(3) Utara → Utara → Timur → Timur\n(4) Timur → Utara → Timur → Utara\nJalur yang aman adalah ...',
    pilihan: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Jalur (2) dan (4) setelah 2 langkah masuk ke kotak (2,2) yang berisi batu. Jalur (1) melewati (1,2)→(1,3)→(2,3)→(3,3) dan jalur (3) melewati (2,1)→(3,1)→(3,2)→(3,3) sehingga aman.',
  },

  // TP 3 — Mesin Cerdas (AI) vs Mesin Noncerdas (12 soal)
  {
    id: 'kka5-q24',
    topik: 'Ciri Utama Mesin Cerdas (AI)',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Perbedaan mendasar antara mesin cerdas (berbasis kecerdasan artifisial/AI) dan mesin noncerdas adalah ...',
    pilihan: [
      'Mesin cerdas selalu lebih berat dan berwarna hitam',
      'Mesin cerdas mampu belajar dari data, mengenali pola/gambar/suara, dan menyesuaikan tindakannya',
      'Mesin cerdas tidak memerlukan listrik maupun baterai',
      'Mesin noncerdas bisa berpikir dan mengambil keputusan sendiri tanpa tombol',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Kecerdasan artifisial memungkinkan mesin belajar dari data latih serta mengenali objek/suara untuk merespons lingkungan.',
  },
  {
    id: 'kka5-q25',
    topik: 'Contoh Mesin Noncerdas di Rumah',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Alat rumah tangga berikut yang termasuk MESIN NONCERDAS karena hanya bekerja sesuai tombol atau putaran waktu tetap dari manusia adalah ...',
    pilihan: [
      'Kipas angin tombol angka 1-2-3',
      'Ponsel dengan fitur pembuka kunci wajah (Face Unlock)',
      'Aplikasi penerjemah suara otomatis real-time',
      'Kamera pintar pemilah buah busuk dan segar',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Kipas angin biasa hanya berputar sesuai kecepatan tombol yang ditekan dan tidak bisa mengenali kondisi sekitar.',
  },
  {
    id: 'kka5-q26',
    topik: 'Contoh Mesin Cerdas dalam Keseharian',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Manakah perangkat atau aplikasi berikut yang memanfaatkan Kecerdasan Artifisial (AI)?\n(1) Fitur Face Unlock yang mengenali wajah pemilik ponsel.\n(2) Daftar rekomendasi video belajar sesuai topik yang sering ditonton.\n(3) Asisten suara pintar yang menjawab pertanyaan lisan.\n(4) Pemanggang roti pegas biasa yang mati hanya berdasarkan putaran timer mekanis.\nYang termasuk AI adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Face Unlock, rekomendasi konten, dan asisten suara memakai AI untuk belajar pola; pemanggang roti timer mekanis adalah mesin noncerdas.',
  },
  {
    id: 'kka5-q27',
    topik: 'Mengenal Mesin Noncerdas Lainnya',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Kelompok alat manakah yang semuanya merupakan MESIN NONCERDAS?\n(1) Mesin cuci putar manual dengan pengatur waktu 15 menit.\n(2) Pintu geser toko yang terbuka hanya jika keset pemicu berat diinjak.\n(3) Kalkulator saku standar untuk menghitung angka yang ditekan.\n(4) Robot penyedot debu pintar yang memetakan bentuk ruangan.\nPilihan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Mesin cuci manual, pintu keset pemicu tetap, dan kalkulator biasa hanya menjalankan perintah tetap tanpa proses belajar data.',
  },
  {
    id: 'kka5-q28',
    topik: 'Peran Data Latih pada Mesin Cerdas',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Agar aplikasi kamera pintar dapat membedakan sampah botol plastik dan kaleng dengan sangat tepat, pengembang harus melatih sistem tersebut dengan ribuan gambar contoh yang disebut ...',
    pilihan: ['Kabel daya', 'Data latih (training data)', 'Papan ketik', 'Tombol daya'],
    jawabanBenar: 1,
    pembahasan:
      'Mesin cerdas belajar mengenali pola dari kumpulan contoh gambar/suara/teks yang disebut data latih.',
  },
  {
    id: 'kka5-q29',
    topik: 'Menghitung Jumlah Data Latih AI',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Siswa melatih program AI pengenal daun mangga dan daun jambu. Mereka memasukkan 45 foto daun mangga cerah, 35 foto daun mangga teduh, dan 60 foto daun jambu. Berapa total seluruh foto data latih yang dimasukkan?',
    pilihan: ['120 foto', '130 foto', '140 foto', '150 foto'],
    jawabanBenar: 2,
    pembahasan: '45 + 35 + 60 = 140 foto data latih.',
  },
  {
    id: 'kka5-q30',
    topik: 'Lampu Taman Sensor Hemat Energi',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Sebuah lampu taman cerdas dilengkapi sensor cahaya dan sensor gerak sehingga menyala redup saat gelap dan terang penuh hanya ketika ada orang lewat. Keunggulan lampu bersensor ini dibanding lampu pengatur waktu tetap adalah ...',
    pilihan: [
      'Lebih hemat energi listrik karena menyesuaikan kondisi nyata di lingkungan sekitar',
      'Menyala terus-menerus pada siang hari yang terik',
      'Tidak memerlukan bola lampu sama sekali',
      'Harus dinyalakan dan dimatikan secara manual setiap jam',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Sensor memungkinkan lampu beradaptasi otomatis terhadap cahaya dan gerakan sehingga listrik tidak terbuang sia-sia.',
  },
  {
    id: 'kka5-q31',
    topik: 'Mengapa AI Bisa Salah Mengenali Objek',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Sebuah kamera pemilah buah hanya dilatih memakai foto jeruk berwarna oranye terang. Ketika diberi jeruk berkulit hijau kekuningan, kamera gagal mengenalinya. Cara memperbaikinya adalah ...',
    pilihan: [
      'Menambahkan banyak data latih foto jeruk berwarna hijau kekuningan dari berbagai sudut',
      'Mengecat seluruh buah jeruk di kebun menjadi warna merah',
      'Menghapus seluruh program kamera dan memakai kalkulator',
      'Mematikan lampu ruangan agar kamera tidak bisa melihat warna',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Keberagaman dan kualitas data latih menentukan ketepatan mesin cerdas saat menghadapi variasi objek nyata.',
  },
  {
    id: 'kka5-q32',
    topik: 'Menghitung Akurasi Sederhana Pemilah AI',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Dalam uji coba alat sortir sampah pintar terhadap 40 botol plastik dan kaleng, sebanyak 36 benda berhasil masuk ke wadah yang tepat dan sisanya keliru. Berapa benda yang gagal dikenali dengan benar?',
    pilihan: ['2 benda', '4 benda', '6 benda', '8 benda'],
    jawabanBenar: 1,
    pembahasan: '40 - 36 = 4 benda keliru dikenali.',
  },
  {
    id: 'kka5-q33',
    topik: 'Perbandingan Mesin Cerdas vs Noncerdas',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Manakah pernyataan yang tepat mengenai mesin cerdas dan mesin noncerdas?\n(1) Mesin cerdas dapat menyesuaikan respons berdasarkan input sensor atau data baru.\n(2) Mesin noncerdas tetap bermanfaat tinggi dan hemat biaya untuk pekerjaan rutin tetap.\n(3) Semua peralatan yang memakai listrik pasti termasuk mesin cerdas.\n(4) Cara kerja mesin cerdas tetap perlu diawasi manusia agar tidak keliru.\nPernyataan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Tidak semua alat listrik adalah mesin cerdas (misal setrika atau kipas biasa). Nomor (1), (2), dan (4) benar.',
  },
  {
    id: 'kka5-q34',
    topik: 'Merancang Ide Mesin Cerdas untuk Sekolah',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Sekolah ingin memasang tempat sampah pintar di kantin agar sampah botol plastik tidak tercampur dengan sisa makanan. Komponen dasar apa saja yang dibutuhkan agar mesin tersebut menjadi mesin cerdas?',
    pilihan: [
      'Kamera/sensor untuk melihat benda, program AI yang sudah dilatih gambar sampah organik vs anorganik, serta motor penggerak pembuka tutup yang sesuai',
      'Hanya satu ember plastik tanpa tutup dan tanpa alat apa pun',
      'Kipas angin tombol manual yang diletakkan di sebelah meja kantin',
      'Kalkulator saku yang ditempel di dinding tempat sampah',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Mesin cerdas membutuhkan sensor (input), model AI yang belajar dari data latih (proses), dan penggerak aksi (output).',
  },
  {
    id: 'kka5-q35',
    topik: 'Etika & Sikap Bijak Memakai AI',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Mengapa siswa tidak boleh mempercayai 100% semua jawaban mesin cerdas (asisten AI) tanpa memeriksa ulang kebenarannya dari buku pelajaran atau guru?',
    pilihan: [
      'Karena mesin cerdas masih bisa membuat kesalahan jika data latihnya kurang lengkap, sehingga manusia tetap harus berpikir kritis dan memverifikasi fakta',
      'Karena mesin cerdas selalu menjawab menggunakan bahasa isyarat rahasia',
      'Karena buku pelajaran tidak pernah memuat informasi yang benar',
      'Karena setiap jawaban AI langsung menghapus isi memori ponsel',
    ],
    jawabanBenar: 0,
    pembahasan:
      'AI adalah alat bantu belajar; ketelitian dan pemeriksaan ulang oleh manusia tetap wajib agar informasi tidak keliru.',
  },
];

/**
 * Bahasa Jawa Kelas 5 — 35 Soal Baru (TP 1: 12, TP 2: 11, TP 3: 12)
 * Proporsi indikator: 10 Pilihan Ganda, 10 PGK (adaptasi), 10 Isian Singkat, 5 Uraian
 */
export const BJAWA_KELAS5_SOAL: QuizQuestion[] = [
  // TP 1 — Kosakata, Unggah-Ungguh & Aksara/Sandhangan Swara (12 soal)
  {
    id: 'bj5-q01',
    topik: 'Kosakata Krama Inggil',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Tembung ngoko "turu" lan "mangan" menawa diowahi dadi basa krama inggil kanggo wong tuwa utawa simbah yaiku ...',
    pilihan: [
      'tilem lan nedha',
      'sare lan dhahar',
      'kondur lan tindak',
      'maos lan mundhut',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Basa krama inggil kanggo wong sing diajeni: turu = sare, mangan = dhahar.',
  },
  {
    id: 'bj5-q02',
    topik: 'Krama Inggil Tindak & Kondur',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Bapak nembe ... dhateng kantor jam pitu enjang, lan mangke ... jam sekawan sonten. Tembung krama inggil kanggo ngisi ceceg-ceceg iku yaiku ...',
    pilihan: [
      'lunga lan bali',
      'tindak lan kondur',
      'kesah lan wangsul',
      'mlaku lan sare',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Kanggo Bapak/Ibu/Guru, tembung krama inggile lunga = tindak, lan mulih/bali = kondur.',
  },
  {
    id: 'bj5-q03',
    topik: 'Angka Basa Jawa (Selawe)',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Wilangan 25 ing basa Jawa ngoko nduweni jeneng khusus yaiku "selawe". Menawa ing basa krama, angka 25 kasebut diarani ...',
    pilihan: ['Kalih dasa gangsal', 'Selangkung', 'Seket', 'Sewidak'],
    jawabanBenar: 1,
    pembahasan:
      'Angka 25 = selawe (ngoko) utawa selangkung (krama). Seket = 50, sewidak = 60.',
  },
  {
    id: 'bj5-q04',
    topik: 'Cacahe Aksara Jawa Legena',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Aksara Jawa dhasar utawa aksara legena (carakan) wiwit Ha nganti Nga cacahe ana ... aksara.',
    pilihan: ['18 aksara', '20 aksara', '24 aksara', '26 aksara'],
    jawabanBenar: 1,
    pembahasan:
      'Aksara legena cacahe ana 20: ha, na, ca, ra, ka, da, ta, sa, wa, la, pa, dha, ja, ya, nya, ma, ga, ba, tha, nga.',
  },
  {
    id: 'bj5-q05',
    topik: 'Pasangan Sandhangan Swara',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Gatekna jeneng sandhangan swara lan unine ing ngisor iki:\n(1) Wulu → ngowahi swara dadi i.\n(2) Suku → ngowahi swara dadi u.\n(3) Pepet → ngowahi swara dadi e (kaya ing tembung "sega").\n(4) Taling tarung → ngowahi swara dadi i.\nPasangan sing bener yaiku nomer ...',
    pilihan: [
      '(1), (2), lan (3)',
      '(1), (2), lan (4)',
      '(2) lan (4) wae',
      '(3) lan (4) wae',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Taling tarung ngowahi swara dadi o (kaya "soto"), dudu i. Nomer (1), (2), lan (3) bener.',
  },
  {
    id: 'bj5-q06',
    topik: 'Bedane Pepet lan Taling',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Tembung endi sing yen ditulis nganggo aksara Jawa nggunakake sandhangan TALING (swara é cetha) ing ngarep aksara?',
    pilihan: ['sega lan pecel', 'lele lan sate', 'pipi lan siji', 'tuku lan buku'],
    jawabanBenar: 1,
    pembahasan:
      '"Lele" lan "sate" nganggo swara é cetha (taling), dene "sega" lan "pecel" nganggo pepet.',
  },
  {
    id: 'bj5-q07',
    topik: 'Ngetung Cacahe Sandhangan Swara',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Yen frasa "tuku soto" ditulis nganggo aksara Jawa, pira cacahe sandhangan SUKU (u) lan TALING TARUNG (o) sing dibutuhake?',
    pilihan: [
      '1 suku lan 2 taling tarung',
      '2 suku lan 2 taling tarung',
      '2 suku lan 1 taling tarung',
      '3 suku lan 1 taling tarung',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Tembung "tu-ku" butuh 2 sandhangan suku (u), lan "so-to" butuh 2 sandhangan taling tarung (o).',
  },
  {
    id: 'bj5-q08',
    topik: 'Ngetung Wulu lan Pepet ing Tembung',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Ing tembung "sega siji", aksara sa sepisan nganggo sandhangan pepet (e). Pira cacahe sandhangan WULU (swara i) sing dipasang ing tembung "siji"?',
    pilihan: ['1 wulu', '2 wulu', '3 wulu', '4 wulu'],
    jawabanBenar: 1,
    pembahasan: '"Si-ji" duwe rong swara i, mula nganggo 2 sandhangan wulu.',
  },
  {
    id: 'bj5-q09',
    topik: 'Krama Inggil Mundhut lan Maos',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Ukara krama alus endi wae sing tembunge trep kanggo ngormati Ibu utawa Pak Guru?\n(1) Ibu mundhut gendhis lan uwos ing pasar.\n(2) Pak Guru nembe maos buku ing perpustakaan.\n(3) Eyang nembe ngunjuk teh anget ing teras.\n(4) Bu Guru lagi mangan bakso ing kantin.\nUkara sing trep yaiku ...',
    pilihan: [
      '(1), (2), lan (3)',
      '(1), (2), lan (4)',
      '(2) lan (4) wae',
      '(3) lan (4) wae',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Mundhut (tuku), maos (maca), lan ngunjuk (ngombe) iku krama inggil sing trep; tembung "mangan" ing (4) iku ngoko, kudune "dhahar".',
  },
  {
    id: 'bj5-q10',
    topik: 'Ngowahi Ukara Ngoko menyang Krama',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Ukara ngoko: "Kowe arep lunga menyang ngendi?" Yen diowahi dadi basa krama alus marang wong sing luwih tuwa yaiku ...',
    pilihan: [
      'Sampeyan arep kesah menyang pundi?',
      'Panjenengan badhe tindak dhateng pundi?',
      'Kula badhe kondur dhateng pundi?',
      'Panjenengan arep mlaku ning ngendi?',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Kowe → panjenengan, arep → badhe, lunga → tindak, menyang → dhateng, ngendi → pundi.',
  },
  {
    id: 'bj5-q11',
    topik: 'Fungsi Unggah-Ungguh Basa Jawa',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Yagene siswa SD isih perlu sinau mbedakake basa Ngoko lan Krama Alus ing jaman saiki?',
    pilihan: [
      'Kanggo nglatih tata krama, ngajeni wong tuwa lan guru, sarta nglestarekake kabudayan Jawa sing adi luhung',
      'Supaya ora oleh ngomong karo kanca sebaya nganggo basa apa wae',
      'Amarga basa krama mung kena dienggo nalika maca aksara Latin wae',
      'Supaya bocah-bocah lali karo basa Indonesia',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Unggah-ungguh basa nuwuhake rasa hormat marang wong liya lan njaga kelestarian budaya daerah.',
  },
  {
    id: 'bj5-q12',
    topik: 'Analisis Aksara Jawa Tanpa Sandhangan',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Gatekna tembung-tembung Jawa iki:\n(1) mata (2) kaya (3) buku (4) lara\nTembung endi sing yen ditulis nganggo aksara Jawa ORAPERLU nganggo sandhangan swara apa-apa amarga kabeh swarane isih "a" legena?',
    pilihan: [
      '(1), (2), lan (3)',
      '(1), (2), lan (4)',
      '(2) lan (3) wae',
      '(3) lan (4) wae',
    ],
    jawabanBenar: 1,
    pembahasan:
      '"Mata", "kaya", lan "lara" kabeh vocalipun "a", dene "buku" butuh sandhangan suku (u).',
  },

  // TP 2 — Pacelathon Santun & Tata Krama (11 soal)
  {
    id: 'bj5-q13',
    topik: 'Salam Sapaan Miturut Wektu',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Nalika mlebu kelas jam 07.00 esuk lan ketemu Bu Guru, salam basa Jawa sing trep diucapake yaiku ...',
    pilihan: ['Sugeng dalu, Bu', 'Sugeng sonten, Bu', 'Sugeng enjing, Bu', 'Sugeng siang, Bu'],
    jawabanBenar: 2,
    pembahasan:
      'Sugeng enjing = selamat pagi, Sugeng siang = selamat siang, Sugeng sonten = selamat sore, Sugeng dalu = selamat malam.',
  },
  {
    id: 'bj5-q14',
    topik: 'Atur Pamit Sekolah',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Sadurunge mangkat sekolah, Raka salim lan matur marang ibune: "Bu, kula nyuwun pamit ... sekolah rumiyin, nyuwun pangestu." Tembung krama sing trep kanggo "mangkat" yaiku ...',
    pilihan: ['tindak', 'bidhal', 'kondur', 'sare'],
    jawabanBenar: 1,
    pembahasan:
      'Kanggo awake dhewe (kula) sing mangkat sekolah, tembung kramane yaiku "bidhal", dudu "tindak".',
  },
  {
    id: 'bj5-q15',
    topik: 'Tata Krama Bertamu & Lewat',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Cocogna kahanan tata krama lan ucapane sing bener:\n(1) Nalika arep mlebu utawa mertamu ing omahe tanggane → "Kula nuwun".\n(2) Nalika mlaku liwat ing ngarepe wong tuwa kang lagi lungguh → "Ndherek langkung".\n(3) Nalika diparingi pitulungan utawa hadiah → "Matur nuwun".\n(4) Nalika nindakake kesalahan ora sengaja → "Sugeng dalu".\nPasangan sing bener yaiku ...',
    pilihan: [
      '(1), (2), lan (3)',
      '(1), (2), lan (4)',
      '(2) lan (4) wae',
      '(3) lan (4) wae',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Yen nindakake kesalahan, ucapane "Nyuwun pangapunten", dudu "Sugeng dalu". Nomer (1), (2), lan (3) bener.',
  },
  {
    id: 'bj5-q16',
    topik: 'Aturan Krama kanggo Awake Dhewe',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Kena apa ukara "Kula nembe dhahar lajeng sare" iku kurang trep miturut unggah-ungguh basa Jawa?',
    pilihan: [
      'Amarga dhahar lan sare iku krama inggil sing mung kanggo wong liya sing diajeni, kanggo awake dhewe kudune "nedha" lan "tilem"',
      'Amarga tembung kula kudu diganti panjenengan',
      'Amarga wong ora oleh mangan sadurunge turu',
      'Amarga basa krama ora nduweni tembung kanggo mangan',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Aturan unggah-ungguh Jawa: tembung krama inggil (dhahar, sare, kondur, tindak) ora kena kanggo awake dhewe.',
  },
  {
    id: 'bj5-q17',
    topik: 'Angka Krama ing Pacelathon Tuku Jajan',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Ing warung, bakul matur: "Regane sega pecel setunggal porsi sedasa ewu rupiah." Yen Rani tuku rong porsi (2 porsi) kanthi dhuwit rong puluh lima ewu rupiah, pira susuke (kembaliane) ing basa krama?',
    pilihan: [
      'Gangsal ewu rupiah',
      'Sedasa ewu rupiah',
      'Kalih dasa ewu rupiah',
      'Selangkung ewu rupiah',
    ],
    jawabanBenar: 0,
    pembahasan:
      '2 × 10.000 = 20.000. Dhuwite 25.000, dadi susuke 25.000 - 20.000 = 5.000 = gangsal ewu rupiah.',
  },
  {
    id: 'bj5-q18',
    topik: 'Milih Basa Miturut Lawan Pacelathon',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Endi pasangan pacelathon lan unggah-ungguhe sing paling trep?\n(1) Bayu marang kanca akrab sebangku: "Din, aku nyilih potlotmu sedhela ya!" (Ngoko Lugu)\n(2) Bayu marang Pak Guru: "Pak, kula nyuwun pirsa tugas halaman kalih dasa." (Krama Alus)\n(3) Bayu marang Eyang: "Eyang, sampeyan wis mangan apa durung?" (Ngoko Lugu)\n(4) Bayu marang adhike sing umur 5 taun: "Dhik, ayo sinau maca bareng Mas!" (Ngoko Lugu)\nPasangan sing trep yaiku ...',
    pilihan: [
      '(1), (2), lan (3)',
      '(1), (2), lan (4)',
      '(2) dan (3) wae',
      '(3) dan (4) wae',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Marang Eyang kudu nganggo basa krama alus ("Eyang, panjenengan sampun dhahar punapa dereng?"), dudu ngoko lugu.',
  },
  {
    id: 'bj5-q19',
    topik: 'Nyuwun Pangapunten kanthi Santun',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Ora sengaja Bima nyenggol gelase Paklik nganti banyune kutah. Ature Bima sing paling santun yaiku ...',
    pilihan: [
      '"Salah sampeyan dhewe nyelehake gelas ing kene!"',
      '"Nyuwun pangapunten, Paklik, kula boten sengaja nyenggol gelasipun. Mangke kula lap resik."',
      '"Matur nuwun sanget, Paklik, gelase wis kutah."',
      '"Ndherek langkung, Paklik, aku arep dolan."',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Ngakoni kaluputan, nyuwun pangapunten kanthi alus, lan gelem tanggung jawab ngresiki nuduhake tata krama luhur.',
  },
  {
    id: 'bj5-q20',
    topik: 'Ngenteni Giliran & Unggah-Ungguh Sekolah',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Ing pacelathon karo guru, tumindak sopan sing kudu digatekake yaiku ...\n(1) Matur nganggo swara sing sareh, cetha, lan ora mbengok.\n(2) Nggatekake nalika guru paring pitedah tanpa medhot pangandikane.\n(3) Ngadeg utawa lungguh kanthi posisi sopan lan ngajeni.\n(4) Ngunjuk utawa mangan jajan ing ngarep guru nalika lagi matur.\nTumindak sing bener yaiku ...',
    pilihan: [
      '(1), (2), lan (3)',
      '(1), (2), lan (4)',
      '(2) lan (4) wae',
      '(3) lan (4) wae',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Matur alus, ngrungokake tanpa medhot, lan sikap awak sopan iku wujud tata krama marang guru.',
  },
  {
    id: 'bj5-q21',
    topik: 'Angka Krama ing Jadwal Jam',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      '"Simbah tindak dhateng kebon jam enem enjang, konduripun jam kalih welas siang." Jam kalih welas siang tegese pukul ...',
    pilihan: ['10.00 WIB', '11.00 WIB', '12.00 WIB', '14.00 WIB'],
    jawabanBenar: 2,
    pembahasan: '"Kalih welas" ing basa Indonesia tegese dua belas (12.00 WIB).',
  },
  {
    id: 'bj5-q22',
    topik: 'Nggawe Ukara Matur Izin Marang Guru',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Rini arep nyuwun izin marang Bu Guru amarga buku cathetane ketinggalan ing omah lan njaluk wektu nyalin cathetan ing jam istirahat. Ukara krama alus endi sing paling bener?',
    pilihan: [
      '"Nyuwun pangapunten, Bu. Buku cathetan kula kantun ing griya. Menapa kepareng kula nyalin cathetan ing wekdal ngaso mangke?"',
      '"Bu, panjenengan lali nggawa bukuku. Aku arep nyalin saiki ya!"',
      '"Sugeng dalu Bu, buku kula sampun dhahar ing griya."',
      '"Kula nuwun Bu, kula kondur dhateng griya saiki tanpa izin."',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Ukara kapisan ngemot nyuwun pangapunten, alesan jujur nganggo krama alus (kula/kantun/griya), lan atur panyuwun izin kanthi sopan.',
  },
  {
    id: 'bj5-q23',
    topik: 'Ngevaluasi Pacelathon Wong Tuwa & Anak',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Ing sawijining pacelathon, Tono matur marang bapake: "Pak, kula wangsul jam kalih siang. Lajeng Bapak badhe kondur jam pinten?" Apa ukara Tono wis bener unggah-ungguhe?',
    pilihan: [
      'Sampun leres, amarga kanggo awake dhewe Tono nganggo tembung "wangsul", dene kanggo Bapak nganggo krama inggil "kondur"',
      'Salah, amarga kudu dibalik dadi "kula kondur" lan "Bapak wangsul"',
      'Salah, amarga anak ora oleh takon marang wong tuwa',
      'Salah, amarga "kalih" tegese lima',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Tono ngetrapake aturan kanthi sampurna: wangsul kanggo kula (diri sendiri), kondur kanggo Bapak.',
  },

  // TP 3 — Dolanan Tradisional, Tembang & Legenda Kota Batu (12 soal)
  {
    id: 'bj5-q24',
    topik: 'Ciri Dolanan Egrang',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Dolanan tradisional sing nggunakake rong pring dawa kanthi pancadan sikil kanggo mlaku lan nglatih keseimbangan awak yaiku ...',
    pilihan: ['Dakon', 'Egrang', 'Bekelan', 'Jamuran'],
    jawabanBenar: 1,
    pembahasan:
      'Egrang yaiku dolanan nganggo rong tongkat pring berpancadan sing nglatih keseimbangan lan ketangkasan.',
  },
  {
    id: 'bj5-q25',
    topik: 'Ngetung Wiji Kecik ing Dakon',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Papan dolanan Dakon (congklak) duwe 7 bolongan cilik ing sisih kiwa lan 7 bolongan cilik ing sisih tengen (total 14 bolongan cilik). Saben bolongan cilik diisi 7 wiji kecik utawa kerang. Pira gunggunge kabeh wiji kecik ing papan dakon mau?',
    pilihan: ['49 wiji', '84 wiji', '98 wiji', '105 wiji'],
    jawabanBenar: 2,
    pembahasan: 'Total bolongan cilik = 7 + 7 = 14 bolongan. Total wiji = 14 × 7 = 98 wiji kecik.',
  },
  {
    id: 'bj5-q26',
    topik: 'Aturan Dolanan Gobag Sodor',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Dolanan kelompok Gobag Sodor dimainake dening rong regu (regu jaga garis lan regu penyerang), saben regu biasane cacah 5 bocah. Nilai utama sing dilatih ing dolanan iki yaiku ...',
    pilihan: [
      'Kekompakan kerja sama tim, kelincahan, lan kejujuran',
      'Kesenengan lungguh dhewekan ing njero kamar',
      'Dolanan layar HP nganti tengah wengi',
      'Ngalahake kanca kanthi cara curang',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Gobag sodor nglatih strategi bareng, gerak lincah, kekompakan tim, lan sportivitas.',
  },
  {
    id: 'bj5-q27',
    topik: 'Macem-Macem Dolanan Tradisional',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Gatekna jeneng dolanan tradisional lan pirantine:\n(1) Benthik → nggunakake rong tugelan kayu cendhak lan dawa.\n(2) Bekelan → nggunakake bal karet cilik lan wiji bekel kuningan.\n(3) Jamuran → dolanan mlaku mubeng karo nyanyi tembang kanthi gerak kompak.\n(4) Egrang → dimainake mung nganggo kertu angka ing meja.\nPasangan sing bener yaiku ...',
    pilihan: [
      '(1), (2), lan (3)',
      '(1), (2), lan (4)',
      '(2) lan (4) wae',
      '(3) lan (4) wae',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Benthik nganggo kayu, bekelan nganggo bal lan kewuk/bekel, jamuran nganggo tembang mubeng. Egrang nganggo pring.',
  },
  {
    id: 'bj5-q28',
    topik: 'Njangkepi Lirik Tembang Dolanan',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Tembang dolanan "Cublak-cublak suweng, suwenge ting gelenter, mambu ketundhung ..." Tembung pungkasan kanggo njangkepi gatra iku yaiku ...',
    pilihan: ['wedhus', 'gudel', 'kebo', 'macan'],
    jawabanBenar: 1,
    pembahasan:
      'Lirik lengkapnya: "...mambu ketundhung gudel, pak empong lera-lere..." (gudel tegese anak kebo).',
  },
  {
    id: 'bj5-q29',
    topik: 'Makna Tembang Cublak-Cublak Suweng',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Piwulang luhur sing ana ing tembang dolanan "Cublak-Cublak Suweng" yaiku ...',
    pilihan: [
      'Kanggo nggoleki kabegjan lan rasa tentrem sejati, manungsa kudu nganggo ati sing resik lan ora serakah',
      'Bocah-bocah kudu rebutan bandha nganti tukaran',
      'Dolanan kudu ditindakake ing tengah dalan gedhe',
      'Kabeh wong kudu meneng wae tanpa nyapa kanca',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Tembang Cublak-Cublak Suweng ngajarake yen kabahagyan sejati ora ditemokake kanthi nafsu serakah, nanging nganggo ati bening.',
  },
  {
    id: 'bj5-q30',
    topik: 'Manfaat Dolanan Tradisional Dibanding HP',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Kaluwihan dolanan tradisional ing plataran omah dibandingake dolanan gim HP terus-terusan yaiku ...\n(1) Awak aktif obah dadi luwih sehat lan bugar.\n(2) Bisa srawung langsung, guyub rukun, lan nambah kanca.\n(3) Ngurangi kesel mripat amarga ora mandeng layar terus.\n(4) Nggawe bocah dadi males metu saka omah.\nKaluwihan sing bener yaiku ...',
    pilihan: [
      '(1), (2), lan (3)',
      '(1), (2), lan (4)',
      '(2) lan (4) wae',
      '(3) lan (4) wae',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Dolanan tradisional nyehatake fisik, ngulinakake sosialisasi langsung, lan njaga kesehatan mripat.',
  },
  {
    id: 'bj5-q31',
    topik: 'Legenda Asal-Usul Desa Pesanggrahan Kota Batu',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Miturut crita rakyat lokal ing Kota Batu, jeneng Desa Pesanggrahan asal-usule gegayutan karo papan ing sikile Gunung Panderman sing hawane adhem lan asring didadekake panggonan ...',
    pilihan: [
      'Pabrik kapal laut gedhe',
      'Mesanggrah (leren utawa ngaso) para leluhur lan tamu ing jaman biyen',
      'Pelabuhan iwak segara kidul',
      'Padang pasir sing panas banget',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Tembung "pesanggrahan" asale saka "sanggrahan/mesanggrah" sing tegese papan ngaso utawa lerem sing ayem ing sikil Gunung Panderman.',
  },
  {
    id: 'bj5-q32',
    topik: 'Makna Jeneng Desa Sidomulyo Kota Batu',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Ing crita asal-usul Desa Sidomulyo (sentra kembang ing Kota Batu), tembung "sido mulyo" ngemot donga lan pangarep-arep warga supaya uripe ...',
    pilihan: [
      'Kena bencana saben taun',
      'Sida (dadi) mulya, makmur, lan ayem tentrem lumantar tetanen lan ngrawat kembang',
      'Pindhah menyang pulo liya kabeh',
      'Ora perlu kerja keras maneh',
    ],
    jawabanBenar: 1,
    pembahasan:
      '"Sido mulyo" tegese kelakon urip mulya lan raharja kanthi nyambut gawe rukun lan sregep.',
  },
  {
    id: 'bj5-q33',
    topik: 'Ngenali Jenis Crita Rakyat',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Ciri-ciri crita rakyat jenis LEGENDA (kayata crita asal-usul Desa Pesanggrahan lan Desa Sidomulyo) yaiku ...\n(1) Nyritakake asal-usul dumadine sawijining papan, desa, utawa gunung.\n(2) Diwarisake kanthi turun-temurun ing masyarakat lokal.\n(3) Ngemot piwulang moral babagan rukun, kerja keras, lan njaga alam.\n(4) Kabeh tokoh ing crita kudu wujud robot modern saka njaba angkasa.\nCiri sing bener yaiku ...',
    pilihan: [
      '(1), (2), lan (3)',
      '(1), (2), lan (4)',
      '(2) lan (4) wae',
      '(3) lan (4) wae',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Legenda nyritakake asal-usul papan sing diwarisake turun-temurun sarta ngemot pitutur luhur.',
  },
  {
    id: 'bj5-q34',
    topik: 'Piwulang Moral Legenda Kota Batu',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Saka legenda Desa Pesanggrahan lan Desa Sidomulyo ing Kota Batu, piwulang becik apa sing bisa ditiru siswa SD Negeri Pesanggrahan 01 ing urip saben dina?',
    pilihan: [
      'Ngrumat alam lan tetanduran ing lingkungan sekolah, urip rukun gotong royong, sarta sregep sinau supaya urip mulya',
      'Mbuwang sampah ing lereng gunung lan ngrusak kebon kembang',
      'Ora gelem dolanan karo kanca saka desa liya',
      'Nglalekake crita sejarah lan budaya daerah dhewe',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Legenda lokal ngajak warga tansah ngreksa kelestarian alam, guyub rukun, lan makarya kanthi tulus.',
  },
  {
    id: 'bj5-q35',
    topik: 'Nglestarekake Dolanan Tradisional',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Ing wayah ngaso sekolah, akeh bocah sing luwih milih meneng dolanan HP yen diijini ing omah. Kepriye carane ngajak kanca-kanca supaya seneng dolanan tradisional maneh?',
    pilihan: [
      'Nganakake lomba utawa main bareng dolanan kaya gobag sodor, dakon, lan egrang kanthi suasana gembira lan sportif',
      'Mbuwang kabeh buku pelajaran menyang lapangan sekolah',
      'Meksa kanca dolanan dhewekan tanpa aturan',
      'Mung nyritakake dolanan tradisional tanpa tau nyoba mainake',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Ngajak main bareng kanthi nyenengake lan lomba cilik antar-regu ndadekake dolanan tradisional rame lan disenengi maneh.',
  },
];
