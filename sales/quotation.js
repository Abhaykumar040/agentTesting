import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/quotation`;
const pathName=`outputData/priority/${testData.companyType}`


export async function Quotation(page){
  // await deletePreviuosQuotation(page);
  // await page.waitForTimeout(3000);
  await createQuotation(page);
  await page.waitForTimeout(3000);
  await approveQuotation(page);
  await page.waitForTimeout(3000);
  await rejectQuotation(page);
  await page.waitForTimeout(3000);
  await rejectedByCustomerQuotation(page);
  await page.waitForTimeout(3000);
  await copyQuotation(page);
  await page.waitForTimeout(3000);
  await acceptQuotation(page);
  await page.waitForTimeout(3000);
  await sendQuotation(page);
  await page.waitForTimeout(3000);
  await editCustomer(page);
  await page.waitForTimeout(3000);
  await deleteQuotation(page);
}




async function createQuotation(page){
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Quotation created successfully')).toBeVisible();

  
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
    await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();


  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
    await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
    await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Quotation created successfully')).toBeVisible();
  await page.reload();
  await page.waitForLoadState('networkidle');
}

async function approveQuotation(page) {
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  // await expect(page.getByText('Quotation updated successfully')).toBeVisible();

  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  await page.waitForTimeout(1000);
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();

  await page.reload();
  await page.waitForLoadState('networkidle');
  
}

async function acceptQuotation(page) {
   await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Accept' }).click();
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();

  
    await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Accept' }).click();
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();
  await page.reload();
  await page.waitForLoadState('networkidle');
 
}

async function rejectQuotation(page){
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
   await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Reject' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('THis is not right quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();
  await page.reload();
  await page.waitForLoadState('networkidle');
}

async function rejectedByCustomerQuotation(page) {
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
   await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
   await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Reject' }).click();
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();
  await page.reload();
  // await page.waitForLoadState('networkidle');
}

async function copyQuotation(page){

  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
 await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Kolpit Singh' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'charger 20w' }).first().click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover Quotatons');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Copy' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Anil Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'printer' }).click();
  await page.locator('div:nth-child(2) > .MuiBox-root.css-v64yv8 > div > .MuiFormControl-root > .MuiInputBase-root').first().click();
  await page.locator('textarea[name="products.1.description"]').fill('printer ');
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('/quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  // await expect(page.getByText('Quotation created successfully')).toBeVisible();
  await page.reload();
}
async function editCustomer(page) {
   await page.getByRole('button', { name: 'Sales' }).click();
    await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();
  await page.reload();
}

async function sendQuotation(page){
   await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: 'Send Quotation' }).click();
  await page.getByRole('textbox', { name: 'CC' }).click();
  await page.getByRole('textbox', { name: 'CC' }).fill('akbk6551+1112@gmail.com');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.locator('div').filter({ hasText: 'Quotation mailed successfully' }).nth(4).click();
  await expect(page.getByText('Quotation mailed successfully')).toBeVisible()
  await page.getByRole('button', { name: 'Back to list' }).click();

    await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: 'Send Quotation' }).click();
  await page.getByRole('textbox', { name: 'CC' }).click();
  await page.getByRole('textbox', { name: 'CC' }).fill('akbk6551+1112@gmail.com');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.locator('div').filter({ hasText: 'Quotation mailed successfully' }).nth(4).click();
  await expect(page.getByText('Quotation mailed successfully')).toBeVisible()
  await page.getByRole('button', { name: 'Back to list' }).click();
  await page.reload();
  await page.waitForLoadState('networkidle');
}

async function deleteQuotation(page) {

  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await expect(page.getByText('Quotation deleted successfully')).toBeVisible();
}
