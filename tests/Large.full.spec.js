import { test, expect } from '@playwright/test';

test.describe('Portfolio Navigation', () => {


  test('Navigate to Home and About section', async ({ page }) => {
    await page.goto('https://christeners-portfolio.onrender.com/');
    await expect(page.locator('div > p:has-text("Hi, my name is")')).toBeVisible();
    await page.getByRole('link', { name: 'About' }).click();
    await page.waitForTimeout(1000);
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('div > p:has-text("I am a junior full-stack developer")')).toBeVisible();
  });

  test('Navigate to Projects section', async ({ page }) => {
     await page.goto('https://christeners-portfolio.onrender.com/');
     await page.locator('#projects').scrollIntoViewIfNeeded();
     await expect(page.locator('#projects')).toBeVisible();
    await expect(page.locator('div > p:has-text("Bootcamp Kitchen")')).toBeVisible();
    await page.click('button#moreInfoBtn');
    await expect(page).toHaveURL('https://christeners-portfolio.onrender.com/MoreInformation/Bootcamp%20kitchen/bootcampInfo.html');
   // Bootcamp more information

   await expect(page.locator('h1:text("Bootcamp Kitchen")')).toBeVisible();

   await page.click('text=View Code');
   const [sourcePage] = await Promise.all([
   page.context().waitForEvent('page'),]);
   await expect(sourcePage).toHaveURL('https://github.com/Christener19/bc15-w8-project-fully-stacked-bootcamp-kitchen');

   await page.click('text=View Project');
   const [newPage] = await Promise.all([
   page.context().waitForEvent('page'),]);
   await expect(newPage).toHaveURL('https://bootcamp-kitchen.vercel.app/');

    await page.locator('text=Overview').scrollIntoViewIfNeeded();
    await expect(page.locator('text=Overview')).toBeVisible();

    await page.locator('text=Day One:').scrollIntoViewIfNeeded();
    await expect(page.locator('text=Day One:')).toBeVisible();

    await page.locator('text=Day Two:').scrollIntoViewIfNeeded();
    await expect(page.locator('text=Day Two:')).toBeVisible();

    await page.locator('text=Day Three:').scrollIntoViewIfNeeded();
    await expect(page.locator('text=Day Three:')).toBeVisible();

    await page.locator('text=End Result:').scrollIntoViewIfNeeded();
    await expect(page.locator('text=End Result:')).toBeVisible();
    await page.locator('video').click();


    await page.locator('text=Personal Reflections').scrollIntoViewIfNeeded();
    await expect(page.locator('text=Personal Reflections')).toBeVisible();

    await page.locator('button:has(img[alt="Back button"])').click();
    await page.waitForURL('https://christeners-portfolio.onrender.com/', { timeout: 5000 });
    await expect(page).toHaveURL('https://christeners-portfolio.onrender.com/');
  });


  test('Fill and submit the contact form', async ({ page }) => {

    await page.goto('https://christeners-portfolio.onrender.com/');
    await expect(page.locator('h1.monitor-header:text("Contact")')).toBeVisible();
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await expect(page.locator('label', { hasText: 'Name:' })).toBeVisible();
    await page.fill('input#name', 'Emma Granger');
    await expect(page.locator('label', { hasText: 'Email:' })).toBeVisible();
    await page.fill('input#email', 'emma.watson@hotmail.com');
    await expect(page.locator('label', { hasText: 'Message:' })).toBeVisible();
    await page.fill('textarea#message', 'Hi, would you like to star in the Harry Potter series? Do get in touch!');
    await page.click('button#sendButton');
  });
  });
