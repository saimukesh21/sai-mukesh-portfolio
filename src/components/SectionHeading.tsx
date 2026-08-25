interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div>
      <p className="font-mono text-xs font-semibold tracking-[0.24em] text-signal">{eyebrow}</p>
      <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl font-body leading-7 text-mute">{description}</p>
      )}
    </div>
  );
}
