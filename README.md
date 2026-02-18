# FirstTen

**Find your first 10 paying customers — systematically.**

FirstTen is an AI-powered tool that helps technical founders go from "I built something" to "people are paying for it." Answer 5 questions about your product, and get a personalized customer acquisition playbook with actionable channels, outreach templates, and progress tracking.

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8) ![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **5-Question Form** — Describe your product, and AI generates a full go-to-market strategy
- **Customer Profile** — AI-generated target customer persona with pain points, behaviors, and where to find them
- **10 Channel Recommendations** — Each with step-by-step actions, difficulty rating, message templates, and success stories
- **Progress Tracking** — Mark channels as done, log contacts & replies, track your reply rate
- **20 Outreach Templates** — Cold email, LinkedIn DM, Reddit/community, Twitter/X — one-click copy with variable substitution
- **100% Local Storage** — All your data stays in your browser. Nothing is uploaded to any server.

## Quick Start

**Prerequisites:** Node.js 18+

```bash
# Clone
git clone https://github.com/wang2-lat/firstten.git
cd firstten

# Install
npm install

# Configure
cp .env.example .env.local
# Edit .env.local — add your OpenAI API key

# Run
npm run dev
```

Open http://localhost:3000

## Configuration

Copy `.env.example` to `.env.local` and fill in your values:

```env
OPENAI_API_KEY=sk-your-api-key-here
OPENAI_BASE_URL=https://api.openai.com/v1    # or your custom endpoint
```

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| AI | OpenAI API (gpt-4o-mini) |
| Storage | Browser localStorage |

## Project Structure

```
firstten/
├── app/
│   ├── page.tsx                 # Home — 5-question form
│   ├── results/page.tsx         # Results — profile + channels
│   ├── channel/[id]/page.tsx    # Channel detail + templates
│   ├── templates/page.tsx       # Template library (20 templates)
│   └── api/generate/route.ts   # AI generation endpoint
├── components/                  # Reusable UI components
├── lib/                         # OpenAI client, storage, template data
└── types/                       # TypeScript type definitions
```

## Privacy & Security

- **Local-first**: All user data (progress, results) is stored in browser localStorage — never uploaded
- **No tracking**: Zero analytics, zero cookies, zero third-party scripts
- **Secure headers**: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **Input sanitization**: All API inputs are length-limited and sanitized
- **No logging of user data**: Server logs only error types, never user content

## Customization

Want a customized version for your specific use case? **DM me on GitHub** — happy to help!

## License

MIT

---

Built with AI. Ship faster. Get customers.
