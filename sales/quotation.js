import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';
import { dataRead } from '../dataRead';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/quotation`;
const pathName=`outputData/priority/${testData.companyType}`


export async function Quotation(page){
// delete previuos Quotation by check.js
  // await createQuotation(page);
  // await page.waitForTimeout(3000);
  // await approveQuotation(page);
  // await acceptQuotation(page);
  // await page.waitForTimeout(3000);
  // await rejectQuotation(page);

  // await page.waitForTimeout(3000);
  // await copyQuotation(page);
  // await page.waitForTimeout(3000);
  // await rejectedByCustomerQuotation(page);
  // await page.waitForTimeout(3000);
  // await sendQuotation(page);
  // await page.waitForTimeout(3000);
  // await editQuotation(page);
  // await page.waitForTimeout(3000);
  // await reciptDownloadQuotation(page);
  // await page.waitForTimeout(3000);

  await exportQuotationNormal(page);
  await page.waitForTimeout(3000);
  await exportQuotationFilter(page);

  // await page.waitForTimeout(3000);
  // await verifyQuotationInsideCustomer(page);
  // await deleteQuotation(page);
}

async function exportQuotationNormal(page){
  console.log('Enter in export internal job');
    await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
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

  // pdf file
  const [pdfDownload] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload.saveAs('downloads/exportPDFQuotationNormal.pdf');
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

// async function exportQuotationFilter(page){
//   console.log('Enter in export internal job filter');
//   // filter on basis of state, city
//    await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'State' }).click();
//   await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'City' }).click();
//   await page.getByRole('menuitem', { name: 'Khamaria' }).getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'OK' }).click();
  
//   // excel file
//   const [excelDownload1] = await Promise.all([

//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To Excel' }).click()

//   ]);
//   await excelDownload1.saveAs('downloads/exportExcelQuoationFilter1.xlsx');
//   const result1 = await dataRead(
//     "./downloads/exportExcelQuoationFilter1.xlsx",
//     ["Anil Rathor","REJECTED"],
//     ["Abhay","Completed"]
//   );
//    console.log(result1);
//     await page.waitForTimeout(2000);
  
//     if (result1.success
//        && await page.getByText('REJECTED').first().isVisible() 
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



//   // pdf file
//   const [pdfDownload1] = await Promise.all([

//     page.waitForEvent('download'),

//     page.getByRole('button', { name: 'Export To PDF' }).click()

//   ]);
//   await pdfDownload1.saveAs('downloads/exportPDFQuotationFilter1.pdf');
//   const result2 = await dataRead(
//     "./downloads/exportPDFQuotationFilter1.pdf",
//     ["Anil Rathor","REJECTED"],
//     ["Abhay","Completed"]
//   );
//    console.log(result2);
//     await page.waitForTimeout(2000);
  
//     if (result2.success
//       && await page.getByText('REJECTED').first().isVisible() 
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


// // --------------------------------------------------
// // filter on basis of Customer 
// await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'Customer' }).click();
//   await page.getByRole('menuitem', { name: 'Mayank SIngh', exact: true }).getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'OK' }).click();

//    // excel file
//   const [excelDownload2] = await Promise.all([

//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To Excel' }).click()

//   ]);
//   await excelDownload2.saveAs('downloads/exportExcelQuotationFilter2.xlsx');
//   const result3 = await dataRead(
//     "./downloads/exportExcelQuotationFilter2.xlsx",
//     ["Mayank Singh","CREATED"],
//     ["Anil Singh","REJECTED"]
//   );
//    console.log(result3);
//     if (result3.success
//       && await page.getByText('Mayank Singh').first().isVisible() 
//     && !await page.getByText('Anil Singh').isVisible()
//     ) 
//     {
//       await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationFilter2.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationFilter2","true",`./${screenshotPath}/exportExcelQuotationFilter2.png`)
      
//     }
//     else{
//       await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationFilter2.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationFilter2","false",`./${screenshotPath}/exportExcelQuotationFilter2.png`)
//     }


//   // pdf file
//   const [pdfDownload2] = await Promise.all([

//     page.waitForEvent('download'),

//     page.getByRole('button', { name: 'Export To PDF' }).click()

//   ]);
//   await pdfDownload2.saveAs('downloads/exportPDFQuotationFilter2.pdf');
//     await page.waitForTimeout(2000);
//     const result4 = await dataRead(
//     "./downloads/exportPDFQuotationFilter2.pdf",
//     ["Mayank Singh","CREATED"],
//     ["Anil Singh","REJECTED"]
//   );
//    console.log(result4);
//     if (result4.success
//        && await page.getByText('Mayank Singh').first().isVisible() 
//     && !await page.getByText('Anil Singh').isVisible()
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

// // ---------------------------------------------    
// // filter on basis of Quotation status.
//   await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'Quotation Status' }).click();
//   await page.getByRole('menuitem', { name: 'Rejected', exact: true }).getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'OK' }).click();
//   // excel file
//   const [excelDownload3] = await Promise.all([

//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To Excel' }).click()

//   ]);
//   await excelDownload3.saveAs('downloads/exportExcelQuotationFilter3.xlsx');
//    const result5 = await dataRead(
//     "./downloads/exportExcelQuotationFilter3.xlsx",
//     ["Anil Rathor","REJECTED"],
//     ["Abhay kumar","CREATED"]
//   );
//    console.log(result5);
//     if (result5.success
//       && await page.getByText('REJECTED').first().isVisible() 
//     && !await page.getByText('CREATED').isVisible()
//     ) 
//     {
//       await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationFilter3.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationFilter3.png","true",`./${screenshotPath}/exportExcelQuotationFilter3.png.png`)
      
//     }
//     else{
//       await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationFilter3.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationFilter3","false",`./${screenshotPath}/exportExcelQuotationFilter3.png`)
//     }
//   // pdf file
//   const [pdfDownload3] = await Promise.all([

//     page.waitForEvent('download'),

//     page.getByRole('button', { name: 'Export To PDF' }).click()

//   ]);
//   await pdfDownload3.saveAs('downloads/exportPDFQuotationFilter3.pdf');
//     await page.waitForTimeout(2000);
//    const result6 = await dataRead(
//     "./downloads/exportPDFQuotationFilter3.pdf",
//      ["Anil Rathor","REJECTED"],
//     ["Abhay kumar","CREATED"]
//   );
//    console.log(result6);
//     if (result6.success
//         && await page.getByText('REJECTED').first().isVisible() 
//     && !await page.getByText('CREATED').isVisible()
//     ) 
//     {
//       await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationFilter3.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationFilter3","true",`./${screenshotPath}/exportPDFQuotationFilter3.png`)
//     }
//     else{
//       await page.screenshot({ path: `./${screenshotPath}/exportPDFQuotationFilter3.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportPDFQuotationFilter3","false",`./${screenshotPath}/exportPDFQuotationFilter3.png`)
//     }

//     // filter on basis of date.
//    await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'Date Filter' }).click();
//   await page.getByRole('radio', { name: 'Custom' }).check();
//   await page.getByRole('button', { name: 'Choose date' }).first().click();
//   await page.getByRole('gridcell', { name: '24' }).click();
//   await page.getByRole('button', { name: 'Choose date', exact: true }).click();
//   await page.getByRole('gridcell', { name: '27' }).click();
//   await page.getByRole('button', { name: 'OK' }).click();
//   // excel file
//   const [excelDownload4] = await Promise.all([

//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To Excel' }).click()

//   ]);
//   await excelDownload4.saveAs('downloads/exportExcelQuotationFilter4.xlsx');
//    const result7= await dataRead(
//     "./downloads/exportExcelQuotationFilter4.xlsx",
//     ["Arjun Singh","CREATED"],
//     ["Manish","CREATED"]
//   );
//    console.log(result7);
//     if (result7.success
//         && await page.getByText('Arjun Singh').first().isVisible() 
//     && !await page.getByText('Manish').isVisible()
//     ) 
//     {
//       await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationFilter4.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationFilter4.png","true",`./${screenshotPath}/exportExcelQuotationFilter4.png.png`)
      
//     }
//     else{
//       await page.screenshot({ path: `./${screenshotPath}/exportExcelQuotationFilter4.png`, fullPage: true });
//       await updateOpJson(`./${screenshotPath}/`,"exportExcelQuotationFilter4","false",`./${screenshotPath}/exportExcelQuotationFilter4.png`)
//     }
//   // pdf file
//   const [pdfDownload4] = await Promise.all([

//     page.waitForEvent('download'),

//     page.getByRole('button', { name: 'Export To PDF' }).click()

//   ]);
//   await pdfDownload4.saveAs('downloads/exportPDFQuotationFilter4.pdf');
//     await page.waitForTimeout(2000);
//    const result8 = await dataRead(
//     "./downloads/exportPDFQuotationFilter4.pdf",
//     ["Arjun Singh","CREATED"],
//     ["Manish","CREATED"]
//   );
//    console.log(result8);
//     if (result8.success
//       && await page.getByText('Arjun Singh').first().isVisible() 
//     && !await page.getByText('Manish').isVisible()
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
 
async function exportQuotationFilter(page){
   
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


   const [excelDownload1] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload1.saveAs('downloads/exportQuotationFilter1.xlsx');
      const result1 = await dataRead(
            "./downloads/exportQuotationFilter1.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result1);
      await page.waitForTimeout(2000)
      if (result1.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter1.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter1","true",`./${screenshotPath}/exportQuotationFilter1.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter1.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter1","false",`./${screenshotPath}/exportQuotationFilter1.png`)
            }
    
        // pdf code    
    
         const [pdfDownload1] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload1.saveAs('downloads/exportQuotationFilter2.pdf');
     const result2 = await dataRead(
            "./downloads/exportQuotationFilter2.pdf",
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
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter2.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter2","true",`./${screenshotPath}/exportQuotationFilter2.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter2.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter2","false",`./${screenshotPath}/exportQuotationFilter2.png`)
            }



    await page.waitForTimeout(2000)
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Khamaria' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


   const [excelDownload2] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload2.saveAs('downloads/exportQuotationFilter3.xlsx');
      const result3 = await dataRead(
            "./downloads/exportInvoiceInCustomerFilter1.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result3);
      await page.waitForTimeout(2000)
      if (result3.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter3.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter3","true",`./${screenshotPath}/exportQuotationFilter3.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter3.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter3","false",`./${screenshotPath}/exportQuotationFilter3.png`)
            }
    
        // pdf code    
    
         const [pdfDownload2] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload2.saveAs('downloads/exportQuotationFilter4.pdf');
     const result4 = await dataRead(
            "./downloads/exportQuotationFilter4.pdf",
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
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter4.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter4","true",`./${screenshotPath}/exportQuotationFilter4.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter4.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter4","false",`./${screenshotPath}/exportQuotationFilter4.png`)
            }


    await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer' }).click();
  await page.getByRole('menuitem', { name: 'Jony Rathor' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();

  const [excelDownload3] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload3.saveAs('downloads/exportQuotationFilter5.xlsx');
      const result5 = await dataRead(
            "./downloads/exportQuotationFilter5.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result5);
      await page.waitForTimeout(2000)
      if (result5.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter5.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter5","true",`./${screenshotPath}/exportQuotationFilter5.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter5.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter5","false",`./${screenshotPath}/exportQuotationFilter5.png`)
            }
    
        // pdf code    
    
         const [pdfDownload3] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload3.saveAs('downloads/exportQuotationFilter6.pdf');
     const result6 = await dataRead(
            "./downloads/exportQuotationFilter6.pdf",
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
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter6.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter6","true",`./${screenshotPath}/exportQuotationFilter6.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter6.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter6","false",`./${screenshotPath}/exportQuotationFilter6.png`)
            }
  



    await page.waitForTimeout(2000);
 await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Quotation Status' }).click();
  await page.getByRole('menuitem', { name: 'Created' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();

  const [excelDownload4] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload4.saveAs('downloads/exportQuotationFilter7.xlsx');
      const result7 = await dataRead(
            "./downloads/exportQuotationFilter7.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result7);
      await page.waitForTimeout(2000)
      if (result7.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter7.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter7","true",`./${screenshotPath}/exportQuotationFilter7.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter7.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter7","false",`./${screenshotPath}/exportQuotationFilter7.png`)
            }
    
        // pdf code    
    
         const [pdfDownload4] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload4.saveAs('downloads/exportQuotationFilter8.pdf');
     const result8 = await dataRead(
            "./downloads/exportQuotationFilter8.pdf",
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
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter8.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter8","true",`./${screenshotPath}/exportQuotationFilter8.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter8.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter8","false",`./${screenshotPath}/exportQuotationFilter8.png`)
            }


    await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('radio', { name: 'Custom' }).check();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('04/04/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('11/04/2026');
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();

  

   const [excelDownload6] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To Excel' }).click()
      ]);
      await excelDownload6.saveAs('downloads/exportQuotationFilter11.xlsx');
      const result11 = await dataRead(
            "./downloads/exportQuotationFilter11.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result11);
      await page.waitForTimeout(2000)
      if (result11.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter11.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter11","true",`./${screenshotPath}/exportQuotationFilter11.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter11.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter11","false",`./${screenshotPath}/exportQuotationFilter11.png`)
            }
    
        // pdf code    
    
         const [pdfDownload6] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload6.saveAs('downloads/exportQuotationFilter12.pdf');
     const result12 = await dataRead(
            "./downloads/exportQuotationFilter12.pdf",
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
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter12.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter12","true",`./${screenshotPath}/exportQuotationFilter12.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter12.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter12","false",`./${screenshotPath}/exportQuotationFilter12.png`)
            }
  


    await page.waitForTimeout(2000);
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
      await excelDownload7.saveAs('downloads/exportQuotationFilter13.xlsx');
      const result13 = await dataRead(
            "./downloads/exportQuotationFilter13.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result13);
      await page.waitForTimeout(2000)
      if (result13.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter13.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter13","true",`./${screenshotPath}/exportQuotationFilter13.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter13.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter13","false",`./${screenshotPath}/exportQuotationFilter13.png`)
            }
    
        // pdf code    
    
         const [pdfDownload7] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload7.saveAs('downloads/exportQuotationFilter14.pdf');
     const result14 = await dataRead(
            "./downloads/exportQuotationFilter14.pdf",
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
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter14.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter14","true",`./${screenshotPath}/exportQuotationFilter14.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter14.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter14","false",`./${screenshotPath}/exportQuotationFilter14.png`)
            }



    await page.waitForTimeout(2000);
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
      await excelDownload8.saveAs('downloads/exportQuotationFilter15.xlsx');
      const result15 = await dataRead(
            "./downloads/exportQuotationFilter15.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result15);
      await page.waitForTimeout(2000)
      if (result15.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter15.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter15","true",`./${screenshotPath}/exportQuotationFilter15.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter15.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter15","false",`./${screenshotPath}/exportQuotationFilter15.png`)
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
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter16.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter16","true",`./${screenshotPath}/exportQuotationFilter16.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter16.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter16","false",`./${screenshotPath}/exportQuotationFilter16.png`)
            }


    await page.waitForTimeout(2000);
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
      await excelDownload9.saveAs('downloads/exportQuotationFilter17.xlsx');
      const result17 = await dataRead(
            "./downloads/exportQuotationFilter17.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result17);
      await page.waitForTimeout(2000)
      if (result17.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter17.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter17","true",`./${screenshotPath}/exportQuotationFilter17.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter17.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter17","false",`./${screenshotPath}/exportQuotationFilter17.png`)
            }
    
        // pdf code    
    
         const [pdfDownload9] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload9.saveAs('downloads/exportQuotationFilter18.pdf');
     const result18 = await dataRead(
            "./downloads/exportQuotationFilter18.pdf",
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
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter18.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter18","true",`./${screenshotPath}/exportQuotationFilter18.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter18.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter18","false",`./${screenshotPath}/exportQuotationFilter18.png`)
            }

    await page.waitForTimeout(2000);
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
      await excelDownload10.saveAs('downloads/exportQuotationFilter19.xlsx');
      const result19 = await dataRead(
            "./downloads/exportQuotationFilter19.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result19);
      await page.waitForTimeout(2000)
      if (result19.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter19.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter19","true",`./${screenshotPath}/exportQuotationFilter19.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter19.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter19","false",`./${screenshotPath}/exportQuotationFilter19.png`)
            }
    
        // pdf code    
    
         const [pdfDownload10] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload10.saveAs('downloads/exportQuotationFilter20.pdf');
     const result20 = await dataRead(
            "./downloads/exportQuotationFilter20.pdf",
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
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter20.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter20","true",`./${screenshotPath}/exportQuotationFilter20.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter20.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter20","false",`./${screenshotPath}/exportQuotationFilter20.png`)
            }
  


    await page.waitForTimeout(2000);
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
      await excelDownload11.saveAs('downloads/exportQuotationFilter21.xlsx');
      const result21 = await dataRead(
            "./downloads/exportQuotationFilter21.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result21);
      await page.waitForTimeout(2000)
      if (result21.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter21.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter21","true",`./${screenshotPath}/exportQuotationFilter21.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter21.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter21","false",`./${screenshotPath}/exportQuotationFilter21.png`)
            }
    
        // pdf code    
    
         const [pdfDownload11] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload11.saveAs('downloads/exportQuotationFilter22.pdf');
     const result22 = await dataRead(
            "./downloads/exportQuotationFilter22.pdf",
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
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter22.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter22","true",`./${screenshotPath}/exportQuotationFilter22.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter22.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter22","false",`./${screenshotPath}/exportQuotationFilter22.png`)
            }
  


    await page.waitForTimeout(2000);
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
      await excelDownload12.saveAs('downloads/exportQuotationFilter23.xlsx');
      const result23 = await dataRead(
            "./downloads/exportQuotationFilter23.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result23);
      await page.waitForTimeout(2000)
      if (result23.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter23.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter23","true",`./${screenshotPath}/exportQuotationFilter23.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter23.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter23","false",`./${screenshotPath}/exportQuotationFilter23.png`)
            }
    
        // pdf code    
    
         const [pdfDownload12] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload12.saveAs('downloads/exportQuotationFilter24.pdf');
     const result24 = await dataRead(
            "./downloads/exportQuotationFilter24.pdf",
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
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter24.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter24","true",`./${screenshotPath}/exportQuotationFilter24.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter24.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter24","false",`./${screenshotPath}/exportQuotationFilter24.png`)
            }
  



    await page.waitForTimeout(2000);
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
      await excelDownload13.saveAs('downloads/exportQuotationFilter25.xlsx');
      const result25 = await dataRead(
            "./downloads/exportQuotationFilter25.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result25);
      await page.waitForTimeout(2000)
      if (result25.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter25.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter25","true",`./${screenshotPath}/exportQuotationFilter25.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter25.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter25","false",`./${screenshotPath}/exportQuotationFilter25.png`)
            }
    
        // pdf code    
    
         const [pdfDownload13] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload13.saveAs('downloads/exportQuotationFilter26.pdf');
     const result26 = await dataRead(
            "./downloads/exportQuotationFilter26.pdf",
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
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter26.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter26","true",`./${screenshotPath}/exportQuotationFilter26.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter26.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter26","false",`./${screenshotPath}/exportQuotationFilter26.png`)
            }
  


    await page.waitForTimeout(2000);
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
      await excelDownload14.saveAs('downloads/exportQuotationFilter27.xlsx');
      const result27 = await dataRead(
            "./downloads/exportQuotationFilter27.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result27);
      await page.waitForTimeout(2000)
      if (result27.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter27.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter27","true",`./${screenshotPath}/exportQuotationFilter27.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter27.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter27","false",`./${screenshotPath}/exportInvoiceInCustomerFilter27.png`)
            }
    
        // pdf code    
    
         const [pdfDownload14] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Export To PDF' }).click()
      ]);
     await pdfDownload14.saveAs('downloads/exportQuotationFilter28.pdf');
     const result28 = await dataRead(
            "./downloads/exportQuotationFilter28.pdf",
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
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter28.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter28","true",`./${screenshotPath}/exportQuotationFilter28.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter28.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter28","false",`./${screenshotPath}/exportQuotationFilter28.png`)
         


    await page.waitForTimeout(2000);
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
      await excelDownload15.saveAs('downloads/exportQuotationFilter29.xlsx');
      const result29 = await dataRead(
            "./downloads/exportQuotationFilter29.xlsx",
            ["Imran Khan","akbk6551+1222@gmail.com"],
            ["Anil Maurya","akbk6551+1112@gmail.com"]
        );
        console.log(result29);
      await page.waitForTimeout(2000)
      if (result29.success 
        && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
        && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
          {
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter29.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter29","true",`./${screenshotPath}/exportQuotationFilter29.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter29.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter29","false",`./${screenshotPath}/exportQuotationFilter29.png`)
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



async function createQuotation(page){
  console.log('Enter in create quotation');
 //1st Quotation create
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();

  await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Customer' }).click();
   await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Shyam Sundar' }).click();
  
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Mukundpatti Khamaria Uttar' }).click();
  await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Smart watch charger' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.waitForTimeout(1000);
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
  await page.getByRole('link', { name: 'Add Quotation' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Shyam Sundar' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Mukundpatti Khamaria Uttar' }).click();
  await page.getByRole('checkbox', { name: 'Notes' }).check();
  await page.getByRole('checkbox', { name: 'Terms and Conditions' }).check();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(1000);

   //3rd Quotation create
  await page.getByRole('link', { name: 'Add Quotation' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Shyam Sundar' }).click();
   await page.waitForTimeout(500);
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Mukundpatti Khamaria Uttar' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'EV charger' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(1000);


   //4rth Quotation create
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Anil Rathor' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Address$/ }).click();
  await page.getByRole('option', { name: 'Khamaria Khamaria Uttar' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
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
  await page.reload();
  console.log('create quotation completed');
}

async function approveQuotation(page) {
  console.log('Enter in approve quotation');

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
  await page.reload();
  console.log('approve quotation complited');
  
}

async function acceptQuotation(page) {
  console.log('Enter in accept quotation');
      await page.locator('body tr:nth-of-type(3) td:nth-of-type(7) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
 await page.waitForTimeout(1000);
   await page.locator('body tr:nth-of-type(3) td:nth-of-type(7) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Accept' }).click();
await page.waitForTimeout(1000);


 await page.reload();
 await page.waitForTimeout(3000);

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
  await page.reload();
  console.log('accept quotation complited');
 
}

async function rejectQuotation(page){
  console.log('Enter in reject quotation');
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
  await page.reload();
  console.log('reject quotation complited');
}

async function rejectedByCustomerQuotation(page) {
  console.log('Enter in reject by customer quotation');
  await page.locator('body tr:nth-of-type(1) td:nth-of-type(7) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  await page.waitForTimeout(3000);
   await page.locator('body tr:nth-of-type(1) td:nth-of-type(7) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Reject' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
 await page.waitForTimeout(3000);

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
  await page.reload();
  console.log('rejected by customer quotation completed');
}

async function copyQuotation(page){
   console.log('Enter in copy quotation');
   await page.locator('body tr:nth-of-type(2) td:nth-of-type(7) div button:last-of-type svg').click();
     await page.getByRole('menuitem', { name: 'Copy' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Anil Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria Khamaria Uttar' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
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
  await page.reload();
  console.log('copy quotation completed');
}
async function editQuotation(page) {
  console.log('Enter in edited quotation');
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByText('REJECTED').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(500);
  // await expect(page.getByText('Please create a new quotation')).toBeVisible();



   if (await page.getByText('Please create a new quotation').first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/editQuotationRejected.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editQuotationRejected","true",`./${screenshotPath}/editQuotationRejected.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editQuotationRejected.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editQuotationRejected","false",`./${screenshotPath}/editQuotationRejected.png`)
  }
  await page.getByRole('button', { name: 'Back to list' }).click();
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
  await page.getByRole('button', { name: 'Back to list' }).click();
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
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Note:' }).fill('Quotation notesEdit');
  await page.getByRole('checkbox', { name: 'Terms and Conditions' }).uncheck();
  await page.getByRole('button', { name: 'Update' }).click();
 await page.getByRole('button', { name: 'Back to list' }).click();

 await page.waitForTimeout(1000);

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
 await page.getByText('REJECTED').first().click();
 await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Send Quotation' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'To' }).click();
  await page.getByRole('textbox', { name: 'To' }).fill('akbk04@gmail.com');
  await page.getByRole('textbox', { name: 'CC' }).click();
  await page.getByRole('textbox', { name: 'CC' }).fill('abhay@zynka.ai,abhay+1@zynka.ai');
  await page.getByRole('textbox', { name: 'Message' }).click();

  await page.getByRole('textbox', { name: 'Message' }).fill('Dear Customer,\n  Thank you for your business, always a pleasure to work with you!\n  We have generated a new quotation.X');
  await page.getByRole('textbox', { name: 'Subject' }).click();
 
  await page.getByRole('textbox', { name: 'Subject' }).fill('Quotation of services and items to be purchasedX');
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
  await page.getByRole('button', { name: 'Back to list' }).click();
  await page.reload();
  console.log('send quotation completed');
}

async function deleteQuotation(page) {
  console.log('Enter in deleted quotaion');
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.reload();
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
  await page.reload();
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
