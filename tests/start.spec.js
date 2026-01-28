import { test, expect }  from '@playwright/test';
import fs from 'fs/promises';
import { loginRight } from './login';
import { priority } from '../setting/priority';
import { status } from '../setting/status';
import { form } from '../setting/form';
import { productCategory } from '../setting/productCategory';
import { product } from '../masterData/product';
import { skill } from '../masterData/skill';
import { customerfsm } from '../fsm/customerfsm';
import { lead } from '../sales/lead';

let testData; 

test.beforeAll(async () => {
  const rawData = await fs.readFile('./data.json', 'utf8');
  testData = JSON.parse(rawData);
});
test('basic test', async ({ page }) => {
await loginRight(page);
// await priority(page);
// await status(page);

//form creation is done ,other are pending
// await form(page);
// await productCategory(page);
// await product(page);
// await skill(page);
// await customerfsm(page);
await lead(page);
});
