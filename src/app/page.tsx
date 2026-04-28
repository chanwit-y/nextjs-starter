import Button from "@/components/common/Button/Button";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-12 px-6 py-24">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Next.js Starter
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          Built with TypeScript, Tailwind CSS, and Zustand.
        </p>
      </div>

      <Counter />

      <p className="text-sm text-muted-foreground">
        Edit{" "}
        <code className="rounded bg-surface-strong px-1.5 py-0.5 font-mono text-foreground">
          src/app/page.tsx
        </code>{" "}
        to get started.
      </p>
      <Button variant="contained" size="large" fullWidth>
        Click me
      </Button>
    </div>
  );
}
