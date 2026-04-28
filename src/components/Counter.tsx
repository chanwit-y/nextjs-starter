"use client";

import { useCounterStore } from "@/store/counter-store";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-surface p-8 shadow-sm">
      <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
        Zustand Counter
      </h2>

      <span className="text-6xl font-bold tabular-nums text-foreground">
        {count}
      </span>

      <div className="flex gap-3">
        <button
          onClick={decrement}
          className="rounded-lg bg-surface-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-brand-100 active:bg-brand-200 dark:hover:bg-brand-700 dark:active:bg-brand-600"
        >
          -1
        </button>
        <button
          onClick={reset}
          className="rounded-lg bg-surface-strong px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-brand-100 active:bg-brand-200 dark:hover:bg-brand-700 dark:active:bg-brand-600"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover active:bg-brand-900 dark:hover:bg-accent-hover"
        >
          +1
        </button>
      </div>
    </div>
  );
}
