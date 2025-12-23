const express = require("express");
const app = express();

app.get("/profile", async (req, res) => {});

//error handling middleware(always last)
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    massage: err.massage,
  });
});

app.listen("1200", () => {
  console.log("error server started");
});
