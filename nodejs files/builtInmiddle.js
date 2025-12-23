const express = require("express");
const app = express();
//which is needed for the static
const path = require("path");

// which will recives json data
app.use(express.json());

// which recives form data or url.query data.
app.use(express.urlencoded({ extended: true }));

//which allows to recive text.
app.use(express.text());

// which allows to recive buffer(raw) contents
app.use(express.raw({ type: "application/octet-stream", limit: "2mb" }));

//which allows to send the files to the server/client
app.use(express.static(path.join(__dirname, "public")));

app.post("/form", (req, res) => {
  const user = req.body;
  if (!user) {
    const err = new error("User details required");
    err.status = 404;
    next(err);
  }
  res.status(200).json(user);
});
app.post("/upload", (req, res) => {
  console.log(req.dody);
  res.send("recived the context:" + req.body.toString());
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something went wrong");
});

app.listen(1500, () => {
  console.log(`built in middleware server started at 1500`);
});
