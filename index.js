const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.set('trust proxy', true); // trust proxy headers (for real IPs)

const LOG_FILE = path.join(__dirname, "visitors.log");

app.get("/", (req, res) => {
  const timestamp = new Date().toISOString();
  let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";

  if (ip.includes(",")) {
    ip = ip.split(",")[0].trim();
  }
  if (ip.includes("::ffff:")) {
    ip = ip.split("::ffff:")[1];
  }

  const logEntry = `${timestamp} - ${ip}\n`;

  // Append to visitors.log
  fs.appendFile(LOG_FILE, logEntry, (err) => {
    if (err) {
      console.error("Error saving IP:", err);
    }
  });

  res.json({ timestamp, ip });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SimpleTimeService is running on port ${PORT}`);
});