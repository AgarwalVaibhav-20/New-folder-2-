const express = require("express");
const app = express()
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
// app.post('/url', (req, res) => {
//   // Handle the POST request here
//   console.log("Data received:", req.body);
//   // ... Process the data (e.g., store it in a database) ...
//   res.status(201).send('URL created successfully'); // 201 Created is a good response
// });

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;