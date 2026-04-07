import { test, expect } from '@playwright/test';


test('submission works', async ({ page }) => {
    await page.goto('/submission');

    await expect(page).toHaveTitle('The Betty Award');
    await expect(page.locator('h1')).toHaveText('Submit Story For Summer 2026');

    await page.fill('#authorsname', 'Test Author');
    await page.selectOption('#authorsage', '10');
    await page.fill('#storytitle', 'Test Story Title');
    await page.fill('#parentsname', 'Test Parent');
    await page.fill('#emailaddress', 'automation2026@example.com');
    await page.fill('#phonenumber', '123-456-7890');
    await page.selectOption('#country', 'United States');
    await page.check('#permission-disclosure');
    await page.check('#reproduction-disclosure');
    await page.check('#originality-disclosure');
    await page.check('#marketing-consent');
    await page.click('button[type="submit"]');
    await page.waitForTimeout(5000); // wait for 1 second to ensure all interactions are processed
});