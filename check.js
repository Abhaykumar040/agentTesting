import { getDB } from "./db.js";
import { ObjectId } from "mongodb";

const db = await getDB();

// -------- STEP 1 — find exact user --------

// const companyId="697e06823ff7f87c11b04575";
// const company = new ObjectId("697e06823ff7f87c11b04575");
const companyId="68dcfc116e4e85ccbf65b2f1";
const company = new ObjectId("68dcfc116e4e85ccbf65b2f1");
const type = "agent";

const user = await db.collection("users").findOne({
 
  company,
  type,status:1
});
const userDetails = await db.collection("userdetails").findOne({

  company,
  type,status:1
});
const invoicesss = await db.collection("invoices").findOne({

  company,
 status:1
});

if (!user) {
  console.log("User not found with given conditions");
  process.exit(0);
}

// const userId = user._id;
// const userDetailsId=userDetails._id;

// -------- STEP 2 — update users --------
// const u1 = await db.collection("users").updateOne(
//   { _id: userId },
//   { $set: { status: 3 } }
// );
// const u11 = await db.collection("userdetails").updateMany(
//   {  company,
//   type,status:1 },
//   { $set: { status: 3 } }
// );
// console.log("userDetails",u11.matchedCount, u11.modifiedCount);

// const leads = await db.collection("leads").updateMany(
//   {  company,
//   status:1 },
//   { $set: { status: 3 } }
// );
// console.log("leads",leads.matchedCount, leads.modifiedCount);

// const tickets = await db.collection("supportcases").updateMany(
//   {  company:companyId,
//   status:1 },
//   { $set: { status: 3 } }
// );
// console.log("ticekts",tickets.matchedCount, tickets.modifiedCount);

// const queue = await db.collection("queues").updateMany(
//   {  company:companyId,
//   status:1 },
//   { $set: { status: 3 } }
// );
// console.log("queue",queue.matchedCount, queue.modifiedCount);

// const teams = await db.collection("teams").updateMany(
//   {  company:companyId,
//   status:1 },
//   { $set: { status: 3 } }
// );
// console.log("teams",teams.matchedCount, teams.modifiedCount);

// const faq = await db.collection("faqs").updateMany(
//   {  company:companyId,
//   status:1 },
//   { $set: { status: 3 } }
// );
// console.log("faq",faq.matchedCount, faq.modifiedCount);



// const crmSetting = await db.collection("crmsettings").updateOne(
//   {  company,
//   status:1 },
//   { $set: { sla: [],caseCategories:[] } }
// );
// console.log("crmSettings",crmSetting.matchedCount, crmSetting.modifiedCount);

// const invoice = await db.collection("invoices").updateMany(
//   {  company:companyId,
//   status:1 },
//   { $set:{ status: 3 } }
// );
// console.log("invoice",invoice.matchedCount, invoice.modifiedCount);


// const quotation = await db.collection("quotations").updateMany(
//   {  company:companyId,
//   status:1 },
//   { $set:{ status: 3 } }
// );
// console.log("quotation",quotation.matchedCount, quotation.modifiedCount);



const zone = await db.collection("zones").updateMany(
  {  company:companyId,
  status:1 },
  { $set:{ status: 3 } }
);
console.log("zone",zone.matchedCount, zone.modifiedCount);



// -------- STEP 3 — update userdetails --------
// const u2 = await db.collection("userdetails").updateOne(
//   { user: userId,company,type },
//   { $set: { status: 3 } }
// );

// console.log("userdetails updated:", u2.modifiedCount);

// // -------- STEP 4 — update agent --------
// const u3 = await db.collection("tenantusers").updateMany(
//   {  company: company ,type,status:1},
//   { $set: { status: 3 } }
// );
//



console.log("agent updated:", u4.matchedCount);
