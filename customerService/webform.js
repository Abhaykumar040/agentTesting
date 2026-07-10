import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/status`
const pathName=`outputData/status/${testData.companyType}`


export async function status(page){
  await deletePreviuosStatus(page);
  await page.waitForTimeout(3000);
  await addStatus(page);
  await page.waitForTimeout(3000);
  await editStatus(page);
  await page.waitForTimeout(3000);
  await deleteStatus(page);
}
async function deletePreviuosStatus(page){
 console.log("Enter in delete previous status")
  await page.getByRole('button', { name: 'Settings' }).click();
   await page.getByRole('link', { name: 'Status Profile' }).click();
   await page.waitForTimeout(3000);

    while( true){
     const text = await page.textContent('text=Showing');
  const match = text.match(/of\s+(\d+)\s+entries/);
  const total = match ? parseInt(match[1]) : 0;

  // Stop loop if total <= 0
  if (total <= 0) {
    break;
  }
 await page.locator('table tbody tr').first().click();
 await page.waitForTimeout(1000);
 await page.locator('table tbody tr').nth(1).click();
 while(true){
let priorityCount=await page.getByLabel('Delete').count();
if(priorityCount==0)break;
await page.locator('table tbody tr').nth(1).getByLabel('Delete').click();
await page.getByRole('button', { name: 'Proceed' }).click();
await page.waitForTimeout(1000);
 }
  await expect(page.getByText('Status profile deleted').first()).toBeVisible();

  }
   
  await page.reload();
  console.log("delete previous status completed");

}

async function addWebform(page){
      await page.getByRole('tab', { name: 'Webforms' }).click();
  await page.getByRole('button', { name: 'New webform' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('contractForm');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('');
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Isuue-Payment Form');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('PaymentIssueFormDescription');
  await page.getByRole('button', { name: 'Case form' }).click();
  await page.getByRole('option', { name: 'FORMA TEST' }).click();
  await page.getByRole('button', { name: 'Case category' }).click();
  await page.getByRole('option', { name: 'Default_Category' }).click();
  await page.getByRole('button', { name: 'Default queue' }).click();
  await page.getByRole('option', { name: 'new support' }).click();
  await page.getByRole('textbox', { name: 'Expiry date' }).fill('2026-07-10');
  await page.getByRole('textbox', { name: 'Success message' }).click();
  await page.getByRole('textbox', { name: 'Success message' }).fill('MessageAfterSuccessWebform');
  await page.getByRole('button', { name: 'Create webform' }).click();
  await expect(page.getByRole('cell', { name: 'Isuue-Payment Form' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'FORMA TEST' }).first()).toBeVisible();
}