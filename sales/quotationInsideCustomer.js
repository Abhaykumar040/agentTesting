import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';
import { loginCustomerPortal } from '../tests/login';
import { dataRead } from '../dataRead';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/quotation`;
const pathName=`outputData/priority/${testData.companyType}`


export async function quotationInsideCustomer(page){

  // await createQuotation(page);
  // await page.waitForTimeout(3000);
  // await approveQuotation(page);
  // await page.waitForTimeout(3000);
  //   await acceptQuotation(page);
  // await page.waitForTimeout(3000);
  // await rejectQuotation(page);

  // await page.waitForTimeout(3000);
  // await copyQuotation(page);
  //   await page.waitForTimeout(3000);
  // await rejectedByCustomerQuotation(page);
  // await page.waitForTimeout(3000);
  // await sendQuotation(page);
  // await page.waitForTimeout(3000);
  // await editQuotation(page);


  // await page.waitForTimeout(3000);
  // await reciptDownloadQuotation(page);

  await exportQuotationNormal(page);
  await page.waitForTimeout(3000);
  await exportQuotationFilter(page);

  //  await page.waitForTimeout(3000);
  // await verifyQuotationInsideCustomer(page);
  // await deleteQuotation(page);
}

async function exportQuotationNormal(page){
  console.log('Enter in export internal job');
  // excel file
  const [excelDownload] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload.saveAs('downloads/exportExcelQuotationNormal.xlsx');
  const result1 = await dataRead(
    "./downloads/exportExcelQuotationNormal.xlsx",
    ["Installation6","Sushil Singh"],
    []
);
console.log(result1);
    if ( result1.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationNormal.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationNormal","true",`./${screenshotPath}/exportExcelQuotationNormal.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationNormal.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationNormal","false",`./${screenshotPath}/exportExcelQuotationNormal.png`)
    }

  // pdf file
  const [pdfDownload] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload.saveAs('downloads/exportPDFQuotationNormal.pdf');
    await page.waitForTimeout(2000);
  const result = await dataRead(
    "./downloads/exportPDFQuotationNormal.pdf",
    ["Installation6","Sushil Singh"],
    []
);
console.log(result);
    if ( result.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationNormal.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationNormal","true",`./${screenshotPath}/exportPDFQuotationNormal.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationNormal.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationNormal","false",`./${screenshotPath}/exportPDFQuotationNormal.png`)
    }
    await page.reload();
  console.log('export quotation completed');
}

async function exportQuotationFilter(page){
  console.log('Enter in export internal job filter');
  // filter on basis of state, city
   await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Khamaria' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  
  // excel file
  const [excelDownload1] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload1.saveAs('downloads/exportExcelQuoationFilter1.xlsx');
  const result1 = await dataRead(
    "./downloads/exportExcelQuoationFilter1.xlsx",
    ["Anil Rathor","REJECTED"],
    ["Abhay","Completed"]
  );
   console.log(result1);
    await page.waitForTimeout(2000);
  
    if (result1.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelQuoationFilter1.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelQuoationFilter1","true",`./${screenshotPath}/exportExcelQuoationFilter1.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelQuoationFilter1.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelQuoationFilter1","false",`./${screenshotPath}/exportExcelQuoationFilter1.png`)
    }



  // pdf file
  const [pdfDownload1] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload1.saveAs('downloads/exportPDFQuotationFilter1.pdf');
  const result2 = await dataRead(
    "./downloads/exportPDFQuotationFilter1.pdf",
    ["Anil Rathor","REJECTED"],
    ["Abhay","Completed"]
  );
   console.log(result2);
    await page.waitForTimeout(2000);
  
    if (result2.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationFilter1.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationFilter1","true",`./${screenshotPath}/exportPDFQuotationFilter1.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationFilter1.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationFilter1","false",`./${screenshotPath}/exportPDFQuotationFilter1.png`)
    }
    await page.reload();


// --------------------------------------------------
// filter on basis of Customer 
await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer' }).click();
  await page.getByRole('menuitem', { name: 'Mayank SIngh', exact: true }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();

   // excel file
  const [excelDownload2] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload2.saveAs('downloads/exportExcelQuotationFilter2.xlsx');
  const result3 = await dataRead(
    "./downloads/exportExcelQuotationFilter2.xlsx",
    ["Mayank Singh","CREATED"],
    ["Anil Singh","REJECTED"]
  );
   console.log(result3);
    if (result3.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationFilter2.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationFilter2","true",`./${screenshotPath}/exportExcelQuotationFilter2.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationFilter2.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationFilter2","false",`./${screenshotPath}/exportExcelQuotationFilter2.png`)
    }


  // pdf file
  const [pdfDownload2] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload2.saveAs('downloads/exportPDFQuotationFilter2.pdf');
    await page.waitForTimeout(2000);
    const result4 = await dataRead(
    "./downloads/exportPDFQuotationFilter2.pdf",
    ["Mayank Singh","CREATED"],
    ["Anil Singh","REJECTED"]
  );
   console.log(result4);
    if (result4.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationFilter2.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationFilter2","true",`./${screenshotPath}/exportPDFQuotationFilter2.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationFilter2.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationFilter2","false",`./${screenshotPath}/exportPDFQuotationFilter2.png`)
    }
    await page.reload();

// ---------------------------------------------    
// filter on basis of Quotation status.
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Quotation Status' }).click();
  await page.getByRole('menuitem', { name: 'Rejected', exact: true }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  // excel file
  const [excelDownload3] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload3.saveAs('downloads/exportExcelQuotationFilter3.xlsx');
   const result5 = await dataRead(
    "./downloads/exportExcelQuotationFilter3.xlsx",
    ["Anil Rathor","REJECTED"],
    ["Abhay kumar","CREATED"]
  );
   console.log(result5);
    if (result5.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationFilter3.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationFilter3.png","true",`./${screenshotPath}/exportExcelQuotationFilter3.png.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationFilter3.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationFilter3","false",`./${screenshotPath}/exportExcelQuotationFilter3.png`)
    }
  // pdf file
  const [pdfDownload3] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload3.saveAs('downloads/exportPDFQuotationFilter3.pdf');
    await page.waitForTimeout(2000);
   const result6 = await dataRead(
    "./downloads/exportPDFQuotationFilter3.pdf",
     ["Anil Rathor","REJECTED"],
    ["Abhay kumar","CREATED"]
  );
   console.log(result6);
    if (result6.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationFilter3.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationFilter3","true",`./${screenshotPath}/exportPDFQuotationFilter3.png`)
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationFilter3.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationFilter3","false",`./${screenshotPath}/exportPDFQuotationFilter3.png`)
    }

    // filter on basis of date.
   await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('radio', { name: 'Custom' }).check();
  await page.getByRole('button', { name: 'Choose date' }).first().click();
  await page.getByRole('gridcell', { name: '24' }).click();
  await page.getByRole('button', { name: 'Choose date', exact: true }).click();
  await page.getByRole('gridcell', { name: '27' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  // excel file
  const [excelDownload4] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload4.saveAs('downloads/exportExcelQuotationFilter4.xlsx');
   const result7= await dataRead(
    "./downloads/exportExcelQuotationFilter4.xlsx",
    ["Arjun Singh","CREATED"],
    ["Manish","CREATED"]
  );
   console.log(result7);
    if (result7.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationFilter4.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationFilter4.png","true",`./${screenshotPath}/exportExcelQuotationFilter4.png.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationFilter4.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationFilter4","false",`./${screenshotPath}/exportExcelQuotationFilter4.png`)
    }
  // pdf file
  const [pdfDownload4] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload4.saveAs('downloads/exportPDFQuotationFilter4.pdf');
    await page.waitForTimeout(2000);
   const result8 = await dataRead(
    "./downloads/exportPDFQuotationFilter4.pdf",
    ["Arjun Singh","CREATED"],
    ["Manish","CREATED"]
  );
   console.log(result8);
    if (result8.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationFilter4.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationFilter4","true",`./${screenshotPath}/exportPDFQuotationFilter4.png`)
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationFilter4.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationFilter4","false",`./${screenshotPath}/exportPDFQuotationFilter4.png`)
    }
    await page.reload();
  console.log('export internal job completed');
}



async function   createQuotation(page){
  console.log('Enter in create quotation');
 //1st Quotation create
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('Arjun Singh').first().click();
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();

  await page.waitForTimeout(1000);
  
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Khamaria Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Smart watch charger' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(2).click();
  await page.getByRole('combobox').nth(2).fill('fuse');
  await page.locator('input[name="products.2.price"]').click();
  await page.locator('input[name="products.2.price"]').fill('0100');
  await page.locator('input[name="products.2.discount"]').click();
  await page.locator('input[name="products.2.discount"]').fill('050');
  await page.locator('textarea[name="products.2.description"]').click();
  await page.locator('textarea[name="products.2.description"]').fill('NoDes');
  await page.locator('textarea[name="products.2.hsnCode"]').click();
  await page.locator('textarea[name="products.2.hsnCode"]').fill('1123');
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(1000);

   //2nd Quotation create
    await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
   await page.waitForTimeout(1000);

  await page.getByRole('combobox', { name: 'Address' }).click();
  
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Khamaria Khamaria' }).click();
  await page.getByRole('checkbox', { name: 'Notes' }).uncheck();
  await page.getByRole('checkbox', { name: 'Terms and Conditions' }).uncheck();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(1000);

   //3rd Quotation create
    await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
   await page.waitForTimeout(1000);

  await page.getByRole('combobox', { name: 'Address' }).click();
   
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Khamaria Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'EV charger' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(1000);
  


   //4rth Quotation create
   await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();

  await page.waitForTimeout(1000);
  
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Khamaria Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Smart watch charger' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(2).click();
  await page.getByRole('combobox').nth(2).fill('fuse');
  await page.locator('input[name="products.2.price"]').click();
  await page.locator('input[name="products.2.price"]').fill('0100');
  await page.locator('input[name="products.2.discount"]').click();
  await page.locator('input[name="products.2.discount"]').fill('050');
  await page.locator('textarea[name="products.2.description"]').click();
  await page.locator('textarea[name="products.2.description"]').fill('NoDes');
  await page.locator('textarea[name="products.2.hsnCode"]').click();
  await page.locator('textarea[name="products.2.hsnCode"]').fill('1123');
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(1000);
    await page.locator('body tr:nth-of-type(2) td:nth-of-type(7) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();


  //  5th quotation
  // await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();

  await page.waitForTimeout(1000);
  
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Khamaria Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Smart watch charger' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(2).click();
  await page.getByRole('combobox').nth(2).fill('fuse');
  await page.locator('input[name="products.2.price"]').click();
  await page.locator('input[name="products.2.price"]').fill('0100');
  await page.locator('input[name="products.2.discount"]').click();
  await page.locator('input[name="products.2.discount"]').fill('050');
  await page.locator('textarea[name="products.2.description"]').click();
  await page.locator('textarea[name="products.2.description"]').fill('NoDes');
  await page.locator('textarea[name="products.2.hsnCode"]').click();
  await page.locator('textarea[name="products.2.hsnCode"]').fill('1123');
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
    await page.locator('body tr:nth-of-type(2) td:nth-of-type(7) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  
  // check in customer portal 
     await loginCustomerPortal(page);
     await page.getByRole('link', { name: 'Quotation' }).click();
     if(await page.getByText('PENDING APPROVAL').first().isVisible()){
      console.log("Internal Job in Engineer portal is visible");
      await page.screenshot({ path: `./${screenshotPath}/checkCreateQuotationInCustomerPortal.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"checkCreateQuotationInCustomerPortal","true",`./${screenshotPath}/checkCreateQuotationInCustomerPortal.png`)
   
     }else{
      console.log("Internal Job in Engineer portal is not visible");
    
      await page.screenshot({ path: `./${screenshotPath}/checkCreateQuotationInCustomerPortal.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"checkCreateQuotationInCustomerPortal","false",`./${screenshotPath}/checkCreateQuotationInCustomerPortal.png`)
    }
    await page.waitForTimeout(3000);
    await page.getByRole('table').getByRole('button').filter({ hasText: /^$/ }).click();
    await page.getByRole('button', { name: 'Accept' }).click();
    if(await page.getByText('ACCEPTED').first().isVisible()){
      console.log("Internal Job in Engineer portal is visible");
      await page.screenshot({ path: `./${screenshotPath}/acceptQuotationInCustomerPortal.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"acceptQuotationInCustomerPortal","true",`./${screenshotPath}/acceptQuotationInCustomerPortal.png`)
   
     }else{
      console.log("Internal Job in Engineer portal is not visible");
    
      await page.screenshot({ path: `./${screenshotPath}/acceptQuotationInCustomerPortal.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"acceptQuotationInCustomerPortal","false",`./${screenshotPath}/acceptQuotationInCustomerPortal.png`)
    }
     
  await page.waitForTimeout(2000);
   console.log("Going back to company portal...");
   await page.goto(data.url);
   console.log("Company portal login completed");

  //  6th 
   await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();

  await page.waitForTimeout(1000);
  
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Khamaria Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Smart watch charger' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(2).click();
  await page.getByRole('combobox').nth(2).fill('fuse');
  await page.locator('input[name="products.2.price"]').click();
  await page.locator('input[name="products.2.price"]').fill('0100');
  await page.locator('input[name="products.2.discount"]').click();
  await page.locator('input[name="products.2.discount"]').fill('050');
  await page.locator('textarea[name="products.2.description"]').click();
  await page.locator('textarea[name="products.2.description"]').fill('NoDes');
  await page.locator('textarea[name="products.2.hsnCode"]').click();
  await page.locator('textarea[name="products.2.hsnCode"]').fill('1123');
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(1000);
    await page.locator('body tr:nth-of-type(2) td:nth-of-type(7) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
   await page.locator('body tr:nth-of-type(3) td:nth-of-type(7) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Accept' }).click();

// 7th
   await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();

  await page.waitForTimeout(1000);
  
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Khamaria Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Smart watch charger' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(2).click();
  await page.getByRole('combobox').nth(2).fill('fuse');
  await page.locator('input[name="products.2.price"]').click();
  await page.locator('input[name="products.2.price"]').fill('0100');
  await page.locator('input[name="products.2.discount"]').click();
  await page.locator('input[name="products.2.discount"]').fill('050');
  await page.locator('textarea[name="products.2.description"]').click();
  await page.locator('textarea[name="products.2.description"]').fill('NoDes');
  await page.locator('textarea[name="products.2.hsnCode"]').click();
  await page.locator('textarea[name="products.2.hsnCode"]').fill('1123');
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(1000);
    await page.locator('body tr:nth-of-type(2) td:nth-of-type(7) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();

// 8th
    await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Address$/ }).click();
    await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Khamaria Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'EV charger' }).click();
  await page.locator('input[name="products.0.discount"]').click();
  await page.locator('input[name="products.0.discount"]').fill('090');
  await page.getByRole('button', { name: 'Save' }).click();
await page.waitForTimeout(1000);
  
 await page.getByRole('tab', { name: 'Quotation' }).click();
 await page.waitForTimeout(3000);
  if (await page.getByText('CREATED',{exact:true}).first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/createQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"createQuotation","true",`./${screenshotPath}/createQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/createQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"createQuotation","false",`./${screenshotPath}/createQuotation.png`)
  }

  console.log('create quotation completed');
}

async function approveQuotation(page) {
  console.log('Enter in approve quotation');

 
 await page.getByRole('tab', { name: 'Quotation' }).click();
   await page.waitForTimeout(1000);
    await page.locator('body tr:nth-of-type(2) td:nth-of-type(7) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  await page.waitForTimeout(1000);

  if (
       await page.getByText('MANAGER APPROVED').first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/approveQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"approveQuotation","true",`./${screenshotPath}/approveQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/approveQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"approveQuotation","false",`./${screenshotPath}/approveQuotation.png`)
  }

  console.log('approve quotation complited');
  
}

async function acceptQuotation(page) {
  console.log('Enter in accept quotation');
   await page.getByRole('tab', { name: 'Quotation' }).click();
     await page.waitForTimeout(1000);
      // await page.locator('body tr:nth-of-type(3) td:nth-of-type(7) div button:last-of-type svg').click();
      await page.locator('body tr:nth-of-type(3) td:nth-of-type(7) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
 await page.waitForTimeout(1000);
   await page.locator('body tr:nth-of-type(3) td:nth-of-type(7) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Accept' }).click();
await page.waitForTimeout(1000);


  if (
       await page.getByText('ACCEPTED').first().isVisible()
     ) 
  {
    await page.screenshot({ path: `./${screenshotPath}/acceptQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"acceptQuotation","true",`./${screenshotPath}/acceptQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/acceptQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"acceptQuotation","false",`./${screenshotPath}/acceptQuotation.png`)
  }

  console.log('accept quotation complited');
 
}

async function rejectQuotation(page){
  console.log('Enter in reject quotation');
   await page.getByRole('tab', { name: 'Quotation' }).click();
     await page.waitForTimeout(1000);
  await page.locator('body tr:nth-of-type(4) td:nth-of-type(7) div button:last-of-type svg').click();
    await page.getByRole('menuitem', { name: 'Reject' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('rejected by manager');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);

  if (
      await page.getByText('MANAGER REJECTED').first().isVisible()
     ) 
  {
    await page.screenshot({ path: `./${screenshotPath}/rejectQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"rejectQuotation","true",`./${screenshotPath}/rejectQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/rejectQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"rejectQuotation","false",`./${screenshotPath}/rejectQuotation.png`)
  }

  console.log('reject quotation complited');
}

async function rejectedByCustomerQuotation(page) {
  console.log('Enter in reject by customer quotation');
   await page.getByRole('tab', { name: 'Quotation' }).click();
      await page.waitForTimeout(1000);
  await page.locator('body tr:nth-of-type(1) td:nth-of-type(7) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  await page.waitForTimeout(3000);
   await page.locator('body tr:nth-of-type(1) td:nth-of-type(7) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Reject' }).click();
  await page.waitForTimeout(1000);



  if (
      await page.getByText('REJECTED',{exact:true}).first().isVisible()
    ) 
  {
    await page.screenshot({ path: `./${screenshotPath}/rejectedByCustomerQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"rejectedByCustomerQuotation","true",`./${screenshotPath}/rejectedByCustomerQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/rejectedByCustomerQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"rejectedByCustomerQuotation","false",`./${screenshotPath}/rejectedByCustomerQuotation.png`)
  }
 
  console.log('rejected by customer quotation completed');
}

async function copyQuotation(page){
   console.log('Enter in copy quotation');
    await page.getByRole('tab', { name: 'Quotation' }).click();
     await page.waitForTimeout(1000);
   await page.locator('body tr:nth-of-type(2) td:nth-of-type(7) div button:last-of-type svg').click();
     await page.getByRole('menuitem', { name: 'Copy' }).click();

  await page.getByRole('combobox', { name: 'Address' }).click();
 await page.getByRole('option', { name: 'Khamaria Market Khamaria' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);

 await page.getByRole('tab', { name: 'Quotation' }).click();
await page.waitForTimeout(3000);

  if (await page.getByText('CREATED').first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/copyQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"copyQuotation","true",`./${screenshotPath}/copyQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/copyQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"copyQuotation","false",`./${screenshotPath}/copyQuotation.png`)
  }

  console.log('copy quotation completed');
}
async function editQuotation(page) {
  console.log('Enter in edited quotation');
 await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('REJECTED').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(500);
  await expect(page.getByText('Please create a new quotation')).toBeVisible();



   if (await page.getByText('Please create a new quotation').first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/editQuotationRejected.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editQuotationRejected","true",`./${screenshotPath}/editQuotationRejected.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editQuotationRejected.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editQuotationRejected","false",`./${screenshotPath}/editQuotationRejected.png`)
  }
  await page.goBack();

await page.waitForTimeout(1000);


 await page.getByRole('tab', { name: 'Quotation' }).click();
 await page.waitForTimeout(1000);
   await page.getByText('ACCEPTED').first().click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Edit' }).click();
await page.waitForTimeout(500);
  if (await page.getByText('Please create a new quotation').first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/editQuotationAccepted.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editQuotationAccepted","true",`./${screenshotPath}/editQuotationAccepted.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editQuotationAccepted.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editQuotationAccepted","false",`./${screenshotPath}/editQuotationAccepted.png`)
  }
   await page.goBack();
   
await page.waitForTimeout(1000);



await page.getByRole('tab', { name: 'Quotation' }).click();
await page.waitForTimeout(1000);
    await page.getByText('MANAGER APPROVED').first().click();
    await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'Laptop charger' }).click();
  await page.locator('input[name="products.1.discount"]').click();
  await page.locator('input[name="products.1.discount"]').fill('090');
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('Quotation notesEdit');
  await page.getByRole('checkbox', { name: 'Terms and Conditions' }).uncheck();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(1000);
   await page.goBack();
   await page.waitForTimeout(1000);
await page.getByRole('tab', { name: 'Quotation' }).click();
await page.waitForTimeout(2000);



  if (!await page.getByText('MANAGER APPROVED').first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/editQuotationManagerApproved.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editQuotationManagerApproved","true",`./${screenshotPath}/editQuotationManagerApproved.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editQuotationManagerApproved.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editQuotationManagerApproved","false",`./${screenshotPath}/editQuotationManagerApproved.png`)
  }

  console.log('edited quotation completed');
}

async function sendQuotation(page){
  console.log('Enter in send quotation');
   await page.getByRole('tab', { name: 'Quotation' }).click();
 await page.getByText('REJECTED').first().click();
 await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Send Quotation' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'To' }).click();
  await page.getByRole('textbox', { name: 'To' }).fill('akbk04+21@gmail.com');
  await page.getByRole('textbox', { name: 'CC' }).click();
  await page.getByRole('textbox', { name: 'CC' }).fill('abhay+21@zynka.ai,abhay+22@zynka.ai');
  await page.getByRole('textbox', { name: 'Message' }).click();

  await page.getByRole('textbox', { name: 'Message' }).fill('By InsideCustomer Dear Customer,\n  Thank you for your business, always a pleasure to work with you!\n  We have generated a new quotation.X');
  await page.getByRole('textbox', { name: 'Subject' }).click();
 
  await page.getByRole('textbox', { name: 'Subject' }).fill('Quotation By InsideCustomer of services and items to be purchasedX');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.waitForTimeout(3000);


  if (await page.getByText('Quotation mailed successfully',{exact:true}).first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/sendQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"sendQuotation","true",`./${screenshotPath}/sendQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/sendQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"sendQuotation","false",`./${screenshotPath}/sendQuotation.png`)
  }
   await page.goBack();
   await page.getByRole('tab', { name: 'Quotation' }).click();
await page.waitForTimeout(1000);

  console.log('send quotation completed');
}

async function deleteQuotation(page) {
  console.log('Enter in deleted quotaion');
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();

 await page.waitForTimeout(3000);

  if (!await page.getByText('Ishan Singh (1345836)',{exact:true}).first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/deleteQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteQuotation","true",`./${screenshotPath}/deleteQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/deleteQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteQuotation","false",`./${screenshotPath}/deleteQuotation.png`)
  }

  console.log('Deleted quotation completed');
}


// async function exportQuotationFilter(page) {
//   console.log('Enter in export quotation filter'); 
//   // filter on basis of State, City, and Customer name.
//   await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'State' }).click();
//   await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByText('City').click();
//   await page.getByRole('menuitem', { name: 'Khamaria' }).getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'OK' }).click();
//    await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.locator('div').filter({ hasText: /^1$/ }).nth(2).click();
//   await page.getByRole('menuitem', { name: 'Arjun Singh' }).getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.waitForTimeout(1000);

//   if (await page.getByText('Arjun Singh',{exact:true}).first().isVisible()) 
//   {
//     await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter1.png`, fullPage: true });
//     await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter1","true",`./${screenshotPath}/exportQuotationFilter1.png`)
    
//   }
//   else{
//     await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter1.png`, fullPage: true });
//     await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter1","false",`./${screenshotPath}/exportQuotationFilter1.png`)
//   }
//     // Exel
//   const [excelDownload1] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To Excel' }).click()
//   ]);
//   await excelDownload1.saveAs('downloads/exportQuotationFilter1.xlsx');
//   const result1 = await dataRead(
//               "./downloads/exportQuotationFilter1.xlsx",
//               ["Mayank Rathor","akbk6551+1139@gmail.com"],
//               []
//           );
//           console.log(result1);
//         await page.waitForTimeout(2000)
//         if (result1.success) 
//             {
//                 await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter1.png`, fullPage: true });
//                 await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter1","true",`./${screenshotPath}/exportQuotationFilter1.png`)
                
//               }
//               else{
//                 await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter1.png`, fullPage: true });
//                 await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter1","false",`./${screenshotPath}/exportQuotationFilter1.png`)
//               }
//   // PDF
//   const [pdfDownload1] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To PDF' }).click()
//   ]);
//   await pdfDownload1.saveAs('downloads/exportQuotationFilter2.pdf');
//   const result2 = await dataRead(
//               "./downloads/exportQuotationFilter2.pdf",
//               ["Mayank Rathor","akbk6551+1139@gmail.com"],
//               []
//           );
//           console.log(result2);
//         await page.waitForTimeout(2000)
//         if (result2.success) 
//             {
//                 await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter2.png`, fullPage: true });
//                 await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter2","true",`./${screenshotPath}/exportQuotationFilter2.png`)
                
//               }
//               else{
//                 await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter2.png`, fullPage: true });
//                 await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter2","false",`./${screenshotPath}/exportQuotationFilter2.png`)
//               }
//   await page.reload();
// //  filter on the besis of Status, and Date filter.

//   await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'Quotation Status' }).click();
//   await page.getByRole('menuitem', { name: 'Rejected', exact: true }).getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'Date Filter' }).click();
//   await page.getByRole('radio', { name: 'Week' }).check();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.waitForTimeout(1000);
  
//   if (await page.getByText('Mayank Rathor',{exact:true}).first().isVisible()) 
//   {
//     await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter2.png`, fullPage: true });
//     await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter2","true",`./${screenshotPath}/exportQuotationFilter2.png`)
    
//   }
//   else{
//     await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter2.png`, fullPage: true });
//     await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter2","false",`./${screenshotPath}/exportQuotationFilter2.png`)
//   }
//   // Exel
//   const [excelDownload2] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To Excel' }).click()
//   ]);
//   await excelDownload2.saveAs('downloads/exportQuotationFilter3.xlsx');
//   const result3 = await dataRead(
//               "./downloads/exportQuotationFilter3.xlsx",
//               ["Mayank Rathor","akbk6551+1139@gmail.com"],
//               []
//           );
//           console.log(result3);
//         await page.waitForTimeout(2000)
//         if (result3.success) 
//             {
//                 await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter3.png`, fullPage: true });
//                 await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter3","true",`./${screenshotPath}/exportQuotationFilter3.png`)
                
//               }
//               else{
//                 await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter3.png`, fullPage: true });
//                 await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter3","false",`./${screenshotPath}/exportQuotationFilter3.png`)
//               }

//   // PDF
//   const [pdfDownload2] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To PDF' }).click()
//   ]);
//   await pdfDownload2.saveAs('downloads/exportQuotationFilter4.pdf');
//   const result4 = await dataRead(
//               "./downloads/exportQuotationFilter4.pdf",
//               ["Mayank Rathor","akbk6551+1139@gmail.com"],
//               []
//           );
//           console.log(result4);
//         await page.waitForTimeout(2000)
//         if (result4.success) 
//             {
//                 await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter4.png`, fullPage: true });
//                 await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter4","true",`./${screenshotPath}/exportQuotationFilter4.png`)
                
//               }
//               else{
//                 await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter4.png`, fullPage: true });
//                 await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter4","false",`./${screenshotPath}/exportQuotationFilter4.png`)
//               }
//   await page.reload();          
// }

async function reciptDownloadQuotation(page){
  console.log('Enter in  recipt download quotation');
await page.waitForTimeout(1000);
 await page.locator('body tr:nth-of-type(2) td:nth-of-type(7) div button:last-of-type svg').click();
  const [excelDownload] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('menuitem', { name: 'Receipt' }).click()
  ]);
  await excelDownload.saveAs('downloads/quotationReciptOutSide.pdf');

await page.waitForTimeout(1000);
   await page.getByText('REJECTED').first().click();
   await page.waitForTimeout(1000);
  // PDF
  const [pdfDownload] = await Promise.all([
    page.waitForEvent('download'),
      page.getByRole('button', { name: 'PDF' }).click()
  ]);
 await pdfDownload.saveAs('downloads/quotationReciptInside.pdf');
 console.log('Recipt download quotation completed ');
}



async function verifyQuotationInsideCustomer(page){
  console.log('Enter varifyQuotationInsidecustomer');
    await page.getByRole('link', { name: 'Customers' }).click();
     await page.waitForTimeout(3000);
  await page.getByText('Mayank Rathor').click();
   await page.waitForTimeout(1000);
  await page.getByRole('tab', { name: 'Quotation' }).click();
 await page.waitForTimeout(1000);

  if (page.getByText('REJECTED').first().isVisible()&&
page.getByText('CREATED', { exact: true }).first().isVisible()&&
page.getByText('ACCEPTED').first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/verifyRealQuotationInsideCustomer.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"verifyRealQuotationInsideCustomer","true",`./${screenshotPath}/verifyRealQuotationInsideCustomer.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/verifyRealQuotationInsideCustomer.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"verifyRealQuotationInsideCustomer","false",`./${screenshotPath}/verifyRealQuotationInsideCustomer.png`)
  }


  console.log('mid lever');

  await page.getByRole('link', { name: 'Customers' }).click();
   await page.waitForTimeout(3000);

  await page.getByText('Mayank Rathor').click();
    await page.waitForTimeout(1000);
  await page.getByRole('tab', { name: 'Quotation' }).click();
 await page.waitForTimeout(1000);

   if (page.getByRole('cell', { name: 'No data available' }).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/verifyQuotationInsideCustomer.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"verifyQuotationInsideCustomer","true",`./${screenshotPath}/verifyQuotationInsideCustomer.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/verifyQuotationInsideCustomer.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"verifyQuotationInsideCustomer","false",`./${screenshotPath}/verifyQuotationInsideCustomer.png`)
  }
 await page.waitForTimeout(3000);
console.log('verify quotation Inside customer completed');
}
