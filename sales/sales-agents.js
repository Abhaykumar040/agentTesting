import fs from 'fs/promises';
import { test, expect } from '@playwright/test';
import { updateOpJson } from '../updateOp';

// Read test data
const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);

// Paths
const screenshotPath = `screenshot/${testData.companyType}/sales-agents`;
const pathName = `outputData/sales-agents/${testData.companyType}`;

export async function salesAgents(page) {
  // await deletePreviousSalesAgents(page);
  // await page.waitForTimeout(2000);

  await addSalesAgent(page);
  await page.waitForTimeout(2000);

  // await addRoleForSalesAgent(page);
  // await page.waitForTimeout(2000);
  // await removeRoleForSalesAgent(page);
  // await page.waitForTimeout(2000);

  // await deleteSalesAgent(page);
}



async function editSalesAgent(page) {
  await page.getByRole('link', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Sales-Agents' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('TestAgent').first().click();

  await page.getByRole('textbox', { name: 'First Name *' }).fill('TestAgentEdit');
  await page.getByRole('textbox', { name: 'Phone *' }).fill('8888888888');

  await page.getByRole('button', { name: 'Update Agent' }).click();

  await expect(
    page.getByText('Agent updated successfully')
  ).toBeVisible();
}

async function addSalesAgent(page) {
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Sales-Agents' }).click();
  await page.getByRole('button', { name: 'New Agent', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).fill('Ramesh Kumar');
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+1121@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('9872349823');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('option', { name: 'Sales Manager' }).click();
  await page.getByRole('button', { name: 'Add Agent' }).click();
  await page.getByText('Agent added successfully').click();

  await page.getByRole('button', { name: 'New Agent', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).fill('Mahesh Kumar');
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+1122@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('9872349824');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('option', { name: 'Sales Manager' }).click();
  await page.getByRole('button', { name: 'Add Agent' }).click();
  await page.getByText('Agent added successfully').click();

  await page.getByRole('button', { name: 'New Agent', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).fill('Yogesh Kumar');
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+1123@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('9872349825');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('option', { name: 'Sales Manager' }).click();
  await page.getByRole('button', { name: 'Add Agent' }).click();
  await page.getByText('Agent added successfully').click();

  await page.getByRole('button', { name: 'New Agent', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).click();
  await page.getByRole('textbox', { name: 'John', exact: true }).fill('Santosh Kumar');
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).click();
  await page.getByRole('textbox', { name: 'john.doe@example.com' }).fill('akbk6551+1126@gmail.com');
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).click();
  await page.getByRole('textbox', { name: '+1 (123) 456-' }).fill('9872349826');
  await page.getByRole('combobox', { name: 'Select roles' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('option', { name: 'Sales Manager' }).click();
  await page.getByRole('button', { name: 'Add Agent' }).click();
  await page.getByText('Agent added successfully').click();

  await page.reload();
  await page.waitForLoadState('networkidle');
  
}


