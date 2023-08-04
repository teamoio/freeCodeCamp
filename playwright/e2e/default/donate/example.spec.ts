import { test, expect } from '@playwright/test';
import translations from '../../../../client/i18n/locales/english/translations.json';
const aboutPageAdd = 'http://localhost:8000' + '/donate';
test.beforeEach(async ({ page }) => {
  await page.goto(aboutPageAdd);
});
test.describe('Test web page for unauthorised user', () => {
  test('has title the correct title', async ({ page }): Promise<void> => {
    await expect(page).toHaveTitle('Support our charity | freeCodeCamp.org');
  });
  test('has correct header', async ({ page }): Promise<void> => {
    await expect(
      page.getByRole('heading', {
        name: 'Help us do more'
      })
    ).toBeVisible();
  });
  test('has correct header 2', async ({ page }): Promise<void> => {
    await expect(
      page.getByRole('heading', {
        name: 'Frequently asked questions'
      })
    ).toBeVisible();
  });
});
test.describe('Test paragraph 1 on /donate', () => {
  test('is visible', async ({ page }): Promise<void> => {
    const p1 = page.getByTestId('donateEfficiencyP1');
    await expect(p1).toBeVisible();
  });
  test('contains correct text', async ({ page }): Promise<void> => {
    const p1 = page.getByTestId('donateEfficiencyP1');
    await expect(p1).toContainText(translations.donate.efficiency);
  });
});
test.describe('Test paragraph 2 on /donate', () => {
  test('is visible', async ({ page }): Promise<void> => {
    const p3 = page.getByTestId('donateWhyDonateP1');
    await expect(p3).toBeVisible();
  });
  test('contains correct text', async ({ page }): Promise<void> => {
    const p2 = page.getByTestId('donateWhyDonateP1');
    await expect(p2).toContainText(translations.donate['why-donate-1']);
  });
});
test.describe('Test paragraph 3 on /donate', () => {
  test('is visible', async ({ page }): Promise<void> => {
    const p4 = page.getByTestId('donateWhyDonateP2');
    await expect(p4).toBeVisible();
  });
  test('contains correct text', async ({ page }): Promise<void> => {
    const p3 = page.getByTestId('donateWhyDonateP2');
    await expect(p3).toContainText(translations.donate['why-donate-2']);
  });
});
// Work In Progress
test.describe('Test FAQ Questions ', () => {
  test('Expand all FAQ Questions', async ({ page }): Promise<void> => {
    await page.getByText(translations.donate['how-transparent']).click();
    await page.getByText(translations.donate['how-efficient']).click();
    await page.getByText(translations.donate['how-one-time']).click();
    await page.getByText(translations.donate['how-matching-gift']).click();
    await page.getByText(translations.donate['how-endowment']).click();
    await page.getByText(translations.donate['how-legacy']).click();
    await page.getByText(translations.donate['how-update']).click();
    await page.getByText(translations.donate['does-crypto']).click();
    await page.getByText(translations.donate['how-stock']).click();
    await page.getByText(translations.donate['anything-else']).click();
    await page.getByText(translations.donate['can-check']).click();
    await page.getByText(translations.donate['get-help']).click();
  });
});
