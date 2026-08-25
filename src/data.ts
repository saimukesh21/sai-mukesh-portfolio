// All content here is sourced directly from Sai Mukesh B's resume.
// Edit these objects/arrays to update the site — no markup changes needed.

export interface Profile {
  name: string;
  title: string;
  location: string;
  objective: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export const profile: Profile = {
  name: "Sai Mukesh B",
  title: "AWS Cloud Engineer",
  location: "Chennai, India",
  objective: "Seeking AWS Cloud Intern / Junior Cloud Engineer roles",
  email: "saimukesh2111@gmail.com",
  phone: "+91 93616 39307",
  github: "https://github.com/saimukesh21",
  linkedin: "https://linkedin.com/in/saimukesh21",
  resumeUrl: "/Sai_Mukesh_B_Resume.pdf"
};

export interface SkillGroup {
  title: string;
  items: string[];
}

// Five categories, matching the groupings used on the resume.
export const skillGroups: SkillGroup[] = [
  {
    title: "Cloud & AWS",
    items: [
      "EC2",
      "S3",
      "IAM",
      "VPC",
      "RDS",
      "Lambda",
      "CloudWatch",
      "EFS",
      "SNS",
      "SQS",
      "EventBridge",
      "API Gateway",
      "DynamoDB",
      "Route 53",
      "Application Load Balancer",
      "Amazon Bedrock"
    ]
  },
  {
    title: "Networking",
    items: [
      "Subnets",
      "Route Tables",
      "Internet Gateway",
      "NAT Gateway",
      "Security Groups",
      "Load Balancing"
    ]
  },
  {
    title: "Programming & Databases",
    items: ["Python", "Flask", "MySQL"]
  },
  {
    title: "Operating Systems & Tools",
    items: ["Linux", "Windows", "Git", "GitHub", "Nginx"]
  },
  {
    title: "Cloud Operations",
    items: ["Monitoring", "Cloud Security", "Automation", "Cost Optimization"]
  }
];

export interface Project {
  id: string;
  category: string;
  name: string;
  subtitle: string;
  description: string;
  purpose: string;
  details: string[];
  technologies: string[];
  /** Only set when a matching public repository was verified on GitHub. */
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "cloudguardian",
    category: "Governance",
    name: "CloudGuardian",
    subtitle: "AWS Cloud Governance Platform",
    description:
      "A cloud governance platform focused on automated security auditing, monitoring, and cost optimization.",
    purpose:
      "Built for continuous visibility into cloud governance, security posture, and operational cost across an AWS account.",
    details: [
      "Developed serverless backend logic using AWS Lambda, API Gateway, and DynamoDB.",
      "Implemented event-driven automation through EventBridge and CloudWatch.",
      "Used S3 and IAM for secure storage and access control.",
      "Applied Amazon Bedrock for AI-assisted analysis."
    ],
    technologies: [
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "EventBridge",
      "CloudWatch",
      "S3",
      "IAM",
      "Amazon Bedrock"
    ]
    // No verified public repository for this project — see note in the UI.
  },
  {
    id: "three-tier-ecommerce",
    category: "Architecture",
    name: "Three-Tier E-Commerce Application",
    subtitle: "Secure Application Architecture on AWS",
    description:
      "A secure three-tier application architecture deployed using AWS compute, networking, load balancing, and database services.",
    purpose:
      "Structured an application environment with separated traffic routing, application processing, and database responsibilities.",
    details: [
      "Architected and deployed the application using EC2, Application Load Balancer, and VPC.",
      "Configured NAT Gateway, Route 53, and security groups.",
      "Used Amazon RDS with MySQL as the backend database.",
      "Configured Nginx as reverse proxy and Flask as the application layer."
    ],
    technologies: [
      "EC2",
      "Application Load Balancer",
      "VPC",
      "NAT Gateway",
      "Route 53",
      "Security Groups",
      "RDS MySQL",
      "Nginx",
      "Flask"
    ],
    githubUrl: "https://github.com/saimukesh21/aws-three-tier-ecommerce"
  },
  {
    id: "cost-optimization-automation",
    category: "Automation",
    name: "Cost Optimization Automation",
    subtitle: "Automated EC2 and RDS Scheduling",
    description: "An automation project for scheduling EC2 and RDS start-stop operations.",
    purpose: "Reduced unnecessary cloud spend by eliminating idle compute and database runtime.",
    details: [
      "Created scheduling automation using AWS Lambda.",
      "Used EventBridge Scheduler to trigger start-stop workflows.",
      "Applied the approach to both EC2 and RDS resources."
    ],
    technologies: [
      "AWS Lambda",
      "EventBridge Scheduler",
      "EC2",
      "RDS",
      "Automation",
      "Cost Optimization"
    ],
    githubUrl: "https://github.com/saimukesh21/aws-cost-optimization-automation"
  }
];

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export const certifications: Certification[] = [
  {
    name: "Front-End Web Development & Cloud Fundamentals",
    issuer: "TNSDC – IBM SkillBuild"
  },
  {
    name: "MongoDB Basics for Students",
    issuer: "MongoDB University",
    year: "2025"
  },
  {
    name: "Object-Oriented Programming using Python",
    issuer: "Infosys Springboard",
    year: "2024"
  },
  {
    name: "Certificate in Artificial Intelligence — Beginner",
    issuer: "C-DAC / Alpha Training & Consultancy Services",
    year: "2024"
  },
  {
    name: "Python Programming Certification",
    issuer: "Apollo Computer Education"
  }
];

export interface EducationEntry {
  level: string;
  institution: string;
  board?: string;
  score?: string;
}

export const education: EducationEntry[] = [
  {
    level: "B.Sc. Computer Science",
    institution: "Alpha Arts and Science College, Chennai"
  },
  {
    level: "Class XII",
    institution: "La Chatelaine Junior College",
    board: "CBSE",
    score: "60.8%"
  },
  {
    level: "Class X",
    institution: "La Chatelaine Junior College",
    board: "CBSE",
    score: "66.2%"
  }
];

export const languages: string[] = ["English", "Tamil", "Telugu"];

// Live-status labels for the hero systems panel. Purely presentational —
// reflects the domains covered on the resume, not a real monitoring feed.
export const systemDomains = [
  { label: "Compute", value: "EC2 / Lambda" },
  { label: "Network", value: "VPC / Route 53" },
  { label: "Data", value: "RDS / DynamoDB / S3" },
  { label: "Security", value: "IAM / Security Groups" }
];
