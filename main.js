// Saif Ismail Portfolio Data & Interactive Scripts

// Schweppes Highlighted Milestone Project Data
const schweppesProject = {
  id: "schweppes",
  title: "Schweppes — Bold Flavor: Pomegranate & Mint Campaign",
  subtitle: "Commercial Advertising & Key Visual Campaign",
  summary: "A conceptual advertising campaign crafted to reimagine beverage marketing with 3D product staging, dynamic splash effects, and commercial typography.",
  fullDescription: "The Schweppes Pomegranate & Mint Campaign marks an important creative milestone. Designed with commercial advertising standards in mind, the goal was to transform a beverage can into an extraordinary, mouth-watering hero visual by balancing fluid motion, realistic lighting, and premium typography.",
  image: "./project-schweppes.jpg",
  tools: ["Adobe Photoshop", "Photo Manipulation", "Splash Compositing", "Color Grading"],
  deliverables: "Commercial Key Visuals, Social Feed Creatives (1:1), Story Banners",
  stats: "Conceptual Flagship • 100% Custom Lighting",
  behanceUrl: "https://www.behance.net/gallery/255383805/Schweppes-Bold-Flavor-Pomegranate-Mint-Campaign"
};

// Portfolio Projects Grid (Specified by User)
const projectsData = [
  {
    id: "boat-headphone",
    title: "Own Your Vibe: Premium Headphone Advertising Concept",
    category: "campaigns",
    badge: "E-Commerce Concept",
    subtitle: "boAt Lifestyle Commercial Creative",
    summary: "High-impact commercial e-commerce advertising visual for boAt headphones, focusing on sleek lighting, bold 3D typography integration, and battery endurance highlights.",
    fullDescription: "A commercial advertising visual crafted for boAt wireless headphones. Engineered around the concept 'Own Your Vibe', blending deep navy ambient lighting, typography that interacts with the physical product, and crisp commercial feature callouts.",
    image: "./project-boat-headphone.jpg",
    tools: ["Adobe Photoshop", "Commercial Lighting", "Typography Layout", "Color Grading"],
    deliverables: "Social Advertising Creative, Product Hero Visual",
    stats: "Commercial Advertising Standard",
    behanceUrl: "https://www.behance.net/gallery/252546065/Own-Your-Vibe-Premium-Headphone-Advertising-Concept"
  },
  {
    id: "excel-course",
    title: "Different Idea, Same Course — Excel Courses Designs",
    category: "volunteering",
    badge: "Educational Campaign",
    subtitle: "Resala & RTC Misr Course Poster",
    summary: "Creative promotional key visual for RTC Excel training courses, reimagining the spreadsheet grid as an architectural skyscraper structure.",
    fullDescription: "Created for Resala Training Center (RTC Misr) to promote the offline Excel workshop. Replaces traditional software screenshots with a bold visual metaphor: a modern skyscraper designed as an Excel workbook with row and column headers, enveloped in atmospheric green lighting and clouds.",
    image: "./project-excel-course.jpg",
    tools: ["Adobe Photoshop", "Visual Metaphor", "Architectural Compositing", "Typography"],
    deliverables: "Course Launch Poster, Social Media Announcement",
    stats: "RTC Branch Campaign",
    behanceUrl: "https://www.behance.net/gallery/254087717/Different-Idea-Same-Course-Excel-Courses-Designs"
  },
  {
    id: "youtube-thumbnail",
    title: "Fitness & Rehabilitation YouTube Thumbnail",
    category: "social",
    badge: "High-CTR Visual Hook",
    subtitle: "Audience-Centric Thumbnail Design",
    summary: "Dynamic high-contrast fitness thumbnail featuring expressive subject isolation, dual colored lighting (green/red mood contrast), and legible Arabic hook typography.",
    fullDescription: "Engineered specifically to maximize mobile click-through rate. Utilizes psychological color contrast (green representing progress vs. red representing injury/strain), bold muscle tension focal points, and clear Arabic hook typography ('ريحت.. ورجع الوجع؟').",
    image: "./project-youtube-thumb.jpg",
    tools: ["Adobe Photoshop", "CTR Hook Design", "Color Balancing", "Subject Retouching"],
    deliverables: "16:9 Optimized Thumbnail (1920x1080)",
    stats: "Tested for Mobile Readability",
    behanceUrl: null // No Behance link per user instructions
  }
];

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  renderProjects("all");
  setupFilters();
  setupModal();
  setupMobileMenu();
  setupScrollAnimations();
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// ================================================
// THEME TOGGLE: Dark / Light Mode
// ================================================
function setupThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  // Apply correct icon based on current theme
  function updateIcon() {
    const isLight = document.documentElement.classList.contains("light");
    // Show the moon icon when in light mode (clicking will switch to dark)
    // Show the sun icon when in dark mode (clicking will switch to light)
    btn.textContent = isLight ? "🌙" : "☀️";
    btn.setAttribute("title", isLight ? "Switch to Dark Mode" : "Switch to Light Mode");
    btn.setAttribute("aria-label", isLight ? "Switch to Dark Mode" : "Switch to Light Mode");
  }

  // Set initial icon on page load
  updateIcon();

  btn.addEventListener("click", () => {
    const html = document.documentElement;
    const isCurrentlyLight = html.classList.contains("light");

    if (isCurrentlyLight) {
      // Switch to dark
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      // Switch to light
      html.classList.add("light");
      localStorage.setItem("theme", "light");
    }

    updateIcon();
  });
}


// Render Projects List
function renderProjects(filter) {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  container.innerHTML = filtered.map((p) => `
    <div class="glass-card rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:border-sky-500/40" data-category="${p.category}">
      
      <!-- Project Real Image Showcase -->
      <div class="w-full h-56 bg-gray-950 overflow-hidden relative cursor-pointer" onclick="openProjectModal('${p.id}')">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>
        <div class="absolute top-3 right-3">
          <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-normal bg-black/70 text-sky-300 border border-white/10 backdrop-blur-md">
            ${p.badge}
          </span>
        </div>
      </div>

      <!-- Card Body -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors font-heading leading-snug">
            ${p.title}
          </h3>
          <p class="text-xs font-normal text-sky-400 mt-1 mb-3 font-heading">
            ${p.subtitle}
          </p>
          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal mb-5 line-clamp-3">
            ${p.summary}
          </p>

          <!-- Tool Badges -->
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${p.tools.slice(0, 3).map(tool => `
              <span class="px-2.5 py-0.5 rounded-lg text-xs font-normal bg-blue-950/50 text-sky-200 border border-blue-800/40">
                ${tool}
              </span>
            `).join("")}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="pt-4 border-t border-gray-800 flex items-center justify-between gap-3">
          <button onclick="openProjectModal('${p.id}')" class="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors font-heading">
            <span>View Details</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
          ${p.behanceUrl ? `
            <a href="${p.behanceUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600/20 text-sky-200 hover:bg-blue-600/30 border border-blue-500/30 transition-all flex items-center gap-1.5 font-heading">
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
              <span>Behance</span>
            </a>
          ` : `
            <button onclick="openProjectModal('${p.id}')" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700 transition-all flex items-center gap-1.5 font-heading">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i>
              <span>Preview</span>
            </button>
          `}
        </div>
      </div>
    </div>
  `).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Category Filters
function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => {
        b.classList.remove("bg-blue-600", "text-white", "shadow-md", "shadow-blue-600/30");
        b.classList.add("bg-gray-800/60", "text-gray-300", "hover:bg-gray-800");
      });
      btn.classList.add("bg-blue-600", "text-white", "shadow-md", "shadow-blue-600/30");
      btn.classList.remove("bg-gray-800/60", "text-gray-300", "hover:bg-gray-800");

      const filter = btn.getAttribute("data-filter");
      renderProjects(filter);
    });
  });
}

// Project Details Modal (Fixed Center Positioning & Smooth Fade-in)
function setupModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("close-modal");
  const backdrop = document.getElementById("modal-backdrop");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function openProjectModal(id) {
  let project = projectsData.find(p => p.id === id);
  if (!project && id === "schweppes") {
    project = schweppesProject;
  }
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-dynamic-content");

  modalContent.innerHTML = `
    <div class="relative modal-content-animated flex flex-col max-h-[85vh] overflow-y-auto">
      
      <!-- Modal Image Banner -->
      <div class="w-full h-64 sm:h-80 bg-gray-950 overflow-hidden relative shrink-0">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-contain sm:object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        <div class="absolute bottom-4 left-6 right-6">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-normal bg-black/70 text-sky-300 border border-white/10 backdrop-blur-md mb-2">
            ${project.badge || "Milestone Campaign"}
          </span>
          <h2 class="text-xl sm:text-2xl font-bold text-white font-heading">${project.title}</h2>
          <p class="text-xs sm:text-sm text-sky-300 font-normal">${project.subtitle}</p>
        </div>
      </div>

      <!-- Modal Body Content -->
      <div class="p-6 sm:p-8 space-y-5">
        <div>
          <h4 class="text-xs uppercase font-normal tracking-wider text-sky-400 mb-2 font-heading">Concept & Creative Vision</h4>
          <p class="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">${project.fullDescription}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-900/60 p-4 rounded-xl border border-gray-800">
          <div>
            <span class="text-xs font-normal text-gray-400 uppercase block mb-1 font-heading">Key Deliverables</span>
            <p class="text-xs sm:text-sm font-bold text-white font-heading">${project.deliverables}</p>
          </div>
          <div>
            <span class="text-xs font-normal text-gray-400 uppercase block mb-1 font-heading">Project Scope</span>
            <p class="text-xs sm:text-sm font-bold text-white font-heading">${project.stats}</p>
          </div>
        </div>

        <div>
          <h4 class="text-xs uppercase font-normal tracking-wider text-sky-400 mb-2 font-heading">Tools Used</h4>
          <div class="flex flex-wrap gap-2">
            ${project.tools.map(t => `
              <span class="px-2.5 py-1 rounded-lg text-xs font-normal bg-gray-800 text-gray-200 border border-gray-700">
                ${t}
              </span>
            `).join("")}
          </div>
        </div>

        <!-- Call to Action inside Modal -->
        <div class="pt-5 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-xs text-gray-400 font-normal">Interested in a similar creative direction?</p>
          <div class="flex items-center gap-3 w-full sm:w-auto">
            ${project.behanceUrl ? `
              <a href="${project.behanceUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 sm:flex-none text-center px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2 font-heading">
                <i data-lucide="external-link" class="w-4 h-4"></i>
                <span>Open on Behance</span>
              </a>
            ` : ''}
            <a href="#contact" onclick="closeModal()" class="flex-1 sm:flex-none text-center px-4 py-2.5 rounded-xl text-xs font-bold bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 transition-all flex items-center justify-center gap-2 font-heading">
              <i data-lucide="mail" class="w-4 h-4"></i>
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// Scroll IntersectionObserver for Smooth Viewport Element Reveal
function setupScrollAnimations() {
  const elements = document.querySelectorAll(".fade-in-section, .reveal-item");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        entry.target.classList.add("is-revealed");
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  elements.forEach(el => observer.observe(el));
}

// Toast notification helper
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove("translate-y-24", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.add("translate-y-24", "opacity-0");
    toast.classList.remove("translate-y-0", "opacity-100");
  }, 3500);
}

// Copy text utility
function copyToClipboard(text, successMsg = "Copied to clipboard!") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg);
  }).catch(() => {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    showToast(successMsg);
  });
}

// Mobile Menu Navigation
function setupMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}
