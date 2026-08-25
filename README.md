# Sai Mukesh B — Portfolio

A Vite + React + TypeScript + Tailwind CSS portfolio built from the content in
`Sai_Mukesh_B_Resume.pdf`. All copy, skills, projects, certifications, and
education entries live in `src/data.ts` — edit that file to update the site
without touching any component markup.

## 1. Install

```bash
npm install
```

## 2. Add your resume PDF

The "Download Resume" buttons link to `/Sai_Mukesh_B_Resume.pdf`. Place your
resume file in `public/` under that exact filename (see
`public/ADD_YOUR_RESUME_HERE.txt` for details, then delete that placeholder
file).

## 3. Run locally

```bash
npm run dev
```

Open the URL Vite prints, usually `http://localhost:5173`.

## 4. Production build

```bash
npm run build
npm run preview   # sanity-check the built output locally
```

## 5. Deploy (free — Vercel Hobby)

Vercel's Hobby plan is free for personal, non-commercial projects like this
portfolio, with automatic HTTPS, a global CDN, and redeploys on every push
(confirmed against Vercel's docs, July 2026). Netlify's free tier and GitHub
Pages are also viable if you'd rather use those.

1. Push this project to a GitHub repository.
2. Go to https://vercel.com and sign in with GitHub.
3. **Add New Project** → import the repository.
4. Framework preset: **Vite** · Build command: `npm run build` · Output
   directory: `dist` · Install command: `npm install`.
5. Click **Deploy**. Future pushes to the connected branch redeploy
   automatically.

## Notes on sourcing

- **GitHub repositories** were checked against the public profile at
  `github.com/saimukesh21`. Two repos clearly match resume projects and are
  linked directly from their project cards:
  - `aws-three-tier-ecommerce` → Three-Tier E-Commerce Application
  - `aws-cost-optimization-automation` → Cost Optimization Automation
  - No repository matching **CloudGuardian** was found, so that card links
    to the GitHub profile only and says so explicitly rather than implying a
    repo exists.
- **Contact details**: the site uses the email, phone, and LinkedIn URL
  exactly as written on the resume. Two things are worth double-checking on
  your end before publishing, since they differ from what's on your public
  GitHub profile:
  - GitHub profile LinkedIn: `linkedin.com/in/saimukesh-aws` vs. resume:
    `linkedin.com/in/saimukesh21`
  - GitHub profile README email: `saimukesh212603@gmail.com` vs. resume:
    `saimukesh2111@gmail.com`
