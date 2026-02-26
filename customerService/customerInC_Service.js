import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/customerinC_Service`;
const pathName=`outputData/priority/${testData.companyType}`

export async function customerInC_service(page) {
  // await deletePreviuosCustomerInC_Service(page);
  // await page.waitForTimeout(3000);
  await addCustomerInC_Service(page);
  await page.waitForTimeout(3000);
  await emailCustomerInC_Service(page)
  await page.waitForTimeout(3000);
  await editCustomerInC_Service(page);
  await page.waitForTimeout(3000);
  await deleteCustomerInC_Service(page);
  await exportCustomerInC_ServiceNormal(page)
  await page.waitForTimeout(3000);
  await exportCustomerInC_ServiceFilter(page)

}

async function addCustomerInC_Service(page) {
  console.log('Enter in add customer in customer service');
  await page.getByRole('button', { name: 'Customer Service' }).click();
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
  //  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803941');
  // await page.getByRole('button', { name: 'Select Access Method' }).click();
    // await page.waitForTimeout(1000);
    
  await page.getByRole('radio', { name: 'Email' }).check();
  // await page.getByRole('option', { name: 'Email' }).click();
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
  // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803941');
  // await page.getByRole('button', { name: 'Select Access Method' }).click();
    // await page.waitForTimeout(1000);
  
  await page.getByRole('radio', { name: 'Email' }).check();
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
  // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9802948');
  // await page.getByRole('button', { name: 'Select Access Method' }).click();
    // await page.waitForTimeout(1000);
  
await page.getByRole('radio', { name: 'Email' }).check();
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
  // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803998');
  // await page.getByRole('button', { name: 'Select Access Method' }).click();
    // await page.waitForTimeout(1000);
  
await page.getByRole('radio', { name: 'Email' }).check();
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
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834794787');
  // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803148');
  // await page.getByRole('button', { name: 'Select Access Method' }).click();
    // await page.waitForTimeout(1000);
await page.getByRole('radio', { name: 'Email' }).check();
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
  // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803248');
  // await page.getByRole('button', { name: 'Select Access Method' }).click();
    // await page.waitForTimeout(1000);
await page.getByRole('radio', { name: 'Email' }).check();
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
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1109@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724767');
  // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803948');
  // await page.getByRole('button', { name: 'Select Access Method' }).click();
    // await page.waitForTimeout(1000);
await page.getByRole('radio', { name: 'Email' }).check();
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
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9103456789');
  // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('98039481');
  // await page.getByRole('button', { name: 'Select Access Method' }).click();
    // await page.waitForTimeout(1000);
await page.getByRole('radio', { name: 'Email' }).check();
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
    // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
    // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('98039482');
    // await page.getByRole('button', { name: 'Select Access Method' }).click();
      // await page.waitForTimeout(1000);
  await page.getByRole('radio', { name: 'Email' }).check();
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
    await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1141@gmail.com');
    await page.getByRole('textbox', { name: 'Phone *' }).click();
    await page.getByRole('textbox', { name: 'Phone *' }).click();
    await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724791');
    // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
    // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('98039483');
    // await page.getByRole('button', { name: 'Select Access Method' }).click();
      // await page.waitForTimeout(1000);
  await page.getByRole('radio', { name: 'Email' }).check();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('textbox', { name: 'Search for a location' }).click();
      await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
    await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
    await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria');
    await page.getByRole('button', { name: 'Next' }).click();
   await page.getByRole('button', { name: 'Create Customer' }).click(); 
    
  // await page.reload();
      await page.waitForTimeout(3000);
      
       if (await page.getByText('akbk6551+1141@gmail.com',{exact:true}).isVisible()
          ) 
         {
              await page.screenshot({ path: `./${screenshotPath}/addCustomerInC_Service.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"addCustomerInC_Service","true",`./${screenshotPath}/addCustomerInC_Service.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/addCustomerInC_Service.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"addCustomerInC_Service","false",`./${screenshotPath}/addCustomerInC_Service.png`)
            }
    
    await page.reload();
  console.log('Add customer in customer service');
}


async function emailCustomerInC_Service(page){
  console.log('Enter in email customer in customer service');
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click()
  await page.getByRole('row', { name: 'Kolpit Rathor akbk6551+1141@' }).getByLabel('Email not verified').click();
  await page.waitForTimeout(1000);
  if (await page.getByText('Onboarding email resent').isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/emailCustomerInC_Service.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"emailCustomerInC_Service","true",`./${screenshotPath}/emailCustomerInC_Service.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/emailCustomerInC_Service.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"emailCustomerInC_Service","false",`./${screenshotPath}/emailCustomerInC_Service.png`)
  }
    
  await page.reload();
  console.log('Email customer in customer service');
}

async function editCustomerInC_Service(page){
  console.log('Enter in edit customer in customer in service');
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click()
 await page.getByRole('row', { name: 'Kolpit Rathor akbk6551+1141@' }).getByLabel('Edit').click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Anil');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Dubey');
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('khamaria Market');
  await page.getByRole('textbox', { name: 'Address Line 2' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2' }).fill('Khalavapur');
  await page.getByRole('button', { name: 'Tax Information' }).click();
  await page.getByRole('textbox', { name: 'Tax Type', exact: true }).click();
  await page.getByRole('textbox', { name: 'Tax Type', exact: true }).fill('GST');
  await page.getByRole('textbox', { name: 'Tax Type Number' }).click();
  await page.getByRole('textbox', { name: 'Tax Type Number' }).fill('656945');
  await page.getByRole('textbox', { name: 'PAN' }).click();
  await page.getByRole('textbox', { name: 'PAN' }).fill('KJIPM2313H');
  await page.getByRole('button', { name: 'Contact Information' }).click();
  await page.getByRole('button', { name: 'Contact Preference' }).click();
  await page.getByRole('option', { name: 'Phone' }).click();
  await page.getByRole('button', { name: 'Best Time to Contact' }).click();
  await page.getByRole('option', { name: 'Morning' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('tab', { name: 'Address' }).click();
   await page.getByRole('button', { name: 'Add new address' }).click();
  await page.getByText('Site AddressSite address info').click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria');
  await page.getByText('Khamaria, Uttar Pradesh, India', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('E-hill company');
  await page.getByText('Make this default shipping').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  if (await page.getByText('Address Added successfully',{exact:true}).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/editCustomerInC_Service.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editCustomerInC_Service(Address)","true",`./${screenshotPath}/editCustomerInC_Service(Address).png`)
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editCustomerInC_Service(Address).png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editCustomerInC_Service(Address)","false",`./${screenshotPath}/editCustomerInC_Service(Address).png`)
  }
  // await page.reload();

  await page.getByRole('tab', { name: 'Support Tickets' }).click();
  await page.getByRole('button', { name: 'New Case' }).click();
  await page.getByRole('textbox', { name: 'Enter case title' }).click();
  await page.getByRole('textbox', { name: 'Enter case title' }).fill('power issue');
  await page.getByRole('combobox', { name: 'Search or type customer email' }).click();
  await page.getByRole('combobox', { name: 'Search or type customer email' }).click();
  await page.getByRole('option', { name: 'Anil Rathor (akbk6551+1136@' }).click();
  await page.getByRole('button', { name: 'Select Case Issue' }).click();
  await page.getByRole('option', { name: 'Product Not Working8' }).click();
  await page.getByRole('button', { name: 'Select Priority' }).click();
  await page.getByRole('option', { name: 'createdSupport2' }).click();
  await page.getByRole('button', { name: 'Select Status Profile' }).click();
  await page.getByRole('option', { name: 'Open' }).click();
  await page.getByRole('button', { name: 'Portal' }).click();
  await page.getByRole('option', { name: 'Phone' }).click();
  await page.getByRole('textbox', { name: 'Describe the case in detail...' }).click();
  await page.getByRole('textbox', { name: 'Describe the case in detail...' }).fill('Power issue');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Select an Agent' }).click();
  await page.getByRole('option', { name: 'Jay kumar Rathor' }).click();
  await page.getByRole('button', { name: 'Next: SLA' }).click();
  await page.getByRole('button', { name: 'Select SLA' }).click();
  await page.getByRole('option', { name: 'Critical / Breakdown Issue' }).click();
  await page.getByRole('button', { name: 'Create Case' }).click();
  await page.waitForTimeout(1000);
   if (await page.getByText('Support Case created successfully').isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/editCustomerInC_Service(Ticket).png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editCustomerInC_Service(Ticket)","true",`./${screenshotPath}/editCustomerInC_Service(Ticket).png`)
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editCustomerInC_Service(Ticket).png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editCustomerInC_Service(Ticket)","false",`./${screenshotPath}/editCustomerInC_Service(Ticket).png`)
  }
  console.log('edit customer in customer in customer service completed');
}

async function deleteCustomerInC_Service(page) {
  console.log('Enter in delete customer in customer service');
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click()
  await page
  .locator('tbody tr')
  .first()
  .getByRole('button', { name: 'Delete' })
  .click();
  await page.getByText('Customer deleted successfully').click();
  await page.waitForTimeout(1000);
   if (await page.getByText('Customer deleted successfully',{exact:true}).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/deleteCustomerInC_Service.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteCustomerInC_Service","true",`./${screenshotPath}/deleteCustomerInC_Service.png`)
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/deleteCustomerInC_Service.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteCustomerInC_Service","false",`./${screenshotPath}/deleteCustomerInC_Service.png`)
  }
  await page.reload();
  console.log('Deleted customer in customer service');
}

async function deletePreviuosCustomerInC_Service(page){
  console.log("Enter in delete previou customer");
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click()
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
    await page
    .locator('tbody tr')
    .first()
    .getByRole('button', { name: 'Delete' })
    .click();
     await page.waitForTimeout(2000);
  }
await page.reload();
console.log("delete previous customer completed");
}

async function exportCustomerInC_ServiceNormal(page) {
  console.log('Enter in export normal in CS');
  const [excelDownload] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload.saveAs('downloads/exportExcelCustomerInC_ServiceNormal.xlsx');

  // pdf file
 const [pdfDownload] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload.saveAs('downloads/exportPDFCustomerInC_ServiceNormal.pdf');
  //  await page.waitForTimeout(1000);
  if (await page.getByText('akbk6551+1139@gmail.com',{exact:true}).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportCustomerInC_ServiceNormal.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportCustomerInC_ServiceNormal","true",`./${screenshotPath}/exportCustomerInC_ServiceNormal.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportCustomerInC_ServiceNormal.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportCustomerInC_ServiceNormal","false",`./${screenshotPath}/exportCustomerInC_ServiceNormal.png`)
  }
  console.log('export nomal in CS completed');
  await page.reload();
}


async function exportCustomerInC_ServiceFilter(page) {
  console.log('Enter in export excel of customer in c_service'); 
  await page.getByRole('combobox', { name: 'Select State' }).click();
  await page.getByRole('option', { name: 'Uttar Pradesh' }).click();
  await page.getByRole('combobox', { name: 'Select City' }).click();
  await page.getByRole('option', { name: 'Aurai' }).click();
  const [excelDownload1] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload1.saveAs('downloads/exportExcelCustomerInC_ServiceFilter1.xlsx');

  // pdf file
 const [pdfDownload1] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload1.saveAs('downloads/exportPDFCustomerInC_ServiceFilter1.pdf');

  //  await page.waitForTimeout(1000);
  if (await page.getByText('akbk6551+1222@gmail.com',{exact:true}).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportCustomerInC_ServiceFilter.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportCustomerInC_ServiceFilter","true",`./${screenshotPath}/exportCustomerInC_ServiceFilter.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportCustomerInC_ServiceFilter.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportCustomerInC_ServiceFilter","false",`./${screenshotPath}/exportCustomerInC_ServiceFilter.png`)
  }
    
  await page.reload();


  await page.getByRole('combobox', { name: 'Select Customer Type' }).click();
  await page.getByRole('option', { name: 'commercial' }).click();
  const [excelDownload2] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload2.saveAs('downloads/exportExcelCustomerInC_ServiceFilter2.xlsx');

  // pdf file
 const [pdfDownload2] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload2.saveAs('downloads/exportPDFCustomerInC_ServiceFilter2.pdf');
  //  await page.waitForTimeout(1000);
  if (await page.getByText('akbk6551+1222@gmail.com',{exact:true}).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportCustomerInC_ServiceFilter2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportCustomerInC_ServiceFilter2","true",`./${screenshotPath}/exportCustomerInC_ServiceFilter2.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportCustomerInC_ServiceFilter2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportCustomerInC_ServiceFilter2","false",`./${screenshotPath}/exportCustomerInC_ServiceFilter2.png`)
  }
    
  await page.reload();


  await page.getByRole('combobox', { name: 'Select Customer', exact: true }).click();
  await page.getByRole('option', { name: 'Anil Rathor' }).click();
  const [excelDownload3] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload3.saveAs('downloads/exportExcelCustomerInC_ServiceFilter3.xlsx');

  // pdf file
 const [pdfDownload3] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload3.saveAs('downloads/exportPDFCustomerInC_ServiceFilter3.pdf');
  if (await page.getByText('akbk6551+1136@gmail.com',{exact:true}).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportCustomerInC_ServiceFilter3.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportCustomerInC_ServiceFilter3","true",`./${screenshotPath}/exportCustomerInC_ServiceFilter3.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportCustomerInC_ServiceFilter3.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportCustomerInC_ServiceFilter3","false",`./${screenshotPath}/exportCustomerInC_ServiceFilter3.png`)
  }
    
  await page.reload();

  await page.getByRole('combobox', { name: 'Select Dealer Code' }).click();
  await page.getByRole('option', { name: '1275836' }).click();
  const [excelDownload4] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload4.saveAs('downloads/exportExcelCustomerInC_ServiceFilter4.xlsx');

  // pdf file
 const [pdfDownload4] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload4.saveAs('downloads/exportPDFCustomerInC_ServiceFilter4.pdf');
  if (await page.getByText('akbk6551+1222@gmail.com',{exact:true}).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportCustomerInC_ServiceFilter4.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportCustomerInC_ServiceFilter4","true",`./${screenshotPath}/exportCustomerInC_ServiceFilter4.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportCustomerInC_ServiceFilter4.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportCustomerInC_ServiceFilter4","false",`./${screenshotPath}/exportCustomerInC_ServiceFilter4.png`)
  }
    
  await page.reload();
  await expect(page.getByText('akbk6551+1222@gmail.com')).toBeVisible();
  console.log('Export excel of customer in c_service is completed');
}