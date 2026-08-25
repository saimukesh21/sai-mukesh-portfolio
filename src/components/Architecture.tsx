import SectionHeading from "./SectionHeading";

interface FlowStep {
  name: string;
  description: string;
}

interface FlowDiagramProps {
  title: string;
  steps: FlowStep[];
  supporting?: { label: string; note: string };
}

function FlowDiagram({ title, steps, supporting }: FlowDiagramProps) {
  return (
    <div className="rounded-xl border border-line bg-void/50 p-6">
      <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>

      <div className="mt-7 space-y-3">
        {steps.map((step, index) => (
          <div key={step.name}>
            <div className="flex items-center gap-4 rounded-lg border border-line bg-panel/60 p-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-signal/10 font-mono text-xs text-signal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-body font-medium text-ink">{step.name}</p>
                <p className="mt-1 font-body text-sm text-mute">{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="ml-8 h-3 border-l border-dashed border-signal/30" />
            )}
          </div>
        ))}
      </div>

      {supporting && (
        <div className="mt-6 rounded-lg border border-dashed border-line p-4">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-signal">
            {supporting.label}
          </p>
          <p className="mt-2 font-body text-sm leading-6 text-mute">{supporting.note}</p>
        </div>
      )}
    </div>
  );
}

export default function Architecture() {
  return (
    <section id="architecture" className="border-y border-line bg-panel/30 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="04 / ARCHITECTURE"
          title="Systems thinking in practice."
          description="Architecture views built only from the AWS components identified in the resume."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FlowDiagram
            title="Three-tier application"
            steps={[
              { name: "Route 53", description: "DNS routing" },
              { name: "Application Load Balancer", description: "Traffic distribution" },
              { name: "EC2 + Nginx + Flask", description: "Application layer" },
              { name: "RDS MySQL", description: "Database layer" }
            ]}
            supporting={{
              label: "Supporting network & security layer",
              note: "VPC, NAT Gateway, and security groups provide the network isolation and access control the application runs inside — not additional traffic hops."
            }}
          />

          <FlowDiagram
            title="Cloud governance & monitoring"
            steps={[
              { name: "EventBridge", description: "Event-driven triggers" },
              { name: "Lambda", description: "Serverless logic" },
              { name: "API Gateway / DynamoDB / S3", description: "Governance data & endpoints" },
              { name: "CloudWatch", description: "Continuous monitoring" }
            ]}
            supporting={{
              label: "Supporting layers",
              note: "IAM controls access across every service in the flow, and Amazon Bedrock provides AI-assisted analysis on top of the collected data."
            }}
          />

          <div className="lg:col-span-2">
            <FlowDiagram
              title="Cost optimization"
              steps={[
                { name: "EventBridge Scheduler", description: "Scheduled trigger" },
                { name: "Lambda", description: "Start-stop logic" },
                { name: "EC2 & RDS", description: "Automated start-stop" }
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
