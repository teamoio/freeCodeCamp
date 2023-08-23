import { test, expect, type Page } from '@playwright/test';

let page: Page;

test.use({ storageState: 'LoginAuth.json' });

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/certification/certifieduser/responsive-web-design');
});

test.afterAll(async () => {
  await page.close();
});

test('while viewing own, should display certificate', async () => {
  expect(await page.isVisible('text=successfully completed')).toBeTruthy();
  expect(await page.isVisible('text=Responsive Web Design')).toBeTruthy();
});

test('while viewing own, should render a LinkedIn button', async () => {
  expect(
    await page.isVisible('text=Add this certification to my LinkedIn profile')
  ).toBeTruthy();
});

test('while viewing own, should render a Twitter button', async () => {
  expect(
    await page.isVisible('text=Share this certification on Twitter')
  ).toBeTruthy();
});

test('while viewing own, should be issued with the submission date', async () => {
  await expect(page.locator('[data-cy=issue-date]')).toContainText(
    'Developer Certification on August 3, 2018'
  );
});
