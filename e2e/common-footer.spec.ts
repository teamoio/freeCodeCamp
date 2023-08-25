import { test, expect, type Page } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test('Footer should render on the landing page', async () => {
  await page.goto('/');

  const footer = await page.waitForSelector('.site-footer');
  const isFooterVisible = await footer.isVisible();
  expect(isFooterVisible).toBe(true);
});

test('Footer should render on the learn page', async () => {
  await page.goto('/learn');

  const footer = await page.waitForSelector('.site-footer');
  const isFooterVisible = await footer.isVisible();
  expect(isFooterVisible).toBe(true);
});

test('Footer should render on the superblock page', async () => {
  await page.goto('/learn/responsive-web-design/');

  const footer = await page.waitForSelector('.site-footer');
  const isFooterVisible = await footer.isVisible();
  expect(isFooterVisible).toBe(true);
});

test('Footer should not render on the challenge page', async () => {
  await page.goto(
    '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
  );

  const footer = await page.$('.site-footer');
  expect(footer).toBeNull();
});
