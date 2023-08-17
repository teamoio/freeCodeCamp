import { test, expect, type Page } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto(
    'http://localhost:8000/certification/certifieduser/responsive-web-design'
  );
});

test.afterAll(async () => {
  await page.close();
});

test('while viewing someone else, should display certificate', async () => {
  await expect(page.locator('text=successfully completed')).toBeVisible();
  await expect(page.locator('text=Responsive Web Design')).toBeVisible();
});

test('while viewing someone else, should not render a LinkedIn button', async () => {
  await expect(
    page.locator('text=Add this certification to my LinkedIn profile')
  ).toBeHidden();
});

test('while viewing someone else, should not render a Twitter button', async () => {
  await expect(
    page.locator('text=Share this certification on Twitter')
  ).toBeHidden();
});
