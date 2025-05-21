Quiet Shelter Humanitarian Website Documentation
1. Overview
Purpose: The Quiet Shelter Humanitarian Website serves as a digital platform to raise awareness, collect donations, and provide resources for delivering emergency shelter solutions across Africa. Inspired by organizations like ShelterBox, it aims to support displaced communities with accessible, user-friendly tools and localized content.
Objectives:
Showcase Quiet Shelter’s mission, projects, and impact.
Enable donations and volunteer sign-ups with seamless user experience.
Provide educational resources on shelter solutions and humanitarian aid.
Use modern web technologies (CSS3, JavaScript, localStorage) for dynamic, engaging interactions.
Target Audience:
Donors (individuals, corporations) in Africa and globally.
Volunteers and humanitarian workers.
Displaced communities seeking resources.
Partners (NGOs, governments, local organizations).
2. Technical Requirements
2.1 Tech Stack
Frontend: HTML5, CSS3 (with transitions and animations), JavaScript (ES6+).
Storage: localStorage for user preferences (e.g., theme, language).
Hosting: Vercel, Netlify, or AWS for scalability.
Accessibility: WCAG 2.1 compliance for inclusive access.
2.2 Dependencies
Normalize.css for consistent styling.
Font Awesome for icons.
3. Features
3.1 Core Features
Homepage: Hero section with mission statement, animated call-to-action (CTA) buttons, and impact stats (e.g., “10,000 shelters provided”).
Donation Portal: Secure form for one-time/recurring donations, integrated with local payment gateways.
Project Map: Interactive map showing shelter projects across Africa (e.g., Nigeria, Kenya, Ethiopia).
Resource Hub: Downloadable guides, toolkits, and videos on shelter solutions (e.g., inspired by Shelter Projects).
Volunteer Signup: Form to collect volunteer details, stored locally for persistence.
Multilingual Support: English, Swahili, French, Yoruba (toggle saved in localStorage).
3.2 Dynamic Features
CSS Transitions: Smooth hover effects on buttons (e.g., scale, color change).
CSS Animations: Fade-in for page sections, bounce effect for donation prompts.
JavaScript Interactivity: Theme toggle (light/dark mode), animation triggers, and form data persistence using localStorage.
4. User Interface (UI) Design
4.1 Styling
Color Scheme: Earthy tones (green, brown, beige) to reflect humanitarian values, with high-contrast options for accessibility.
Typography: Sans-serif fonts (e.g., Roboto, Open Sans) for readability.
Responsive Design: Mobile-first approach, breakpoints at 768px and 1200px.
4.2 Sample CSS (Transitions & Animations)
css
/* Button Transition */
.donate-button {
  padding: 12px 24px;
  background-color: #28a745;
  color: white;
  border-radius: 5px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.donate-button:hover {
  transform: scale(1.1);
  background-color: #218838;
}

/* Fade-In Animation for Sections */
.section {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}
@keyframes fadeIn {
  to { opacity: 1; }
}

/* Bounce Animation for Donation Prompt */
.bounce {
  animation: bounce 1s ease;
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
}
5. JavaScript Functionality
5.1 Theme Toggle & Local Storage
javascript
// Load saved theme/language from localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const savedLang = localStorage.getItem('language') || 'en';
  setTheme(savedTheme);
  setLanguage(savedLang);
});

// Toggle Theme
function toggleTheme() {
  const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}

// Apply Theme
function setTheme(theme) {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(`${theme}-theme`);
}

// Toggle Language
function setLanguage(lang) {
  // Logic to update text content based on language (e.g., fetch from JSON)
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.textContent = translations[lang][el.dataset.lang];
  });
  localStorage.setItem('language', lang);
}

// Trigger Animation on Donation Button
function triggerDonationAnimation() {
  const button = document.querySelector('.donate-button');
  button.classList.add('bounce');
  setTimeout(() => button.classList.remove('bounce'), 1000);
}
5.2 Sample HTML Structure
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiet Shelter</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="light-theme">
  <header>
    <h1>Quiet Shelter</h1>
    <button class="theme-toggle" onclick="toggleTheme()">Toggle Theme</button>
    <select onchange="setLanguage(this.value)">
      <option value="en">English</option>
      <option value="sw">Swahili</option>
    </select>
  </header>
  <main>
    <section class="section">
      <h2 data-lang="mission">Our Mission</h2>
      <p data-lang="mission-text">Providing safe shelters for displaced communities.</p>
      <button class="donate-button" onclick="triggerDonationAnimation()">Donate Now</button>
    </section>
  </main>
  <script src="script.js"></script>
</body>
</html>
6. Content Management
Static Content: Mission, about, and contact pages managed via HTML/CSS.
Dynamic Content: Project updates and resources fetched from a CMS (e.g., Firebase) or JSON files.
User-Generated Content: Donation and volunteer forms validated client-side and sent to backend.
7. Accessibility
Semantic HTML (<header>, <main>, <section>).
ARIA attributes for screen readers (e.g., aria-label on buttons).
Keyboard navigation support for all interactive elements.
High-contrast themes for visual impairments.
8. Maintenance
Updates: Monthly checks for broken links, outdated resources, and CMS content.
Security: HTTPS enforcement, input sanitization for forms, and regular dependency updates.
Monitoring: Google Analytics for user engagement, error tracking with Sentry.
Documentation Updates: Version control (GitHub) for code and docs, with changelog.
9. Development Workflow
Version Control: Git with GitHub for collaboration.
Testing: Unit tests for JavaScript (Jest), browser testing (Chrome, Firefox, Safari).
Deployment: Continuous deployment via Vercel with CI/CD pipelines.
