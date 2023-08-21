import { test } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.context().storageState({ path: './LoginAuth.json' });
});
