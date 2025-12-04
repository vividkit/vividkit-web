export function initSmoothScroll() {
  // Handle anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      // Calculate offset for fixed header
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const offset = 20; // Extra offset for spacing

      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - offset;

      // Smooth scroll to target
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Update URL without jumping
      if (history.pushState) {
        history.pushState(null, '', targetId);
      }
    });
  });

  // Handle scroll to top
  document.querySelectorAll('a[href="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (history.pushState) {
        history.pushState(null, '', '/');
      }
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const offset = 20;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
}