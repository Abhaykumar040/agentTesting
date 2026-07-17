import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';
import dateCyclicJob from '../utils/dateCyclicJob';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/status`
const pathName=`outputData/status/${testData.companyType}`


export async function webform(page){
  await page.getByRole('link', { name: 'Queues' }).click();
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByRole('tab', { name: 'Webforms' }).click();
 await page.waitForTimeout(3000);
 await deletePreviuosWebform(page);
 await page.waitForTimeout(3000);
  await addWebform(page);
  await copyUrlWebform(page);

  await regenerateUrl(page);
}
async function deletePreviuosWebform(page){
   
let rowCount = await page.locator("table tbody tr").count();
console.log('k',rowCount)

await page.waitForTimeout(3000);
while (rowCount > 0 ) {
if (await page.getByText('No webforms yet.').isVisible()) {
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
  await page.getByRole('option', { name: 'FormS' }).click();
  await page.getByRole('button', { name: 'Case category' }).click();
  await page.getByRole('option', { name: 'Default_Category' }).click();
  await page.getByRole('button', { name: 'Default queue' }).click();
  await page.getByRole('option', { name: 'Billing Support' }).click();

  const dates = dateCyclicJob(4);
  await page.getByRole('textbox', { name: 'Expiry date' }).fill(dates.second);
  await page.getByRole('textbox', { name: 'Success message' }).click();
  await page.getByRole('textbox', { name: 'Success message' }).fill('MessageAfterSuccessWebform');
  await page.getByRole('button', { name: 'Create webform' }).click();
  await expect(page.getByRole('cell', { name: 'Isuue-Payment Form' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'FormS' }).first()).toBeVisible();
}
async function copyUrlWebform(page){
  await page.waitForTimeout(3000);
  await page
  .locator("table tbody tr")
  .first()
  .locator("td")
  .last()
  .locator("button")
  .nth(0)
  .click();
    const url = await page.evaluate(() => navigator.clipboard.readText());

  console.log('abhay',url);

  await page.goto(url);
  await page.waitForTimeout(3000);
}
async function shareWebform(page){
    await page.getByRole('button', { name: 'Share public link' }).click();
  await page.getByRole('menuitem', { name: 'Email…' }).click();
  await page.getByRole('textbox', { name: 'Recipient email' }).click();
  await page.getByRole('textbox', { name: 'Recipient email' }).fill('akbk6551+4552@gmail.com');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByText('Link sent to akbk6551+4552@')).toBeVisible();
}
async function pauseResumeWebform(page){
    await page.getByRole('button', { name: 'Disable' }).click();

   await page.waitForTimeout(3000);
  await page
  .locator("table tbody tr")
  .first()
  .locator("td")
  .last()
  .locator("button")
  .nth(0)
  .click();
    const url = await page.evaluate(() => navigator.clipboard.readText());


  await page.goto(url);
  await page.waitForTimeout(3000);
  await expect(page.getByRole('heading', { name: 'This form is not available' })).toBeVisible();


}

async function regenerateUrl(page){
   
  
   await page.waitForTimeout(3000);
  await page
  .locator("table tbody tr")
  .first()
  .locator("td")
  .last()
  .locator("button")
  .nth(0)
  .click();
    const url = await page.evaluate(() => navigator.clipboard.readText());

    await page.waitForTimeout(30000);
      console.log("1");
const dialogPromise = page.waitForEvent('dialog');
await page.waitForTimeout(30000);
console.log("2");
await page
  .locator("table tbody tr")
  .first()
  .locator("td")
  .last()
  .locator("button")
  .nth(2)
  .click();
await page.waitForTimeout(10000);
console.log("3");
const dialog = await dialogPromise;
await dialog.accept();
  await page.waitForTimeout(3000);
await page.waitForTimeout(10000);
console.log("4");
   await page
  .locator("table tbody tr")
  .first()
  .locator("td")
  .last()
  .locator("button")
  .nth(0)
  .click();
    const url2 = await page.evaluate(() => navigator.clipboard.readText());
    console.log('url1',url,'url2',url2);

  await expect(page.getByRole('heading', { name: 'This form is not available' })).toBeVisible();

  
}