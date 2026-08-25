import { ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { profile, systemDomains } from "../data";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-20">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(69,224,184,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(69,224,184,0.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to bottom, black, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 75%)"
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-12">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/5 px-4 py-2 font-mono text-xs font-medium text-signal">
            <span className="h-1.5 w-1.5 animate-pulse_dot rounded-full bg-signal motion-reduce:animate-none" />
            {profile.objective.toUpperCase()}
          </div>

          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl">
            Building secure,
            <span className="block text-signal">cloud-ready systems.</span>
          </h1>

          <p className="mt-7 max-w-2xl font-body text-lg leading-8 text-mute">
            I'm {profile.name}, a B.Sc. Computer Science graduate focused on AWS cloud
            computing, infrastructure, networking, security, automation, Python, and Linux.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              className="inline-flex items-center gap-2 rounded-lg bg-signal px-5 py-3 font-body text-sm font-semibold text-void transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
              href="#projects"
            >
              View Projects <ArrowUpRight size={17} />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel px-5 py-3 font-body text-sm font-semibold text-ink transition hover:border-signal/50 hover:bg-signal/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
              href={profile.resumeUrl}
              download
            >
              Download Resume <Download size={17} />
            </a>
          </div>

          <div className="mt-9 flex items-center gap-6 font-body text-sm text-mute">
            <a
              className="inline-flex items-center gap-2 transition-colors hover:text-signal"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Sai Mukesh's GitHub profile"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 transition-colors hover:text-signal"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Sai Mukesh's LinkedIn profile"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-line bg-panel/70 p-5 shadow-2xl shadow-black/30">
            <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
              </div>
              <span className="font-mono text-xs text-mute">status.log</span>
            </div>

            <ul className="space-y-3">
              {systemDomains.map((domain) => (
                <li
                  key={domain.label}
                  className="flex items-center justify-between rounded-lg border border-line bg-void/50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="h-2 w-2 shrink-0 animate-pulse_dot rounded-full bg-signal motion-reduce:animate-none"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-mono text-xs text-ink">{domain.label}</p>
                      <p className="font-mono text-[11px] text-mute">{domain.value}</p>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] tracking-wide text-signal">
                    OPERATIONAL
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
