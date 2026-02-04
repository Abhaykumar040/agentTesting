import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';

export async function FAQs(page) {
  await addFAQs(page);
  // await page.waitTimeout(3000);
  // await editFAQs(page);
}



async function addFAQs(page) {
   await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'FAQs' }).click();
  // await page.getByRole('button', { name: 'Add FAQs' }).click();
  // await page.getByRole('textbox', { name: 'Enter your FAQ question' }).click();
  // await page.getByRole('textbox', { name: 'Enter your FAQ question' }).fill('Is after-sales service available?');
  // await page.getByRole('textbox', { name: 'Enter your FAQ answer' }).click();
  // await page.getByRole('textbox', { name: 'Enter your FAQ answer' }).fill('Yes, we offer complete after-sales support including maintenance, troubleshooting, and replacement of faulty parts under warranty.');
  // await page.getByRole('combobox', { name: 'Select Tag' }).click();
  // await page.locator('div').filter({ hasText: /^Create New Tag$/ }).click();
  // await page.getByRole('textbox', { name: 'Tag name' }).click();
  // await page.getByRole('textbox', { name: 'Tag name' }).click();
  // await page.getByRole('textbox', { name: 'Tag name' }).fill('Genral FAQs');
  // await page.getByRole('button').nth(2).click();
  // await page.getByRole('button', { name: 'Save' }).click();
  // await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
  // await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).setInputFiles('iron-man-red-glow-5120x2880-24338.png');
  // await page.getByRole('button', { name: 'Save' }).click();
  // await expect(page.getByText('FAQ added successfully')).toBeVisible();


  // await page.getByRole('button', { name: 'Add FAQs' }).click();
  // await page.getByRole('textbox', { name: 'Enter your FAQ question' }).nth(1).click();
  // await page.getByRole('textbox', { name: 'Enter your FAQ question' }).nth(1).click();
  // await page.getByRole('textbox', { name: 'Enter your FAQ question' }).nth(1).fill('Is after-sales service available?');
  // await page.getByRole('textbox', { name: 'Enter your FAQ answer' }).nth(1).click();
  // await page.getByRole('textbox', { name: 'Enter your FAQ answer' }).nth(1).click();
  // await page.getByRole('textbox', { name: 'Enter your FAQ answer' }).nth(1).fill('Yes, we offer complete after-sales support including maintenance, troubleshooting, and replacement of faulty parts under warranty.');
  // await page.getByRole('combobox', { name: 'Select Tag' }).nth(1).click();
  // await page.getByRole('option', { name: 'Genral FAQs' }).click();
  // await page.getByRole('button', { name: 'Save' }).click();
  // await expect(page.getByText('FAQ added successfully')).toBeVisible();

  
  await page.getByRole('button', { name: 'Add FAQs' }).click();
  await page.getByRole('textbox', { name: 'Enter your FAQ question' }).nth(5).click();
  await page.getByRole('textbox', { name: 'Enter your FAQ question' }).nth(1).fill('How can I raise a service request?');
  await page.getByRole('textbox', { name: 'Enter your FAQ answer' }).nth(5).click();
  await page.getByRole('textbox', { name: 'Enter your FAQ answer' }).nth(1).fill('You can raise a service request through our support portal or by contacting customer support.');
  await page.getByRole('combobox', { name: 'Select Tag' }).nth(5).click();
  await page.getByRole('option', { name: 'Genral FAQs' }).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await expect(page.getByText('FAQ added successfully')).toBeVisible();
}

async function editFAQs(page) {
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'FAQs' }).click();
  await page.getByText('Do you provide installation').click();
  await page.getByText('Do you provide installation').press('ControlOrMeta+a');
  await page.getByText('Do you provide installation').fill('Are your EV chargers compatible with all vehicles?');
  await page.getByText('Yes, we provide professional').click();
  await page.getByText('Yes, we provide professional').press('ControlOrMeta+a');
  await page.getByText('Yes, we provide professional').fill('Our EV chargers are compatible with most electric vehicles that follow standard charging protocols.');
  await page.getByRole('button', { name: 'Update' }).click();
  await expect(page.getByText('FAQ updated successfully')).toBeVisible();
}