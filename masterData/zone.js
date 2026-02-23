import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';


const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/zone`;
const pathName=`outputData/priority/${testData.companyType}`

export async function zone(page){

 await addZone(page);
 await page.waitForTimeout(3000);
 await deleteZone(page);
}

async function deletePreviuosZone(page) {
  console.log("Enter in delete previous zone");
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Zone' }).click();
  await page.waitForTimeout(3000);
  while( true){
    const text = await page.textContent('text=Showing');
    const match = text.match(/of\s+(\d+)\s+entries/);
    const total = match ? parseInt(match[1]) : 0;

    // Stop loop if total <= 0
    if (total == 1) {
       await page.waitForTimeout(3000);
    }
    if (total <= 0) {
      break;
    }
    console.log("Before delete line 185")
    await page.getByRole('button', { name: 'Master Data' }).click();
    await page.getByRole('link', { name: 'Zone' }).click();
    await page.getByRole('button', { name: 'Delete' }).first().click();
    await page.getByRole('button', { name: 'Proceed' }).click();
    await page.waitForTimeout(2000)
    await expect(page.getByText('Zone deleted successfully')).toBeVisible();
  }
  await page.reload();
  console.log("delete previous zone completed");
}
async function addZone(page) {
  console.log("Enter in add zone");
  //1st zone
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Zone' }).click();
  await page.getByRole('button', { name: 'Add New Zone' }).click();
  await page.getByRole('textbox', { name: 'Zone Name' }).click();
  await page.getByRole('textbox', { name: 'Zone Name' }).fill('NI');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('North India');
  await page.locator('input[name="color"]').click();
  await page.locator('input[name="color"]').fill('#4be278');
  await page.getByRole('button', { name: 'Create Zone' }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('checkbox', { name: 'Active Zone' }).check();
  await page.getByRole('textbox', { name: 'From (e.g. N1 1AA)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'From (e.g. N1 1AA)' }).fill('100000');
  await page.getByRole('textbox', { name: 'To (e.g. N22 9ZZ)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'To (e.g. N22 9ZZ)' }).fill('299999');
  await page.getByRole('button').nth(3).click();
  await page.getByRole('textbox', { name: 'Enter postcode' }).first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Enter postcode' }).first().fill('221306');
  await page.getByRole('button').nth(5).click();
  await page.getByRole('textbox', { name: 'Enter postcode' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Enter postcode' }).nth(1).fill('221307');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  
    await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Zone' }).click();
  await page.getByRole('button', { name: 'Add New Zone' }).click();
  await page.getByRole('textbox', { name: 'Zone Name' }).click();
  await page.getByRole('textbox', { name: 'Zone Name' }).fill('WI');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('West India');
  await page.locator('input[name="color"]').click();
  await page.locator('input[name="color"]').fill('#4be278');
  await page.getByRole('button', { name: 'Create Zone' }).click();
  await page.getByRole('button', { name: 'Edit' }).first().click();
  await page.getByRole('checkbox', { name: 'Active Zone' }).check();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'From (e.g. N1 1AA)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'From (e.g. N1 1AA)' }).fill('300000');
  await page.getByRole('textbox', { name: 'To (e.g. N22 9ZZ)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'To (e.g. N22 9ZZ)' }).fill('399999');
  await page.getByRole('button').nth(3).click();
  await page.getByRole('textbox', { name: 'Enter postcode' }).first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Enter postcode' }).first().fill('302893');
  await page.getByRole('button').nth(5).click();
  await page.getByRole('textbox', { name: 'Enter postcode' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Enter postcode' }).nth(1).fill('309282');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: 'Save Changes' }).click();

  await page.getByRole('button', { name: 'Add New Zone' }).click();
  await page.getByRole('textbox', { name: 'Zone Name' }).click();
  await page.getByRole('textbox', { name: 'Zone Name' }).fill('CI');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Description' }).fill('Central India');
  await page.locator('input[name="color"]').click();
  await page.locator('input[name="color"]').fill('#4be278');
  await page.getByRole('button', { name: 'Create Zone' }).click();
  await page.getByRole('button', { name: 'Edit' }).first().click();
  await page.getByRole('checkbox', { name: 'Active Zone' }).check();
  await page.getByRole('textbox', { name: 'From (e.g. N1 1AA)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'From (e.g. N1 1AA)' }).fill('400000');
  await page.getByRole('textbox', { name: 'To (e.g. N22 9ZZ)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'To (e.g. N22 9ZZ)' }).fill('499999');
  await page.getByRole('button').nth(3).click();
  await page.getByRole('textbox', { name: 'Enter postcode' }).first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Enter postcode' }).first().fill('421306');
  await page.getByRole('button').nth(5).click();
  await page.getByRole('textbox', { name: 'Enter postcode' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Enter postcode' }).nth(1).fill('421307');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: 'Save Changes' }).click();

  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Zone' }).click();
  await page.getByRole('button', { name: 'Add New Zone' }).click();
  await page.getByRole('textbox', { name: 'Zone Name' }).click();
  await page.getByRole('textbox', { name: 'Zone Name' }).fill('SI');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('South India');
  await page.locator('input[name="color"]').click();
  await page.locator('input[name="color"]').fill('#3f60e2');
  await page.getByRole('button', { name: 'Create Zone' }).click();
  await page.getByRole('button', { name: 'Edit' }).first().click();
  // await page.getByRole('checkbox', { name: 'Active Zone' }).check();
  await page.getByRole('textbox', { name: 'From (e.g. N1 1AA)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'From (e.g. N1 1AA)' }).fill('500000');
  await page.getByRole('textbox', { name: 'To (e.g. N22 9ZZ)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'To (e.g. N22 9ZZ)' }).fill('699999');
  await page.getByRole('button').nth(3).click();
  await page.getByRole('textbox', { name: 'Enter postcode' }).first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Enter postcode' }).first().fill('501902');
  await page.getByRole('button').nth(5).click();
  await page.getByRole('textbox', { name: 'Enter postcode' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Enter postcode' }).nth(1).fill('510982');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: 'Save Changes' }).click();

  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Zone' }).click();
  await page.getByRole('button', { name: 'Add New Zone' }).click();
  await page.getByRole('textbox', { name: 'Zone Name' }).click();
  await page.getByRole('textbox', { name: 'Zone Name' }).fill('EI');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('East India');
  await page.locator('input[name="color"]').click();
  await page.locator('input[name="color"]').fill('#ebe278');
  await page.getByRole('button', { name: 'Create Zone' }).click();
  await page.getByRole('button', { name: 'Edit' }).first().click();
  await page.getByRole('checkbox', { name: 'Active Zone' }).check();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'From (e.g. N1 1AA)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'From (e.g. N1 1AA)' }).fill('700000');
  await page.getByRole('textbox', { name: 'To (e.g. N22 9ZZ)' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'To (e.g. N22 9ZZ)' }).fill('799999');
  await page.getByRole('button').nth(3).click();
  await page.getByRole('textbox', { name: 'Enter postcode' }).first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Enter postcode' }).first().fill('720382');
  await page.getByRole('button').nth(5).click();
  await page.getByRole('textbox', { name: 'Enter postcode' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Enter postcode' }).nth(1).fill('783629');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: 'Save Changes' }).click();



  await expect(page.getByText('Zone updated successfully')).toBeVisible();
  await page.reload();
  await page.waitForTimeout(3000);
  
   if (await page.getByText('East India').isVisible()) 
     {
          await page.screenshot({ path: `./${screenshotPath}/addZone.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"addZone","true",`./${screenshotPath}/addZone.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/addZone.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"addZone","false",`./${screenshotPath}/addZone.png`)
        }
  await page.reload();
  console.log("Add zone completed");
}

async function deleteZone(page) {
  console.log("Enter in delete zone");
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Zone' }).click();
  await page.getByRole('button', { name: 'Delete' }).nth(2).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await expect(page.getByText('Zone deleted successfully')).toBeVisible();
   await page.reload();
  await page.waitForTimeout(3000);
  
   if (!await page.getByText('Central India').isVisible()) 
     {
          await page.screenshot({ path: `./${screenshotPath}/deleteZone.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"deleteZone","true",`./${screenshotPath}/deleteZone.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/deleteZone.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"deleteZone","false",`./${screenshotPath}/deleteZone.png`)
        }
  await page.reload();
  console.log("delete zone completed");
}