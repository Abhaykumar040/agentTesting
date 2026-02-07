import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/externalJob`;
const pathName=`outputData/status/${testData.companyType}`


export async function skill(page){
   await deletePreviousProficiency(page);
     await page.waitForTimeout(3000);
await deletePreviousSkill(page);
 await page.waitForTimeout(3000);
await addProficiency(page);
 await page.waitForTimeout(3000);

}
async function deletePreviousSkill(page){

  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Skill' }).click();
     await page.waitForTimeout(3000);


    while( true){
     const text = await page.textContent('text=Showing');
  const match = text.match(/of\s+(\d+)\s+entries/);
  const total = match ? parseInt(match[1]) : 0;

  // Stop loop if total <= 0
  if (total <= 0) {
    break;
  }
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();

    await expect(page.getByText('Skill deleted successfully').first()).toBeVisible();
    await page.waitForTimeout(1000);
    }
   
await page.reload();
}

async function createCustomerFsm(page){

}