import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useLocalStorage } from "@hooks/useLocalStorage";

type SoundName = "hover" | "click" | "success" | "error" | "pop";

interface SoundContextValue {
  enabled: boolean;
  toggle: () => void;
  play: (sound: SoundName) => void;
}

const SoundContext = createContext<SoundContextValue | null>(null);

const STORAGE_KEY = "ahadex-sound";

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within SoundProvider");
  return ctx;
}

// Sound synthesis using Web Audio API
const soundConfig: Record<
  SoundName,
  { freq: number; type: OscillatorType; duration: number; gain: number }
> = {
  hover: { freq: 720, type: "sine", duration: 0.05, gain: 0.025 },
  click: { freq: 880, type: "sine", duration: 0.08, gain: 0.04 },
  success: { freq: 1046, type: "triangle", duration: 0.18, gain: 0.05 },
  error: { freq: 220, type: "sawtooth", duration: 0.15, gain: 0.04 },
  pop: { freq: 600, type: "sine", duration: 0.04, gain: 0.02 },
};

export function SoundProvider({ children }: { children: ReactNode }) {
  const [storedEnabled, setStoredEnabled] = useLocalStorage(STORAGE_KEY, true);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  const ensureContext = useCallback((): AudioContext | null => {
    if (typeof window === "undefined") return null;
    const Ctor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctor) return null;
    if (!audioCtx) {
      const ctx = new Ctor();
      setAudioCtx(ctx);
      return ctx;
    }
    return audioCtx;
  }, [audioCtx]);

  const play = useCallback(
    (sound: SoundName) => {
      if (!storedEnabled) return;
      const ctx = ensureContext();
      if (!ctx) return;
      if (ctx.state === "suspended") void ctx.resume();

      const config = soundConfig[sound];
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = config.type;
      osc.frequency.setValueAtTime(config.freq, ctx.currentTime);
      gain.gain.setValueAtTime(config.gain, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        ctx.currentTime + config.duration
      );

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + config.duration);
    },
    [storedEnabled, ensureContext]
  );

  const toggle = useCallback(() => {
    setStoredEnabled((prev) => !prev);
  }, [setStoredEnabled]);

  const value = useMemo<SoundContextValue>(
    () => ({
      enabled: storedEnabled,
      toggle,
      play,
    }),
    [storedEnabled, toggle, play]
  );

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}