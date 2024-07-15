

import { test, expect } from '@playwright/test';
import { url } from 'inspector';

test('test', async ({ page }) => {
  await page.goto('https://qa-6.d.bark.com');

});