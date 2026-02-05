import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';


export async function assetsCategory(page){
 await deletePreviuosAssets(page);
 await page.waitForTimeout(2000);
 await addAssets(page);
 await page.waitForTimeout(2000);
 await editAssets(page);
 await page.waitForTimeout(2000);
 await deleteAssets(page);
}


async function addAssets(page) {
   await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Asset Category' }).click();
  await page.getByRole('button', { name: 'Add Asset Category' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Assets1');
  await page.getByRole('combobox', { name: 'Form *' }).click();
  await page.getByRole('option', { name: 'Assets' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await expect(page.getByRole('cell', { name: 'Asset Management' })).toBeVisible();

  await page.getByRole('button', { name: 'Add Asset Category' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Assets2');
  await page.getByRole('combobox', { name: 'Form *' }).click();
  await page.getByRole('option', { name: 'Assets' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await expect(page.getByRole('cell', { name: 'Asset Management' }).first()).toBeVisible();

  await page.getByRole('button', { name: 'Add Asset Category' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Assets3');
  await page.getByRole('option', { name: 'Assets' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await expect(page.getByRole('cell', { name: 'Asset Management' }).first()).toBeVisible();

  await page.getByRole('button', { name: 'Add Asset Category' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Assets4');
  await page.getByRole('combobox', { name: 'Form *' }).click();
  await page.getByRole('option', { name: 'Assets' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await expect(page.getByRole('cell', { name: 'Asset Management' }).first()).toBeVisible();

  await page.getByRole('button', { name: 'Add Asset Category' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Assets5');
  await page.getByRole('combobox', { name: 'Form *' }).click();
  await page.getByRole('option', { name: 'Assets' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await expect(page.getByRole('cell', { name: 'Asset Management' }).first()).toBeVisible();

  await page.reload();
  await page.waitForLoadState('networkidle');
}

async function editAssets(page){
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Asset Category' }).click();
  await page.locator('button').nth(2).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Charger Cabal');
  await page.getByRole('combobox', { name: 'Form *' }).click();
  await page.getByRole('option', { name: 'IntalationForm' }).click();
  await page.getByRole('button', { name: 'Update Category' }).click();
  await expect(page.getByText('Asset Category updated')).toBeVisible();

  await page.locator('button').nth(4).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Adaptor');
  await page.getByRole('combobox', { name: 'Form *' }).click();
  await page.getByRole('option', { name: 'IntalationForm' }).click();
  await page.getByRole('button', { name: 'Update Category' }).click();
  await expect(page.getByText('Asset Category updated')).toBeVisible();

  await page.locator('button').nth(5).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Fast Charger');
  await page.getByRole('combobox', { name: 'Form *' }).click();
  await page.getByRole('option', { name: 'IntalationForm' }).click();
  await page.getByRole('button', { name: 'Update Category' }).click();
  await expect(page.getByText('Asset Category updated')).toBeVisible();
  
  

}

async function deleteAssets(page){
  
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Asset Category' }).click();
  await page.locator('button').nth(3).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await expect(page.getByText('Asset Category deleted')).toBeVisible();
}

async function deletePreviuosAssets(page){

  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Asset Category' }).click();
  await page.waitForTimeout(3000);
  while( true){
    const text = await page.textContent('text=Showing');
    const match = text.match(/of\s+(\d+)\s+entries/);
    const total = match ? parseInt(match[1]) : 0;

    // Stop loop if total <= 0
    // if (total == 1) {
    //    await page.waitForTimeout(3000);
    // }
    if (total <= 0) {
      break;
    }
    console.log("Before delete line 185")
    await page.locator('button').nth(3).click();
    await page.getByRole('menuitem', { name: 'Delete' }).click();
    await page.getByRole('button', { name: 'Proceed' }).click();
    await expect(page.locator('div').filter({ hasText: 'Asset Category deleted' }).nth(4)).toBeVisible();
   
  }
  await page.reload();
 

}