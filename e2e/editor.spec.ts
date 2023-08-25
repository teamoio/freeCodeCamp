import { test, expect } from '@playwright/test';

const editorElement = {
  editor: '.monaco-editor'
};

test.describe('Editor Shortcuts', () => {
  test('Should handle Alt+Enter', async ({ page }) => {
    await page.goto(
      'learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );

    const editor = await page.waitForSelector(editorElement.editor, {
      timeout: 15000
    });
    await editor.click();
    await page.keyboard.press('Alt+Enter');

    const editorValue = await editor.textContent();
    expect(editorValue).toBe('<h1>Hello</h1>\n');
  });

  test('Should ignore Ctrl+Enter', async ({ page }) => {
    await page.goto(
      'learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );

    const editor = await page.waitForSelector(editorElement.editor, {
      timeout: 15000
    });
    await editor.click();
    await page.keyboard.press('Control+Enter');

    const editorValue = await editor.textContent();
    expect(editorValue).toBe('<h1>Hello</h1>');
  });
});
