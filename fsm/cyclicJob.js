import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/status`
const pathName=`outputData/status/${testData.companyType}`


export async function cyclicJob(page){
  await createCyclicJob(page);
  await page.waitForTimeout(3000);
  await startCyclicJob(page);
  await page.waitForTimeout(3000);
  // await cancleWholeSessionCyclicJob(page);
  // await page.waitForTimeout(3000);
  await cancleCurrentSessionCyclicJob(page);
  // await deleteCyclicJob(page);
  // await page.waitForTimeout(3000);
  // await deleteAllCyclicJob(page);
}


async function createCyclicJob(page){
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Asset Management' }).click();
  await page.getByText('Charger', { exact: true }).click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.getByRole('button', { name: 'Create Cyclic Job' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).fill('Intallation4');
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Shujit Dubey' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Bhadohi' }).click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Installation cyclic');
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation3' }).click();
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'High' }).click();
  await page.getByRole('button', { name: 'Frequency Type Daily' }).click();
  await page.getByRole('option', { name: 'Yearly' }).click();
  await page.getByRole('textbox', { name: 'Schedule Start Date' }).fill('2026-02-09');
  await page.getByRole('textbox', { name: 'Schedule End Date' }).fill('2027-02-11');
  await page.getByRole('button', { name: 'Create Job' }).click();


 
  await page.locator('div').filter({ hasText: /^🏢Charger5465456$/ }).nth(1).click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.getByRole('button', { name: 'Create Cyclic Job' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).fill('Installation5');
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Shujit Dubey' }).click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Bhadohi' }).click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('jkhsdkjfhak');
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation2' }).click();
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'High' }).click();
  await page.getByRole('button', { name: 'Frequency Type Daily' }).click();
  await page.getByRole('option', { name: 'Daily' }).click();
    await page.getByRole('textbox', { name: 'Schedule Start Date' }).fill('2026-02-09');
  await page.getByRole('textbox', { name: 'Schedule End Date' }).fill('2026-02-18');
  await page.getByRole('button', { name: 'Create Job' }).click();
  

  // await page.locator('div').filter({ hasText: /^🏢Charger5465456$/ }).nth(1).click();
  // await page.getByRole('button', { name: 'Create Cyclic Job' }).click();
  // await page.getByRole('textbox', { name: 'Job Title' }).click();
  // await page.getByRole('textbox', { name: 'Job Title' }).fill('Installation7');
  // await page.getByRole('combobox', { name: 'Customer' }).click();
  // await page.getByRole('option', { name: 'Shujit Dubey' }).click();
  // await page.getByRole('button', { name: 'Address' }).click();
  // await page.getByRole('option', { name: 'Bhadohi' }).click();
  // await page.getByRole('textbox', { name: 'Description' }).click();
  // await page.getByRole('textbox', { name: 'Description' }).fill('dfgasd');
  // await page.getByRole('button', { name: 'Job Type' }).click();
  // await page.getByRole('option', { name: 'Installation3' }).click();
  // await page.getByRole('button', { name: 'Priority' }).click();
  // await page.getByRole('option', { name: 'Low' }).click();
  // await page.getByRole('button', { name: 'Frequency Type Daily' }).click();
  // await page.getByRole('option', { name: 'Monthly' }).click();
  // await page.getByRole('spinbutton', { name: 'Interval' }).click();
  // await page.getByRole('spinbutton', { name: 'Interval' }).fill('6');
  // await page.getByRole('spinbutton', { name: 'Days Of Month' }).click();
  // await page.getByRole('spinbutton', { name: 'Days Of Month' }).fill('23');
  // await page.getByRole('button', { name: 'Create Job' }).click();
  // await page.getByRole('button', { name: 'Frequency Type Daily' }).click();
  // await page.getByRole('option', { name: 'Weekly' }).click();
  // await page.getByRole('spinbutton', { name: 'Interval' }).click();
  // await page.getByRole('spinbutton', { name: 'Interval' }).fill('7');
  // await page.getByRole('button', { name: 'Mon' }).click();
  // await page.getByRole('textbox', { name: 'Schedule Start Date' }).fill('2026-02-09');
  // await page.getByRole('textbox', { name: 'Schedule End Date' }).fill('2026-02-18');
  
  await page.locator('div').filter({ hasText: /^🏢Charger5465456$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Create Cyclic Job' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).fill('Installation8');
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Shujit Dubey' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Bhadohi' }).click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('rdgfar');
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation1' }).click();
  await page.locator('div:nth-child(6) > .MuiFormControl-root > .MuiInputBase-root').click();
  await page.getByRole('option', { name: 'midum' }).click();
  await page.getByRole('button', { name: 'Frequency Type Daily' }).click();
  await page.getByRole('option', { name: 'Weekly' }).click();
  await page.getByRole('spinbutton', { name: 'Interval' }).click();
  await page.getByRole('spinbutton', { name: 'Interval' }).fill('9');
  await page.getByRole('button', { name: 'Mon' }).click();
  await page.getByRole('textbox', { name: 'Schedule Start Date' }).fill('2026-02-09');
  await page.getByRole('textbox', { name: 'Schedule End Date' }).fill('2026-02-27');
  await page.getByRole('button', { name: 'Create Job' }).click();
  
  await page.locator('div').filter({ hasText: /^🏢Charger5465456$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Create Cyclic Job' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).fill('Installation7');
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Shujit Dubey' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Bhadohi' }).click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('dfgasd');
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation3' }).click();
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'Low' }).click();
  await page.getByRole('button', { name: 'Frequency Type Daily' }).click();
  await page.getByRole('option', { name: 'Monthly' }).click();
  await page.getByRole('spinbutton', { name: 'Interval' }).click();
  await page.getByRole('spinbutton', { name: 'Interval' }).fill('6');
  await page.getByRole('spinbutton', { name: 'Days Of Month' }).click();
  await page.getByRole('spinbutton', { name: 'Days Of Month' }).fill('23');
  await page.getByRole('button', { name: 'Create Job' }).click();

  //  await expect(page.getByText('Cyclic job created')).toBeVisible()
     await page.reload();
  await page.waitForLoadState('networkidle');


}

async function startCyclicJob(page){
    await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Asset Management' }).click();
  await page.locator('div').filter({ hasText: /^🏢Charger5465456$/ }).nth(1).click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.getByRole('button', { name: 'Monthly Jobs 3 Jobs' }).click();
  await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.css-173juw').first().click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Start Now' }).click();

  await page.reload();
  await page.waitForLoadState('networkidle');



}
// async function deleteCyclicJob(page){

// }
// async function deleteAllCyclicJob(page){

//   await page.getByRole('button', { name: 'Master Data' }).click();
//   await page.getByRole('link', { name: 'Skill' }).click();
//      await page.waitForTimeout(3000);


//     while( true){
//      const text = await page.textContent('text=Showing');
//   const match = text.match(/of\s+(\d+)\s+entries/);
//   const total = match ? parseInt(match[1]) : 0;

//   // Stop loop if total <= 0
//   if (total <= 0) {
//     break;
//   }
//   await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
//   await page.getByRole('menuitem', { name: 'Delete' }).click();

//     await expect(page.getByText('Skill deleted successfully').first()).toBeVisible();
//     await page.waitForTimeout(1000);
//     }
   
// await page.reload();
// }
// async function exportCyclicJob(page){

// }
async function cancleWholeSessionCyclicJob(page){
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Asset Management' }).click();
  await page.locator('div').filter({ hasText: /^🏢Charger5465456$/ }).nth(1).click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.getByRole('button', { name: 'Daily Jobs 3 Jobs' }).click();
 await page.locator('div:nth-child(3) > .MuiBox-root.css-meypkx > .MuiButtonBase-root').click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Cancel Whole Session' }).click();

  await page.reload();
  await page.waitForLoadState('networkidle');
}
async function cancleCurrentSessionCyclicJob(page){
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Asset Management' }).click();
  await page.locator('div').filter({ hasText: /^🏢Charger5465456$/ }).nth(1).click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.getByRole('button', { name: 'Weekly Jobs 3 Jobs' }).click();
  await page.locator('div:nth-child(3) > .MuiBox-root.css-dshcag > .MuiPaper-root > .MuiBox-root.css-meypkx > .MuiButtonBase-root').first().click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Cancel Current Session' }).click();

  await page.reload();
  await page.waitForLoadState('networkidle');

}


