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
  await page.locator('table tbody tr').first().getByLabel('Delete').click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Status profile deleted').first()).toBeVisible();

  }
   
  await page.reload();
  console.log("delete previous status completed")

}

async function addStatus(page){
  console.log("Enter in add status");
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
  await page.reload();
  await page.waitForTimeout(3000);

  if (await page.getByText('DeleteEditStatusJob', { exact: true }).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/addStatus.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addStatus","true",`./${screenshotPath}/addStatus.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/addStatus.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addStatus","false",`./${screenshotPath}/addStatus.png`)
  }

  await page.reload();
  console.log("Add status completed");
}
async function editStatus(page){
  console.log("Enter in edit status");
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
  await page.reload();
   await page.waitForTimeout(3000);

  if (await page.getByText('DeleteEditStatusJob', { exact: true }).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/editStatus.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editStatus","true",`./${screenshotPath}/editStatus.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editStatus.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editStatus","false",`./${screenshotPath}/editStatus.png`)
  }

  await page.reload()
  console.log("Edit status completed");
}

async function deleteStatus(page) {
  console.log("Enter in delete status");
  await page.getByRole('row', { name: 'InstallationStatusJob DoneJob' }).getByLabel('Delete').click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.reload();
   await page.waitForTimeout(3000);

  if (!await page.getByText('DoneJob', { exact: true }).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/deleteStatus.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteStatus","true",`./${screenshotPath}/deleteStatus.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/deleteStatus.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteStatus","false",`./${screenshotPath}/deleteStatus.png`)
  }

  await page.reload()
  console.log("delete status completed");
}