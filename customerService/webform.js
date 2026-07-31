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
   await page.getByRole('option', { name: 'FormJCASAllFields' }).click();
  await page.getByRole('button', { name: 'Case category' }).click();
  await page.getByRole('option', { name: 'Product Not Working', exact: true }).click();
  await page.getByRole('button', { name: 'Default queue' }).click();
  await page.getByRole('option', { name: 'Billing Support' }).click();

  const dates = dateCyclicJob(4);
  await page.getByRole('textbox', { name: 'Expiry date' }).fill(dates.second);
  await page.getByRole('textbox', { name: 'Success message' }).click();
  await page.getByRole('textbox', { name: 'Success message' }).fill('MessageAfterSuccessWebform');
  await page.getByRole('button', { name: 'Create webform' }).click();
  await expect(page.getByRole('cell', { name: 'Isuue-Payment Form' })).toBeVisible();
 
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
   await page.waitForTimeout(10000);

  //
// -------------------- Basic Information --------------------
//
await page.getByRole('textbox', { name: 'Email' }).fill('akbk6551+511101@gmail.com');
await page.getByRole('textbox', { name: 'Phone (optional)' }).fill('9876543211');
await page.getByRole('textbox', { name: 'Name' }).first().fill('Rohit Sharma');
await page
  .getByRole('textbox', { name: 'Address' })
  .first()
  .fill('Civil Lines, Prayagraj, Uttar Pradesh');

await page.getByRole('spinbutton', { name: 'Age' }).first().fill('21');
await page.getByRole('textbox', { name: 'DOB' }).first().fill('2003-01-15');
await page
  .getByRole('textbox', { name: 'Current Time' })
  .first()
  .fill('2035-01-15T10:30');

//
// -------------------- Dropdowns --------------------
//
await page.getByRole('button', { name: 'DropDownSelectOption' }).first().click();
await page.getByRole('option', { name: 'Unable go giive answer' }).click();

await page.getByRole('button', { name: 'DropDownSelectPproductName' }).click();
await page.getByRole('option', { name: 'Tourch charger' }).click();
await page.getByRole('button', { name: 'DropDownSelectSKU' }).click();
await page.getByRole('option', { name: '5415156' }).first().click();

await page.getByRole('button', { name: 'DropDownSelectPC' }).click();
await page.getByRole('option', { name: 'laptop charger cable' }).click();

await page.getByRole('checkbox', { name: 'I accept terms' }).first().check();

//
// -------------------- Table Row --------------------
//
await page.getByRole('button', { name: 'Add row' }).click();

await page.locator('input[type="text"]').nth(2).fill('Product 1');
await page.locator('input[type="text"]').nth(3).fill('Quantity 2');

//
// -------------------- Section : Fill the Details for JCAS --------------------
//
await page
  .getByRole('textbox', { name: 'Fill the Details for JCAS' })
  .fill('Automation testing sample details.');

await page.getByRole('textbox', { name: 'Name' }).nth(1).fill('Amit Verma');

await page
  .getByRole('textbox', { name: 'Address' })
  .nth(1)
  .fill('Lucknow, Uttar Pradesh');

await page.getByRole('spinbutton', { name: 'Age' }).nth(1).fill('28');

await page.getByRole('textbox', { name: 'DOB' }).nth(1).fill('1997-06-20');

await page
  .getByRole('textbox', { name: 'Current Time' })
  .nth(1)
  .fill('2035-06-20T14:00');

await page
  .getByRole('button', { name: 'DropDownSelectOption', exact: true })
  .click();

await page.getByRole('option', { name: 'Yes' }).click();

await page.getByRole('checkbox', { name: 'I accept terms' }).nth(1).check();

//
// -------------------- Additional Fields --------------------
//
await page.getByRole('textbox', { name: 'Table' }).fill('Sample Table Data');

await page
  .getByRole('textbox', { name: 'Address' })
  .nth(2)
  .fill('Kanpur, Uttar Pradesh');

await page
  .getByRole('textbox', { name: 'Signature' })
  .fill('Rohit Sharma');


    await page.locator('input[type="file"]').first()
   .setInputFiles('./uploadTestingFiles/Customer.pdf');


    await page.locator('input[type="file"]').last()
  .setInputFiles('./uploadTestingFiles/Customer.pdf');


//
// -------------------- Submit --------------------
//
await page.getByRole('button', { name: 'Submit' }).click();

await expect(
  page.getByRole('heading', {
    name: 'Thank you — your request has',
  })
).toBeVisible();

await expect(page.getByText('Your reference: S-')).toBeVisible();
await page.goto(rawData.url);

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