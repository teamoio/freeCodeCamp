import { test, expect, type Page } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('http://localhost:8000/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.goto(
    'http://localhost:8000/certification/certifieduser/responsive-web-design'
  );
});

test.afterAll(async () => {
  await page.close();
});

test('while viewing own, should display certificate', async () => {
  await expect(page.locator('text=successfully completed')).toBeVisible();
  await expect(page.locator('text=Responsive Web Design')).toBeVisible();
});

test('while viewing own, should render a LinkedIn button', async () => {
  await expect(
    page.locator('text=Add this certification to my LinkedIn profile')
  ).toBeVisible();
});

test('while viewing own, should render a Twitter button', async () => {
  await expect(
    page.locator('text=Share this certification on Twitter')
  ).toBeVisible();
});

test('while viewing own, should be issued with the submission date', async () => {
  await expect(page.locator('[data-cy=issue-date]')).toContainText(
    'Developer Certification on August 3, 2018'
  );
});
