import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import {
  buildPipoKnowledgeContext,
  SUBJECTS,
} from '../data/assessmentData.ts';

const MODEL_NAME = 'gemini-4-hydrogen';

export interface IncomingMessage {
  role: 'user' | 'pipo' | 'bimo';
  text: string;
}

export interface ChatRequestBody {
  message?: string;
  history?: IncomingMessage[];
  studentName?: string;
  studentClass?: string;
  focusSubjectId?: string;
}

export interface ChatHandlerResult {
  status: number;
  body: {
    reply?: string;
    relatedSubjectId?: string;
    error?: string;
  };
}

function getGenAIClient(): GoogleGenAI | null {
  const rawKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  const apiKey = typeof rawKey === 'string' ? rawKey.trim() : '';
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

export function detectRelatedSubject(
  text: string,
  focusSubjectId?: string
): string | undefined {
  const lower = text.toLowerCase();
  if (
    lower.includes('pai') ||
    lower.includes('budi pekerti') ||
    lower.includes('asmaul husna') ||
    lower.includes('al-maun') ||
    lower.includes('al-ma’un') ||
    lower.includes('zakat')
  ) {
    return 'pai';
  }
  if (
    lower.includes('pancasila') ||
    lower.includes('norma') ||
    lower.includes('musyawarah') ||
    lower.includes('sila')
  ) {
    return 'pancasila';
  }
  if (
    lower.includes('bahasa indonesia') ||
    lower.includes('ide pokok') ||
    lower.includes('majas') ||
    lower.includes('personifikasi') ||
    lower.includes('hiperbola') ||
    lower.includes('kata baku') ||
    lower.includes('paragraf')
  ) {
    return 'bahasa-indonesia';
  }
  if (
    lower.includes('seni rupa') ||
    lower.includes('warna primer') ||
    lower.includes('ragam hias') ||
    lower.includes('ritme') ||
    lower.includes('aquarel') ||
    lower.includes('plakat')
  ) {
    return 'seni-rupa';
  }
  if (
    lower.includes('matematika') ||
    lower.includes('pecahan') ||
    lower.includes('kpk') ||
    lower.includes('fpb') ||
    lower.includes('segitiga') ||
    lower.includes('persegi') ||
    lower.includes('persen')
  ) {
    return 'matematika';
  }
  if (
    lower.includes('pjok') ||
    lower.includes('lokomotor') ||
    lower.includes('olahraga') ||
    lower.includes('push-up') ||
    lower.includes('passing')
  ) {
    return 'pjok';
  }
  if (
    lower.includes('ipas') ||
    lower.includes('siklus air') ||
    lower.includes('rantai makanan') ||
    lower.includes('jantung') ||
    lower.includes('pernapasan') ||
    lower.includes('fotosintesis') ||
    lower.includes('filtrasi')
  ) {
    return 'ipas';
  }
  if (
    lower.includes('plh') ||
    lower.includes('sampah') ||
    lower.includes('anggrek') ||
    lower.includes('3r') ||
    lower.includes('reduce') ||
    lower.includes('recycle')
  ) {
    return 'plh';
  }
  if (
    lower.includes('bahasa inggris') ||
    lower.includes('inggris') ||
    lower.includes('how much') ||
    lower.includes('sour') ||
    lower.includes('sweet') ||
    lower.includes('past tense')
  ) {
    return 'bahasa-inggris';
  }
  if (
    lower.includes('kka') ||
    lower.includes('algoritma') ||
    lower.includes('dekomposisi') ||
    lower.includes('koding') ||
    lower.includes('kecerdasan artifisial') ||
    lower.includes('phishing')
  ) {
    return 'kka';
  }
  if (
    lower.includes('bahasa daerah') ||
    lower.includes('bahasa jawa') ||
    lower.includes('tatakrama') ||
    lower.includes('unggah-ungguh') ||
    lower.includes('cerita rakyat') ||
    lower.includes('aksara') ||
    lower.includes('sandhangan') ||
    lower.includes('dolanan') ||
    lower.includes('krama')
  ) {
    return 'bahasa-daerah';
  }
  if (focusSubjectId && SUBJECTS.some((s) => s.id === focusSubjectId)) {
    return focusSubjectId;
  }
  return undefined;
}

export async function handlePipoChat(
  rawBody: unknown
): Promise<ChatHandlerResult> {
  try {
    const body = (rawBody && typeof rawBody === 'object' ? rawBody : {}) as ChatRequestBody;
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!message) {
      return {
        status: 400,
        body: { error: 'Pesan tidak boleh kosong.' },
      };
    }

    if (message.length > 2000) {
      return {
        status: 400,
        body: { error: 'Pesan terlalu panjang. Maksimal 2000 karakter.' },
      };
    }

    const ai = getGenAIClient();
    if (!ai) {
      return {
        status: 503,
        body: {
          error:
            'Kunci Gemini API belum aktif di server. Pastikan GEMINI_API_KEY sudah diatur pada Environment Variables (Netlify) atau Settings > Secrets.',
        },
      };
    }

    const studentName =
      typeof body.studentName === 'string' && body.studentName.trim()
        ? body.studentName.trim().slice(0, 40)
        : 'Teman';
    const studentClass =
      body.studentClass === 'Kelas 6' ? 'Kelas 6' : 'Kelas 5';
    const knowledgeContext = buildPipoKnowledgeContext(studentClass);

    const systemInstruction = `Kamu adalah Pipo, maskot robot tutor belajar SiPESAT yang ramah, sabar, ceria, dan penyemangat untuk siswa SD (${studentName}, ${studentClass}).

ATURAN GAYA BICARA:
1. Gunakan Bahasa Indonesia yang sederhana, hangat, mudah dipahami siswa SD kelas 5–6, dan menyemangati.
2. Jawaban ringkas, terstruktur rapi, tidak bertele-tele (maksimal sekitar 3–5 paragraf pendek atau poin bernomor agar nyaman dibaca di layar HP).
3. Gunakan **teks tebal** seperlunya untuk menyorot kata kunci atau jawaban penting. Hindari simbol rumit atau bahasa teknis yang membingungkan.
4. Selalu utamakan mengacu pada jadwal resmi (30 Nov – 7 Des 2026), kisi-kisi, dan ringkasan materi 11 mata pelajaran di aplikasi SiPESAT di bawah ini. Jika siswa meminta soal latihan, buatkan 1 soal pilihan ganda (A, B, C, D) yang sesuai kisi-kisi.
5. Tetaplah berperan penuh sebagai Pipo si sahabat belajar di SiPESAT.

DATA MATERI & JADWAL RESMI DI APLIKASI SiPESAT:
${knowledgeContext}`;

    const safeHistory = Array.isArray(body.history)
      ? body.history
          .slice(-10)
          .filter(
            (item): item is IncomingMessage =>
              Boolean(item) &&
              (item.role === 'user' || item.role === 'pipo' || item.role === 'bimo') &&
              typeof item.text === 'string' &&
              item.text.trim().length > 0
          )
          .map((item) => ({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.text.slice(0, 1500) }],
          }))
      : [];

    const contents = [
      ...safeHistory,
      { role: 'user', parts: [{ text: message }] },
    ];

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents,
      config: {
        systemInstruction,
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.LOW,
        },
      },
    });

    const reply = (response.text ?? '').trim();
    if (!reply) {
      return {
        status: 502,
        body: {
          error:
            'Pipo belum menerima balasan dari server. Coba kirim ulang sebentar lagi ya.',
        },
      };
    }

    const relatedSubjectId = detectRelatedSubject(
      `${message} ${reply}`,
      body.focusSubjectId
    );

    return {
      status: 200,
      body: {
        reply,
        relatedSubjectId,
      },
    };
  } catch (error: unknown) {
    const errObj = error as { status?: number; message?: string };
    const status = typeof errObj?.status === 'number' ? errObj.status : 500;
    console.error('[Pipo API Error]:', errObj?.message || error);

    if (status === 403 || status === 400) {
      return {
        status,
        body: {
          error:
            'Koneksi ke Gemini API ditolak. Periksa apakah GEMINI_API_KEY valid dan aktif di pengaturan server/Netlify.',
        },
      };
    }
    if (status === 429) {
      return {
        status: 429,
        body: {
          error:
            'Pipo sedang menerima terlalu banyak pertanyaan saat ini. Tunggu beberapa detik lalu coba lagi ya.',
        },
      };
    }

    return {
      status: 500,
      body: {
        error:
          'Maaf, Pipo mengalami gangguan jaringan sementara. Coba kirim pertanyaanmu sekali lagi ya.',
      },
    };
  }
}
