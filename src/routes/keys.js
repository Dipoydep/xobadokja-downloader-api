const express = require("express");
const { registerApiKey } = require("../middleware/apiKey");

const router = express.Router();

router.post("/keys", (req, res) => {
  const key = registerApiKey();

  res.status(201).json({
    success: true,
    api_key: key
  });
});

module.exports = router;
