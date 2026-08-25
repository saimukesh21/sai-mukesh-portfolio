import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="rounded-2xl border border-signal/20 bg-signal/[0.04] p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold tracking-[0.24em] text-signal">
                06 / CONTACT
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Let's talk cloud engineering.
              </h2>
              <p className="mt-5 max-w-xl font-body leading-7 text-mute">
                Open to AWS Cloud Intern and Junior Cloud Engineer opportunities.
              </p>

              <a
                className="mt-7 inline-flex items-center gap-2 rounded-lg border border-line bg-void/60 px-5 py-3 font-body text-sm font-semibold text-ink transition hover:border-signal/50 hover:bg-signal/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                href={profile.resumeUrl}
                download
              >
                Download Resume <Download size={17} />
              </a>
            </div>

            <div className="space-y-4 font-body text-sm">
              <a
                className="flex items-center gap-3 text-mute transition-colors hover:text-signal"
                href={`mailto:${profile.email}`}
              >
                <Mail size={18} /> {profile.email}
              </a>
              <a
                className="flex items-center gap-3 text-mute transition-colors hover:text-signal"
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              >
                <Phone size={18} /> {profile.phone}
              </a>
              <a
                className="flex items-center gap-3 text-mute transition-colors hover:text-signal"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> LinkedIn profile
              </a>
              <a
                className="flex items-center gap-3 text-mute transition-colors hover:text-signal"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} /> GitHub profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
