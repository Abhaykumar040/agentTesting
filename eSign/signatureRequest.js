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
async function createSignatureRequest(page){
  await page.getByRole('link', { name: 'Signature Requests' }).click();
  await page.getByRole('button', { name: 'New request' }).click();
  await page.getByRole('button', { name: 'Use a template (optional)' }).click();
  await page.getByRole('option', { name: 'E-signTemplateFor' }).click();
  await page.getByRole('textbox', { name: 'Signer name' }).click();
  await page.getByRole('textbox', { name: 'Signer name' }).fill('Abhay');
  await page.getByRole('textbox', { name: 'Signer email' }).click();
  await page.getByRole('textbox', { name: 'Signer email' }).fill('akbk6551+4501@gmail.com');
  await page.getByRole('cell', { name: 'This is DefaultEmailTemplate\'' }).click();
  await expect(page.getByRole('cell', { name: 'Abhay <akbk6551+4501@gmail.' })).toBeVisible();

  //created By Dashboard
    await page.getByRole('main').getByRole('link', { name: 'Signature Requests' }).click();
  await page.getByRole('button', { name: 'New request' }).click();
  await page.getByRole('button', { name: 'Choose PDF (max 5 MB)' }).click();
  await page.getByRole('button', { name: 'Choose PDF (max 5 MB)' }).setInputFiles('Invoice_I-26-05-19-J_Nitin P (1).pdf');
  await page.getByRole('textbox', { name: 'Signer name' }).click();
  await page.getByRole('textbox', { name: 'Signer name' }).fill('AbhayK');
  await page.getByRole('textbox', { name: 'Signer email' }).click();
  await page.getByRole('textbox', { name: 'Signer email' }).fill('akbk6551+4502@gmail.com');
  await page.getByRole('button', { name: 'Signature' }).click();
  await page.locator('.MuiBox-root.css-anu4pk').click();
  await page.getByRole('button', { name: 'Initials' }).click();
  await page.locator('div').filter({ hasText: /^signature$/ }).nth(3).click();
  await page.getByRole('button', { name: 'Date' }).click();
  await page.getByText('signatureinitials', { exact: true }).click();
  await page.getByRole('button', { name: 'Name' }).click();
  await page.getByText('signatureinitialsdate', { exact: true }).click();
  await page.getByRole('button', { name: 'Text' }).click();
  await page.getByText('signatureinitialsdatename', { exact: true }).click();
  await page.getByText('text', { exact: true }).click();
  await page.getByText('text', { exact: true }).click();
  await page.getByText('initials', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Email subject' }).click();
  await page.getByRole('textbox', { name: 'Email subject' }).fill('CreatedByDashboardSubject');
  await page.getByRole('textbox', { name: 'Email subject' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Email subject' }).press('ControlOrMeta+c');
  await page.getByRole('textbox', { name: 'Message (optional)' }).click();
  await page.getByRole('textbox', { name: 'Message (optional)' }).fill('CreatedByDashboardMessage');
  await page.getByRole('button', { name: 'Create & send' }).click();
}