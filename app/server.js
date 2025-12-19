const express = require("express");
const path = require("path");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend
app.use(express.static(path.join(__dirname, "public")));

// Health endpoint (used by UI, Kubernetes, monitoring)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    application: "DevSecOps EKS Node App",
    hostname: os.hostname(),
    timestamp: new Date(),
  });
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
