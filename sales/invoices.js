import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';
import { dataRead } from '../dataRead';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/invoices`;
const pathName=`outputData/priority/${testData.companyType}`

export async function Invoices(page){
  // await addInvoices(page);
  // await page.waitForTimeout(3000);
  //  await page.waitForTimeout(3000);
  // await cancelInvoice(page);
  await page.waitForTimeout(3000);
  await editInvoices(page);
  await page.waitForTimeout(3000);
  await sendInvoices(page);
  await page.waitForTimeout(3000);
  await createInvoiceByQuotation(page);
  await page.waitForTimeout(3000);
  await exportInvoiceInCustomerNormal(page);
  await page.waitForTimeout(3000);
  await exportInvoiceInCustomerFilter(page);
  await page.waitForTimeout(3000);
  await exportInvoiceNormal(page);
  await page.waitForTimeout(3000);
  await exportInvoiceFilter(page);
}
 
async function exportInvoiceInCustomerFilter(page){

  console.log('Enter in export invoice in customer filter');
await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Invoices' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.reload();
  await page.waitForTimeout(2000);

   
  const [excelDownload1] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
    ]);
    await excelDownload1.saveAs('downloads/exportInvoiceInCustomerFilter1.xlsx');
    const result1 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter1.xlsx",
          ["Imran Khan","akbk6551+1222@gmail.com"],
          ["Anil Maurya","akbk6551+1112@gmail.com"]
      );
      console.log(result1);
    await page.waitForTimeout(2000)
    if (result1.success 
      && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
      && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
        {
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter1.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter1","true",`./${screenshotPath}/exportInvoiceInCustomerFilter1.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter1.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter1","false",`./${screenshotPath}/exportInvoiceInCustomerFilter1.png`)
          }
  
      // pdf code    
  
       const [pdfDownload1] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To PDF' }).click()
    ]);
   await pdfDownload1.saveAs('downloads/exportInvoiceInCustomerFilter2.pdf');
   const result2 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter2.pdf",
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
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter2.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter2","true",`./${screenshotPath}/exportInvoiceInCustomerFilter2.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter2.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter2","false",`./${screenshotPath}/exportInvoiceInCustomerFilter2.png`)
          }
   



  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Khamaria' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.reload();
  await page.waitForTimeout(2000);


   const [excelDownload2] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
    ]);
    await excelDownload2.saveAs('downloads/exportInvoiceInCustomerFilter3.xlsx');
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
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter3.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter3","true",`./${screenshotPath}/exportInvoiceInCustomerFilter3.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter3.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter3","false",`./${screenshotPath}/exportInvoiceInCustomerFilter3.png`)
          }
  
      // pdf code    
  
       const [pdfDownload2] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To PDF' }).click()
    ]);
   await pdfDownload2.saveAs('downloads/exportInvoiceInCustomerFilter4.pdf');
   const result4 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter4.pdf",
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
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter4.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter4","true",`./${screenshotPath}/exportInvoiceInCustomerFilter4.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter4.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter4","false",`./${screenshotPath}/exportInvoiceInCustomerFilter4.png`)
          }




  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Customer', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Jony Rathor' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.reload();
  await page.waitForTimeout(2000);



  const [excelDownload3] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
    ]);
    await excelDownload3.saveAs('downloads/exportInvoiceInCustomerFilter5.xlsx');
    const result5 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter5.xlsx",
          ["Imran Khan","akbk6551+1222@gmail.com"],
          ["Anil Maurya","akbk6551+1112@gmail.com"]
      );
      console.log(result5);
    await page.waitForTimeout(2000)
    if (result5.success 
      && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
      && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
        {
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter5.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter5","true",`./${screenshotPath}/exportInvoiceInCustomerFilter5.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter5.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter5","false",`./${screenshotPath}/exportInvoiceInCustomerFilter5.png`)
          }
  
      // pdf code    
  
       const [pdfDownload3] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To PDF' }).click()
    ]);
   await pdfDownload3.saveAs('downloads/exportInvoiceInCustomerFilter6.pdf');
   const result6 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter6.pdf",
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
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter6.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter6","true",`./${screenshotPath}/exportInvoiceInCustomerFilter6.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter6.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter6","false",`./${screenshotPath}/exportInvoiceInCustomerFilter6.png`)
          }




  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Invoice Status').click();
  await page.getByRole('menuitem', { name: 'Pending Payment' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.reload();
  await page.waitForTimeout(2000);


  const [excelDownload4] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
    ]);
    await excelDownload4.saveAs('downloads/exportInvoiceInCustomerFilter7.xlsx');
    const result7 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter7.xlsx",
          ["Imran Khan","akbk6551+1222@gmail.com"],
          ["Anil Maurya","akbk6551+1112@gmail.com"]
      );
      console.log(result7);
    await page.waitForTimeout(2000)
    if (result7.success 
      && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
      && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
        {
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter7.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter7","true",`./${screenshotPath}/exportInvoiceInCustomerFilter7.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter7.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter7","false",`./${screenshotPath}/exportInvoiceInCustomerFilter7.png`)
          }
  
      // pdf code    
  
       const [pdfDownload4] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To PDF' }).click()
    ]);
   await pdfDownload4.saveAs('downloads/exportInvoiceInCustomerFilter8.pdf');
   const result8 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter8.pdf",
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
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter8.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter8","true",`./${screenshotPath}/exportInvoiceInCustomerFilter8.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter8.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter8","false",`./${screenshotPath}/exportInvoiceInCustomerFilter8.png`)
          }



  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('radio', { name: 'Custom' }).check();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('04/04/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('11/04/2026');
  await page.getByRole('button', { name: 'OK' }).click();
   await page.reload();
  await page.waitForTimeout(2000);

  const [excelDownload5] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
    ]);
    await excelDownload5.saveAs('downloads/exportInvoiceInCustomerFilter9.xlsx');
    const result9 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter9.xlsx",
          ["Imran Khan","akbk6551+1222@gmail.com"],
          ["Anil Maurya","akbk6551+1112@gmail.com"]
      );
      console.log(result9);
    await page.waitForTimeout(2000)
    if (result9.success 
      && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
      && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
        {
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter9.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter9","true",`./${screenshotPath}/exportInvoiceInCustomerFilter9.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter9.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter9","false",`./${screenshotPath}/exportInvoiceInCustomerFilter9.png`)
          }
  
      // pdf code    
  
       const [pdfDownload5] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To PDF' }).click()
    ]);
   await pdfDownload5.saveAs('downloads/exportInvoiceInCustomerFilter10.pdf');
   const result10 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter10.pdf",
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
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter10.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter10","true",`./${screenshotPath}/exportInvoiceInCustomerFilter10.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter10.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter10","false",`./${screenshotPath}/exportInvoiceInCustomerFilter10.png`)
          }


  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Khamaria' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.reload();
  await page.waitForTimeout(2000);

  const [excelDownload6] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
    ]);
    await excelDownload6.saveAs('downloads/exportInvoiceInCustomerFilter11.xlsx');
    const result11 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter11.xlsx",
          ["Imran Khan","akbk6551+1222@gmail.com"],
          ["Anil Maurya","akbk6551+1112@gmail.com"]
      );
      console.log(result11);
    await page.waitForTimeout(2000)
    if (result11.success 
      && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
      && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
        {
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter11.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter11","true",`./${screenshotPath}/exportInvoiceInCustomerFilter11.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter11.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter11","false",`./${screenshotPath}/exportInvoiceInCustomerFilter11.png`)
          }
  
      // pdf code    
  
       const [pdfDownload6] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To PDF' }).click()
    ]);
   await pdfDownload6.saveAs('downloads/exportInvoiceInCustomerFilter12.pdf');
   const result12 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter12.pdf",
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
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter12.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter12","true",`./${screenshotPath}/exportInvoiceInCustomerFilter12.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter12.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter12","false",`./${screenshotPath}/exportInvoiceInCustomerFilter12.png`)
          }


  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer' }).click();
  await page.getByRole('menuitem', { name: 'Neeraj Rathor' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.reload();
  await page.waitForTimeout(2000);

  const [excelDownload7] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
    ]);
    await excelDownload7.saveAs('downloads/exportInvoiceInCustomerFilter13.xlsx');
    const result13 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter13.xlsx",
          ["Imran Khan","akbk6551+1222@gmail.com"],
          ["Anil Maurya","akbk6551+1112@gmail.com"]
      );
      console.log(result13);
    await page.waitForTimeout(2000)
    if (result13.success 
      && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
      && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
        {
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter13.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter13","true",`./${screenshotPath}/exportInvoiceInCustomerFilter13.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter13.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter13","false",`./${screenshotPath}/exportInvoiceInCustomerFilter13.png`)
          }
  
      // pdf code    
  
       const [pdfDownload7] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To PDF' }).click()
    ]);
   await pdfDownload7.saveAs('downloads/exportInvoiceInCustomerFilter14.pdf');
   const result14 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter14.pdf",
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
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter14.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter14","true",`./${screenshotPath}/exportInvoiceInCustomerFilter14.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter14.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter14","false",`./${screenshotPath}/exportInvoiceInCustomerFilter14.png`)
          }


  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Invoice Status').click();
  await page.getByRole('menuitem', { name: 'Partially Paid' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.reload();
  await page.waitForTimeout(2000);

  const [excelDownload8] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
    ]);
    await excelDownload8.saveAs('downloads/exportInvoiceInCustomerFilter15.xlsx');
    const result15 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter15.xlsx",
          ["Imran Khan","akbk6551+1222@gmail.com"],
          ["Anil Maurya","akbk6551+1112@gmail.com"]
      );
      console.log(result15);
    await page.waitForTimeout(2000)
    if (result15.success 
      && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
      && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
        {
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter15.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter15","true",`./${screenshotPath}/exportInvoiceInCustomerFilter15.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter15.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter15","false",`./${screenshotPath}/exportInvoiceInCustomerFilter15.png`)
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
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter16.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter16","true",`./${screenshotPath}/exportInvoiceInCustomerFilter16.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter16.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter16","false",`./${screenshotPath}/exportInvoiceInCustomerFilter16.png`)
          }


  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Date Filter').click();
  await page.getByRole('radio', { name: 'Custom' }).check();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('05/04/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('10/04/2026');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.reload();
  await page.waitForTimeout(2000);



  const [excelDownload9] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
    ]);
    await excelDownload9.saveAs('downloads/exportInvoiceInCustomerFilter17.xlsx');
    const result17 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter17.xlsx",
          ["Imran Khan","akbk6551+1222@gmail.com"],
          ["Anil Maurya","akbk6551+1112@gmail.com"]
      );
      console.log(result17);
    await page.waitForTimeout(2000)
    if (result17.success 
      && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
      && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
        {
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter17.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter17","true",`./${screenshotPath}/exportInvoiceInCustomerFilter17.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter17.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter17","false",`./${screenshotPath}/exportInvoiceInCustomerFilter17.png`)
          }
  
      // pdf code    
  
       const [pdfDownload9] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To PDF' }).click()
    ]);
   await pdfDownload9.saveAs('downloads/exportInvoiceInCustomerFilter18.pdf');
   const result18 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter18.pdf",
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
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter18.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter18","true",`./${screenshotPath}/exportInvoiceInCustomerFilter18.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter18.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter18","false",`./${screenshotPath}/exportInvoiceInCustomerFilter18.png`)
          }


  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Khamaria' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer' }).click();
  await page.getByRole('menuitem', { name: 'Jony Rathor' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.reload();
  await page.waitForTimeout(2000);


  const [excelDownload10] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
    ]);
    await excelDownload10.saveAs('downloads/exportInvoiceInCustomerFilter19.xlsx');
    const result19 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter19.xlsx",
          ["Imran Khan","akbk6551+1222@gmail.com"],
          ["Anil Maurya","akbk6551+1112@gmail.com"]
      );
      console.log(result19);
    await page.waitForTimeout(2000)
    if (result19.success 
      && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
      && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
        {
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter19.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter19","true",`./${screenshotPath}/exportInvoiceInCustomerFilter19.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter19.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter19","false",`./${screenshotPath}/exportInvoiceInCustomerFilter19.png`)
          }
  
      // pdf code    
  
       const [pdfDownload10] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To PDF' }).click()
    ]);
   await pdfDownload10.saveAs('downloads/exportInvoiceInCustomerFilter20.pdf');
   const result20 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter20.pdf",
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
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter20.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter20","true",`./${screenshotPath}/exportInvoiceInCustomerFilter20.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter20.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter20","false",`./${screenshotPath}/exportInvoiceInCustomerFilter20.png`)
          }



  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Aurai', exact: true }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Invoice Status').click();
  await page.getByRole('menuitem', { name: 'Partially Paid' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.reload();
  await page.waitForTimeout(2000);

  const [excelDownload11] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
    ]);
    await excelDownload11.saveAs('downloads/exportInvoiceInCustomerFilter21.xlsx');
    const result21 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter21.xlsx",
          ["Imran Khan","akbk6551+1222@gmail.com"],
          ["Anil Maurya","akbk6551+1112@gmail.com"]
      );
      console.log(result21);
    await page.waitForTimeout(2000)
    if (result21.success 
      && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
      && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
        {
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter21.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter21","true",`./${screenshotPath}/exportInvoiceInCustomerFilter21.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter21.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter21","false",`./${screenshotPath}/exportInvoiceInCustomerFilter21.png`)
          }
  
      // pdf code    
  
       const [pdfDownload11] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To PDF' }).click()
    ]);
   await pdfDownload11.saveAs('downloads/exportInvoiceInCustomerFilter22.pdf');
   const result22 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter22.pdf",
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
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter22.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter22","true",`./${screenshotPath}/exportInvoiceInCustomerFilter22.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter22.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter22","false",`./${screenshotPath}/exportInvoiceInCustomerFilter22.png`)
          }


  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Khamaria' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('radio', { name: 'Custom' }).check();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('02/04/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('10/04/2026');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.reload();
  await page.waitForTimeout(2000);


  const [excelDownload12] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
    ]);
    await excelDownload12.saveAs('downloads/exportInvoiceInCustomerFilter23.xlsx');
    const result23 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter23.xlsx",
          ["Imran Khan","akbk6551+1222@gmail.com"],
          ["Anil Maurya","akbk6551+1112@gmail.com"]
      );
      console.log(result23);
    await page.waitForTimeout(2000)
    if (result23.success 
      && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
      && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
        {
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter23.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter23","true",`./${screenshotPath}/exportInvoiceInCustomerFilter23.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter23.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter23","false",`./${screenshotPath}/exportInvoiceInCustomerFilter23.png`)
          }
  
      // pdf code    
  
       const [pdfDownload12] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To PDF' }).click()
    ]);
   await pdfDownload12.saveAs('downloads/exportInvoiceInCustomerFilter24.pdf');
   const result24 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter24.pdf",
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
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter24.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter24","true",`./${screenshotPath}/exportInvoiceInCustomerFilter24.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter24.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter24","false",`./${screenshotPath}/exportInvoiceInCustomerFilter24.png`)
          }


  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer' }).click();
  await page.getByRole('menuitem', { name: 'Jony Rathor' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Invoice Status').click();
  await page.getByRole('menuitem', { name: 'Pending Payment' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.reload();
  await page.waitForTimeout(2000);

  const [excelDownload13] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
    ]);
    await excelDownload13.saveAs('downloads/exportInvoiceInCustomerFilter25.xlsx');
    const result25 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter25.xlsx",
          ["Imran Khan","akbk6551+1222@gmail.com"],
          ["Anil Maurya","akbk6551+1112@gmail.com"]
      );
      console.log(result25);
    await page.waitForTimeout(2000)
    if (result25.success 
      && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
      && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
        {
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter25.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter25","true",`./${screenshotPath}/exportInvoiceInCustomerFilter25.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter25.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter25","false",`./${screenshotPath}/exportInvoiceInCustomerFilter25.png`)
          }
  
      // pdf code    
  
       const [pdfDownload13] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To PDF' }).click()
    ]);
   await pdfDownload13.saveAs('downloads/exportInvoiceInCustomerFilter26.pdf');
   const result26 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter26.pdf",
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
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter26.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter26","true",`./${screenshotPath}/exportInvoiceInCustomerFilter26.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter26.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter26","false",`./${screenshotPath}/exportInvoiceInCustomerFilter26.png`)
          }


   await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Date Filter').click();
  await page.getByRole('radio', { name: 'Custom' }).check();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('01/04/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('15/04/2026');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.reload();
  await page.waitForTimeout(2000);



  const [excelDownload14] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
    ]);
    await excelDownload14.saveAs('downloads/exportInvoiceInCustomerFilter27.xlsx');
    const result27 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter27.xlsx",
          ["Imran Khan","akbk6551+1222@gmail.com"],
          ["Anil Maurya","akbk6551+1112@gmail.com"]
      );
      console.log(result27);
    await page.waitForTimeout(2000)
    if (result27.success 
      && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
      && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
        {
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter27.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter27","true",`./${screenshotPath}/exportInvoiceInCustomerFilte1r27.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter27.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter27","false",`./${screenshotPath}/exportInvoiceInCustomerFilter27.png`)
          }
  
      // pdf code    
  
       const [pdfDownload14] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To PDF' }).click()
    ]);
   await pdfDownload14.saveAs('downloads/exportInvoiceInCustomerFilter28.pdf');
   const result28 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter28.pdf",
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
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter28.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter28","true",`./${screenshotPath}/exportInvoiceInCustomerFilter28.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter28.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter28","false",`./${screenshotPath}/exportInvoiceInCustomerFilter28.png`)
          }


  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Invoice Status' }).click();
  await page.getByRole('menuitem', { name: 'Pending Payment' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('radio', { name: 'Custom' }).check();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('04/04/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('08/04/2026');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.reload();
  await page.waitForTimeout(2000);


  const [excelDownload15] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
    ]);
    await excelDownload15.saveAs('downloads/exportInvoiceInCustomerFilter29.xlsx');
    const result29 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter29.xlsx",
          ["Imran Khan","akbk6551+1222@gmail.com"],
          ["Anil Maurya","akbk6551+1112@gmail.com"]
      );
      console.log(result29);
    await page.waitForTimeout(2000)
    if (result29.success 
      && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
      && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
        {
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter29.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter29","true",`./${screenshotPath}/exportInvoiceInCustomerFilter29.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter29.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter29","false",`./${screenshotPath}/exportInvoiceInCustomerFilter29.png`)
          }
  
      // pdf code    
  
       const [pdfDownload15] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To PDF' }).click()
    ]);
   await pdfDownload15.saveAs('downloads/exportInvoiceInCustomerFilter30.pdf');
   const result30 = await dataRead(
          "./downloads/exportInvoiceInCustomerFilter30.pdf",
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
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter30.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter30","true",`./${screenshotPath}/exportInvoiceInCustomerFilter30.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/exportInvoiceInCustomerFilter30.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"exportInvoiceInCustomerFilter30","false",`./${screenshotPath}/exportInvoiceInCustomerFilter30.png`)
          }


  console.log('completed export invoice in customer filter');

}
async function exportInvoiceInCustomerNormal(page){
  console.log('Enter in export invoice in customer normal');
  
  console.log('completed export invoice in customer normal');

}

async function addInvoices(page){
  console.log('Enter in add invoice');
  await page.getByRole('button', { name: 'Sales' }).click();
await page.getByRole('link', { name: 'Invoices' }).click();

//1st Invoice create
  await page.getByRole('link', { name: 'Add Invoice' }).click();
await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Anil Rathor' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Khamaria Khamaria Uttar' }).click();
  // await page.getByRole('checkbox', { name: 'UPI Transfer' }).check();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Smart watch charger' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  // await page.getByRole('button', { name: 'Add Item' }).click();
  // await page.getByRole('combobox').nth(2).click();
  // await page.getByRole('combobox').nth(2).fill('fuse');
  // await page.locator('input[name="products.2.price"]').click();
  // await page.locator('input[name="products.2.price"]').fill('0120');
  // await page.locator('input[name="products.2.discount"]').click();
  // await page.locator('input[name="products.2.discount"]').fill('090');
  // await page.locator('textarea[name="products.2.description"]').click();
  // await page.locator('textarea[name="products.2.description"]').fill('fuseD');
  // await page.locator('textarea[name="products.2.hsnCode"]').click();
  // await page.locator('textarea[name="products.2.hsnCode"]').fill('12345');
  await page.locator('textarea[name="note"]').click();
  await page.waitForTimeout(1000);
  await page.locator('textarea[name="note"]').fill('Invoice Notes ,aCreated');
  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(1000);

//2nd invoice create
  await page.getByRole('link', { name: 'Add Invoice' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Anil Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria Khamaria Uttar' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);


//3rd invoice create
  await page.getByRole('link', { name: 'Add Invoice' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Anil Rathor' }).click();
   await page.waitForTimeout(1000);
    await page.locator('div').filter({ hasText: /^Address$/ }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Khamaria Khamaria Uttar' }).click();
   await page.waitForTimeout(1000);
  await page.locator('.MuiInputBase-root.MuiOutlinedInput-root').first().click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  await page.getByRole('button', { name: 'Save' }).click();


  await page.waitForTimeout(3000);
  if (await page.getByText('PENDING PAYMENT').nth(2).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/addInvoices.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addInvoices","true",`./${screenshotPath}/addInvoices.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/addInvoices.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addInvoices","false",`./${screenshotPath}/addInvoices.png`)
  }

  console.log('Add invoice completed');
}

async function sendInvoices(page) {
  console.log('Enter in send invoice');

    await page.getByText('PENDING PAYMENT').first().click();
    
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Send Invoice' }).click();
  await page.getByRole('textbox', { name: 'To' }).click();
  await page.getByRole('textbox', { name: 'To' }).fill('akbk04+2@gmail.com');
  await page.getByRole('textbox', { name: 'CC' }).click();
  await page.getByRole('textbox', { name: 'CC' }).fill('abhay+2@zynka.ai,abhay+3@zynka.ai');
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('button', { name: 'Send' }).click();


    await page.waitForTimeout(2000);

      
  if (await page.getByText('Invoice mailed successfully').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/sendInvoice.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"sendInvoice","true",`./${screenshotPath}/sendInvoice.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/sendInvoice.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"sendInvoice","false",`./${screenshotPath}/sendInvoice.png`)
  }
 
 
  console.log('send invoice completed');
}

async function editInvoices(page){
  console.log('Enter in edit invoice');
    await page.locator('body tr:nth-of-type(1) td:nth-of-type(8) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'Laptop charger' }).click();
  await page.locator('textarea[name="note"]').click();
  await page.locator('textarea[name="note"]').fill('Invoice Notes ,aEdited');
  await page.getByRole('button', { name: 'Update' }).click();

  await page.getByRole('button', { name: 'Back to list' }).click();
  await page.waitForTimeout(1000);
    await page.getByText('PENDING PAYMENT').first().click();



  await page.waitForTimeout(1000);
  if (await page.getByRole('cell', { name: 'Laptop charger' }).first().isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/editInvoices.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editInvoices","true",`./${screenshotPath}/editInvoices.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editInvoices.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editInvoices","false",`./${screenshotPath}/editInvoices.png`)
  }

   await page.getByRole('button', { name: 'Back to list' }).click();  await page.reload();
  console.log('edit Invoice completed');
}

async function cancelInvoice(page){
  console.log('Enter in cancel invoice');
   await page.locator('body tr:nth-of-type(2) td:nth-of-type(8) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Cancel' }).click();

  await page.waitForTimeout(1000);
    await page.reload();
  await page.waitForTimeout(3000);
  if (await page.getByText('CANCELLED').first().isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/cancelInvoice.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"cancelInvoice","true",`./${screenshotPath}/cancelInvoice.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/cancelInvoice.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"cancelInvoice","false",`./${screenshotPath}/cancelInvoice.png`)
  }

  console.log('cancel invoice completed');
}

async function createInvoiceByQuotation(page) {
  console.log('Enter in create invoice by quotation');
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  
  await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Shyam Sundar' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Mukundpatti' }).click();
  await page.getByRole('checkbox', { name: 'Notes' }).uncheck();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Wifi charger' }).click();

  await page.getByRole('button', { name: 'Save' }).click()
  await page.waitForTimeout(2000);
 
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
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Update' }).click();
  
  await page.getByRole('button', { name: 'Back to list' }).click();
  await page.waitForTimeout(2000);

  await page.reload();
  
  // await page.getByRole('button', { name: 'Sales' }).click();
  // await page.getByRole('link', { name: 'Invoices' }).click();
  await page.waitForTimeout(3000);
    if (await page.getByText('Shyam Sundar').first().isVisible())  
    {
      await page.screenshot({ path: `./${screenshotPath}/createInvoiceByQuotation.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"createInvoiceByQuotation","true",`./${screenshotPath}/createInvoiceByQuotation.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/createInvoiceByQuotation.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"createInvoiceByQuotation","false",`./${screenshotPath}/createInvoiceByQuotation.png`)
    }
   

  console.log('Create invoice by quotation');
}

async function exportInvoiceNormal(page){
  console.log('Enter in export invoice normal');
   const [excelDownload1] = await Promise.all([
  
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
  
    ]);
    await excelDownload1.saveAs('downloads/exportExcelInvoiceFilter1.xlsx');
    const result1 = await dataRead(
            "./downloads/exportExcelInvoiceFilter1.xlsx",
           ["Mayank Rathor","Uttar Pradesh"],
            ["Shana Rathor","Bihar"]
        );
        console.log(result1);
      await page.waitForTimeout(2000)
      if (result1.success
        && await page.getByText('Mayank Rathor').isVisible 
    && !await page.getByText('Aman Singh').isVisible
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportExcelInvoiceFilter1.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportExcelInvoiceFilter1","true",`./${screenshotPath}/exportExcelInvoiceFilter1.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportExcelInvoiceFilter1.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportExcelInvoiceFilter1","false",`./${screenshotPath}/exportExcelInvoiceFilter1.png`)
            }
  
    // pdf file
    const [pdfDownload1] = await Promise.all([
  
      page.waitForEvent('download'),
  
      page.getByRole('button', { name: 'Export To PDF' }).click()
  
    ]);
    await pdfDownload1.saveAs('downloads/exportPdfInvoiceFilter1.pdf');
     const result2 = await dataRead(
            "./downloads/exportPdfInvoiceFilter1.pdf",
           ["Mayank Rathor","Uttar Pradesh"],
            ["Shana Rathor","Bihar"]
        );
        console.log(result2);
      await page.waitForTimeout(2000)
      if (result2.success
          && await page.getByText('Mayank Rathor').isVisible 
    && !await page.getByText('Aman Singh').isVisible
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportPdfInvoiceFilter1.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportPdfInvoiceFilter1","true",`./${screenshotPath}/exportPdfInvoiceFilter1.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportPdfInvoiceFilter1.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportPdfInvoiceFilter1","false",`./${screenshotPath}/exportPdfInvoiceFilter1.png`)
            }
  console.log('eport invoice normal completed');
}

async function exportInvoiceFilter(page){
  console.log('Enter in export invoice filter');
  // fitlter using state, city, customer name.
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('City').click();
  await page.getByRole('menuitem', { name: 'Khamaria' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
   await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Customer', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Neeraj Rathor' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    // await expect(page.getByText('Anjali Rathor Edited')).toBeVisible();
     const [excelDownload1] = await Promise.all([
  
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
  
    ]);
    await excelDownload1.saveAs('downloads/exportExcelInvoiceFilter1.xlsx');
    const result3 = await dataRead(
            "./downloads/exportExcelInvoiceFilter1.xlsx",
            ["Neeraj Rathor","Uttar Pradesh"],
            ["Anil Rathor","Bihar"]
        );
        console.log(result3);
      await page.waitForTimeout(2000)
      if (result3.success
        && await page.getByText('Neeraj Rathor').first().isVisible()
    && !await page.getByText('Anil Rathor').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportExcelInvoiceFilter1.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportExcelInvoiceFilter1","true",`./${screenshotPath}/exportExcelInvoiceFilter1.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportExcelInvoiceFilter1.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportExcelInvoiceFilter1","false",`./${screenshotPath}/exportExcelInvoiceFilter1.png`)
            }
  
    // pdf file
    const [pdfDownload1] = await Promise.all([
  
      page.waitForEvent('download'),
  
      page.getByRole('button', { name: 'Export To PDF' }).click()
  
    ]);
    await pdfDownload1.saveAs('downloads/exportPdfInvoiceFilter1.pdf');
    const result4 = await dataRead(
            "./downloads/exportPdfInvoiceFilter1.pdf",
            ["Neeraj Rathor","Uttar Pradesh"],
            ["Anil Rathor","Bihar"]
        );
        console.log(result4);
      await page.waitForTimeout(2000)
      if (result4.success
        && await page.getByText('Neeraj Rathor').first().isVisible() 
    && !await page.getByText('Anil Rathor').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportPdfInvoiceFilter1.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportPdfInvoiceFilter1","true",`./${screenshotPath}/exportPdfInvoiceFilter1.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportPdfInvoiceFilter1.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportPdfInvoiceFilter1","false",`./${screenshotPath}/exportPdfInvoiceFilter1.png`)
            }
    await page.reload();
  // Filter On the basis of status
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Invoice Status' }).click();
  await page.getByRole('menuitem', { name: 'Cancelled' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  
     const [excelDownload2] = await Promise.all([
  
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
  
    ]);
    await excelDownload2.saveAs('downloads/exportExcelInvoiceFilter2.xlsx');
    const result5 = await dataRead(
            "./downloads/exportExcelInvoiceFilter2.xlsx",
            ["Arjun Singh","CANCELLED"],
            ["Abhay Singh","PAID"]
        );
        console.log(result5);
      await page.waitForTimeout(2000)
      if (result5.success
        && await page.getByText('Arjun Singh').first().isVisible() 
    && !await page.getByText('Abhay Singh').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportExcelInvoiceFilter2.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportExcelInvoiceFilter2","true",`./${screenshotPath}/exportExcelInvoiceFilter2.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportExcelInvoiceFilter2.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportExcelInvoiceFilter2","false",`./${screenshotPath}/exportExcelInvoiceFilter2.png`)
            }
    // pdf file
    const [pdfDownload2] = await Promise.all([
  
      page.waitForEvent('download'),
  
      page.getByRole('button', { name: 'Export To PDF' }).click()
  
    ]);
    await pdfDownload2.saveAs('downloads/exportPdfInvoiceFilter2.pdf');
    const result6 = await dataRead(
            "./downloads/exportPdfInvoiceFilter2.pdf",
             ["Arjun Singh","CANCELLED"],
            ["Abhay Singh","CANCELLED"]
        );
        console.log(result6);
      await page.waitForTimeout(2000)
      if (result6.success
         && await page.getByText('Arjun Singh').first().isVisible() 
         && !await page.getByText('Abhay Singh').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportPdfInvoiceFilter2.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportPdfInvoiceFilter2","true",`./${screenshotPath}/exportPdfInvoiceFilter2.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportPdfInvoiceFilter2.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportPdfInvoiceFilter2","false",`./${screenshotPath}/exportPdfInvoiceFilter2.png`)
            }
    await page.reload();

  // Filter on the basis of Date.
   await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('radio', { name: 'Custom' }).check();
  await page.getByRole('button', { name: 'Choose date' }).first().click();
  await page.getByRole('gridcell', { name: '24' }).click();
  await page.getByRole('button', { name: 'Choose date', exact: true }).click();
  await page.getByRole('gridcell', { name: '28' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  
    // await expect(page.getByText('Anjali Rathor Edited')).toBeVisible();
     const [excelDownload3] = await Promise.all([
  
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
  
    ]);
    await excelDownload3.saveAs('downloads/exportExcelInvoiceFilter3.xlsx');
    const result7 = await dataRead(
            "./downloads/exportExcelInvoiceFilter3.xlsx",
            ["Arjun Singh","26/03/2026"],
            ["Abhay Singh","2/03/2026"]
        );
        console.log(result7);
      await page.waitForTimeout(2000)
      if (result7.success
        && await page.getByText('26/03/2026').first().isVisible() 
         && !await page.getByText('2/03/2026').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportExcelInvoiceFilter3.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportExcelInvoiceFilter3","true",`./${screenshotPath}/exportExcelInvoiceFilter3.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportExcelInvoiceFilter3.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportExcelInvoiceFilter3","false",`./${screenshotPath}/exportExcelInvoiceFilter3.png`)
            }
    // pdf file
    const [pdfDownload3] = await Promise.all([
  
      page.waitForEvent('download'),
  
      page.getByRole('button', { name: 'Export To PDF' }).click()
  
    ]);
    await pdfDownload3.saveAs('downloads/exportPdfInvoiceFilter3.pdf');
    const result8 = await dataRead(
            "./downloads/exportPdfInvoiceFilter3.pdf",
            ["Arjun Singh","26/03/2026"],
            ["Arjun Singh","2/03/2026"]
        );
        console.log(result8);
      await page.waitForTimeout(2000)
      if (result8.success
         && await page.getByText('26/03/2026').first().isVisible() 
         && !await page.getByText('2/03/2026').isVisible()
      ) 
          {
              await page.screenshot({ path: `./${screenshotPath}/exportPdfInvoiceFilter3.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportPdfInvoiceFilter3","true",`./${screenshotPath}/exportPdfInvoiceFilter3.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/exportPdfInvoiceFilter3.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"exportPdfInvoiceFilter3","false",`./${screenshotPath}/exportPdfInvoiceFilter3.png`)
            }
    await page.reload();
    console.log("Export invoice filter completed");
}

