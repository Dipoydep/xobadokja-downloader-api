const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    service: "xobadokja-downloader-api",
    status: "online"
  });
});

app.listen(PORT, () => {
  console.log(`Xobadokja API running on port ${PORT}`);
});
