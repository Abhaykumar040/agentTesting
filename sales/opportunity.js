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
async function addOpportunity(page){
    await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Opportunities' }).click();
  await page.getByRole('button', { name: 'New Opportunity' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).fill('He want ERP');
  await page.getByRole('textbox', { name: 'Account / Company' }).click();
  await page.getByRole('textbox', { name: 'Account / Company' }).fill('Apple');
  await page.getByRole('textbox', { name: 'Contact person' }).click();
  await page.getByRole('textbox', { name: 'Contact person' }).fill('Ramesh');
  await page.getByRole('textbox', { name: 'Contact email' }).click();
  await page.getByRole('textbox', { name: 'Contact email' }).fill('akbk6551+4601');
  await page.getByRole('textbox', { name: 'Contact phone' }).click();
  await page.getByRole('textbox', { name: 'Contact phone' }).fill('987655555');
  await page.getByRole('spinbutton', { name: 'Expected revenue' }).click();
  await page.getByRole('spinbutton', { name: 'Expected revenue' }).fill('012000');
  await page.getByRole('textbox', { name: 'Expected close date' }).fill('2026-07-10');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Descriopn For ERP sale');
  await page.getByRole('button', { name: 'Create Opportunity' }).click();
  await page.getByRole('button', { name: 'OPP-000011 He want ERP Apple' }).click();

}