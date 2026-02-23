import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/skill`;
const pathName=`outputData/status/${testData.companyType}`


export async function skill(page){
  
  await deletePreviousProficiency(page);
  await page.waitForTimeout(3000);
  await deletePreviousSkill(page);
  await page.waitForTimeout(3000);
  await addProficiency(page);
  await page.waitForTimeout(3000);
  await addSkill(page);
  await page.waitForTimeout(3000);
  await editSkill(page);
  await page.waitForTimeout(3000);
  await assignSkill(page)
  await page.waitForTimeout(3000);
  await deleteSkill(page);
}
async function addSkill(page) {
  console.log("Enter in Add Skill")
    await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Skill' }).click();
  await page.getByRole('button', { name: 'Add Skill' }).click();
  await page.getByRole('textbox', { name: 'Skill Name *' }).click();
  await page.getByRole('textbox', { name: 'Skill Name *' }).fill('Repairing');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('Repairing');
  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.locator('[id="mui-component-select-proficiencyLevels.0.value"]').click();
  await page.waitForTimeout(2000);
  await page.getByRole('option', { name: 'Expert' }).click();
  await page.getByLabel('', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Intermediate' }).click();
  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByLabel('', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'beginner' }).click();
  await page.locator('div').filter({ hasText: 'Create New SkillSkill Name *' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).click();
await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Skill' }).click();
  await page.getByRole('button', { name: 'Add Skill' }).click();
  await page.getByRole('textbox', { name: 'Skill Name *' }).click();
  await page.getByRole('textbox', { name: 'Skill Name *' }).fill('Soldering & Rework');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('Soldering & Rework');
  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.locator('[id="mui-component-select-proficiencyLevels.0.value"]').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Expert' }).click();
  await page.getByLabel('', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Intermediate' }).click();
  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByLabel('', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'beginner' }).click();
  await page.locator('div').filter({ hasText: 'Create New SkillSkill Name *' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).click();

    await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Skill' }).click();
  await page.getByRole('button', { name: 'Add Skill' }).click();
  await page.getByRole('textbox', { name: 'Skill Name *' }).click();
  await page.getByRole('textbox', { name: 'Skill Name *' }).fill('Testing & Troubleshooting');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('Testing & Troubleshooting');
  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.locator('[id="mui-component-select-proficiencyLevels.0.value"]').click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Expert' }).click();
  await page.getByLabel('', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Intermediate' }).click();
  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByLabel('', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'beginner' }).click();
  await page.locator('div').filter({ hasText: 'Create New SkillSkill Name *' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Skill' }).click();
  await page.getByRole('button', { name: 'Add Skill' }).click();
  await page.getByRole('textbox', { name: 'Skill Name *' }).click();
  await page.getByRole('textbox', { name: 'Skill Name *' }).fill('Embedded Systems');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('Embedded Systems');
  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.locator('[id="mui-component-select-proficiencyLevels.0.value"]').click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Expert' }).click();
  await page.getByLabel('', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Intermediate' }).first().click();
  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByLabel('', { exact: true }).click();
 await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'beginner' }).click();
  await page.locator('div').filter({ hasText: 'Create New SkillSkill Name *' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).click();
  
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Skill' }).click();
  await page.getByRole('button', { name: 'Add Skill' }).click();
  await page.getByRole('textbox', { name: 'Skill Name *' }).click();
  await page.getByRole('textbox', { name: 'Skill Name *' }).fill('New skill');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('new skill added');
  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.locator('[id="mui-component-select-proficiencyLevels.0.value"]').click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Expert' }).click();
  await page.getByLabel('', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Intermediate' }).first().click();
  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByLabel('', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'beginner' }).click();
  await page.locator('div').filter({ hasText: 'Create New SkillSkill Name *' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).click();


  await page.reload();
      await page.waitForTimeout(3000);
  
   if (await (page.getByText('Skill created successfully').nth(1)).isVisible())  {
          await page.screenshot({ path: `./${screenshotPath}/addskill.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"addskill","true",`./${screenshotPath}/addskill.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/addskill.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"addskill","false",`./${screenshotPath}/addskill.png`)
        }
 
  await page.reload()
  console.log('Added skill ')
}


async function editSkill(page) {
  console.log("Enter In Edit skill")
   await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Skill' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();
  await page.getByRole('textbox', { name: 'Skill Name *' }).click();
  await page.getByRole('textbox', { name: 'Skill Name *' }).fill('Edited ');
  await page.getByRole('textbox', { name: 'Description *' }).dblclick();
  await page.getByRole('textbox', { name: 'Description *' }).fill('Edited');
  await page.getByRole('button', { name: 'Update' }).click();;
  await page.reload();
  await page.waitForTimeout(3000);
  

   if (await page.getByText('Skill updated successfully', {exact:true}).first().isVisible())  {
          await page.screenshot({ path: `./${screenshotPath}/editSkill.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"editSkill","true",`./${screenshotPath}/editSkill.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/editSkill.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"editSkill","false",`./${screenshotPath}/editSkill.png`)
        }

  console.log("Edited skill")
  
}

async function deletePreviousSkill(page){
 console.log("Enter In delete previous skill")
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Skill' }).click();
     await page.waitForTimeout(3000);


    while( true){
     const text = await page.textContent('text=Showing');
  const match = text.match(/of\s+(\d+)\s+entries/);
  const total = match ? parseInt(match[1]) : 0;

  // Stop loop if total <= 0
  if (total <= 0) {
    break;
  }
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();

    await expect(page.getByText('Skill deleted successfully').first()).toBeVisible();
    await page.waitForTimeout(1000);
    }
   
await page.reload();
}
async function deletePreviousProficiency(page){
    console.log("Enter In delete Previous proficiency ")
      await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Skill' }).click();
      await page.getByRole('tab', { name: 'Proficiency Level' }).click();
  
     await page.waitForTimeout(3000);


    while( true){
    await page.waitForTimeout(1000);
  if ( await page
  .getByRole('heading', { name: 'No Proficiency Levels' })
  .isVisible()) {
    break;
  }
await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
    
    }
   
await page.reload();
}


async function addProficiency(page){
  console.log("Enter In add proficiency ")
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Skill' }).click();
  await page.getByRole('tab', { name: 'Proficiency Level' }).click();

  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).fill('beginner');
  await page.getByRole('textbox', { name: 'Level description' }).click();
  await page.getByRole('textbox', { name: 'Level description' }).fill('beginnerD');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();

  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).fill('Intermediate');

  await page.getByRole('textbox', { name: 'Level description' }).click();
  await page.getByRole('textbox', { name: 'Level description' }).fill('IntermediateD');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();

  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).fill('Expert');
  await page.getByRole('textbox', { name: 'Level description' }).click();
  await page.getByRole('textbox', { name: 'Level description' }).fill('ExpertD');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();

  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).fill('Delete1');
  await page.getByRole('textbox', { name: 'Level description' }).click();
  await page.getByRole('textbox', { name: 'Level description' }).fill('Delete1D');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();

  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).fill('Delete2');
  await page.getByRole('textbox', { name: 'Level description' }).click();
  await page.getByRole('textbox', { name: 'Level description' }).fill('Delete2D');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();

  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).fill('Delete3');
  await page.getByRole('textbox', { name: 'Level description' }).click();
  await page.getByRole('textbox', { name: 'Level description' }).fill('Delete3');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
  //  await page.reload();
  //  await page.getByRole('button', { name: 'Master Data' }).click();
  // await page.getByRole('link', { name: 'Skill' }).click();
  // await page.getByRole('tab', { name: 'Proficiency Level' }).click();
  await page.waitForTimeout(3000);
  
   if (await page.getByText('Delete1D', {exact:true}).isVisible())  {
          await page.screenshot({ path: `./${screenshotPath}/addProficiency.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"addProficiency","true",`./${screenshotPath}/addProficiency.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/addProficiency.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"addProficiency","false",`./${screenshotPath}/addProficiency.png`)
        }
  console.log("Add proficiency ");
  await page.reload();


}

async function deleteSkill(page){
  console.log("Enter In delete skill")
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click()
  // await page.reload();
  await page.waitForTimeout(3000);
  
   if (await page.getByText('Skill deleted successfully').isVisible())  {
          await page.screenshot({ path: `./${screenshotPath}/deleteSkill.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"deleteSkill","true",`./${screenshotPath}/deleteSkill.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/deleteSkill.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"deleteSkill","false",`./${screenshotPath}/deleteSkill.png`)
        }
  await page.reload();
  console.log("Delete skill completed")
}

async function deleteProficiency(page) {
  await page.getByRole('tab', { name: 'Proficiency Level' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
  await page.reload();
   await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Skill' }).click();
   await page.getByRole('tab', { name: 'Proficiency Level' }).click();
  await page.waitForTimeout(3000);
  
   if (!await page.getByText('Delete1D', {exact:true}).isVisible())  {
          await page.screenshot({ path: `./${screenshotPath}/deleteSkill.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"deleteSkill","true",`./${screenshotPath}/deleteSkill.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/deleteSkill.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"deleteSkill","false",`./${screenshotPath}/deleteSkill.png`)
        }
  await page.reload();
}

async function assignSkill(page){
  console.log('Enter in assign skill');
  await page.getByRole('row', { name: 'Skill Description Proficiency' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Assign Skill (5)' }).click();
  await page.getByRole('checkbox').nth(2).check();
  await page.getByRole('checkbox').nth(3).check();
  await page.getByRole('checkbox').nth(4).check();
  await page.getByRole('checkbox').nth(5).check();
  await page.getByRole('button', { name: 'Embedded Systems (0)' }).click();
  await page.getByRole('button', { name: 'Testing & Troubleshooting (0)' }).click();
  await page.getByRole('button', { name: 'Embedded Systems (0)' }).click();
  await page.getByRole('checkbox').nth(2).check();
  await page.getByRole('checkbox').nth(3).check();
  await page.getByRole('checkbox').nth(4).check();
  await page.getByRole('checkbox').nth(5).check();
  await page.getByRole('button', { name: 'Testing & Troubleshooting (0)' }).click();
  await page.getByRole('checkbox').nth(2).check();
  await page.getByRole('checkbox').nth(3).check();
  await page.getByRole('checkbox').nth(4).check();
  await page.getByRole('checkbox').nth(5).check();
  await page.getByRole('button', { name: 'Soldering & Rework (0)' }).click();
  await page.getByRole('checkbox').nth(2).check();
  await page.locator('div').filter({ hasText: /^Ravi TiwariZone: NI$/ }).first().click();
  await page.getByRole('checkbox').nth(3).check();
  await page.getByRole('checkbox').nth(4).check();
  await page.getByRole('checkbox').nth(5).check();
  await page.getByRole('button', { name: 'Repairing (0)' }).click();
  await page.getByRole('checkbox').nth(2).check();
  await page.getByRole('checkbox').nth(3).check();
  await page.getByRole('checkbox').nth(4).check();
  await page.getByRole('checkbox').nth(5).check();
  await page.getByRole('button', { name: 'Assign All Skills' }).click();
  console.log('Assign skill completed');
}