import fs from "fs/promises";
import 'dotenv/config';
async function run() {
  try {
    const url = "https://zynka-tech-api-uat-b6dvdecvakdma0ae.z01.azurefd.net/erp-api-uat/companies/68dcfc116e4e85ccbf65b2f1";

    // env token check
    const token = process.env.API_TOKEN;
    if (!token) {
      throw new Error("API_TOKEN env variable not set");
    }

    // body.json read + parse
    const fileData = await fs.readFile("body.json", "utf-8");
    const body = JSON.parse(fileData);

    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const text = await response.text();

    console.log("Status:", response.status);
    console.log("Response:", text);

  } catch (err) {
    console.error("Error:", err.message);
  }
}

run();
