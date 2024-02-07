import { test, expect } from '@playwright/test';

test.describe('Portfolio Navigation', () => {

  test('Navigate to About section', async ({ page }) => {
    await page.goto('https://christeners-portfolio.onrender.com/');
    await page.getByRole('link', { name: 'About' }).click();
    await page.waitForTimeout(1000);
    await expect(page.locator('#about')).toBeVisible();
  });

  test('Navigate to Projects section', async ({ page }) => {
     await page.goto('https://christeners-portfolio.onrender.com/');
     await page.locator('#projects').scrollIntoViewIfNeeded();
     await expect(page.locator('#projects')).toBeVisible();
  });

});
