# NfyniQ SonarViewer Web Portal

A high-performance, premium corporate-minimal web hub showcasing **SonarViewer**, the desktop suite engineered for the Blue Robotics Ping360 mechanical scanning sonar. 

Built with React, Vite, and custom CSS variables, the application features an interactive live scope sweep simulator, technical documentation decks, unified theme-responsive layouts (with Light/Dark toggles), and a secure-animation downloads pipeline.

---

## 🚀 Key Features

* **Live Sonar Simulator Scope**: Interactive circular Plan Position Indicator (PPI) canvas that simulates transducer sweeping, acoustic gain adjustments, and moving sonar targets in real time.
* **Responsive Dark Mode**: Smooth HSL-based dark mode toggle synced across all navigation cards and documentation layouts.
* **Documentation Deck**: Multi-topic technical guide for developers and engineers covering binary formats, network architectures, and hardware setups.
* **Deep Doc-Simulator Integration**: Quick-action buttons in the documentation trigger navigation changes and configure state values (Gain, Range, Transmission status) inside the live home screen scope simulator.
* **Secure Download Animation**: 1.5-second connection verification loader feedback prior to launching stand-alone binary package installations.
* **Private Code Integrity**: Points package download links to a separate public releases repository, keeping main project source codes secure and private.

---

## 🛠️ Tech Stack

* **Frontend Engine**: React (Functional components, hooks, custom state events)
* **Build System**: Vite (Next-generation fast frontend toolchain)
* **Styling**: Vanilla CSS (Tailored variables, animations, glassmorphism, responsive grid sheets)
* **Vector Icons**: Lucide React
* **Deployment**: Cloudflare Pages (Serverless static hosting)

---

## 💻 Local Development

Follow these steps to run the web portal locally on your development server:

### 1. Clone the Repository
```bash
git clone https://github.com/Jerfynn/NfyniQ.git
cd NfyniQ
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
*Access the local website at [http://localhost:5173](http://localhost:5173).*

### 4. Build for Production
```bash
npm run build
```
*The compiled assets will be outputted to the `dist/` directory, ready to be hosted.*

---

## 🌐 Cloudflare Pages Deployment

This project is configured to auto-deploy on Cloudflare Pages via GitHub integrations:
* **Build Command**: `npm run build`
* **Output Directory**: `dist`
* **Compatibility Flags**: `nodejs_compat`
* **Deploy Command**: `npx wrangler pages deploy dist`

*Any push to the `main` branch of this repository automatically triggers a rebuild and updates the live production deployment within seconds.*

---

## 📁 Binary Asset Releases

To respect the private status of your core codebases while avoiding Cloudflare's **25 MB file size limit** on static assets, compiled stand-alone installation packages (InnoSetup, ZIP bundles) are hosted publicly at:
* **Release Repo**: `https://github.com/Jerfynn/SONAR-NfyniQ`
* **Release Target**: Version tag `v1.0.0`
