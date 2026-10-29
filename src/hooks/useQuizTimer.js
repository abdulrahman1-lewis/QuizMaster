import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Optional countdown timer for quizzes (RC-015).
 * - enabled/minutes are chosen by the user before they start answering.
 * - Counts down once started; calls onExpire exactly once when it reaches 0.
 */
export const useQuizTimer = ({ onExpire, paused = false } = {}) => {
  const [enabled, setEnabled] = useState(false);
  const [minutes, setMinutes] = useState(10);
  const [secondsLeft, setSecondsLeft] = useState(null); // null = not started
  const expiredRef = useRef(false);
  const onExpireRef = useRef(onExpire);

  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  const start = useCallback(() => {
    expiredRef.current = false;
    setSecondsLeft(Math.max(1, Math.floor(minutes)) * 60);
  }, [minutes]);

  const stop = useCallback(() => setSecondsLeft(null), []);

  useEffect(() => {
    if (!enabled || secondsLeft === null || paused) return undefined;
    if (secondsLeft <= 0) {
      if (!expiredRef.current) {
        expiredRef.current = true;
        if (onExpireRef.current) onExpireRef.current();
      }
      return undefined;
    }
    const id = setTimeout(() => setSecondsLeft((s) => (s === null ? s : s - 1)), 1000);
    return () => clearTimeout(id);
  }, [enabled, secondsLeft, paused]);

  const toggle = (value) => {
    setEnabled(value);
    if (!value) setSecondsLeft(null);
  };

  return { enabled, minutes, secondsLeft, setMinutes, setEnabled: toggle, start, stop };
};

export const formatTime = (totalSeconds) => {
  const s = Math.max(0, totalSeconds || 0);
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
};
