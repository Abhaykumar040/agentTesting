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
 case "opportunities": {
      const result = await db.collection("opportunities").updateMany(
        { company, status: 1 },
        { $set: { status: 3 } }
      );
      console.log(result.matchedCount, result.modifiedCount);
      break;
    }

  

case "agents": {
  const id = new ObjectId("6a5674f7c9afcedf207da031");

  // Update userdetails collection
  const userDetailsResult = await db.collection("userdetails").updateMany(
    { company, status: 1,type:"agent" },
    {
      $set: {
        company: id
       
      },
    }
  );

  // Update agents collection
  const agentsResult = await db.collection("agents").updateMany(
    { company, status: 1 ,agentType:"sales" },
    {
      $set: {
        company: id,
        userDetailId: id,
      },
    }
  );

  console.log("UserDetails:", {
    matched: userDetailsResult.matchedCount,
    modified: userDetailsResult.modifiedCount,
  });

  console.log("Agents:", {
    matched: agentsResult.matchedCount,
    modified: agentsResult.modifiedCount,
  });

  break;
}


    case "zones": {
      const result = await db.collection("zones").updateMany(
        { company:companyId, status: 1 },
        { $set: { status: 3 } }
      );
      console.log(result.matchedCount, result.modifiedCount);
      break;
    }

     case "quotations": {
      const result = await db.collection("quotations").updateMany(
        { company:companyId, status: 1 },
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
     case "statusprofiles": {
      const result = await db.collection("statusprofiles").updateMany(
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