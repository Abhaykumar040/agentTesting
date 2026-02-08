import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/invoices`;
const pathName=`outputData/priority/${testData.companyType}`

export async function Invoices(page){
  await addInvoices(page);
  await page.waitForTimeout(3000);
  await editInvoices(page);
  await page.waitForTimeout(3000);
  await sendInvoices(page);
  await page.waitForTimeout(3000);
  await cancelInvoice(page);
  await page.waitForTimeout(3000);
  await createInvoiceByQuotation(page);
  await page.waitForTimeout(3000);
}

async function addInvoices(page){
   await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Invoices' }).click();
  await page.getByRole('link', { name: 'Add Invoice' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('checkbox', { name: 'UPI Transfer' }).check();
  await page.getByRole('checkbox', { name: 'Notes' }).uncheck();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('input[name="products.0.discount"]').click();
  await page.locator('input[name="products.0.discount"]').fill('1');
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
 await page.getByRole('option', { name: 'charger 20w' }).first().click();

  await page.locator('input[name="products.1.discount"]').click();
  await page.locator('input[name="products.1.discount"]').fill('06');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Invoice created successfully')).toBeVisible();
}

async function editInvoices(page){

   await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Invoices' }).click();
  await page.getByRole('link', { name: 'Add Invoice' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('checkbox', { name: 'UPI Transfer' }).check();
  await page.getByRole('checkbox', { name: 'Notes' }).uncheck();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'charger 20w' }).first().click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Invoice created successfully')).toBeVisible();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'printer' }).first().click();
  await page.locator('textarea[name="products.0.description"]').click();
  await page.locator('textarea[name="products.0.description"]').fill('best printer');
  await page.getByRole('checkbox', { name: 'Notes' }).check();
  await page.locator('textarea[name="note"]').click();
  await page.locator('textarea[name="note"]').fill('updated  invoicr');
  await page.getByRole('button', { name: 'Update' }).click();
  await expect(page.getByText('Invoice updated successfully')).toBeVisible();
  await page.getByRole('button', { name: 'Back to list' }).click();
  await page.reload();
  await page.waitForLoadState('networkidle');
  
}

async function sendInvoices(page){
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Invoices' }).click();
  await page.getByRole('link', { name: 'Add Invoice' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('checkbox', { name: 'UPI Transfer' }).check();
  await page.getByRole('checkbox', { name: 'Notes' }).uncheck();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('input[name="products.0.discount"]').click();
  await page.locator('input[name="products.0.discount"]').fill('1');
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'charger 20w' }).first().click();
  await page.locator('input[name="products.1.discount"]').click();
  await page.locator('input[name="products.1.discount"]').fill('06');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Invoice created successfully')).toBeVisible();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).first().click();
  await page.getByRole('button', { name: 'Send Invoice' }).click();
  await page.getByRole('textbox', { name: 'CC' }).click();
  await page.getByRole('textbox', { name: 'CC' }).fill('akbk6551+1112@gmail.com');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.waitForTimeout(3000);
  await expect(page.getByText('Invoice mailed successfully')).toBeVisible();
  await page.getByRole('button', { name: 'Back to list' }).click();
 
  await page.reload();
  await page.waitForLoadState('networkidle');
}

async function cancelInvoice(page){
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Invoices' }).click();
  await page.getByRole('link', { name: 'Add Invoice' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByText('UPI Transfer').click();
  await page.getByRole('checkbox', { name: 'Terms and Conditions' }).uncheck();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('textarea[name="note"]').click();
  await page.locator('textarea[name="note"]').fill('ghjhfd');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Invoice created successfully')).toBeVisible();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Cancel' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Invoice updated successfully')).toBeVisible();
}
async function createInvoiceByQuotation(page) {
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('checkbox', { name: 'Notes' }).uncheck();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.getByRole('button', { name: 'Save' }).click()
  await page.waitForTimeout(2000);
  await expect(page.getByText('Quotation created successfully')).toBeVisible();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Accept' }).click();
  // await page.waitForTimeout(2000);
  // await expect(page.getByText('Quotation updated successfully')).toBeVisible();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: 'Create Invoice' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await expect(page.getByText('Invoice updated successfully').first()).toBeVisible();
  await page.getByRole('button', { name: 'Back to list' }).click();
}