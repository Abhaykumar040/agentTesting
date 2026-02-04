import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';




export async function Quotation(page){
  await deletePreviuosQuotation(page);
  await page.waitForTimeout(3000);
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
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  // await page.locator('#customer-billing-address-search-label').click();
  // await page.locator('#customer-billing-address-search-label').click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('Conver for Mobile');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Quotation created successfully')).toBeVisible();

  
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  // await page.locator('#customer-billing-address-search-label').click();
  // await page.locator('#customer-billing-address-search-label').click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('Conver for Mobile');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Quotation created successfully')).toBeVisible();

  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  // await page.locator('#customer-billing-address-search-label').click();
  // await page.locator('#customer-billing-address-search-label').click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('Conver for Mobile');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Quotation created successfully')).toBeVisible();

  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  // await page.locator('#customer-billing-address-search-label').click();
  // await page.locator('#customer-billing-address-search-label').click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('Conver for Mobile');
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
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'charger 20w' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('charger and cover ');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();

  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'charger 20w' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('charger and cover ');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();

  await page.reload();
  await page.waitForLoadState('networkidle');
  
}

async function acceptQuotation(page) {
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'charger 20w' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('charger and cover ');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Accept' }).click();
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();

  
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'charger 20w' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('charger and cover ');
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
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover');
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
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('bghjgj');
  await page.getByRole('button', { name: 'Save' }).click();
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
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Copy' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('Hello ji');
  await expect(page.getByText('Quotation created successfully')).toBeVisible();

  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Copy' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('Hello ji');
  await expect(page.getByText('Quotation created successfully')).toBeVisible();
  await page.reload();
}
async function editCustomer(page) {
   await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('listbox', { name: 'Address' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('jhggfjb');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('checkbox', { name: 'Notes' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'charger 20w' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Back to list' }).click();
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();

  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('listbox', { name: 'Address' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('jhggfjb');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('checkbox', { name: 'Notes' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'charger 20w' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Back to list' }).click();
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();
}

async function sendQuotation(page){
 await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.locator('.MuiInputBase-root.MuiOutlinedInput-root').first().click();
  await page.getByRole('option', { name: 'COVER' }).click();
  await page.locator('input[name="products.0.discount"]').click();
  await page.locator('input[name="products.0.discount"]').fill('7');
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('jhgjhk');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: 'Send Quotation' }).click();
  await page.getByRole('textbox', { name: 'CC' }).click();
  await page.getByRole('textbox', { name: 'CC' }).fill('akbk6551+1112@gmail.com');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.locator('div').filter({ hasText: 'Quotation mailed successfully' }).nth(4).click();
  await expect(page.getByText('Quotation mailed successfully')).toBeVisible()
  await page.getByRole('button', { name: 'Back to list' }).click();

  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.locator('.MuiInputBase-root.MuiOutlinedInput-root').first().click();
  await page.getByRole('option', { name: 'COVER' }).click();
  await page.locator('input[name="products.0.discount"]').click();
  await page.locator('input[name="products.0.discount"]').fill('7');
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('jhgjhk');
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
