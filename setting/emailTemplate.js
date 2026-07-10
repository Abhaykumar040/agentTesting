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
    await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Email Templates' }).click();
  await deletePreviuosEmailTemplate(page);
}

async function deletePreviuosEmailTemplate(page){
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
async function createEmailTemplate(page){

 
  await page.getByRole('row', { name: 'Lead — First response first-' }).getByLabel('Delete').click();
  await page.getByRole('button', { name: 'New template' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Templatet-Lead');
  await page.getByRole('button', { name: 'Kind other' }).click();
  await page.getByRole('option', { name: 'first-response' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill('Lead-Tepmplate-FirstRespose');
  await page.getByRole('textbox', { name: 'Body' }).click();
  await page.getByRole('textbox', { name: 'Body' }).fill('{{Customre.name}}\n{{quotation:{{quotation.total}}\ncompanyName:{{company.name}}');
  await page.getByRole('checkbox', { name: 'Attach quotation' }).check();
  await page.getByRole('checkbox', { name: 'Company profile' }).check();
  await page.getByRole('checkbox', { name: 'Catalogue' }).check();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('cell', { name: 'Templated-Lead' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'LEad-Tepmplate-FirstRespose' })).toBeVisible();
}
async function editEmailTemplate(page){
     await page.getByRole('row', { name: 'Templated-Lead first-response' }).getByLabel('Edit').click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name' }).fill('Templated-LeadX');
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill('LEad-Tepmplate-FirstResposeX');
  await page.getByRole('textbox', { name: 'Body' }).click();
  await page.getByRole('textbox', { name: 'Body' }).fill('{{Customre.name}}\n{{quotation:{{quotation.total}}\ncompanyName:{{company.name}}X');
  await page.getByRole('button', { name: 'Kind first-response' }).click();
  await page.getByRole('option', { name: 'other' }).click();
  await page.getByRole('button', { name: 'Save' }).click();

}