import { languages } from "../data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12">
        <SectionHeading eyebrow="01 / ABOUT" title="Cloud-focused by design." />

        <div className="space-y-5 font-body text-lg leading-8 text-mute">
          <p>
            I'm a B.Sc. Computer Science graduate with hands-on experience in AWS cloud
            computing, infrastructure, and networking, built through independent cloud
            projects.
          </p>
          <p>
            My work focuses on deploying and securing AWS environments using services such
            as EC2, S3, IAM, VPC, RDS, and Lambda, supported by automation, monitoring, and
            cost-optimization practices.
          </p>
          <p>
            I'm looking for an AWS Cloud Intern or Junior Cloud Engineer role where I can
            apply and keep building these skills.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="rounded-md border border-line bg-panel px-3 py-1.5 font-mono text-xs text-mute"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
