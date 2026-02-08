import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/Queues`;
const pathName=`outputData/priority/${testData.companyType}`

export async function team(page) {
  await addQueues(page);
  await page.waitTimeout(3000);
  await editQueues(page);
}

async function addQueues(page){
   await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Queues' }).click();
  await page.getByRole('button', { name: 'New Queue' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).fill('Technical Queue');
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).click();
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).fill('IN this queue will contain technical problem');
  await page.getByRole('button', { name: 'No data available' }).click();
  await page.getByRole('button', { name: 'No data available' }).click();
  await page.locator('#menu-queueEmail > .MuiBackdrop-root').click();
  await page.getByRole('button', { name: 'Create Queue' }).click();
  await expect(page.getByText('Queue added successfully')).toBeVisible();


  await page.getByRole('button', { name: 'New Queue' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support' }).fill('Installation Queue');
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).click();
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).fill('IN this queue will contain installation queues');
  await page.getByRole('button', { name: 'No data available' }).click();
  await page.getByRole('button', { name: 'No data available' }).click();
  await page.locator('#menu-queueEmail > .MuiBackdrop-root').click();
  await page.getByRole('button', { name: 'Create Queue' }).click();
  await expect(page.getByText('Queue added successfully')).toBeVisible();
  await page.reload();
  await page.waitForLoadState('networkidle');
}
