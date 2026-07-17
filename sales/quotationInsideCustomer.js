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
const downloadFilePath=`downloads/quotationInsideCommercialCustomer`;
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
  //   await rejectedByCustomerQuotation(page);
  // await page.waitForTimeout(3000);
  // await copyQuotation(page);
  //   await page.waitForTimeout(3000);

  await sendQuotation(page);
  await page.waitForTimeout(3000);
  await editQuotation(page);


  await page.waitForTimeout(30000);
  await reciptDownloadQuotation(page);
  await page.waitForTimeout(30000);
  await exportQuotationNormal(page);
  await page.waitForTimeout(3000);
  await exportInsideQuotationFilter(page);

   await page.waitForTimeout(3000);
  await verifyQuotationInsideCustomer(page);
  await page.waitForTimeout(3000);
  await deleteQuotation(page);
}

async function exportQuotationNormal(page){
  console.log('Enter in export Quotation Normal');
    await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();  
  await page.getByText('Imran Khan').click();
  // await page.getByRole('link', { name: 'Quotations' }).click();
  // excel file
  const [excelDownload] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload.saveAs('downloads/exportExcelQuotationNormal.xlsx');
  const result1 = await dataRead(
    "./downloads/exportExcelQuotationNormal.xlsx",
    ["Anil Rathor","REJECTED"],
    ["Abhay","Completed"]
);
console.log(result1);
    if ( result1.success
       && await page.getByText('Anil Rathor').first().isVisible() 
    && !await page.getByText('Aman Singh').isVisible()
    ) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationNormal.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationNormal","true",`./${screenshotPath}/exportExcelQuotationNormal.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationNormal.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationNormal","false",`./${screenshotPath}/exportExcelQuotationNormal.png`)
    }
 
// await page.getByRole('link', { name: 'Customers' }).click();
//   await page.getByText('Shana Zanab').frist().click();
//   await page.getByRole('link', { name: 'Quotations' }).click();
  // pdf file
   const [pdfDownload1] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
  await pdfDownload1.saveAs('downloads/exportPDFQuotationNormal.pdf');
    await page.waitForTimeout(2000);
  const result = await dataRead(
    "./downloads/exportPDFQuotationNormal.pdf",
    ["Anil Rathor","REJECTED"],
    ["Abhay","Completed"]
);
console.log(result);
    if ( result.success
       && await page.getByText('Anil Rathor').first().isVisible() 
    && !await page.getByText('Aman Singh').isVisible()
    ) 
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

// async function exportInsideQuotationFilter(page){
//   console.log('Enter in export internal job filter');  


// // --------------------------------------------------
// // filter on basis of Customer 
//  await page.getByRole('button', { name: 'Sales' }).click();
//   await page.getByRole('link', { name: 'Customers' }).click();
//   await page.getByText('Shana Zanab').click();
//  await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'Customer' }).click();
//   await page.getByRole('menuitem', { name: 'Shana Zanab' }).getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'Quotation Status' }).click();
//   await page.getByRole('menuitem', { name: 'Manager Approved' }).getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'OK' }).click();
//    // excel file
//   const [excelDownload2] = await Promise.all([

//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To Excel' }).click()

//   ]);
//   await excelDownload2.saveAs('downloads/exportExcelQuotationFilter2.xlsx');
//   const result3 = await dataRead(
//     "./downloads/exportExcelQuotationFilter2.xlsx",
//     ["Shana Zanab","MANAGER_APPROVED"],
//     ["Anil Singh","REJECTED"]
//   );
//    console.log(result3);
//     if (result3.success
//       && await page.getByText('MANAGER_APPROVED').firstt().isVisible() 
//     && !await page.getByText('REJECTED').isVisible()
//     ) 
//     {
//       await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationFilter2.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationFilter2","true",`./${screenshotPath}/exportExcelQuotationFilter2.png`)
      
//     }
//     else{
//       await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationFilter2.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationFilter2","false",`./${screenshotPath}/exportExcelQuotationFilter2.png`)
//     }
// await page.getByRole('link', { name: 'Customers' }).click();
//   await page.getByText('Shana Zanab').click();
//   await page.getByRole('link', { name: 'Quotations' }).click();

//   // pdf file
//   const [pdfDownload2] = await Promise.all([

//     page.waitForEvent('download'),

//     page.getByRole('button', { name: 'Export To PDF' }).click()

//   ]);
//   await pdfDownload2.saveAs('downloads/exportPDFQuotationFilter2.pdf');
//     await page.waitForTimeout(2000);
//     const result4 = await dataRead(
//     "./downloads/exportPDFQuotationFilter2.pdf",
//     ["Shana Zanab","MANAGER_APPROVED"],
//     ["Anil Singh","REJECTED"]
//   );
//    console.log(result4);
//     if (result4.success
//          && await page.getByText('MANAGER_APPROVED').firstt().isVisible() 
//     && !await page.getByText('REJECTED').isVisible()
//     ) 
//     {
//       await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationFilter2.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationFilter2","true",`./${screenshotPath}/exportPDFQuotationFilter2.png`)
      
//     }
//     else{
//       await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationFilter2.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationFilter2","false",`./${screenshotPath}/exportPDFQuotationFilter2.png`)
//     }
//     await page.reload();


//        await page.getByRole('button', { name: 'Sales' }).click();
//   await page.getByRole('link', { name: 'Customers' }).click();
//   await page.getByText('Shana Zanab').click();
//   await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'State' }).click();
//   await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'City' }).click();
//   await page.getByRole('menuitem', { name: 'Auraiya' }).getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.getByText('MANAGER APPROVED').first().click();
//   // excel file
//   const [excelDownload1] = await Promise.all([

//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To Excel' }).click()

//   ]);
//   await excelDownload1.saveAs('downloads/exportExcelQuoationFilter1.xlsx');
//   const result1 = await dataRead(
//     "./downloads/exportExcelQuoationFilter1.xlsx",
//     ["Shana Zanab","MANAGER_APPROVED"],
//     ["Abhay","CREATED"]
//   );
//    console.log(result1);
//     await page.waitForTimeout(2000);
  
//     if (result1.success
//        && await page.getByText('MANAGER_APPROVED').first().isVisible() 
//     && !await page.getByText('ACCEPTED').isVisible()
//     ) 
//     {
//       await page.screenshot({ path: `./${screenshotPath}/exportExcelQuoationFilter1.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportExcelQuoationFilter1","true",`./${screenshotPath}/exportExcelQuoationFilter1.png`)
      
//     }
//     else{
//       await page.screenshot({ path: `./${screenshotPath}/exportExcelQuoationFilter1.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportExcelQuoationFilter1","false",`./${screenshotPath}/exportExcelQuoationFilter1.png`)
//     }

// await page.getByRole('link', { name: 'Customers' }).click();
//   await page.getByText('Shana Zanab').click();
//   await page.getByRole('link', { name: 'Quotations' }).click();

//   // pdf file
//   const [pdfDownload1] = await Promise.all([

//     page.waitForEvent('download'),

//     page.getByRole('button', { name: 'Export To PDF' }).click()

//   ]);
//   await pdfDownload1.saveAs('downloads/exportPDFQuotationFilter1.pdf');
//   const result2 = await dataRead(
//     "./downloads/exportPDFQuotationFilter1.pdf",
//    ["Shana Zanab","MANAGER_APPROVED"],
//     ["Abhay","CREATED"]
//   );
//    console.log(result2);
//     await page.waitForTimeout(2000);
  
//     if (result2.success
//        && await page.getByText('MANAGER_APPROVED').first().isVisible() 
//     && !await page.getByText('ACCEPTED').isVisible()
//     ) 
//     {
//       await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationFilter1.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationFilter1","true",`./${screenshotPath}/exportPDFQuotationFilter1.png`)
      
//     }
//     else{
//       await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationFilter1.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationFilter1","false",`./${screenshotPath}/exportPDFQuotationFilter1.png`)
//     }
//     await page.reload();

// // ---------------------------------------------    

//     // filter on basis of date.
//     await page.getByRole('button', { name: 'Sales' }).click();
//   await page.getByRole('link', { name: 'Customers' }).click();
//   await page.getByText('Shana Zanab').click();
//    await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'Date Filter' }).click();
//   await page.getByRole('menuitem', { name: 'Custom' }).click();
//   await page.getByRole('radio', { name: 'Custom' }).check();
//   await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
//   await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('12/02/2026');
//   await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
//   await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('13/03/2026');
//   await page.getByRole('button', { name: 'OK' }).click();
//   await expect(page.getByText('05/04/').first()).toBeVisible();
//   await expect(page.getByText('Shana Zanab').first()).toBeVisible();
//   // excel file
//   const [excelDownload4] = await Promise.all([

//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To Excel' }).click()

//   ]);
//   await excelDownload4.saveAs('downloads/exportExcelQuotationFilter4.xlsx');
//    const result7= await dataRead(
//     "./downloads/exportExcelQuotationFilter4.xlsx",
//     ["Shana Zanab","05/04/"],
//     ["Manish","CREATED"]
//   );
//    console.log(result7);
//     if (result7.success
//         && await page.getByText('05/04/').first().isVisible() 
//     && !await page.getByText('01/05/').isVisible()
//     ) 
//     {
//       await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationFilter4.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationFilter4.png","true",`./${screenshotPath}/exportExcelQuotationFilter4.png.png`)
      
//     }
//     else{
//       await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationFilter4.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationFilter4","false",`./${screenshotPath}/exportExcelQuotationFilter4.png`)
//     }
//     await page.getByRole('link', { name: 'Customers' }).click();
//   await page.getByText('Shana Zanab').click();
//   await page.getByRole('link', { name: 'Quotations' }).click();
//   // pdf file
//   const [pdfDownload4] = await Promise.all([

//     page.waitForEvent('download'),

//     page.getByRole('button', { name: 'Export To PDF' }).click()

//   ]);
//   await pdfDownload4.saveAs('downloads/exportPDFQuotationFilter4.pdf');
//     await page.waitForTimeout(2000);
//    const result8 = await dataRead(
//     "./downloads/exportPDFQuotationFilter4.pdf",
//      ["Shana Zanab","05/04/"],
//     ["Manish","CREATED"]
//   );
//    console.log(result8);
//     if (result8.success
//       && await page.getByText('05/04/').first().isVisible() 
//     && !await page.getByText('01/05/').isVisible()
//     ) 
//     {
//       await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationFilter4.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationFilter4","true",`./${screenshotPath}/exportPDFQuotationFilter4.png`)
//     }
//     else{
//       await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationFilter4.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationFilter4","false",`./${screenshotPath}/exportPDFQuotationFilter4.png`)
//     }
//     await page.reload();
//   console.log('export internal job completed');
// }


async function exportInsideQuotationFilter(page){
console.log("Enter in export inside customer quotation filter")

await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
await page.getByText('Imran Khan').click();
  await page.getByRole('tab', { name: 'Quotation' }).click();
  // await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();


   const [excelDownload1] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload1.saveAs('downloads/exportQuotationInsideCommercialState.xlsx');
      const result1 = await dataRead(
            "./downloads/exportQuotationInsideCommercialState.xlsx",
            ["Kamlesh Maurya","ACCEPTED"],
            ["Smith","REJECTED"]
        );
        console.log(result1);
      await page.waitForTimeout(2000)
      if (result1.success && await page.getByText('ACCEPTED').first().isVisible() 
        && !await page.getByText('REJECTED').first().isVisible()
   )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideCommercialState.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideCommercialState","true",`./${screenshotPath}/exportQuotationInsideCommercialState.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideCommercialState.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideCommercialState","false",`./${screenshotPath}/exportQuotationInsideCommercialState.png`)
            }
    
        // pdf code    
    
         const [pdfDownload1] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload1.saveAs('downloads/exportQuotationInsideCommercialStatePdf.pdf');
     const result2 = await dataRead(
            "./downloads/exportQuotationInsideCommercialStatePdf.pdf",
            ["Kamlesh Maurya","ACCEPTED"],
            ["Smith","Reject"]
        );
        console.log(result2);
      await page.waitForTimeout(2000)
      if (result2.success
        && await page.getByText('ACCEPTED').first().isVisible() 
        && !await page.getByText('Reject').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideCommercialStatePdf.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideCommercialStatePdf","true",`./${screenshotPath}/exportQuotationInsideCommercialStatePdf.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideCommercialStatePdf.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideCommercialStatePdf","false",`./${screenshotPath}/exportQuotationInsideCommercialStatePdf.png`)
            }

    
    await page.waitForTimeout(2000);
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Mumbai' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();

   const [excelDownload2] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload2.saveAs('downloads/exportQuotationInsideCommercialCityXlx.xlsx');
      const result3 = await dataRead(
            "./downloads/exportQuotationInsideCommercialCityXlx.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result3);
      await page.waitForTimeout(2000)
      if (result3.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideCommercialCityXlx.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideCommercialCityXlx","true",`./${screenshotPath}/exportQuotationInsideCommercialCityXlx.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideCommercialCityXlx.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideCommercialCityXlx","false",`./${screenshotPath}/exportQuotationInsideCommercialCityXlx.png`)
            }
    
        // pdf code    
    
         const [pdfDownload2] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload2.saveAs('downloads/exportQuotationInsideCommercialCityPdf.pdf');
     const result4 = await dataRead(
            "./downloads/exportQuotationInsideCommercialCityPdf.pdf",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result4);
      await page.waitForTimeout(2000)
      if (result4.success
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideCommercialCityPdf.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideCommercialCityPdf","true",`./${screenshotPath}/exportQuotationInsideCommercialCityPdf.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideCommercialCityPdf.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideCommercialCityPdf","false",`./${screenshotPath}/exportQuotationInsideCommercialCityPdf.png`)
            }

     await page.waitForTimeout(2000);
 
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer' }).click();
  await page.getByRole('menuitem', { name: 'Kamlesh Maurya' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


  const [excelDownload3] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload3.saveAs('downloads/exportQuotationInsideCommercialCustomer.xlsx');
      const result5 = await dataRead(
            "./downloads/exportQuotationInsideCommercialCustomer.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result5);
      await page.waitForTimeout(2000)
      if (result5.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideCommercialCustomer.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideCommercialCustomer","true",`./${screenshotPath}/exportQuotationInsideCommercialCustomer.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideCommercialCustomer.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideCommercialCustomer","false",`./${screenshotPath}/exportQuotationInsideCommercialCustomer.png`)
            }
    
        // pdf code    
    
         const [pdfDownload3] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload3.saveAs('downloads/exportQuotationInsideFilterCustomerPdf.pdf');
     const result6 = await dataRead(
            "./downloads/exportQuotationInsideFilterCustomerPdf.pdf",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result5);
      await page.waitForTimeout(2000)
      if (result6.success
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilterCustomerPdf.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilterCustomerPdf","true",`./${screenshotPath}/exportQuotationInsideFilterCustomerPdf.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilterCustomerPdf.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilterCustomerPdf","false",`./${screenshotPath}/exportQuotationInsideFilterCustomerPdf.png`)
            }
  

   await page.waitForTimeout(2000);
   
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Quotation Status' }).click();
  await page.getByRole('menuitem', { name: 'Created' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


  const [excelDownload4] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload4.saveAs('downloads/exportQuotationInsideFilterCommercialStatus.xlsx');
      const result7 = await dataRead(
            "./downloads/exportQuotationInsideFilterCommercialStatus.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result7);
      await page.waitForTimeout(2000)
      if (result7.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilterCommercialStatus.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilterCommercialStatus","true",`./${screenshotPath}/exportQuotationInsideFilterCommercialStatus.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilterCommercialStatus.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilterCommercialStatus","false",`./${screenshotPath}/exportQuotationInsideFilterCommercialStatus.png`)
            }
    
        // pdf code    
    
         const [pdfDownload4] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload4.saveAs('downloads/exportQuotationInsideFilterCommercialStatusPdf.pdf');
     const result8 = await dataRead(
            "./downloads/exportQuotationInsideFilterCommercialStatusPdf.pdf",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result8);
      await page.waitForTimeout(2000)
      if (result8.success
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilterCommercialStatusPdf.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilterCommercialStatusPdf","true",`./${screenshotPath}/exportQuotationInsideFilterCommercialStatusPdf.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilterCommercialStatusPdf.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilterCommercialStatusPdf","false",`./${screenshotPath}/exportQuotationInsideFilterCommercialStatusPdf.png`)
            }

   await page.waitForTimeout(2000);
  // await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Kamlesh Maurya').click();
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Quotation Status' }).click();
  await page.getByText('Entries :Filter By').click();
    await page.reload();


   const [excelDownload5] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload5.saveAs('downloads/exportQuotationInsideFilter9.xlsx');
      const result9 = await dataRead(
            "./downloads/exportQuotationInsideFilter9.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result9);
      await page.waitForTimeout(2000)
      if (result9.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter9.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter9","true",`./${screenshotPath}/exportQuotationInsideFilter9.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter9.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter9","false",`./${screenshotPath}/exportQuotationInsideFilter9.png`)
            }
    
        // pdf code    
    
         const [pdfDownload5] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload5.saveAs('downloads/exportQuotationInsideFilter10.pdf');
     const result10 = await dataRead(
            "./downloads/exportQuotationInsideFilter10.pdf",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result10);
      await page.waitForTimeout(2000)
      if (result10.success
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter10.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter10","true",`./${screenshotPath}/exportQuotationInsideFilter10.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter10.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter10","false",`./${screenshotPath}/exportQuotationInsideFilter10.png`)
            }
   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Kamlesh Maurya').click();
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('radio', { name: 'Custom' }).check();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('17');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().press('ArrowRight');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('17/03/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('30/03/2026');
  await page.getByRole('button', { name: 'OK' }).click()
    await page.reload();

  

   const [excelDownload6] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload6.saveAs('downloads/exportQuotationInsideFilter11.xlsx');
      const result11 = await dataRead(
            "./downloads/exportQuotationInsideFilter11.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result11);
      await page.waitForTimeout(2000)
      if (result11.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter11.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter11","true",`./${screenshotPath}/exportQuotationInsideFilter11.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter11.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter11","false",`./${screenshotPath}/exportQuotationInsideFilter11.png`)
            }
    
        // pdf code    
    
         const [pdfDownload6] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload6.saveAs('downloads/exportQuotationInsideFilter12.pdf');
     const result12 = await dataRead(
            "./downloads/exportQuotationInsideFilter12.pdf",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result12);
      await page.waitForTimeout(2000)
      if (result12.success
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter12.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter12","true",`./${screenshotPath}/exportQuotationInsideFilter12.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter12.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter12","false",`./${screenshotPath}/exportQuotationInsideFilter12.png`)
            }
  

   await page.waitForTimeout(2000);
   await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Kamlesh Maurya').click();
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
   await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Khamaria' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


  const [excelDownload7] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload7.saveAs('downloads/exportQuotationInsideFilter13.xlsx');
      const result13 = await dataRead(
            "./downloads/exportQuotationInsideFilter13.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result13);
      await page.waitForTimeout(2000)
      if (result13.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter13.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter13","true",`./${screenshotPath}/exportQuotationInsideFilter13.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter13.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter13","false",`./${screenshotPath}/exportQuotationInsideFilter13.png`)
            }
    
        // pdf code    
    
         const [pdfDownload7] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload7.saveAs('downloads/exportQuotationInsideFilter14.pdf');
     const result14 = await dataRead(
            "./downloads/exportQuotationInsideFilter14.pdf",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result2);
      await page.waitForTimeout(2000)
      if (result2.success
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter14.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter14","true",`./${screenshotPath}/exportQuotationInsideFilter14.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter14.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter14","false",`./${screenshotPath}/exportQuotationInsideFilter14.png`)
            }


   await page.waitForTimeout(2000);
   await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Kamlesh Maurya').click();
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer' }).click();
  await page.getByRole('menuitem', { name: 'Jony Rathor' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();



  const [excelDownload8] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload8.saveAs('downloads/exportQuotationInsideFilter15.xlsx');
      const result15 = await dataRead(
            "./downloads/exportQuotationInsideFilter15.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result15);
      await page.waitForTimeout(2000)
      if (result15.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter15.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter15","true",`./${screenshotPath}/exportQuotationInsideFilter15.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter15.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter15","false",`./${screenshotPath}/exportQuotationInsideFilter15.png`)
            }
    
        // pdf code    
    
         const [pdfDownload8] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload8.saveAs('downloads/exportInvoiceInCustomerFilter16.pdf');
     const result16 = await dataRead(
            "./downloads/exportInvoiceInCustomerFilter16.pdf",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result16);
      await page.waitForTimeout(2000)
      if (result16.success
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter16.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter16","true",`./${screenshotPath}/exportQuotationInsideFilter16.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter16.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter16","false",`./${screenshotPath}/exportQuotationInsideFilter16.png`)
            }

  
   await page.waitForTimeout(2000);
   await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Kamlesh Maurya').click();
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Quotation Status' }).click();
  await page.getByRole('menuitem', { name: 'Created' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


   const [excelDownload9] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload9.saveAs('downloads/exportQuotationInsideFilter17.xlsx');
      const result17 = await dataRead(
            "./downloads/exportQuotationInsideFilter17.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result17);
      await page.waitForTimeout(2000)
      if (result17.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter17.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter17","true",`./${screenshotPath}/exportQuotationInsideFilter17.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter17.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter17","false",`./${screenshotPath}/exportQuotationInsideFilter17.png`)
            }
    
        // pdf code    
    
         const [pdfDownload9] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload9.saveAs('downloads/exportQuotationInsideFilter18.pdf');
     const result18 = await dataRead(
            "./downloads/exportQuotationInsideFilter18.pdf",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result18);
      await page.waitForTimeout(2000)
      if (result18.success
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter18.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter18","true",`./${screenshotPath}/exportQuotationInsideFilter18.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter18.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter18","false",`./${screenshotPath}/exportQuotationInsideFilter18.png`)
            }
    await page.waitForTimeout(2000);
   await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Kamlesh Maurya').click();
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('radio', { name: 'Custom' }).check();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('17/03/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('30/03/2026');
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


  const [excelDownload10] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload10.saveAs('downloads/exportQuotationInsideFilter19.xlsx');
      const result19 = await dataRead(
            "./downloads/exportQuotationInsideFilter19.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result19);
      await page.waitForTimeout(2000)
      if (result19.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter19.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter19","true",`./${screenshotPath}/exportQuotationInsideFilter19.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter19.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter19","false",`./${screenshotPath}/exportQuotationInsideFilter19.png`)
            }
    
        // pdf code    
    
         const [pdfDownload10] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload10.saveAs('downloads/exportQuotationInsideFilter20.pdf');
     const result20 = await dataRead(
            "./downloads/exportQuotationInsideFilter20.pdf",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result20);
      await page.waitForTimeout(2000)
      if (result20.success
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter20.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter20","true",`./${screenshotPath}/exportQuotationInsideFilter20.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter20.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter20","false",`./${screenshotPath}/exportQuotationInsideFilter20.png`)
            }
  
 
   await page.waitForTimeout(2000);
   await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Kamlesh Maurya').click();
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Khamaria' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer' }).click();
  await page.getByRole('menuitem', { name: 'Jony Rathor' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


    const [excelDownload11] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload11.saveAs('downloads/exportQuotationInsideFilter21.xlsx');
      const result21 = await dataRead(
            "./downloads/exportQuotationInsideFilter21.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result21);
      await page.waitForTimeout(2000)
      if (result21.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter21.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter21","true",`./${screenshotPath}/exportQuotationInsideFilter21.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter21.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter21","false",`./${screenshotPath}/exportQuotationInsideFilter21.png`)
            }
    
        // pdf code    
    
         const [pdfDownload11] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload11.saveAs('downloads/exportQuotationInsideFilter22.pdf');
     const result22 = await dataRead(
            "./downloads/exportQuotationInsideFilter22.pdf",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result22);
      await page.waitForTimeout(2000)
      if (result22.success
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter22.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter22","true",`./${screenshotPath}/exportQuotationInsideFilter22.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter22.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter22","false",`./${screenshotPath}/exportQuotationInsideFilter22.png`)
            }
  

   await page.waitForTimeout(2000);
   await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Kamlesh Maurya').click();
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Khamaria' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Quotation Status').click();
  await page.getByRole('menuitem', { name: 'Created' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();



   const [excelDownload12] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload12.saveAs('downloads/exportQuotationInsideFilter23.xlsx');
      const result23 = await dataRead(
            "./downloads/exportQuotationInsideFilter23.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result23);
      await page.waitForTimeout(2000)
      if (result23.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter23.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter23","true",`./${screenshotPath}/exportQuotationInsideFilter23.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter23.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter23","false",`./${screenshotPath}/exportQuotationInsideFilter23.png`)
            }
    
        // pdf code    
    
         const [pdfDownload12] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload12.saveAs('downloads/exportQuotationInsideFilter24.pdf');
     const result24 = await dataRead(
            "./downloads/exportQuotationInsideFilter24.pdf",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result24);
      await page.waitForTimeout(2000)
      if (result24.success
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter24.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter24","true",`./${screenshotPath}/exportQuotationInsideFilter24.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter24.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter24","false",`./${screenshotPath}/exportQuotationInsideFilter24.png`)
            }
  


   await page.waitForTimeout(2000);
  //  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Kamlesh Maurya').click();
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Khamaria' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('radio', { name: 'Custom' }).check();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('17/03/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('30/03/2026');
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();



   const [excelDownload13] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload13.saveAs('downloads/exportQuotationInsideFilter25.xlsx');
      const result25 = await dataRead(
            "./downloads/exportQuotationInsideFilter25.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result25);
      await page.waitForTimeout(2000)
      if (result25.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter25.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter25","true",`./${screenshotPath}/exportQuotationInsideFilter25.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter25.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter25","false",`./${screenshotPath}/exportQuotationInsideFilter25.png`)
            }
    
        // pdf code    
    
         const [pdfDownload13] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload13.saveAs('downloads/exportQuotationInsideFilter26.pdf');
     const result26 = await dataRead(
            "./downloads/exportQuotationInsideFilter26.pdf",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result26);
      await page.waitForTimeout(2000)
      if (result26.success
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter26.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter26","true",`./${screenshotPath}/exportQuotationInsideFilter26.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter26.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter26","false",`./${screenshotPath}/exportQuotationInsideFilter26.png`)
            }
  

   await page.waitForTimeout(2000);
  //  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Kamlesh Maurya').click();
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer' }).click();
  await page.getByRole('menuitem', { name: 'Jony Rathor' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Quotation Status' }).click();
  await page.getByRole('menuitem', { name: 'Created' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();

  const [excelDownload14] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload14.saveAs('downloads/exportQuotationInsideFilter27.xlsx');
      const result27 = await dataRead(
            "./downloads/exportQuotationInsideFilter27.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result27);
      await page.waitForTimeout(2000)
      if (result27.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter27.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter27","true",`./${screenshotPath}/exportQuotationInsideFilter27.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter27.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter27","false",`./${screenshotPath}/exportInvoiceInCustomerFilter27.png`)
            }
    
        // pdf code    
    
         const [pdfDownload14] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload14.saveAs('downloads/exportQuotationInsideFilter28.pdf');
     const result28 = await dataRead(
            "./downloads/exportQuotationInsideFilter28.pdf",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result28);
      await page.waitForTimeout(2000)
      if (result28.success
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter28.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter28","true",`./${screenshotPath}/exportQuotationInsideFilter28.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter28.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter28","false",`./${screenshotPath}/exportQuotationInsideFilter28.png`)
         

    await page.waitForTimeout(2000);
  //  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Kamlesh Maurya').click();
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer' }).click();
  await page.getByRole('menuitem', { name: 'Jony Rathor' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('radio', { name: 'Custom' }).check();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('17/03/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('30/02/2026');
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();

 const [excelDownload15] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload15.saveAs('downloads/exportQuotationInsideFilter29.xlsx');
      const result29 = await dataRead(
            "./downloads/exportQuotationInsideFilter29.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result29);
      await page.waitForTimeout(2000)
      if (result29.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter29.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter29","true",`./${screenshotPath}/exportQuotationInsideFilter29.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationInsideFilter29.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationInsideFilter29","false",`./${screenshotPath}/exportQuotationInsideFilter29.png`)
            }
    
        // pdf code    
    
         const [pdfDownload15] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload15.saveAs('downloads/exportQuotationFilter30.pdf');
     const result30 = await dataRead(
            "./downloads/exportQuotationFilter30.pdf",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result30);
      await page.waitForTimeout(2000)
      if (result30.success
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter30.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter30","true",`./${screenshotPath}/exportQuotationFilter30.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter30.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter30","false",`./${screenshotPath}/exportQuotationFilter30.png`)
            }


    await page.waitForTimeout(2000); 
  //  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Kamlesh Maurya').click();
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Quotation Status' }).click();
  await page.getByRole('menuitem', { name: 'Created' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('radio', { name: 'Custom' }).check();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('17/03/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('30/03/3026');
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();



   const [excelDownload16] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload16.saveAs('downloads/exportQuotationFilter31.xlsx');
      const result31 = await dataRead(
            "./downloads/exportQuotationFilter31.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result31);
      await page.waitForTimeout(2000)
      if (result31.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter31.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter31","true",`./${screenshotPath}/exportQuotationFilter31.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter31.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter31","false",`./${screenshotPath}/exportQuotationFilter31.png`)
            }
    
        // pdf code    
    
         const [pdfDownload16] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload16.saveAs('downloads/exportQuotationFilter30.pdf');
     const result32 = await dataRead(
            "./downloads/exportQuotationFilter30.pdf",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result32);
      await page.waitForTimeout(2000)
      if (result32.success
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter32.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter32","true",`./${screenshotPath}/exportQuotationFilter32.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter32.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter32","false",`./${screenshotPath}/exportQuotationFilter32.png`)
            }
          }
  
}




async function   createQuotation(page){
  console.log('Enter in create quotation');
 //1st Quotation create
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.waitForTimeout(1000);
   await page.getByText('Imran Khan').click();
     await page.getByRole('tab', { name: 'Address' }).click();
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Hyderabad');
   await page.waitForTimeout(1000);
  await page.getByText('Hyderabad, Telangana, India', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('I-46');
  await page.getByRole('textbox', { name: 'Address Line 2' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2' }).fill('Red Hills, Malakpet');
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).click();
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).fill('500001');
  await page.getByText('Use as a billing address?').click();
  await page.getByRole('button', { name: 'Save' }).click();
await page.waitForTimeout(3000);
  
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.waitForTimeout(1000);
  
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
 await page.getByRole('option', { name: 'Ghosia Aurai Uttar Pradesh' }).click();
  // await page.getByRole('option', { name: 'Khamaria Khamaria' }).click();
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
  await page.getByRole('option', { name: 'Ghosia Aurai Uttar Pradesh' }).click();
  await page.getByRole('checkbox', { name: 'Notes' }).uncheck();
  await page.getByRole('checkbox', { name: 'Terms and Conditions' }).uncheck();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  // await page.getByRole('option', { name: 'Tourch charger' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(1000);

   //3rd Quotation create
    await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
   await page.waitForTimeout(1000);

  await page.getByRole('combobox', { name: 'Address' }).click();
   
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Ghosia Aurai Uttar Pradesh' }).click();
  // await page.getByRole('option', { name: 'Khamaria Khamaria' }).click();
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
  await page.getByRole('option', { name: 'I-46 Red Hills, Malakpet' }).click();
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
  //   await page.locator('body tr:nth-of-type(2) td:nth-of-type(9) div button:last-of-type svg').click();
  // await page.getByRole('menuitem', { name: 'Approve' }).click();


  //  5th quotation
  await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();

  await page.waitForTimeout(1000);
  
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'I-46 Red Hills, Malakpet' }).click();
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
  //   await page.locator('body tr:nth-of-type(2) td:nth-of-type(9) div button:last-of-type svg').click();
  // await page.getByRole('menuitem', { name: 'Approve' }).click();
  
  // check in customer portal 
  //    await loginCustomerPortal(page);
  //    await page.getByRole('link', { name: 'Quotation' }).click();
  //    if(await page.getByText('PENDING APPROVAL').first().isVisible()){
  //     console.log("Internal Job in Engineer portal is visible");
  //     await page.screenshot({ path: `./${screenshotPath}/checkCreateQuotationInCustomerPortal.png`, fullPage: true });
  //     await updateOpJson(`./${screenshotPath}/`,"checkCreateQuotationInCustomerPortal","true",`./${screenshotPath}/checkCreateQuotationInCustomerPortal.png`)
   
  //    }else{
  //     console.log("Internal Job in Engineer portal is not visible");
    
  //     await page.screenshot({ path: `./${screenshotPath}/checkCreateQuotationInCustomerPortal.png`, fullPage: true });
  //     await updateOpJson(`./${screenshotPath}/`,"checkCreateQuotationInCustomerPortal","false",`./${screenshotPath}/checkCreateQuotationInCustomerPortal.png`)
  //   }
  //   await page.waitForTimeout(3000);
  //   await page.getByRole('table').getByRole('button').filter({ hasText: /^$/ }).click();
  //   await page.getByRole('button', { name: 'Accept' }).click();
  //   if(await page.getByText('ACCEPTED').first().isVisible()){
  //     console.log("Internal Job in Engineer portal is visible");
  //     await page.screenshot({ path: `./${screenshotPath}/acceptQuotationInCustomerPortal.png`, fullPage: true });
  //     await updateOpJson(`./${screenshotPath}/`,"acceptQuotationInCustomerPortal","true",`./${screenshotPath}/acceptQuotationInCustomerPortal.png`)
   
  //    }else{
  //     console.log("Internal Job in Engineer portal is not visible");
    
  //     await page.screenshot({ path: `./${screenshotPath}/acceptQuotationInCustomerPortal.png`, fullPage: true });
  //     await updateOpJson(`./${screenshotPath}/`,"acceptQuotationInCustomerPortal","false",`./${screenshotPath}/acceptQuotationInCustomerPortal.png`)
  //   }
     
  // await page.waitForTimeout(2000);
  //  console.log("Going back to company portal...");
  //  await page.goto(data.url);
  //  console.log("Company portal login completed");

  //  6th 
   await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();

  await page.waitForTimeout(1000);
  
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
   await page.getByRole('option', { name: 'I-46 Red Hills, Malakpet' }).click();
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
//    await page.waitForTimeout(1000);
//     await page.locator('body tr:nth-of-type(2) td:nth-of-type(9) div button:last-of-type svg').click();
//   await page.getByRole('menuitem', { name: 'Approve' }).click();
//   await page.waitForTimeout(1000);
//    await page.locator('body tr:nth-of-type(3) td:nth-of-type(9) div button:last-of-type svg').click();
//   await page.getByRole('menuitem', { name: 'Accept' }).click();
// await page.waitForTimeout(1000);
// 7th
   await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();

  await page.waitForTimeout(1000);
  
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'I-46 Red Hills, Malakpet' }).click();
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
  //   await page.locator('body tr:nth-of-type(2) td:nth-of-type(9) div button:last-of-type svg').click();
  // await page.getByRole('menuitem', { name: 'Approve' }).click();

// 8th
    await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Address$/ }).click();
    await page.waitForTimeout(500);
 await page.getByRole('option', { name: 'I-46 Red Hills, Malakpet' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'EV charger' }).click();
  await page.locator('input[name="products.0.discount"]').click();
  await page.locator('input[name="products.0.discount"]').fill('090');
  await page.getByRole('button', { name: 'Save' }).click();

  

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
    await page.locator('body tr:nth-of-type(2) td:nth-of-type(9) div button:last-of-type svg').click();
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
      // await page.locator('body tr:nth-of-type(3) td:nth-of-type(9) div button:last-of-type svg').click();
      await page.locator('body tr:nth-of-type(3) td:nth-of-type(9) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
 await page.waitForTimeout(1000);
   await page.locator('body tr:nth-of-type(3) td:nth-of-type(9) div button:last-of-type svg').click();
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
  await page.locator('body tr:nth-of-type(4) td:nth-of-type(9) div button:last-of-type svg').click();
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
  await page.locator('body tr:nth-of-type(1) td:nth-of-type(9) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  await page.waitForTimeout(3000);
   await page.locator('body tr:nth-of-type(1) td:nth-of-type(9) div button:last-of-type svg').click();
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
   await page.locator('body tr:nth-of-type(2) td:nth-of-type(9) div button:last-of-type svg').click();
     await page.getByRole('menuitem', { name: 'Copy' }).click();

  await page.getByRole('combobox', { name: 'Address' }).click();
 await page.getByRole('option', { name: 'I-46 Red Hills, Malakpet' }).click();
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
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
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


async function reciptDownloadQuotation(page){
  console.log('Enter in  recipt download quotation');
await page.waitForTimeout(1000);
 await page.locator('body tr:nth-of-type(2) td:nth-of-type(9) div button:last-of-type svg').click();
  const [excelDownload] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('menuitem', { name: 'Receipt' }).click()
  ]);
  await excelDownload.saveAs('downloads/quotationReciptOutSide.pdf');

   const result1 = await dataRead(
            "./downloads/exportQuotationInsideFilter1.xlsx",
            ["EV charger","6532","Bilal Ahamad"],
            ["Smith","REJECTED"]
        );
        console.log(result1);
  
await page.waitForTimeout(1000);
   await page.getByText('REJECTED').first().click();
   await page.waitForTimeout(1000);
  // PDF
  const [pdfDownload] = await Promise.all([
    page.waitForEvent('download'),
      page.getByRole('button', { name: 'PDF' }).click()
  ]);
 await pdfDownload.saveAs('downloads/quotationReciptInside.pdf');
  const result2 = await dataRead(
            "./downloads/exportQuotationInsideFilter1.xlsx",
            ["Kamlesh Maurya","ACCEPTED"],
            ["Smith","REJECTED"]
        );
        console.log(result2);


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
