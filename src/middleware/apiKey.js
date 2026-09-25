const { validateKey } = require("../services/keyService");

function validateApiKey(req, res, next) {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res.status(401).json({
      success: false,
      error: "API key required"
    });
  }

  if (!validateKey(apiKey)) {
    return res.status(401).json({
      success: false,
      error: "Invalid API key"
    });
  }

  next();
}

module.exports = {
  validateApiKey
};
