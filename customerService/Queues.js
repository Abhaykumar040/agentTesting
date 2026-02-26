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
  await addTeamIntoQueue(page);

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
   await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'New Queue' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).fill('Customer Support');
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).click();
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).fill('This queue manages customer complaints and queries.');
  await page.getByRole('button', { name: 'Create Queue' }).click();
   await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'New Queue' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).fill('Billing Support');
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).click();
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).fill('For billing and payment related issues.');
  await page.getByRole('button', { name: 'Create Queue' }).click();
   await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'New Queue' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).fill('General Query');
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).click();
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).fill('IN this queue will contain General problem');
  await page.getByRole('button', { name: 'Create Queue' }).click();
   await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'New Queue' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).fill('IT Helpdeskosa');
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).click();
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).fill('IN this queue will contain "IT heptdesk" problem');
  await page.getByRole('button', { name: 'Create Queue' }).click();
   await page.waitForTimeout(1000);

  
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

async function addTeamIntoQueue(page){
  await page.getByRole('link', { name: 'Queues' }).click();
  await page.getByRole('cell', { name: 'Technical Queue' }).first().click();
  await page.getByRole('tab', { name: 'Assigned Teams' }).click();
  await page.getByRole('button', { name: 'Assign Team' }).click();
  await page.getByRole('button', { name: 'Select a team' }).click();
  await page.getByRole('option', { name: 'Technical Team' }).click();
  await page.getByRole('button', { name: 'Assign Team' }).click();

   await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Teams' }).click();


   await page.waitForTimeout(1000);
   await page.getByText('Technical Team').click();

 await page.waitForTimeout(1000);
 

  await page.getByRole('tab', { name: 'Assigned Queues' }).click();
   await page.waitForTimeout(1000);


  if (await page.getByText('Technical Queue').isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/assignTeamToQueue.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"assignTeamToQueue","true",`./${screenshotPath}/assignTeamToQueue.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/assignTeamToQueue.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"assignTeamToQueue","false",`./${screenshotPath}/assignTeamToQueue.png`)
  }
    
}


