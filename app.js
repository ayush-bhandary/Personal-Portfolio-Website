// App Logic & DOM Renderer
document.addEventListener("DOMContentLoaded", () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("PORTFOLIO_DATA not loaded");
    return;
  }

  // 1. Personal & Hero Section
  document.getElementById("nav-brand-name").textContent = data.personal.name || "Ayush Girish Bhandary";
  document.getElementById("hero-name").textContent = data.personal.name || "";
  document.getElementById("hero-title").textContent = data.personal.roleTitle || "";
  document.getElementById("hero-location").innerHTML = `
    <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
    <span>${data.personal.location || ""}</span>
  `;
  document.getElementById("hero-status-badge").textContent = data.personal.statusBadge || "Available for Opportunities";
  document.getElementById("hero-bio").textContent = data.personal.bio || "";
  
  if (data.personal.resumeUrl && data.personal.resumeUrl !== "#") {
    document.getElementById("nav-resume-btn").href = data.personal.resumeUrl;
  }

  // Social Links in Hero
  const socialContainer = document.getElementById("hero-social-links");
  socialContainer.innerHTML = "";
  if (data.personal.socials && data.personal.socials.length > 0) {
    data.personal.socials.forEach(social => {
      const link = document.createElement("a");
      link.href = social.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium text-zinc-700 bg-white border border-zinc-200/90 hover:bg-zinc-100 hover:text-zinc-900 transition shadow-xs";
      link.innerHTML = `
        <i data-lucide="${social.icon || 'external-link'}" class="w-3.5 h-3.5"></i>
        <span>${social.name}</span>
      `;
      socialContainer.appendChild(link);
    });
  }

  // 2. Internship & Work Experience List
  const experienceContainer = document.getElementById("experience-list");
  experienceContainer.innerHTML = "";
  if (data.experience && data.experience.length > 0) {
    data.experience.forEach(exp => {
      const item = document.createElement("div");
      item.className = "relative group";

      // Timeline marker dot
      const marker = `
        <div class="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-zinc-400 group-hover:border-zinc-900 transition-colors"></div>
      `;

      const highlightsHtml = exp.highlights && exp.highlights.length > 0
        ? `<ul class="mt-3 space-y-1.5 text-sm text-zinc-600 list-disc list-outside ml-4">
            ${exp.highlights.map(h => `<li class="leading-relaxed">${h}</li>`).join("")}
          </ul>`
        : "";

      const skillsHtml = exp.skills && exp.skills.length > 0
        ? `<div class="mt-3 flex flex-wrap gap-1.5">
            ${exp.skills.map(s => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/60">${s}</span>`).join("")}
          </div>`
        : "";

      item.innerHTML = `
        ${marker}
        <div class="space-y-1">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 class="text-base font-semibold text-zinc-900">
              ${exp.role} 
              <span class="text-zinc-400 font-normal">at</span> 
              <span class="text-zinc-800">${exp.company}</span>
            </h3>
            <span class="text-xs font-mono text-zinc-500 whitespace-nowrap">${exp.period}</span>
          </div>
          <p class="text-xs text-zinc-400 font-medium">${exp.location}</p>
        </div>
        ${highlightsHtml}
        ${skillsHtml}
      `;
      experienceContainer.appendChild(item);
    });
  }

  // 3. Positions of Responsibility (PORs)
  const porContainer = document.getElementById("por-list");
  porContainer.innerHTML = "";
  if (data.positionsOfResponsibility && data.positionsOfResponsibility.length > 0) {
    data.positionsOfResponsibility.forEach(por => {
      const card = document.createElement("div");
      card.className = "bg-white border border-zinc-200/80 rounded-xl p-5 shadow-xs hover:border-zinc-300 transition space-y-3";

      const highlightsHtml = por.highlights && por.highlights.length > 0
        ? `<ul class="space-y-1.5 text-xs text-zinc-600 list-disc list-outside ml-4">
            ${por.highlights.map(h => `<li class="leading-relaxed">${h}</li>`).join("")}
          </ul>`
        : "";

      card.innerHTML = `
        <div class="flex items-start justify-between gap-2">
          <div>
            <h3 class="text-sm font-semibold text-zinc-900">${por.title}</h3>
            <p class="text-xs font-medium text-zinc-500">${por.organization}</p>
          </div>
          <span class="text-[11px] font-mono text-zinc-400 whitespace-nowrap">${por.period}</span>
        </div>
        ${highlightsHtml}
      `;
      porContainer.appendChild(card);
    });
  }

  // 4. Projects Showcase
  const projectsContainer = document.getElementById("projects-list");
  projectsContainer.innerHTML = "";
  if (data.projects && data.projects.length > 0) {
    data.projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "bg-white border border-zinc-200/80 rounded-xl p-5 shadow-xs hover:border-zinc-300 hover:shadow-sm transition flex flex-col justify-between space-y-4";

      const stackHtml = project.techStack && project.techStack.length > 0
        ? `<div class="flex flex-wrap gap-1.5">
            ${project.techStack.map(t => `<span class="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-zinc-100 text-zinc-700 border border-zinc-200/60">${t}</span>`).join("")}
          </div>`
        : "";

      const githubBtn = project.githubUrl
        ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition">
            <i data-lucide="github" class="w-3.5 h-3.5"></i>
            <span>GitHub</span>
          </a>`
        : "";

      const liveBtn = project.liveUrl
        ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 hover:text-zinc-600 transition">
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            <span>Live Demo</span>
          </a>`
        : "";

      const linksRow = (githubBtn || liveBtn)
        ? `<div class="flex items-center gap-4 pt-1">${liveBtn}${githubBtn}</div>`
        : "";

      const statusBadge = project.status
        ? `<span class="inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 whitespace-nowrap"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>${project.status}</span>`
        : "";

      card.innerHTML = `
        <div class="space-y-2.5">
          <div class="flex items-start justify-between gap-3">
            <h3 class="text-base font-semibold text-zinc-900 tracking-tight">${project.title}</h3>
            <div class="flex items-center gap-1.5 shrink-0">
              ${statusBadge}
              ${project.featured ? `<span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">Featured</span>` : ""}
            </div>
          </div>
          <p class="text-xs md:text-sm text-zinc-600 leading-relaxed">${project.description}</p>
        </div>

        <div class="pt-3 border-t border-zinc-100 space-y-3">
          ${stackHtml}
          ${linksRow}
        </div>
      `;
      projectsContainer.appendChild(card);
    });
  }

  // 5. Technical Skills
  const skillsContainer = document.getElementById("skills-list");
  skillsContainer.innerHTML = "";
  if (data.skills) {
    Object.entries(data.skills).forEach(([category, list]) => {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "space-y-2.5";
      categoryDiv.innerHTML = `
        <h3 class="text-xs font-semibold uppercase tracking-wider text-zinc-500">${category}</h3>
        <div class="flex flex-wrap gap-1.5">
          ${list.map(s => `<span class="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-50 text-zinc-800 border border-zinc-200/80 hover:bg-zinc-100 transition">${s}</span>`).join("")}
        </div>
      `;
      skillsContainer.appendChild(categoryDiv);
    });
  }

  // 6. Education
  const educationContainer = document.getElementById("education-list");
  educationContainer.innerHTML = "";
  if (data.education && data.education.length > 0) {
    data.education.forEach(edu => {
      const card = document.createElement("div");
      card.className = "bg-white border border-zinc-200/80 rounded-xl p-5 shadow-xs space-y-3";

      const courseworkHtml = edu.coursework && edu.coursework.length > 0
        ? `<div class="pt-2 text-xs text-zinc-600 leading-relaxed">
            <span class="font-medium text-zinc-800">Relevant Coursework:</span> ${edu.coursework.join(", ")}
          </div>`
        : "";

      card.innerHTML = `
        <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <div>
            <h3 class="text-base font-semibold text-zinc-900">${edu.degree}</h3>
            <p class="text-xs font-medium text-zinc-500">${edu.institution} • ${edu.location}</p>
          </div>
          <span class="text-xs font-mono text-zinc-400">${edu.period}</span>
        </div>
        ${edu.gpa ? `<div class="inline-block px-2 py-0.5 rounded text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200">${edu.gpa}</div>` : ""}
        ${courseworkHtml}
      `;
      educationContainer.appendChild(card);
    });
  }

  // 7. Contact Buttons & Footer
  if (data.personal.email) {
    document.getElementById("cta-email-btn").href = `mailto:${data.personal.email}`;
  }
  const githubSocial = data.personal.socials?.find(s => s.name.toLowerCase() === "github");
  if (githubSocial) {
    document.getElementById("cta-github-btn").href = githubSocial.url;
  }
  document.getElementById("current-year").textContent = new Date().getFullYear();
  document.getElementById("footer-copyright").innerHTML = `© ${new Date().getFullYear()} ${data.personal.name || "Ayush Girish Bhandary"}. All rights reserved.`;

  // Render icons
  if (window.lucide) {
    lucide.createIcons();
  }
});
