const express = require("express");
const app = express();

//these are application level variables which is used anyware.
app.locals.Name = "Revanasidda";
app.locals.Id = 12;

app.get("/", (req, res) => {
  res.send(` Name:${app.locals.Name} and the Id is ${app.locals.Id} `);
});
app.get("/:id", (req, res) => {
  //This is local level variable
  res.locals.Class = "3rd sem";
  res.locals.version = "v2";
  console.log(res.locals.Class);
  res.status(200).json({
    version: res.locals.version,
    uptime: process.uptime(),
  });
});

module.exports = app;
