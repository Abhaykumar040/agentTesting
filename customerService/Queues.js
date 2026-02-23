import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/Queues`;
const pathName=`outputData/priority/${testData.companyType}`

export async function Queue(page) {
  await addQueues(page);
  await page.waitForTimeout(3000);
  await editQueues(page);
  await page.waitForTimeout(3000);

}

async function addQueues(page){
  console.log('Enter in add queue');
   await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Queues' }).click();
  // await expect(page.getByText('Queue added successfully')).toBeVisible();


  await page.getByRole('button', { name: 'New Queue' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).fill('Technical Queue');
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).click();
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).fill('IN this queue will contain technical problem');
  await page.getByRole('button', { name: 'Create Queue' }).click();

  await page.getByRole('button', { name: 'New Queue' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).fill('Customer Support');
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).click();
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).fill('This queue manages customer complaints and queries.');
  await page.getByRole('button', { name: 'Create Queue' }).click();

  await page.getByRole('button', { name: 'New Queue' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).fill('Billing Support');
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).click();
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).fill('For billing and payment related issues.');
  await page.getByRole('button', { name: 'Create Queue' }).click();

  await page.getByRole('button', { name: 'New Queue' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).fill('General Query');
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).click();
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).fill('IN this queue will contain General problem');
  await page.getByRole('button', { name: 'Create Queue' }).click();

  await page.getByRole('button', { name: 'New Queue' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).fill('**IT Helpdeskosa');
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).click();
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).fill('IN this queue will contain "IT heptdesk" problem');
  await page.getByRole('button', { name: 'Create Queue' }).click();

  
  await page.getByRole('button', { name: 'New Queue' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).fill('Technical Queue');
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).click();
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).fill('IN this queue will contain technical problem');
  await page.getByRole('button', { name: 'Create Queue' }).click();
  await page.waitForTimeout(1000);
  if (await page.getByText('General Problem').isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/addQueues.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addQueues","true",`./${screenshotPath}/addQueues.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/addQueues.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addQueues","false",`./${screenshotPath}/addQueues.png`)
  }
    
  await page.reload();
  console.log('add queue completed');
}

async function editQueues(page){
  console.log('Enter in edit queue');
   await page.getByRole('row', { name: 'General Query IN this queue' }).locator('button').click();
  await page.getByRole('menuitem', { name: 'Edit Queue' }).click();
  await page.getByRole('button', { name: 'New Case' }).click();
  await page.getByRole('textbox', { name: 'Enter case title' }).click();
  await page.getByRole('textbox', { name: 'Enter case title' }).fill('General Problem ');
  await page.getByRole('combobox', { name: 'Search or type customer email' }).click();
  await page.getByRole('option', { name: 'Jony Rathor (akbk6551+1109@' }).click();
  await page.getByRole('button', { name: 'Select Case Issue' }).click();
  await page.getByRole('option', { name: 'Product Not Working8' }).click();
  await page.getByRole('button', { name: 'Select Priority' }).click();
  await page.getByRole('option', { name: 'createdSupport2' }).click();
  await page.getByRole('button', { name: 'Select Status Profile' }).click();
  await page.getByRole('option', { name: 'Resolved' }).click();
  await page.getByRole('button', { name: 'Portal' }).click();
  await page.getByRole('option', { name: 'Phone' }).click();
  await page.getByRole('textbox', { name: 'Describe the case in detail...' }).click();
  await page.getByRole('textbox', { name: 'Describe the case in detail...' }).fill('Problem in device');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Select an Agent' }).click();
  await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('button', { name: 'Next: SLA' }).click();
  await page.getByRole('button', { name: 'Select SLA' }).click();
  await page.getByRole('option', { name: 'AMC / Maintenance' }).click();
  await page.getByRole('button', { name: 'Create Case' }).click();
  await page.waitForTimeout(1000);
  if (await page.getByText('Support Case created').isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/editQueue.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editQueue","true",`./${screenshotPath}/editQueue.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editQueue.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editQueue","false",`./${screenshotPath}/editQueue.png`)
  }
    
  await page.reload();
  console.log('edit queue completed');
}
