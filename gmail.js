import dotenv from "dotenv";
import Imap from "imap";
import { simpleParser } from "mailparser";

dotenv.config();

function connectIMAP() {
  return new Imap({
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
    host: process.env.IMAP_HOST,
    port: process.env.IMAP_PORT,
    tls: true,
    tlsOptions: { rejectUnauthorized: false }
  });
}

async function waitForEmail(targetTo, maxWait = 120000) {

  const startTime = Date.now();

  while (Date.now() - startTime < maxWait) {

    console.log("Checking latest email...");

    const email = await checkLatest(targetTo);

    if (email) {
      return email;
    }

    console.log("No match → retrying in 5 seconds...");
    await new Promise(r => setTimeout(r, 5000));

  }

  throw new Error("Email not received within time");
}

function checkLatest(targetTo) {

  return new Promise((resolve, reject) => {

    const imap = connectIMAP();

    console.log("Connecting IMAP...");

    imap.once("ready", () => {

      console.log("IMAP connected");

      imap.openBox("INBOX", false, (err, box) => {

        if (err) {
          imap.end();
          return reject(err);
        }

        imap.search(["UNSEEN"], (err, results) => {

          if (!results || results.length === 0) {
            imap.end();
            return resolve(null);
          }

          const latest = results.slice(-1);

          const fetch = imap.fetch(latest, { bodies: "" });

          fetch.on("message", (msg) => {

            msg.on("body", (stream) => {

              simpleParser(stream, (err, parsed) => {

                const to = parsed.to?.text || "";

                if (!to.includes(targetTo)) {

                  console.log("Latest email TO not matching");

                  imap.end();
                  return resolve(null);
                }

                const data = {
                  to: parsed.to?.text,
                  from: parsed.from?.text,
                  subject: parsed.subject,
                  body: parsed.text,
                  attachments: parsed.attachments
                };

                console.log("Matching email found");

                imap.end();
                resolve(data);

              });

            });

          });

          fetch.once("end", () => {
            imap.end();
          });

        });

      });

    });

    imap.once("error", (err) => {
      console.log("IMAP error:", err);
      reject(err);
    });

    imap.connect();

  });

}

(async () => {

  console.log("STARTING EMAIL CHECK");

  try {

    const email = await waitForEmail("akbk6551+1141@gmail.com");

    console.log("EMAIL FOUND:");
    console.log(email);

  } catch (err) {

    console.log("ERROR:", err.message);

  }

})();