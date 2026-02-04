import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';


export async function setting(page) {
  await slaSetting(page);
  await page.waitTimeout(3000);
  await caseCategoriesSetting(page);
  await page.waitTimeout(3000);
  await editcaseCategoriesSetting(page);
}

async function slaSetting(page){
   await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByRole('tab', { name: 'SLA Settings' }).click();
  await page.getByRole('button', { name: 'Add SLA' }).click();
  await page.getByRole('textbox', { name: 'Premium Support' }).click();
  await page.getByRole('textbox', { name: 'Premium Support' }).fill('AMC / Maintenance 3');
  await page.getByPlaceholder('60').click();
  await page.getByPlaceholder('60').fill('6');
  await page.getByPlaceholder('1440').click();
  await page.getByPlaceholder('1440').fill('36');
  await page.getByRole('button', { name: 'Save SLA' }).click();
  await page.getByRole('button', { name: 'Add SLA' }).click();
  await page.getByRole('textbox', { name: 'Premium Support' }).click();
  await page.getByRole('textbox', { name: 'Premium Support' }).fill('Critical / Breakdown Issue 3');
  await page.getByRole('textbox', { name: 'Premium Support' }).click();
  await page.getByPlaceholder('60').click();
  await page.getByPlaceholder('60').click();
  await page.getByPlaceholder('60').fill('1');
  await page.getByPlaceholder('1440').click();
  await page.getByPlaceholder('1440').fill('48');
  await page.getByRole('button', { name: 'Save SLA' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Setting updated successfully')).toBeVisible();

}

async function caseCategoriesSetting(page){
 await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByRole('tab', { name: 'Case Categories' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Product Not Working8');
  await page.getByRole('button').nth(1).click();
  await page.getByRole('option', { name: 'Case Priority' }).click();
  await page.getByRole('button').nth(2).click();
  await page.getByRole('option', { name: 'Case Lifecycle' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).fill('NO Power');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).fill('Device is not starting');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Save Category' }).click();
  await expect(page.getByText('Setting updated successfully')).toBeVisible();

  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Installation Request1');
  await page.getByRole('button').nth(1).click();
  await page.getByRole('option', { name: 'Case Priority' }).click();
  await page.getByRole('button').nth(2).click();
  await page.getByRole('option', { name: 'Case Lifecycle' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).fill('Installation');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('checkbox', { name: 'IsDefault' }).check();
  await page.getByRole('checkbox', { name: 'Active' }).uncheck();
  await page.getByRole('button', { name: 'Save Category' }).click();
  await expect(page.getByText('Setting updated successfully')).toBeVisible();
}

async function editcaseCategoriesSetting(page){
 await page.getByRole('button', { name: 'Customer Service' }).click();
   await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByRole('tab', { name: 'Case Categories' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Product Not Workings6');
  await page.getByRole('button').nth(1).click();
  await page.getByRole('option', { name: 'Case Priority' }).click();
  await page.getByRole('button').nth(2).click();
  await page.getByRole('option', { name: 'Case Lifecycle' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).fill('NO Power');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).fill('Device is not starting');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Save Category' }).click();
  // await page.waitTimeout(2000);
  // await expect(page.getByText('Setting updated successfully')).toBeVisible();

   await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Product not Working properly');
  await page.getByRole('checkbox', { name: 'Active' }).uncheck();
  await page.getByText('IsDefault').click();
  await page.getByRole('checkbox', { name: 'Active' }).check();
  await page.getByRole('button', { name: 'Update Category' }).click();
  await expect(page.getByText('Setting updated successfully')).toBeVisible();
}