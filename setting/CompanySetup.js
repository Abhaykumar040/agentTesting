import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/CompanySetup`
const pathName=`outputData/status/${testData.companyType}`


export async function companySetup(page){
await deletePreviousCompanySetup(page);
 await page.waitForTimeout(3000);

}
async function deletePreviousCompanySetup(page){

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
  await page.locator('button').nth(4).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
    await expect(page.getByText('Product category deleted').first()).toBeVisible();
    await page.waitForTimeout(1000);
    }
   
await page.reload();
}