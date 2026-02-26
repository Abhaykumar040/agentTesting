import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/customerfsm`;
const pathName=`outputData/status/${testData.companyType}`


export async function customerfsm(page){
   await deletePreviousCustomer(page);
     await page.waitForTimeout(3000);
    //  await customerDownload(page);
    //    await page.waitForTimeout(3000);
    await createFsmCustomer(page);
    await page.waitForTimeout(3000);
    await editFsmCustomer(page);
    await page.waitForTimeout(3000);
    await deleteFsmCustomer(page);
    await page.waitForTimeout(3000);
    await addressCreateFsmCustomerCommercial(page);
    await page.waitForTimeout(3000);
    await addressCreateFsmCustomerIndividual(page);
    await page.waitForTimeout(3000);
    await jobCreateFsmCustomer(page);
    await page.waitForTimeout(3000);
    await cyclicJobCreateFsmCustomer(page);
    await page.waitForTimeout(3000);
    await contactDetailsFsmCustomer(page);
    await page.waitForTimeout(3000);
    await documentsUploadFsmCustomer(page);
}

async function createFsmCustomer(page) {
  console.log('Enter in create fsm customer');
  //  await page.getByRole('button', { name: 'Field Service' }).click();
  // await page.getByRole('link', { name: 'Customers' }).click();
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
              await page.screenshot({ path: `./${screenshotPath}/createFsmCustomer.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"createFsmCustomer","true",`./${screenshotPath}/createFsmCustomer.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/createFsmCustomer.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"createFsmCustomer","false",`./${screenshotPath}/createFsmCustomer.png`)
            }
    
    await page.reload();
   console.log('create fsm customer completed');
}

async function editFsmCustomer(page){
  console.log('Enter in edit fsm customer');
  // await page.getByRole('button', { name: 'Field Service' }).click();
  // await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('combobox', { name: 'Select Customer Type' }).click();
  await page.getByRole('option', { name: 'commercial' }).click();
   await page.getByRole('row', { name: 'Sushil Singh akbk6551+1218@' }).getByLabel('Edit').click();
  await page.getByRole('button', { name: 'Dealer Information' }).click();
  await page.getByRole('textbox', { name: 'Trade Name' }).click();
  await page.getByRole('textbox', { name: 'Trade Name' }).fill('inTES');
  await page.getByRole('button', { name: 'Dealer Type' }).click();
  await page.getByRole('option', { name: 'Branch' }).click();
  await page.getByRole('button', { name: 'Facilities' }).click();
  await page.getByRole('option', { name: 'Premium', exact: true }).click();
  await page.getByText('Basic InformationCustomer IDTitle *Ms.Person In Charge *Company NameDealer').click();
  await page.getByRole('button', { name: 'Contact Information' }).click();
  await page.getByRole('textbox', { name: 'Alternate Phones' }).click();
  await page.getByRole('textbox', { name: 'Alternate Phones' }).fill('7896354125');
  await page.getByRole('textbox', { name: 'Alternate Emails' }).click();
  await page.getByRole('textbox', { name: 'Alternate Emails' }).fill('skdh@gmail.com');
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Ghosia market');
  await page.getByRole('button', { name: 'Management Information' }).click();
  await page.getByRole('textbox', { name: 'Area Manager' }).click();
  await page.getByRole('textbox', { name: 'Area Manager' }).fill('Anil');
  await page.getByRole('textbox', { name: 'Regional Manager' }).click();
  await page.getByRole('textbox', { name: 'Regional Manager' }).fill('Sunil');
  await page.getByRole('button', { name: 'Tax Information' }).click();
  await page.getByRole('textbox', { name: 'Tax Type', exact: true }).click();
  await page.getByRole('textbox', { name: 'Tax Type', exact: true }).fill('GST');
  await page.getByRole('textbox', { name: 'Tax Type Number' }).click();
  await page.getByRole('textbox', { name: 'Tax Type Number' }).fill('789635');
  await page.getByRole('textbox', { name: 'PAN', exact: true }).click();
  await page.getByRole('textbox', { name: 'PAN', exact: true }).fill('KUIPM1241J');
  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(1000);
    if (await page.getByText('Customer updated successfully').isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/editFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"editFsmCustomer","true",`./${screenshotPath}/editFsmCustomer.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/editFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"editFsmCustomer","false",`./${screenshotPath}/editFsmCustomer.png`)
    }
      
    await page.reload();
    console.log('edit fsm customer completed');
}

async function deleteFsmCustomer(page) {
  console.log('Enter in delete customer in Field service');
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page
  .locator('tbody tr')
  .first()
  .getByRole('button', { name: 'Delete' })
  .click();
  await page.getByText('Customer deleted successfully').click();
  await page.waitForTimeout(1000);
   if (await page.getByText('Customer deleted successfully',{exact:true}).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/deleteFsmCustomer.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteFsmCustomer","true",`./${screenshotPath}/deleteFsmCustomer.png`)
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/deleteFsmCustomer.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteFsmCustomer","false",`./${screenshotPath}/deleteFsmCustomer.png`)
  }
  await page.reload();
  console.log('Deleted customer in Field service');
}

async function deletePreviousCustomer(page){
  console.log("Enter in delete previous customer");
  await page.getByRole('button', { name: 'Field Service' }).click();
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

async function addressCreateFsmCustomerCommercial(page){
  console.log('Enter in address createFsmCustomer');
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('combobox', { name: 'Select Customer Type' }).click();
  await page.getByRole('option', { name: 'commercial' }).click();
   await page.getByRole('row', { name: 'Sushil Singh akbk6551+1218@' }).getByLabel('Edit').click();
  await page.getByRole('tab', { name: 'Address' }).click();
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria');
  await page.waitForTimeout(2000);
  await page.getByRole('listitem').filter({ hasText: /^Khamaria, Uttar Pradesh, India$/ }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Mukundpatti');
  await page.getByText('Make this default shipping').click();
  await page.getByRole('button', { name: 'Save' }).click();

  // await page.getByRole('button', { name: 'Add new address' }).click();
  // await page.getByRole('textbox', { name: 'Search for a location' }).click();
  // await page.getByRole('textbox', { name: 'Search for a location' }).fill('mumbai');
  // await page.getByText('Mumbai, Maharashtra, India', { exact: true }).click();
  // await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  // await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Borivali');
  // await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).click();
  // await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).fill('320001');
  // await page.getByRole('checkbox', { name: 'Make this default shipping' }).check();
  // await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.getByText('Billing AddressBilling').click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('jamnagar');
  await page.waitForTimeout(2000);
  await page.getByText('Jamnagar, Gujarat, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Jamnagar');
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).click();
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).fill('300120');
  await page.getByText('Make this default billing').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.locator('div').filter({ hasText: /^Billing AddressBilling address info here$/ }).nth(1).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('prayagraj');
  await page.waitForTimeout(2000);
  await page.getByText('Prayagraj, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('mundera bajar');
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).click();
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).fill('221406');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('bhadohi');
  await page.waitForTimeout(2000);
  await page.getByRole('listitem').filter({ hasText: 'Bhadohi, Uttar Pradesh, India' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Gopiganj');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
    if (await page.getByText('Address Added successfully').isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/addressCreateFsmCustomerCommercial.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"addressCreateFsmCustomerCommercial","true",`./${screenshotPath}/addressCreateFsmCustomerCommercial.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/addressCreateFsmCustomerCommercial.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"addressCreateFsmCustomerCommercial","false",`./${screenshotPath}/addressCreateFsmCustomerCommercial.png`)
    }
    await page.reload();
  console.log('Address createFsmCustomer completed');
}

async function addressCreateFsmCustomerIndividual(page){
  console.log('Enter in address create fsm customer individiual');
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
   await page.getByRole('row', { name: 'Anil Rathor akbk6551+1136@' }).getByLabel('Edit').click();
  await page.getByRole('tab', { name: 'Address' }).click();
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('mumbai');
  await page.waitForTimeout(2000);
  await page.getByText('Mumbai, Maharashtra, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Borivali');
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).click();
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).fill('320001');
  await page.getByRole('checkbox', { name: 'Make this default shipping' }).check();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.getByText('Billing AddressBilling').click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('jamnagar');
  await page.waitForTimeout(2000);
  await page.getByText('Jamnagar, Gujarat, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Jamnagar');
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).click();
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).fill('300120');
  await page.getByText('Make this default billing').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.locator('div').filter({ hasText: /^Billing AddressBilling address info here$/ }).nth(1).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('prayagraj');
  await page.waitForTimeout(2000);
  await page.getByText('Prayagraj, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('mundera bajar');
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).click();
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).fill('221406');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('bhadohi');
  await page.waitForTimeout(2000);
  await page.getByRole('listitem').filter({ hasText: 'Bhadohi, Uttar Pradesh, India' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Gopiganj');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  if (await page.getByText('Address Added successfully').isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/addressCreateFsmCustomerIndividual.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addressCreateFsmCustomerIndividual","true",`./${screenshotPath}/addressCreateFsmCustomerIndividual.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/addressCreateFsmCustomerIndividual.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addressCreateFsmCustomerIndividual","false",`./${screenshotPath}/addressCreateFsmCustomerIndividual.png`)
  }
  await page.reload();
  console.log('Address create fsm customer individiual completed');
}

async function jobCreateFsmCustomer(page){
  console.log('Enter in jobCreateFsmCustomer');
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('combobox', { name: 'Select Customer Type' }).click();
  await page.getByRole('option', { name: 'commercial' }).click();
   await page.getByRole('row', { name: 'Sushil Singh akbk6551+1218@' }).getByLabel('Edit').click();
    await page.getByRole('tab', { name: 'Job Details' }).click();
  await page.getByRole('link', { name: 'Add New Job' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Mukundpatti' }).click();
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation6' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).fill('Installation');
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'least - Low installationX' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('Installation process');
  await page.getByRole('button', { name: 'Status Profile' }).click();
  await page.getByRole('option', { name: 'In progressX - In progressDX' }).click();
  await page.getByRole('textbox', { name: 'Start Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Wednesday, February 18th,' }).click();
  await page.getByText('01:15').click();
  await page.getByRole('textbox', { name: 'End Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Friday, February 20th,' }).click();
  await page.getByText('14:45').click();
  await page.getByRole('radio', { name: 'Engineer' }).check();
  await page.getByRole('button', { name: 'Engineer' }).click();
  await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('button', { name: '+ Add Skill' }).click();
  await page.getByRole('button', { name: 'Skill', exact: true }).click();
  await page.getByRole('option', { name: 'Embedded Systems' }).click();
  await page.getByRole('button', { name: 'Person Responsible' }).click();
  await page.getByRole('option', { name: 'suhani singh' }).first().click();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  // await page.getByText('Job created successfully').click();
  await page.waitForTimeout(1000);
    if (await page.getByText('Job created successfully').isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/jobCreateFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"jobCreateFsmCustomer","true",`./${screenshotPath}/jobCreateFsmCustomer.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/jobCreateFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"jobCreateFsmCustomer","false",`./${screenshotPath}/jobCreateFsmCustomer.png`)
    }
    await page.reload();
  console.log('job create fsm customer completed');
}

async function cyclicJobCreateFsmCustomer(page){
  console.log('Enter in cyclic job create fsm customer');
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('combobox', { name: 'Select Customer Type' }).click();
  await page.getByRole('option', { name: 'commercial' }).click();
   await page.getByRole('row', { name: 'Sushil Singh akbk6551+1218@' }).getByLabel('Edit').click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.getByRole('button', { name: 'Create Cyclic Job' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).fill('Installation');
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Mukundpatti' }).click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Installation');
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation6' }).click();
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'least' }).click();
  await page.getByRole('combobox', { name: 'Asset' }).click();
  await page.getByRole('combobox', { name: 'Asset' }).click();
  await page.getByRole('button', { name: 'Soldering & Rework' }).click();
  await page.getByRole('button', { name: 'Embedded Systems' }).click();
  await page.getByRole('button', { name: 'Frequency Type Daily' }).click();
  await page.getByRole('option', { name: 'Weekly' }).click();
  await page.getByRole('button', { name: 'Sun' }).click();
  await page.getByRole('textbox', { name: 'Schedule Start Date' }).fill('2026-03-22');
  await page.getByRole('textbox', { name: 'Schedule End Date' }).fill('2026-03-30');
  await page.getByRole('button', { name: 'Create Job' }).click();
  await page.waitForTimeout(2000);
    if (await page.getByText('Cyclic job created').isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/cyclicJobCreateFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"cyclicJobCreateFsmCustomer","true",`./${screenshotPath}/cyclicJobCreateFsmCustomer.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/cyclicJobCreateFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"cyclicJobCreateFsmCustomer","false",`./${screenshotPath}/cyclicJobCreateFsmCustomer.png`)
    }
    await page.reload();
  console.log('cyclic job create fsm customer');
}

async function contactDetailsFsmCustomer(page){
  console.log('Enter in contact detail fsm customer');
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
   await page.getByRole('row', { name: 'Sushil Singh akbk6551+1218@' }).getByLabel('Edit').click();
   await page.getByRole('tab', { name: 'Contact Details' }).click();
  await page.getByRole('button', { name: 'Add Contact' }).click();
  await page.getByRole('button', { name: 'Primary Contact' }).click();
  await page.getByRole('option', { name: 'Billing' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Sushima');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('akbk6551+12122@gmail.com');
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).press('NumLock');
  await page.getByRole('textbox', { name: 'Phone number' }).fill('7896541236');
  await page.locator('.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-3.css-eic2kq > div:nth-child(5) > .MuiFormControl-root > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Additional notes about this' }).fill('Personal Assistance');
  await page.getByRole('button', { name: 'Add Contact' }).click();
  await page.waitForTimeout(3000);
    if (await page.getByText('Jay kumar Showroom Delete').isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/contactDetailsFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"contactDetailsFsmCustomer","true",`./${screenshotPath}/contactDetailsFsmCustomer.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/contactDetailsFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"contactDetailsFsmCustomer","false",`./${screenshotPath}/contactDetailsFsmCustomer.png`)
    }
    await page.reload();
  console.log('contact detail fsm customer completed');
}

async function documentsUploadFsmCustomer(page){
  console.log('Enter in documents Upload fsm customer');
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('combobox', { name: 'Select Customer Type' }).click();
  await page.getByRole('option', { name: 'commercial' }).click();
   await page.getByRole('row', { name: 'Sushil Singh akbk6551+1218@' }).getByLabel('Edit').click();
    await page.getByRole('tab', { name: 'Documents' }).click();
  await page.getByRole('button', { name: 'Browse Files' }).click();
  await page.locator('input[type="file"]').setInputFiles('./download1/leads.xlsx');
  await page.getByRole('button', { name: 'Upload Files' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Documents' }).click();
  await page.waitForTimeout(1000);
    if (await page.getByRole('link', { name: 'leads.xlsx' }).isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/documentsUploadFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"documentsUploadFsmCustomer","true",`./${screenshotPath}/documentsUploadFsmCustomer.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/documentsUploadFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"documentsUploadFsmCustomer","false",`./${screenshotPath}/documentsUploadFsmCustomer.png`)
    }
    await page.reload();
  // await page.getByRole('button', { name: 'Cancel' }).click();
  console.log('documents Upload fsm customer');
}
