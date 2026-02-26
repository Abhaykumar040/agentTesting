import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/engineer`;
const pathName=`outputData/status/${testData.companyType}`


export async function Engineer(page){
  // await deletePreviousEngineer(page);
  // await page.waitForTimeout(3000);
  // await createEngineer(page);
  // await page.waitForTimeout(3000);
  // await emailVarificationEngineer(page);
  // await page.waitForTimeout(3000);
  // await deleteEngineer(page);
 await page.waitForTimeout(1000);
  await assignSkill(page);

}
async function deletePreviousEngineer(page){
 await page.getByRole('button', { name: 'Field Service' }).click();
await page.getByRole('link', { name: 'Engineers' }).click();
await page.waitForTimeout(3000);
while( true){
    const text = await page.textContent('text=Showing');
    const match = text.match(/of\s+(\d+)\s+entries/);
    const total = match ? parseInt(match[1]) : 0;

    if (total <= 0) {
      break;
    }
    await page.locator('table tbody tr').first().getByLabel('Delete').click();
     await page.waitForTimeout(2000);
    //  await page.reload();
  }

await page.reload();

}
async function deleteEngineer(page){
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Engineers' }).click();
  await page.locator('tbody tr').first().getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(1000);
  if (await page.getByText('Engineer deleted successfully').isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/deleteEngineer.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteEngineer","true",`./${screenshotPath}/deleteEngineer.png`)
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/deleteEngineer.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteEngineer","false",`./${screenshotPath}/deleteEngineer.png`)
  }
  await page.reload();
}
async function createEngineer(page){
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Engineers' }).click();
  await page.waitForTimeout(1000);
   await page.getByRole('button', { name: 'Add New Engineer' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Title' }).click();
  // await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Ms.' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('suhani');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('singh');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+11313@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('7896354125');
  await page.getByRole('textbox', { name: 'Alternate Phone' }).click();
  await page.getByRole('textbox', { name: 'Alternate Phone' }).fill('9632587412');
  await page.getByRole('combobox', { name: 'Zone *' }).click();
  await page.getByRole('option', { name: 'NI' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 1' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 1' }).fill('Expert Engineer');
  await page.getByRole('textbox', { name: 'Additional Info 2' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 2' }).fill('skilled');
  await page.getByRole('textbox', { name: 'Additional Info 3' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 3' }).fill('Hard working');
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.waitForTimeout(1000);
   await page.getByRole('listitem').filter({ hasText: /^Khamaria, Uttar Pradesh, India$/ }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Save' }).click();

  await page.waitForTimeout(2000);
  // await page.reload();
  //   await page.getByRole('button', { name: 'Field Service' }).click();
  // await page.getByRole('link', { name: 'Engineers' }).click();
   await page.getByRole('button', { name: 'Add New Engineer' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Title' }).click();
  // await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Ms.' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('suhani');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('singh');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1133@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('7896354115');
  await page.getByRole('textbox', { name: 'Alternate Phone' }).click();
  await page.getByRole('textbox', { name: 'Alternate Phone' }).fill('9652587412');
  await page.getByRole('combobox', { name: 'Zone *' }).click();
  await page.getByRole('option', { name: 'NI' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 1' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 1' }).fill('Expert Engineer');
  await page.getByRole('textbox', { name: 'Additional Info 2' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 2' }).fill('skilled');
  await page.getByRole('textbox', { name: 'Additional Info 3' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 3' }).fill('Hard working');
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.waitForTimeout(1000);
   await page.getByRole('listitem').filter({ hasText: /^Khamaria, Uttar Pradesh, India$/ }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Save' }).click();
  
  await page.waitForTimeout(2000);
//  await page.reload();
//     await page.getByRole('button', { name: 'Field Service' }).click();
//   await page.getByRole('link', { name: 'Engineers' }).click();
   await page.getByRole('button', { name: 'Add New Engineer' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Title' }).click();
  // await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Sani');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('singh');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+2100@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('7896354125');
  await page.getByRole('textbox', { name: 'Alternate Phone' }).click();
  await page.getByRole('textbox', { name: 'Alternate Phone' }).fill('9632587401');
  await page.getByRole('combobox', { name: 'Zone *' }).click();
  await page.getByRole('option', { name: 'NI' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 1' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 1' }).fill('Expert Engineer');
  await page.getByRole('textbox', { name: 'Additional Info 2' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 2' }).fill('skilled');
  await page.getByRole('textbox', { name: 'Additional Info 3' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 3' }).fill('Hard working');
await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.waitForTimeout(1000);
   await page.getByRole('listitem').filter({ hasText: /^Khamaria, Uttar Pradesh, India$/ }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Save' }).click();
  // await page.waitForTimeout(2000);

   await page.getByRole('button', { name: 'Add New Engineer' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Title' }).click();
  // await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Ms.' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Ravi');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Tiwari');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+2101@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('7896354126');
  await page.getByRole('textbox', { name: 'Alternate Phone' }).click();
  await page.getByRole('textbox', { name: 'Alternate Phone' }).fill('9632587402');
  await page.getByRole('combobox', { name: 'Zone *' }).click();
  await page.getByRole('option', { name: 'NI' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 1' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 1' }).fill('Expert Engineer');
  await page.getByRole('textbox', { name: 'Additional Info 2' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 2' }).fill('skilled');
  await page.getByRole('textbox', { name: 'Additional Info 3' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 3' }).fill('Hard working');
await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.waitForTimeout(1000);
   await page.getByRole('listitem').filter({ hasText: /^Khamaria, Uttar Pradesh, India$/ }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Save' }).click();
  // await page.waitForTimeout(2000);

   await page.getByRole('button', { name: 'Add New Engineer' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Title' }).click();
  // await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Ms.' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Mahesh');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Rajput');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+2103@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('7896354127');
  await page.getByRole('textbox', { name: 'Alternate Phone' }).click();
  await page.getByRole('textbox', { name: 'Alternate Phone' }).fill('9632587403');
  await page.getByRole('combobox', { name: 'Zone *' }).click();
  await page.getByRole('option', { name: 'NI' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 1' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 1' }).fill('Expert Engineer');
  await page.getByRole('textbox', { name: 'Additional Info 2' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 2' }).fill('skilled');
  await page.getByRole('textbox', { name: 'Additional Info 3' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 3' }).fill('Hard working');
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.waitForTimeout(1000);
   await page.getByRole('listitem').filter({ hasText: /^Khamaria, Uttar Pradesh, India$/ }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Save' }).click();

   await page.getByRole('button', { name: 'Add New Engineer' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Title' }).click();
  // await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Ms.' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Ansh');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Singh');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+2104@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('7896354128');
  await page.getByRole('textbox', { name: 'Alternate Phone' }).click();
  await page.getByRole('textbox', { name: 'Alternate Phone' }).fill('9632587405');
  await page.getByRole('combobox', { name: 'Zone *' }).click();
  await page.getByRole('option', { name: 'NI' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 1' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 1' }).fill('Expert Engineer');
  await page.getByRole('textbox', { name: 'Additional Info 2' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 2' }).fill('skilled');
  await page.getByRole('textbox', { name: 'Additional Info 3' }).click();
  await page.getByRole('textbox', { name: 'Additional Info 3' }).fill('Hard working');
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.waitForTimeout(1000);
   await page.getByRole('listitem').filter({ hasText: /^Khamaria, Uttar Pradesh, India$/ }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Save' }).click();

  await page.waitForTimeout(2000);
    if (await page.getByText('Engineer added successfully').isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/createEngineer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"createEngineer","true",`./${screenshotPath}/createEngineer.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/createEngineer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"createEngineer","false",`./${screenshotPath}/createEngineer.png`)
    }
    await page.reload();

}

async function editEngineerfsm(page){
   await expect(page.getByText('EngineerTest K')).toBeVisible();
  await page.locator('div').filter({ hasText: /^EngineerTest K$/ }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'First Name *' }).fill('EngineerTestXX');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('KX');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('1-46X');
  await page.getByRole('textbox', { name: 'Address Line 2' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2' }).fill('Red Hills, MalakpetX');
  await page.getByRole('textbox', { name: 'Address Line 3' }).click();
  await page.getByRole('textbox', { name: 'Address Line 3' }).fill('near StationX');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('HyderabadX');
  await page.getByRole('combobox', { name: 'Country *' }).click();
  await page.getByRole('combobox', { name: 'Country *' }).fill('NEPAL');
  await page.getByRole('option', { name: 'Nepal' }).click();
  await page.getByRole('combobox', { name: 'State *' }).click();
  await page.getByRole('option', { name: 'Bagmati' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('https://erp-company.zynkatech.com/fsm/engineers/');
  await expect(page.getByText('Engineer updated successfully')).toBeVisible();
  await expect(page.getByText('EngineerTestXX KX')).toBeVisible();
  await page.getByRole('row', { name: 'EngineerTestXX KX Engineer is' }).getByLabel('Email not verified').click();
  await expect(page.getByText('Onboarding email resent')).toBeVisible();
}

async function emailVarificationEngineer(page){
  await page.getByRole('row', { name: 'Ansh Singh Engineer is' }).getByLabel('Email not verified').click();
  await page.waitForTimeout(3000);
  if (await page.getByText('Onboarding email resent').isVisible()) 
  {
  await page.screenshot({ path: `./${screenshotPath}/emailVarificationEngineer.png`, fullPage: true });
  await updateOpJson(`./${screenshotPath}/`,"emailVarificationEngineer","true",`./${screenshotPath}/emailVarificationEngineer.png`)

  }
  else{
  await page.screenshot({ path: `./${screenshotPath}/emailVarificationEngineer.png`, fullPage: true });
  await updateOpJson(`./${screenshotPath}/`,"emailVarificationEngineer","false",`./${screenshotPath}/emailVarificationEngineer.png`)
  }
  await page.reload();
}


async function assignSkill(page){
  console.log('Enter in assign skill');
   await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Skill' }).click();
 await page.waitForTimeout(3000);
  await page.getByRole('row', { name: 'Skill Description Proficiency' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Assign Skill (4)' }).click();
  await page.getByRole('checkbox').nth(2).check();
  await page.getByRole('checkbox').nth(3).check();
  await page.getByRole('checkbox').nth(4).check();
  await page.getByRole('checkbox').nth(5).check();
  
  await page.getByRole('button', { name: 'Testing & Troubleshooting (0)' }).click();


  await page.getByRole('checkbox').nth(4).check();
  await page.getByRole('checkbox').nth(5).check();

  await page.getByRole('button', { name: 'Soldering & Rework (0)' }).click();
 
  await page.getByRole('checkbox').nth(5).check();
  await page.getByRole('button', { name: 'Repairing (0)' }).click();
  await page.getByRole('checkbox').nth(2).check();
  
  
  await page.getByRole('button', { name: 'Assign All Skills' }).click();
   await page.waitForTimeout(1000);
  console.log('Assign skill completed');
}