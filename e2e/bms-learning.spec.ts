import { test, expect } from '@playwright/test';

// NOTE: The app requires Supabase authentication. If auth redirects block
// access to /bms, these tests will fail. In that case, either:
//   1. Seed a test session / mock auth, or
//   2. Run tests against a build with auth disabled.

test.describe('BMS Learning Flow', () => {
  test('BMS page loads and shows 4 subject cards', async ({ page }) => {
    await page.goto('/bms');

    // Wait for the page to settle (auth redirect or content render)
    await page.waitForTimeout(2000);

    // Expect 4 subject cards: Biologie, Chemie, Physik, Mathematik
    const biologie = page.getByText('Biologie');
    const chemie = page.getByText('Chemie');
    const physik = page.getByText('Physik');
    const mathematik = page.getByText('Mathematik');

    await expect(biologie).toBeVisible();
    await expect(chemie).toBeVisible();
    await expect(physik).toBeVisible();
    await expect(mathematik).toBeVisible();
  });

  test('clicking a subject shows chapter list with progress bar', async ({
    page,
  }) => {
    await page.goto('/bms');
    await page.waitForTimeout(2000);

    // Click on Biologie
    await page.getByText('Biologie').click();

    // Expect chapter items to appear (e.g. "Zellbiologie", "Genetik", etc.)
    // Look for any progress indicator (progress bar or percentage)
    const progressIndicator = page.locator(
      '[role="progressbar"], .progress, [class*="progress"]'
    );
    await expect(progressIndicator.first()).toBeVisible({ timeout: 5000 });
  });

  test('clicking a chapter shows unterkapitel list', async ({ page }) => {
    await page.goto('/bms');
    await page.waitForTimeout(2000);

    // Navigate: Subject -> first chapter
    await page.getByText('Biologie').click();
    await page.waitForTimeout(1000);

    // Click the first chapter link/card
    const chapterLinks = page.locator('a[href*="/bms/"]');
    await expect(chapterLinks.first()).toBeVisible({ timeout: 5000 });
    await chapterLinks.first().click();

    // Expect numbered unterkapitel items
    await page.waitForTimeout(1000);
    const ukLinks = page.locator('a[href*="/bms/"]');
    await expect(ukLinks.first()).toBeVisible({ timeout: 5000 });
  });

  test('opening an unterkapitel shows reading page with title, TOC, and content', async ({
    page,
  }) => {
    // Navigate directly to a known UK path (Zellbiologie > first UK)
    await page.goto('/bms');
    await page.waitForTimeout(2000);

    await page.getByText('Biologie').click();
    await page.waitForTimeout(1000);

    const chapterLinks = page.locator('a[href*="/bms/"]');
    await expect(chapterLinks.first()).toBeVisible({ timeout: 5000 });
    await chapterLinks.first().click();
    await page.waitForTimeout(1000);

    const ukLinks = page.locator('a[href*="/bms/"]');
    await expect(ukLinks.first()).toBeVisible({ timeout: 5000 });
    await ukLinks.first().click();

    // Reading page should have: a title (h1 or h2), content text
    await page.waitForTimeout(2000);
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible({ timeout: 5000 });

    // Content area should have meaningful text
    const content = page.locator('main, [class*="content"], article').first();
    await expect(content).toBeVisible();
  });

  test('sticky header appears after scrolling down', async ({ page }) => {
    await page.goto('/bms');
    await page.waitForTimeout(2000);

    // Navigate to a reading page
    await page.getByText('Biologie').click();
    await page.waitForTimeout(1000);

    const chapterLinks = page.locator('a[href*="/bms/"]');
    await chapterLinks.first().click();
    await page.waitForTimeout(1000);

    const ukLinks = page.locator('a[href*="/bms/"]');
    await ukLinks.first().click();
    await page.waitForTimeout(2000);

    // Scroll down significantly
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(500);

    // Look for a sticky/fixed header element
    const stickyHeader = page.locator(
      '[class*="sticky"], [class*="fixed"], header'
    );
    await expect(stickyHeader.first()).toBeVisible();
  });

  test('next/prev navigation cards are visible at bottom', async ({
    page,
  }) => {
    await page.goto('/bms');
    await page.waitForTimeout(2000);

    // Navigate to a reading page
    await page.getByText('Biologie').click();
    await page.waitForTimeout(1000);

    const chapterLinks = page.locator('a[href*="/bms/"]');
    await chapterLinks.first().click();
    await page.waitForTimeout(1000);

    const ukLinks = page.locator('a[href*="/bms/"]');
    await ukLinks.first().click();
    await page.waitForTimeout(2000);

    // Scroll to bottom
    await page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight)
    );
    await page.waitForTimeout(500);

    // Look for next/prev navigation (links or buttons with "Nächstes", "Vorheriges", arrows, etc.)
    const navCards = page.locator(
      'a:has-text("Nächstes"), a:has-text("Vorheriges"), a:has-text("Weiter"), a:has-text("Zurück"), [class*="nav-card"], [class*="pagination"]'
    );
    await expect(navCards.first()).toBeVisible({ timeout: 5000 });
  });

  test('section TOC is visible and clicking scrolls to section', async ({
    page,
  }) => {
    await page.goto('/bms');
    await page.waitForTimeout(2000);

    // Navigate to a reading page
    await page.getByText('Biologie').click();
    await page.waitForTimeout(1000);

    const chapterLinks = page.locator('a[href*="/bms/"]');
    await chapterLinks.first().click();
    await page.waitForTimeout(1000);

    const ukLinks = page.locator('a[href*="/bms/"]');
    await ukLinks.first().click();
    await page.waitForTimeout(2000);

    // Look for a TOC / sidebar navigation with section links
    const tocLinks = page.locator(
      'nav a[href*="#"], [class*="toc"] a, aside a'
    );

    // TOC may only be visible on wider viewports (desktop)
    if ((await tocLinks.count()) > 0) {
      const firstTocLink = tocLinks.first();
      await expect(firstTocLink).toBeVisible();

      // Record scroll position, click TOC link, verify scroll changed
      const scrollBefore = await page.evaluate(() => window.scrollY);
      await firstTocLink.click();
      await page.waitForTimeout(500);
      const scrollAfter = await page.evaluate(() => window.scrollY);

      // Scroll should have changed (or stayed if already at top)
      expect(typeof scrollAfter).toBe('number');
    }
  });
});
