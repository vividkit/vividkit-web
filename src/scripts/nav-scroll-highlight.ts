export function initNavScrollHighlight() {
  // Get all sections with IDs
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  const mobileNavLinks = document.querySelectorAll('#mobile-menu a[href^="#"]');

  // Create intersection observer for nav highlighting
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        // Update desktop nav
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('nav-link', 'active');
          } else {
            link.classList.add('nav-link');
          }
        });

        // Update mobile nav
        mobileNavLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('nav-link', 'active');
          } else {
            link.classList.add('nav-link');
          }
        });
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: '-100px 0px -50% 0px' // Adjust for fixed header
  });

  // Observe all sections
  sections.forEach((section) => {
    navObserver.observe(section);
  });

  // Set initial active state
  const updateInitialActive = () => {
    let activeId = 'hero';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150) {
        const sectionId = section.getAttribute('id');
        if (sectionId) {
          activeId = sectionId;
        }
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${activeId}`) {
        link.classList.add('nav-link', 'active');
      } else {
        link.classList.add('nav-link');
      }
    });

    mobileNavLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${activeId}`) {
        link.classList.add('nav-link', 'active');
      } else {
        link.classList.add('nav-link');
      }
    });
  };

  // Update on scroll
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateInitialActive();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  // Initial update
  updateInitialActive();
}