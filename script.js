// --- DARK MODE TOGGLE & PERSISTENCE ---
const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;
const header = document.querySelector('header');
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const sections = document.querySelectorAll('section');
const projects = document.querySelectorAll('.project');
const btns = document.querySelectorAll('.btn');
const resumeBtn = document.getElementById('resume-btn');

function setDarkMode(on) {
  body.classList.toggle('dark-mode', on);
  header.classList.toggle('dark-mode', on);
  main.classList.toggle('dark-mode', on);
  nav.classList.toggle('dark-mode', on);
  footer.classList.toggle('dark-mode', on);
  sections.forEach(s => s.classList.toggle('dark-mode', on));
  projects.forEach(p => p.classList.toggle('dark-mode', on));
  btns.forEach(b => b.classList.toggle('dark-mode', on));
  if (resumeBtn) resumeBtn.classList.toggle('dark-mode', on);
}

// Load dark mode preference
const darkPref = localStorage.getItem('darkMode') === 'true';
setDarkMode(darkPref);

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    setDarkMode(isDark);
    localStorage.setItem('darkMode', isDark);
  });
}

// --- SCROLL-BASED SECTION ANIMATIONS ---
function revealSectionsOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', revealSectionsOnScroll);
window.addEventListener('DOMContentLoaded', revealSectionsOnScroll);
