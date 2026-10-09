# Saif Ismail — Creative Portfolio Website

A modern, high-converting personal portfolio website built for **Saif Ismail (Graphic Team Lead & Junior Marketing Designer)**. Designed with dark/light mode compatibility, a signature palette of two blues and warm amber, subtle background animations, and Montserrat typography.

---

## 🚀 Quick Preview & Running Locally

This portfolio is built with lightweight modern web technologies (Tailwind CSS CDN, Lucide Icons, pure vanilla JavaScript, and semantic HTML5).

### Option 1: Direct File Open
Simply double-click [`index.html`](file:///C:/Users/User/.gemini/antigravity/scratch/saif-ismail-portfolio/index.html) in your browser.

### Option 2: Local HTTP Server
```powershell
python -m http.server 3000
```
Then visit `http://localhost:3000`.

---

## 📸 Placing Your Custom Images

Place your custom image files directly into the [`assets/images/`](file:///C:/Users/User/.gemini/antigravity/scratch/saif-ismail-portfolio/assets/images) folder:

1. **Circular Portrait**:
   - File name: `portrait.jpg` (or `portrait.png`)
   - It will automatically display inside the circular glowing halo in the Hero section.
   - If not yet added, a sleek SVG fallback monogram (`SI`) will display seamlessly.

2. **Adobe Photoshop Image**:
   - File name: `photoshop.png`
   - It will automatically render inside the Software Mastery showcase card in the Skills section.
   - If not yet added, the vector fallback (`photoshop.svg`) will display seamlessly.

---

## 📂 File Architecture

```
saif-ismail-portfolio/
├── index.html              # Main responsive single-page portfolio
├── README.md               # Documentation & strategic branding roadmap
└── assets/
    ├── css/
    │   └── style.css       # Montserrat typography, dual-blue palette, glow & animations
    ├── js/
    │   └── main.js         # Projects data, modal popup, category filters, and smooth scrolling
    └── images/
        ├── photoshop.svg             # Vector fallback for Photoshop
        ├── portrait-placeholder.svg  # Vector fallback for portrait
        ├── photoshop.png             # (Place your Photoshop image here)
        └── portrait.jpg              # (Place your portrait photo here)
```

---

## 🛠️ Key Design & Content Features

- **Hero Section**: Two-column layout with "Junior Marketing Designer" directly below Saif Ismail, refined USP text, and a circular portrait with animated glow halo.
- **Color Scheme**: Dual blues (Deep Cobalt Blue `#2563eb` and Electric Cerulean/Sky `#0284c7`) with warm amber (`#f59e0b`) accent.
- **Ambient Animation**: Subtle, eye-comfortable floating gradients and smooth page fade-in.
- **Adaptive Lighting**: Built to look crisp and balanced in both dark and light modes via CSS media adaptivity.
- **Services Split**: 2-column layout with Social Media and Advertising on the left, and Photoshop and YouTube Thumbnails on the right, followed by the "Order Service Now" smooth-scroll button.
- **Leadership Role**: Updated title to "Graphic Team Lead" and classroom instruction to "6–8 Sessions".
- **Portfolio Hub**: Branded hub cards for Behance, LinkedIn, Khamsat, Mostaql, and Nafezly.
