# NfyniQ Technologies — website

Company website for NfyniQ: products, services, downloads, documentation and contact.
Live at **https://jerfynn.github.io/NfyniQ/**

Products: **NfyniQ Chat** (new), **Smart Reminder Assistant** (new), Sonar Viewer,
AI Embedded Studio, NfynDown and NfyniQ Music.

Built with React + Vite. Every push to `main` builds and publishes the site
automatically through GitHub Actions (`.github/workflows/deploy.yml`).

---

## One-time setup

### 1. Clean the repo and push this code
The old repo contains ~410 MB of installers (SonarViewer is stored twice).
Installers belong in **Releases**, not in the code. In a terminal:

```bash
git clone https://github.com/Jerfynn/NfyniQ.git
cd NfyniQ
git rm -r --quiet .                 # clear old files (they stay in git history)
# copy everything from this zip into the NfyniQ folder (include hidden .github and .env)
git add -A
git commit -m "Combined website: dark redesign, NfyniQ Chat + Smart Reminder, bug fixes"
git push
```

### 2. Make the repo public
Settings → General → Danger Zone → **Change visibility → Public**.
Free GitHub Pages and public downloads from Releases both require this.

### 3. Turn on GitHub Pages (Actions)
Settings → **Pages** → Build and deployment → Source: **GitHub Actions**.

Then open the **Actions** tab and wait for "Deploy website to GitHub Pages" to
turn green (about 1 minute). The site is live at https://jerfynn.github.io/NfyniQ/

### 4. Upload installers to Releases
The download buttons point at these exact addresses, so tags and file names
must match exactly (dots, not underscores).

| Product | Release tag | File name |
|---|---|---|
| NfyniQ Chat | `chat-v2.0.0` | `NfyniQ-Chat-Setup-2.0.0.exe` |
| Smart Reminder Assistant | `reminder-v1.2.0` | `Smart-Reminder-Assistant-Setup-1.2.0.exe` |
| Sonar Viewer, AI Embedded Studio, NfynDown, NfyniQ Music | `v1.0.0` | `SonarViewer_Setup.exe`, `sonarviewer-macos-app.zip`, `sonarviewer-linux-deb.zip`, `AI_Embedded_Studio.exe`, `NfynDown.exe`, `NfyniQ_Music_Setup.exe` |

If the `v1.0.0` release already exists with those files, leave it alone.

Repo → **Releases** → **Draft a new release** → Choose a tag → type the tag →
**Create new tag** → drag in the file → **Publish release**.

Or with the GitHub CLI:

```bash
gh release create chat-v2.0.0 NfyniQ-Chat-Setup-2.0.0.exe --repo Jerfynn/NfyniQ --title "NfyniQ Chat 2.0.0"
gh release create reminder-v1.2.0 Smart-Reminder-Assistant-Setup-1.2.0.exe --repo Jerfynn/NfyniQ --title "Smart Reminder Assistant 1.2.0"
```

---

## Everyday editing

```bash
npm install
npm run dev        # http://localhost:5173/NfyniQ/
npm run build      # production build into dist/
```

- **Products** (names, text, screenshots, download links, checksums):
  `src/data/productsData.js` — the home page, products page, downloads,
  footer and search all update from this one file.
- **User manuals**: `src/components/SubPages.jsx` (Documentation section).
- **Colours and theme**: tokens in `src/index.css`, fine-tuning in
  `src/theme-polish.css`.
- **"Just Released" spotlight**: `src/components/NewReleases.jsx` and
  `src/new-releases.css`.

### Releasing a new version
1. Create a release with a new tag (e.g. `chat-v2.1.0`) and upload the installer.
2. In `src/data/productsData.js` update `version`, the download `file`, `path`,
   `size`, `sha256` and `releaseNotes`.
3. Get the checksum in PowerShell: `Get-FileHash .\NfyniQ-Chat-Setup-2.1.0.exe`
4. Commit and push — the site redeploys itself.

---

## Contact form
Messages are sent through Web3Forms (key in `.env`) with FormSubmit as a
backup. The form only shows "Message sent" when a service confirms delivery;
otherwise it shows an error with a pre-filled email button.
FormSubmit needs a one-time activation: the first time it is used it emails
nfyniq@gmail.com a confirmation link.

---

## Moving to www.nfyniq.com later
1. Buy the domain. At the registrar add:
   - `CNAME` `www` → `jerfynn.github.io`
   - `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
2. Settings → Pages → Custom domain → `www.nfyniq.com` → Save → tick **Enforce HTTPS**.
3. In `.github/workflows/deploy.yml` change `BASE_PATH: /NfyniQ/` to `BASE_PATH: /`.
4. In `index.html` replace `https://jerfynn.github.io/NfyniQ/` with `https://www.nfyniq.com/`.
5. Commit and push.
