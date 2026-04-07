import { test, expect } from '@playwright/test';


test('submission works', async ({ page }) => {
  await page.goto('http://localhost:3000/submission');

  await expect(page).toHaveTitle('The Betty Award');
  await expect(page.locator('h1')).toHaveText('Submit Story For Summer 2026');
});