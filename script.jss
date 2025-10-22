// script.js

// --- CONFIG: text to type in the hero subtitle ---
const TYPEWRITER_TEXT = "I’m a Web Developer dedicated to crafting modern, accessible, and performance-driven websites.";
const TYPING_SPEED = 30; // ms per character

// Typewriter effect
function typeWriter(targetId, text, speed) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.textContent = "";
  el.classList.add('typing'); // adds cursor via CSS
  let i = 0;
  function step() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(step, speed);
    } else {
      // finished typing: keep the cursor (CSS handles blink)
    }
  }
  step();
}

// Smooth anchor scrolling for in-page links
function enableSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// Reveal-on-scroll using IntersectionObserver
function enableRevealOnScroll() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12 // 12% of element visible
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        obs.unobserve(entry.target); // optional: reveal once
      }
    });
  }, observerOptions);

  document.querySelectorAll('section').forEach(sec => {
    observer.observe(sec);
  });
}

// Initialize on DOMContentLoaded (defer script also fine)
document.addEventListener('DOMContentLoaded', () => {
  // start typewriter (small delay so hero loads)
  setTimeout(() => typeWriter('typing-text', TYPEWRITER_TEXT, TYPING_SPEED), 300);

  enableSmoothScroll();
  enableRevealOnScroll();
});

