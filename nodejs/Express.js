const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send(`This is the Home page `);
});
app.get("/about", (req, res) => {
  return res.send(` hello form ${req.query.name} and ${req.query.id} `);
});

app.listen("5000", () => {
  console.log("gets started");
});
