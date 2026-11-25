import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import {
  buildPipoKnowledgeContext,
  SUBJECTS,
} from './src/data/assessmentData.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const MODEL_NAME = 'gemini-4-hydrogen';

interface IncomingMessage {
  role: 'user' | 'pipo' | 'bimo';
  text: string;
}

interface ChatRequestBody {
  message?: string;
  history?: IncomingMessage[];
  studentName?: string;
  studentClass?: string;
  focusSubjectId?: string;
}

function getGenAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
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

function detectRelatedSubject(text: string, focusSubjectId?: string): string | undefined {
  const lower = text.toLowerCase();
  if (
    lower.includes('pai') ||
    lower.includes('budi pekerti') ||
    lower.includes('asmaul husna') ||
    lower.includes('al-maun') ||
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
    lower.includes('anyaman')
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
    lower.includes('cahaya') ||
    lower.includes('rantai makanan') ||
    lower.includes('alveolus') ||
    lower.includes('pernapasan') ||
    lower.includes('fotosintesis') ||
    lower.includes('maritim')
  ) {
    return 'ipas';
  }
  if (
    lower.includes('plh') ||
    lower.includes('sampah') ||
    lower.includes('biopori') ||
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
    lower.includes('sweet')
  ) {
    return 'bahasa-inggris';
  }
  if (
    lower.includes('kka') ||
    lower.includes('algoritma') ||
    lower.includes('dekomposisi') ||
    lower.includes('koding') ||
    lower.includes('kecerdasan artifisial')
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

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.post('/api/chat', async (req, res) => {
    try {
      const body = (req.body || {}) as ChatRequestBody;
      const message = typeof body.message === 'string' ? body.message.trim() : '';

      if (!message) {
        res.status(400).json({ error: 'Pesan tidak boleh kosong.' });
        return;
      }

      if (message.length > 2000) {
        res.status(400).json({ error: 'Pesan terlalu panjang. Maksimal 2000 karakter.' });
        return;
      }

      const ai = getGenAIClient();
      if (!ai) {
        res.status(503).json({
          error:
            'Kunci Gemini API belum aktif di server. Pastikan GEMINI_API_KEY sudah diatur pada Settings > Secrets.',
        });
        return;
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
                item &&
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
        res.status(502).json({
          error: 'Pipo belum menerima balasan dari server. Coba kirim ulang sebentar lagi ya.',
        });
        return;
      }

      const relatedSubjectId = detectRelatedSubject(
        `${message} ${reply}`,
        body.focusSubjectId
      );

      res.json({
        reply,
        relatedSubjectId,
      });
    } catch (error: unknown) {
      const errObj = error as { status?: number; message?: string };
      const status = typeof errObj?.status === 'number' ? errObj.status : 500;
      console.error('[Pipo API Error]:', errObj?.message || error);

      if (status === 403 || status === 400) {
        res.status(status).json({
          error:
            'Koneksi ke Gemini API ditolak. Periksa pengaturan API key di Settings > Secrets.',
        });
        return;
      }
      if (status === 429) {
        res.status(429).json({
          error:
            'Pipo sedang menerima terlalu banyak pertanyaan saat ini. Tunggu beberapa detik lalu coba lagi ya.',
        });
        return;
      }

      res.status(500).json({
        error:
          'Maaf, Pipo mengalami gangguan jaringan sementara. Coba kirim pertanyaanmu sekali lagi ya.',
      });
    }
  });

  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`SiPESAT server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
