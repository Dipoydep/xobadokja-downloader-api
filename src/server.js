const express = require("express");
const config = require("../config/config");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    service: config.app.name,
    version: config.app.version,
    status: "online"
  });
});

app.listen(PORT, () => {
  console.log(`${config.app.name} running on port ${PORT}`);
});
