import { test } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.context().storageState({ path: './LoginAuth.json' });
});
