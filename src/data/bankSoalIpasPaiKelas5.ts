import type { QuizQuestion } from './types.ts';

/**
 * IPAS Kelas 5 — 35 Soal Latihan Baru (TP 1: 10, TP 2: 11, TP 3: 10, TP 4: 4)
 * Proporsi indikator: 10 Pilihan Ganda, 10 PGK (adaptasi), 10 Isian Singkat, 5 Uraian
 */
export const IPAS_KELAS5_SOAL: QuizQuestion[] = [
  // TP 1 — Sistem Organ Manusia & Pencegahannya (10 soal)
  {
    id: 'ipas5-q01',
    topik: 'Hipertensi & Pencegahan',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Pak Hadi sering mengeluh pusing dan tengkuk terasa kaku. Saat diperiksa di puskesmas, tekanan darahnya tercatat 155/95 mmHg sehingga dokter menyarankan mengurangi makanan asin. Kebiasaan sehat yang tepat untuk mencegah kondisi tersebut adalah ...',
    pilihan: [
      'Membatasi konsumsi garam, rutin berolahraga ringan, dan memperbanyak sayur serta buah',
      'Mengonsumsi makanan cepat saji tinggi lemak setiap malam sebelum tidur',
      'Mengurangi minum air putih dan tidur siang sepanjang hari tanpa bergerak',
      'Menambah kecap asin dan keripik kemasan di setiap jam makan',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Tekanan darah tinggi (hipertensi) dapat dicegah dengan membatasi garam, rutin beraktivitas fisik/olahraga, serta makan cukup sayur, buah, dan air putih.',
  },
  {
    id: 'ipas5-q02',
    topik: 'Peredaran Darah Kecil',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Setelah melepaskan karbon dioksida dan mengikat oksigen di paru-paru, darah bersih dialirkan kembali menuju jantung melalui vena pulmonalis. Ruang jantung pertama yang menerima darah kaya oksigen dari paru-paru adalah ...',
    pilihan: ['Serambi kanan', 'Bilik kanan', 'Serambi kiri', 'Bilik kiri'],
    jawabanBenar: 2,
    pembahasan:
      'Pada peredaran darah kecil (jantung → paru-paru → jantung), darah kaya O₂ dari paru-paru masuk ke serambi kiri jantung melalui vena pulmonalis.',
  },
  {
    id: 'ipas5-q03',
    topik: 'Pembuluh Nadi & Vena',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Pembuluh darah yang mengalirkan darah keluar dari jantung dengan dinding tebal, kuat, dan elastis agar mampu menahan tekanan pompa jantung disebut ...',
    pilihan: ['Pembuluh balik (vena)', 'Pembuluh nadi (arteri)', 'Pembuluh kapiler', 'Katup trikuspidalis'],
    jawabanBenar: 1,
    pembahasan:
      'Pembuluh nadi (arteri) membawa darah keluar dari jantung sehingga memiliki dinding tebal, kuat, dan elastis serta denyutnya terasa.',
  },
  {
    id: 'ipas5-q04',
    topik: 'Struktur Jantung (Bilik Kiri)',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Di antara empat ruang jantung, bagian yang memiliki dinding otot paling tebal karena harus memompa darah kaya oksigen ke seluruh bagian tubuh adalah ...',
    pilihan: ['Serambi kiri', 'Serambi kanan', 'Bilik kanan', 'Bilik kiri'],
    jawabanBenar: 3,
    pembahasan:
      'Bilik kiri (ventrikel kiri) memiliki otot paling tebal karena memompa darah ke seluruh tubuh dari ujung kepala hingga ujung kaki.',
  },
  {
    id: 'ipas5-q05',
    topik: 'Analisis Data Denyut Nadi',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Data hasil pengukuran denyut nadi Dika selama 1 menit:\n• Duduk santai: 74 kali/menit\n• Jalan santai: 98 kali/menit\n• Lari keliling lapangan: 132 kali/menit\nSimpulan yang benar dari data tersebut adalah ...\n(1) Semakin berat aktivitas fisik, semakin cepat detak jantung memompa darah\n(2) Otot membutuhkan lebih banyak oksigen dan energi saat berlari\n(3) Denyut nadi saat duduk lebih tinggi daripada saat berjalan santai\n(4) Kenaikan denyut nadi dari duduk ke lari adalah 48 kali/menit',
    pilihan: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)'],
    jawabanBenar: 0,
    pembahasan:
      'Aktivitas lebih berat menuntut pasokan O₂ lebih tinggi sehingga jantung berdetak lebih cepat (1 dan 2 benar). Selisih duduk ke lari adalah 132 − 74 = 58 kali/menit.',
  },
  {
    id: 'ipas5-q06',
    topik: 'Gangguan Darah (Anemia)',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Gangguan kesehatan akibat tubuh kekurangan sel darah merah atau kadar hemoglobin sehingga penderitanya mudah lelah, pucat, dan pusing disebut ...',
    pilihan: ['Leukemia', 'Anemia', 'Hipertensi', 'Hemofilia'],
    jawabanBenar: 1,
    pembahasan:
      'Anemia terjadi ketika jumlah sel darah merah atau hemoglobin rendah sehingga pengangkutan oksigen ke sel tubuh berkurang.',
  },
  {
    id: 'ipas5-q07',
    topik: 'Gangguan Pencernaan (Maag)',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Nisa sering menunda makan siang saat sibuk bermain hingga perutnya terasa perih dan kembung akibat asam lambung (HCl) mengiritasi dinding lambung. Cara tepat mencegah gangguan maag tersebut adalah ...',
    pilihan: [
      'Makan teratur tepat waktu dan menghindari makanan terlalu pedas atau asam saat perut kosong',
      'Minum minuman bersoda setiap pagi sebelum sarapan',
      'Makan sekaligus sangat banyak di malam hari lalu langsung berbaring',
      'Mengganti nasi dan lauk dengan kerupuk pedas saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Makan teratur sesuai jadwal menjaga lambung tidak kosong terlalu lama sehingga asam lambung tidak mengiritasi dinding lambung.',
  },
  {
    id: 'ipas5-q08',
    topik: 'Usus Halus & Penyerapan Sari Makanan',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan fungsi organ pencernaan berikut:\n(1) Menyerap sari-sari makanan ke pembuluh darah di dinding berjonjot\n(2) Menyaring debu dan menyesuaikan suhu udara pernapasan\n(3) Menyalurkan nutrisi hasil cerna untuk diedarkan darah ke seluruh tubuh\n(4) Mengatur kadar air sisa ampas makanan sebelum dibuang\nPernyataan yang merupakan tugas utama usus halus adalah ...',
    pilihan: ['(1) dan (2)', '(2) dan (4)', '(1) dan (3)', '(3) dan (4)'],
    jawabanBenar: 2,
    pembahasan:
      'Usus halus (intestinum tenue) berfungsi mencerna secara kimiawi lanjutan dan menyerap sari makanan melalui jonjot usus (vili) ke dalam darah.',
  },
  {
    id: 'ipas5-q09',
    topik: 'Organ Pernapasan (Hidung & Trakea)',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Saat menghirup udara di pagi hari, rongga hidung dan tenggorokan bekerja menjaga kebersihan udara. Peran yang benar adalah ...\n(1) Rambut hidung menyaring debu dan kotoran berukuran besar\n(2) Selaput lendir hidung melembapkan dan menghangatkan udara\n(3) Trakea menjadi tempat utama pertukaran oksigen ke dalam darah\n(4) Silia di trakea dan bronkus mendorong lendir kotoran keluar',
    pilihan: ['(1), (2), dan (3)', '(1), (2), dan (4)', '(2), (3), dan (4)', '(1), (3), dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Pertukaran O₂ dan CO₂ terjadi di alveolus paru-paru, bukan di trakea. Pernyataan (1), (2), dan (4) tepat.',
  },
  {
    id: 'ipas5-q10',
    topik: 'Bahaya Kolesterol & Menjaga Jantung',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Mengapa penumpukan lemak dan kolesterol di dinding dalam pembuluh darah berbahaya bagi jantung, serta sebutkan upaya yang tepat untuk mencegahnya?',
    pilihan: [
      'Lemak melebarkan pembuluh darah sehingga jantung berhenti bekerja; dicegah dengan tidur terus-menerus',
      'Plak kolesterol menyumbat atau menyempitkan aliran darah sehingga tekanan darah naik dan jantung bekerja terlalu berat; dicegah dengan kurangi gorengan/lemak jenuh, makan sayur berserat, dan rutin olahraga',
      'Kolesterol mengubah darah menjadi air tawar; dicegah dengan menambah gula dan garam',
      'Penumpukan lemak hanya memengaruhi tulang kaki; dicegah dengan minum minuman manis kemasan',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Penumpukan plak kolesterol (aterosklerosis) mempersempit pembuluh darah, memicu hipertensi dan serangan jantung. Pencegahannya: kurangi makanan berlemak jenuh, perbanyak serat sayur/buah, minum air cukup, dan rutin berolahraga.',
  },

  // TP 2 — Ekosistem, Biotik/Abiotik & Keseimbangan Lingkungan (11 soal)
  {
    id: 'ipas5-q11',
    topik: 'Komponen Biotik & Abiotik',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Di taman sekolah terdapat ikan koi, tanaman teratai, batu koral, cahaya matahari, dan air kolam. Kelompok komponen abiotik pada ekosistem kolam tersebut adalah ...',
    pilihan: [
      'Ikan koi dan tanaman teratai',
      'Batu koral, cahaya matahari, dan air kolam',
      'Teratai, siput air, dan bakteri pengurai',
      'Lumut, ikan koi, dan air kolam',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Komponen abiotik adalah benda tak hidup dalam ekosistem, seperti batu, air, udara, tanah, suhu, dan cahaya matahari.',
  },
  {
    id: 'ipas5-q12',
    topik: 'Abiotik Penunjang Fotosintesis',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Untuk melakukan fotosintesis, tumbuhan menyerap air dan mineral dari tanah melalui akar, serta menyerap komponen abiotik berupa gas ... melalui stomata daun.',
    pilihan: ['Nitrogen', 'Oksigen', 'Karbon dioksida (CO₂)', 'Uap belerang'],
    jawabanBenar: 2,
    pembahasan:
      'Tumbuhan mengambil gas karbon dioksida (CO₂) dari udara bersama air dan cahaya matahari untuk menghasilkan glukosa serta oksigen.',
  },
  {
    id: 'ipas5-q13',
    topik: 'Peran Dekomposer (Pengurai)',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Daun kering yang gugur di kebun lama-kelamaan lapuk dan berubah menjadi humus penyubur tanah. Organisme yang berperan melakukan penguraian tersebut adalah ...',
    pilihan: [
      'Belalang dan ulat daun',
      'Jamur dan bakteri pengurai',
      'Burung pipit dan tupai',
      'Lumut tanduk dan paku',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Jamur dan bakteri berperan sebagai dekomposer (pengurai) yang memecah sisa makhluk hidup menjadi zat hara bagi tanah.',
  },
  {
    id: 'ipas5-q14',
    topik: 'Dampak Perubahan Rantai Makanan',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Di sebuah sawah terbentuk rantai makanan: Tanaman jagung → Belalang → Katak → Ular. Jika seluruh belalang dibasmi sekaligus dengan insektisida, dampak yang paling mungkin terjadi selanjutnya adalah ...',
    pilihan: [
      'Populasi katak menurun drastis karena kehilangan sumber makanan utama',
      'Populasi katak bertambah pesat dalam seminggu',
      'Tanaman jagung langsung mati kekeringan',
      'Populasi ular berkembang biak dua kali lipat',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Jika konsumen I (belalang) hilang, konsumen II (katak) kekurangan makanan sehingga populasinya menurun, sementara jagung tidak dimakan belalang.',
  },
  {
    id: 'ipas5-q15',
    topik: 'Hilangnya Predator Alami',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perburuan besar-besaran terhadap burung hantu dan ular sawah membuat jumlah keduanya hampir habis di area pertanian. Akibat jangka pendek yang terjadi adalah ...\n(1) Populasi tikus sawah melonjak tak terkendali\n(2) Kerusakan tanaman padi akibat hama tikus meningkat\n(3) Hasil panen petani meningkat tajam\n(4) Keseimbangan rantai makanan sawah terganggu',
    pilihan: ['(1), (2), dan (3)', '(1), (2), dan (4)', '(2), (3), dan (4)', '(1), (3), dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Burung hantu dan ular adalah predator alami tikus. Jika predator hilang, tikus berkembang pesat, merusak padi, dan mengganggu keseimbangan ekosistem.',
  },
  {
    id: 'ipas5-q16',
    topik: 'Pengendalian Hama Ramah Lingkungan',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Petani membudidayakan burung hantu (Tyto alba) di rumah burung dekat sawah untuk mengurangi hama tikus tanpa merusak tanah. Cara pengendalian hama memakai pemangsa alami ini disebut pengendalian secara ...',
    pilihan: ['Kimiawi sintetis', 'Biologis / hayati', 'Pembakaran lahan', 'Mekanik listrik'],
    jawabanBenar: 1,
    pembahasan:
      'Memanfaatkan musuh alami (seperti burung hantu pemangsa tikus) disebut pengendalian hayati/biologis yang ramah lingkungan.',
  },
  {
    id: 'ipas5-q17',
    topik: 'Aliran Energi (Hukum 10%)',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Dalam piramida makanan, rumput menyimpan 5.000 kkal energi. Jika hanya 10% energi yang berpindah ke setiap tingkat trofik di atasnya, energi yang diterima oleh konsumen II (ular) adalah ... kkal.',
    pilihan: ['500 kkal', '50 kkal', '5 kkal', '1.000 kkal'],
    jawabanBenar: 1,
    pembahasan:
      'Produsen (rumput) = 5.000 kkal → Konsumen I (tikus) menerima 10% × 5.000 = 500 kkal → Konsumen II (ular) menerima 10% × 500 = 50 kkal.',
  },
  {
    id: 'ipas5-q18',
    topik: 'Pencemaran Detergen & Eutrofikasi',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Limbah cucian berdetergen terus dibuang ke telaga desa hingga permukaan air tertutup eceng gondok lebat dan kadar oksigen terlarut turun dari 7,5 mg/L menjadi 1,8 mg/L. Dampak yang terjadi pada ekosistem telaga adalah ...\n(1) Cahaya matahari terhalang masuk ke dasar perairan\n(2) Banyak ikan mati akibat kekurangan oksigen terlarut\n(3) Air telaga menjadi jernih dan kaya ikan konsumsi\n(4) Keseimbangan organisme air terganggu akibat eutrofikasi',
    pilihan: ['(1), (2), dan (3)', '(1), (2), dan (4)', '(1), (3), dan (4)', '(2), (3), dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Fosfat dalam detergen memicu ledakan gulma air (eutrofikasi) yang menghalangi cahaya dan menurunkan oksigen terlarut sehingga ikan mati lemas.',
  },
  {
    id: 'ipas5-q19',
    topik: 'Dampak Penebangan Hutan Liar',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Penebangan pohon di lereng pegunungan secara liar tanpa tebang pilih berdampak buruk bagi lingkungan. Dampak yang tepat adalah ...\n(1) Akar penahan tanah berkurang sehingga rawan longsor dan banjir bandang\n(2) Satwa liar kehilangan tempat tinggal dan sumber makanan\n(3) Cadangan mata air pegunungan bertambah melimpah saat kemarau\n(4) Suhu udara sekitar menjadi lebih panas dan gersang',
    pilihan: ['(1), (2), dan (3)', '(1), (2), dan (4)', '(2), (3), dan (4)', '(1), (3), dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Hutan gundul justru mengurangi daya serap air tanah saat hujan sehingga memicu banjir/longsor, hilangnya habitat satwa, dan suhu meningkat.',
  },
  {
    id: 'ipas5-q20',
    topik: 'Kestabilan Ekosistem Alami vs Monokultur',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Mengapa ekosistem hutan alami dengan beragam tumbuhan lebih tahan terhadap serangan hama dibanding kebun yang hanya ditanami satu jenis tanaman (monokultur)?',
    pilihan: [
      'Karena di hutan alami tidak ada serangga sama sekali',
      'Karena keanekaragaman hayati tinggi menyediakan banyak predator alami serta variasi makanan sehingga satu jenis hama tidak mudah meledak merusak seluruh tumbuhan',
      'Karena kebun monokultur selalu disiram air hujan lebih sedikit',
      'Karena pohon hutan tidak membutuhkan air dan sinar matahari',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Keanekaragaman hayati pada ekosistem alami menciptakan jaring-jaring makanan kompleks dengan banyak musuh alami hama; sebaliknya lahan monokultur menyediakan satu sumber makanan melimpah bagi hama tertentu.',
  },
  {
    id: 'ipas5-q21',
    topik: 'Jaring Makanan & Ketergantungan',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Kumpulan dari beberapa rantai makanan yang saling berhubungan dan membentuk jalur makan-dimakan kompleks dalam suatu ekosistem disebut ...',
    pilihan: ['Simbiosis parasitisme', 'Jaring-jaring makanan', 'Metamorfosis sempurna', 'Adaptasi morfologi'],
    jawabanBenar: 1,
    pembahasan:
      'Jaring-jaring makanan adalah gabungan beberapa rantai makanan yang saling terkait dalam satu ekosistem.',
  },

  // TP 3 — Siklus Air, Krisis Air Bersih & Konservasi (10 soal)
  {
    id: 'ipas5-q22',
    topik: 'Tahapan Siklus Air (Evaporasi)',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Panas sinar matahari menyebabkan air laut, sungai, dan danau berubah wujud dari cair menjadi uap air yang naik ke atmosfer. Tahapan siklus air tersebut dinamakan ...',
    pilihan: ['Kondensasi', 'Presipitasi', 'Evaporasi', 'Infiltrasi'],
    jawabanBenar: 2,
    pembahasan:
      'Evaporasi adalah penguapan air dari permukaan perairan akibat pemanasan sinar matahari.',
  },
  {
    id: 'ipas5-q23',
    topik: 'Transpirasi & Kondensasi',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Uap air yang naik ke lapisan atmosfer dingin mengalami pendinginan dan berubah menjadi titik-titik air pembentuk awan. Peristiwa ini disebut ...',
    pilihan: ['Transpirasi', 'Kondensasi', 'Infiltrasi', 'Sublimasi'],
    jawabanBenar: 1,
    pembahasan:
      'Kondensasi adalah proses pengembunan uap air (gas) menjadi titik-titik air cair halus di langit hingga membentuk awan.',
  },
  {
    id: 'ipas5-q24',
    topik: 'Presipitasi & Infiltrasi',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Cermati pasangan istilah siklus air dan maknanya di bawah ini:\n(1) Transpirasi → penguapan air dari pori-pori daun tumbuhan\n(2) Presipitasi → turunnya titik air hujan atau salju dari awan ke bumi\n(3) Infiltrasi → perubahan wujud awan menjadi gas di angkasa\n(4) Infiltrasi → meresapnya air hujan ke pori-pori tanah membentuk air tanah\nPasangan yang tepat adalah ...',
    pilihan: ['(1), (2), dan (3)', '(1), (2), dan (4)', '(2) dan (3)', '(3) dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Transpirasi = penguapan dari tumbuhan, Presipitasi = turunnya hujan, dan Infiltrasi = peresapan air ke dalam tanah menjadi cadangan air tanah.',
  },
  {
    id: 'ipas5-q25',
    topik: 'Numerasi Ketersediaan Air Tawar',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Sekitar 97% air di Bumi berupa air laut asin, sedangkan air tawar hanya 3% (terdiri dari 2% berupa es/gletser di kutub dan sisanya air tawar cair di sungai, danau, serta air tanah). Persentase air tawar cair yang langsung dapat dimanfaatkan manusia adalah sekitar ...',
    pilihan: ['97%', '10%', '3%', '1%'],
    jawabanBenar: 3,
    pembahasan:
      'Dari total 3% air tawar di Bumi, sekitar 2% membeku sebagai es/gletser sehingga hanya sekitar 1% yang berupa air tawar cair siap pakai.',
  },
  {
    id: 'ipas5-q26',
    topik: 'Dampak Betonisasi terhadap Infiltrasi',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Di kawasan kota yang padat, hampir semua halaman rumah dan jalanan ditutup beton serta aspal tanpa lubang resapan. Dampak kondisi tersebut terhadap siklus air adalah ...\n(1) Proses infiltrasi air hujan ke dalam tanah terhambat\n(2) Air hujan lebih banyak mengalir di permukaan sehingga rawan banjir\n(3) Cadangan air sumur dan air tanah makin meningkat di musim kemarau\n(4) Permukaan tanah menjadi kedap air sehingga pasokan air tanah menipis',
    pilihan: ['(1), (2), dan (3)', '(1), (2), dan (4)', '(2), (3), dan (4)', '(1), (3), dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Lapisan beton dan aspal menutup pori tanah sehingga menghambat infiltrasi, memperbesar aliran permukaan (banjir), dan menurunkan cadangan air tanah.',
  },
  {
    id: 'ipas5-q27',
    topik: 'Lubang Resapan Biopori',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Lubang silindris kecil yang dibuat tegak lurus di halaman rumah dan diisi sampah organik untuk membantu air hujan meresap ke tanah disebut lubang resapan ...',
    pilihan: ['Sumur artesis', 'Biopori', 'Septik tank', 'Irigasi tetes'],
    jawabanBenar: 1,
    pembahasan:
      'Lubang resapan biopori memanfaatkan aktivitas cacing/mikroorganisme pengurai sampah organik untuk membentuk pori tanah agar infiltrasi meningkat.',
  },
  {
    id: 'ipas5-q28',
    topik: 'Numerasi Kebocoran Keran Air',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Sebuah keran di tempat wudu sekolah tidak tertutup rapat sehingga meneteskan air bersih sebanyak 25 mL setiap menit. Jika dibiarkan bocor selama 2 jam, banyak air bersih yang terbuang percuma adalah ... liter.',
    pilihan: ['1,5 liter', '3 liter', '5 liter', '30 liter'],
    jawabanBenar: 1,
    pembahasan:
      '2 jam = 120 menit. Volume terbuang = 25 mL/menit × 120 menit = 3.000 mL = 3 liter.',
  },
  {
    id: 'ipas5-q29',
    topik: 'Perilaku Hemat Air Sehari-hari',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Tindakan siswa yang menunjukkan kebiasaan menghemat dan menjaga ketersediaan air bersih adalah ...\n(1) Mematikan keran saat sedang menggosok gigi dengan sikat\n(2) Memakai air bekas cucian beras untuk menyiram tanaman di pot\n(3) Membiarkan selang air mengalir deras sambil mengobrol lama\n(4) Segera melapor jika melihat pipa atau keran sekolah yang bocor',
    pilihan: ['(1), (2), dan (3)', '(1), (2), dan (4)', '(2), (3), dan (4)', '(1), (3), dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Menutup keran saat menyikat gigi, memanfaatkan ulang air bilasan beras, dan memperbaiki keran bocor menghemat pemakaian air bersih.',
  },
  {
    id: 'ipas5-q30',
    topik: 'Numerasi Penghematan Air Keluarga',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Keluarga Raka memasang keran hemat air yang mampu menghemat 12 liter per hari dibanding keran biasa, lalu menggunakan air bilasan buah 3 liter per hari untuk menyiram taman. Berapa total air bersih yang berhasil dihemat keluarga Raka selama 1 minggu (7 hari)?',
    pilihan: [
      '75 liter air bersih',
      '90 liter air bersih',
      '105 liter air bersih',
      '120 liter air bersih',
    ],
    jawabanBenar: 2,
    pembahasan:
      'Penghematan per hari = 12 liter + 3 liter = 15 liter/hari. Selama 7 hari = 15 × 7 = 105 liter air bersih.',
  },
  {
    id: 'ipas5-q31',
    topik: 'Hutan Gundul & Siklus Air',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Bagaimana hubungan antara hilangnya pepohonan di daerah resapan hulu dengan kekeringan mata air pada musim kemarau?',
    pilihan: [
      'Tanpa pohon, transpirasi dan peresapan air oleh akar berkurang drastis sehingga air hujan langsung hanyut ke sungai dan tidak tersimpan sebagai air tanah untuk kemarau',
      'Tanpa pohon, air laut tidak lagi bisa menguap oleh matahari',
      'Pohon justru menghabiskan seluruh mata air tanah saat musim kemarau',
      'Hilangnya pohon membuat awan hujan selalu berhenti di kota besar',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Akar pepohonan menahan laju air hujan agar masuk melalui infiltrasi ke lapisan akuifer. Jika hutan gundul, air langsung mengalir sebagai limpasan dan cadangan air tanah kering saat kemarau.',
  },

  // TP 4 — Penjernihan Air Sederhana / Filtrasi (4 soal)
  {
    id: 'ipas5-q32',
    topik: 'Fungsi Arang dalam Filtrasi Air',
    tp: 'TP 4',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Dalam percobaan membuat penyaring air sederhana dari botol plastik bekas, murid menambahkan lapisan arang kayu atau arang aktif. Fungsi utama lapisan arang tersebut adalah ...',
    pilihan: [
      'Menambah warna cokelat agar air tampak seperti teh',
      'Menyerap bau tidak sedap, zat warna, serta kotoran kimia terlarut',
      'Memanaskan air hingga mendidih di dalam botol',
      'Menyumbat air agar tidak bisa menetes keluar',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Arang kayu/arang aktif memiliki banyak pori mikroskopis yang mampu menyerap bau tak sedap, warna keruh, dan zat kimia ringan.',
  },
  {
    id: 'ipas5-q33',
    topik: 'Urutan Lapisan Penjernih Air',
    tp: 'TP 4',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Agar air keruh tersaring bertahap dari kotoran besar hingga partikel halus tanpa cepat menyumbat saringan, urutan susunan bahan penyaring dari lapisan paling atas ke paling bawah adalah ...',
    pilihan: [
      'Kapas/ijuk → arang → pasir halus → kerikil besar',
      'Kerikil besar → kerikil kecil → pasir kasar → pasir halus → arang → ijuk/kapas',
      'Pasir halus → kerikil besar → kapas → arang',
      'Arang → kapas → pasir kasar → kerikil besar',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Penyaringan bertahap dimulai dari celah besar di atas (kerikil) untuk menahan daun/lumpur kasar, berlanjut ke pasir, arang penyerap bau, lalu ijuk/kapas sebagai penyaring halus terakhir.',
  },
  {
    id: 'ipas5-q34',
    topik: 'Fungsi Pasir & Kapas/Ijuk',
    tp: 'TP 4',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Pada bagian paling bawah alat penyaring air sederhana dekat tutup botol dipasang ... atau sabut ijuk untuk menahan pasir serta menyaring kotoran paling halus sebelum air keluar.',
    pilihan: ['Kapas atau kain kasa bersih', 'Batu bata pecah', 'Serbuk kayu basah', 'Tanah liat'],
    jawabanBenar: 0,
    pembahasan:
      'Kapas, kain kasa, atau ijuk diletakkan di lapisan terbawah sebagai penyaring akhir sekaligus penahan butiran pasir agar tidak ikut terbawa air.',
  },
  {
    id: 'ipas5-q35',
    topik: 'Evaluasi Hasil Air Filtrasi',
    tp: 'TP 4',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Setelah disaring melewati kerikil, pasir, arang, dan kapas, air sungai yang semula keruh kini tampak jernih dan tidak berbau. Apakah air tersebut sudah aman langsung diminum tanpa dimasak, dan mengapa?',
    pilihan: [
      'Ya, karena jernih berarti seluruh bakteri dan virus sudah hancur',
      'Belum aman langsung diminum; filtrasi fisik hanya menyaring kotoran dan bau sehingga air tetap harus direbus mendidih atau didisinfeksi untuk membunuh kuman/bakteri',
      'Ya, asalkan diminum memakai sedotan plastik baru',
      'Belum aman karena harus dicampur pasir halus sekali lagi',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Penjernihan sederhana bersifat fisik/kimia ringan (menyaring lumpur, bau, partikel) dan belum membunuh mikroorganisme patogen seperti bakteri E. coli, sehingga wajib dimasak hingga mendidih sebelum diminum.',
  },
];

/**
 * PAI & Budi Pekerti Kelas 5 — 35 Soal Latihan Baru (TP 1..5 @7 soal)
 * Proporsi indikator: 10 PG, 5 PGK (adaptasi), 5 Benar/Salah (adaptasi), 10 Isian Singkat, 5 Uraian
 */
export const PAI_KELAS5_SOAL: QuizQuestion[] = [
  // TP 1 — Q.S. Al-Ma'un & Kepedulian Sosial (7 soal)
  {
    id: 'pai5-q01',
    topik: 'Arti Nama Al-Ma’un',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Surah Al-Ma’un terdiri atas 7 ayat dan mengajarkan kepedulian terhadap sesama. Secara bahasa, kata "Al-Ma’un" memiliki arti ...',
    pilihan: [
      'Bukit yang tinggi',
      'Barang-barang yang berguna',
      'Cahaya di pagi hari',
      'Nikmat yang sangat banyak',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Al-Ma’un berasal dari ayat terakhir surah tersebut dan berarti barang-barang berguna (bantuan sederhana yang dibutuhkan sesama).',
  },
  {
    id: 'pai5-q02',
    topik: 'Kosakata Q.S. Al-Ma’un',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Dalam Q.S. Al-Ma’un ayat ke-3 terdapat potongan lafaz "‘ala tha‘āmil-miskīn" (عَلَىٰ طَعَامِ الْمِسْكِينِ). Kata "tha‘ām" dalam ayat tersebut berarti ...',
    pilihan: ['Pakaian layak', 'Makanan / memberi makan', 'Tempat tinggal', 'Buku bacaan'],
    jawabanBenar: 1,
    pembahasan:
      'Lafaz "‘ala tha‘āmil-miskīn" artinya "atas memberi makan orang miskin".',
  },
  {
    id: 'pai5-q03',
    topik: 'Ciri Pendusta Agama',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan perilaku berikut:\n(1) Membentak dan menyakiti hati anak yatim\n(2) Mengingatkan teman agar ikut membantu fakir miskin\n(3) Salat dengan niat riya’ supaya dipuji orang lain\n(4) Enggan meminjamkan barang berguna kepada tetangga yang sangat butuh\nBerdasarkan Q.S. Al-Ma’un, perilaku yang termasuk ciri pendusta agama ditunjukkan nomor ...',
    pilihan: ['(1), (2), dan (3)', '(1), (3), dan (4)', '(2), (3), dan (4)', '(1), (2), dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Q.S. Al-Ma’un menyebut ciri pendusta agama: menghardik anak yatim, tidak menganjurkan memberi makan fakir miskin, lalai salat, riya’, dan enggan memberi bantuan berguna.',
  },
  {
    id: 'pai5-q04',
    topik: 'Menyayangi Anak Yatim',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Benar/Salah',
    pertanyaan:
      'Tentukan penilaian atas pernyataan berikut:\n"Mengabaikan atau berbicara kasar kepada teman yang berstatus anak yatim tidak masalah selama kita rajin melaksanakan salat lima waktu."\nPenilaian yang paling tepat adalah ...',
    pilihan: [
      'Salah, karena Q.S. Al-Ma’un menegaskan orang yang menghardik anak yatim termasuk ciri pendusta agama',
      'Benar, karena ibadah salat sudah menghapus semua kesalahan ucapan',
      'Benar, selama perkataan kasar itu tidak dilakukan di dalam masjid',
      'Salah, karena anak yatim hanya wajib disapa saat hari raya Idulfitri saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Dalam Islam, kesalehan ibadah (salat) harus berjalan beriringan dengan akhlak sosial, yaitu menyayangi dan memuliakan anak yatim.',
  },
  {
    id: 'pai5-q05',
    topik: 'Ikhlas vs Riya’ dalam Q.S. Al-Ma’un',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Sikap beramal atau beribadah agar dilihat dan dipuji oleh orang lain yang dicela dalam Surah Al-Ma’un ayat ke-6 disebut ...',
    pilihan: ['Tawaduk', 'Riya’', 'Qanaah', 'Tawakal'],
    jawabanBenar: 1,
    pembahasan:
      'Ayat ke-6 Q.S. Al-Ma’un ("alladzīna hum yurā’ūn") mencela orang-orang yang berbuat riya’ atau pamer dalam beramal.',
  },
  {
    id: 'pai5-q06',
    topik: 'Penerapan Pesan Al-Ma’un di Sekolah',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Saat kegiatan Jumat Berkah di sekolah, kelasmu mengumpulkan sumbangan untuk membantu warga kurang mampu. Contoh pengamalan Surah Al-Ma’un yang tulus adalah ...',
    pilihan: [
      'Menyumbang dengan ikhlas semampunya dan ikut mengajak teman berbuat baik',
      'Menceritakan jumlah uang yang disumbangkan agar dianggap paling dermawan',
      'Menertawakan teman yang hanya mampu membawa beras sedikit',
      'Menyembunyikan kotak infak agar tidak ada yang menyumbang',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Bersedekah secara ikhlas tanpa pamer dan saling mengajak berbuat kebaikan sesuai dengan ajaran Surah Al-Ma’un.',
  },
  {
    id: 'pai5-q07',
    topik: 'Hikmah Mempelajari Al-Ma’un',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Mengapa Allah Swt. menghubungkan ibadah salat dengan kepedulian kepada anak yatim dan fakir miskin dalam Surah Al-Ma’un?',
    pilihan: [
      'Agar ibadah salat cukup dikerjakan sekali dalam sebulan',
      'Karena ibadah kepada Allah (salat) harus diiringi kepedulian sosial kepada sesama; salat yang benar mencegah perbuatan keji serta menumbuhkan kasih sayang dan keikhlasan',
      'Agar anak yatim tidak perlu belajar bersama di sekolah',
      'Karena memberi makan orang lain menggantikan kewajiban salat Subuh',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Surah Al-Ma’un mengajarkan keseimbangan antara hablum minallah (salat khusyuk dan ikhlas) dengan hablum minannas (menyantuni anak yatim, peduli fakir miskin, dan gemar menolong).',
  },

  // TP 2 — 5 Asmaul Husna (Al-Qawiyy, Al-Qayyum, Al-Muhyi, Al-Mumit, Al-Ba’its) (7 soal)
  {
    id: 'pai5-q08',
    topik: 'Makna Asmaul Husna',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Nama-nama Allah Swt. yang mulia, baik, dan indah yang berjumlah 99 nama disebut ...',
    pilihan: ['Kalimat Thayyibah', 'Asmaul Husna', 'Sifat Mustahil', 'Ulul Azmi'],
    jawabanBenar: 1,
    pembahasan:
      'Asmaul Husna berarti nama-nama Allah yang baik dan indah yang mencerminkan kesempurnaan sifat-Nya.',
  },
  {
    id: 'pai5-q09',
    topik: 'Al-Qawiyy (Maha Kuat)',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Farhan memiliki tubuh lebih tinggi dan tenaga lebih kuat dibanding teman sekelasnya. Sikap Farhan yang mencerminkan keteladanan terhadap Asmaul Husna Al-Qawiyy adalah ...',
    pilihan: [
      'Menggunakan kekuatannya untuk membela teman yang kesusahan dan giat beribadah',
      'Memaksa teman yang lebih kecil membawa tas miliknya',
      'Menantang berkelahi anak dari kelas lain',
      'Merasa paling hebat dan meremehkan teman yang kurus',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Al-Qawiyy artinya Allah Maha Kuat. Kita meneladaninya dengan menjadi pribadi kuat iman, rajin beribadah, dan menggunakan kekuatan untuk membantu sesama.',
  },
  {
    id: 'pai5-q10',
    topik: 'Al-Qayyum (Maha Berdiri Sendiri)',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Allah Swt. tidak membutuhkan bantuan siapa pun dalam menciptakan dan mengatur alam semesta karena Dia bersifat Al-Qayyum. Contoh sikap meneladani Al-Qayyum di rumah adalah ...',
    pilihan: [
      'Menyiapkan jadwal buku sekolah dan merapikan tempat tidur sendiri tanpa disuruh',
      'Menangis bila sepatu tidak dipakaikan oleh kakak',
      'Menyuruh adik mengerjakan seluruh PR milik sendiri',
      'Meminta ayah mengerjakan tugas kelompok seluruhnya',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Al-Qayyum berarti Maha Berdiri Sendiri (Mandiri). Pelajar meneladaninya dengan berlatih mandiri mengurus keperluan belajar dan tanggung jawab pribadi.',
  },
  {
    id: 'pai5-q11',
    topik: 'Al-Muhyi (Maha Menghidupkan)',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Benar/Salah',
    pertanyaan:
      'Cermati pernyataan berikut:\n"Hujan yang menyuburkan kembali tanaman layu dan tumbuhnya tunas baru merupakan tanda kekuasaan Allah Al-Muhyi (Maha Menghidupkan)."\nPenilaian yang paling tepat adalah ...',
    pilihan: [
      'Benar, karena Al-Muhyi berarti Allah Maha Menghidupkan makhluk dan menghidupkan bumi dengan air hujan',
      'Salah, karena Al-Muhyi berarti Allah Maha Mematikan seluruh makhluk hidup',
      'Salah, karena tanaman tumbuh hanya karena pot plastik mahal',
      'Benar, karena Al-Muhyi berarti Allah Maha Berdiri Sendiri',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Al-Muhyi berarti Maha Menghidupkan; Allah yang memberi kehidupan kepada manusia, hewan, dan tumbuhan.',
  },
  {
    id: 'pai5-q12',
    topik: 'Meneladani Al-Mumit',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Allah Swt. memiliki nama Al-Mumit (Maha Mematikan), yang mengingatkan bahwa setiap makhluk bernyawa pasti mengalami kematian. Sikap terpuji sebagai bentuk teladan iman kepada Al-Mumit adalah ...\n(1) Memperbanyak ibadah dan amal kebaikan sebagai bekal akhirat\n(2) Segera meminta maaf dan bertobat bila berbuat salah\n(3) Bermalas-malasan karena menganggap waktu hidup masih selamanya\n(4) Tidak bersikap sombong terhadap harta maupun jabatan',
    pilihan: ['(1), (2), dan (3)', '(1), (2), dan (4)', '(2), (3), dan (4)', '(1), (3), dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Mengingat sifat Allah Al-Mumit membuat kita rendah hati, menjauhi maksiat, segera bertobat, dan rajin beramal saleh.',
  },
  {
    id: 'pai5-q13',
    topik: 'Al-Ba’its (Maha Membangkitkan)',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Asmaul Husna yang berarti Allah Swt. Maha Membangkitkan seluruh manusia dari alam kubur setelah hari kiamat tiba adalah ...',
    pilihan: ['Al-Qawiyy', 'Al-Mumit', 'Al-Ba’its', 'Al-Qayyum'],
    jawabanBenar: 2,
    pembahasan:
      'Al-Ba’its artinya Maha Membangkitkan, yakni membangkitkan manusia kembali di hari akhirat untuk mempertanggungjawabkan amalnya.',
  },
  {
    id: 'pai5-q14',
    topik: 'Hikmah Meyakini Al-Ba’its',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Bagaimana seharusnya sikap seorang siswa yang meyakini Allah bersifat Al-Ba’its (Maha Membangkitkan) dalam keseharian di sekolah?',
    pilihan: [
      'Berbuat baik hanya saat guru piket sedang melihat',
      'Selalu bersikap jujur, menjaga ucapan, dan berbuat baik di mana pun karena yakin semua amal akan dibangkitkan dan dibalas oleh Allah Swt.',
      'Menyembunyikan pensil teman saat ruang kelas sepi',
      'Hanya mau berteman dengan anak yang duduk di bangku depan',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Keyakinan pada Al-Ba’its menanamkan kesadaran bahwa hidup berlanjut ke akhirat dan setiap amal sekecil apa pun akan dimintai pertanggungjawaban.',
  },

  // TP 3 — Saling Menghargai, Khalifah di Bumi & Perilaku Berbagi (7 soal)
  {
    id: 'pai5-q15',
    topik: 'Toleransi Antarumat Beragama',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Tetangga sebelah rumahmu yang berbeda agama sedang merayakan hari besar keagamaannya dengan tenang. Sikap toleransi (tasamuh) yang tepat kamu tunjukkan adalah ...',
    pilihan: [
      'Menghormati, menjaga ketenangan, dan tidak mengganggu jalannya ibadah mereka',
      'Menyalakan petasan di depan pagar rumah mereka saat ibadah berlangsung',
      'Mengajak mereka mengikuti tata cara salat kita bersama-sama',
      'Menutup pintu sambil mencela tradisi mereka',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Toleransi berarti menghormati kebebasan orang lain menjalankan ajaran agamanya tanpa mengganggu dan tanpa mencampuradukkan keyakinan ibadah.',
  },
  {
    id: 'pai5-q16',
    topik: 'Manfaat Hidup Saling Menghargai',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Di kelas V terdapat siswa dari berbagai suku dan daerah dengan pendapat yang beragam saat diskusi. Jika semua siswa menerapkan sikap saling menghargai, hal buruk yang dapat dicegah adalah ...',
    pilihan: [
      'Kerukunan dan kerja sama kelas',
      'Permusuhan, perselisihan, dan perpecahan antarteman',
      'Semangat belajar bersama di perpustakaan',
      'Ketertiban saat upacara bendera',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Sikap saling menghargai perbedaan mencegah timbulnya pertengkaran, perundungan, dan perpecahan.',
  },
  {
    id: 'pai5-q17',
    topik: 'Makna Tugas Khalifah di Bumi',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Allah Swt. menciptakan manusia dengan tugas mulia sebagai ... di muka bumi untuk memakmurkan, mengelola, dan menjaga kelestarian alam.',
    pilihan: ['Khalifah', 'Musafir', 'Muzakki', 'Pendusta'],
    jawabanBenar: 0,
    pembahasan:
      'Khalifah berarti wakil atau pemimpin yang bertugas menjalankan perintah Allah serta merawat dan memakmurkan bumi.',
  },
  {
    id: 'pai5-q18',
    topik: 'Penerapan Tugas Khalifah di Sekolah',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Benar/Salah',
    pertanyaan:
      'Tentukan penilaian atas pernyataan berikut:\n"Membuang sampah pada tempatnya, merawat tanaman kelas, dan hemat listrik merupakan bagian kecil dari tugas manusia sebagai khalifah penjaga bumi."\nPenilaian yang tepat adalah ...',
    pilihan: [
      'Benar, karena tugas khalifah mencakup menjaga, merawat, dan tidak merusak lingkungan alam ciptaan Allah',
      'Salah, karena tugas khalifah hanya berlaku bagi pemimpin negara saja',
      'Salah, karena merawat tanaman adalah tugas tukang kebun semata',
      'Benar, asalkan dilakukan hanya menjelang lomba kebersihan',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Setiap manusia adalah khalifah yang bertanggung jawab menjaga kelestarian alam dan tidak berbuat kerusakan di muka bumi.',
  },
  {
    id: 'pai5-q19',
    topik: 'Menghargai Perbedaan Pendapat',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Saat kerja kelompok, pendapat Aulia berbeda dengan usulan Damar. Tindakan Aulia yang mencerminkan akhlak saling menghargai adalah ...\n(1) Mendengarkan penjelasan Damar sampai tuntas tanpa memotong ucapan\n(2) Menyampaikan usulan balasan dengan kata-kata santun\n(3) Pergi meninggalkan kelompok karena usulannya tidak langsung dipilih\n(4) Bermusyawarah mencari jalan tengah yang terbaik bagi tim',
    pilihan: ['(1), (2), dan (3)', '(1), (2), dan (4)', '(2), (3), dan (4)', '(1), (3), dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Menghargai pendapat orang lain ditunjukkan dengan mendengar saksama, berbicara santun, dan bermusyawarah bersama.',
  },
  {
    id: 'pai5-q20',
    topik: 'Keutamaan Berbagi kepada Sesama',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Kebiasaan menyisihkan sebagian bekal atau rezeki untuk teman yang membutuhkan menumbuhkan rasa empati sekaligus ... tali persaudaraan.',
    pilihan: ['Memutuskan', 'Mempererat', 'Menjauhkan', 'Menghapuskan'],
    jawabanBenar: 1,
    pembahasan:
      'Hidup berbagi meringankan beban orang lain, menumbuhkan empati, dan mempererat ukhuwah (persaudaraan).',
  },
  {
    id: 'pai5-q21',
    topik: 'Manfaat Hidup Berbagi',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Sebutkan manfaat membiasakan sikap suka berbagi di lingkungan sekolah maupun masyarakat!',
    pilihan: [
      'Membuat uang saku habis tanpa manfaat apa pun',
      'Meringankan beban teman yang kesulitan, mempererat persaudaraan, menjauhkan sifat kikir, dan mendatangkan pahala serta keberkahan dari Allah Swt.',
      'Membuat teman menjadi malas berusaha sendiri selamanya',
      'Agar selalu dipilih menjadi ketua kelas oleh guru',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Berbagi membawa banyak kebaikan: hati menjadi tenang dan tidak kikir, beban sesama terbantu, persaudaraan kuat, dan Allah menjanjikan balasan keberkahan.',
  },

  // TP 4 — Zakat Fitrah, Infak, Sedekah & Mustahik (7 soal)
  {
    id: 'pai5-q22',
    topik: 'Hukum & Urutan Rukun Islam (Zakat)',
    tp: 'TP 4',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Menunaikan zakat bagi setiap muslim yang telah memenuhi syarat merupakan bagian dari Rukun Islam yang ke-...',
    pilihan: ['Pertama', 'Kedua', 'Ketiga', 'Keempat'],
    jawabanBenar: 2,
    pembahasan:
      'Rukun Islam berurutan: (1) Syahadat, (2) Salat, (3) Zakat, (4) Puasa Ramadan, dan (5) Haji bagi yang mampu.',
  },
  {
    id: 'pai5-q23',
    topik: 'Pengertian Zakat Fitrah',
    tp: 'TP 4',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Zakat berupa bahan makanan pokok (seperti beras seberat ±2,5 kg atau 3,5 liter per jiwa) yang wajib dikeluarkan menjelang Hari Raya Idulfitri disebut ...',
    pilihan: ['Infak pembangunan', 'Zakat fitrah', 'Sedekah jariyah', 'Hadiah lomba'],
    jawabanBenar: 1,
    pembahasan:
      'Zakat fitrah adalah zakat jiwa yang ditunaikan di bulan Ramadan hingga sebelum salat Idulfitri berupa makanan pokok atau nilai yang setara.',
  },
  {
    id: 'pai5-q24',
    topik: 'Perbedaan Zakat, Infak & Sedekah',
    tp: 'TP 4',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan perbandingan bentuk berbagi harta dalam Islam:\n(1) Zakat hukumnya wajib dengan takaran dan golongan penerima tertentu\n(2) Infak dan sedekah bersifat sunah tanpa batasan jumlah atau waktu tertentu\n(3) Sedekah hanya boleh diberikan dalam bentuk beras menjelang lebaran\n(4) Senyum ramah dan membantu menyingkirkan duri di jalan termasuk sedekah\nPernyataan yang benar adalah ...',
    pilihan: ['(1), (2), dan (3)', '(1), (2), dan (4)', '(2), (3), dan (4)', '(1), (3), dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Zakat wajib dengan ketentuan nisab/takaran dan 8 mustahik, sedangkan infak/sedekah sunah serta sedekah dapat berupa materi maupun kebaikan nonmateri.',
  },
  {
    id: 'pai5-q25',
    topik: 'Golongan Mustahik (Fakir)',
    tp: 'TP 4',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Orang yang amat sengsara hidupnya karena tidak memiliki harta maupun pekerjaan tetap dan tidak ada pihak yang membiayai kebutuhannya disebut golongan ...',
    pilihan: ['Muzakki', 'Fakir', 'Amil', 'Gharim'],
    jawabanBenar: 1,
    pembahasan:
      'Fakir adalah golongan mustahik yang paling membutuhkan karena tidak memiliki penghasilan dan tidak ada yang menanggung hidupnya.',
  },
  {
    id: 'pai5-q26',
    topik: 'Muzakki dan Mustahik',
    tp: 'TP 4',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Benar/Salah',
    pertanyaan:
      'Evaluasilah pernyataan berikut:\n"Pak Ahmad yang menunaikan zakat fitrah untuk seluruh keluarganya disebut sebagai mustahik zakat."\nPenilaian yang benar adalah ...',
    pilihan: [
      'Salah, karena orang yang wajib mengeluarkan zakat disebut muzakki, sedangkan penerima zakat disebut mustahik',
      'Benar, karena setiap kepala keluarga otomatis disebut mustahik',
      'Benar, asalkan Pak Ahmad menyerahkan zakat langsung kepada panitia amil',
      'Salah, karena pemberi zakat fitrah disebut sebagai gharim',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Muzakki adalah orang yang menunaikan/membayar zakat, amil adalah panitia pengelola zakat, dan mustahik adalah 8 golongan penerima zakat.',
  },
  {
    id: 'pai5-q27',
    topik: 'Hadiah vs Sedekah',
    tp: 'TP 4',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Rani memberi sebuah buku tulis baru kepada sahabatnya yang juara membaca puisi sebagai tanda apresiasi dan kasih sayang. Pemberian tersebut lebih tepat dikategorikan sebagai ...',
    pilihan: ['Zakat mal', 'Hadiah', 'Fidyah', 'Wakaf tanah'],
    jawabanBenar: 1,
    pembahasan:
      'Hadiah diberikan sebagai bentuk penghormatan, penghargaan prestasi, atau mempererat kasih sayang, berbeda dengan zakat (wajib) dan sedekah (bantuan karena butuh atau mencari rida Allah).',
  },
  {
    id: 'pai5-q28',
    topik: 'Fungsi Zakat bagi Muzakki & Masyarakat',
    tp: 'TP 4',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Apa fungsi utama zakat baik bagi diri muzakki (pemberi zakat) maupun bagi kesejahteraan masyarakat sekitar?',
    pilihan: [
      'Bagi muzakki agar terkenal kaya raya, bagi masyarakat untuk perlombaan',
      'Bagi muzakki untuk menyucikan harta dan jiwa dari sifat kikir; bagi masyarakat membantu kebutuhan fakir miskin, mengurangi kesenjangan sosial, serta menumbuhkan rasa kepedulian',
      'Bagi muzakki untuk mengurangi porsi makan sehari-hari saja',
      'Bagi masyarakat agar tidak perlu bekerja mencari rezeki lagi',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Zakat membersihkan jiwa dan harta muzakki dari kekikiran, sekaligus menguatkan ekonomi mustahik agar dapat merayakan kebahagiaan bersama tanpa kesenjangan tajam.',
  },

  // TP 5 — Peradaban Islam Madinah & Keteladanan Nabi Muhammad Saw. (7 soal)
  {
    id: 'pai5-q29',
    topik: 'Fungsi Masjid Nabawi di Madinah',
    tp: 'TP 5',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Setibanya hijrah di Madinah, langkah awal Nabi Muhammad Saw. membangun masyarakat Islam yang rukun adalah mendirikan Masjid Nabawi. Pada masa Rasulullah, masjid tersebut berfungsi sebagai ...',
    pilihan: [
      'Tempat salat berjamaah saja tanpa kegiatan lain',
      'Pusat ibadah, tempat belajar ilmu agama, musyawarah umat, dan kegiatan sosial',
      'Pasar jual beli hewan ternak terbesar di Madinah',
      'Benteng pertahanan tertutup bagi kaum pendatang',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Masjid Nabawi menjadi pusat peradaban Islam di Madinah: tempat salat, majelis ilmu, musyawarah menyelesaikan persoalan umat, dan santunan sosial.',
  },
  {
    id: 'pai5-q30',
    topik: 'Ketabahan Dakwah di Thaif',
    tp: 'TP 5',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Ketika berdakwah ke kota ..., Nabi Muhammad Saw. mengalami penolakan keras hingga dicaci dan dilempari batu, namun beliau tetap bersabar bahkan mendoakan kebaikan bagi penduduknya.',
    pilihan: ['Yaman', 'Thaif', 'Syam', 'Habasyah'],
    jawabanBenar: 1,
    pembahasan:
      'Saat hijrah dakwah ke Kota Thaif, Rasulullah Saw. disambut lemparan batu hingga terluka, tetapi menolak membalas dan justru mendoakan mereka mendapat hidayah.',
  },
  {
    id: 'pai5-q31',
    topik: 'Gelar Al-Amin Rasulullah Saw.',
    tp: 'TP 5',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Sejak muda sebelum diangkat menjadi rasul, penduduk Makkah memberi gelar kepada Nabi Muhammad Saw. sebagai "Al-Amin" yang artinya ...',
    pilihan: ['Pemberani di medan perang', 'Dapat dipercaya', 'Sangat kaya raya', 'Paling fasih bersyair'],
    jawabanBenar: 1,
    pembahasan:
      'Al-Amin berarti orang yang terpercaya karena Nabi Muhammad Saw. selalu berkata jujur, amanah menjaga titipan, dan menepati janji.',
  },
  {
    id: 'pai5-q32',
    topik: 'Keteladanan Sikap Sabar & Pemaaf',
    tp: 'TP 5',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Benar/Salah',
    pertanyaan:
      'Tentukan kebenaran pernyataan berikut:\n"Meskipun sering disakiti saat awal berdakwah, Nabi Muhammad Saw. mengajarkan umatnya membalas kejahatan dengan kebaikan dan doa yang baik."\nPenilaian yang paling tepat adalah ...',
    pilihan: [
      'Benar, sebagaimana sikap Nabi di Thaif maupun saat menaklukkan Kota Makkah (Fathu Makkah) dengan memaafkan penduduknya',
      'Salah, karena Nabi Muhammad Saw. selalu membalas ejekan dengan ejekan serupa',
      'Salah, karena memaafkan hanya dilakukan sesama sahabat dekat saja',
      'Benar, tetapi hanya berlaku setelah perang besar selesai',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Rasulullah Saw. menjadi teladan pemaaf, sabar, dan kasih sayang meski berada pada posisi kuat saat Fathu Makkah.',
  },
  {
    id: 'pai5-q33',
    topik: 'Mempersaudarakan Muhajirin & Anshar',
    tp: 'TP 5',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Setelah hijrah ke Madinah, Nabi Muhammad Saw. mempersaudarakan kaum Muhajirin (pendatang dari Makkah) dengan kaum Anshar (penduduk asli Madinah). Hikmah utama dari langkah tersebut adalah ...',
    pilihan: [
      'Menumbuhkan rasa persatuan, tolong-menolong, dan kekeluargaan antarsesama muslim',
      'Membuat kaum pendatang bersaing memperebutkan kebun kurma',
      'Memisahkan tempat tinggal berdasarkan asal suku masing-masing',
      'Menghentikan kegiatan berdagang di pasar Madinah',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Persaudaraan Muhajirin dan Anshar memperkuat solidaritas sosial dan ekonomi umat Islam di Madinah.',
  },
  {
    id: 'pai5-q34',
    topik: 'Meneladani Kejujuran Al-Amin di Sekolah',
    tp: 'TP 5',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Sikap siswa yang meneladani sifat jujur dan amanah Nabi Muhammad Saw. (Al-Amin) adalah ...\n(1) Mengembalikan uang kembalian jajan yang berlebih kepada ibu kantin\n(2) Mengerjakan soal asesmen dengan kemampuan sendiri tanpa menyontek\n(3) Menitipkan kesalahan sendiri kepada teman sebangku agar tidak ditegur\n(4) Menyampaikan pesan dari guru kepada orang tua di rumah dengan jujur',
    pilihan: ['(1), (2), dan (3)', '(1), (2), dan (4)', '(2), (3), dan (4)', '(1), (3), dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Mengembalikan kelebihan uang, jujur saat ujian, dan menyampaikan amanah guru secara apa adanya adalah wujud sifat amanah.',
  },
  {
    id: 'pai5-q35',
    topik: 'Sifat Kepemimpinan Nabi Muhammad Saw.',
    tp: 'TP 5',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Sebutkan tiga sifat teladan kepemimpinan Nabi Muhammad Saw. saat memimpin masyarakat Madinah yang dapat kamu praktikkan ketika menjadi ketua kelompok atau ketua kelas!',
    pilihan: [
      'Suka memerintah keras, menutup pendapat teman, dan memilih kelompok sendiri',
      'Jujur/amanah dalam tugas, bersikap adil dan bijaksana kepada semua anggota, serta mengutamakan musyawarah dengan penuh kasih sayang',
      'Mengerjakan seluruh tugas seorang diri tanpa melibatkan teman lainnya',
      'Mengutamakan teman dekat saja ketika membagi jadwal piket kelas',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Kepemimpinan Rasulullah Saw. ditandai sifat amanah (terpercaya), adil tanpa memihak, serta selalu bermusyawarah dan lemah lembut terhadap sesama.',
  },
];
