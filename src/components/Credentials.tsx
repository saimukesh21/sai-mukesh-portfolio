import { certifications, education } from "../data";
import SectionHeading from "./SectionHeading";

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12">
        <SectionHeading eyebrow="05 / CREDENTIALS" title="Certifications & education" />

        <div className="space-y-10">
          <div>
            <p className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-signal">
              Certifications
            </p>
            <div className="grid gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-start justify-between gap-5 rounded-lg border border-line bg-panel/40 p-4"
                >
                  <div>
                    <h3 className="font-body font-medium text-ink">{cert.name}</h3>
                    <p className="mt-1 font-body text-sm text-mute">{cert.issuer}</p>
                  </div>
                  {cert.year && (
                    <span className="shrink-0 font-mono text-xs text-signal">{cert.year}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-signal">
              Education
            </p>
            <div className="grid gap-3">
              {education.map((entry) => (
                <div
                  key={entry.level}
                  className="flex items-start justify-between gap-5 rounded-lg border border-line bg-panel/40 p-4"
                >
                  <div>
                    <h3 className="font-body font-medium text-ink">{entry.level}</h3>
                    <p className="mt-1 font-body text-sm text-mute">
                      {entry.board ? `${entry.board} · ` : ""}
                      {entry.institution}
                    </p>
                  </div>
                  {entry.score && (
                    <span className="shrink-0 font-mono text-xs text-signal">{entry.score}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
