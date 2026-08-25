export default function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-line bg-void/60 px-3 py-1.5 font-mono text-xs text-mute">
      {children}
    </span>
  );
}
