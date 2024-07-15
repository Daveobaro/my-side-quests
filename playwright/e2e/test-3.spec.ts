import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-6.d.bark.com/en/gb/');
  await page.locator('#page-header').getByText('Web Design').click();
  await page.locator('label').filter({ hasText: 'Make changes to my current' }).getByLabel('Image for question').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('I\'m not sure').click();
  await page.getByLabel('close-modal').click();
  await page.getByRole('button', { name: 'Continue' }).click();
});