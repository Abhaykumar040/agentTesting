import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';
import { loginCustomerPortal } from '../tests/login';
import { dataRead } from '../dataRead';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/invoices`;
const pathName=`outputData/priority/${testData.companyType}`

export async function invoicesInsideCustomer(page){
  // await addInvoices(page);
  // await page.waitForTimeout(3000);
  // await cancelInvoice(page);
  //  await page.waitForTimeout(3000);
  // await editInvoices(page);
  // // await page.waitForTimeout(3000);
  // await sendInvoices(page);
  // // await page.waitForTimeout(3000);
  // await sendInvoices(page);
  // await page.waitForTimeout(3000);
  await exportInvoiceNormal(page);
  await page.waitForTimeout(3000);
  await exportInvoiceFilter(page);
}

async function addInvoices(page){
  console.log('Enter in add invoice');
  // await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('Arjun Singh').first().click();

  await page.waitForTimeout(1000);
 await page.getByRole('tab', { name: 'Invoice' }).click();
 await page.waitForTimeout(1000);
//1st Invoice create

  await page.getByRole('link', { name: 'Add Invoice' }).click();
await page.waitForTimeout(1000);


  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Khamaria Khamaria' }).click();
  await page.getByRole('checkbox', { name: 'UPI Transfer' }).check();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Smart watch charger' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
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


//2nd invoice create


  await page.waitForTimeout(1000);
 await page.getByRole('tab', { name: 'Invoice' }).click();
 await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Add Invoice' }).click();

  await page.waitForTimeout(1000);

  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Khamaria Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  await page.getByRole('button', { name: 'Save' }).click();



//3rd invoice create
  await page.waitForTimeout(1000);
  await page.getByRole('tab', { name: 'Invoice' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Add Invoice' }).click();

  await page.waitForTimeout(1000);

  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Khamaria Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
   await page.locator('body tr:nth-of-type(2) td:nth-of-type(8) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Cancel' }).click();


// 4th invoice create
await page.waitForTimeout(1000);
//  await page.getByRole('tab', { name: 'Invoice' }).click();
 await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Add Invoice' }).click();

  await page.waitForTimeout(1000);

  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Khamaria Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
 

  // check in customer portal 
  
      await loginCustomerPortal(page);
       await page.getByRole('link', { name: 'Invoices' }).click();
       await page.waitForTimeout(3000);
       if(await page.getByText('PENDING PAYMENT').first().isVisible()){
        console.log("Internal Job in Engineer portal is visible");

        await page.screenshot({ path: `./${screenshotPath}/checkCreateInvoiceInCustomerPortal.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"checkCreateInvoiceInCustomerPortal","true",`./${screenshotPath}/checkCreateInvoiceInCustomerPortal.png`)
       }else{
        console.log("Internal Job in Engineer portal is not visible");
      
        await page.screenshot({ path: `./${screenshotPath}/checkCreateInvoiceInCustomerPortal.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"checkCreateInvoiceInCustomerPortal","false",`./${screenshotPath}/checkCreateInvoiceInCustomerPortal.png`)
      }
      await page.locator('button').nth(5).click();
      await page.getByRole('button', { name: 'Paid', exact: true }).click();
      if(await page.getByText('PAID').first().isVisible()){
        console.log("Internal Job in Engineer portal is visible");
        await page.screenshot({ path: `./${screenshotPath}/paidInvoiceInCustomerPortal.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"paidInvoiceInCustomerPortal","true",`./${screenshotPath}/paidInvoiceInCustomerPortal.png`)
     
       }else{
        console.log("Internal Job in Engineer portal is not visible");
      
        await page.screenshot({ path: `./${screenshotPath}/paidInvoiceInCustomerPortal.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"paidInvoiceInCustomerPortal","false",`./${screenshotPath}/paidInvoiceInCustomerPortal.png`)
      }
       
    await page.waitForTimeout(2000);
     console.log("Going back to company portal...");
    await page.goto(data.url);
    console.log("Company portal login completed");

// 5th invoice create
await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('Arjun Singh').first().click();
await page.waitForTimeout(1000);
 await page.getByRole('tab', { name: 'Invoice' }).click();
 await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Add Invoice' }).click();
   await page.waitForTimeout(1000);
    await page.locator('div').filter({ hasText: /^Address$/ }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Khamaria Khamaria' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Khamaria Khamaria' }).click();
   await page.waitForTimeout(1000);
  await page.locator('.MuiInputBase-root.MuiOutlinedInput-root').first().click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  await page.getByRole('button', { name: 'Save' }).click();


  await page.waitForTimeout(1000);
 await page.getByRole('tab', { name: 'Invoice' }).click();

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

  await page.waitForTimeout(1000);
 await page.getByRole('tab', { name: 'Invoice' }).click();
 await page.waitForTimeout(1000);
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
 
 
   await page.getByRole('button', { name: 'Back to list' }).click();
   await page.getByRole('button', { name: 'Back to list' }).click();
  console.log('send invoice completed');
}


async function editInvoices(page){
  console.log('Enter in edit invoice');
 await page.getByRole('tab', { name: 'Invoice' }).click();
 await page.getByRole('tab', { name: 'Invoice' }).click();
    await page.locator('body tr:nth-of-type(1) td:nth-of-type(8) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
    await page.waitForTimeout(1000);
   await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(2).click();
  await page.getByRole('option', { name: 'EV charger' }).click();
   await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(2).click();
  await page.getByRole('option', { name: 'EV charger' }).click();
  await page.locator('textarea[name="note"]').click();
  await page.locator('textarea[name="note"]').fill('Invoice Notes ,aEdited');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(1000);
    // await page.getByText('PENDING PAYMENT').first().click();



  await page.waitForTimeout(1000);
  if (await page.getByRole('Invoice updated successfully').first().isVisible())  
  if (await page.getByRole('Invoice updated successfully').first().isVisible())  
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
  await page.waitForTimeout(1000);
 await page.getByRole('tab', { name: 'Invoice' }).click();
 await page.waitForTimeout(1000);
   await page.locator('body tr:nth-of-type(2) td:nth-of-type(8) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Cancel' }).click();

 
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


async function exportInvoiceNormal(page){
  console.log('Enter in export invoice normal');
   const [excelDownload1] = await Promise.all([
  
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
  
    ]);
    await excelDownload1.saveAs('downloads/exportExcelInvoiceFilter1.xlsx');
    const result1 = await dataRead(
            "./downloads/exportExcelInvoiceFilter1.xlsx",
            ["Neeraj Rathor","Uttar Pradesh"],
            ["Neeraj Rathor","Bihar"]
        );
        console.log(result1);
      await page.waitForTimeout(2000)
      if (result1.success) 
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
            ["Neeraj Rathor","Uttar Pradesh"],
            ["Neeraj Rathor","Bihar"]
        );
        console.log(result2);
      await page.waitForTimeout(2000)
      if (result2.success) 
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
            ["Neeraj Rathor","Bihar"]
        );
        console.log(result3);
      await page.waitForTimeout(2000)
      if (result3.success) 
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
            ["Neeraj Rathor","Bihar"]
        );
        console.log(result4);
      await page.waitForTimeout(2000)
      if (result4.success) 
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
            ["Abhay Singh","CANCELLED"]
        );
        console.log(result5);
      await page.waitForTimeout(2000)
      if (result5.success) 
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
      if (result6.success) 
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
  await page.getByRole('gridcell', { name: '27' }).click();
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
            ["Arjun Singh","2/03/2026"]
        );
        console.log(result7);
      await page.waitForTimeout(2000)
      if (result7.success) 
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
      if (result8.success) 
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