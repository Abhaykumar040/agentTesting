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

async function addSignTemplate(page){
await page.getByRole('button', { name: 'E-Sign' }).click();
  await page.getByRole('link', { name: 'Templates', exact: true }).click();
  await page.getByRole('button', { name: 'New template' }).click();
  await page.getByRole('textbox', { name: 'Template name' }).click();
  await page.getByRole('textbox', { name: 'Template name' }).fill('E-signTemplateFor');
  await page.getByRole('button', { name: 'Choose PDF (max 5 MB)' }).click();
  await page.getByRole('button', { name: 'Choose PDF (max 5 MB)' }).setInputFiles('Zynka-OPS-Functional-Spec.pdf');
  await page.getByRole('textbox', { name: 'Default email subject' }).click();
  await page.getByRole('textbox', { name: 'Default email subject' }).fill('This is DefaultEmailTemplate\'sSubject');
  await page.getByRole('textbox', { name: 'Default message' }).click();
  await page.getByRole('textbox', { name: 'Default message' }).fill('This is default message by sign template');
  await page.getByRole('spinbutton', { name: 'Default link expiry (days)' }).click();
  await page.getByRole('spinbutton', { name: 'Default link expiry (days)' }).fill('1');
  await page.getByRole('button', { name: 'Signature' }).click();
  await page.locator('.MuiBox-root.css-sftsxe').first().click();
  await page.getByRole('button', { name: 'Initials' }).click();
  await page.locator('div').filter({ hasText: /^signature$/ }).nth(3).click();
  await page.getByRole('button', { name: 'Date' }).click();
  await page.getByText('Pick a field type above, then').click();
  await page.getByRole('button', { name: 'Text' }).click();
  await page.getByText('Pick a field type above, then').click();
  await page.getByRole('button', { name: 'Create template' }).click();
  await expect(page.getByRole('cell', { name: 'E-signTemplateFor' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'This is DefaultEmailTemplate\'' })).toBeVisible();
}