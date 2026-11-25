import { handlePipoChat } from '../../src/server/pipoChat';

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
};

export default async function handler(req: Request): Promise<Response> {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204 });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Metode harus POST.' }),
      { status: 405, headers: JSON_HEADERS }
    );
  }

  let body: unknown = {};
  try {
    body = await req.json();
  } catch {
    return new Response(
      JSON.stringify({ error: 'Format data permintaan tidak valid.' }),
      { status: 400, headers: JSON_HEADERS }
    );
  }

  const result = await handlePipoChat(body);
  return new Response(JSON.stringify(result.body), {
    status: result.status,
    headers: JSON_HEADERS,
  });
}
