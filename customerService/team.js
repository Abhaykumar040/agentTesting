import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';


const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/team`;
const pathName=`outputData/priority/${testData.companyType}`

export async function team(page) {
  await addTeam(page);
  await page.waitForTimeout(3000);
  await editTeam(page);
}

async function addTeam(page) {
  console.log('Enter in add team');
   await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Teams' }).click();
  await page.getByRole('button', { name: 'New Team' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support Team' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support Team' }).fill('Technical Team');
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).click();
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).fill('This team can handle technical problem');
  await page.getByRole('button', { name: 'Create Team' }).click();

  await page.getByRole('button', { name: 'New Team' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support Team' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support Team' }).fill('Software Team');
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).click();
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).fill('It will handle software problem');
  await page.getByRole('button', { name: 'Create Team' }).click();
  await page.waitForTimeout(1000);
      
  if (await page.getByText('Team added successfully').first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/addTeam.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addTeam","true",`./${screenshotPath}/addTeam.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/addTeam.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addTeam","false",`./${screenshotPath}/addTeam.png`)
  }
  await page.reload();
  console.log('Add team completed');
}

async function editTeam(page){
  console.log('Enter in edit team');
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Teams' }).click();
   await page.getByRole('row', { name: 'Technical Team This team can' }).locator('button').click();
  await page.getByRole('menuitem', { name: 'Edit Team' }).click();
  await page.getByRole('button', { name: 'Add Team Members' }).click();
  await page.getByRole('button', { name: 'Agent' }).click();
  await page.getByRole('option', { name: 'Yogesh Yadav' }).first().click();
  await page.getByRole('button', { name: 'Add Member' }).click();
  await expect(page.getByText('Team updated successfully')).toBeVisible();
  await page.getByRole('button', { name: 'Add Team Members' }).click();
  await page.getByRole('button', { name: 'Agent' }).click();
  await page.getByRole('option', { name: 'Jay kumar Rathor' }).click();
  await page.getByRole('button', { name: 'Add Member' }).click();
  await page.waitForTimeout(1000);
        
      if (await page.getByText('Team updated successfully',{exact:true}).first().isVisible()) 
        {
            await page.screenshot({ path: `./${screenshotPath}/editTeam.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"editTeam","true",`./${screenshotPath}/editTeam.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/editTeam.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"editTeam","false",`./${screenshotPath}/editTeam.png`)
          }
  await page.getByRole('button', { name: 'Back to Teams' }).click();
  await page.reload();
  console.log('Edit team completed');
}
