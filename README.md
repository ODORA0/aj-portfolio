# AJ Portfolio (React + Vite + Tailwind, Dark/Light Mode + EmailJS + Icons)

A modern single-page portfolio with:
- React 18 + Vite
- Tailwind CSS (dark mode via class)
- Framer Motion animations
- **EmailJS contact form** (no backend)
- **Dark/Light theme toggle** (localStorage, no FOUC)
- **Icons via `lucide-react`**
- **Downloadable CV** (placed at `public/resume.pdf`)

## 🚀 Quick Start
```bash
npm install
npm run dev
```

## 📄 CV
Place your latest resume at `public/resume.pdf`. This build includes a copy of your provided résumé so the **Download CV** buttons work out of the box.

## ✉️ EmailJS Setup
1. Create an EmailJS account and add an Email Service (e.g., Gmail).
2. Create a Template with fields: `user_name`, `user_email`, `message` (recipient: `jonathanodoraaj@gmail.com`).
3. Create a `.env` file in the project root:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
4. Restart the dev server.

## 🌗 Theme
- The theme class (`dark`) is applied to `<html>`.
- Preference persisted in `localStorage.theme`.

## 🧩 Customize
- Edit text/links in `src/components/*`.
- Colors and theme in `tailwind.config.js`.

## 📦 Build & Deploy
```bash
npm run build
npm run preview
```
Deploy the `dist/` folder to Netlify, Vercel, or GitHub Pages.
