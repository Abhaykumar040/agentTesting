import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/invoices`;
const pathName=`outputData/priority/${testData.companyType}`

export async function Invoices(page){
  await addInvoices(page);
  await page.waitForTimeout(3000);
  await editInvoices(page);
  await page.waitForTimeout(3000);
  await sendInvoices(page);
  await page.waitForTimeout(3000);
  await cancelInvoice(page);
  await page.waitForTimeout(3000);
  await createInvoiceByQuotation(page);
  await page.waitForTimeout(3000);
  await exportInvoiceNormal(page);
  await page.waitForTimeout(3000);
  await exportInvoiceFilter(page);
}

async function addInvoices(page){
  console.log('Enter in add invoice');
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Invoices' }).click();
  await page.getByRole('link', { name: 'Add Invoice' }).click();
  
  await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Customer' }).click();
  // await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Jony Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Khamaria Market' }).click();
  await page.getByRole('checkbox', { name: 'UPI Transfer' }).check();
  await page.getByRole('checkbox', { name: 'Notes' }).uncheck();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Laptop charger' }).first().click();
  await page.locator('input[name="products.0.discount"]').click();
  await page.locator('input[name="products.0.discount"]').fill('1');
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'Mobile charger' }).first().click();
  await page.locator('input[name="products.1.discount"]').click();
  await page.locator('input[name="products.1.discount"]').fill('06');
  await page.getByRole('button', { name: 'Save' }).click();
  
  await page.waitForTimeout(2000);
  if (await page.getByText('Jony Rathor').first().isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/addInvoices.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addInvoices","true",`./${screenshotPath}/addInvoices.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/addInvoices.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addInvoices","false",`./${screenshotPath}/addInvoices.png`)
  }
  await page.reload();
  console.log('Add invoice completed');
}

async function editInvoices(page) {
  console.log('Enter in edit invoice');

  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Invoices' }).click();
  await page.getByRole('link', { name: 'Add Invoice' }).click();

  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Anil Rathor' }).click();

  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria' }).click();

  await page.getByRole('checkbox', { name: 'UPI Transfer' }).check();
  await page.getByRole('checkbox', { name: 'Notes' }).uncheck();

  // First Item
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'EV charger' }).click();
 await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Add Item' }).click();

  // Second Item
  await page.getByRole('combobox').nth(1).click();

  await page.getByRole('option', { name: 'Wifi charger' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();

  // ✅ Wait properly instead of timeout
  await expect(page.getByText('Invoice created successfully'))
    .toBeVisible({ timeout: 10000 });

  // Open Edit
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();

  // ✅ WAIT for edit page to load
  await expect(page.getByRole('button', { name: 'Update' }))
    .toBeVisible();

  // Change first item
  const itemDropdown = page.getByRole('combobox').first();
  await itemDropdown.click();

  const torchOption = page.getByRole('option', { name: 'Tourch charger' });
  await torchOption.waitFor({ state: 'visible', timeout: 10000 });
  await torchOption.click();

  await page.getByRole('checkbox', { name: 'Notes' }).check();
  await page.locator('textarea[name="note"]').fill('updated invoice');

  await page.getByRole('button', { name: 'Update' }).click();

  // ✅ Proper assertion
  await expect(page.getByText('Invoice updated successfully'))
    .toBeVisible({ timeout: 10000 });

  await page.screenshot({
    path: `./${screenshotPath}/editInvoices.png`,
    fullPage: true
  });

  await updateOpJson(
    `./${screenshotPath}/`,
    "editInvoices",
    "true",
    `./${screenshotPath}/editInvoices.png`
  );

  await page.getByRole('button', { name: 'Back to list' }).click();
  await page.reload();

  console.log('Edit Invoice completed');
}


async function sendInvoices(page){
  console.log('Enter in send invoice');
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Invoices' }).click();
  await page.getByRole('link', { name: 'Add Invoice' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Neeraj Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Mukundpatti' }).click();
  await page.getByRole('checkbox', { name: 'UPI Transfer' }).check();
  await page.getByRole('checkbox', { name: 'Notes' }).uncheck();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Tourch charger' }).first().click();
  await page.locator('input[name="products.0.discount"]').click();
  await page.locator('input[name="products.0.discount"]').fill('1');
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'Smart watch charger' }).first().click();
  await page.locator('input[name="products.1.discount"]').click();
  await page.locator('input[name="products.1.discount"]').fill('06');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Invoice created successfully')).toBeVisible();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).first().click();
  await page.getByRole('button', { name: 'Send Invoice' }).click();
  await page.getByRole('textbox', { name: 'CC' }).click();
  await page.getByRole('textbox', { name: 'CC' }).fill('akbk6551+1112@gmail.com');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.waitForTimeout(3000);
  if (await page.getByText('Invoice mailed successfully').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/sendInvoices.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"sendInvoices","true",`./${screenshotPath}/sendInvoices.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/sendInvoices.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"sendInvoices","false",`./${screenshotPath}/sendInvoices.png`)
  }
  await page.getByRole('button', { name: 'Back to list' }).click();
 
  await page.reload();
  console.log('Send Invoice completed');
}

async function cancelInvoice(page){
  console.log('Enter in cancel invoice');
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Invoices' }).click();
  await page.getByRole('link', { name: 'Add Invoice' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Shivam maurya' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Mukundpatti' }).click();
  await page.getByText('UPI Transfer').click();
  await page.getByRole('checkbox', { name: 'Terms and Conditions' }).uncheck();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Tourch charger' }).first().click();
  await page.locator('textarea[name="note"]').click();
  await page.locator('textarea[name="note"]').fill('ghjhfd');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Invoice created successfully')).toBeVisible();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Cancel' }).click();
  await page.waitForTimeout(2000);
  if (await page.getByText('Shivam maurya').first().isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/cancelInvoice.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"cancelInvoice","true",`./${screenshotPath}/cancelInvoice.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/cancelInvoice.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"cancelInvoice","false",`./${screenshotPath}/cancelInvoice.png`)
  }
  await page.reload();
  console.log('cancel invoice completed');
}
async function createInvoiceByQuotation(page) {
  console.log('Enter in create invoice by quotation');
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Shyam Sundar' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Mukundpatti' }).click();
  await page.getByRole('checkbox', { name: 'Notes' }).uncheck();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Wifi charger' }).click();

  await page.getByRole('button', { name: 'Save' }).click()
  await page.waitForTimeout(2000);
  await expect(page.getByText('Quotation created successfully')).toBeVisible();
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
  await page.getByRole('button', { name: 'Update' }).click();
  // await expect(page.getByText('').first()).toBeVisible();
  // await page.getByRole('button', { name: 'Back to list' }).click();
  await page.reload()
  
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
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
   
   await page.reload();
  console.log('Create invoice by quotation');
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