import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/cs-agent`;
const pathName=`outputData/priority/${testData.companyType}`

export async function cs_agent(page) {
  // await addCSAgent(page);
  // await page.waitTimeout(3000);
  await emailVarifiedInCSAgent(page);
  // await page.waitTimeout(3000);
  // await addRoleInCSAgent(page);
}


async function addCSAgent(page){
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'CS-Agents' }).click();
  await page.getByRole('button', { name: 'New Agent', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).fill('Mukesh Kumar');
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+1249@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('9878432363');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.getByRole('option', { name: 'Sales manager' }).click();
  await page.getByRole('button', { name: 'Add Agent' }).click();
  await page.getByRole('menuitem', { name: 'Add Role' }).click();
  await page.getByRole('combobox', { name: 'Search role to add' }).click();
  await page.getByRole('option', { name: 'Field Service Manager' }).click();
  await page.getByRole('combobox', { name: 'Search role to add' }).click();
  await page.getByRole('option', { name: 'Sales Executive' }).click();
  await page.getByRole('combobox', { name: 'Search role to add' }).click();
  await page.getByRole('option', { name: 'Sales manager' }).click();
  await page.getByRole('button', { name: 'Add Role' }).click();
  await expect(page.getByText('Agent updated successfully')).toBeVisible();

  await page.getByRole('button', { name: 'New Agent', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).fill('Suraj Kumar');
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+1150@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('9878438364');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.getByRole('option', { name: 'Sales manager' }).click();
 await page.getByRole('menuitem', { name: 'Add Role' }).click();
  await page.getByRole('combobox', { name: 'Search role to add' }).click();
  await page.getByRole('option', { name: 'Field Service Manager' }).click();
  await page.getByRole('combobox', { name: 'Search role to add' }).click();
  await page.getByRole('option', { name: 'Sales Executive' }).click();
 await page.getByRole('combobox', { name: 'Search role to add' }).click();
  await page.getByRole('option', { name: 'Field Service Engineer' }).click();
  await page.getByRole('combobox', { name: 'Search role to add' }).click();
  await page.getByRole('option', { name: 'Sales manager' }).click();
  await page.getByRole('button', { name: 'Add Role' }).click();
  await expect(page.getByText('Agent updated successfully')).toBeVisible();
}

async function emailVarifiedInCSAgent(page){
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'CS-Agents' }).click();
   await page.getByRole('button', { name: 'New Agent', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).fill('Ravi');
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+1166@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('9874563210');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.getByRole('option', { name: 'Field Service Manager' }).click();
  await page.getByRole('button', { name: 'Add Agent' }).click();
  await page.getByRole('row', { name: 'Ravi akbk6551+1166@gmail.com' }).getByLabel('Email not verified').click();
 await expect(page.getByText('Onboarding email resent')).toBeVisible();
}