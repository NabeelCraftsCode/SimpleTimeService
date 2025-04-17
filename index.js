// index.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const timestamp = new Date().toISOString();
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  res.json({ timestamp, ip });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SimpleTimeService is running on port ${PORT}`);
});
