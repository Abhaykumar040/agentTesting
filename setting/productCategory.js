import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/productCategory`
const pathName=`outputData/status/${testData.companyType}`


export async function productCategory(page){
  await deletePreviousProductCategory(page);
  await page.waitForTimeout(3000);
  await addProductCategory(page);
  await page.waitForTimeout(3000);
  await editProductCategry(page);
  await page.waitForTimeout(3000);
  await deleteProductCategory(page);
}
async function deletePreviousProductCategory(page){

    await page.getByRole('button', { name: 'Settings' }).click();
    await page.getByRole('link', { name: 'Product Category' }).click();
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
      await page.getByRole('button', { name: 'Proceed' }).click();
      await expect(page.getByText('Product category deleted')).toBeVisible();
      await page.waitForTimeout(1000);
    }
   
await page.reload();
}

async function addProductCategory(page){
 await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Product Category' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Title *' }).fill('PC1');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('PC1D');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('PC1C');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('PC2');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('PC2D');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('PC2C');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('PC3');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('PC3D');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('PC3C');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('PC4DELETE');
  await page.getByRole('textbox', { name: 'Description *' }).click();
 
  
  await page.getByRole('textbox', { name: 'Description *' }).fill('PC4DeleteD');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('Pc4DeleteC');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(3000);
   
    //   await expect(page.getByText('PC4DELETE', { exact: true })).toBeVisible();
    //    await expect(page.getByText('Pc4Delete', { exact: true })).toBeVisible();
}

async function  editProductCategry(page) {
   await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Product Category' }).click();
  await page.locator('button').nth(2).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('PC4DELETE 1');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('PC4DeleteD updated');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('Pc4DeleteC testing');
  await page.getByRole('button', { name: 'Update' }).click();
  await expect(page.getByText('Product category updated')).toBeVisible();
}

async function deleteProductCategory(page) {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Product Category' }).click();
  await page.locator('button').nth(3).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await expect(page.getByText('Product category deleted')).toBeVisible();
}