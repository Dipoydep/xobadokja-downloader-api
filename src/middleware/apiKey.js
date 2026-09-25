const crypto = require("crypto");

const API_KEYS = new Set();

function generateApiKey() {
  const random = crypto.randomBytes(9).toString("base64url");
  return `xobadokja_${random}`;
}

function registerApiKey() {
  const key = generateApiKey();
  API_KEYS.add(hashKey(key));
  return key;
}

function hashKey(key) {
  return crypto
    .createHash("sha256")
    .update(key)
    .digest("hex");
}

function validateApiKey(req, res, next) {
  const key = req.headers["x-api-key"];

  if (!key) {
    return res.status(401).json({
      success: false,
      error: "API key required"
    });
  }

  if (!API_KEYS.has(hashKey(key))) {
    return res.status(401).json({
      success: false,
      error: "Invalid API key"
    });
  }

  next();
}

module.exports = {
  registerApiKey,
  validateApiKey
};
