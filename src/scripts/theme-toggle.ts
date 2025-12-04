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

  // Toggle button handler
  const toggleButton = document.getElementById('theme-toggle');
  if (!toggleButton) {
    console.warn('Theme toggle button not found');
    return;
  }

  toggleButton.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');

    // Toggle dark class
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log('Switched to light mode');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('Switched to dark mode');
    }
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only auto-switch if user hasn't manually set theme
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  });

  // Debug current theme state
  console.log('Theme initialized:', {
    stored: storedTheme,
    prefersDark,
    current: document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  });
}
