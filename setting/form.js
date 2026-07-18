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
  // await addVisibleForm(page);
  //  await page.waitForTimeout(3000);
  // await deletePreviuosForm(page);
  // await page.waitForTimeout(3000);
  // await addForm(page);
  // await page.waitForTimeout(3000);
  // await copyForm(page);
  // await page.waitForTimeout(3000);
  // await editForm(page);
  // await page.waitForTimeout(3000);
  await deleteForm(page);
}
async function deletePreviuosForm(page){
    console.log("Enter in delete previous form ");
    
    await page.getByRole('button', { name: 'Settings' }).click();
    await page.waitForTimeout(1000);
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
     await page.locator('tbody tr').first().locator('td').nth(2).locator('button:has(svg)').last().click();
      
      await page.getByRole('menuitem', { name: 'Delete' }).click();
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.waitForTimeout(1000);
      
   
    }
   
   await page.reload();
  //  await page.waitForTimeout(3000);
  //  await expect(page.getByText('Showing 1 to 10 of 13 entries')).toBeVisible();
  console.log("Delete previous form completed");

}

async function deleteForm(page) {
  console.log("Enter in delete form");
  // await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Form', exact: true }).click();
     await page.locator('tbody tr').nth(1).locator('td').nth(2).locator('button:has(svg)').last().click();
      await page.getByRole('menuitem', { name: 'Delete' }).click();
      await page.getByRole('button', { name: 'Proceed' }).click();
       await page.waitForTimeout(3000);
  await page.reload();
  await page.waitForTimeout(3000);
  
  if (!await page.getByText('FormS1InstallationD', {exact:true}).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/deleteForm.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteForm","true",`./${screenshotPath}/deleteForm.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/deleteForm.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteForm","false",`./${screenshotPath}/deleteForm.png`)
  } 
  await page.reload();
  
  console.log("Delete form completed");
}

async function addForm(page){
  console.log("Enter in add form ");
  // await page.getByRole('button', { name: 'Settings' }).click();
  // await page.getByRole('link', { name: 'Form', exact: true }).click();

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
    await page.getByRole('textbox').nth(2).click();
 
  await page.getByRole('textbox').nth(2).fill('Yes');
  await page.getByRole('textbox').nth(3).click();
  
  await page.getByRole('textbox').nth(2).fill('No');
  await page.getByRole('button', { name: 'Option', exact: true }).click();
 await page.getByRole('textbox').nth(4).fill('Unable go giive answer');
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
   await page.getByRole('textbox').nth(2).click();
 
  await page.getByRole('textbox').nth(2).fill('Yes');
  await page.getByRole('textbox').nth(3).click();
  
  await page.getByRole('textbox').nth(2).fill('No');
  await page.getByRole('button', { name: 'Option', exact: true }).click();
 await page.getByRole('textbox').nth(4).fill('Unable go giive answer');
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
  await page.getByRole('textbox').nth(2).click();
 
  await page.getByRole('textbox').nth(2).fill('Yes');
  await page.getByRole('textbox').nth(3).click();
  
  await page.getByRole('textbox').nth(2).fill('No');
  await page.getByRole('button', { name: 'Option', exact: true }).click();
 await page.getByRole('textbox').nth(4).fill('Unable go giive answer');
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
  await page.getByRole('textbox').nth(2).click();
 
  await page.getByRole('textbox').nth(2).fill('Yes');
  await page.getByRole('textbox').nth(3).click();
  
  await page.getByRole('textbox').nth(2).fill('No');
  await page.getByRole('button', { name: 'Option', exact: true }).click();
 await page.getByRole('textbox').nth(4).fill('Unable go giive answer');
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
  await page.getByRole('textbox').nth(2).click();
 
  await page.getByRole('textbox').nth(2).fill('Yes');
  await page.getByRole('textbox').nth(3).click();
  
  await page.getByRole('textbox').nth(2).fill('No');
  await page.getByRole('button', { name: 'Option', exact: true }).click();
 await page.getByRole('textbox').nth(4).fill('Unable go giive answer');
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
   await page.waitForTimeout(3000);
  await page.reload();
  await page.waitForTimeout(3000);
  
  
  if (await page.getByText('FormDeleteD').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/addForm.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addForm","true",`./${screenshotPath}/addForm.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/addForm.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addForm","false",`./${screenshotPath}/addForm.png`)
  } 
  await page.reload();
  console.log("Add form completed");

}
async function addVisibleForm(page){

//Form 0 created for Visibility check
 await page.getByRole('link', { name: 'Add Form' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('Form');

  await page.getByRole('textbox', { name: 'Name *' }).fill('VisibilityCheck');

  await page.getByRole('checkbox', { name: 'Customer' }).check();
  await page.getByRole('checkbox', { name: 'Asset Category' }).check();
  await page.getByRole('checkbox', { name: 'Support Case' }).check();
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('VisibilityCheck');

  await page.locator('div').filter({ hasText: /^Heading$/ }).click();
  await formNameChange(page,'Placeholder Label','Fill the Details for JCAS',true);

  await page.locator('div').filter({ hasText: /^Text Input$/ }).click();
  await formNameChange(page,'Placeholder Label','Name',true);
 
 

  await page.locator('div').filter({ hasText: /^Text Area$/ }).click();
  await formNameChange(page,'Placeholder Label','Address',true);
  await visiblityOption(page,"Address","Name","Equal","2233",true);


  await page.locator('div').filter({ hasText: /^Number Input$/ }).click();
   await formNameChange(page,'Placeholder Label','Age',true);
    await visiblityOption(page,"Age","Name","Not Equal","2233",true);

  await page.locator('div').filter({ hasText: /^Date Picker$/ }).click();
   await formNameChange(page,'Placeholder Label','DOB',true);
    await visiblityOption(page,"DOB","Name","Contains","2233",true);

  await page.locator('div').filter({ hasText: /^Date Time Picker$/ }).click();
   await formNameChange(page,'Placeholder Label','Current Time',true);
    await visiblityOption(page,"Current Time","Name","Is Empty",0,true);

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
 await visiblityOption(page,"DropDownSelectOption","Name","Is Not Empty",0,true,true);

  // await page.locator('div').filter({ hasText: /^Dropdown$/ }).click();
  //  await formNameChange(page,'Placeholder Label','DropDownSelectPproductName',false);
  // await page.getByRole('textbox', { name: 'ColSpan' }).click();
  // await page.getByRole('button', { name: 'Options reference None' }).click();
  // await page.getByRole('option', { name: 'Product', exact: true }).click();
  // await page.getByRole('button', { name: 'Update' }).click();
  //  await visiblityOption(page,"DropDownSelectPproductName","Name","Not Equal","2233",true);

  // await page.locator('div').filter({ hasText: /^Dropdown$/ }).click();
  //  await formNameChange(page,'Placeholder Label','DropDownSelectSKU',false);
  // await page.getByRole('textbox', { name: 'ColSpan' }).click();
  // await page.getByRole('button', { name: 'Options reference None' }).click();
  // await page.getByRole('option', { name: 'Product', exact: true }).click();
  // await page.getByRole('button', { name: 'Referenced Field Product Name' }).click();
  // await page.getByRole('option', { name: 'SKU' }).click();
  // await page.getByRole('button', { name: 'Update' }).click();

  // await page.locator('div').filter({ hasText: /^Dropdown$/ }).click();
  //  await formNameChange(page,'Placeholder Label','DropDownSelectPC',false);
  // await page.getByRole('textbox', { name: 'ColSpan' }).click();
  // await page.getByRole('button', { name: 'Options reference None' }).click();

  // await page.getByRole('option', { name: 'Product Category' }).click();
  
  // await page.getByRole('button', { name: 'Update' }).click();

 

  await page.locator('div').filter({ hasText: /^Checkbox$/ }).click();
   await formNameChange(page,'Placeholder Label','I accept terms',true);

  await page.locator('div').filter({ hasText: /^Table$/ }).click();
   await formNameChange(page,'Placeholder Label','Table',true);

  await page.locator('div').filter({ hasText: /^File Upload$/ }).click();
   await formNameChange(page,'Placeholder Label','FileUploadAll',false);
   
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




  
  await page.locator('div').filter({ hasText: /^File Upload$/ }).click();
   await formNameChange(page,'Placeholder Label','imgFile',false);
   
  await page.getByRole('textbox', { name: 'Field Label' }).click();
  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('checkbox', { name: 'IMG' }).uncheck();
  await page.getByRole('checkbox', { name: 'IMG' }).check();

  await page.getByRole('button', { name: 'Update' }).click();




  
  await page.locator('div').filter({ hasText: /^File Upload$/ }).click();
   await formNameChange(page,'Placeholder Label','pdfFileUpload',false);
   
  await page.getByRole('textbox', { name: 'Field Label' }).click();
  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('checkbox', { name: 'IMG' }).uncheck();
  await page.getByRole('checkbox', { name: 'PDF' }).check();

  await page.getByRole('button', { name: 'Update' }).click();

  await page.getByRole('button', { name: 'Save' }).click();






}
async function editForm(page) {
  console.log("Enter in edit form");
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Form', exact: true }).click();
   await page.waitForTimeout(3000);

    await page.getByText('FormS', { exact: true }).click();
    await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('FormS Edited Form');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('FormS1InstallationD Edited');

 
  await page.locator('div').filter({ hasText: /^Dropdown$/ }).click();
 const container = page.getByTestId('form-fields-scroll-container');

await container.evaluate((el) => {
  el.scrollTop = el.scrollHeight;
});


  await formOnlyChangeHeaderLevel(page,'Placeholder Label');
  await page.getByRole('textbox', { name: 'Field Label' }).click();
  await page.getByRole('textbox', { name: 'Field Label' }).fill('Age Range');
  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('textbox', { name: 'ColSpan' }).fill('12');
   await page.getByRole('textbox').nth(2).click();
 
  await page.getByRole('textbox').nth(2).fill('Belong 10-18');
  await page.getByRole('textbox').nth(3).click();
  
  await page.getByRole('textbox').nth(3).fill('Belong 18-25');
  await page.getByRole('button', { name: 'Option', exact: true }).click();
 await page.getByRole('textbox').nth(4).fill('Belong 35-45');
 await page.pause();
   await page.getByRole('button', { name: 'Update' }).click();

 

 
  
  
  await page.locator('div').filter({ hasText: /^Dropdown$/ }).click();
  
  await formOnlyChangeHeaderLevel(page,'Placeholder Label');
   await page.getByRole('textbox', { name: 'Field Label' }).click();
  await page.getByRole('textbox', { name: 'Field Label' }).fill('Religion');
  
  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('textbox', { name: 'ColSpan' }).fill('12');
  await page.getByRole('checkbox', { name: 'Select Multiple Options' }).check();
    await page.getByRole('textbox').nth(2).click();
 
  await page.getByRole('textbox').nth(2).fill('Hindu');
  await page.getByRole('textbox').nth(3).click();
  
  await page.getByRole('textbox').nth(3).fill('Shikh');
  await page.getByRole('button', { name: 'Option', exact: true }).click();
 await page.getByRole('textbox').nth(4).fill('Christen');
  await page.getByRole('button', { name: 'Option', exact: true }).click();
 await page.getByRole('textbox').nth(5).fill('Muslim');
  await page.getByRole('button', { name: 'Update' }).click();


  


  await page.locator('div').filter({ hasText: /^Dropdown$/ }).click();

  await formOnlyChangeHeaderLevel(page,'Placeholder Label');
  await page.getByRole('textbox', { name: 'Field Label' }).click();
  await page.getByRole('textbox', { name: 'Field Label' }).fill('Cast');
  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('textbox', { name: 'ColSpan' }).fill('12');

     await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('General');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('OBC');
  await page.getByRole('button', { name: 'Option', exact: true }).click();
 await page.getByRole('textbox').nth(4).fill('SC');
  await page.getByRole('button', { name: 'Option', exact: true }).click();
 await page.getByRole('textbox').nth(5).fill('ST');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  

  // 2nd form 
  
 await page.getByText('FormJ1', { exact: true }).click();
await page.waitForTimeout(3000);
const container1 = page.getByTestId('form-fields-scroll-container');

await container1.evaluate((el) => {
  el.scrollTop = el.scrollHeight;
});

await page.locator('div').filter({ hasText: /^File Upload$/ }).click();

await formOnlyChangeHeaderLevel(page,'Placeholder Label');

await page.getByRole('textbox', { name: 'Field Label' }).click();
await page.getByRole('textbox', { name: 'Field Label' }).fill('Age certificate');

await page.getByRole('textbox', { name: 'ColSpan' }).click();
await page.getByRole('textbox', { name: 'ColSpan' }).fill('12');

await page.getByRole('checkbox', { name: 'PDF' }).check();
await page.getByRole('checkbox', { name: 'WORD' }).check();
await page.getByRole('checkbox', { name: 'XLSX' }).check();

await page.locator('.PrivateSwitchBase-input.MuiSwitch-input').last().check();

await page.getByLabel('', { exact: true }).first().click();
await page.getByRole('option', { name: 'AgeJ (NUMBERINPUT)' }).click();

await page.getByLabel('', { exact: true }).first().click();
await page.getByRole('option', { name: 'Equal', exact: true }).click();

await page.getByRole('textbox', { name: 'Enter value...' }).click();
await page.getByRole('textbox', { name: 'Enter value...' }).fill('18');

await page.getByRole('button', { name: 'Update' }).click();
await page.getByRole('button', { name: 'Update' }).click();

  // Customer form
  await page.getByText('FormC1Installation', { exact: true }).click();
  await page.waitForTimeout(3000);
const container2 = page.getByTestId('form-fields-scroll-container');

await container2.evaluate((el) => {
  el.scrollTop = el.scrollHeight;
});
  await formOnlyChangeHeaderLevel(page,'DOBC');
   await page.getByRole('checkbox').nth(1).check();
  await page.getByLabel('', { exact: true }).first().click();
  await page.getByRole('option', { name: 'AgeC (NUMBERINPUT)' }).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Is Not Empty' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();

  // Asset form
   await page.getByText('FormA', { exact: true }).click();
   await page.waitForTimeout(3000);
const container3 = page.getByTestId('form-fields-scroll-container');

await container3.evaluate((el) => {
  el.scrollTop = el.scrollHeight;
});
   await page.locator('div').filter({ hasText: /^Checkbox$/ }).click();
  await formOnlyChangeHeaderLevel(page,'Placeholder Label');
  await page.getByRole('textbox', { name: 'Field Label' }).click();
  await page.getByRole('textbox', { name: 'Field Label' }).fill('Check for dropdown');
  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('textbox', { name: 'ColSpan' }).fill('12');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.locator('div').filter({ hasText: /^Dropdown$/ }).click();
  await formOnlyChangeHeaderLevel(page,'Placeholder Label');
  await page.getByRole('textbox', { name: 'Field Label' }).click();
  await page.getByRole('textbox', { name: 'Field Label' }).fill('this is dropdown');
  await page.getByRole('checkbox', { name: 'Select Multiple Options' }).check();
  await page.getByRole('textbox', { name: 'ColSpan' }).click();
  await page.getByRole('textbox', { name: 'ColSpan' }).fill('12');

      await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('first');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('second');
  await page.getByRole('button', { name: 'Option', exact: true }).click();
 await page.getByRole('textbox').nth(4).fill('Third');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
 await page.waitForTimeout(3000);


  await page.reload();
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Form', exact: true }).click();
  await page.waitForTimeout(3000);
  if (await page.getByText('FormS1InstallationD Edited', {exact:true}).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/editForm.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editForm","true",`./${screenshotPath}/editForm.png`)
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editForm.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editForm","false",`./${screenshotPath}/editForm.png`)
  } 
  await page.reload();
  console.log("Edit form completed");
}

async function formNameChange(page, headerLabel, newFieldLabel,updateorNot,hover=true) {
  console.log("Enter in form Name change.");
  const headerCard = page.getByRole('button', {
    name: new RegExp(headerLabel)
  });
  if(hover)
  await headerCard.hover();
  await headerCard.locator('svg').nth(0).click(); // edit icon
  await page
    .getByRole('textbox', { name: 'Field Label' })
    .fill(newFieldLabel);
  if(updateorNot)
  await page.getByRole('button', { name: 'Update' }).click();
 console.log("form name change completed");
}
async function visiblityOption(page,headerLabel,sourceField,Operator,value,updateorNot,isDropdown){
  console.log("Enter in form Name change.");
  const headerCard = page.getByRole('button', {
    name: new RegExp(headerLabel)
  });

  await headerCard.hover();
  await headerCard.locator('svg').nth(0).click(); // edit icon
  if(!isDropdown)
   await page.getByRole('checkbox').nth(1).check();
  if(isDropdown) await page.getByRole('checkbox').nth(2).check();

    await page.getByLabel('', { exact: true }).first().click();
await page.getByRole('option', { name: sourceField }).click();
 await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: Operator, exact: true }).click();
  if(value!=0){
      await page.getByRole('textbox', { name: 'Enter value...' }).click();
  await page.getByRole('textbox', { name: 'Enter value...' }).fill(value);
  }

  if(updateorNot)
  await page.getByRole('button', { name: 'Update' }).click();
 console.log("form name change completed");
}
async function formOnlyChangeHeaderLevel(page,headerLabel){
  
  const headerCard = page.getByRole('button', {
      name: new RegExp(headerLabel)
    });
  console.log('Hover on edit button');
  await headerCard.hover();
  await headerCard.locator('svg').nth(0).click();
  console.log('Hover on edit button completed');
}

async function copyForm(page){

       await page.locator('tbody tr').last().locator('td').nth(2).locator('button:has(svg)').last().click();
      
      await page.getByRole('menuitem', { name: 'Export' }).click();
      
      await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'Import Form' }).click();
  await page.getByRole('textbox', { name: 'Paste Your Form Data Here' }).click();
  await page.keyboard.press('Control+V');
    await page.getByRole('button', { name: 'Import' }).click();

      await page.getByRole('checkbox', { name: 'Job' }).check();
  await page.getByRole('checkbox', { name: 'Customer' }).check();
  await page.getByRole('checkbox', { name: 'Asset Category' }).check();
  await page.getByRole('checkbox', { name: 'Support Case' }).check();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('FormJCASAllFields');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('FormJCASAllFieldsD');
  await page.locator('div').filter({ hasText: /^Series$/ }).click();

  const container = page.getByTestId('form-fields-scroll-container');

await container.evaluate((el) => {
  el.scrollTop = el.scrollHeight;
});

  await page.getByRole('button', { name: 'edit series', exact: true }).click();
  await page.getByRole('textbox', { name: 'Series label *' }).click();
  await page.getByRole('textbox', { name: 'Series label *' }).fill('SeriesA');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Update' }).click();
// Heading
await page.getByRole('button', { name: 'Add Field to Series', exact: true }).click();
await page.locator('div').filter({ hasText: /^Heading$/ }).nth(2).click();

await seriesFormNameChange(page, 'Placeholder Label', 'Fill the Details for JCAS', true);


console.log('✅ Heading added and configured');

// Text Input
await page.waitForTimeout(1000);
await page.getByRole('button', { name: 'Add Field to Series', exact: true }).click();
await page.locator('div').filter({ hasText: /^Text Input$/ }).nth(2).click();

await seriesFormNameChange(page, 'Placeholder Label', 'Name', true);

console.log('✅ Text Input added and configured');

// Text Area
await page.getByRole('button', { name: 'Add Field to Series', exact: true }).click();
await page.locator('div').filter({ hasText: /^Text Area$/ }).nth(2).click();
await seriesFormNameChange(page, 'Placeholder Label', 'Address', true);
console.log('✅ Text Area added and configured');

// Number Input
await page.getByRole('button', { name: 'Add Field to Series', exact: true }).click();
await page.locator('div').filter({ hasText: /^Number Input$/ }).nth(2).click();
await seriesFormNameChange(page, 'Placeholder Label', 'Age', true);
console.log('✅ Number Input added and configured');

// Date Picker
await page.getByRole('button', { name: 'Add Field to Series', exact: true }).click();
await page.locator('div').filter({ hasText: /^Date Picker$/ }).nth(2).click();
await seriesFormNameChange(page, 'Placeholder Label', 'DOB', true);
console.log('✅ Date Picker added and configured');

// Date Time Picker
await page.getByRole('button', { name: 'Add Field to Series', exact: true }).click();
await page.getByLabel('ADD FIELD TO SERIES').getByText('Date Time Picker').click();
await seriesFormNameChange(page, 'Placeholder Label', 'Current Time', true);
console.log('✅ Date Time Picker added and configured');

// Dropdown
await page.getByRole('button', { name: 'Add Field to Series', exact: true }).click();
await page.locator('div').filter({ hasText: /^Dropdown$/ }).nth(2).click();
await seriesFormNameChange(page, 'Placeholder Label', 'DropDownSelectOption', false);

await page.getByRole('textbox').nth(2).fill('Yes');
await page.getByRole('textbox').nth(3).fill('No');
await page.getByRole('button', { name: 'Option', exact: true }).click();
await page.getByRole('textbox').nth(4).fill('Unable go giive answer');
await page.getByRole('button', { name: 'Update' }).click();
console.log('✅ Dropdown added and configured');

// Checkbox
await page.getByRole('button', { name: 'Add Field to Series', exact: true }).click();
await page.getByLabel('ADD FIELD TO SERIES').getByText('Checkbox').click();
await seriesFormNameChange(page, 'Placeholder Label', 'I accept terms', true);
console.log('✅ Checkbox added and configured');

// Table
await page.getByRole('button', { name: 'Add Field to Series', exact: true }).click();
await page.locator('div').filter({ hasText: /^Table$/ }).nth(2).click();
await seriesFormNameChange(page, 'Placeholder Label', 'Table', true);
console.log('✅ Table added and configured');

// File Upload
await page.getByRole('button', { name: 'Add Field to Series', exact: true }).click();
await page.getByLabel('ADD FIELD TO SERIES').getByText('File Upload').click();
await seriesFormNameChange(page, 'Placeholder Label', 'Address', false);

await page.getByRole('checkbox', { name: 'IMG' }).check();
await page.getByRole('checkbox', { name: 'PDF' }).check();
await page.getByRole('checkbox', { name: 'XLSX' }).check();
await page.getByRole('checkbox', { name: 'WORD' }).check();
await page.getByRole('checkbox', { name: 'TXT' }).check();
await page.getByRole('button', { name: 'Update' }).click();
console.log('✅ File Upload added and configured');

// Signature
await page.getByRole('button', { name: 'Add Field to Series', exact: true }).click();
await page.getByLabel('ADD FIELD TO SERIES').getByText('Signature').click();
await seriesFormNameChange(page, 'Placeholder Label', 'Signature', true);
console.log('✅ Signature added and configured');

// Save
await page.getByRole('button', { name: 'Save' }).click();
console.log('🎉 Form saved successfully');

}
async function seriesFormNameChange(
  page,
  headerLabel,
  newFieldLabel,
  updateorNot,
  hover = false
) {
  console.log("Enter in formNameChange");

  const headerCard = page.locator('[role="button"]').filter({
    has: page.getByText(headerLabel, { exact: true })
  }).last();

  await headerCard.waitFor({ state: "visible" });

  if (hover) {
    await headerCard.hover();
  }

  console.log(`Found header: ${headerLabel}`);

  // Directly click the edit button inside this card
  await headerCard
    .locator('button[aria-label="Edit field"]').last()
    .click();

  console.log("Edit button clicked");

  const fieldLabel = page.getByRole("textbox", {
    name: "Field Label"
  });

  await fieldLabel.waitFor({ state: "visible" });
  await fieldLabel.fill(newFieldLabel);

  console.log(`Field label changed to: ${newFieldLabel}`);

  if (updateorNot) {
    await page.waitForTimeout(500);
    await page.getByRole("button", { name: "Update" }).click();
    console.log("Update button clicked");
  }

  console.log("formNameChange completed");
}