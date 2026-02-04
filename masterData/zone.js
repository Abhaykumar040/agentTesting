import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';




export async function zone(page){
 await deletePreviuosZone(page);
 await page.waitForTimeout(3000);
 await addZone(page);
 await page.waitForTimeout(3000);
 await deleteZone(page);
}

async function deletePreviuosZone(page) {
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Zone' }).click();
  await page.waitForTimeout(3000);
  while( true){
    const text = await page.textContent('text=Showing');
    const match = text.match(/of\s+(\d+)\s+entries/);
    const total = match ? parseInt(match[1]) : 0;

    // Stop loop if total <= 0
    if (total == 1) {
       await page.waitForTimeout(3000);
    }
    if (total <= 0) {
      break;
    }
    console.log("Before delete line 185")
    await page.getByRole('button', { name: 'Master Data' }).click();
    await page.getByRole('link', { name: 'Zone' }).click();
    await page.getByRole('button', { name: 'Delete' }).first().click();
    await page.getByRole('button', { name: 'Proceed' }).click();
    await expect(page.getByText('Zone deleted successfully')).toBeVisible();
  }
  await page.reload();
  
}
async function addZone(page) {
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Zone' }).click();
  await page.getByRole('button', { name: 'Add New Zone' }).click();
  await page.getByRole('textbox', { name: 'Zone Name' }).click();
  await page.getByRole('textbox', { name: 'Zone Name' }).fill('NI');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('North India');
  await page.locator('input[name="color"]').click();
  await page.locator('input[name="color"]').fill('#c9e24b');
  await page.getByRole('button', { name: 'Create Zone' }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.locator('.MuiSwitch-root').click();
  await page.getByRole('textbox', { name: 'From (e.g. N1 1AA)' }).click();
  await page.getByRole('textbox', { name: 'From (e.g. N1 1AA)' }).fill('221306');
  await page.getByRole('textbox', { name: 'To (e.g. N22 9ZZ)' }).click();
  await page.getByRole('textbox', { name: 'To (e.g. N22 9ZZ)' }).fill('221606');
  await page.getByRole('button').nth(3).click();
  await page.getByRole('textbox', { name: 'Enter postcode' }).first().click();
  await page.getByRole('textbox', { name: 'Enter postcode' }).first().fill('221307');
  await page.getByRole('button').nth(5).click();
  await page.getByRole('textbox', { name: 'Enter postcode' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Enter postcode' }).nth(1).fill('221308');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await expect(page.locator('.MuiCardContent-root')).toBeVisible();

  
  
}

async function deleteZone(page) {
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Zone' }).click();
  await page.getByRole('button', { name: 'Delete' }).first().click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await expect(page.getByText('Zone deleted successfully')).toBeVisible();
}