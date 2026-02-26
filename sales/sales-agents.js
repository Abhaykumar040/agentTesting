import fs from 'fs/promises';
import { test, expect } from '@playwright/test';
import { updateOpJson } from '../updateOp';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/sales-agents`;
const pathName=`outputData/priority/${testData.companyType}`

export async function salesAgents(page) {
  await addSalesAgent(page);
  await page.waitForTimeout(2000);
  await addRoleForSalesAgent(page);
  await page.waitForTimeout(2000);
  await emailVarificaionInSelesAgent(page);
}



async function editSalesAgent(page) {
  console.log("Enter in edit sales agent");
  await page.getByRole('link', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Sales-Agents' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('TestAgent').first().click();

  await page.getByRole('textbox', { name: 'First Name *' }).fill('TestAgentEdit');
  await page.getByRole('textbox', { name: 'Phone *' }).fill('8888888888');

  await page.getByRole('button', { name: 'Update Agent' }).click();

  await expect(page.getByText('Agent updated successfully')).toBeVisible();
  console.log("Edit sales agent completed");
}

async function addSalesAgent(page) {
  console.log("Enter in add sales agent");
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Sales-Agents' }).click();
  await page.getByRole('button', { name: 'New Agent', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).fill('Ramesh Kumar');
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+112111@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('987234982311');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('option', { name: 'Sales Manager' }).click();
  await page.getByRole('button', { name: 'Add Agent' }).click();
  await page.getByText('Agent added successfully').click();

  await page.getByRole('button', { name: 'New Agent', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).fill('Mahesh Kumar');
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+112211@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('987234982411');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('option', { name: 'Sales Manager' }).click();
  await page.getByRole('button', { name: 'Add Agent' }).click();
  await page.getByText('Agent added successfully').click();

  await page.getByRole('button', { name: 'New Agent', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).fill('Yogesh Kumar');
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+112311@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('987234982511');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('option', { name: 'Sales Manager' }).click();
  await page.getByRole('button', { name: 'Add Agent' }).click();
  await page.getByText('Agent added successfully').click();

  await page.getByRole('button', { name: 'New Agent', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).fill('Santosh Kumar');
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+112611@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('987234982611');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('option', { name: 'Sales Manager' }).click();
  await page.getByRole('button', { name: 'Add Agent' }).click();
  await page.getByText('Agent added successfully').click();
  await page.reload();
  await page.waitForTimeout(3000);
  
  if (await page.getByText('Santosh Kumar', { exact: true }).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/addSalesAgent.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addSalesAgent","true",`./${screenshotPath}/addSalesAgent.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/addSalesAgent.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addSalesAgent","false",`./${screenshotPath}/addSalesAgent.png`)
  }
  await page.reload();
  await page.waitForLoadState('networkidle');
  console.log("Add sales agent completed");
  
}

async function emailVarificaionInSelesAgent(page) {
  console.log("Enter in email varification in sales agent");
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Sales-Agents' }).click();
  await page.getByRole('row', { name: 'Santosh Kumar akbk6551+1126@' }).getByLabel('Email not verified').click();
  // await expect(page.getByText('Onboarding email resent')).toBeVisible();
  // await page.reload();
  await page.waitForTimeout(1000);
  
  if (await page.getByText('Onboarding email resent').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/emailVarificaionInSelesAgent.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"emailVarificaionInSelesAgent","true",`./${screenshotPath}/emailVarificaionInSelesAgent.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/emailVarificaionInSelesAgent.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"emailVarificaionInSelesAgent","false",`./${screenshotPath}/emailVarificaionInSelesAgent.png`)
  }
  await page.reload();
  console.log("Email varification in sales agent completed");
}

async function addRoleForSalesAgent(page) {
  console.log("Enter in add role for sales agent");
  // Add Roles
  await page.locator('button').nth(5).click();
  await page.getByRole('menuitem', { name: 'Add Role' }).click();
  await page.getByRole('combobox', { name: 'Search role to add' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Master data handling' }).click();
  await page.getByRole('combobox', { name: 'Search role to add' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Sales Executive' }).click();
  await page.getByRole('button', { name: 'Add Role' }).click();
  await page.waitForTimeout(1000);
  
  if (await page.getByText('Agent updated successfully').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/AddRoleForSelesAgent.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"AddRoleForSelesAgent","true",`./${screenshotPath}/AddRoleForSelesAgent.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/AddRoleForSelesAgent.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"AddRoleForSelesAgent","false",`./${screenshotPath}/AddRoleForSelesAgent.png`)
  }
//  Revome Roles 
   await page.locator('button').nth(5).click();
  await page.getByRole('menuitem', { name: 'Add Role' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('row', { name: 'Master data handling' }).getByRole('button').click();
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Remove' }).first().click();
  await page.waitForTimeout(1000);
  if (!await page.getByText('Master data handling').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/removeRoleForSelesAgent.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"removeRoleForSelesAgent","true",`./${screenshotPath}/removeRoleForSelesAgent.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/removeRoleForSelesAgent.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"removeRoleForSelesAgent","false",`./${screenshotPath}/removeRoleForSelesAgent.png`)
  }
  
  await page.getByRole('button', { name: 'Add Role' }).click();
  await page.reload();
 console.log("Add role for sales agent completed");
}