# TIMEWEAVE — History Reimagined

> *"History isn't a place. It's a moment in time."*

**TIMEWEAVE** is a museum-grade, Apple-inspired cinematic digital heritage platform that lets people experience Indian historical worlds as living environments rather than merely viewing modern-day ruins.

**Hero Prototype:**
**HAMPI — VIJAYANAGARA EMPIRE — 1500 CE**

---

## 🏛️ 10-Scene Experience Architecture

1. **Scene 01 — The Awakening**
   - Full-screen cinematic opening starting in deep darkness.
   - Real-time HTML5 canvas dust and golden ember simulation.
   - Slow camera push forward as architectural silhouettes emerge from stone textures.
   - Staggered editorial typography (`Cinzel` + `Plus Jakarta Sans`).
   - Technical status coordinates: `HAMPI | VIJAYANAGARA EMPIRE | 1500 CE | 15.3350° N, 76.4600° E`.

2. **Scene 02 — Choose a World**
   - Interactive 3D cursor-reactive card for **HAMPI (1500 CE)** with dynamic light glares and perspective tilt.
   - Scalability horizon: **Dholavira**, **Ajanta Caves**, and **Chola Temples** marked *COMING SOON*.
   - *"TIMEWEAVE begins with Hampi."*

3. **Scene 03 — The Time Machine (Hero Feature)**
   - Chronological accelerator spanning 6 centuries: `1400 CE`, `1450 CE`, `1500 CE` (Apex), `1550 CE`, `1600 CE`, and `PRESENT`.
   - Real-time gauge updates for **Trade**, **Architecture**, **Culture**, **Water**, and **People**.
   - Expanding selected year with time portal energy bursts.

4. **Time Shift Transition (Cinematic Warp Overlay)**
   - Triggered on clicking **ENTER 1500 CE**:
     - Timeline freezes and screen darkens.
     - Canvas 3D particle warp accelerates into a hyperspace time tunnel.
     - Historical coordinates flash: `15.3350° N, 76.4600° E · ELEVATION 467M`.
     - `1500 CE` expands outward with dramatic visual impact.
     - `TIME SHIFTING... 1500 CE VIJAYANAGARA EMPIRE` reveals Hampi!

5. **Scene 04 — Enter Hampi (1500 CE Reconstructed)**
   - 2.5D/3D hybrid city environment with mouse-reactive camera parallax.
   - Orientation HUD: `HEADING 32° NE · TUNGABHADRA CORRIDOR`.
   - 5 interactive radar-pulsing hotspots floating in space:
     - `01 — ROYAL CENTER`: Palatial enclosure, Hazara Rama, Mahanavami Dibba.
     - `02 — MARKET`: Sule Bazaar, open gemstone scales, silks and spices.
     - `03 — TEMPLE`: Virupaksha & Vittala musical resonant pillars.
     - `04 — WATER SYSTEM`: Kamalapuram tank, aqueducts, stepwells.
     - `05 — PEOPLE`: Cosmopolitan society of 500,000 residents and chroniclers.

6. **Scene 05 — Human History (Role Selection)**
   - *"History is not only architecture. IT IS PEOPLE."*
   - Interactive role cards with 3D tilt:
     - **Merchant** (*Recommended / Main Demo Path*): `TRADE`, `MARKETS`, `TEXTILES`, `SPICES`, `PRECIOUS GOODS`.
     - **Sculptor**: Granite carving & musical pillar craft.
     - **Soldier**: Tungabhadra fortress garrison & royal elephants.
     - **Traveler**: Court chronicler documenting the world's 2nd largest metropolis.

7. **Scene 06 — Talk to History (AI Historical Guide Prototype)**
   - Features **Virashetty of Sule Bazaar** with authentic portraiture.
   - Transparent prototype label: `AI HISTORICAL GUIDE — PROTOTYPE`.
   - Local contextual knowledge engine with simulated typewriter streaming.
   - Suggested question chips + free-text input with keyword matching and graceful historical fallback.
   - Zero external API dependencies; clean modular architecture ready for LLM API integration.

8. **Scene 07 — The Memory of Stone (3D Archaeological Fragments)**
   - *"Even when civilizations change, physical traces remain."*
   - Real-time 3D wireframe rotating artifacts:
     - **Granite Megalith** (Mortarless masonry)
     - **Royal Inscription** (Epigraph slab)
     - **Musical Sapta-Swara Pillar** (Acoustic resonator)
     - **Yali Balustrade** (Mythological guardian)
     - **Gravity Aqueduct** (Hydraulic channel)

9. **Scene 08 — Past vs. Present Reveal**
   - Interactive dual-lens split slider comparing **Hampi 1500 CE Reconstructed** against **Hampi Today's UNESCO Ruins**.
   - One-click animated *"PAST → PRESENT REVEAL"* transition.
   - Categorical Heritage Continuity Audit (*Architecture, Culture & Rituals, Trade & Commerce, Water Engineering, Landscape & Boulders*).
   - Core message: *"History leaves traces. TimeWeave helps us see the world behind them."*

10. **Scene 09 — Conservation & Preservation**
    - Philosophy: *Experience. Understand. Preserve.*
    - 3 Impact Pillars: **Education**, **Tourism**, **Preservation**.

11. **Scene 10 — Future Horizon & Roadmap**
    - Visual lineage: `HAMPI → DHOLAVIRA → AJANTA → CHOLA TEMPLES → INDIAN HERITAGE → GLOBAL HERITAGE`.
    - Culmination: *"ONE PLATFORM. COUNTLESS WORLDS. THE FUTURE OF HERITAGE IS INTERACTIVE."*
    - Seamless **Replay the Journey** reset button.

---

## ⚡ Quickstart

### Prerequisites
- Node.js (v18 or higher)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates a static, zero-dependency bundle inside the `./dist` folder with relative paths ready for any web server or GitHub Pages subpath.

---

## 🚀 GitHub Pages Deployment

The repository is configured with `base: './'` in `vite.config.js`, making all script and image paths relative and safe for any GitHub repository subpath.

### Option A: Automatic via GitHub Actions (Included)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Deploy TIMEWEAVE Hackathon Prototype"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In your GitHub repository, navigate to **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish the live site.

### Option B: Manual Deployment via `gh-pages`
```bash
npx gh-pages -d dist
```

---

## 🛡️ Key Architectural Highlights
- **100% Static & Offline-Ready**: Works without any backend, database, or API keys.
- **Synthesized Ambient Audio**: Features a browser-synthesized sacred acoustic drone using Web Audio API (zero audio file downloads).
- **Graceful Fallbacks**: Includes inline SVG fallbacks for all image assets to ensure the experience never breaks.
- **Hardware-Accelerated 3D**: Real-time 3D canvas rendering and CSS 3D perspective transforms running at a buttery 60 FPS.

---

## 📜 Disclaimer
> *"Historical reconstructions are interpretive visualizations based on available historical knowledge."*
Reconstructions synthesize architectural surveys of the Archaeological Survey of India (ASI), UNESCO documentation, and eyewitness accounts by Domingo Paes, Fernão Nunes, and Abdur Razzaq.
