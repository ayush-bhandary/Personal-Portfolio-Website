# Personal Portfolio Website

A clean, minimalist, high-readability developer portfolio tailored for software engineering students and professionals.

## ✨ Features
- **Clean Minimalist Light Aesthetic**: Spacious layout, refined typography (Inter), high contrast, and crisp borders.
- **Dedicated Sections**:
  - Hero with status badge ("Available for Summer 2025 Internships") & quick contact links
  - Internship & Work Experience timeline
  - Positions of Responsibility (PORs) & leadership grid
  - Featured Projects showcase with tech stack tags and direct GitHub / Live Demo buttons
  - Categorized Technical Skills
  - Education & Coursework
  - Modern Contact CTA & Footer
- **Zero Build Step Required**: Works right out of the box in any browser without npm/node dependencies.
- **Data-Driven**: All your personal information, links, projects, and experiences are centralized in [`portfolio-data.js`](./portfolio-data.js).

---

## 🚀 How to View Locally
You can view the site in any of the following ways:

### Method 1: Direct File Open
Double-click `index.html` to open it in your default web browser (Chrome, Edge, etc.).

### Method 2: Local Python Server (Recommended)
In PowerShell or Terminal inside this folder:
```powershell
python -m http.server 3000
```
Then visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ How to Personalize Your Content
Open [`portfolio-data.js`](./portfolio-data.js) in your editor (e.g. VS Code) and update the fields:
- `personal`: Name, role, bio, social links, status badge
- `experience`: Your internships and work history
- `positionsOfResponsibility`: Club leadership, student council, organizing roles
- `projects`: Your projects with GitHub/live links and tech stack
- `skills`: Categorized skill tags
- `education`: University, degree, GPA, relevant coursework

Whenever you save [`portfolio-data.js`](./portfolio-data.js), simply refresh `index.html` in your browser!

---

## 🌐 Free 1-Minute Deployment Options
- **GitHub Pages**: Push this directory to a GitHub repository, go to `Settings > Pages`, and select `main` branch.
- **Vercel**: Run `vercel` or import the GitHub repo on [vercel.com](https://vercel.com).
- **Netlify**: Drag and drop this folder directly into [Netlify Drop](https://app.netlify.com/drop).
