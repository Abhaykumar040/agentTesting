import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';

export async function cs_agent(page) {
  await addCSAgent(page);
  await page.waitTimeout(3000);
  // await emailVarifiedInCSAgent(page);
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
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+1239@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('9878432362');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.getByRole('option', { name: 'Sales Officer' }).click();
  await page.getByRole('button', { name: 'Add Agent' }).click();
  await expect(page.getByText('Agent added successfully')).toBeVisible();

  await page.getByRole('button', { name: 'New Agent', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).fill('Suraj Kumar');
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+1139@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('9878438362');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.getByRole('option', { name: 'Sales Officer' }).click();
  await page.getByRole('button', { name: 'Add Agent' }).click();
  await expect(page.getByText('Agent added successfully')).toBeVisible();
}

// async function emailVarifiedInCSAgent(page){
//   await page.getByRole('button', { name: 'Customer Service' }).click();
//   await page.getByRole('link', { name: 'CS-Agents' }).click();
//   await page.getByRole('button', { name: 'New Agent', exact: true }).click();
//   await page.getByRole('textbox', { name: 'John', exact: true }).click();
//   await page.getByRole('textbox', { name: 'John', exact: true }).fill('Jitendra Kumar');
//   await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
//   await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+1339@gmail.com');
//   await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
//   await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('9828432362');
//   await page.getByRole('combobox', { name: 'Select roles' }).click();
//   await page.getByRole('option', { name: 'Sales Officer' }).click();
//   await page.getByRole('button', { name: 'Add Agent' }).click();
//   await expect(page.getByText('Agent added successfully')).toBeVisible();
// }