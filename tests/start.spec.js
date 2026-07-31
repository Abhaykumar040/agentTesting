import { test, expect }  from '@playwright/test';
import fs from 'fs/promises';
import { internalJob } from '../fsm/internalJob';
import { cyclicJob } from '../fsm/cyclicJob';
import { AssetManagement } from '../fsm/assetmanagement';
import { jobType } from '../fsm/jobType';
import { Engineer } from '../fsm/engineer';
import { Tickets } from '../customerService/ticket';
import { setting } from '../customerService/setting';
import { FAQs } from '../customerService/faq';
import { customerInC_service } from '../customerService/customerInC_Service';
import { Queue } from '../customerService/Queues';
import { loginCustomerPortal, loginEngineerPortal, loginRight } from './login';
import { companySetup } from '../setting/CompanySetup';
import { team } from '../customerService/team';
import { cs_agent } from '../customerService/cs-agent';
import { Invoices } from '../sales/invoices';
import { Quotation } from '../sales/quotation';
import { zone } from '../masterData/zone';
import { customer } from '../sales/customer';
import { assetsCategory } from '../masterData/assets-category';
import { formCustomization } from '../setting/formCustomization';
import { priority } from '../setting/priority';
import { salesAgents } from '../sales/sales-agents';
import { roles } from '../setting/roles';
import { status } from '../setting/status';
import { form } from '../setting/form';
import { productCategory } from '../setting/productCategory';
import { product } from '../masterData/product';
import { skill } from '../masterData/skill';
import { customerfsm } from '../fsm/customerfsm';
import { lead } from '../sales/lead';
import { quotationInsideCustomer } from '../sales/quotationInsideCustomer';
import { invoicesInsideCustomer } from '../sales/invoiceInsideCustomer';
import { ticketInsideCustomer } from '../customerService/ticketInsideCustomer';
import { dashboard } from '../dashboard/dashboard';
import { dispatcher } from '../fsm/dispatcher';
import { webform } from '../customerService/webform';
import { esignTemplate } from '../eSign/templates';
import { signatureRequestEsign } from '../eSign/signatureRequest';
import { opportunity } from '../sales/opportunity';
import { emailTemplateSetting } from '../setting/emailTemplate';


let testData; 
const jsonText = await fs.readFile('./data.json', 'utf8');
const data = JSON.parse(jsonText); 
test.beforeAll(async () => {
  const rawData = await fs.readFile('./data.json', 'utf8');
  testData = JSON.parse(rawData);
});
await fs.rm("./screenshot", {
    recursive: true,
    force: true,
});


await fs.access("../parent.js").then(() => fs.unlink("../parent.js")).catch(() => {});

test('basic test', async ({ page ,context }) => { 
   await context.grantPermissions(
    ['clipboard-read', 'clipboard-write'],
    {
      origin: data.url
    }
  );


await loginRight(page);
// await companySetup(page);
// await formCustomization(page);


// await priority(page);//doneA


// await roles(page); //doneA
// await status(page); 
// await emailTemplateSetting(page);
// await productCategory(page); //doneA
// await product(page); // referenced product is not done
// await form(page);
// await skill(page);

// await zone(page);
// await assetsCategory(page);

// await salesAgents(page);
// await lead(page); //export is not done
// await opportunity(page);
// await customer(page);
await Quotation(page); //sendQuoataion must have email read with file option
await quotationInsideCustomer(page);
await Invoices(page);
await invoicesInsideCustomer(page);


// await cs_agent(page);
// await team(page);
// await setting(page);
// // await customerInC_service(page); 
// await Queue(page);
// await Tickets(page);
// await ticketInsideCustomer(page);
// await webform(page); 
// await esignTemplate(page);
// await signatureRequestEsign(page);
// await FAQs(page);
await Engineer(page);
await jobType(page);
await AssetManagement(page);
// await customerfsm(page);

// await dispatcher(page);
await internalJob(page);
// await cyclicJob(page);
// await dashboard(page);

// await page.waitForTimeout(30000);

















//form creation is done ,other are pending




// await customerfsm(page);

});
