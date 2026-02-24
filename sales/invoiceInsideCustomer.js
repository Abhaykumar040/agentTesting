import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/invoices`;
const pathName=`outputData/priority/${testData.companyType}`

export async function invoicesInsideCustomer(page){
  await addInvoices(page);
  await page.waitForTimeout(3000);
   await page.waitForTimeout(3000);
  await cancelInvoice(page);
  await editInvoices(page);
  await page.waitForTimeout(3000);
  await sendInvoices(page);
  await page.waitForTimeout(3000);
  await exportInvoiceNormal(page);
  await page.waitForTimeout(3000);
  await exportInvoiceFilter(page);
}

async function addInvoices(page){
  console.log('Enter in add invoice');
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Jony Rathor').first().click();

  await page.waitForTimeout(1000);
 await page.getByRole('tab', { name: 'Invoice' }).click();
 await page.waitForTimeout(1000);
//1st Invoice create

  await page.getByRole('link', { name: 'Add Invoice' }).click();
await page.waitForTimeout(1000);


  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('checkbox', { name: 'UPI Transfer' }).check();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Smart watch charger' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'Tourch charger' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(2).click();
  await page.getByRole('combobox').nth(2).fill('fuse');
  await page.locator('input[name="products.2.price"]').click();
  await page.locator('input[name="products.2.price"]').fill('0120');
  await page.locator('input[name="products.2.discount"]').click();
  await page.locator('input[name="products.2.discount"]').fill('090');
  await page.locator('textarea[name="products.2.description"]').click();
  await page.locator('textarea[name="products.2.description"]').fill('fuseD');
  await page.locator('textarea[name="products.2.hsnCode"]').click();
  await page.locator('textarea[name="products.2.hsnCode"]').fill('12345');
  await page.getByText('Invoice Notes ,a').click();
  await page.getByText('Invoice Notes ,a').fill('Invoice Notes ,aCreated');
  await page.getByRole('button', { name: 'Save' }).click();


//2nd invoice create


  await page.waitForTimeout(1000);
 await page.getByRole('tab', { name: 'Invoice' }).click();
 await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Add Invoice' }).click();

  await page.waitForTimeout(1000);

  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Wifi charger' }).click();
  await page.getByRole('button', { name: 'Save' }).click();



//3rd invoice create

  await page.waitForTimeout(1000);
 await page.getByRole('tab', { name: 'Invoice' }).click();
 await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Add Invoice' }).click();
   await page.waitForTimeout(1000);
    await page.locator('div').filter({ hasText: /^Address$/ }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
   await page.waitForTimeout(1000);
  await page.locator('.MuiInputBase-root.MuiOutlinedInput-root').first().click();
  await page.getByRole('option', { name: 'Wifi charger' }).click();
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
 
 
  console.log('send invoice completed');
}


async function editInvoices(page){
  console.log('Enter in edit invoice');
  
  await page.waitForTimeout(1000);
 await page.getByRole('tab', { name: 'Invoice' }).click();
 await page.waitForTimeout(1000);

    await page.locator('body tr:nth-of-type(1) td:nth-of-type(8) div button:last-of-type svg').click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'Laptop charger' }).click();
  await page.getByText('Invoice Notes ,a').click();
  await page.getByText('Invoice Notes ,a').fill('Invoice Notes ,aEdited');
  await page.getByRole('button', { name: 'Update' }).click();
 await page.waitForTimeout(1000);
  await page.goBack();
  await page.waitForTimeout(1000);

    await page.getByText('PENDING PAYMENT').first().click();



  await page.waitForTimeout(1000);
  if (await page.getByRole('cell', { name: 'Laptop charger' }).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/editInvoices.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editInvoices","true",`./${screenshotPath}/editInvoices.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editInvoices.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editInvoices","false",`./${screenshotPath}/editInvoices.png`)
  }

  await page.goBack();
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
  if (await page.getByText('CANCELLED').isVisible())  
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
  
    // pdf file
    const [pdfDownload1] = await Promise.all([
  
      page.waitForEvent('download'),
  
      page.getByRole('button', { name: 'Export To PDF' }).click()
  
    ]);
    await pdfDownload1.saveAs('downloads/exportPdfInvoiceFilter1.pdf');
  console.log('eport invoice normal completed');
}
async function exportInvoiceFilter(page){
  console.log('Enter in export invoice filter');
  // fitlter using state, city, customer name.
  await page.getByRole('combobox', { name: 'Select State' }).click();
  await page.getByRole('option', { name: 'Uttar Pradesh' }).click();
  await page.getByRole('combobox', { name: 'Select City' }).click();
  await page.getByRole('option', { name: 'Khamaria' }).click();
  await page.getByRole('combobox', { name: 'Select Customer Name' }).click();
  await page.getByRole('option', { name: 'Neeraj Rathor' }).click();
  await expect(page.getByText('Neeraj Rathor').nth(1)).toBeVisible();
  if (await page.getByText('Neeraj Rathor').nth(1).isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportInvoiceFilter1.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportInvoiceFilter1","true",`./${screenshotPath}/exportInvoiceFilter1.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportInvoiceFilter1.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportInvoiceFilter1","false",`./${screenshotPath}/exportInvoiceFilter1.png`)
    }
    // await expect(page.getByText('Anjali Rathor Edited')).toBeVisible();
     const [excelDownload1] = await Promise.all([
  
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
  
    ]);
    await excelDownload1.saveAs('downloads/exportExcelInvoiceFilter1.xlsx');
  
    // pdf file
    const [pdfDownload1] = await Promise.all([
  
      page.waitForEvent('download'),
  
      page.getByRole('button', { name: 'Export To PDF' }).click()
  
    ]);
    await pdfDownload1.saveAs('downloads/exportPdfInvoiceFilter1.pdf');
    
    await page.reload();
  // Filter On the basis of status
  await page.getByRole('combobox', { name: 'Select Invoice Status' }).click();
  await page.getByRole('option', { name: 'Cancelled' }).click();
  if (await page.getByText('text.txt',{exact:true}).isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportInvoiceFilter2.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportInvoiceFilter2","true",`./${screenshotPath}/exportInvoiceFilter2.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportInvoiceFilter2.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportInvoiceFilter2","false",`./${screenshotPath}/exportInvoiceFilter2.png`)
    }
    await expect(page.getByText('Anjali Rathor Edited')).toBeVisible();
     const [excelDownload2] = await Promise.all([
  
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
  
    ]);
    await excelDownload2.saveAs('downloads/exportExcelInvoiceFilter2.xlsx');
  
    // pdf file
    const [pdfDownload2] = await Promise.all([
  
      page.waitForEvent('download'),
  
      page.getByRole('button', { name: 'Export To PDF' }).click()
  
    ]);
    await pdfDownload2.saveAs('downloads/exportPdfInvoiceFilter2.pdf');
    
    await page.reload();

  // Filter on the basis of Date.
   await page.getByRole('button', { name: 'Custom', exact: true }).click();
  await page.getByRole('option', { name: 'Custom' }).click();
  await page.getByRole('button', { name: 'Choose date' }).first().click();
  await page.getByRole('gridcell', { name: '11' }).click();
  await page.getByRole('button', { name: 'Choose date', exact: true }).click();
  await page.getByRole('gridcell', { name: '12' }).click();
  if (await page.getByText('text.txt',{exact:true}).isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportInvoiceFilter3.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportInvoiceFilter3","true",`./${screenshotPath}/exportInvoiceFilter3.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportInvoiceFilter3.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportInvoiceFilter3","false",`./${screenshotPath}/exportInvoiceFilter3.png`)
    }
    await expect(page.getByText('Anjali Rathor Edited')).toBeVisible();
     const [excelDownload3] = await Promise.all([
  
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
  
    ]);
    await excelDownload3.saveAs('downloads/exportExcelInvoiceFilter3.xlsx');
  
    // pdf file
    const [pdfDownload3] = await Promise.all([
  
      page.waitForEvent('download'),
  
      page.getByRole('button', { name: 'Export To PDF' }).click()
  
    ]);
    await pdfDownload3.saveAs('downloads/exportPdfInvoiceFilter3.pdf');
    
    await page.reload();
    console.log("Export invoice filter completed");
}