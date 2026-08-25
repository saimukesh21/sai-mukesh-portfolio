import { Github, Layers, RefreshCw, ShieldCheck, type LucideIcon } from "lucide-react";
import { profile, projects } from "../data";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";

const iconByCategory: Record<string, LucideIcon> = {
  Governance: ShieldCheck,
  Architecture: Layers,
  Automation: RefreshCw
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="03 / PROJECTS"
          title="AWS projects"
          description="Independent projects covering cloud governance, secure architecture, and operational automation."
        />

        <div className="mt-12 space-y-6">
          {projects.map((project) => {
            const Icon = iconByCategory[project.category] ?? ShieldCheck;
            return (
              <article
                key={project.id}
                className="rounded-2xl border border-line bg-panel/40 p-6 transition hover:border-signal/30 sm:p-8"
              >
                <div className="flex flex-col gap-7 lg:flex-row">
                  <div className="flex min-w-24 items-start gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-signal">
                    <Icon size={16} aria-hidden="true" />
                    {project.category}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="font-display text-2xl font-semibold text-ink">
                          {project.name}
                        </h3>
                        <p className="mt-1 text-sm text-mute">{project.subtitle}</p>
                      </div>

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-line bg-void/60 px-3.5 py-2 font-body text-xs font-semibold text-ink transition hover:border-signal/50 hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                          aria-label={`View the ${project.name} repository on GitHub`}
                        >
                          <Github size={15} /> View Repository
                        </a>
                      ) : (
                        <a
                          href={profile.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-dashed border-line px-3.5 py-2 font-body text-xs text-mute transition hover:border-signal/40 hover:text-signal"
                          title="No verified public repository for this project — GitHub profile shown instead."
                        >
                          <Github size={15} /> No verified repo — view profile
                        </a>
                      )}
                    </div>

                    <p className="mt-5 max-w-3xl font-body leading-7 text-mute">
                      {project.description}
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      <div>
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-signal">
                          Purpose
                        </p>
                        <p className="mt-2 font-body leading-7 text-mute">{project.purpose}</p>
                      </div>

                      <div>
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-signal">
                          Implementation
                        </p>
                        <ul className="mt-2 space-y-2 font-body text-sm leading-6 text-mute">
                          {project.details.map((detail) => (
                            <li key={detail} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
