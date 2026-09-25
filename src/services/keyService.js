const crypto = require("crypto");

const keys = new Map();

function generateApiKey() {
  const random = crypto
    .randomBytes(9)
    .toString("base64url");

  return `xobadokja_${random}`;
}

function hashKey(key) {
  return crypto
    .createHash("sha256")
    .update(key)
    .digest("hex");
}

function createKey(name = "default") {
  const apiKey = generateApiKey();
  const hash = hashKey(apiKey);

  keys.set(hash, {
    name,
    createdAt: new Date().toISOString(),
    active: true
  });

  return apiKey;
}

function validateKey(apiKey) {
  if (!apiKey) {
    return false;
  }

  const hash = hashKey(apiKey);
  const data = keys.get(hash);

  return Boolean(data && data.active);
}

module.exports = {
  createKey,
  validateKey
};
