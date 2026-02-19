import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';


const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/setting`;
const pathName=`outputData/priority/${testData.companyType}`

export async function setting(page) {
  await slaSetting(page);
  await page.waitForTimeout(3000);
  await caseCategoriesSetting(page);
  await page.waitForTimeout(3000);
  await editcaseCategoriesSetting(page);
}

async function slaSetting(page){
  console.log('Enter in SLA setting');
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
  await page.getByPlaceholder('60').click();
  await page.getByPlaceholder('60').fill('1');
  await page.getByPlaceholder('1440').click();
  await page.getByPlaceholder('1440').fill('48');
  await page.getByRole('button', { name: 'Save SLA' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);

  if (await page.getByText('Setting updated successfully',{exact:true}).first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/slaSetting.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"slaSetting","true",`./${screenshotPath}/slaSetting.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/slaSetting.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"slaSetting","false",`./${screenshotPath}/slaSetting.png`)
  }
  await page.reload();
  console.log('SLA setting completed');

}

async function caseCategoriesSetting(page){
  console.log('Enter in case category setting');
 await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByRole('tab', { name: 'Case Categories' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Product Not Working8');
  await page.getByRole('button').nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'PrioritySupport2' }).click();
  await page.getByRole('button').nth(2).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Support Case Fields' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Add subcategory' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).fill('NO Power');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).fill('Device is not starting');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Save Category' }).click();
  // await expect(page.getByText('Setting updated successfully')).toBeVisible();

  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Installation Request1');
  await page.getByRole('button').nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'PrioritySupport1' }).click();
  await page.getByRole('button').nth(2).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Support Case Fields' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).fill('Installation');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('checkbox', { name: 'IsDefault' }).check();
  await page.getByRole('checkbox', { name: 'Active' }).uncheck();
  await page.getByRole('button', { name: 'Save Category' }).click();

  await page.waitForTimeout(2000);
      
    if (await page.getByText('Setting updated successfully',{exact:true}).first().isVisible()) 
      {
          await page.screenshot({ path: `./${screenshotPath}/caseCategoriesSetting.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"caseCategoriesSetting","true",`./${screenshotPath}/caseCategoriesSetting.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/caseCategoriesSetting.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"caseCategoriesSetting","false",`./${screenshotPath}/caseCategoriesSetting.png`)
        }
  await page.reload();
  console.log('Case category setting');
}

async function editcaseCategoriesSetting(page){
  console.log('Enter in Edit case category setting');
 await page.getByRole('button', { name: 'Customer Service' }).click();
   await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByRole('tab', { name: 'Case Categories' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Product Not Workings6');
  await page.getByRole('button').nth(1).click();
  await page.getByRole('option', { name: 'PrioritySupport2' }).click();
  await page.getByRole('button').nth(2).click();
  await page.getByRole('option', { name: 'Support Case Fields' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Add subcategory' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).fill('NO Power');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).fill('Device is not starting');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).fill('Device is not working');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Save Category' }).click();
  // await page.waitTimeout(2000);
  // await expect(page.getByText('Setting updated successfully')).toBeVisible()

  await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
   await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Product not Working properly');
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Add subcategory' }).click();
  await page.getByRole('textbox', { name: 'Add subcategory' }).fill('Power issue');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('checkbox', { name: 'IsDefault' }).check();
  await page.getByRole('button', { name: 'Update Category' }).click();
  await page.getByText('Setting updated successfully').click();

   await page.waitForTimeout(2000);
      
    if (await page.getByText('Setting updated successfully',{exact:true}).isVisible()) 
      {
          await page.screenshot({ path: `./${screenshotPath}/editcaseCategoriesSetting.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"editcaseCategoriesSetting","true",`./${screenshotPath}/editcaseCategoriesSetting.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/editcaseCategoriesSetting.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"editcaseCategoriesSetting","false",`./${screenshotPath}/editcaseCategoriesSetting.png`)
        }
  await page.reload();
  console.log('edit case category setting');
}