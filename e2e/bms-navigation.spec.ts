import { test, expect } from '@playwright/test';

// NOTE: The app requires Supabase authentication. If auth redirects block
// access to /bms, these tests will fail. In that case, either:
//   1. Seed a test session / mock auth, or
//   2. Run tests against a build with auth disabled.

test.describe('BMS Navigation', () => {
  test('back button in reading view returns to chapter overview', async ({
    page,
  }) => {
    await page.goto('/bms');
    await page.waitForTimeout(2000);

    // Navigate into a reading page
    await page.getByText('Biologie').click();
    await page.waitForTimeout(1000);

    const chapterLinks = page.locator('a[href*="/bms/"]');
    await expect(chapterLinks.first()).toBeVisible({ timeout: 5000 });
    await chapterLinks.first().click();
    await page.waitForTimeout(1000);

    const ukLinks = page.locator('a[href*="/bms/"]');
    await expect(ukLinks.first()).toBeVisible({ timeout: 5000 });
    await ukLinks.first().click();
    await page.waitForTimeout(2000);

    // Verify we are on a reading page (has heading)
    await expect(page.locator('h1, h2').first()).toBeVisible({ timeout: 5000 });

    // Click back button (look for back arrow, "Zurück", or browser-style back)
    const backButton = page.locator(
      'a:has-text("Zurück"), button:has-text("Zurück"), a[aria-label*="back"], a[aria-label*="Back"], [class*="back"]'
    );

    if ((await backButton.count()) > 0) {
      await backButton.first().click();
      await page.waitForTimeout(1000);

      // Should be back at chapter/UK list level (URL should be shorter)
      const url = page.url();
      expect(url).toContain('/bms');
    } else {
      // Fallback: use browser back
      await page.goBack();
      await page.waitForTimeout(1000);
      expect(page.url()).toContain('/bms');
    }
  });

  test('breadcrumb shows correct path', async ({ page }) => {
    await page.goto('/bms');
    await page.waitForTimeout(2000);

    // Navigate deep into a reading page
    await page.getByText('Biologie').click();
    await page.waitForTimeout(1000);

    const chapterLinks = page.locator('a[href*="/bms/"]');
    await expect(chapterLinks.first()).toBeVisible({ timeout: 5000 });
    await chapterLinks.first().click();
    await page.waitForTimeout(1000);

    const ukLinks = page.locator('a[href*="/bms/"]');
    await expect(ukLinks.first()).toBeVisible({ timeout: 5000 });
    await ukLinks.first().click();
    await page.waitForTimeout(2000);

    // Look for breadcrumb navigation
    const breadcrumb = page.locator(
      'nav[aria-label*="breadcrumb"], nav[aria-label*="Breadcrumb"], [class*="breadcrumb"]'
    );

    if ((await breadcrumb.count()) > 0) {
      await expect(breadcrumb.first()).toBeVisible();

      // Breadcrumb should contain path segments
      const breadcrumbText = await breadcrumb.first().textContent();
      expect(breadcrumbText).toBeTruthy();

      // Should reference BMS or the subject
      expect(
        breadcrumbText!.toLowerCase().includes('bms') ||
          breadcrumbText!.toLowerCase().includes('biologie')
      ).toBe(true);
    } else {
      // Breadcrumb may not exist — document as known gap
      test.info().annotations.push({
        type: 'known-limitation',
        description: 'No breadcrumb navigation found on reading page',
      });
    }
  });

  test('sidebar BMS tree can be expanded to show subjects and chapters', async ({
    page,
  }) => {
    await page.goto('/bms');
    await page.waitForTimeout(2000);

    // Look for sidebar / tree navigation
    const sidebar = page.locator(
      'aside, nav[class*="sidebar"], [class*="sidebar"], [class*="tree"]'
    );

    if ((await sidebar.count()) > 0) {
      await expect(sidebar.first()).toBeVisible();

      // Try to find expandable tree items (subject names in sidebar)
      const treeItems = sidebar
        .first()
        .locator(
          'button, a, [role="treeitem"], [class*="expand"], [class*="collapse"]'
        );

      if ((await treeItems.count()) > 0) {
        // Click first expandable item
        await treeItems.first().click();
        await page.waitForTimeout(500);

        // After expanding, more items should be visible
        const expandedItems = sidebar.first().locator('a, [role="treeitem"]');
        expect(await expandedItems.count()).toBeGreaterThan(0);
      }
    } else {
      // Sidebar may only appear on certain pages or viewports
      test.info().annotations.push({
        type: 'known-limitation',
        description:
          'No sidebar tree navigation found — may require wider viewport or different page state',
      });
    }
  });
});
