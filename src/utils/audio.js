// Synthesizes atmospheric ambient sound using Web Audio API
// Completely static, zero external audio asset dependency

class AmbientSoundEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.oscillators = [];
    this.gainNode = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  start() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    // Sacred Tanpura/Drone harmonic frequencies (Root D: ~146.8 Hz and A: ~220 Hz)
    const freqs = [146.83, 220.00, 293.66, 440.00];

    this.oscillators = freqs.map((freq, i) => {
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Low pass filter for warm acoustic warmth
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320 + i * 80, this.ctx.currentTime);

      oscGain.gain.setValueAtTime(0.04 / (i + 1), this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(oscGain);
      oscGain.connect(this.masterGain);

      osc.start();
      return osc;
    });

    this.isPlaying = true;
  }

  stop() {
    this.oscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {
        // ignore
      }
    });
    this.oscillators = [];
    this.isPlaying = false;
  }

  playChime() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, this.ctx.currentTime); // high chime A5
    osc.frequency.exponentialRampToValueAtTime(1320, this.ctx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 1.2);
  }
}

export const soundEngine = new AmbientSoundEngine();
