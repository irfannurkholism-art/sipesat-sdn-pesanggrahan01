/**
 * Efek suara ringan berbasis Web Audio API (tanpa file audio eksternal).
 * Aman jika browser membatasi AudioContext sebelum interaksi pertama.
 */

let sharedCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const AudioCtx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;
  if (!AudioCtx) return null;

  if (!sharedCtx) {
    sharedCtx = new AudioCtx();
  }
  if (sharedCtx.state === 'suspended') {
    sharedCtx.resume().catch(() => undefined);
  }
  return sharedCtx;
}

function playTone(
  frequency: number,
  durationSec: number,
  startOffsetSec = 0,
  volume = 0.08,
  type: OscillatorType = 'sine'
) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime + startOffsetSec;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(frequency, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + durationSec + 0.02);
}

export function playCorrectSound(enabled: boolean) {
  if (!enabled) return;
  try {
    playTone(587.33, 0.14, 0, 0.08, 'sine'); // D5
    playTone(880.0, 0.22, 0.09, 0.09, 'sine'); // A5
  } catch {
    // Ignore audio context errors on restricted devices
  }
}

export function playWrongSound(enabled: boolean) {
  if (!enabled) return;
  try {
    playTone(280, 0.15, 0, 0.07, 'triangle');
    playTone(220, 0.22, 0.11, 0.07, 'triangle');
  } catch {
    // Ignore audio context errors
  }
}

export function playFinishSound(enabled: boolean) {
  if (!enabled) return;
  try {
    playTone(523.25, 0.12, 0, 0.08, 'sine'); // C5
    playTone(659.25, 0.12, 0.09, 0.08, 'sine'); // E5
    playTone(783.99, 0.14, 0.18, 0.08, 'sine'); // G5
    playTone(1046.5, 0.28, 0.28, 0.09, 'sine'); // C6
  } catch {
    // Ignore audio context errors
  }
}
