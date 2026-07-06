# Personal Portfolio - Leonardo Balestere

[![Build Status](https://github.com/leonardobalestere/leonardobalestere.github.io/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/leonardobalestere/leonardobalestere.github.io/actions)
[![Angular](https://img.shields.io/badge/Angular-22-DD0031.svg?style=flat&logo=angular&logoColor=white)](https://angular.dev/)
[![Sass](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)](https://sass-lang.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 📌 Overview
This repository contains the source code for my personal portfolio, designed to showcase my expertise as a Software Engineer specializing in scalable backend architectures (.NET) and modern frontend development.

The application is a high-performance Single Page Application (SPA) built with a mobile-first, bento-style layout, focused on fast load times, semantic structure, and clean code principles.

**Live Version:** [leonardobalestere.dev](https://leonardobalestere.dev)

### ✨ Features
* **Bilingual (PT/EN):** all content is available in Portuguese (default) and English, switchable at runtime with the preference persisted in `localStorage`.
* **Dark & Light themes:** design-token based theming (CSS custom properties), toggleable and persisted across visits.
* **Mobile-first responsive design:** a single codebase that scales from a 390px stacked layout up to a 12-column bento grid on desktop.
* **Signal-based reactivity:** standalone components powered by Angular Signals (`signal`, `computed`, `effect`) — no external state library.

## 🚀 Tech Stack
* **Framework:** Angular 22 (standalone components, Signals)
* **Styling:** SCSS with design tokens (CSS custom properties)
* **Typography:** Space Grotesk, Manrope & JetBrains Mono (Google Fonts)
* **Deployment & CI/CD:** GitHub Actions & GitHub Pages
* **Code Quality:** Prettier and strict TypeScript configurations.

## ⚙️ Local Development
To run this project locally, ensure you have [Node.js](https://nodejs.org/) and [Angular CLI](https://angular.dev/tools/cli) installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/leonardobalestere/leonardobalestere.github.io.git
   cd leonardobalestere.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 🏗️ Architecture & Project Structure
The application follows a modular, component-per-section architecture with all content centralized in a single typed data source:

```text
src/
 ├── app/
 │    ├── components/    # One standalone component per section
 │    │    ├── header/   # Sticky nav, mobile menu, PT/EN & theme toggles
 │    │    ├── hero/     # Bento hero (intro, availability, education)
 │    │    ├── stack/    # Skills grouped in 8 categories
 │    │    ├── experience/
 │    │    ├── projects/
 │    │    ├── contact/
 │    │    └── footer/
 │    ├── data.ts        # Typed bilingual content (Record<Language, Content>)
 │    ├── language.ts    # LanguageService (signal + localStorage persistence)
 │    ├── theme.ts       # ThemeService (dark/light, signal + persistence)
 │    └── app.ts         # Root component composing the sections
 ├── styles.scss         # Design tokens (dark/light) and shared layout
 └── index.html          # Fonts, meta and PT-BR defaults
```

## 🔄 CI/CD Pipeline
This project utilizes **GitHub Actions** for continuous integration and continuous deployment.
Every push to the `main` branch triggers a workflow that:
1. Installs dependencies.
2. Builds the Angular application in production mode (`ng build --configuration production`).
3. Deploys the static artifacts to the `gh-pages` branch for hosting.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
