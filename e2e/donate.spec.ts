import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

let page: Page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/donate');
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Test web page for unauthorised user', () => {
  test('has title the correct title', async (): Promise<void> => {
    await expect(page).toHaveTitle('Support our charity | freeCodeCamp.org');
  });

  test('has correct header', async (): Promise<void> => {
    await expect(
      page.getByRole('heading', {
        name: 'Help us do more'
      })
    ).toBeVisible();
  });

  test('has correct header 2', async (): Promise<void> => {
    await expect(
      page.getByRole('heading', {
        name: 'Frequently asked questions'
      })
    ).toBeVisible();
  });
});

test.describe('Test paragraph 1 on /donate', () => {
  test('is visible', async (): Promise<void> => {
    const p1 = page.getByTestId('donateEfficiencyP1');
    await expect(p1).toBeVisible();
  });

  test('contains correct text', async (): Promise<void> => {
    const p1 = page.getByTestId('donateEfficiencyP1');
    await expect(p1).toContainText(translations.donate.efficiency);
  });
});

test.describe('Test paragraph 2 on /donate', () => {
  test('contains correct text', async (): Promise<void> => {
    const p2 = page.getByTestId('donateWhyDonateP1');
    await expect(p2).toContainText(translations.donate['why-donate-1']);
  });
});

test.describe('Test paragraph 3 on /donate', () => {
  test('contains correct text', async (): Promise<void> => {
    const p3 = page.getByTestId('donateWhyDonateP2');
    await expect(p3).toContainText(translations.donate['why-donate-2']);
  });
});

// Work In Progress
test.describe('Test FAQ Questions ', () => {
  test('Test get-help?', async (): Promise<void> => {
    await page.getByText(translations.donate['get-help']).click();
    const a1 = page.getByTestId('donateFaqA1');
    await expect(a1).toContainText(translations.donate['forward-receipt']);
  });

  test('Test how-transparent?', async (): Promise<void> => {
    await page.getByText(translations.donate['how-transparent']).click();
    const a2p1 = page.getByTestId('donateFaqA2P1');
    await expect(a2p1).toContainText(translations.donate['very-transparent']);
  });

  test('Test how-efficient?', async (): Promise<void> => {
    await page.getByText(translations.donate['how-efficient']).click();
    const a3p1 = page.getByTestId('donateFaqA3P1');
    await expect(a3p1).toContainText(translations.donate['fcc-budget']);
    const a3p2 = page.getByTestId('donateFaqA3P2');
    await expect(a3p2).toContainText(translations.donate['help-millions']);
  });

  test('Test how one-time?', async (): Promise<void> => {
    await page.getByText(translations.donate['how-one-time']).click();
    const a4p2 = page.getByTestId('donateFaqA4P2');
    await expect(a4p2).toContainText(translations.donate['wire-transfer']);
  });

  test('Test does-crypto?', async (): Promise<void> => {
    await page.getByText(translations.donate['does-crypto']).click();
    const a5 = page.getByTestId('donateFaqA5');
    await expect(a5).toContainText(translations.donate['yes-cryptocurrency']);
  });

  test('Test mail-a-check?', async (): Promise<void> => {
    await page.getByText(translations.donate['can-check']).click();
    const a6 = page.getByTestId('donateFaqA6');
    await expect(a6).toContainText(translations.donate['yes-check']);
  });

  test('Test matching-gifts', async (): Promise<void> => {
    await page.getByText(translations.donate['how-matching-gift']).click();
    const a7p1 = page.getByTestId('donateFaqA7P1');
    await expect(a7p1).toContainText(translations.donate['employers-vary']);
    const a7p2 = page.getByTestId('donateFaqA7P2');
    await expect(a7p2).toContainText(translations.donate['some-volunteer']);
    const a7p3 = page.getByTestId('donateFaqA7P3');
    await expect(a7p3).toContainText(translations.donate['help-matching-gift']);
  });

  test('Test endowment-gifts?', async (): Promise<void> => {
    await page.getByText(translations.donate['how-endowment']).click();
    const a8 = page.getByTestId('donateFaqA8');
    await expect(a8).toContainText(translations.donate['endowment']);
  });

  test('Test legacy-gifts?', async (): Promise<void> => {
    await page.getByText(translations.donate['how-legacy']).click();
    const a9p1 = page.getByTestId('donateFaqA9P1');
    await expect(a9p1).toContainText(translations.donate['we-honored']);
    const a9p2 = page.getByTestId('donateFaqA9P2');
    await expect(a9p2).toContainText(
      translations.donate['legacy-gift-message']
    );
    const a9p3 = page.getByTestId('donateFaqA9P3');
    await expect(a9p3).toContainText(translations.donate['thank-wikimedia']);
    const a9p4 = page.getByTestId('donateFaqA9P4');
    await expect(a9p4).toContainText(
      translations.donate['legacy-gift-questions']
    );
  });

  test('Test how-stock?', async (): Promise<void> => {
    await page.getByText(translations.donate['how-stock']).click();
    const a8 = page.getByTestId('donateFaqA10');
    await expect(a8).toContainText(translations.donate['welcome-stock']);
  });

  test('Test how-update?', async (): Promise<void> => {
    await page.getByText(translations.donate['how-update']).click();
    const a8 = page.getByTestId('donateFaqA11');
    await expect(a8).toContainText(translations.donate['forward-receipt']);
  });

  test('Test anything-else?', async (): Promise<void> => {
    await page.getByText(translations.donate['anything-else']).click();
    const a8 = page.getByTestId('donateFaqA12');
    await expect(a8).toContainText(translations.donate['other-support']);
  });
});
