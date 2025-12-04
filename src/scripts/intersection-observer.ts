export function initScrollAnimations() {
  // Add fade-in-up animation to sections
  const style = document.createElement('style');
  style.textContent = `
    .section {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .section.visible {
      opacity: 1;
      transform: translateY(0);
    }

    @media (prefers-reduced-motion: reduce) {
      .section {
        transition: none;
        opacity: 1;
        transform: none;
      }
    }
  `;
  document.head.appendChild(style);

  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe all sections
  document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section);
  });

  // Special handling for hero section - make it visible immediately
  const hero = document.getElementById('hero');
  if (hero) {
    hero.classList.add('visible');
  }

  // Handle reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.section').forEach((section) => {
      section.classList.add('visible');
    });
  }
}