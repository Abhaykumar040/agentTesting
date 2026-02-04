import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';

export async function team(page) {
  await addTeam(page);
  await page.waitTimeout(3000);
  await editTeam(page);
}

async function addTeam(page) {
   await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Teams' }).click();
  await page.getByRole('button', { name: 'New Team' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support Team' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support Team' }).fill('Technical Team');
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).click();
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).fill('This team can handle technical problem');
  await page.getByRole('button', { name: 'Create Team' }).click();
  await expect(page.getByText('Team added successfully')).toBeVisible();

  await page.getByRole('button', { name: 'New Team' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support Team' }).click();
  await page.getByRole('textbox', { name: 'e.g. Technical Support Team' }).fill('Software Team');
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).click();
  await page.getByRole('textbox', { name: 'Describe the purpose of this' }).fill('It will handle software problem');
  await page.getByRole('button', { name: 'Create Team' }).click();
  await expect(page.getByText('Team added successfully')).toBeVisible();
  await page.reload();
  await page.waitForLoadState('networkidle');
}

async function editTeam(page){
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Teams' }).click();
   await page.getByRole('row', { name: 'Technical Team This team can' }).locator('button').click();
  await page.getByRole('menuitem', { name: 'Edit Team' }).click();
  await page.getByRole('button', { name: 'Add Team Members' }).click();
  await page.getByRole('button', { name: 'Agent' }).click();
  await page.getByRole('option', { name: 'Mukesh Kumar' }).first().click();
  await page.getByRole('button', { name: 'Add Member' }).click();
  await expect(page.getByText('Team updated successfully')).toBeVisible();
  await page.getByRole('button', { name: 'Add Team Members' }).click();
  await page.getByRole('button', { name: 'Agent' }).click();
  await page.getByRole('option', { name: 'Surendra Kumar' }).click();
  await page.getByRole('button', { name: 'Add Member' }).click();
  await expect(page.getByText('Team updated successfully')).toBeVisible();
  await page.getByRole('button', { name: 'Back to Teams' }).click();
}
