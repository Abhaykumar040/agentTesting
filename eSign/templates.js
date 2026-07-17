import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/status`
const pathName=`outputData/status/${testData.companyType}`


export async function esignTemplate(page){
  await page.getByRole('button', { name: 'E-Sign' }).click();
  await page.getByRole('link', { name: 'Templates', exact: true }).click();
  await deletePreviuosEsignTemplate(page);
  await page.waitForTimeout(3000);
  await addEsignTemplate(page);
  await page.waitForTimeout(3000);
  // await editEsignTemplate(page);
  // await page.waitForTimeout(3000);
  // await deleteEsignTemplate(page);
}

async function deletePreviuosEsignTemplate(page){
   await page.waitForTimeout(5000);
let rowCount = await page.locator("table tbody tr").count();


await page.waitForTimeout(3000);
while (rowCount > 0 ) {
if (await page.getByText('No templates yet.').isVisible()) {
        break;
    }
  // Your delete logic
  await page.locator("table tbody tr").first().click();

  while (await page.getByLabel("Delete").count() > 0) {
    await page.getByLabel("Delete").first().click();
     page.once("dialog", async dialog => {
            await dialog.accept();   // Click OK on browser alert
        });
    await page.waitForTimeout(1000);
  }  

  // await expect(page.getByText("Status profile deleted").first()).toBeVisible();

  // Update row count after deletion
 const rowCount = await page.locator('table tbody tr').count();
 
}

}
async function addEsignTemplate(page){

  await page.getByRole('button', { name: 'New template' }).click();
  await page.getByRole('textbox', { name: 'Template name' }).click();
  await page.getByRole('textbox', { name: 'Template name' }).fill('E-signTemplateFor');
const fileChooserPromise = page.waitForEvent('filechooser');

await page.getByRole('button', { name: 'Choose PDF (max 5 MB)' }).click();

const fileChooser = await fileChooserPromise;

await fileChooser.setFiles('./download1/Customer.pdf');
  await page.getByRole('textbox', { name: 'Default email subject' }).click();
  await page.getByRole('textbox', { name: 'Default email subject' }).fill('This is DefaultEmailTemplate\'sSubject');
  await page.getByRole('textbox', { name: 'Default message' }).click();
  await page.getByRole('textbox', { name: 'Default message' }).fill('This is default message by sign template');
  await page.getByRole('spinbutton', { name: 'Default link expiry (days)' }).click();
  await page.getByRole('spinbutton', { name: 'Default link expiry (days)' }).fill('3');
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