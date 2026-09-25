const express = require("express");
const config = require("../config/config");

const {
  registerApiKey,
  validateApiKey
} = require("./middleware/apiKey");

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

app.get(
  `${config.api.prefix}/test`,
  validateApiKey,
  (req, res) => {
    res.json({
      success: true,
      message: "API key valid"
    });
  }
);

app.listen(PORT, () => {
  console.log(`${config.app.name} running on port ${PORT}`);
});
