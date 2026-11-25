import type { QuizQuestion } from './types.ts';

/**
 * Bahasa Inggris Kelas 6 — 35 Soal Baru (TP 1: 12, TP 2: 12, TP 3: 11)
 * Proporsi indikator: 10 Pilihan Ganda, 10 PGK (adaptasi), 10 Isian Singkat, 5 Uraian
 */
export const BINGGRIS_KELAS6_SOAL: QuizQuestion[] = [
  // TP 1 — Describing Vegetables, Hygiene Habits & Order Activities (12 soal)
  {
    id: 'en6-q01',
    topik: 'Describing Vegetables (Color & Shape)',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Read the clue: "This vegetable has bright orange color, grows underground, is crunchy, and contains lots of vitamin A for our eyes." Which vegetable is it?',
    pilihan: ['Eggplant', 'Carrot', 'Spinach', 'Bitter gourd'],
    jawabanBenar: 1,
    pembahasan:
      'Wortel ("carrot") berwarna oranye terang, tumbuh di dalam tanah, renyah, dan kaya vitamin A.',
  },
  {
    id: 'en6-q02',
    topik: 'Vegetable Characteristics (Purple Eggplant & Bitter Gourd)',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'An eggplant has smooth ... skin, while sweet corn has bright ... kernels.',
    pilihan: [
      'purple / yellow',
      'red / blue',
      'black / grey',
      'orange / purple',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Terung ("eggplant") berkulit ungu ("purple"), sedangkan jagung manis ("sweet corn") berbiji kuning ("yellow").',
  },
  {
    id: 'en6-q03',
    topik: 'Matching Vegetables & Descriptions',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Which vegetable descriptions are TRUE?\n(1) Lettuce is green with curly leaves used in fresh salads.\n(2) Bitter gourd (pare) has bumpy green skin and tastes bitter.\n(3) Spinach is a purple root vegetable that tastes very salty.\n(4) Broccoli looks like a small green tree.\nCorrect descriptions:',
    pilihan: [
      '(1), (2), and (3)',
      '(1), (2), and (4)',
      '(2) and (3) only',
      '(3) and (4) only',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Spinach (bayam) adalah sayuran daun hijau, bukan umbi ungu asin. Nomor (1), (2), dan (4) tepat.',
  },
  {
    id: 'en6-q04',
    topik: 'Adverbs of Frequency in Hygiene Habits',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Bima washes his hands with soap before EVERY single meal without missing a day. Which frequency word best describes his habit?',
    pilihan: ['Never', 'Sometimes', 'Always', 'Rarely'],
    jawabanBenar: 2,
    pembahasan: '"Always" (selalu) menunjukkan kebiasaan yang dilakukan 100% setiap saat.',
  },
  {
    id: 'en6-q05',
    topik: 'Comparing Frequency Habits',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Read Sinta’s weekly schedule: She always brushes her teeth twice a day, usually tidies her bedroom before school, and sometimes helps trim the garden flowers on weekends. Which activity does Sinta do LESS often than tidying her bedroom?',
    pilihan: [
      'Brushing her teeth',
      'Tidying her bedroom every morning',
      'Trimming the garden flowers',
      'Sleeping at night',
    ],
    jawabanBenar: 2,
    pembahasan:
      '"Sometimes" (kadang-kadang) lebih jarang daripada "usually" (biasanya) maupun "always" (selalu).',
  },
  {
    id: 'en6-q06',
    topik: 'Healthy Daily Habits Checklist',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Which sentences show GOOD personal hygiene habits?\n(1) Rani always takes a shower twice a day.\n(2) Edo usually cuts his fingernails once a week.\n(3) Tono never washes his dirty hands after playing mud.\n(4) Maya always covers her mouth when coughing.\nCorrect statements:',
    pilihan: [
      '(1), (2), and (3)',
      '(1), (2), and (4)',
      '(2) and (3) only',
      '(3) and (4) only',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Mandi 2× sehari, memotong kuku rutin, dan menutup mulut saat batuk adalah kebiasaan higienis; tidak mencuci tangan justru tidak sehat.',
  },
  {
    id: 'en6-q07',
    topik: 'Order Activities Connectors',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'To explain the LAST step of washing hands properly, we use the connector: "..., dry your hands with a clean towel."',
    pilihan: ['First', 'Next', 'Then', 'Finally'],
    jawabanBenar: 3,
    pembahasan:
      '"Finally" berarti terakhir/pada langkah penutup, sedangkan "First" untuk langkah awal.',
  },
  {
    id: 'en6-q08',
    topik: 'Ordering Handwashing Routine',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Arrange these hygiene steps in the correct order:\n(1) Finally, rinse with clean water and dry with a towel.\n(2) First, wet both hands under running water.\n(3) Next, rub soap between your fingers for 20 seconds.\nThe correct sequence is ...',
    pilihan: [
      '2 – 3 – 1',
      '1 – 2 – 3',
      '3 – 2 – 1',
      '2 – 1 – 3',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Urutan: First (2) membasahi tangan → Next (3) menggosok sabun → Finally (1) membilas dan mengeringkan.',
  },
  {
    id: 'en6-q09',
    topik: 'Reading a Vegetable Soup Procedure',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Read the recipe note: "First, wash the carrots and broccoli. Next, cut them into bite-sized pieces. Then, boil them in vegetable broth for ten minutes. Finally, add a pinch of salt and serve warm." Which statements match the text?\n(1) You wash the vegetables before cutting them.\n(2) You boil the carrots and broccoli in vegetable broth.\n(3) You add salt at the very beginning before washing.\n(4) You serve the soup while it is warm.\nMatching statements:',
    pilihan: [
      '(1), (2), and (3)',
      '(1), (2), and (4)',
      '(2) and (3) only',
      '(3) and (4) only',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Garam ditambahkan pada langkah terakhir ("Finally"), bukan di awal. Pernyataan (1), (2), dan (4) sesuai teks.',
  },
  {
    id: 'en6-q10',
    topik: 'Reading Visual Poster on Healthy School',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'A school canteen poster shows: "Eat 2 servings of vegetables every lunch and 3 servings of fruit every day." How many servings of vegetables and fruit are recommended in 2 days?',
    pilihan: ['5 servings', '8 servings', '10 servings', '12 servings'],
    jawabanBenar: 2,
    pembahasan: '1 hari = 2 + 3 = 5 porsi. Untuk 2 hari = 2 × 5 = 10 servings.',
  },
  {
    id: 'en6-q11',
    topik: 'Writing Order Activities for Brushing Teeth',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Which short paragraph describes the correct sequence of brushing teeth using First, Next, Then, and Finally?',
    pilihan: [
      'First, put toothpaste on your wet toothbrush. Next, brush all teeth gently in circles. Then, rinse your mouth with clean water. Finally, wash your toothbrush and put it back.',
      'First, rinse your toothbrush and go to sleep. Next, eat candy. Finally, put toothpaste on your shoes.',
      'Finally, wet the toothbrush. Next, wash the floor. First, eat sweet corn.',
      'First, swallow the toothpaste. Then, forget to brush your back teeth.',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Urutan langkah memakai penanda First–Next–Then–Finally runtut, logis, dan menggunakan kosakata kebersihan gigi yang tepat.',
  },
  {
    id: 'en6-q12',
    topik: 'Designing a Healthy Eating Recommendation',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Fajar rarely eats green vegetables and often feels tired. Which two healthy vegetable habits should he start practicing?\n(1) Always add spinach or broccoli to his lunch plate.\n(2) Try sweet corn soup or crunchy carrot sticks as healthy snacks.\n(3) Never drink clean water after exercising.\n(4) Eat only fried sweets every morning and night.\nBest choices:',
    pilihan: ['(1) and (2)', '(1) and (3)', '(2) and (4)', '(3) and (4)'],
    jawabanBenar: 0,
    pembahasan:
      'Membiasakan makan bayam, brokoli, jagung manis, dan wortel kaya vitamin membuat tubuh lebih bugar.',
  },

  // TP 2 — Simple Past Tense (Regular & Irregular) & Text Interpretation (12 soal)
  {
    id: 'en6-q13',
    topik: 'Regular Verbs in Simple Past',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Yesterday morning, the sixth-grade students ... the school garden together.',
    pilihan: ['clean', 'cleans', 'cleaned', 'cleaning'],
    jawabanBenar: 2,
    pembahasan:
      'Keterangan waktu "Yesterday morning" menandakan Simple Past Tense, sehingga regular verb "clean" menjadi "cleaned".',
  },
  {
    id: 'en6-q14',
    topik: 'Irregular Verb: Go → Went',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Last Sunday, my family ... to a vegetable farm in Batu to pick fresh carrots.',
    pilihan: ['go', 'goes', 'went', 'goed'],
    jawabanBenar: 2,
    pembahasan: 'Bentuk lampau (Verb 2) dari kata kerja tak beraturan "go" adalah "went".',
  },
  {
    id: 'en6-q15',
    topik: 'Irregular Verb: Buy → Bought',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Two days ago, Mother ... two heads of lettuce and some purple eggplants from Mrs. Sari’s stall.',
    pilihan: ['buy', 'bought', 'buyed', 'buys'],
    jawabanBenar: 1,
    pembahasan: 'Verb 2 dari "buy" (irregular verb) adalah "bought".',
  },
  {
    id: 'en6-q16',
    topik: 'Distinguishing Regular & Irregular Past Verbs',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Look at these Verb 1 → Verb 2 pairs:\n(1) sweep → swept (Irregular)\n(2) eat → ate (Irregular)\n(3) cook → cooked (Regular)\n(4) drink → drinked (Regular)\nWhich pairs are CORRECT?',
    pilihan: [
      '(1), (2), and (3)',
      '(1), (2), and (4)',
      '(2) and (4) only',
      '(3) and (4) only',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Bentuk lampau "drink" yang benar adalah "drank" (irregular), bukan "drinked". Nomor (1), (2), dan (3) benar.',
  },
  {
    id: 'en6-q17',
    topik: 'Reading a Past Hygiene Project Recount',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Read the text: "Last Friday, Class 6 held a Clean Classroom Day. First, the boys swept the floor and emptied the trash bins. Next, the girls wiped the windows and arranged the bookshelves. Finally, Mr. Andi checked our room and praised our teamwork." Why did Mr. Andi praise the students?',
    pilihan: [
      'Because they finished all cleaning tasks together neatly',
      'Because they left the windows dusty',
      'Because they played football inside the classroom',
      'Because nobody came to school on Friday',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Teks menyatakan siswa menyapu, mengosongkan tempat sampah, mengelap kaca, dan menata rak buku sehingga guru memuji kerja sama mereka.',
  },
  {
    id: 'en6-q18',
    topik: 'Time Markers in Simple Past',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Which time expressions signal the use of Simple Past Tense?\n(1) yesterday afternoon\n(2) last week\n(3) three days ago\n(4) tomorrow morning\nCorrect answers:',
    pilihan: [
      '(1), (2), and (3)',
      '(1), (2), and (4)',
      '(2) and (4) only',
      '(3) and (4) only',
    ],
    jawabanBenar: 0,
    pembahasan:
      '"Tomorrow morning" merujuk waktu yang akan datang (Future), sedangkan yesterday, last week, dan ago menunjukkan masa lampau.',
  },
  {
    id: 'en6-q19',
    topik: 'Interpreting Past Cooking Experience',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      '"Last Saturday, Nita helped her aunt make corn soup. She peeled the corn, sliced the carrots, and stirred the pot carefully. She felt very proud when her father said it was delicious." How did Nita feel at the end?',
    pilihan: ['Sleepy', 'Angry', 'Proud', 'Scared'],
    jawabanBenar: 2,
    pembahasan: 'Kalimat terakhir berbunyi "She felt very proud" (ia merasa sangat bangga).',
  },
  {
    id: 'en6-q20',
    topik: 'Negative Simple Past Form',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Change this sentence into the negative past form: "Rafi ate the bitter gourd yesterday."',
    pilihan: [
      'Rafi did not ate the bitter gourd yesterday.',
      'Rafi did not eat the bitter gourd yesterday.',
      'Rafi does not eat the bitter gourd yesterday.',
      'Rafi was not eat the bitter gourd yesterday.',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Setelah kata bantu lampau "did not", kata kerja kembali ke bentuk dasar (Verb 1): "did not eat".',
  },
  {
    id: 'en6-q21',
    topik: 'Comprehending Past Class Survey Text',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Read the report: "Last month, our class planted 20 spinach pots and 15 carrot pots in the school garden. Sadly, 5 spinach pots dried because of heavy caterpillars, while all carrot pots grew well." Which statements are TRUE?\n(1) The class planted 35 vegetable pots in total at first.\n(2) 15 spinach pots survived and stayed healthy.\n(3) All carrot pots failed to grow.\n(4) Caterpillars damaged 5 spinach pots.\nTrue statements:',
    pilihan: [
      '(1), (2), and (3)',
      '(1), (2), and (4)',
      '(2) and (3) only',
      '(3) and (4) only',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Total awal = 20 + 15 = 35 pot. Bayam tersisa = 20 - 5 = 15 pot. Semua pot wortel tumbuh baik ("grew well").',
  },
  {
    id: 'en6-q22',
    topik: 'Past Tense Question Form',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Complete the past question: "... you wash your sports shoes last weekend?" "Yes, I did."',
    pilihan: ['Do', 'Does', 'Did', 'Were'],
    jawabanBenar: 2,
    pembahasan:
      'Pertanyaan Simple Past dengan kata kerja aksi ("wash") diawali "Did" dan dijawab "Yes, I did."',
  },
  {
    id: 'en6-q23',
    topik: 'Combining Past Actions with Sequence Words',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Which short recount paragraph correctly combines Simple Past Tense verbs AND order connectors about yesterday’s school activity?',
    pilihan: [
      'Yesterday, we joined a healthy lunch program. First, we washed our hands cleanly. Next, we ate rice, spinach, and grilled fish. Finally, we threw our organic leftovers into the green bin.',
      'Yesterday, we join a healthy lunch program. First, we wash hands. Next, we eating fish tomorrow.',
      'Tomorrow, we washed our hands and bought carrots last week.',
      'First, I swept the yard next month. Finally, I go to the farm yesterday.',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Paragraf A konsisten memakai Verb 2 (joined, washed, ate, threw) serta penanda urutan First–Next–Finally dengan tepat.',
  },
  {
    id: 'en6-q24',
    topik: 'Identifying Errors in Past Tense Writing',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Look at Lina’s diary draft:\n"Last Sunday I (1) went to the market with Mom. We (2) buyed fresh broccoli and (3) washed them at home. Then Mom (4) cooked soup for lunch."\nWhich verb numbers are ALREADY CORRECT, and which one needs fixing?',
    pilihan: [
      '(1), (3), and (4) are correct; (2) should be "bought"',
      '(2), (3), and (4) are correct; (1) should be "goed"',
      'All four verbs are already correct',
      '(1) and (2) are correct; (3) should be "washes"',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Went, washed, dan cooked sudah benar; kata kerja tak beraturan "buy" bentuk lampaunya adalah "bought" (bukan "buyed").',
  },

  // TP 3 — Expressing Like/Dislike, Oral Reports & Survey Evaluation (11 soal)
  {
    id: 'en6-q25',
    topik: 'Expressing Strong Like',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Dina eats sweet corn soup happily every week. Which expression shows she likes it very much?',
    pilihan: [
      '"I really love sweet corn soup because it tastes sweet and warm."',
      '"I cannot stand sweet corn soup at all."',
      '"I am sorry, I dislike sweet corn."',
      '"Never cook sweet corn again!"',
    ],
    jawabanBenar: 0,
    pembahasan: '"I really love..." atau "I really enjoy..." menyatakan kesukaan yang kuat.',
  },
  {
    id: 'en6-q26',
    topik: 'Polite Dislike Expression',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Your classmate offers you fried bitter gourd, which you do not like. How should you refuse it politely in English?',
    pilihan: [
      '"Yuck! Take that awful food away from me!"',
      '"No thank you, I’m sorry I dislike bitter gourd because it is too bitter for me."',
      '"Why did you bring ugly vegetables here?"',
      '"I love eating bitter gourd every morning!"',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Menolak sopan diawali "No thank you / I’m sorry", diikuti "I dislike..." beserta alasan yang wajar.',
  },
  {
    id: 'en6-q27',
    topik: 'Using Like/Love/Enjoy + Verb-ing',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Complete the sentence: "My brother and I enjoy ... fresh vegetables in our backyard every morning."',
    pilihan: ['water', 'waters', 'watering', 'watered'],
    jawabanBenar: 2,
    pembahasan:
      'Setelah kata kerja "enjoy", kata kerja aktivitas mengikuti bentuk -ing ("enjoy watering").',
  },
  {
    id: 'en6-q28',
    topik: 'Oral Report on Past Hygiene Routine',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'When giving a short spoken report about how you kept your room clean yesterday, which sentences belong in the report?\n(1) Good morning friends, I want to tell you about my room cleanup yesterday.\n(2) First, I made my bed and folded my blanket neatly.\n(3) Next, I swept the floor and wiped my study desk.\n(4) Tomorrow, I will go to the beach in Bali.\nSentences that belong:',
    pilihan: [
      '(1), (2), and (3)',
      '(1), (2), and (4)',
      '(2) and (4) only',
      '(3) and (4) only',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Laporan lisan harus tetap sesuai topik kebersihan kamar kemarin, bukan rencana liburan ke pantai.',
  },
  {
    id: 'en6-q29',
    topik: 'Interpreting Class Vegetable Survey',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'In a class of 40 students, a vegetable survey shows: 18 students love carrots, 12 students love spinach, 6 students love sweet corn, and the rest love broccoli. How many students love broccoli?',
    pilihan: ['2 students', '4 students', '6 students', '8 students'],
    jawabanBenar: 1,
    pembahasan: '40 - (18 + 12 + 6) = 40 - 36 = 4 students love broccoli.',
  },
  {
    id: 'en6-q30',
    topik: 'Calculating Percentage in Survey Report',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Out of 25 students in Class 6B, 20 students always wash their hands before eating snacks, while 5 students sometimes forget. What percentage of students ALWAYS wash their hands?',
    pilihan: ['60%', '75%', '80%', '85%'],
    jawabanBenar: 2,
    pembahasan: '(20 ÷ 25) × 100% = (4/5) × 100% = 80%.',
  },
  {
    id: 'en6-q31',
    topik: 'Evaluating Survey Conclusions',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Based on a survey of 30 students: 15 like carrots, 9 like broccoli, 4 like eggplant, and 2 like bitter gourd.\nWhich conclusions are TRUE?\n(1) Carrot is the most popular vegetable in the class (50%).\n(2) Bitter gourd is the least favorite vegetable.\n(3) More students like eggplant than broccoli.\n(4) Half of the surveyed students chose carrots.\nTrue conclusions:',
    pilihan: [
      '(1), (2), and (3)',
      '(1), (2), and (4)',
      '(2) and (3) only',
      '(3) and (4) only',
    ],
    jawabanBenar: 1,
    pembahasan:
      '15 dari 30 siswa = 50% (setengah kelas) menyukai wortel, pare paling sedikit (2), dan brokoli (9) lebih banyak daripada terung (4).',
  },
  {
    id: 'en6-q32',
    topik: 'Agreeing & Disagreeing Politely on Food Choices',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Beni says, "I love steamed broccoli with a little salt!" What is a friendly and natural response if you also like broccoli?',
    pilihan: [
      '"Me too! Broccoli is crunchy and super healthy."',
      '"No, I hate you because of broccoli."',
      '"Yesterday I swept my bedroom floor."',
      '"How much is the post office?"',
    ],
    jawabanBenar: 0,
    pembahasan: '"Me too!" menyatakan kesamaan kesukaan dengan ramah.',
  },
  {
    id: 'en6-q33',
    topik: 'Spoken Presentation Structure',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'At the end of an oral presentation in English, what polite sentence should a student say to close the report?',
    pilihan: [
      '"Sit down and stop talking!"',
      '"That is all from my report. Thank you for listening!"',
      '"I forgot everything I wrote."',
      '"Go straight and turn left."',
    ],
    jawabanBenar: 1,
    pembahasan: 'Menutup presentasi dengan ucapan terima kasih ("Thank you for listening!") menunjukkan kesopanan.',
  },
  {
    id: 'en6-q34',
    topik: 'Presenting Survey Findings & Solution',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Your group surveyed 20 friends and found that only 6 students eat green vegetables daily because many dislike plain boiled spinach. How should your group report the finding AND suggest a kid-friendly solution?',
    pilihan: [
      '"Only 30% of students eat green vegetables daily. We suggest cooking spinach into crispy snacks or mixing sweet corn into vegetable soup so students enjoy it."',
      '"Everyone hates vegetables so the school canteen should sell only sweet soda."',
      '"100% of students ate bitter gourd yesterday."',
      '"We threw away the survey paper because spinach is green."',
    ],
    jawabanBenar: 0,
    pembahasan:
      '6 dari 20 siswa = 30%. Menyampaikan data akurat disertai ide penyajian sayuran yang lebih menarik menjawab masalah survei dengan kreatif.',
  },
  {
    id: 'en6-q35',
    topik: 'Comparing Personal Habits in Oral Dialogue',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'In a pair dialogue about healthy weekend activities, which exchange accurately uses Simple Past Tense AND Expressing Like/Dislike?',
    pilihan: [
      'A: "What did you do last Sunday?" B: "I helped Mom plant carrots and lettuce. I really enjoyed gardening, though I dislike pulling sticky weeds!"',
      'A: "What do you did tomorrow?" B: "I go to plant carrots yesterday and I hated everything."',
      'A: "How many water did you ate?" B: "Yes, I brushed my shoes."',
      'A: "Where is the broccoli?" B: "Last week I am sleeping."',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Dialog A tepat menggunakan Past Tense ("did you do", "helped", "enjoyed") dan ekspresi suka/tidak suka ("really enjoyed...", "dislike...").',
  },
];

/**
 * KKA Kelas 6 — 35 Soal Baru (TP 1: 12, TP 2: 12, TP 3: 11)
 * Proporsi indikator: 10 Pilihan Ganda, 10 PGK (adaptasi), 10 Isian Singkat, 5 Uraian
 */
export const KKA_KELAS6_SOAL: QuizQuestion[] = [
  // TP 1 — Berpikir Algoritmis, Pemrograman Blok & Debugging (12 soal)
  {
    id: 'kka6-q01',
    topik: 'Pengertian Bug dan Debugging',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Saat membuat gim sederhana di aplikasi pemrograman blok, skor pemain justru berkurang setiap kali menangkap koin emas. Proses mencari penyebab kesalahan kode tersebut dan memperbaikinya dinamakan ...',
    pilihan: ['Compiling', 'Debugging', 'Downloading', 'Uploading'],
    jawabanBenar: 1,
    pembahasan:
      'Kesalahan pada program disebut "bug", sedangkan proses melacak dan memperbaiki bug disebut "debugging".',
  },
  {
    id: 'kka6-q02',
    topik: 'Kategori Blok Events pada Scratch',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Blok perintah "Ketika bendera hijau diklik" (When green flag clicked) atau "Ketika tombol spasi ditekan" termasuk kategori blok pemicu bernama ...',
    pilihan: ['Motion (Gerak)', 'Events (Kejadian)', 'Looks (Tampilan)', 'Sound (Suara)'],
    jawabanBenar: 1,
    pembahasan:
      'Blok Events berfungsi sebagai pemicu kapan sekumpulan blok program mulai dijalankan.',
  },
  {
    id: 'kka6-q03',
    topik: 'Koordinat X pada Panggung Animasi',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Sebuah sprite kucing berada di koordinat horizontal X = -40. Jika kucing menjalankan blok "Ubah x sebesar 75" (Change x by 75), di posisi X berapakah kucing itu sekarang?',
    pilihan: ['X = -115', 'X = 35', 'X = 45', 'X = 115'],
    jawabanBenar: 1,
    pembahasan: 'Posisi X baru = -40 + 75 = 35 (bergeser 75 langkah ke kanan).',
  },
  {
    id: 'kka6-q04',
    topik: 'Sudut Putar Menggambar Persegi dengan Repeat',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Untuk menggambar bangun persegi sempurna menggunakan pena di pemrograman blok, susunan blok perulangan yang paling ringkas dan benar adalah ...',
    pilihan: [
      'Ulangi 4 kali [Maju 80 langkah, Putar kanan 90 derajat]',
      'Ulangi 3 kali [Maju 80 langkah, Putar kanan 60 derajat]',
      'Ulangi 4 kali [Maju 80 langkah, Putar kanan 45 derajat]',
      'Ulangi 2 kali [Maju 80 langkah, Putar kanan 180 derajat]',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Persegi memiliki 4 sisi sama panjang dan 4 sudut siku-siku (4 × 90° = 360°), jadi cukup diulang 4 kali.',
  },
  {
    id: 'kka6-q05',
    topik: 'Fungsi Kategori Blok Scratch',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Cocokkan kategori blok pemrograman dengan fungsinya:\n(1) Motion → menggerakkan posisi dan arah hadap sprite.\n(2) Looks → menampilkan balon teks "Halo!" dan mengganti kostum.\n(3) Sound → memainkan efek bunyi atau musik latar.\n(4) Wait (Tunggu) → menghapus seluruh proyek secara permanen.\nPasangan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Wait (di kategori Control) memberi jeda waktu sebelum blok berikutnya berjalan, bukan menghapus proyek.',
  },
  {
    id: 'kka6-q06',
    topik: 'Menghitung Total Jarak & Sudut Blok Repeat',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Sprite menjalankan blok: "Ulangi 6 kali [Maju 15 langkah, Putar kiri 60 derajat]". Berapa total langkah maju dan total sudut putarnya?',
    pilihan: [
      '60 langkah dan 180 derajat',
      '90 langkah dan 360 derajat',
      '75 langkah dan 300 derajat',
      '120 langkah dan 360 derajat',
    ],
    jawabanBenar: 1,
    pembahasan: 'Total langkah = 6 × 15 = 90 langkah. Total sudut = 6 × 60° = 360°.',
  },
  {
    id: 'kka6-q07',
    topik: 'Debugging Urutan Gerak Robot Petak',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Robot di petak (0,0) menghadap ke kanan. Target berada 2 petak di kanan lalu 2 petak ke atas (2,2), dan ada batu di petak (0,2). Programmer salah menulis: "Maju 2, Putar Kiri 90°, Maju 1". Apa perbaikan debugging agar tepat mencapai (2,2)?',
    pilihan: [
      'Ubah perintah terakhir "Maju 1" menjadi "Maju 2"',
      'Ubah Putar Kiri 90° menjadi Putar Kanan 90°',
      'Hapus perintah Maju 2 di awal program',
      'Tambahkan Putar 180° di akhir program',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Maju 2 ke kanan sampai (2,0), putar kiri menghadap atas, lalu butuh Maju 2 (bukan Maju 1) untuk mencapai (2,2).',
  },
  {
    id: 'kka6-q08',
    topik: 'Blok Wait untuk Dialog Bergantian',
    tp: 'TP 1',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Dua karakter animasi berbicara bersamaan sehingga balon kata mereka saling bertumpuk saat bendera hijau diklik. Solusi paling tepat adalah ...',
    pilihan: [
      'Menambahkan blok "Tunggu (Wait)" sebelum karakter kedua mulai berbicara',
      'Menghapus seluruh latar belakang panggung animasi',
      'Mempercepat gerak karakter hingga keluar layar',
      'Mengganti semua teks dengan suara bising',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Blok Wait menyinkronkan waktu giliran dialog antar-karakter agar tidak bertumpuk.',
  },
  {
    id: 'kka6-q09',
    topik: 'Analisis Blok Kondisi (If-Then)',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan skrip gim: "Selamanya (Forever): Jika menyentuh warna merah maka ucapkan \'Awas lava!\' selama 1 detik dan kembali ke posisi awal (0,0)." Apa saja akibat yang terjadi jika pemain menyentuh rintangan merah?\n(1) Muncul teks "Awas lava!" selama 1 detik.\n(2) Karakter otomatis kembali ke titik awal (0,0).\n(3) Pemain langsung menang dengan skor +1000.\n(4) Pengecekan kondisi terus berjalan selama gim dimainkan karena memakai Forever.\nPernyataan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Blok Forever mengecek kondisi If secara terus-menerus; jika menyentuh merah, muncul peringatan dan posisi di-reset ke (0,0).',
  },
  {
    id: 'kka6-q10',
    topik: 'Unplugged Coding Jalur Bebas Rintangan',
    tp: 'TP 1',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Dalam latihan unplugged coding papan 4×4, bidak start di pojok kiri bawah menghadap ke atas menuju bendera di baris yang sama dua petak di kanan, namun 1 petak tepat di kanan bidak berisi lubang. Jalur aman tanpa jatuh ke lubang adalah ...\n(1) Maju 1, Putar kanan 90°, Maju 2, Putar kanan 90°, Maju 1.\n(2) Putar kanan 90°, Maju 2 langsung dari start.\n(3) Maju 2, Putar kanan 90°, Maju 2, Putar kanan 90°, Maju 2.\n(4) Diam di tempat tanpa menjalankan perintah apa pun.\nJalur yang berhasil mencapai bendera adalah ...',
    pilihan: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)'],
    jawabanBenar: 1,
    pembahasan:
      'Jalur (2) langsung melangkah ke kanan melewati lubang; jalur (1) dan (3) naik memutar di atas lubang lalu turun tepat ke petak tujuan.',
  },
  {
    id: 'kka6-q11',
    topik: 'Efisiensi Blok Repeat vs Penulisan Manual',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Mengapa pemrogram lebih disarankan memakai blok "Repeat 10" untuk langkah berjalan berulang daripada menyusun 10 blok "Maju 10 langkah" yang sama satu per satu?',
    pilihan: [
      'Karena kode menjadi jauh lebih ringkas, mudah dibaca, hemat ruang layar, dan lebih cepat diubah atau di-debug bila jaraknya perlu diganti',
      'Karena blok Repeat membuat komputer tidak butuh listrik sama sekali',
      'Karena menyusun blok maju lebih dari dua kali dilarang oleh internet',
      'Karena blok Repeat otomatis menggambar foto pemandangan',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Perulangan (loop/repeat) membuat program ringkas, rapi, dan mudah diperbarui tanpa mengedit banyak baris berulang.',
  },
  {
    id: 'kka6-q12',
    topik: 'Menemukan Bug pada Animasi Melompat',
    tp: 'TP 1',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Saat tombol spasi ditekan, karakter melompat naik (Ubah y sebesar +50), tetapi langsung melayang di udara dan tidak pernah turun kembali ke tanah. Kode apa yang terlupa ditambahkan?',
    pilihan: [
      'Blok tunggu sebentar lalu "Ubah y sebesar -50" agar karakter turun kembali ke posisi tanah semula',
      'Blok "Ubah x sebesar +50" agar karakter terbang ke kanan layar',
      'Blok "Putar 180 derajat" tanpa mengubah tinggi Y',
      'Blok "Hentikan semua suara" di bagian paling atas',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Gerak vertikal naik (+50 pada sumbu Y) harus diimbangi turun (-50 pada sumbu Y) setelah jeda singkat agar tampak melompat wajar.',
  },

  // TP 2 — Cara Kerja Internet, Ukuran Data & Konten Digital (12 soal)
  {
    id: 'kka6-q13',
    topik: 'Cara Kerja Paket Data di Internet',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Ketika kita mengirim sebuah foto atau dokumen tugas melalui internet kepada guru, bagaimana cara jaringan internet mengirimkan file tersebut?',
    pilihan: [
      'File dikirim langsung secara utuh melalui kabel udara tanpa dipecah',
      'File dipecah menjadi paket-paket data kecil di pengirim, melewati rute jaringan, lalu disusun kembali secara utuh di perangkat penerima',
      'File dicetak di kantor pos lalu dikirim memakai kurir sepeda',
      'File dihapus di perangkat pengirim lalu diketik ulang oleh penerima',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Internet memecah file menjadi paket-paket data kecil agar pengiriman cepat, efisien, dan andal sebelum disatukan kembali di tujuan.',
  },
  {
    id: 'kka6-q14',
    topik: 'Aktivitas Online vs Offline',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Manakah aktivitas yang masih DAPAT dilakukan secara OFFLINE (tanpa koneksi internet)?\n(1) Mengetik cerita di aplikasi pengolah kata yang sudah terpasang di laptop.\n(2) Menggambar ilustrasi poster di aplikasi gambar lokal.\n(3) Melakukan panggilan video langsung dengan teman di kota lain.\n(4) Membuka file modul PDF yang sebelumnya sudah diunduh dan disimpan di perangkat.\nAktivitas offline yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Panggilan video real-time wajib memakai koneksi internet (online), sedangkan mengetik, menggambar lokal, dan membaca file tersimpan bisa offline.',
  },
  {
    id: 'kka6-q15',
    topik: 'Menghitung Waktu Unduh File (MB)',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Kecepatan unduh internet di ruang komputer sekolah adalah 6 MB/detik. Siswa mengunduh video pembelajaran sebesar 72 MB dan gambar infografis sebesar 18 MB. Berapa detik total waktu unduhnya?',
    pilihan: ['12 detik', '15 detik', '18 detik', '24 detik'],
    jawabanBenar: 1,
    pembahasan: 'Total ukuran file = 72 + 18 = 90 MB. Waktu = 90 MB ÷ 6 MB/detik = 15 detik.',
  },
  {
    id: 'kka6-q16',
    topik: 'Menghitung Sisa Kapasitas Cloud Storage',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Akun penyimpanan awan (cloud storage) kelas memiliki kapasitas total 2.000 MB. Sudah terpakai 650 MB untuk foto kegiatan dan 450 MB untuk video dokumentasi. Berapa MB sisa ruang penyimpanan yang masih tersedia?',
    pilihan: ['800 MB', '900 MB', '1.000 MB', '1.100 MB'],
    jawabanBenar: 1,
    pembahasan: 'Sudah terpakai = 650 + 450 = 1.100 MB. Sisa ruang = 2.000 - 1.100 = 900 MB.',
  },
  {
    id: 'kka6-q17',
    topik: 'Fungsi Storyboard dalam Konten Video',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Rangkaian sketsa gambar adegan demi adegan lengkap dengan catatan dialog sebelum memproduksi video atau animasi disebut ...',
    pilihan: ['Storyboard (papan cerita)', 'Firewall', 'Phishing', 'Spreadsheet'],
    jawabanBenar: 0,
    pembahasan:
      'Storyboard berfungsi sebagai cetak biru visual agar alur video atau animasi terarah dan teratur.',
  },
  {
    id: 'kka6-q18',
    topik: 'Mengenal Infografis Edukatif',
    tp: 'TP 2',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Karya konten digital yang menyajikan data atau informasi penting dengan memadukan teks ringkas, ikon, grafik, dan ilustrasi warna agar mudah dipahami sekilas disebut ...',
    pilihan: ['Infografis', 'Password', 'Antivirus', 'Browser'],
    jawabanBenar: 0,
    pembahasan:
      'Infografis (informasi grafis) memudahkan pembaca memahami data atau langkah edukatif secara visual.',
  },
  {
    id: 'kka6-q19',
    topik: 'Ciri Poster & Konten Digital Edukatif',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Manakah prinsip desain yang membuat sebuah poster digital edukasi mudah dibaca siswa di layar ponsel?\n(1) Judul besar dengan warna teks yang kontras terhadap latar belakang.\n(2) Kalimat pesan singkat, padat, dan langsung pada inti informasi.\n(3) Menumpuk 20 paragraf tulisan rapat tanpa gambar agar terlihat penuh.\n(4) Memilih ilustrasi relevan dengan tema pesan.\nPrinsip yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Poster digital efektif menggunakan kontras warna jelas, teks singkat, dan gambar relevan; paragraf bertumpuk justru sulit dibaca.',
  },
  {
    id: 'kka6-q20',
    topik: 'Menghitung Durasi Total Slide Presentasi',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Kelompok Rina membuat video presentasi otomatis yang terdiri atas 1 slide pembuka (10 detik), 6 slide materi (masing-masing 20 detik), dan 1 slide penutup (10 detik). Berapa menit durasi total video presentasi tersebut?',
    pilihan: ['2 menit', '2 menit 20 detik', '2 menit 40 detik', '3 menit'],
    jawabanBenar: 1,
    pembahasan:
      'Total detik = 10 + (6 × 20) + 10 = 10 + 120 + 10 = 140 detik = 2 menit 20 detik.',
  },
  {
    id: 'kka6-q21',
    topik: 'Membandingkan Ukuran File Dokumen & Video',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Perhatikan ukuran empat file proyek kelas:\n- Poster.png = 3 MB\n- Laporan.pdf = 2 MB\n- VideoAksi.mp4 = 85 MB\n- AudioLatar.mp3 = 5 MB\nPernyataan yang benar tentang keempat file tersebut adalah ...\n(1) File VideoAksi.mp4 membutuhkan waktu kirim paling lama lewat internet.\n(2) Gabungan ukuran Poster, Laporan, dan Audio masih lebih kecil dari VideoAksi.mp4.\n(3) Total seluruh ukuran keempat file adalah 95 MB.\n(4) File Laporan.pdf memiliki ukuran paling besar.\nPernyataan yang benar adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      '3 + 2 + 5 = 10 MB (< 85 MB). Total semua file = 10 + 85 = 95 MB. Laporan.pdf justru yang paling kecil.',
  },
  {
    id: 'kka6-q22',
    topik: 'Peran Jaringan Sekolah & Akses Aman',
    tp: 'TP 2',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Saat mengunggah tugas infografis ke folder kelas bersama di internet, koneksi terputus di tengah jalan pada 40%. Apa yang sebaiknya dilakukan?',
    pilihan: [
      'Memeriksa sambungan Wi-Fi/internet terlebih dahulu lalu mengulang unggahan hingga 100% selesai',
      'Langsung mematikan komputer dengan mencabut kabel listriknya',
      'Menghapus file asli dari laptop agar ruang penyimpanan kosong',
      'Mengirimkan halaman kosong tanpa gambar kepada guru',
    ],
    jawabanBenar: 0,
    pembahasan:
      'File hanya tersimpan utuh jika seluruh paket data berhasil terkirim (100%), sehingga koneksi harus dicek dan diulang.',
  },
  {
    id: 'kka6-q23',
    topik: 'Merancang Storyboard Poster Kampanye Kebersihan',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Kamu diminta membuat video edukasi berdurasi 1 menit tentang cara memilah sampah organik dan anorganik. Mengapa menyusun storyboard berisi 4 adegan dulu sangat membantu sebelum merekam?',
    pilihan: [
      'Karena tim tahu urutan adegan, alat peraga yang disiapkan, dan pembagian durasi tiap adegan sehingga rekaman lancar tanpa mengulang-ulang',
      'Karena storyboard otomatis mengedit warna video menjadi hitam putih',
      'Karena tanpa storyboard file video tidak bisa disimpan di komputer',
      'Karena storyboard membuat durasi video berubah menjadi dua jam',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Perencanaan lewat storyboard mencegah adegan melenceng, menghemat waktu produksi, dan memastikan pesan tersampaikan urut.',
  },
  {
    id: 'kka6-q24',
    topik: 'Mengoptimalkan Ukuran File Tugas',
    tp: 'TP 2',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Batas maksimal unggah tugas di portal belajar adalah 10 MB, sementara file presentasi Sari berukuran 16 MB karena berisi 8 foto beresolusi sangat besar. Cara bijak mengecilkan ukuran file tanpa menghilangkan materi adalah ...\n(1) Mengompres/memperkecil ukuran resolusi foto agar lebih ringan.\n(2) Menghapus foto duplikat atau gambar hiasan yang tidak perlu.\n(3) Mengganti seluruh isi teks materi menjadi halaman kosong.\n(4) Menyimpannya sebagai PDF terkompresi jika hanya untuk dibaca.\nCara yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Kompresi gambar, membuang gambar tak perlu, dan ekspor PDF ringkas menjaga isi tetap utuh di bawah batas 10 MB.',
  },

  // TP 3 — Sikap Bijak Internet, Keamanan Data Pribadi & Anti-Phishing (11 soal)
  {
    id: 'kka6-q25',
    topik: 'Data Pribadi Rahasia vs Data Umum',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Kelompok informasi manakah yang termasuk DATA PRIBADI RAHASIA dan TIDAK BOLEH diunggah sembarangan di media sosial publik?',
    pilihan: [
      'Hobi menggambar dan warna kesukaan',
      'NIK kartu keluarga, alamat rumah lengkap, kode OTP, dan kata sandi (password)',
      'Nama buah kesukaan dan judul buku cerita favorit',
      'Jenis hewan peliharaan di kebun binatang kota',
    ],
    jawabanBenar: 1,
    pembahasan:
      'NIK, alamat detail, password, PIN, dan kode OTP bersifat sensitif karena dapat disalahgunakan penipu.',
  },
  {
    id: 'kka6-q26',
    topik: 'Ciri Kata Sandi (Password) Kuat',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Dari pilihan kata sandi di bawah ini, manakah yang paling KUAT dan sulit ditebak oleh orang lain maupun program peretas?',
    pilihan: ['12345678', 'Budi2015', 'P@ndi#Batu94!Kls6', 'password'],
    jawabanBenar: 2,
    pembahasan:
      'Kata sandi kuat memiliki minimal 12 karakter serta memadukan huruf besar, huruf kecil, angka, dan simbol unik.',
  },
  {
    id: 'kka6-q27',
    topik: 'Menghitung Panjang Karakter Kata Sandi',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Aturan keamanan akun sekolah mensyaratkan kata sandi minimal 12 karakter. Jika Riko baru mengetik kata sandi "Sipesat#6", berapa karakter tambahan paling sedikit yang harus ditambahkan Riko?',
    pilihan: ['2 karakter', '3 karakter', '4 karakter', '5 karakter'],
    jawabanBenar: 1,
    pembahasan: '"Sipesat#6" terdiri atas 9 karakter. Agar minimal 12, perlu tambah 12 - 9 = 3 karakter.',
  },
  {
    id: 'kka6-q28',
    topik: 'Etika Mengunggah Foto Teman',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Pilihan Ganda',
    pertanyaan:
      'Kamu memotret teman-teman saat lomba 17 Agustus dan ingin mengunggahnya ke media sosial keluarga. Sikap beretika digital yang benar adalah ...',
    pilihan: [
      'Langsung mengunggah foto yang memalukan tanpa bertanya agar lucu',
      'Meminta izin terlebih dahulu kepada teman yang ada di foto sebelum mengunggahnya',
      'Menambahkan nomor telepon rumah seluruh teman di keterangan foto',
      'Mengubah wajah teman dengan stiker mengejek',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Menghormati privasi orang lain dimulai dengan meminta izin sebelum membagikan foto mereka ke ruang publik.',
  },
  {
    id: 'kka6-q29',
    topik: 'Etika Hak Cipta & Mencantumkan Sumber',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Saat mengambil foto gunung atau grafik dari internet untuk tugas presentasi, sikap menghargai hak cipta penciptanya adalah dengan selalu menuliskan ...',
    pilihan: [
      'Nama kita sendiri seolah kita yang memotretnya',
      'Sumber situs atau nama pencipta asli gambar tersebut',
      'Harga laptop yang dipakai saat mengunduh',
      'Kata sandi akun email pribadi di bawah gambar',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Mencantumkan sumber atau kredit pencipta asli menghormati hak cipta dan menghindari plagiarisme.',
  },
  {
    id: 'kka6-q30',
    topik: 'Mengenali Ciri Pesan Phishing',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Waspadai pesan masuk mencurigakan! Ciri-ciri penipuan PHISHING ditunjukkan oleh nomor ...\n(1) Mengaku memberi hadiah besar atau mengancam akun akan diblokir segera dalam 5 menit.\n(2) Menyuruh mengeklik tautan (link) aneh yang bukan situs resmi.\n(3) Meminta kita mengetikkan PIN, password, atau kode OTP rahasia.\n(4) Pengumuman resmi di papan pengumuman sekolah yang ditandatangani kepala sekolah.\nCiri phishing yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (4) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Phishing selalu memancing kepanikan/keserakahan lewat link palsu untuk mencuri password, PIN, atau OTP.',
  },
  {
    id: 'kka6-q31',
    topik: 'Menjaga Rahasia Kode OTP',
    tp: 'TP 3',
    tingkatKesulitan: 'Mudah',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Kode rahasia sekali pakai berupa 4–6 angka yang dikirim lewat SMS untuk memastikan pemilik akun asli, dan tidak boleh dibagikan ke siapa pun termasuk yang mengaku petugas bank, disebut kode ...',
    pilihan: ['URL', 'OTP (One-Time Password)', 'PDF', 'GIF'],
    jawabanBenar: 1,
    pembahasan: 'OTP adalah kode verifikasi sekali pakai yang bersifat sangat rahasia.',
  },
  {
    id: 'kka6-q32',
    topik: 'Menghitung Kerugian Akibat Penipuan Online',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Isian Singkat',
    pertanyaan:
      'Seseorang tertipu mengeklik link phishing palsu sehingga saldo dompet digitalnya berkurang Rp125.000 pada transaksi pertama dan Rp85.000 pada transaksi kedua dari saldo awal Rp300.000. Berapa sisa saldo yang tertinggal?',
    pilihan: ['Rp80.000', 'Rp90.000', 'Rp110.000', 'Rp210.000'],
    jawabanBenar: 1,
    pembahasan: 'Total kerugian = 125.000 + 85.000 = Rp210.000. Sisa saldo = 300.000 - 210.000 = Rp90.000.',
  },
  {
    id: 'kka6-q33',
    topik: 'Etika Berkomentar & Anti-Cyberbullying',
    tp: 'TP 3',
    tingkatKesulitan: 'Sedang',
    bentukIndikator: 'Pilihan Ganda Kompleks',
    pertanyaan:
      'Aturan bersikap santun di grup chat kelas dan media sosial agar tetap aman dan damai adalah ...\n(1) Menggunakan kata-kata sopan dan tidak mengejek fisik maupun karya teman.\n(2) Memeriksa kebenaran berita terlebih dahulu sebelum meneruskannya agar tidak menyebar hoaks.\n(3) Mengirim pesan spam berulang puluhan kali saat teman sedang belajar.\n(4) Segera melapor kepada orang tua atau guru jika ada akun asing yang mengganggu.\nSikap yang tepat adalah ...',
    pilihan: [
      '(1), (2), dan (3)',
      '(1), (2), dan (4)',
      '(2) dan (3) saja',
      '(3) dan (4) saja',
    ],
    jawabanBenar: 1,
    pembahasan:
      'Santun berkomentar, cek fakta sebelum share, dan melapor ke orang dewasa saat terancam menjaga keamanan digital.',
  },
  {
    id: 'kka6-q34',
    topik: 'Langkah Pencegahan Saat Menemukan Link Phishing',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Di grup chat hobi gim, akun tak dikenal mengirim tautan: "Klaim 5.000 permata gratis! Login pakai email dan password akun orang tuamu di sini!" Langkah pencegahan berlapis apa yang paling tepat dilakukan?',
    pilihan: [
      'Jangan pernah mengeklik tautan, jangan masukkan password apa pun, beri tahu teman grup agar waspada, blokir pengirim, dan laporkan ke orang tua',
      'Segera klik tautan lalu masukkan password email milik sendiri saja',
      'Bagikan tautan tersebut ke semua guru dan teman sekolah',
      'Balas pesan dengan mengirimkan foto kartu pelajar dan alamat rumah',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Tidak mengeklik link mencurigakan, tidak membocorkan sandi, memperingatkan teman, dan melapor orang tua menghentikan penipuan phishing.',
  },
  {
    id: 'kka6-q35',
    topik: 'Saring Sebelum Sharing (Anti-Hoaks & Privasi)',
    tp: 'TP 3',
    tingkatKesulitan: 'Sukar',
    bentukIndikator: 'Uraian',
    pertanyaan:
      'Mengapa kita wajib menerapkan prinsip "Saring Sebelum Sharing" sebelum menekan tombol Bagikan (Share) pada sebuah berita atau foto di internet?',
    pilihan: [
      'Untuk memastikan informasi itu benar (bukan hoaks), tidak membocorkan data pribadi, dan tidak menyakiti perasaan atau melanggar hak orang lain',
      'Supaya kuota internet langsung bertambah dua kali lipat secara gratis',
      'Agar semua orang di internet mengetahui nomor PIN kartu ATM kita',
      'Karena tombol Share hanya berfungsi pada pukul 12 malam',
    ],
    jawabanBenar: 0,
    pembahasan:
      'Menyaring informasi sebelum membagikan menjaga kebenaran informasi, melindungi privasi, dan mencegah dampak buruk sosial.',
  },
];
