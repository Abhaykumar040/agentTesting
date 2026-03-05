import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/formCustomization`
const pathName=`outputData/status/${testData.companyType}`

export async function numberRage(page){
  await deletePreviousNumberRange(page);
  await page.waitForTimeout(3000);
  await addNumberRange(page);
  await page.waitForTimeout(3000);
  await editNumberRange(page);
  await page.waitForTimeout(3000);
  await deleteNumberRange(page);

}

async function deletePreviousNumberRange(page){
  
}

async function addNumberRange(page){

}

async function editNumberRange(page){

}

async function deleteNumberRange(page){

}