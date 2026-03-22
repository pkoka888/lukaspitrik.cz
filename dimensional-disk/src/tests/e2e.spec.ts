import { test, expect } from '@playwright/test';

test('homepage loads with hero and dark mode toggle works', async ({ page }) => {
  await page.goto('http://localhost:4321/');
  // Hero title
  await expect(page.locator('h1')).toHaveText('lukaspitrik.cz');
  // Dark mode toggle
  const toggle = page.locator('#theme-toggle');
  await expect(toggle).toBeVisible();
  // Click toggle and check class changes
  await toggle.click();
  await expect(page.locator('html')).toHaveClass(/dark/);
});
