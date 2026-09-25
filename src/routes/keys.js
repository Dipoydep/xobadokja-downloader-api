const express = require("express");
const { createKey } = require("../services/keyService");

const router = express.Router();

router.post("/keys", (req, res) => {
  const name = req.body?.name || "default";
  const apiKey = createKey(name);

  res.status(201).json({
    success: true,
    name,
    api_key: apiKey
  });
});

module.exports = router;
