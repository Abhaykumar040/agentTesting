import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/form`
const pathName=`outputData/status/${testData.companyType}`


export async function form(page){
  await deletePreviuosForm(page);
  await page.waitForTimeout(3000);
  await addForm(page);
  await page.waitForTimeout(3000);
  await editForm(page);
  await page.waitForTimeout(3000);
  await deleteForm(page);
}
async function deletePreviuosForm(page){

    await page.getByRole('button', { name: 'Settings' }).click();
    await page.getByRole('link', { name: 'Form', exact: true }).click();
    await page.waitForTimeout(3000);


    while( true){
      const text = await page.textContent('text=Showing');
      const match = text.match(/of\s+(\d+)\s+entries/);
      const total = match ? parseInt(match[1]) : 0;

      // Stop loop if total <= 0
      if (total <= 0) {
       break;
      }
      await page.locator('button').nth(3).click();
      await page.getByRole('menuitem', { name: 'Delete' }).click();
      await page.getByRole('button', { name: 'Proceed' }).click();
      await expect(page.getByText('Form deleted successfully')).toBeVisible();
      await page.waitForTimeout(1000);
    }
   
await page.reload();
  //  await page.waitForTimeout(3000);
//  await expect(page.getByText('Showing 1 to 10 of 13 entries')).toBeVisible();

}
async function deleteForm(page) {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Form', exact: true }).click();
  await page.locator('button').nth(3).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await expect(page.getByText('Form deleted successfully')).toBeVisible();
}

async function addForm(page){
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Form', exact: true }).click();


  //Form 1 created
  await page.getByRole('link', { name: 'Add Form' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('Form');

  await page.getByRole('textbox', { name: 'Name *' }).fill('FormJCASInstallation');

  await page.getByRole('checkbox', { name: 'Customer' }).check();
  await page.getByRole('checkbox', { name: 'Asset Category' }).check();
  await page.getByRole('checkbox', { name: 'Support Case' }).check();
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('FormJCASInstallationD');

  await page.locator('div').filter({ hasText: /^Heading$/ }).click();
  await formNameChange(page,'Placeholder Label','Fill the Details for JCAS',true);

  await page.locator('div').filter({ hasText: /^Text Input$/ }).click();
  await formNameChange(page,'Placeholder Label','Name',true);
  await page.locator('div').filter({ hasText: /^Text Area$/ }).click();
  await formNameChange(page,'Placeholder Label','Address',true);

  await page.locator('div').filter({ hasText: /^Number Input$/ }).click();
   await formNameChange(page,'Placeholder Label','Age',true);

  await page.locator('div').filter({ hasText: /^Date Picker$/ }).click();
   await formNameChange(page,'Placeholder Label','DOB',true);

  await page.locator('div').filter({ hasText: /^Date Time Picker$/ }).click();
   await formNameChange(page,'Placeholder Label','Current Time',true);

  await page.locator('div').filter({ hasText: /^Dropdown$/ }).click();
   await formNameChange(page,'Placeholder Label','DropDownSelectOption',false);
  await page.locator('input[name="options.0.label"]').click();
  await page.locator('input[name="options.0.label"]').fill('Yes');
  await page.locator('input[name="options.1.label"]').click();
  await page.locator('input[name="options.1.label"]').press('ControlOrMeta+a');
  await page.locator('input[name="options.1.label"]').fill('No');
  await page.getByRole('button', { name: 'Option', exact: true }).click();
  await page.locator('input[name="options.2.label"]').fill('Unable go giive answer');
  await page.getByRole('button', { name: 'Update' }).click();


  await page.locator('div').filter({ hasText: /^Dropdown$/ }).click();
   await formNameChange(page,'Placeholder Label','DropDownSelectPproductName',false);
  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('button', { name: 'Options reference None' }).click();
  await page.getByRole('option', { name: 'Product', exact: true }).click();

  await page.getByRole('button', { name: 'Update' }).click();

  await page.locator('div').filter({ hasText: /^Dropdown$/ }).click();
   await formNameChange(page,'Placeholder Label','DropDownSelectSKU',false);
  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('button', { name: 'Options reference None' }).click();
  await page.getByRole('option', { name: 'Product', exact: true }).click();
  await page.getByRole('button', { name: 'Referenced Field Product Name' }).click();
  await page.getByRole('option', { name: 'SKU' }).click();
  await page.getByRole('button', { name: 'Update' }).click();

  await page.locator('div').filter({ hasText: /^Dropdown$/ }).click();
   await formNameChange(page,'Placeholder Label','DropDownSelectPC',false);
  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('button', { name: 'Options reference None' }).click();

  await page.getByRole('option', { name: 'Product Category' }).click();
  
  await page.getByRole('button', { name: 'Update' }).click();

 

  await page.locator('div').filter({ hasText: /^Checkbox$/ }).click();
   await formNameChange(page,'Placeholder Label','I accept terms',true);

  await page.locator('div').filter({ hasText: /^Table$/ }).click();
   await formNameChange(page,'Placeholder Label','Table',true);

  await page.locator('div').filter({ hasText: /^File Upload$/ }).click();
   await formNameChange(page,'Placeholder Label','Address',false);
   
  await page.getByRole('textbox', { name: 'Field Label' }).click();
  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('checkbox', { name: 'IMG' }).uncheck();
  await page.getByRole('checkbox', { name: 'IMG' }).check();
  await page.getByRole('checkbox', { name: 'PDF' }).check();
  await page.getByRole('checkbox', { name: 'PDF' }).check();
  await page.getByRole('checkbox', { name: 'XLSX' }).check();
  await page.getByRole('checkbox', { name: 'WORD' }).check();
  await page.getByRole('checkbox', { name: 'TXT' }).check();
  await page.getByRole('button', { name: 'Update' }).click();

  await page.getByRole('button', { name: 'Save' }).click();




  //Form2 created ONLY FOR JOB
   await page.getByRole('link', { name: 'Add Form' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('Form');
 
  await page.getByRole('textbox', { name: 'Name *' }).fill('FormJ1');

  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('FormJ1InstallationD');

  await page.locator('div').filter({ hasText: /^Heading$/ }).click();
  await formNameChange(page,'Placeholder Label','Fill the Details for J',true);

  await page.locator('div').filter({ hasText: /^Text Input$/ }).click();
  await formNameChange(page,'Placeholder Label','NameJ',true);
  await page.locator('div').filter({ hasText: /^Text Area$/ }).click();
  await formNameChange(page,'Placeholder Label','AddressJ',true);

  await page.locator('div').filter({ hasText: /^Number Input$/ }).click();
   await formNameChange(page,'Placeholder Label','AgeJ',true);

  await page.locator('div').filter({ hasText: /^Date Picker$/ }).click();
   await formNameChange(page,'Placeholder Label','DOBJ',true);

  await page.locator('div').filter({ hasText: /^Date Time Picker$/ }).click();
   await formNameChange(page,'Placeholder Label','Current TimeJ',true);

  await page.locator('div').filter({ hasText: /^Dropdown$/ }).click();
   await formNameChange(page,'Placeholder Label','DropDownSelectAllJ',false);
  


  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('button', { name: 'Options reference None' }).click();
  await page.getByRole('option', { name: 'Product', exact: true }).click();
  await page.getByRole('button', { name: 'Referenced Field Product Name' }).click();
  await page.getByRole('option', { name: 'SKU' }).click();
  await page.getByRole('button', { name: 'Options reference Product' }).click();
  await page.getByRole('option', { name: 'Product Category' }).click();
  await page.getByRole('button', { name: 'Referenced Field Product' }).click();
  await page.getByRole('option', { name: 'Product Category Name' }).click();
  await page.getByRole('button', { name: 'Options reference Product' }).click();
  await page.getByRole('option', { name: 'None' }).click();
  await page.locator('input[name="options.0.label"]').click();
  await page.locator('input[name="options.0.label"]').fill('Yes');
  await page.locator('input[name="options.1.label"]').click();
  await page.locator('input[name="options.1.label"]').press('ControlOrMeta+a');
  await page.locator('input[name="options.1.label"]').fill('No');
  await page.getByRole('button', { name: 'Option', exact: true }).click();
  await page.locator('input[name="options.2.label"]').fill('Unable go giive answer');
  await page.getByRole('button', { name: 'Update' }).click();

  await page.locator('div').filter({ hasText: /^Checkbox$/ }).click();
   await formNameChange(page,'Placeholder Label','I accept termsJ',true);

  await page.locator('div').filter({ hasText: /^Table$/ }).click();
   await formNameChange(page,'Placeholder Label','TableJ',true);

  await page.locator('div').filter({ hasText: /^File Upload$/ }).click();
   await formNameChange(page,'Placeholder Label','FILEsELECTJ',false);
   
  await page.getByRole('textbox', { name: 'Field Label' }).click();
  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('checkbox', { name: 'IMG' }).uncheck();
  await page.getByRole('checkbox', { name: 'IMG' }).check();
  await page.getByRole('checkbox', { name: 'PDF' }).check();
  await page.getByRole('checkbox', { name: 'PDF' }).check();
  await page.getByRole('checkbox', { name: 'XLSX' }).check();
  await page.getByRole('checkbox', { name: 'WORD' }).check();
  await page.getByRole('checkbox', { name: 'TXT' }).check();
  await page.getByRole('button', { name: 'Update' }).click();

  await page.getByRole('button', { name: 'Save' }).click();

  //Form3 created ONLY FOR THE CUSTOMER
   await page.getByRole('link', { name: 'Add Form' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('Form');
 
  await page.getByRole('textbox', { name: 'Name *' }).fill('FormC');

  await page.getByRole('textbox', { name: 'Name *' }).fill('FormC1Installation');

  await page.getByRole('checkbox', { name: 'Customer' }).check();
 await page.getByRole('checkbox', { name: 'Job' }).uncheck();

  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('FormC1InstallationD');

  await page.locator('div').filter({ hasText: /^Heading$/ }).click();
  await formNameChange(page,'Placeholder Label','Fill the Details for C',true);

  await page.locator('div').filter({ hasText: /^Text Input$/ }).click();
  await formNameChange(page,'Placeholder Label','NameC',true);
  await page.locator('div').filter({ hasText: /^Text Area$/ }).click();
  await formNameChange(page,'Placeholder Label','AddressC',true);

  await page.locator('div').filter({ hasText: /^Number Input$/ }).click();
   await formNameChange(page,'Placeholder Label','AgeC',true);

  await page.locator('div').filter({ hasText: /^Date Picker$/ }).click();
   await formNameChange(page,'Placeholder Label','DOBC',true);

  await page.locator('div').filter({ hasText: /^Date Time Picker$/ }).click();
   await formNameChange(page,'Placeholder Label','Current TimeC',true);

  await page.locator('div').filter({ hasText: /^Dropdown$/ }).click();
   await formNameChange(page,'Placeholder Label','DropDownSelectAllC',false);
  


  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('button', { name: 'Options reference None' }).click();
  await page.getByRole('option', { name: 'Product', exact: true }).click();
  await page.getByRole('button', { name: 'Referenced Field Product Name' }).click();
  await page.getByRole('option', { name: 'SKU' }).click();
  await page.getByRole('button', { name: 'Options reference Product' }).click();
  await page.getByRole('option', { name: 'Product Category' }).click();
  await page.getByRole('button', { name: 'Referenced Field Product' }).click();
  await page.getByRole('option', { name: 'Product Category Name' }).click();
  await page.getByRole('button', { name: 'Options reference Product' }).click();
  await page.getByRole('option', { name: 'None' }).click();
  await page.locator('input[name="options.0.label"]').click();
  await page.locator('input[name="options.0.label"]').fill('Yes');
  await page.locator('input[name="options.1.label"]').click();
  await page.locator('input[name="options.1.label"]').press('ControlOrMeta+a');
  await page.locator('input[name="options.1.label"]').fill('No');
  await page.getByRole('button', { name: 'Option', exact: true }).click();
  await page.locator('input[name="options.2.label"]').fill('Unable go giive answer');
  await page.getByRole('button', { name: 'Update' }).click();

  await page.locator('div').filter({ hasText: /^Checkbox$/ }).click();
   await formNameChange(page,'Placeholder Label','I accept termsC',true);

  await page.locator('div').filter({ hasText: /^Table$/ }).click();
   await formNameChange(page,'Placeholder Label','TableC',true);

  await page.locator('div').filter({ hasText: /^File Upload$/ }).click();
   await formNameChange(page,'Placeholder Label','AddressC',false);
   
  await page.getByRole('textbox', { name: 'Field Label' }).click();
  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('checkbox', { name: 'IMG' }).uncheck();
  await page.getByRole('checkbox', { name: 'IMG' }).check();
  await page.getByRole('checkbox', { name: 'PDF' }).check();
  await page.getByRole('checkbox', { name: 'PDF' }).check();
  await page.getByRole('checkbox', { name: 'XLSX' }).check();
  await page.getByRole('checkbox', { name: 'WORD' }).check();
  await page.getByRole('checkbox', { name: 'TXT' }).check();
  await page.getByRole('button', { name: 'Update' }).click();

  await page.getByRole('button', { name: 'Save' }).click();

  //Form 4 created aSSET
   await page.getByRole('link', { name: 'Add Form' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('Form');
 
  await page.getByRole('textbox', { name: 'Name *' }).fill('FormA');



  await page.getByRole('checkbox', { name: 'Asset Category' }).check();
await page.getByRole('checkbox', { name: 'Job' }).uncheck();
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('FormAInstallationD');

  await page.locator('div').filter({ hasText: /^Heading$/ }).click();
  await formNameChange(page,'Placeholder Label','Fill the Details for A',true);

  await page.locator('div').filter({ hasText: /^Text Input$/ }).click();
  await formNameChange(page,'Placeholder Label','NameA',true);
  await page.locator('div').filter({ hasText: /^Text Area$/ }).click();
  await formNameChange(page,'Placeholder Label','AddressA',true);

  await page.locator('div').filter({ hasText: /^Number Input$/ }).click();
   await formNameChange(page,'Placeholder Label','AgeA',true);

  await page.locator('div').filter({ hasText: /^Date Picker$/ }).click();
   await formNameChange(page,'Placeholder Label','DOBA',true);

  await page.locator('div').filter({ hasText: /^Date Time Picker$/ }).click();
   await formNameChange(page,'Placeholder Label','Current TimeA',true);

  await page.locator('div').filter({ hasText: /^Dropdown$/ }).click();
   await formNameChange(page,'Placeholder Label','DropDownSelectAllA',false);
  


  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('button', { name: 'Options reference None' }).click();
  await page.getByRole('option', { name: 'Product', exact: true }).click();
  await page.getByRole('button', { name: 'Referenced Field Product Name' }).click();
  await page.getByRole('option', { name: 'SKU' }).click();
  await page.getByRole('button', { name: 'Options reference Product' }).click();
  await page.getByRole('option', { name: 'Product Category' }).click();
  await page.getByRole('button', { name: 'Referenced Field Product' }).click();
  await page.getByRole('option', { name: 'Product Category Name' }).click();
  await page.getByRole('button', { name: 'Options reference Product' }).click();
  await page.getByRole('option', { name: 'None' }).click();
  await page.locator('input[name="options.0.label"]').click();
  await page.locator('input[name="options.0.label"]').fill('Yes');
  await page.locator('input[name="options.1.label"]').click();
  await page.locator('input[name="options.1.label"]').press('ControlOrMeta+a');
  await page.locator('input[name="options.1.label"]').fill('No');
  await page.getByRole('button', { name: 'Option', exact: true }).click();
  await page.locator('input[name="options.2.label"]').fill('Unable go giive answer');
  await page.getByRole('button', { name: 'Update' }).click();

  await page.locator('div').filter({ hasText: /^Checkbox$/ }).click();
   await formNameChange(page,'Placeholder Label','I accept termsA',true);

  await page.locator('div').filter({ hasText: /^Table$/ }).click();
   await formNameChange(page,'Placeholder Label','TableA',true);

  await page.locator('div').filter({ hasText: /^File Upload$/ }).click();
   await formNameChange(page,'Placeholder Label','FILESA',false);
   
  await page.getByRole('textbox', { name: 'Field Label' }).click();
  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('checkbox', { name: 'IMG' }).uncheck();
  await page.getByRole('checkbox', { name: 'IMG' }).check();
  await page.getByRole('checkbox', { name: 'PDF' }).check();
  await page.getByRole('checkbox', { name: 'PDF' }).check();
  await page.getByRole('checkbox', { name: 'XLSX' }).check();
  await page.getByRole('checkbox', { name: 'WORD' }).check();
  await page.getByRole('checkbox', { name: 'TXT' }).check();
  await page.getByRole('button', { name: 'Update' }).click();

  await page.getByRole('button', { name: 'Save' }).click();

  //Form 5 created SUPPORT CASE
   await page.getByRole('link', { name: 'Add Form' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('Form');
 
  await page.getByRole('textbox', { name: 'Name *' }).fill('FormS');


await page.getByRole('checkbox', { name: 'Job' }).uncheck();
  await page.getByRole('checkbox', { name: 'Support Case' }).check();
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('FormS1InstallationD');

  await page.locator('div').filter({ hasText: /^Heading$/ }).click();
  await formNameChange(page,'Placeholder Label','Fill the Details for S',true);

  await page.locator('div').filter({ hasText: /^Text Input$/ }).click();
  await formNameChange(page,'Placeholder Label','NameS',true);
  await page.locator('div').filter({ hasText: /^Text Area$/ }).click();
  await formNameChange(page,'Placeholder Label','AddressS',true);

  await page.locator('div').filter({ hasText: /^Number Input$/ }).click();
   await formNameChange(page,'Placeholder Label','AgeS',true);

  await page.locator('div').filter({ hasText: /^Date Picker$/ }).click();
   await formNameChange(page,'Placeholder Label','DOBS',true);

  await page.locator('div').filter({ hasText: /^Date Time Picker$/ }).click();
   await formNameChange(page,'Placeholder Label','Current TimeS',true);

  await page.locator('div').filter({ hasText: /^Dropdown$/ }).click();
   await formNameChange(page,'Placeholder Label','DropDownSelectAllS',false);
  


  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('button', { name: 'Options reference None' }).click();
  await page.getByRole('option', { name: 'Product', exact: true }).click();
  await page.getByRole('button', { name: 'Referenced Field Product Name' }).click();
  await page.getByRole('option', { name: 'SKU' }).click();
  await page.getByRole('button', { name: 'Options reference Product' }).click();
  await page.getByRole('option', { name: 'Product Category' }).click();
  await page.getByRole('button', { name: 'Referenced Field Product' }).click();
  await page.getByRole('option', { name: 'Product Category Name' }).click();
  await page.getByRole('button', { name: 'Options reference Product' }).click();
  await page.getByRole('option', { name: 'None' }).click();
  await page.locator('input[name="options.0.label"]').click();
  await page.locator('input[name="options.0.label"]').fill('Yes');
  await page.locator('input[name="options.1.label"]').click();
  await page.locator('input[name="options.1.label"]').press('ControlOrMeta+a');
  await page.locator('input[name="options.1.label"]').fill('No');
  await page.getByRole('button', { name: 'Option', exact: true }).click();
  await page.locator('input[name="options.2.label"]').fill('Unable go giive answer');
  await page.getByRole('button', { name: 'Update' }).click();

  await page.locator('div').filter({ hasText: /^Checkbox$/ }).click();
   await formNameChange(page,'Placeholder Label','I accept termsS',true);

  await page.locator('div').filter({ hasText: /^Table$/ }).click();
   await formNameChange(page,'Placeholder Label','TableS',true);

  await page.locator('div').filter({ hasText: /^File Upload$/ }).click();
   await formNameChange(page,'Placeholder Label','filesS',false);
   
  await page.getByRole('textbox', { name: 'Field Label' }).click();
  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('checkbox', { name: 'IMG' }).uncheck();
  await page.getByRole('checkbox', { name: 'IMG' }).check();
  await page.getByRole('checkbox', { name: 'PDF' }).check();
  await page.getByRole('checkbox', { name: 'PDF' }).check();
  await page.getByRole('checkbox', { name: 'XLSX' }).check();
  await page.getByRole('checkbox', { name: 'WORD' }).check();
  await page.getByRole('checkbox', { name: 'TXT' }).check();
  await page.getByRole('button', { name: 'Update' }).click();

  await page.getByRole('button', { name: 'Save' }).click();


  //Form 6 FOR DELETE 
   await page.getByRole('link', { name: 'Add Form' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('Form');
 
  await page.getByRole('textbox', { name: 'Name *' }).fill('FormDelete');
  await page.getByRole('checkbox', { name: 'Customer' }).check();
  await page.getByRole('checkbox', { name: 'Asset Category' }).check();
  await page.getByRole('checkbox', { name: 'Support Case' }).check();
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('FormDeleteD');

  await page.locator('div').filter({ hasText: /^Heading$/ }).click();
  await formNameChange(page,'Placeholder Label','Fill the Details for S',true);

  await page.locator('div').filter({ hasText: /^Text Input$/ }).click();
  await formNameChange(page,'Placeholder Label','NameS',true);
  await page.locator('div').filter({ hasText: /^Text Area$/ }).click();
  await formNameChange(page,'Placeholder Label','AddressS',true);
   await page.getByRole('button', { name: 'Save' }).click();
  await page.reload();


}

async function editForm(page) {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Form', exact: true }).click();
  await page.locator('button').nth(2).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('Delete Form');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('FormDelete  create  for update');
  await page.locator('div').filter({ hasText: /^Text Input$/ }).click();
  await page.getByRole('button', { name: 'TEXTINPUT Placeholder Label' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await expect(page.getByText('Form updated successfully')).toBeVisible();
  await page.reload();
}

async function formNameChange(page, headerLabel, newFieldLabel,updateorNot) {
  const headerCard = page.getByRole('button', {
    name: new RegExp(headerLabel)
  });

  await headerCard.hover();
  await headerCard.locator('svg').nth(0).click(); // edit icon

  await page
    .getByRole('textbox', { name: 'Field Label' })
    .fill(newFieldLabel);
  if(updateorNot)
  await page.getByRole('button', { name: 'Update' }).click();
}
