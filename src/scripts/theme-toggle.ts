export function initThemeToggle(): void {
  // Check localStorage and system preference on load
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply initial theme - ensure it's consistent with FOUC script
  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    // Explicitly remove dark class for light mode
    document.documentElement.classList.remove('dark');
  }

  // Update sun/moon icons based on current theme
  const updateIcons = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const sunIcon = document.querySelector('#theme-toggle .sun-icon');
    const moonIcon = document.querySelector('#theme-toggle .moon-icon');

    if (sunIcon && moonIcon) {
      if (isDark) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      }
    }
  };

  // Initial icon update after a small delay to ensure DOM is ready
  setTimeout(updateIcons, 50);

  // Add click handler to theme toggle button
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    // Remove existing listeners if any (though not possible with module script usually)
    const newThemeToggle = themeToggle.cloneNode(true);
    if (themeToggle.parentNode) {
      themeToggle.parentNode.replaceChild(newThemeToggle, themeToggle);
    }

    // Re-select the button after replacement
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.addEventListener('click', () => {
        const html = document.documentElement;
        const isDark = html.classList.contains('dark');

        if (isDark) {
          html.classList.remove('dark');
          localStorage.setItem('theme', 'light');
          console.log('Theme switched to light');
        } else {
          html.classList.add('dark');
          localStorage.setItem('theme', 'dark');
          console.log('Theme switched to dark');
        }

        // Update icons immediately
        updateIcons();
      });
    }
  } else {
    console.warn('Theme toggle button not found');
  }

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only auto-switch if user hasn't manually set theme
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      // Update icons
      setTimeout(updateIcons, 10);
    }
  });
}
