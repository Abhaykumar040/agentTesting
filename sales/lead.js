import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/status`
const pathName=`outputData/status/${testData.companyType}`


export async function lead(page){
await deletePreviousLead(page);
 await page.waitForTimeout(3000);
// await addLead(page);
//  await page.waitForTimeout(3000);
//  await editForm(page);
//   await page.waitForTimeout(3000);
//   await deleteForm(page);
}
async function deletePreviousLead(page){

  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Lead Management' }).click();


     await page.waitForTimeout(3000);


    while( true){
     const text = await page.textContent('text=Showing');
  const match = text.match(/of\s+(\d+)\s+entries/);
  const total = match ? parseInt(match[1]) : 0;

  // Stop loop if total <= 0
  if (total <= 0) {
    break;
  }
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
  
    await expect(page.getByText('Lead deleted successfully').first()).toBeVisible();
    await page.waitForTimeout(1000);
    }
   
await page.reload();
}