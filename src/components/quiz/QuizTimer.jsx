import { formatTime } from '../../hooks/useQuizTimer';

/**
 * Optional quiz timer control + display (RC-015).
 * `timer` is the object returned by useQuizTimer.
 */
function QuizTimer({ timer, disabled = false }) {
  const { enabled, minutes, secondsLeft, setMinutes, setEnabled, start, stop } = timer;
  const running = enabled && secondsLeft !== null;
  const low = running && secondsLeft <= 60;

  return (
    <div className="mb-6 p-4 rounded-lg border border-accent bg-[var(--bg-primary)]">
      <label className="flex items-center gap-2 text-lg text-secondary cursor-pointer">
        <input
          type="checkbox"
          checked={enabled}
          disabled={disabled || running}
          onChange={(e) => setEnabled(e.target.checked)}
        />
        Use a timer
      </label>

      {enabled && !running && (
        <div className="mt-3 flex items-center gap-3">
          <input
            type="number"
            min="1"
            max="240"
            value={minutes}
            disabled={disabled}
            onChange={(e) => setMinutes(Number(e.target.value) || 1)}
            className="w-24 px-3 py-2 rounded-lg bg-input text-primary border border-accent"
            aria-label="Timer minutes"
          />
          <span className="text-secondary">minutes</span>
          <button
            type="button"
            onClick={start}
            disabled={disabled}
            className="px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-btn-primary font-medium"
          >
            Start timer
          </button>
        </div>
      )}

      {running && (
        <div className="mt-3 flex items-center justify-between">
          <span
            className={`text-3xl font-bold tabular-nums ${low ? 'text-red-600' : 'text-accent'}`}
            role="timer"
            aria-live="off"
          >
            {formatTime(secondsLeft)}
          </span>
          <button
            type="button"
            onClick={stop}
            disabled={disabled}
            className="px-3 py-1 rounded-lg border border-accent text-secondary"
          >
            Stop timer
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizTimer;
