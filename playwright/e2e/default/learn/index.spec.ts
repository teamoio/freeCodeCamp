import { test, expect } from '@playwright/test';
import translations from '../../../../client/i18n/locales/english/translations.json';

const learnPageAdd = 'http://localhost:8000' + '/learn';

test.beforeEach(async ({ page }) => {
  await page.goto(learnPageAdd);
});

test.describe('Test web page for unauthorised user', () => {
  test('has title the correct title', async ({ page }): Promise<void> => {
    await expect(page).toHaveTitle(
      'Learn to Code — For Free — Coding Courses for Busy People'
    );
  });

  test('has correct header', async ({ page }): Promise<void> => {
    await expect(
      page.getByRole('heading', {
        name: "Welcome to freeCodeCamp's curriculum."
      })
    ).toBeVisible();
  });
});

test.describe('test paragraph 1 on /learn', () => {
  test('is visible', async ({ page }): Promise<void> => {
    const p1 = page.getByTestId('learnReadThisP1');
    await expect(p1).toBeVisible();
  });

  test('contains correct text', async ({ page }): Promise<void> => {
    const p1 = page.getByTestId('learnReadThisP1');
    await expect(p1).toContainText(translations.learn['read-this'].p1);
  });
});

test.describe('test paragraph 2 on /learn', () => {
  test('is visible', async ({ page }): Promise<void> => {
    const p2 = page.getByTestId('learnReadThisP2');
    await expect(p2).toBeVisible();
  });

  test('contains correct text', async ({ page }): Promise<void> => {
    const p2 = page.getByTestId('learnReadThisP2');
    await expect(p2).toContainText(translations.learn['read-this'].p2);
  });
});

test.describe('test paragraph 3 on /learn', () => {
  test('is visible', async ({ page }): Promise<void> => {
    const p3 = page.getByTestId('learnReadThisP3');
    await expect(p3).toBeVisible();
  });

  test('contains correct text', async ({ page }): Promise<void> => {
    const p3 = page.getByTestId('learnReadThisP3');
    await expect(p3).toContainText(translations.learn['read-this'].p3);
  });
});

test.describe('test paragraph 4 on /learn', () => {
  test('is visible', async ({ page }): Promise<void> => {
    const p4 = page.getByTestId('learnReadThisP4');
    await expect(p4).toBeVisible();
  });

  test('contains correct text', async ({ page }): Promise<void> => {
    const p4 = page.getByTestId('learnReadThisP4');
    await expect(p4).toContainText(translations.learn['read-this'].p4);
  });
});

test.describe('test paragraph 5 on /learn', () => {
  test('is visible', async ({ page }): Promise<void> => {
    const p5 = page.getByTestId('learnReadThisP5');
    await expect(p5).toBeVisible();
  });

  test('contains correct text', async ({ page }): Promise<void> => {
    const p5 = page.getByTestId('learnReadThisP5');
    await expect(p5).toContainText(translations.learn['read-this'].p5);
  });
});

test.describe('test paragraph 6 on /learn', () => {
  test('is visible', async ({ page }): Promise<void> => {
    const p6 = page.getByTestId('learnReadThisP6');
    await expect(p6).toBeVisible();
  });

  test('contains correct text', async ({ page }): Promise<void> => {
    const p6 = page.getByTestId('learnReadThisP6');
    await expect(p6).toContainText(translations.learn['read-this'].p6);
  });
});

test.describe('test paragraph 7 on /learn', () => {
  test('is visible', async ({ page }): Promise<void> => {
    const p7 = page.getByTestId('learnReadThisP7');
    await expect(p7).toBeVisible();
  });

  test('contains correct text', async ({ page }): Promise<void> => {
    const p7 = page.getByTestId('learnReadThisP7');
    await expect(p7).toContainText(translations.learn['read-this'].p7);
  });
});
