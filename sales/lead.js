import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';
import { globalExportDocument } from '../globalExportDocument';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/lead`;
const pathName=`outputData/status/${testData.companyType}`


export async function lead(page){
  // await addLead(page);
  // await page.waitForTimeout(3000);
  // await editLead(page);
  // await page.waitForTimeout(3000);
  // await emailThreadInLead(page);
  // await page.waitForTimeout(3000);
  // await activityInLead(page);
  // await page.waitForTimeout(3000);
  await documentInLead(page); 
  await page.waitForTimeout(3000); 
  await exportLeadFileNormal(page);
  await page.waitForTimeout(3000); 
  await exportLeadFileFilter(page);
  await importLead(page);
}


async function addLead(page){
  console.log("Enter in add lead");
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Lead Management' }).first().click();
  await page.getByRole('button', { name: 'Quick Create' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Anjali');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Rathor');
  await page.getByRole('combobox', { name: 'Search or add title' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1226@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('8978346542');
  await page.getByRole('combobox', { name: 'Search or add industry' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).fill('sells');
  await page.getByRole('button', { name: 'Lead Source' }).click();
  await page.getByRole('option', { name: 'Email Campaign' }).click();
  await page.getByRole('button', { name: 'Lead Rating' }).click();
  await page.getByRole('option', { name: 'Warm' }).click();
  await page.getByRole('button', { name: 'Sales Agent' }).click();
  await page.getByRole('option', { name: 'Mahesh Kumar' }).click();
  await page.getByRole('textbox', { name: 'Referral' }).click();
  await page.getByRole('textbox', { name: 'Referral' }).fill('Jay Rathor');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Wants to streamline charger delivery');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.waitForTimeout(1000);
  await page.getByText('Khamaria, Madhya Pradesh,').click();
  await page.locator('.gm-style > div > div:nth-child(2)').first().click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('khamaria');
  await page.getByRole('textbox', { name: 'Post Code' }).click();
  await page.getByRole('textbox', { name: 'Post Code' }).fill('221307');
  await page.getByRole('button', { name: 'Create Lead' }).click();
  // await expect(page.getByText('Lead created successfully')).toBeVisible()
 await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Quick Create' }).click();
  await page.getByRole('tab', { name: 'Details' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Aman');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Yadav');
  await page.getByRole('combobox', { name: 'Search or add title' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1227@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('8178346542');
  await page.getByRole('combobox', { name: 'Search or add industry' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).fill('sells');
  await page.getByRole('button', { name: 'Lead Source' }).click();
  await page.getByRole('option', { name: 'Email Campaign' }).click();
  await page.getByRole('button', { name: 'Lead Rating' }).click();
  await page.getByRole('option', { name: 'Warm' }).click();
  await page.getByRole('button', { name: 'Sales Agent' }).click();
  await page.getByRole('option', { name: 'Mahesh Kumar' }).click();
  await page.getByRole('textbox', { name: 'Referral' }).click();
  await page.getByRole('textbox', { name: 'Referral' }).fill('Jay Rathor');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Inquiry on charger product pricing');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.waitForTimeout(1000);
  await page.getByText('Khamaria, Madhya Pradesh,').click();
  await page.locator('.gm-style > div > div:nth-child(2)').first().click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('khamaria');
  await page.getByRole('textbox', { name: 'Post Code' }).click();
  await page.getByRole('textbox', { name: 'Post Code' }).fill('221307');
  await page.getByRole('button', { name: 'Create Lead' }).click();
  // await expect(page.getByText('Lead created successfully')).toBeVisible()

  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Quick Create' }).click();
  await page.getByRole('tab', { name: 'Details' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Rajesh');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Rathor');
  await page.getByRole('combobox', { name: 'Search or add title' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1228@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('8478346542');
  await page.getByRole('combobox', { name: 'Search or add industry' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).fill('sells');
  await page.getByRole('button', { name: 'Lead Source' }).click();
  await page.getByRole('option', { name: 'Email Campaign' }).click();
  await page.getByRole('button', { name: 'Lead Rating' }).click();
  await page.getByRole('option', { name: 'Warm' }).click();
  await page.getByRole('button', { name: 'Sales Agent' }).click();
  await page.getByRole('option', { name: 'Mahesh Kumar' }).click();
  await page.getByRole('textbox', { name: 'Referral' }).click();
  await page.getByRole('textbox', { name: 'Referral' }).fill('Jay Rathor');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Interested in new fast charger tech');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.getByText('Khamaria, Madhya Pradesh,').click();
  await page.waitForTimeout(1000);
  await page.locator('.gm-style > div > div:nth-child(2)').first().click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('khamaria');
  await page.getByRole('textbox', { name: 'Post Code' }).click();
  await page.getByRole('textbox', { name: 'Post Code' }).fill('221307');
  await page.getByRole('button', { name: 'Create Lead' }).click();
  // await expect(page.getByText('Lead created successfully')).toBeVisible();
  
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Quick Create' }).click();
  await page.getByRole('tab', { name: 'Details' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Jitendra');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Tyagi');
  await page.getByRole('combobox', { name: 'Search or add title' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1229@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('8678346542');
  await page.getByRole('combobox', { name: 'Search or add industry' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).fill('sells');
  await page.getByRole('button', { name: 'Lead Source' }).click();
  await page.getByRole('option', { name: 'Email Campaign' }).click();
  await page.getByRole('button', { name: 'Lead Rating' }).click();
  await page.getByRole('option', { name: 'Warm' }).click();
  await page.getByRole('button', { name: 'Sales Agent' }).click();
  await page.getByRole('option', { name: 'Mahesh Kumar' }).click();
  await page.getByRole('textbox', { name: 'Referral' }).click();
  await page.getByRole('textbox', { name: 'Referral' }).fill('Mahesh');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Looking for bulk charger supply');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.waitForTimeout(1000);
  await page.getByText('Khamaria, Madhya Pradesh,').click();
  await page.locator('.gm-style > div > div:nth-child(2)').first().click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('khamaria');
  await page.getByRole('textbox', { name: 'Post Code' }).click();
  await page.getByRole('textbox', { name: 'Post Code' }).fill('221307');
  await page.getByRole('button', { name: 'Create Lead' }).click();
  // await expect(page.getByText('Lead created successfully')).toBeVisible()
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Quick Create' }).click();
  await page.getByRole('tab', { name: 'Details' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Anjali');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Rathor');
  await page.getByRole('combobox', { name: 'Search or add title' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1230@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('8778346542');
  await page.getByRole('combobox', { name: 'Search or add industry' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).fill('sells');
  await page.getByRole('button', { name: 'Lead Source' }).click();
  await page.getByRole('option', { name: 'Email Campaign' }).click();
  await page.getByRole('button', { name: 'Lead Rating' }).click();
  await page.getByRole('option', { name: 'Warm' }).click();
  await page.getByRole('button', { name: 'Sales Agent' }).click();
  await page.getByRole('option', { name: 'Mahesh Kumar' }).click();
  await page.getByRole('textbox', { name: 'Referral' }).click();
  await page.getByRole('textbox', { name: 'Referral' }).fill('Mahesh');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Wants to discuss custom charger R&D');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.waitForTimeout(1000);
  await page.getByText('Khamaria, Madhya Pradesh,').click();
  await page.locator('.gm-style > div > div:nth-child(2)').first().click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('khamaria');
  await page.getByRole('textbox', { name: 'Post Code' }).click();
  await page.getByRole('textbox', { name: 'Post Code' }).fill('221307');
  await page.getByRole('button', { name: 'Create Lead' }).click();
  // await expect(page.getByText('Lead created successfully')).toBeVisible();
await page.waitForTimeout(1000); 

 await page.getByRole('button', { name: 'Quick Create' }).click();
  await page.getByRole('tab', { name: 'Details' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Jogendar');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Maurya');
  await page.getByRole('combobox', { name: 'Search or add title' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1231@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('8988346542');
  await page.getByRole('combobox', { name: 'Search or add industry' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).fill('sells');
  await page.getByRole('button', { name: 'Lead Source' }).click();
  await page.getByRole('option', { name: 'Email Campaign' }).click();
  await page.getByRole('button', { name: 'Lead Rating' }).click();
  await page.getByRole('option', { name: 'Warm' }).click();
  await page.getByRole('button', { name: 'Sales Agent' }).click();
  await page.getByRole('option', { name: 'Mahesh Kumar' }).click();
  await page.getByRole('textbox', { name: 'Referral' }).click();
  await page.getByRole('textbox', { name: 'Referral' }).fill('Jay Rathor');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Interested in charger quality standards');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.waitForTimeout(1000);
  await page.getByText('Khamaria, Madhya Pradesh,').click();
  await page.locator('.gm-style > div > div:nth-child(2)').first().click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('khamaria');
  await page.getByRole('textbox', { name: 'Post Code' }).click();
  await page.getByRole('textbox', { name: 'Post Code' }).fill('221307');
  await page.getByRole('button', { name: 'Create Lead' }).click();
  // await expect(page.getByText('Lead created successfully')).toBeVisible()
  await page.reload();
      await page.waitForTimeout(2000);
      
       if (await page.getByText('akbk6551+1230@gmail.com',{exact:true}).isVisible()) 
         {
              await page.screenshot({ path: `./${screenshotPath}/addLead.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"addLead","true",`./${screenshotPath}/addLead.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/addLead.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"addLead","false",`./${screenshotPath}/addLead.png`)
            }
    
    await page.reload();

  // await page.waitForTimeout(1000);
  console.log("Add lead completed");
}


async function editLead(page){
  console.log("Enter in edit lead");
  await page.waitForTimeout(1000);
  await page.getByText('akbk6551+1230@gmail.com').click();
  await page.getByRole('button', { name: 'Edit Lead' }).click();
  await page.locator('input[name="lastName"]').click();
  await page.locator('input[name="lastName"]').fill('Rathor Edited');
  await page.locator('input[name="companyName"]').click();
  await page.locator('input[name="companyName"]').fill('EV Mobile Pvt Ltd');
  await page.getByLabel('').nth(2).click();
  await page.getByRole('option', { name: 'Website' }).click();
  await page.getByLabel('').nth(3).click();
  await page.getByRole('option', { name: 'Hot' }).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Converted' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('02');
  await page.getByRole('button', { name: 'Address Details' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('khamaria Market');
  await page.getByRole('textbox', { name: 'Address Line 2' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.waitForTimeout(2000);
  
  if (await page.getByText('Lead updated successfully',{exact:true}).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/editLeadFirst.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editLeadFirst","true",`./${screenshotPath}/editLeadFirst.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editLeadFirst.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editLeadFirst","false",`./${screenshotPath}/editLeadFirst.png`)
  }
  await page.getByRole('button', { name: 'Back' }).click();
  await page.reload();
  await page.waitForTimeout(2000);

  if (await page.getByText('Anjali Rathor Edited',{exact:true}).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/editLeadSecound.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editLeadSecound","true",`./${screenshotPath}/editLeadSecound.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editLeadSecound.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editLeadSecound","false",`./${screenshotPath}/editLeadSecound.png`)
  }
    
  await page.reload();
  console.log("Edited lead completed");
}


// async function emailThreadInLead(page){
//   console.log('Enter in email thread of lead');
//   await page.getByText('L-340').click();
//   await page.waitForTimeout(2000);
//   await page.getByRole('tab', { name: 'Email Thread' }).click();
//   await page.getByRole('combobox', { name: 'Enter email and press Enter' }).first().click();
//   await page.getByRole('combobox', { name: 'Enter email and press Enter' }).first().fill('akbk6551@gmail.com');
//   await page.getByRole('combobox', { name: 'Enter email and press Enter' }).nth(1).click();
//   await page.getByRole('textbox', { name: 'Enter email subject...' }).click();
//   await page.getByRole('textbox', { name: 'Enter email subject...' }).click();
//   await page.getByRole('textbox', { name: 'Enter email subject...' }).fill('Discussion Regarding New Lead – Jogendar Maurya');
//   await page.getByRole('checkbox', { name: 'Schedule Meet' }).check();
//   await page.getByRole('textbox', { name: 'Enter meeting subject...' }).click();
//   await page.getByRole('textbox', { name: 'Enter meeting subject...' }).click();
//   await page.getByRole('textbox', { name: 'Enter meeting subject...' }).fill('Discussion about deal');
//   await page.getByRole('checkbox', { name: 'Send as Calendar Event' }).check();
//   await page.getByRole('textbox', { name: 'Select start date and time' }).click();
//   await page.getByRole('option', { name: 'Choose Friday, February 13th,' }).click();
//   await page.getByText('00:30').click();
//   await page.getByRole('textbox', { name: '0' }).first().click();
//   await page.getByRole('textbox', { name: '0' }).first().fill('2');
//   await page.getByRole('textbox', { name: '0' }).nth(1).click();
//   await page.getByRole('textbox', { name: '0' }).nth(1).fill('30');
//   await page.locator('.editor-content').click();
//   await page.locator('.editor-content').click();
//   await page.locator('.editor-content').fill('Hi Team,\n\n\n\n\n\n\nI have scheduled a meeting with Jogendar Maurya from EV Charger.\n\n\n\n\n\n\nRequirement: [Short description of client need]\n\n\nMeeting Agenda: Requirement discussion and next steps.\n\n\n\n\n\n\nPlease review and let me know if anything needs to be prepared before the call.\n\n\n\n\n\n\nThanks,\n\n\n[Your Name]');
//   await page.getByRole('button', { name: 'Attach Files' }).click();
//   await page.getByRole('button', { name: 'Attach Files' }).setInputFiles('details1.xlsx');
//   await page.getByRole('button', { name: 'Send Email' }).click();
//   console.log('email thread done in lead');
// }


async function activityInLead(page){
  console.log("Enter in activity's lead");
  await page.getByText('akbk6551+1230@gmail.com').click();
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: 'Activity' }).click();
  await page.getByRole('button', { name: 'Add Activity' }).click();
  await page.getByRole('button', { name: 'Note', exact: true }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('option', { name: 'Meeting' }).click();
  await page.getByRole('textbox', { name: 'Meeting Subject' }).click();
  await page.getByRole('textbox', { name: 'Meeting Subject' }).fill('Discussion About deals');
  await page.getByRole('textbox', { name: 'Meeting Subject' }).click();
  await page.getByPlaceholder('Duration in minutes').fill('12');
  await page.getByRole('textbox', { name: 'Description' }).fill('lkijdffgmlkdgkl g n jgl dgmfdg');
  await page.getByRole('button', { name: 'Add Meeting' }).click();
  await page.reload();
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Lead Management' }).first().click();
  await page.getByText('akbk6551+1230@gmail.com').click();
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: 'Activity' }).click();
   if (await page.getByText('lkijdffgmlkdgkl g n jgl dgmfdg',{exact:true}).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/activityInLead.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"activityInLead","true",`./${screenshotPath}/activityInLead.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/activityInLead.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"activityInLead","false",`./${screenshotPath}/activityInLead.png`)
  }
  await page.reload();
  console.log('Activity of lead created completed');
}


async function documentInLead(page) {
  console.log("Enter in document's lead");
   await page.getByRole('button', { name: 'Sales' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Lead Management' }).first().click();
  await page.getByText('akbk6551+1230@gmail.com').first().click();
  
  
  await page.getByRole('tab', { name: 'Documents' }).click();

  const [chooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('button', { name: 'Browse Files' }).click()
  ]);

  await chooser.setFiles('downloads/leads.xlsx');
  await page.getByRole('button', { name: 'Upload Files' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.reload();
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Lead Management' }).first().click();
  await page.getByText('akbk6551+1230@gmail.com').click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Documents' }).first().click();
   if (await page.getByText('text.txt',{exact:true}).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/documentInLead.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"documentInLead","true",`./${screenshotPath}/documentInLead.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/documentInLead.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"documentInLead","false",`./${screenshotPath}/documentInLead.png`)
  }
  await page.reload();
  console.log("document in lead created completed");
}

async function exportLeadFileNormal(page) {

  console.log("Enter in exportLeadFileNormal");
   await page.getByRole('button', { name: 'Sales' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Lead Management' }).first().click();
  const [excelDownload] = await Promise.all([

  page.waitForEvent('download'),

  page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);

  await excelDownload.saveAs('downloads/leadNormal.xlsx');
  const [pdfDownload] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload.saveAs('downloads/leadPdfNormal.pdf');
  // await page.waitForTimeout(1000);
  
  // if (await page.getByText('text.txt',{exact:true}).isVisible()) 
  // {
  //   await page.screenshot({ path: `./${screenshotPath}/exportLeadFileNormal.png`, fullPage: true });
  //   await updateOpJson(`./${screenshotPath}/`,"exportLeadFileNormal","true",`./${screenshotPath}/exportLeadFileNormal.png`)
    
  // }
  // else{
  //   await page.screenshot({ path: `./${screenshotPath}/exportLeadFileNormal.png`, fullPage: true });
  //   await updateOpJson(`./${screenshotPath}/`,"exportLeadFileNormal","false",`./${screenshotPath}/exportLeadFileNormal.png`)
  // }
  // await page.reload();
   console.log("Export lead file normal compeleted");
}

async function exportLeadFileFilter(page){
  console.log('Enter in export lead file filter ');
  // excel file
  await page.getByRole('combobox', { name: 'Select Agents' }).click();
  await page.getByRole('option', { name: 'Mahesh Kumar' }).click();
  const [excelDownload] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload.saveAs('downloads/leadFilter.xlsx');

  // pdf file
 const [pdfDownload] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload.saveAs('downloads/leadPdfFilter.pdf');
  // .....................................................
  await page.getByRole('button', { name: 'Open' }).nth(1).click();
  await page.getByRole('option', { name: 'Converted' }).click();
  await page.waitForTimeout(1000);
  
  if (await page.getByText('text.txt',{exact:true}).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportLeadFileFilter.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportLeadFileFilter","true",`./${screenshotPath}/exportLeadFileFilter.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportLeadFileFilter.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportLeadFileFilter","false",`./${screenshotPath}/exportLeadFileFilter.png`)
  }
  await expect(page.getByText('Anjali Rathor Edited')).toBeVisible();
   const [excelDownload1] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload1.saveAs('downloads/leadFilter1.xlsx');

  // pdf file
  const [pdfDownload1] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload1.saveAs('downloads/leadPdfFilter1.pdf');
  
  await page.reload();
  console.log('exported lead filter completed');

}

async function importLead(page) {
  console.log("Enter in import lead");
  const [chooser] = await Promise.all([

    page.waitForEvent('filechooser'),
    page.getByRole('button', { name: 'Import Lead' }).click()

  ]);
  await chooser.setFiles('downloads/leads.xlsx');
  console.log("Import lead completed");
}