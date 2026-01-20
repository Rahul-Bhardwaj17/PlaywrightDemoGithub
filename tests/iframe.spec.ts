import { test, expect } from '../Utility/index';

test.use({ video: { mode: 'on', size: { width: 500, height: 500 } } })
test('iframe test', async ({ page }) => {
    await page.goto('/AutomationPractice/');
    const frames = page.frames();
    console.log(`all frame counts ${frames.length}`);
    const iframe = page.frameLocator('#courses-iframe');
    await iframe.locator('div.space-y-8 h2 span.text-primary').waitFor({ state: 'visible', timeout: 10000 });
    const textContent = await iframe.locator('div.space-y-8 h2 span.text-primary').textContent();
    expect(textContent).toBe('Rahul Shetty.');
})
