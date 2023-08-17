import { test, expect, type Page } from '@playwright/test';

test.describe('while viewing someone else certificate', () => {
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
});

test.describe('while viewing own certificate', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('http://localhost:8000/');

    const signInLink = page.getByRole('link', { name: 'Sign in' });
    await Promise.all([
      signInLink.click(),
      page.waitForLoadState() // Wait for the first navigation to complete
    ]);

    await page.goto(
      'http://localhost:8000/certification/certifieduser/responsive-web-design'
    );
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should display certificate', async () => {
    await expect(page.locator('text=successfully completed')).toBeVisible();
    await expect(page.locator('text=Responsive Web Design')).toBeVisible();
  });

  test('should render a LinkedIn button', async () => {
    await expect(
      page.locator('text=Add this certification to my LinkedIn profile')
    ).toBeVisible();
  });

  test('should render a Twitter button', async () => {
    await expect(
      page.locator('text=Share this certification on Twitter')
    ).toBeVisible();
  });

  test('should be issued with the submission date', async () => {
    await expect(page.locator('[data-cy=issue-date]')).toContainText(
      'Developer Certification on August 3, 2018'
    );
  });
});
