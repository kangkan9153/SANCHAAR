# SANCHAAR — IoT & Robotics Club (ECE, AGEMC)

Official website of **SANCHAAR**, the student-driven IoT and Robotics Club under the Department of Electronics and Communication Engineering at Alipurduar Government Engineering and Management College (AGEMC).

---

## 🚀 GitHub Pages Deployment Guide

This project is fully optimized for GitHub Pages with relative asset bundling (`base: './'`), SPA 404 routing fallback, Jekyll bypass (`.nojekyll`), and automatic deployment workflows.

You can publish to GitHub Pages using **either** of the two simple methods below:

### Option 1: GitHub Actions (Recommended — Zero-Maintenance)
1. On your GitHub repository page, click **Settings**.
2. In the left sidebar, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** > **Source**, choose **GitHub Actions** from the dropdown.
4. That's it! The included `.github/workflows/deploy.yml` will automatically build and deploy the website whenever changes are pushed to `main` or `master`.

---

### Option 2: Deploy from the `/docs` Folder
1. On your GitHub repository page, click **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
3. Under **Branch**, select `main` (or `master`) and change the folder from `/ (root)` to **`/docs`**.
4. Click **Save**.
5. The `docs/` folder already contains the compiled production bundle (`index.html`, `assets/`, `images/`, `404.html`, and `.nojekyll`), so your site will be live within 1–2 minutes!

---

## 🛠️ Local Development & Build Commands

- **Start Dev Server:** `npm run dev` (starts on `http://localhost:3000`)
- **Production Build:** `npm run build` (builds to both `dist/` and `docs/`)
- **Preview Build:** `npm run preview`
- **Lint & Type Check:** `npm run lint`
