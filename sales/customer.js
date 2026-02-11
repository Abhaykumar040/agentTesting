import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';


const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/customer`;
const pathName=`outputData/priority/${testData.companyType}`

export async function customer(page){
 await deletePreviuosCustomer(page);
 await page.waitForTimeout(3000);
 await addCustomer(page);
 await page.waitForTimeout(3000);
 await editCustomer(page);
 await page.waitForTimeout(3000);
 await exportCustomerNormal(page);
 await page.waitForTimeout(3000);
 await exportCustomerFilter(page);
 await deleteCustomer(page);
}

async function exportCustomerNormal(page) {
  console.log("Enter in export customer normal");
  // await page.getByRole('button', { name: 'Sales' }).click();
  // await page.getByRole('link', { name: 'Customers' }).click();
   const [excelDownload] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload.saveAs('downloads/exportExelCustomerNormal.xlsx');

  // PDF
  const [pdfDownload] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload.saveAs('downloads/exportPdfCustomerNormal.pdf');
 await page.reload();
 console.log("export customer normal ");
  
}

async function exportCustomerFilter(page) {
  console.log("Enter in export customer filter");
  // Filter (State, City)
  await page.getByRole('combobox', { name: 'Select State' }).click();
  await page.getByRole('option', { name: 'Uttar Pradesh' }).click();
  await page.getByRole('combobox', { name: 'Select City' }).click();
  await page.getByRole('option', { name: 'Aurai' }).click();
  await page.waitForTimeout(2000);
  
    if (await page.getByText('akbk6551+1222@gmail.com',{exact:true}).isVisible()) 
      {
          await page.screenshot({ path: `./${screenshotPath}/exportCustomerFilter1.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportCustomerFilter1","true",`./${screenshotPath}/exportCustomerFilter1.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportCustomerFilter1.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportCustomerFilter1","false",`./${screenshotPath}/exportCustomerFilter1.png`)
        }
  // Exel
  const [excelDownload1] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload1.saveAs('downloads/exportExelCustomerFilter1.xlsx');

  // PDF
  const [pdfDownload1] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload1.saveAs('downloads/exportExelCustomerFilter2.pdf');
 await page.reload();

  // filter (Commercial or Individual)
  await page.getByRole('combobox', { name: 'Select Customer Type' }).click();
  await page.getByRole('option', { name: 'commercial' }).click();
  await page.waitForTimeout(2000);
  
  if (await page.getByText('akbk6551+1222@gmail.com',{exact:true}).isVisible()) 
    {
        await page.screenshot({ path: `./${screenshotPath}/exportCustomerFilter2.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportCustomerFilter2","true",`./${screenshotPath}/exportCustomerFilter2.png`)
        
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportCustomerFilter2.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportCustomerFilter2","false",`./${screenshotPath}/exportCustomerFilter2.png`)
      }
  const [excelDownload2] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload2.saveAs('downloads/exportExelCustomerFilter3.xlsx');

  // PDF
  const [pdfDownload2] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload2.saveAs('downloads/exportExelCustomerFilter4.pdf');
 await page.reload();

  // Customer name filter
  await page.getByRole('combobox', { name: 'Select Customer', exact: true }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.waitForTimeout(2000);
  
    if (await page.getByText('akbk6551+1139@gmail.com',{exact:true}).isVisible()) 
      {
          await page.screenshot({ path: `./${screenshotPath}/exportCustomerFilter3.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportCustomerFilter3","true",`./${screenshotPath}/exportCustomerFilter3.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportCustomerFilter3.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportCustomerFilter3","false",`./${screenshotPath}/exportCustomerFilter3.png`)
        }
  const [excelDownload3] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload3.saveAs('downloads/exportExelCustomerFilter5.xlsx');

  // PDF
  const [pdfDownload3] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload3.saveAs('downloads/exportExelCustomerFilter6.pdf');
 await page.reload();

  // Code base filter
  await page.getByRole('combobox', { name: 'Select Dealer Code' }).click();
  await page.getByRole('option', { name: '1345836' }).click();
  await page.waitForTimeout(2000);
  
    if (await page.getByText('akbk6551+1220@gmail.com',{exact:true}).isVisible()) 
      {
          await page.screenshot({ path: `./${screenshotPath}/exportCustomerFilter4.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportCustomerFilter4","true",`./${screenshotPath}/exportCustomerFilter4.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportCustomerFilter4.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportCustomerFilter4","false",`./${screenshotPath}/exportCustomerFilter4.png`)
        }
     const [excelDownload] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload.saveAs('downloads/exportExelCustomerFilter7.xlsx');

  // PDF
  const [pdfDownload] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload.saveAs('downloads/exportExelCustomerFilter8.pdf');
 await page.reload();

 console.log('export customer filter completed');
}



async function deletePreviuosCustomer(page){
  console.log("Enter in delete previou customer");
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.waitForTimeout(3000);
  while( true){
    const text = await page.textContent('text=Showing');
    const match = text.match(/of\s+(\d+)\s+entries/);
    const total = match ? parseInt(match[1]) : 0;

    // // Stop loop if total <= 0
    // if (total == 1) {
    //    await page.waitForTimeout(3000);
    // }
    if (total <= 0) {
      break;
    }
     await page.getByRole('button', { name: 'Delete' }).first().click();
     await page.waitForTimeout(2000);
    //  await expect(page.getByText('Customer deleted successfully')).toBeVisible();
  }
await page.reload();
console.log("delete previous customer completed");
}
async function addCustomer(page){
  console.log("Enter in add customer");
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  
  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('radio', { name: 'Commercial' }).check();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Ms.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Aashna');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Khatoon');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1218@gmail.com');
  await page.getByRole('textbox', { name: 'Person In Charge *' }).click();
  await page.getByRole('textbox', { name: 'Person In Charge *' }).fill('Sushil Singh');
  await page.getByRole('textbox', { name: 'Dealer/Company Name' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Name' }).fill('Mayank Singh');
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).fill('1245836');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9863574112');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Aurai');
  await page.getByText('Aurai, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Ghosia');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('tab', { name: 'Contact Details' }).click();
  await page.getByRole('button', { name: 'Primary Contact' }).click();
  await page.getByRole('option', { name: 'Showroom' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Anuj Kumar');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('akbk6551+1219@gmail.com');
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).fill('78963215411');
  await page.getByRole('textbox', { name: 'Additional notes about this' }).click();
  await page.getByRole('textbox', { name: 'Additional notes about this' }).fill('Sothing Purchess');
  await page.getByRole('button', { name: 'Add Contact' }).click();
  // await page.getByText('CancelCreate Customer').click();
  await page.getByRole('button', { name: 'Create Customer' }).click();

  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('radio', { name: 'Commercial' }).check();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Ms.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Shana');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Khan');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1220@gmail.com');
  await page.getByRole('textbox', { name: 'Person In Charge *' }).click();
  await page.getByRole('textbox', { name: 'Person In Charge *' }).fill('Sushil Kumar');
  await page.getByRole('textbox', { name: 'Dealer/Company Name' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Name' }).fill('Ishan Singh');
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).fill('1345836');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9863574192');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Aurai');
  await page.getByText('Aurai, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Ghosia');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('tab', { name: 'Contact Details' }).click();
  await page.getByRole('button', { name: 'Primary Contact' }).click();
  await page.getByRole('option', { name: 'Showroom' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Abhay Kumar');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('akbk6551+1221@gmail.com');
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).fill('78903215411');
  await page.getByRole('textbox', { name: 'Additional notes about this' }).click();
  await page.getByRole('textbox', { name: 'Additional notes about this' }).fill('Sothing Purchess');
  await page.getByRole('button', { name: 'Add Contact' }).click();
  // await page.getByText('CancelCreate Customer').click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  
  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('radio', { name: 'Commercial' }).check();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Ms.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Uzma');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Khatoon');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1222@gmail.com');
  await page.getByRole('textbox', { name: 'Person In Charge *' }).click();
  await page.getByRole('textbox', { name: 'Person In Charge *' }).fill('Imran Khan');
  await page.getByRole('textbox', { name: 'Dealer/Company Name' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Name' }).fill('Bilal Ahamad');
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).fill('1275836');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9863576112');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Aurai');
  await page.getByText('Aurai, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Ghosia');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('tab', { name: 'Contact Details' }).click();
  await page.getByRole('button', { name: 'Primary Contact' }).click();
  await page.getByRole('option', { name: 'Showroom' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Uamr Khatoon');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('akbk6551+1223@gmail.com');
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).fill('78963265411');
  await page.getByRole('textbox', { name: 'Additional notes about this' }).click();
  await page.getByRole('textbox', { name: 'Additional notes about this' }).fill('Sothing Purchess');
  await page.getByRole('button', { name: 'Add Contact' }).click();
  // await page.getByText('CancelCreate Customer').click();
  await page.getByRole('button', { name: 'Create Customer' }).click();


  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Jony');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1119@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724787');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803948');
  await page.getByRole('button', { name: 'Select Access Method' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria Market');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Create Customer' }).click();

  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Shyam');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Sundar');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1212@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724747');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803941');
  await page.getByRole('button', { name: 'Select Access Method' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Create Customer' }).click();

  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Shivam');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('maurya');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1213@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724797');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9802948');
  await page.getByRole('button', { name: 'Select Access Method' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Create Customer' }).click();

  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Susil');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rana');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1214@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724784');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803998');
  await page.getByRole('button', { name: 'Select Access Method' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Create Customer' }).click();

  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Manjeet');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Singh');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1215@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834704787');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803148');
  await page.getByRole('button', { name: 'Select Access Method' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Create Customer' }).click();

  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Neeraj');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1217@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724790');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803248');
  await page.getByRole('button', { name: 'Select Access Method' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Create Customer' }).click();

  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Jony');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1119@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724787');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803948');
  await page.getByRole('button', { name: 'Select Access Method' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria Market');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Create Customer' }).click();


  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Anil');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1136@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9123456789');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('98039481');
  await page.getByRole('button', { name: 'Select Access Method' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Create Customer' }).click();

 await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Mayank');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1139@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9123456790');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('98039482');
  await page.getByRole('button', { name: 'Select Access Method' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Create Customer' }).click();
  
 await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Kolpit');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1140@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724791');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('98039483');
  await page.getByRole('button', { name: 'Select Access Method' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Create Customer' }).click(); 

 await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Sonu');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1140@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724792');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('98039484');
  await page.getByRole('button', { name: 'Select Access Method' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Create Customer' }).click();
  
await page.reload();
    await page.waitForTimeout(3000);
    
     if (await page.getByText('akbk6551+1140@gmail.com',{exact:true}).isVisible()
        ) 
       {
            await page.screenshot({ path: `./${screenshotPath}/addCustomer.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"addCustomer","true",`./${screenshotPath}/addCustomer.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/addCustomer.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"addCustomer","false",`./${screenshotPath}/addCustomer.png`)
          }
  
  await page.reload();
  console.log("Add customer");

}
async function editCustomer(page){
  console.log("Enter in Edit customer");
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('row', { name: 'Kolpit Rathor akbk6551+1140@' }).getByLabel('Edit').click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Arjun');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Singh');
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria E-hill company');
  await page.getByRole('button', { name: 'Tax Information' }).click();
  await page.getByRole('button', { name: 'Contact Information' }).click();
  await page.getByRole('button', { name: 'Contact Preference' }).click();
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Best Time to Contact' }).click();
  await page.getByRole('option', { name: 'All Day' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('tab', { name: 'Address' }).click();
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.getByText('Billing AddressBilling').click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.getByRole('listitem').filter({ hasText: /^Khamaria, Uttar Pradesh, India$/ }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('E-Hill company');
  await page.getByRole('button', { name: 'Save' }).click();
  // await page.getByRole('tab', { name: 'Documents' }).click();
  // await page.getByRole('button', { name: 'Browse Files' }).click();
  // await page.getByRole('button', { name: 'Upload Files' }).click();
  // await page.getByRole('button', { name: 'Save' }).click();
  await page.reload();
   await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
    await page.waitForTimeout(5000);
    
     if (await page.getByText('Arjun Singh',{exact:true}).isVisible()) 
       {
            await page.screenshot({ path: `./${screenshotPath}/editCustomer.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"editCustomer","true",`./${screenshotPath}/editCustomer.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/editCustomer.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"editCustomer","false",`./${screenshotPath}/editCustomer.png`)
          }
  
  await page.reload();
  console.log("edit customer completed");
}
async function deleteCustomer(page){
  console.log("Enter in delete customer");
  // await page.getByRole('button', { name: 'Sales' }).click();
  // await page.waitForTimeout(1000);
  // await page.getByRole('link', { name: 'Customers' }).first().click();
  await page.getByRole('button', { name: 'Delete' }).first().click();
  await expect(page.getByText('Customer deleted successfully')).toBeVisible();
  await page.reload();
    await page.waitForTimeout(3000);
    
     if (!await page.getByText('Arjun Singh',{exact:true}).isVisible()) 
       {
            await page.screenshot({ path: `./${screenshotPath}/deleteCustomer.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"deleteCustomer","true",`./${screenshotPath}/deleteCustomer.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/deleteCustomer.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"deleteCustomer","false",`./${screenshotPath}/deleteCustomer.png`)
          }
  
  await page.reload();
  console.log('delete customer completed');
}