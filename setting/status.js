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
//   await deletePriority(page);
}
async function deletePreviuosStatus(page){

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
 await page.locator('table tbody tr').first().getByLabel('Delete').click();
await page.getByRole('button', { name: 'Proceed' }).click();
    await expect(page.getByText('Status profile deleted').first()).toBeVisible();
    }
   
await page.reload();
  //  await page.waitForTimeout(3000);
//  await expect(page.getByText('Showing 1 to 10 of 13 entries')).toBeVisible();

 

}

async function addStatus(page){
     await page.getByRole('button', { name: 'Settings' }).click();
    await page.getByRole('link', { name: 'Status Profile' }).click();
  await page.getByRole('button', { name: 'Add New Status' }).click();
  await page.getByRole('textbox', { name: 'Enter Status Profile Type' }).click();
  await page.getByRole('textbox', { name: 'Enter Status Profile Type' }).fill('installationStatusJob');
  await page.getByRole('button', { name: 'Select Business Object' }).click();
  await page.getByRole('option', { name: 'Job' }).click();
  await page.getByRole('button', { name: 'Status' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('created');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('createdD');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('1');
  await page.getByRole('button', { name: 'Create' }).click();
   await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'Status' }).click();
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Status').click();
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Status').fill('In progress');
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Description').click();
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Description').fill('In progressD');
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Position').click();
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Position').fill('2');
  await page.getByRole('button', { name: 'Create' }).click();
   await page.waitForTimeout(3000);


  await page.getByRole('button', { name: 'Status' }).click();
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Status').click();
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Status').fill('done');
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Description').click();
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Description').fill('doneJob');
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Status').click();
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Status').fill('doneJob');
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Position').click();
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Position').fill('3');
  await page.getByRole('button', { name: 'Create' }).click();
   await page.waitForTimeout(3000);


  await page.getByRole('button', { name: 'Status' }).click();
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Status').click();
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Status').fill('deleteInternalJobStatus');
  await page.getByText('Status *Status Description *Position *Create').click();
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Description').fill('deleteInternalJobStatus');
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Position').click();
  await page.locator('form').filter({ hasText: 'Status *Status Description *Position *Create' }).getByPlaceholder('Enter Position').fill('4');
  await page.getByRole('button', { name: 'Create' }).click();
   await page.waitForTimeout(3000);


  await page.getByRole('button', { name: 'Status' }).click();

  await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.getByRole('textbox', { name: 'Status *' }).first().fill('deleteExternalStatusJob');
  await page.getByText('Status *Status Description *').first().click();
  await page.getByRole('textbox', { name: 'Status Description *' }).first().fill('deleteExternalStatusJob');
  await page.getByRole('spinbutton', { name: 'Position *' }).first().click();
  await page.getByRole('spinbutton', { name: 'Position *' }).first().fill('5');
  await page.getByRole('button', { name: 'Create' }).first().click();
await page.waitForTimeout(3000);


  await page.getByRole('button', { name: 'Status' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.getByRole('textbox', { name: 'Status *' }).first().fill('deleteEditStatusJob');
  await page.getByText('Status *Status Description *').first().click();
  await page.getByRole('textbox', { name: 'Status Description *' }).first().fill('deleteEditStatusJob');
  await page.getByRole('spinbutton', { name: 'Position *' }).first().click();
  await page.getByRole('spinbutton', { name: 'Position *' }).first().fill('6');
  await page.getByRole('button', { name: 'Create' }).first().click();
   await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
   await page.getByRole('button', { name: 'Back to List' }).click();
   await page.waitForTimeout(3000);

    if (await page.getByText('DeleteExternalStatusJob').first().isVisible()&&
   !await page.getByText('DeleteInternalJobStatus').first().isVisible())  {
           await page.screenshot({ path: `./${screenshotPath}/createStatus.png`, fullPage: true });
           await updateOpJson(`./${screenshotPath}/`,"createStatus","true",`./${screenshotPath}/createStatus.png`)
           
         }
         else{
           await page.screenshot({ path: `./${screenshotPath}/createStatus.png`, fullPage: true });
           await updateOpJson(`./${screenshotPath}/`,"createStatus","false",`./${screenshotPath}/createStatus.png`)
         }
}
async function editStatus(page){
      await page.getByText('InstallationStatusJob').first().click();
  await page.getByRole('textbox', { name: 'Status *' }).nth(3).click();
  await page.getByRole('textbox', { name: 'Status *' }).nth(3).fill('In progressX');
  await page.getByRole('textbox', { name: 'Status Description *' }).nth(3).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).nth(3).fill('In progressDX');
  await page.getByRole('spinbutton', { name: 'Position *' }).nth(3).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).nth(3).fill('21');
  await page.getByRole('button', { name: 'Update' }).nth(3).click();
  await page.locator('button').nth(4).click();
  await page.getByRole('button', { name: 'Back to List' }).click();
   await page.waitForTimeout(3000);
   
    if (await page.getByText('DeleteExternalStatusJob').first().isVisible()&&
   !await page.getByText('DeleteInternalJobStatus').first().isVisible())  {
           await page.screenshot({ path: `./${screenshotPath}/createStatus.png`, fullPage: true });
           await updateOpJson(`./${screenshotPath}/`,"createStatus","true",`./${screenshotPath}/createStatus.png`)
           
         }
         else{
           await page.screenshot({ path: `./${screenshotPath}/createStatus.png`, fullPage: true });
           await updateOpJson(`./${screenshotPath}/`,"createStatus","false",`./${screenshotPath}/createStatus.png`)
         }
}