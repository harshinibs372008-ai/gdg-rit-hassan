# 🚀 GDG on Campus — Rajeev Institute of Technology, Hassan

> **Official Portal for the Website Building Challenge**  
> Developed for **GDG on Campus – RIT Hassan** in close collaboration with the **Department of Computer Science & Engineering** at **Rajeev Institute of Technology, Hassan**.

---

## 🏛️ Official Institutional Branding

In compliance with the project guidelines, this website displays the three official institutional logos side-by-side with proportional aspect-ratio preservation and zero distortion:

1. **Rajeev Institute of Technology** (`assets/logos/rit-logo.svg`)
2. **Department of Computer Science and Engineering** (`assets/logos/cse-logo.svg`)
3. **GDG on Campus – RIT Hassan** (`assets/logos/gdg-logo.svg`)

### Logo Proportions & Asset Swapping
- All logos are rendered with strict aspect-ratio preservation (`preserveAspectRatio="xMidYMid meet"`, flexible responsive containers, clean white background, subtle border).
- High-fidelity vector SVG placeholders are included in [`assets/logos/`](assets/logos/).
- **To update with final production assets:** Simply replace `rit-logo.svg`, `cse-logo.svg`, and `gdg-logo.svg` inside `assets/logos/` with your official college graphic files. The responsive markup automatically scales them proportionally across mobile, tablet, and desktop viewports.

---

## 🎯 Intended Audience & Real-World Purpose

### Audience
* **Undergraduate Engineering Students:** 1st to 4th-year students across CSE, ISE, AIML, and allied engineering branches at Rajeev Institute of Technology, Hassan.
* **Faculty Mentors & HOD:** Faculty advisors and project coordinators supporting student innovations.
* **Google Developer Community:** Developers, alumni mentors, and open-source contributors across Hassan and Karnataka.

### Need Addressed
1. **Centralized GDG Hackathons & Study Jams:** Providing a single, accessible platform to register for developer workshops, Google Cloud study jams, and the flagship 36-hour **HackRIT 2026**.
2. **Google Solution Challenge Visibility:** Connecting student capstone projects with the 17 UN Sustainable Development Goals using Google products (Google Cloud, Gemini API, Flutter, Firebase, TensorFlow).
3. **Developer Competency Testing:** Interactive skill checks for students to validate modern Google engineering concepts (multimodal AI, Jetpack Compose, Core Web Vitals) and earn digital recognition.
4. **Community Membership & Mentorship Onboarding:** Seamless registration for campus engineering students to access free Google Cloud credits, project teams, and placement training.

---

## ✨ Core Interactive Features

### 1. 🎟️ GDG Event Hub & Digital Pass Generator
* **Flagship Countdown Ticker:** Live timer counting down days, hours, minutes, and seconds to **HackRIT 2026** (Dec 12–14, 2026).
* **Category Filters:** Filter by *All Events*, *Hackathons*, *Cloud & GenAI*, *Android & Flutter*, and *Web & Git*.
* **Interactive RSVP Modal:** Validates attendee information (Name, VTU USN, Branch, Email) and generates an authenticated **Google Developer Attendee Pass** with a unique Pass ID (`#GDG-RIT-XXXX`), QR code mockup, and downloadable receipt.

### 2. 🌍 Google Solution Challenge Showcase & Project Submission
* **UN SDG Alignment:** Features student projects solving the United Nations 17 Sustainable Development Goals using Google developer technologies.
* **Search & SDG Filters:** Search by project title, student name, or tech stack, with fast category filter chips.
* **Interactive Star/Upvote Counter:** Live upvote counters update with animation and persist across reloads in `localStorage`.
* **Submit Project Modal:** Built-in form validation for student teams to submit new prototypes with live demo and GitHub links.

### 3. 🧠 Google Tech Skill Quiz & Digital Badge Generator
* **5-Question Technical Challenge:** Timed quiz testing GenAI / Gemini API, Android Jetpack Compose, Google Cloud Run, Core Web Vitals (INP), and Cloud Firestore.
* **Real-Time Evaluation:** Instant visual feedback (correct/incorrect), detailed theoretical explanations, and dot progress trackers.
* **Digital Dev Explorer Badge:** Unlocks an authenticated digital badge upon completing the challenge.

### 4. 🤝 Join the Chapter / Membership Onboarding Portal
* **Student Developer Registration:** Interactive membership onboarding form with technology track selection (AI/ML, Cloud, Android, Flutter, Web).
* **Personalized Member Card:** Automatically issues a verified Chapter Member ID (`#GDG-RIT-2026-XXXX`) with a downloadable membership slip.

### 5. 🎨 Google Developer Design & Dual Theme Engine
* Styled with official Google developer colors: Google Blue (`#4285F4`), Red (`#EA4335`), Yellow (`#FBBC04`), and Green (`#34A853`).
* Supports fluid Light and Dark modes with automatic `prefers-color-scheme` detection and manual toggle persistence.

---

## 📱 Responsive Layout & Breakpoints

| Device Profile | Breakpoint | Responsive Adaptations |
| :--- | :--- | :--- |
| **Mobile** | `< 640px` | Logo bar stacks cleanly without clipping; navigation switches to a slide-down drawer; touch targets $\ge 44\text{px}$; single-column cards and forms. |
| **Tablet** | `641px – 1024px` | 2-column balanced grid for events, solution projects, and tracks; flexible countdown timer. |
| **Desktop** | `> 1024px` | Side-by-side 3-logo institutional bar; 3-column project showcase; expanded desktop navigation with backdrop blur. |

---

## 💻 How to Run in an External Browser

### Option 1: Direct File Launch
Open [`index.html`](file:///C:/Users/ADMIN/.gemini/antigravity/scratch/gdg-rit-hassan/index.html) directly in any web browser, or paste this URL into your browser's address bar:
```text
file:///C:/Users/ADMIN/.gemini/antigravity/scratch/gdg-rit-hassan/index.html
```

### Option 2: Using the Included Local HTTP Server (`http://localhost:3000`)
Open PowerShell and run:
```powershell
cd C:\Users\ADMIN\.gemini\antigravity\scratch\gdg-rit-hassan
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```
The server will start at `http://localhost:3000/` and open your default external browser automatically.

---

## 🌐 Public Deployment & GitHub Setup

### Deploy to GitHub Pages
1. Open PowerShell in the project directory:
   ```powershell
   cd C:\Users\ADMIN\.gemini\antigravity\scratch\gdg-rit-hassan
   git init
   git add .
   git commit -m "feat: initial commit for GDG on Campus RIT Hassan portal"
   git branch -M main
   git remote add origin https://github.com/harshinibs372008-ai/gdg-rit-hassan.git
   git push -u origin main
   ```
2. In your repository on GitHub, go to **Settings** &rarr; **Pages**.
3. Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
4. The site will be live at `https://harshinibs372008-ai.github.io/gdg-rit-hassan/`.

### Deploy to Netlify
Drag and drop the `gdg-rit-hassan` folder directly onto [app.netlify.com/drop](https://app.netlify.com/drop) for instant deployment with a free SSL certificate.
