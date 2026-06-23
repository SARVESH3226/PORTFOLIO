# 🌌 SARVESHAA S // PERSONAL_PORTFOLIO.LOG

[![Vite](https://img.shields.io/badge/Vite-8.0-purple.svg?style=flat-square&logo=vite)](https://vite.dev)
[![React](https://img.shields.io/badge/React-19.2-cyan.svg?style=flat-square&logo=react)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-blue.svg?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-indigo.svg?style=flat-square)](https://framer.com)
[![EmailJS](https://img.shields.io/badge/EmailJS-Active-green.svg?style=flat-square)](https://www.emailjs.com)

A premium, world-class personal portfolio website for **SARVESHAA S**, constructed with high-fidelity dark aesthetics drawing visual cues from modern platforms like Stripe, CRED, Apple, Vercel, and Linear. The website features interactive data visualizations, dynamic components, and a clean professional layout.

🔗 **Live Link**: [https://sarvesh3226.github.io/PORTFOLIO/](https://sarvesh3226.github.io/PORTFOLIO/)

---

## 🛰️ SYSTEM ARCHITECTURE & TECH STACK

| Component | Technology | Role |
| :--- | :--- | :--- |
| **Core** | React 19.2 + Vite | Ultra-fast HMR and reactive compilation |
| **Styling** | Tailwind CSS v4.0 | Sleek dark-mode grids and vibrant accent glow |
| **Animations** | Framer Motion | Smooth layout transitions & viewport animations |
| **Icons** | Lucide React + Custom Brand SVGs | High-fidelity icons decoupled for stability |
| **Contact Integration** | EmailJS Browser | Direct message delivery and spam-protection filters |
| **celebrations** | Canvas Confetti | System-level success indicators |

---

## ⚙️ CORE MODULES & FEATURES

### 💻 1. The Interactive Hero Workspace (`Hero.jsx`)
- Implements a developer workspace illustration constructed with SVG nodes.
- Typing animations presenting core competencies: *AI Enthusiast • Full Stack Developer • Problem Solver*.
- Live status details panel showing developer profile settings.

### 📊 2. GitHub Analytics & Stats (`GitHubAnalytics.jsx`)
- Custom animated SVG visualizations representing active contributions and commit metrics.
- Language distribution telemetry: **Python (40%)**, **TypeScript (40%)**, and **JavaScript (20%)**.
- Highlights active development on 5 public repositories (`HAND-CURSOR`, `AI-Recruitment-System`, `TPL`, `linkforge-ai`, `codsoft`).

### 🧩 3. Verified Coding Profiles (`CodingProfiles.jsx`)
- Aggregated database showcasing verified handles for **LeetCode**, **GitHub**, and **LinkedIn**.
- Interactive statistics: **236 LeetCode problems solved** (177 Easy, 51 Medium, 8 Hard), profile rank **650,480**.

### 💼 4. Experience & Education (`Internship.jsx` / `Education.jsx`)
- Chronological timeline tracking professional milestones at Gateway Software Solutions and CodSoft.
- Academic matrix illustrating your Bachelor of Engineering at Dr. N.G.P. Institute of Technology (CGPA 8.13).

### 🚀 5. Hackathon Achievements (`Achievements.jsx`)
- Interactive cards featuring details from **CodeZap 2026 Hackathon**.
- Highlights: Agile workflows, Vibe Coding, Expense Tracker implementation, Generative AI models.

### ✉️ 6. Contact Form (`Contact.jsx`)
- Real-time client-side form validation.
- **Spam Prevention**: Hidden honeypot fields to block automated crawlers.
- Integrates seamlessly with `.env` parameters to forward direct messages to `sarvesh3226@gmail.com`.

---

## 🛠️ LOCAL SETUP & INSTALLATION

### Prerequisites
Make sure you have Node.js installed on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/SARVESH3226/PORTFOLIO.git
cd PORTFOLIO
```

### 2. Install Packages
```bash
npm install
```

### 3. Setup Environment Secrets
Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=service_5bi2y9k
VITE_EMAILJS_TEMPLATE_ID=template_273jh3h
VITE_EMAILJS_PUBLIC_KEY=E9fS8tVuFQxJCjZGe
```

### 4. Boot Dev Environment
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

---

## 🚀 BUILD & DEPLOYMENT

### Production Compilation
Generate highly compressed, minified production assets in the `/dist` output tree:
```bash
npm run build
```

### Deploying to GitHub Pages
To compile and automatically upload your latest production assets to the `gh-pages` branch, run:
```bash
npm run deploy
```

---

## 🛡️ DESIGN PROTOCOL
All modules follow strict aesthetic constraints:
- **Theme Color Palette**: Deep black background (`#000000`) with glassmorphism borders (`rgba(255,255,255,0.05)`).
- **Accent Radiance**: Custom HSL electric purple (`rgba(139,92,246,0.15)`) and cyan (`rgba(34,211,238,0.15)`) shadows.
- **Responsive Layout**: Designed with fluid grids adapting seamlessly from ultra-wide desktops to compact mobile viewports.
