// update.js

import { getDB } from "./db.js";
import { ObjectId } from "mongodb";

export async function run(module) {
  const db = await getDB();

  const companyId = "6a5674f7c9afcedf207da033";
  const company = new ObjectId(companyId);
  const type = "agent";

  switch (module) {

    case "leads": {
      const result = await db.collection("leads").updateMany(
        { company, status: 1 },
        { $set: { status: 3 } }
      );
      console.log(result.matchedCount, result.modifiedCount);
      break;
    }

    case "users": {
      const user = await db.collection("users").findOne({
        company,
        type,
        status: 1,
      });

      if (!user) return console.log("User not found");

      const result = await db.collection("users").updateOne(
        { _id: user._id },
        { $set: { status: 3 } }
      );

      console.log(result.modifiedCount);
      break;
    }

    case "tickets": {
      const result = await db.collection("supportcases").updateMany(
        { company: companyId, status: 1 },
        { $set: { status: 3 } }
      );

      console.log(result.matchedCount, result.modifiedCount);
      break;
    }
     case "statusprofile": {
      const result = await db.collection("statusprofile").updateMany(
        { company:companyId, status: 1 },
        { $set: { status: 3 } }
      );

      console.log(result.matchedCount, result.modifiedCount);
      break;
    }

    case "crmsettings": {
      const result = await db.collection("crmsettings").updateOne(
        { company, status: 1 },
        {
          $set: {
            sla: [],
            caseCategories: [],
          },
        }
      );

      console.log(result.modifiedCount);
      break;
    }

    default:
      console.log("Invalid module");
  }
}