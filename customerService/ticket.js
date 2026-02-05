import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';

export async function Tickets(page){
  await addNewTickets(page);

}

async function addNewTickets(page) {
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Tickets' }).click();
  await page.getByRole('button', { name: 'New Case' }).click();
  await page.getByRole('textbox', { name: 'Enter case title' }).click();
  await page.getByRole('textbox', { name: 'Enter case title' }).fill('Power cutoff issue');
  await page.getByRole('combobox', { name: 'Search or type customer email' }).click();
  await page.getByRole('option', { name: 'Sashikant Kumar Singh (' }).click();
  await page.getByRole('textbox', { name: 'Enter customer phone' }).click();
  await page.getByRole('button', { name: 'Select Case Issue' }).click();
  await page.getByRole('option', { name: 'Product not Working1' }).click();
  await page.getByRole('button', { name: 'Select Priority' }).click();
  await page.getByRole('option', { name: 'High' }).click();
  await page.getByRole('button', { name: 'Select Status Profile' }).click();
  await page.getByRole('option', { name: 'In Progress' }).click();
  await page.getByRole('button', { name: 'Portal' }).click();
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Describe the case in detail...' }).click();
  await page.getByRole('textbox', { name: 'Describe the case in detail...' }).fill('There is a power cutoff issue in device ');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Select a Queue' }).click();
  await page.getByRole('option', { name: 'Hardware Queue' }).click();
  await page.getByRole('button', { name: 'Select an Agent' }).click();
  await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('button', { name: 'Next: SLA' }).click();
  await page.getByRole('button', { name: 'Select SLA' }).click();
  await page.getByRole('option', { name: 'Critical / Breakdown Issue' }).click();
  await page.getByRole('button', { name: 'Create Case' }).click();
  await expect(page.getByText('Support Case created')).toBeVisible();
}