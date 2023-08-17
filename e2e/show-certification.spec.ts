import { test, expect } from '@playwright/test';

test('while viewing someone else', async ({ page }) => {
  await page.goto(
    'http://localhost:8000/certification/certifieduser/responsive-web-design'
  );

  const certificateText = page
    .locator('#gatsby-focus-wrapper div')
    .filter({
      hasText:
        'This certifies that Full Stack User successfully completed the Responsive Web De'
    })
    .nth(2);
  const LinkedIn = page.getByRole('link', {
    name: 'Add this certification to my LinkedIn profile'
  });
  const Twitter = page.getByRole('link', {
    name: 'Share this certification on Twitter'
  });

  await expect(certificateText).toBeVisible();
  await expect(LinkedIn).toBeHidden();
  await expect(Twitter).toBeHidden();
  await expect(page.locator('[data-cy=issue-date]')).toContainText(
    'Developer Certification on August 3, 2018'
  );
});

test('while viewing your own', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.goto(
    'http://localhost:8000/certification/certifieduser/responsive-web-design'
  );

  const certificateText = page
    .locator('#gatsby-focus-wrapper div')
    .filter({
      hasText:
        'This certifies that Full Stack User successfully completed the Responsive Web De'
    })
    .nth(2);
  const LinkedIn = page.getByRole('link', {
    name: 'Add this certification to my LinkedIn profile'
  });
  const Twitter = page.getByRole('link', {
    name: 'Share this certification on Twitter'
  });

  await expect(certificateText).toBeVisible({ timeout: 10000 });
  await expect(LinkedIn).toBeVisible({ timeout: 10000 });
  await expect(Twitter).toBeVisible({ timeout: 10000 });
  await expect(page.locator('[data-cy=issue-date]')).toContainText(
    'Developer Certification on August 3, 2018'
  );
});
