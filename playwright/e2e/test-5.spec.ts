import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bark.com/en/ie/');
  await page.getByRole('heading', { name: 'Find the perfect professional' }).click();
});