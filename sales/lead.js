import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';
import { globalExportDocument } from '../globalExportDocument';
import { dataRead } from '../dataRead';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/lead`;
const pathName=`outputData/status/${testData.companyType}`


export async function lead(page){
  await addLead(page);
  await page.waitForTimeout(3000);
  await editLead(page);
  await page.waitForTimeout(3000);
  await emailThreadInLead(page);
  await page.waitForTimeout(3000);
  await activityInLead(page);
  await page.waitForTimeout(3000);
  await documentInLead(page); 
  await page.waitForTimeout(3000); 
  await exportLeadFileNormal(page);
  await page.waitForTimeout(3000); 
  await exportLeadFileFilter(page);
  await page.waitForTimeout(3000); 
  await importLead(page);
}

async function addLead(page){
  console.log("Enter in add lead");
  await page.waitForTimeout(1000);
  // await page.getByRole('button', { name: 'Sales' }).click();
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
  await page.getByRole('option', { name: 'Mahesh Kumar' }).first().click();
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
  await page.getByRole('option', { name: 'Mahesh Kumar' }).first().click();
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

  await page.waitForTimeout(3000)
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
  await page.getByRole('option', { name: 'Mahesh Kumar' }).first().click();
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
  await page.getByRole('textbox', { name: 'Topic' }).fill('software');
  await page.getByRole('button', { name: 'Lead Source' }).click();
  await page.getByRole('option', { name: 'Email Campaign' }).click();
  await page.getByRole('button', { name: 'Lead Rating' }).click();
  await page.getByRole('option', { name: 'Warm' }).click();
  await page.getByRole('button', { name: 'Sales Agent' }).click();
  await page.getByRole('option', { name: 'Santosh Kumar' }).first().click();
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
  await page.getByRole('option', { name: 'Mahesh Kumar' }).first().click();
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
  await page.getByRole('option', { name: 'Mahesh Kumar' }).first().click();
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


   await page.getByRole('combobox', { name: 'Search or add industry' }).click();

  // await page.getByRole('option', { name: 'Website' }).click();
  try {
  await page.getByRole('option', { name: 'Website' }).click({ timeout: 2000 });
} catch (e) {
    await page.getByRole('combobox', { name: 'Search or add industry' }).fill('Website');
  await page.keyboard.press('Enter');
   await page.getByRole('option', { name: 'Website' }).click({ timeout: 2000 });
}
  await page.getByLabel('').nth(5).click();
    // await page.getByRole('button', { name: 'Warm' }).click();
  await page.getByRole('option', { name: 'Hot' }).click();
  await page.getByLabel('', { exact: true }).nth(1).click();
  //  await page.getByRole('button', { name: 'New' }).click();
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

async function emailThreadInLead(page){
  console.log('Enter in email thread of lead');
  await page.getByText('Aman Yadav').click();
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: 'Email Thread' }).click();
  await page.getByRole('combobox', { name: 'Enter email and press Enter' }).first().click();
  await page.getByRole('combobox', { name: 'Enter email and press Enter' }).first().fill('akbk6551@gmail.com');
  await page.getByRole('combobox', { name: 'Enter email and press Enter' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Enter email subject...' }).click();
  await page.getByRole('textbox', { name: 'Enter email subject...' }).click();
  await page.getByRole('textbox', { name: 'Enter email subject...' }).fill('Discussion Regarding New Lead – Jogendar Maurya');
  await page.getByRole('checkbox', { name: 'Schedule Meet' }).check();
  await page.getByRole('textbox', { name: 'Enter meeting subject...' }).click();
  await page.getByRole('textbox', { name: 'Enter meeting subject...' }).click();
  await page.getByRole('textbox', { name: 'Enter meeting subject...' }).fill('Discussion about deal');
  await page.getByRole('checkbox', { name: 'Send as Calendar Event' }).check();
  await page.getByRole('textbox', { name: 'Select start date and time' }).click();
  await page.getByRole('option', { name: 'Choose Friday, March 27th,' }).click();
  await page.getByText('00:30').click();
  await page.getByRole('textbox', { name: '0' }).first().click();
  await page.getByRole('textbox', { name: '0' }).first().fill('2');
  await page.getByRole('textbox', { name: '0' }).nth(1).click();
  await page.getByRole('textbox', { name: '0' }).nth(1).fill('30');
  await page.locator('.editor-content').click();
  await page.locator('.editor-content').click();
  await page.locator('.editor-content').fill('Hi Team,\n\n\n\n\n\n\nI have scheduled a meeting with Jogendar Maurya from EV Charger.\n\n\n\n\n\n\nRequirement: [Short description of client need]\n\n\nMeeting Agenda: Requirement discussion and next steps.\n\n\n\n\n\n\nPlease review and let me know if anything needs to be prepared before the call.\n\n\n\n\n\n\nThanks,\n\n\n[Your Name]');
  await page.getByRole('button', { name: 'Attach Files' }).click();
  await page.getByRole('button', { name: 'Attach Files' }).setInputFiles('details1.xlsx');
  await page.getByRole('button', { name: 'Send Email' }).click();
  console.log('email thread done in lead');
}

async function activityInLead(page){
  console.log("Enter in activity's lead");
  await page.getByText('Jitendra Tyagi').click();
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: 'Activity' }).click();
  await page.getByRole('button', { name: 'Add Activity' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Note', exact: true }).click();
  
  await page.getByRole('option', { name: 'Meeting' }).click();
  await page.getByRole('textbox', { name: 'Meeting Subject' }).click();
  await page.getByRole('textbox', { name: 'Meeting Subject' }).fill('Discussion About deals');
  await page.getByRole('textbox', { name: 'Meeting Subject' }).click();
  await page.getByPlaceholder('Duration in minutes').fill('12');
  await page.getByRole('textbox', { name: 'Description' }).fill('lkijdffgmlkdgkl g n jgl dgmfdg');
  await page.getByRole('button', { name: 'Add Meeting' }).click();
  await page.waitForTimeout(2000);
  await page.reload();
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Lead Management' }).first().click();
  await page.getByText('Jitendra Tyagi').click();
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: 'Activity' }).click();
  await page.waitForTimeout(2000);
   if (await page.getByText('lkijdffgmlkdgkl g n jgl dgmfdg',{exact:true}).first().isVisible()) 
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
  await page.getByText('Jitendra Tyagi').first().click();
  
  
  await page.getByRole('tab', { name: 'Documents' }).click();

 
  await page.locator('input[type="file"]').setInputFiles('./download1/leads.xlsx');
  // await page.pause();
  
  // await chooser.setFiles('downloads/leads.xlsx');
  await page.getByRole('button', { name: 'Upload Files' }).click();
   await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(1000);
  await page.reload();
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Lead Management' }).first().click();
  await page.getByText('Jitendra Tyagi').click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Documents' }).click();
   if (await page.getByText('leads.xlsx',{exact:true}).isVisible()) 
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



  const result1 = await dataRead(
          "./downloads/leadPdfNormal.pdf",
        ["Jogendar Maurya","akbk6551+1231@gmail.com"],
        ["Abhay Tyagi","akbk6551+31@gmail.com"]
      );
      console.log(result1);
    if (result1.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketsNormal.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketsNormal","true",`./${screenshotPath}/exportExcelInTicketsNormal.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketsNormal.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketsNormal","false",`./${screenshotPath}/exportExcelInTicketsNormal.png`)
    }



    const result2 = await dataRead(
       "./downloads/leadNormal.xlsx",
        ["Jogendar Maurya","akbk6551+1231@gmail.com"],
        ["Abhay Tyagi","akbk6551+31@gmail.com"]
    );
    console.log(result2);
  if (result2.success) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketsNormal2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketsNormal2","true",`./${screenshotPath}/exportExcelInTicketsNormal2.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketsNormal2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketsNormal2","false",`./${screenshotPath}/exportExcelInTicketsNormal2.png`)
  }
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


   await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Agent' }).click();
  await page.getByRole('menuitem', { name: 'Mahesh Kumar' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();

   // excel file
  const [excelDownload] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload.saveAs('downloads/leadFilter.xlsx');


   const result1 = await dataRead(
          "./downloads/leadFilter.xlsx",
        ["Jogendar Maurya","akbk6551+1231@gmail.com"],
        ["simmi","akbk6551+31@gmail.com"]
      );
      console.log(result1);
    if (result1.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilter1.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilter1","true",`./${screenshotPath}/exportExcelInLeadFilter1.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilter1.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilter1","false",`./${screenshotPath}/exportExcelInLeadFilter1.png`)
    }

    console.log("excel 1")


  // pdf file
 const [pdfDownload] = await Promise.all([
    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload.saveAs('downloads/leadPdfFilter.pdf');


   const result2 = await dataRead(
          "./downloads/leadPdfFilter.pdf",
        ["Anjali Rathor","akbk6551+1230"],
        ["simmi","akbk6551+31@gmail.com"]
      );
      console.log(result2);
    if (result2.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilter2.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilter2","true",`./${screenshotPath}/exportExcelInLeadFilter2.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilter2.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilter2","false",`./${screenshotPath}/exportExcelInLeadFilter2.png`)
    }
       console.log("pdf 1")
  // .....................................................
   await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Status' }).click();
  await page.getByRole('menuitem', { name: 'New' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(1000);
  
 
// excel file

  const [excelDownload1] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload1.saveAs('downloads/leadFilter1.xlsx');
   const result3 = await dataRead(
          "./downloads/leadFilter1.xlsx",
          ["Jogendar Maurya","akbk6551+1231@gmail.com"],
        ["simmi","akbk6551+31@gmail.com"]
        
      );
      console.log(result3);
    if (result3.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus3.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus3","true",`./${screenshotPath}/exportExcelInLeadFilterStatus3.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus3.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus3","false",`./${screenshotPath}/exportExcelInLeadFilterStatus3.png`)
    }
    
    console.log("excel 2")

  // pdf file
  const [pdfDownload1] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload1.saveAs('downloads/leadPdfFilter1.pdf');
  

   const result4 = await dataRead(
          "./downloads/leadPdfFilter1.pdf",
          ["Anjali Rathor","akbk6551+1230"],
        ["simmi","akbk6551+31@gmail.com"]
      );
      console.log(result4);
    if (result4.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus4.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus4","true",`./${screenshotPath}/exportExcelInLeadFilterStatusP.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus4.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus4","false",`./${screenshotPath}/exportExcelInLeadFilterStatus4.png`)
    }
     console.log("pdf 2")

  await page.reload();
  
  
   await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Date Filter').click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('18/03/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('28/03/2026');
  await page.getByRole('button', { name: 'OK' }).click();
  
  //excel file
   const [excelDownload2] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload2.saveAs('downloads/leadFilter1.xlsx');
   const result5 = await dataRead(
          "./downloads/leadFilter1.xlsx",
          ["Jogendar Maurya","akbk6551+1231@gmail.com"],
        ["simmi","akbk6551+31@gmail.com"]
        
      );
      console.log(result5);
    if (result5.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus5.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus5","true",`./${screenshotPath}/exportExcelInLeadFilterStatus5.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus5.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus5","false",`./${screenshotPath}/exportExcelInLeadFilterStatus5.png`)
    }
     console.log("excel 3")

    // pdf file

     const [pdfDownload2] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload2.saveAs('downloads/leadPdfFilter1.pdf');
  

   const result6 = await dataRead(
          "./downloads/leadPdfFilter1.pdf",
          ["Anjali Rathor","akbk6551+1230"],
        ["simmi","akbk6551+31@gmail.com"]
      );
      console.log(result4);
    if (result6.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus6.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus6","true",`./${screenshotPath}/exportExcelInLeadFilterStatus6.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatusR.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus6","false",`./${screenshotPath}/exportExcelInLeadFilterStatus6.png`)
    }
     console.log("pdf 3")


  

  
  await page.reload();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Agent' }).click();
  await page.getByRole('menuitem', { name: 'Mahesh Kumar' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Status' }).click();
  await page.getByRole('menuitem', { name: 'New' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();


  // excel file

     const [excelDownload3] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload3.saveAs('downloads/leadFilter1.xlsx');
   const result7 = await dataRead(
          "./downloads/leadFilter1.xlsx",
          ["Jogendar Maurya","akbk6551+1231@gmail.com"],
        ["simmi","akbk6551+50@gmail.com"]
        
      );
      console.log(result7);
    if (result7.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus7.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus7","true",`./${screenshotPath}/exportExcelInLeadFilterStatus7.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus7.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus7","false",`./${screenshotPath}/exportExcelInLeadFilterStatus7.png`)
    }
     console.log("excel 4")


  // pdf file
   const [pdfDownload4] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload4.saveAs('downloads/leadPdfFilter1.pdf');
  


   const result8 = await dataRead(
          "./downloads/leadPdfFilter1.pdf",
          ["Jogendar","akbk6551+1231"],
        ["simmi","akbk6551+31@gmail.com"]
      );
      console.log(result8);
    if (result8.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus8.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus8","true",`./${screenshotPath}/exportExcelInLeadFilterStatus8.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatusP.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus8","false",`./${screenshotPath}/exportExcelInLeadFilterStatus8.png`)
    }
     console.log("pdf 4")


   await page.reload();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Agent' }).click();
  await page.getByRole('menuitem', { name: 'Santosh Kumar' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('18/03/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('28/03/2026');
  await page.getByRole('button', { name: 'OK' }).click();

  // excel file
   
    const [excelDownload4] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload4.saveAs('downloads/leadFilter1.xlsx');
   const result9 = await dataRead(
          "./downloads/leadFilter1.xlsx",
          ["Jitendra Tyagi","akbk6551+1229@gmail.com"],
        ["simmi","akbk6551+31@gmail.com"]
        
      );
      console.log(result9);
    if (result9.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus9.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus9","true",`./${screenshotPath}/exportExcelInLeadFilterStatus9.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus9.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus9","false",`./${screenshotPath}/exportExcelInLeadFilterStatus9.png`)
    }
    
     console.log("excel 5")
    // pdf file

    const [pdfDownload5] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload5.saveAs('downloads/leadPdfFilter1.pdf');
  


   const result10 = await dataRead(
          "./downloads/leadPdfFilter1.pdf",
          ["Jitendra Tyagi","akbk6551+1229"],
        ["simmi","akbk6551+31@gmail.com"]
      );
      console.log(result10);
    if (result10.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus10.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus10","true",`./${screenshotPath}/exportExcelInLeadFilterStatus10.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatusP.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus10","false",`./${screenshotPath}/exportExcelInLeadFilterStatus10.png`)
    }
     console.log("pdf 5")

   
    await page.reload();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Status' }).click();
  await page.getByRole('menuitem', { name: 'New' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Date Filter').click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('18/03/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('30/03/2026');
  await page.getByRole('button', { name: 'OK' }).click();

  // excel file
   const [excelDownload5] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload5.saveAs('downloads/leadFilter1.xlsx');
   const result11 = await dataRead(
          "./downloads/leadFilter1.xlsx",
          ["Jogendar Maurya","akbk6551+1231@gmail.com"],
        ["simmi","akbk6551+31@gmail.com"]
        
      );
      console.log(result11);
    if (result11.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus11.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus11","true",`./${screenshotPath}/exportExcelInLeadFilterStatus11.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus11.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus11","false",`./${screenshotPath}/exportExcelInLeadFilterStatus11.png`)
    }
     console.log("excel 6")


    // pdf file
      const [pdfDownload6] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload6.saveAs('downloads/leadPdfFilter1.pdf');
  


   const result12 = await dataRead(
          "./downloads/leadPdfFilter1.pdf",
          ["ABHAY KUMAR","akbk6551@gma"],
        ["Abhay Tyagi","akbk6551+31@gmail.com"]
      );
      console.log(result12);
    if (result12.success) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus12.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus12","true",`./${screenshotPath}/exportExcelInLeadFilterStatus12.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportExcelInLeadFilterStatus12.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportExcelInLeadFilterStatus12","false",`./${screenshotPath}/exportExcelInLeadFilterStatus12.png`)
    }
    console.log("pdf 6")


  console.log('exported lead filter completed');

}

async function importLead(page) {
  console.log("Enter in import lead");
  const [chooser] = await Promise.all([

    page.waitForEvent('filechooser'),
    page.getByRole('button', { name: 'Import Lead' }).click()

  ]);
  await chooser.setFiles('./download1/leads.xlsx');
  console.log("Import lead completed");
}