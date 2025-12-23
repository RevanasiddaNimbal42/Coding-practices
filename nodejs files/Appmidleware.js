const express = require("express");
const app = express();

const mylonger = function (req, res, next) {
  console.log("Logged");
  next();
};

const reqTime = (req, res, next) => {
  req.reqestTime = Date.now();
  next();
};
//midleware use should before the http methods
app.use(mylonger);
app.use(reqTime);

//the bellow midleware will run for every http methods & multiple midleware
app.use(
  "/user/:id",
  (req, res, next) => {
    console.log("Request type:", req.method);
    next();
  },
  (req, res) => {
    console.log("Reqested URL: ", req.originalUrl);
  }
);

//Sub-stack midleware
app.get(
  "/user/:id",
  (req, res, next) => {
    //if user id is zero skip to next route
    if (req.params.id === "0") next("route");
    else next(); //other wise continue with next midleware
  },
  (req, res, next) => {
    res.send("second nested midleware");
    console.log("reguler");
  }
);

app.get("/user/:id", (req, res) => {
  let responseTime = `Hello world <br>`;
  responseTime += `<small> request at: ${req.requestTime}</small>`;
  res.send(responseTime);
});

app.listen("2000", () => {
  console.log("midelware server started");
});
