import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/status`
const pathName=`outputData/status/${testData.companyType}`


export async function product(page){
await deletePreviousProduct(page);
 await page.waitForTimeout(3000);
await addProduct(page);
//  await page.waitForTimeout(3000);
//  await editForm(page);
//   await page.waitForTimeout(3000);
//   await deleteForm(page);
}
async function deletePreviousProduct(page){

  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Products' }).click();
     await page.waitForTimeout(3000);


    while( true){
     const text = await page.textContent('text=Showing');
  const match = text.match(/of\s+(\d+)\s+entries/);
  const total = match ? parseInt(match[1]) : 0;

  // Stop loop if total <= 0
  if (total <= 0) {
    break;
  }
    await page.locator('button').nth(3).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
    await expect(page.getByText('Product deleted successfully').first()).toBeVisible();
    await page.waitForTimeout(1000);
    }
   
await page.reload();
}

async function addProduct(page){
    await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Products' }).click();

  await page.getByRole('link', { name: 'Add Product' }).click();
  await page.getByRole('button', { name: 'Product Category *' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'PC3 - PC3D' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('charger 20w');
  await page.getByRole('textbox', { name: 'SKU' }).click();
  await page.getByRole('textbox', { name: 'SKU' }).fill('334');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('mobile charger');
  await page.getByRole('textbox', { name: 'Price *' }).click();
  await page.getByRole('textbox', { name: 'Price *' }).fill('199');
  await page.getByRole('textbox', { name: 'Tax (%)' }).click();
  await page.getByRole('textbox', { name: 'Tax (%)' }).fill('18');
  await page.getByRole('textbox', { name: 'Quantity *' }).click();
  await page.getByRole('textbox', { name: 'Quantity *' }).fill('120');
  await page.getByRole('textbox', { name: 'HSN Code' }).click();
  await page.getByRole('textbox', { name: 'HSN Code' }).fill('');
  await page.getByRole('textbox', { name: 'HSN Code' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'HSN Code' }).fill('CH20');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('link', { name: 'Add Product' }).click();
  await page.getByRole('button', { name: 'Product Category *' }).click();
  await page.getByRole('option', { name: 'PC2 - PC2D' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('COVER');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('COVER ');
  await page.getByRole('textbox', { name: 'Description' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Description' }).fill('COVER for mobile');
  await page.getByRole('textbox', { name: 'Price *' }).click();
  await page.getByRole('textbox', { name: 'Price *' }).fill('119');
  await page.getByRole('textbox', { name: 'Tax (%)' }).click();
  await page.getByRole('textbox', { name: 'Tax (%)' }).fill('5');
  await page.getByRole('textbox', { name: 'Quantity *' }).click();
  await page.getByRole('textbox', { name: 'Quantity *' }).fill('190');
  await page.getByRole('textbox', { name: 'HSN Code' }).click();
  await page.getByRole('textbox', { name: 'HSN Code' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'HSN Code' }).fill('MOC119');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('link', { name: 'Add Product' }).click();
  await page.getByRole('button', { name: 'Product Category *' }).click();
  await page.getByRole('option', { name: 'PC1 - PC1D' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Title *' }).fill('printer');
  await page.getByRole('textbox', { name: 'SKU' }).click();
  await page.getByRole('textbox', { name: 'SKU' }).fill('56y7');
  await page.getByRole('textbox', { name: 'Price *' }).click();
  await page.getByRole('textbox', { name: 'Price *' }).fill('12000');
  await page.getByRole('textbox', { name: 'Tax (%)' }).click();
  await page.getByRole('textbox', { name: 'Tax (%)' }).fill('15');
  await page.getByRole('textbox', { name: 'Quantity *' }).click();
  await page.getByRole('textbox', { name: 'Quantity *' }).fill('34');
  await page.getByRole('textbox', { name: 'HSN Code' }).click();
  await page.getByRole('textbox', { name: 'HSN Code' }).fill('p2');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'SKU' }).fill('567');
  await page.getByRole('button', { name: 'Add' }).click();
}