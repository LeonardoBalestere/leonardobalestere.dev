# Personal Portfolio - Leonardo Balestere

[![Build Status](https://github.com/leonardobalestere/leonardobalestere.github.io/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/leonardobalestere/leonardobalestere.github.io/actions)
[![Angular](https://img.shields.io/badge/Angular-17+-DD0031.svg?style=flat&logo=angular&logoColor=white)](https://angular.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 📌 Overview
This repository contains the source code for my personal portfolio, designed to showcase my expertise as a Software Engineer specializing in scalable backend architectures (.NET) and modern frontend development. 

The application is a high-performance Single Page Application (SPA) focused on fast load times, semantic structure, and clean code principles.

**Live Version:** [leonardobalestere.dev](https://leonardobalestere.dev)

## 🚀 Tech Stack
* **Framework:** Angular 
* **Styling:** Tailwind CSS
* **Deployment & CI/CD:** GitHub Actions & GitHub Pages
* **Code Quality:** ESLint, Prettier, and strict TypeScript configurations.

## ⚙️ Local Development
To run this project locally, ensure you have [Node.js](https://nodejs.org/) and [Angular CLI](https://angular.io/cli) installed.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/leonardobalestere/leonardobalestere.github.io.git](https://github.com/leonardobalestere/leonardobalestere.github.io.git)
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
The application follows a strictly modular architecture to ensure maintainability and separation of concerns:

```text
src/
 ├── app/
 │    ├── core/          # Singleton services, interceptors, guards
 │    ├── shared/        # Reusable UI components, pipes, directives
 │    ├── features/      # Feature modules (Hero, Projects, Experience, Contact)
 │    └── app.component.ts
 ├── assets/             # Static files (images, icons)
 ├── environments/       # Environment-specific configurations
 └── styles/             # Global styles and Tailwind directives
```

## 🔄 CI/CD Pipeline
This project utilizes **GitHub Actions** for continuous integration and continuous deployment. 
Every push to the `main` branch triggers a workflow that:
1. Installs dependencies.
2. Builds the Angular application in production mode (`ng build --configuration production`).
3. Deploys the static artifacts to the `gh-pages` branch for hosting.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
