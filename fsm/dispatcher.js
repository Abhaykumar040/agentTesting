import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';
import { waitForEmail } from '../gmail';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/dispatcher`;
const pathName=`outputData/priority/${testData.companyType}`

export async function dispatcher(page) {
  await addDispatcher(page);  
  await page.waitForTimeout(3000);
  await addRoleInDispatcher(page);
  await page.waitForTimeout(3000);
  await emailVarifiedInDispatcher(page);

}


async function addDispatcher(page){
  console.log('Enter in add CS_Agent');
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Dispatcher' }).click();
   await page.getByRole('button', { name: 'Add New Agent', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).fill('Jay kumar Rathor');
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+13651@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('98657412421');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.getByRole('option', { name: 'Customer Service' }).click();
  await page.getByRole('button', { name: 'Add Agent' }).click();
  // await page.getByText('Agent added successfully').click();
  // await page.reload(2000);
  // await page.locator('button').nth(5).click();
  // await page.getByRole('menuitem', { name: 'Add Role' }).click();
  // await page.getByRole('combobox', { name: 'Search role to add' }).click();
  // await page.getByRole('option', { name: 'Master data handling' }).click();
  // await page.getByRole('combobox', { name: 'Search role to add' }).click();
  // await page.getByRole('option', { name: 'Field Service Engineer' }).click();
  // await page.getByRole('button', { name: 'Add Role' }).click();
  // await page.getByText('Agent updated successfully').click();
  // await expect(page.getByText('akbk6551+1265@gmail.com')).toBeVisible();
  
await page.reload(2000);
   await page.getByRole('button', { name: 'Add New Agent', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).fill('Yogesh Yadav');
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+13661@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('98657412411');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.getByRole('option', { name: 'Customer Service' }).click();
  await page.getByRole('button', { name: 'Add Agent' }).click();
  // await page.getByText('Agent added successfully').click();
  // await page.reload(2000);
  // await page.locator('button').nth(5).click();
  // await page.getByRole('menuitem', { name: 'Add Role' }).click();
  // await page.getByRole('combobox', { name: 'Search role to add' }).click();
  // await page.getByRole('option', { name: 'Master data handling' }).click();
  // await page.getByRole('combobox', { name: 'Search role to add' }).click();
  // await page.getByRole('option', { name: 'Field Service Engineer' }).first().click();
  // await page.getByRole('button', { name: 'Add Role' }).click();

  // await page.reload();
await page.reload(2000);
  await page.getByRole('button', { name: 'Add New Agent', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).fill('Shivam');
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+13671@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('98657412401');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.getByRole('option', { name: 'Customer Service' }).click();
  await page.getByRole('button', { name: 'Add Agent' }).click();
  // // await page.getByText('Agent added successfully').click();
  // // await page.reload(2000);
  // await page.locator('button').nth(5).click();
  // await page.getByRole('menuitem', { name: 'Add Role' }).click();
  // await page.getByRole('combobox', { name: 'Search role to add' }).click();
  // await page.getByRole('option', { name: 'Master data handling' }).click();
  // await page.getByRole('combobox', { name: 'Search role to add' }).click();
  // await page.getByRole('option', { name: 'Field Service Engineer' }).click();
  // await page.getByRole('button', { name: 'Add Role' }).click();
  // await page.relaod();
  await page.waitForTimeout(2000);
      
    if (await page.getByText('akbk6551+13661@gmail.com',{exact:true}).isVisible()) 
      {
          await page.screenshot({ path: `./${screenshotPath}/addCSAgent.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"addCSAgent","true",`./${screenshotPath}/addCSAgent.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/addCSAgent.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"addCSAgent","false",`./${screenshotPath}/addCSAgent.png`)
        }
        await page.reload(2000);
  await page.reload();
  await page.reload(3000);
  console.log('CS Agent completed');
}

async function emailVarifiedInDispatcher(page){
  console.log('Enter in email varification in CS Agent');
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'CS-Agents' }).click();
    await page.getByRole('button', { name: 'New Agent', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).fill('Shivam');
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+12681@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('98657412291');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.getByRole('option', { name: 'Customer Service' }).click();
  await page.getByRole('button', { name: 'Add Agent' }).click()
  const targetEmail = "akbk6551+1268@gmail.com";
  await page.getByRole('row', { name: 'Shivam akbk6551+1268@gmail.com' }).getByLabel('Email not verified').click();
  await page.waitForTimeout(2000);

   
  await waitForEmail(targetEmail,3000);
      
    if (await page.getByText('Onboarding email resent').isVisible()) 
      {
          await page.screenshot({ path: `./${screenshotPath}/emailVarifiedInCSAgent.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"emailVarifiedInCSAgent","true",`./${screenshotPath}/emailVarifiedInCSAgent.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/emailVarifiedInCSAgent.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"emailVarifiedInCSAgent","false",`./${screenshotPath}/emailVarifiedInCSAgent.png`)
        }
  await page.reload();

 console.log("Email varification in cs agent completed");
}

async function addRoleInDispatcher(page) {
  await page.locator('button[aria-haspopup="true"]').first().click();

  await page.getByRole('menuitem', { name: 'Add Role' }).click();
  await page.getByRole('combobox', { name: 'Search role to add' }).click();
  await page.getByRole('option', { name: 'Master data handling' }).click();
  await page.getByRole('combobox', { name: 'Search role to add' }).click();
  await page.getByRole('option', { name: 'Sales Executive' }).click();
  await page.getByRole('button', { name: 'Add Role' }).click();
  await page.waitForTimeout(2000);
    if (await page.getByText('Agent updated successfully',{exact:true}).isVisible()) 
      {
          await page.screenshot({ path: `./${screenshotPath}/addRoleInCSAgent.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"addRoleInCSAgent","true",`./${screenshotPath}/addRoleInCSAgent.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/addRoleInCSAgent.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"addRoleInCSAgent","false",`./${screenshotPath}/addRoleInCSAgent.png`)
        }
  await page.reload();
}