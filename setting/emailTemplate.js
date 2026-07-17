import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/status`
const pathName=`outputData/status/${testData.companyType}`


export async function emailTemplateSetting(page){
    await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Email Templates' }).click();
  await page.waitForTimeout(3000);
  await deletePreviuosWebformEmailTemplate(page);
  await page.waitForTimeout(3000);
  await createEmailTemplate(page);
   await page.waitForTimeout(3000);
  await editEmailTemplate(page);
}

async function deletePreviuosWebformEmailTemplate(page) {

  await page.waitForTimeout(3000);

  // Initial row count
  const initialRowCount = await page.locator("table tbody tr").count();
  console.log("Initial rows:", initialRowCount);

  for (let i = 0; i < initialRowCount; i++) {

    // Stop if no templates remain
    if (await page.getByText('No templates yet.').isVisible()) {
      console.log("All templates deleted.");
      break;
    }

    // Select first row
    await page.locator("table tbody tr").first().click();

    // Register dialog BEFORE clicking delete
    page.once("dialog", async dialog => {
      await dialog.accept();
    });

    // Click last button of last td in first row
    await page
      .locator("table tbody tr")
      .first()
      .locator("td")
      .last()
      .locator("button")
      .last()
      .click();

    await page.waitForTimeout(1000);

   
   
  }
}
async function createEmailTemplate(page){
  await page.getByRole('button', { name: 'New template' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Template-Lead');
  await page.getByRole('button', { name: 'Kind other' }).click();
  await page.getByRole('option', { name: 'first-response' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill('Lead-Template-FirstRespose');
  await page.getByRole('textbox', { name: 'Body' }).click();
  await page.getByRole('textbox', { name: 'Body' }).fill('{{Customre.name}}\n{{quotation:{{quotation.total}}\ncompanyName:{{company.name}}');
  await page.getByRole('checkbox', { name: 'Attach quotation' }).check();
  await page.getByRole('checkbox', { name: 'Company profile' }).check();
  await page.getByRole('checkbox', { name: 'Catalogue' }).check();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('cell', { name: 'Template-Lead' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'LEad-Template-FirstRespose' })).toBeVisible();
}
async function editEmailTemplate(page){
     await page.getByRole('row', { name: 'Template-Lead first-response' }).getByLabel('Edit').click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name' }).fill('Template-LeadX');
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill('LEad-Template-FirstResposeX');
  await page.getByRole('textbox', { name: 'Body' }).click();
  await page.getByRole('textbox', { name: 'Body' }).fill('{{customer.name}}\n{{quotation:{{quotation.total}}\ncompanyName:{{company.name}}X');
  await page.getByRole('button', { name: 'Kind first-response' }).click();
  await page.getByRole('option', { name: 'other' }).click();
  await page.getByRole('button', { name: 'Save' }).click();

}