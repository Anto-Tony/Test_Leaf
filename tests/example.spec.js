// @ts-check
import { test, expect } from '@playwright/test';

test('Verify whether the text box is clickable', async ({ page }) => {
 
  await page.goto('https://leafground.com/dashboard.xhtml');  
  await page.locator('i.pi.pi-server.layout-menuitem-icon').click();
  await page.locator('//li[@id="menuform:m_input"]').isEnabled();

});

test('Assign value in Text box', async ({ page }) => {
 
  await page.goto('https://leafground.com/dashboard.xhtml');  
  await page.locator('i.pi.pi-server.layout-menuitem-icon').click();
  await page.locator('//li[@id="menuform:m_input"]').click();
  await page.locator('#j_idt88\\:name').fill('Antony Mathan');
  await page.waitForTimeout(2000)

  // await expect(page.locator('#j_idt88\\:name')).toHaveText('Antony Mathan');
  // await expect(page.locator('#j_idt88\\:name')).toContainText('Antony Mathan');
  
});

test('Verify whether the user can append country in country field', async ({ page }) => {
 
  await page.goto('https://leafground.com/dashboard.xhtml');  
  await page.locator('i.pi.pi-server.layout-menuitem-icon').click();
  await page.locator('//li[@id="menuform:m_input"]').click();
  const countryAppend = page.locator('//input[@id="j_idt88:j_idt91"]');
  await countryAppend.focus();
  await countryAppend.evaluate("e => e.setSelectionRange(-1, -1)");
  await countryAppend.type("India");
  await page.waitForTimeout(2000)

});

test('Verify whether the field is disabled', async ({ page }) => {
 
  await page.goto('https://leafground.com/dashboard.xhtml');  
  await page.locator('i.pi.pi-server.layout-menuitem-icon').click();
  await page.locator('//li[@id="menuform:m_input"]').click();
  await page.locator('//input[@id="j_idt88:j_idt93"]').isDisabled();

  // await expect(page.locator('#j_idt88\\:name')).toHaveText('Antony Mathan');
  // await expect(page.locator('#j_idt88\\:name')).toContainText('Antony Mathan');
  
});


// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
