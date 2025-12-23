const express = require("express");
const app = express();

// app.all example
app.all("/profile", (req, res) => {
  res.send("This runs for GET/POST/PUT/DELETE on /profile ONLY");
});
//OR which runs all api/any endpoint
//app.all("/api/*", requireauth);

app.use("/profile", (req, res, next) => {
  console.log("Middleware runs for any path starting with /profile");
  next();
});

app.delete("/users/:id", (req, res) => {
  res.send("DELETE request came...");
});

app.disable("trust proxy"); //disables in the header
app.disabled("trust proxy"); //true
app.enable("trust proxy"); //enables in the header
app.enabled("trust proxy"); //true
app.set("name", "Revansidda");
console.log(app.get("name"));

app
  .route("/users")
  .get((req, res, next) => {
    res.send("Route calles get method");
  })
  .post((req, res, next) => {
    res.send("Route called post method");
  });

const admin = express();

app.use("/admin", admin);
console.log(admin.path());

//which is user to create automatic middleware
app.param("user", (req, res, next, value, name) => {
  console.log(`param called ${name} of the value ${value}`);
  req.user = {
    id: "12",
    name: "user" + value,
  };
  next();
});
app.get("/user/:user", (req, res) => {
  res.send(`User Info: ${JSON.stringify(req.user)}`);
});

module.exports = app;
