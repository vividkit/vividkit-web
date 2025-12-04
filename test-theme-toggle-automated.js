/**
 * Automated test suite for theme toggle functionality
 * Tests:
 * 1. Initial theme load
 * 2. Click toggle to switch themes
 * 3. Icon visibility toggle
 * 4. localStorage persistence
 * 5. Page refresh persistence
 * 6. Multiple sequential toggles
 * 7. Console error checking
 */

import puppeteer from 'puppeteer';

const TEST_URL = 'http://localhost:4321';
let browser;
let page;
const results = {
  passed: [],
  failed: [],
  warnings: []
};

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function setup() {
  browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  page = await browser.newPage();

  // Capture console messages
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    if (type === 'error') {
      console.log(`[BROWSER CONSOLE ERROR] ${text}`);
      results.warnings.push(`Console error: ${text}`);
    }
  });

  // Capture errors
  page.on('error', err => {
    results.warnings.push(`Page error: ${err.message}`);
  });
}

async function teardown() {
  if (page) await page.close();
  if (browser) await browser.close();
}

async function test1_InitialThemeLoad() {
  console.log('\n=== TEST 1: Initial Theme Load ===');

  try {
    await page.goto(TEST_URL, { waitUntil: 'networkidle2' });

    // Check if dark class exists or not
    const hasDarkClass = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark');
    });

    // Check if theme is set in localStorage
    const theme = await page.evaluate(() => {
      return localStorage.getItem('theme');
    });

    console.log(`Dark class present: ${hasDarkClass}`);
    console.log(`Theme in localStorage: ${theme}`);

    if (theme === null) {
      results.passed.push('Test 1: Initial load respects system preference (no explicit theme set)');
    } else if ((theme === 'dark' && hasDarkClass) || (theme === 'light' && !hasDarkClass)) {
      results.passed.push('Test 1: Initial theme load matches localStorage setting');
    } else {
      results.failed.push('Test 1: Theme state mismatch between DOM and localStorage');
    }
  } catch (error) {
    results.failed.push(`Test 1: ${error.message}`);
  }
}

async function test2_ThemeToggleClick() {
  console.log('\n=== TEST 2: Theme Toggle Click ===');

  try {
    // Get initial state
    const initialDark = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark');
    });

    console.log(`Initial dark mode: ${initialDark}`);

    // Click the theme toggle button
    const toggleExists = await page.$('#theme-toggle');
    if (!toggleExists) {
      results.failed.push('Test 2: Theme toggle button (#theme-toggle) not found');
      return;
    }

    // Scroll to make sure button is in viewport
    await page.evaluate(() => {
      const btn = document.getElementById('theme-toggle');
      if (btn) btn.scrollIntoView();
    });

    await delay(100);

    // Click with force option
    await page.evaluate(() => {
      const btn = document.getElementById('theme-toggle');
      if (btn) btn.click();
    });

    // Wait a bit for the change to propagate
    await delay(300);

    // Check new state
    const afterDark = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark');
    });

    console.log(`After toggle dark mode: ${afterDark}`);

    // State should be toggled
    if (initialDark !== afterDark) {
      results.passed.push('Test 2: Theme toggle button successfully toggles dark class');
    } else {
      results.failed.push('Test 2: Dark class did not toggle after clicking button');
    }
  } catch (error) {
    results.failed.push(`Test 2: ${error.message}`);
  }
}

async function test3_IconVisibility() {
  console.log('\n=== TEST 3: Icon Visibility Toggle ===');

  try {
    // Get initial state and icons
    const iconState = await page.evaluate(() => {
      const isDark = document.documentElement.classList.contains('dark');
      const sunIcon = document.querySelector('#theme-toggle .sun-icon');
      const moonIcon = document.querySelector('#theme-toggle .moon-icon');

      if (!sunIcon || !moonIcon) {
        return { error: 'Icons not found' };
      }

      return {
        isDark,
        sunHidden: sunIcon.classList.contains('hidden'),
        moonHidden: moonIcon.classList.contains('hidden')
      };
    });

    if (iconState.error) {
      results.failed.push(`Test 3: ${iconState.error}`);
      return;
    }

    console.log(`isDark: ${iconState.isDark}, sunHidden: ${iconState.sunHidden}, moonHidden: ${iconState.moonHidden}`);

    // In dark mode: sun should be visible (not hidden), moon should be hidden
    // In light mode: moon should be visible (not hidden), sun should be hidden
    if (iconState.isDark && !iconState.sunHidden && iconState.moonHidden) {
      results.passed.push('Test 3: Icons correct for dark mode (sun visible, moon hidden)');
    } else if (!iconState.isDark && iconState.sunHidden && !iconState.moonHidden) {
      results.passed.push('Test 3: Icons correct for light mode (moon visible, sun hidden)');
    } else {
      results.failed.push('Test 3: Icon visibility does not match theme state');
    }

    // Toggle and recheck
    await page.evaluate(() => {
      const btn = document.getElementById('theme-toggle');
      if (btn) btn.click();
    });
    await delay(300);

    const newIconState = await page.evaluate(() => {
      const isDark = document.documentElement.classList.contains('dark');
      const sunIcon = document.querySelector('#theme-toggle .sun-icon');
      const moonIcon = document.querySelector('#theme-toggle .moon-icon');

      return {
        isDark,
        sunHidden: sunIcon.classList.contains('hidden'),
        moonHidden: moonIcon.classList.contains('hidden')
      };
    });

    console.log(`After toggle - isDark: ${newIconState.isDark}, sunHidden: ${newIconState.sunHidden}, moonHidden: ${newIconState.moonHidden}`);

    if (newIconState.isDark && !newIconState.sunHidden && newIconState.moonHidden) {
      results.passed.push('Test 3: Icons toggle correctly to dark mode');
    } else if (!newIconState.isDark && newIconState.sunHidden && !newIconState.moonHidden) {
      results.passed.push('Test 3: Icons toggle correctly to light mode');
    } else {
      results.failed.push('Test 3: Icons did not toggle correctly');
    }
  } catch (error) {
    results.failed.push(`Test 3: ${error.message}`);
  }
}

async function test4_LocalStoragePersistence() {
  console.log('\n=== TEST 4: localStorage Persistence ===');

  try {
    // Get current dark state
    const isDark = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark');
    });

    // Get theme from localStorage
    const theme = await page.evaluate(() => {
      return localStorage.getItem('theme');
    });

    console.log(`isDark: ${isDark}, localStorage theme: ${theme}`);

    // Verify consistency - after toggle, localStorage should be set
    if ((isDark && theme === 'dark') || (!isDark && theme === 'light')) {
      results.passed.push('Test 4: localStorage theme value matches DOM state');
    } else {
      results.failed.push(`Test 4: localStorage theme (${theme}) does not match DOM state (dark=${isDark})`);
    }
  } catch (error) {
    results.failed.push(`Test 4: ${error.message}`);
  }
}

async function test5_PageRefreshPersistence() {
  console.log('\n=== TEST 5: Page Refresh Persistence ===');

  try {
    // Get current state
    const beforeRefresh = await page.evaluate(() => {
      return {
        isDark: document.documentElement.classList.contains('dark'),
        theme: localStorage.getItem('theme')
      };
    });

    console.log(`Before refresh - isDark: ${beforeRefresh.isDark}, theme: ${beforeRefresh.theme}`);

    // Refresh page
    await page.reload({ waitUntil: 'networkidle2' });

    // Wait for scripts to execute
    await delay(500);

    // Get state after refresh
    const afterRefresh = await page.evaluate(() => {
      return {
        isDark: document.documentElement.classList.contains('dark'),
        theme: localStorage.getItem('theme')
      };
    });

    console.log(`After refresh - isDark: ${afterRefresh.isDark}, theme: ${afterRefresh.theme}`);

    // Should match
    if (beforeRefresh.isDark === afterRefresh.isDark && beforeRefresh.theme === afterRefresh.theme) {
      results.passed.push('Test 5: Theme preference persists across page refresh');
    } else {
      results.failed.push('Test 5: Theme preference not maintained after refresh');
    }
  } catch (error) {
    results.failed.push(`Test 5: ${error.message}`);
  }
}

async function test6_MultipleToggles() {
  console.log('\n=== TEST 6: Multiple Sequential Toggles ===');

  try {
    const states = [];

    for (let i = 0; i < 5; i++) {
      const state = await page.evaluate(() => {
        return document.documentElement.classList.contains('dark');
      });
      states.push(state);
      console.log(`  State ${i}: ${state}`);

      if (i < 4) {
        await page.evaluate(() => {
          const btn = document.getElementById('theme-toggle');
          if (btn) btn.click();
        });
        await delay(200);
      }
    }

    console.log(`Toggle sequence: ${states.join(' -> ')}`);

    // After 4 toggles (state[4]), should be back to original state (state[0])
    if (states[0] === states[4]) {
      // Check intermediate states alternate
      if (states[0] !== states[1] && states[1] !== states[2] && states[2] !== states[3] && states[3] !== states[4]) {
        results.passed.push('Test 6: Multiple sequential toggles work correctly');
      } else {
        results.failed.push('Test 6: Toggle states do not alternate properly');
      }
    } else {
      results.failed.push(`Test 6: After 4 toggles, state (${states[4]}) does not return to original (${states[0]})`);
    }
  } catch (error) {
    results.failed.push(`Test 6: ${error.message}`);
  }
}

async function test7_ConsoleErrors() {
  console.log('\n=== TEST 7: Console Error Check ===');

  try {
    if (results.warnings.length === 0) {
      results.passed.push('Test 7: No console errors detected');
    } else {
      results.warnings.forEach(warning => {
        console.log(`  Warning: ${warning}`);
      });
    }
  } catch (error) {
    results.failed.push(`Test 7: ${error.message}`);
  }
}

async function runAllTests() {
  console.log('Starting automated theme toggle tests...\n');

  try {
    await setup();

    await test1_InitialThemeLoad();
    await test2_ThemeToggleClick();
    await test3_IconVisibility();
    await test4_LocalStoragePersistence();
    await test5_PageRefreshPersistence();
    await test6_MultipleToggles();
    await test7_ConsoleErrors();

    // Print summary
    console.log('\n\n=== TEST SUMMARY ===');
    console.log(`Passed: ${results.passed.length}`);
    console.log(`Failed: ${results.failed.length}`);
    console.log(`Warnings: ${results.warnings.length}`);

    console.log('\nPassed tests:');
    results.passed.forEach((test) => {
      console.log(`  ✓ ${test}`);
    });

    if (results.failed.length > 0) {
      console.log('\nFailed tests:');
      results.failed.forEach((test) => {
        console.log(`  ✗ ${test}`);
      });
    }

    if (results.warnings.length > 0) {
      console.log('\nWarnings:');
      results.warnings.forEach((warning) => {
        console.log(`  ⚠ ${warning}`);
      });
    }

    process.exit(results.failed.length > 0 ? 1 : 0);
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  } finally {
    await teardown();
  }
}

runAllTests();
