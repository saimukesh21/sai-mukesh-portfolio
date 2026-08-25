import { Activity, Cloud, Code2, Network, Terminal, type LucideIcon } from "lucide-react";
import { skillGroups } from "../data";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";

const iconByTitle: Record<string, LucideIcon> = {
  "Cloud & AWS": Cloud,
  Networking: Network,
  "Programming & Databases": Code2,
  "Operating Systems & Tools": Terminal,
  "Cloud Operations": Activity
};

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-panel/30 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="02 / TOOLKIT"
          title="Technical skills"
          description="A practical foundation across AWS services, infrastructure, networking, programming, and cloud operations."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = iconByTitle[group.title] ?? Cloud;
            return (
              <div
                key={group.title}
                className="rounded-xl border border-line bg-void/40 p-6 transition hover:border-signal/30"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="rounded-lg bg-signal/10 p-2.5 text-signal">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
