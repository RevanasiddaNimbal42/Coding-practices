const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const app = express();
const users = require("./Data");
const port = 2000;

app.use(express.urlencoded({ extended: true })); // for x-www-form-urlencoded
app.use(express.json()); // for JSON bodies

//connect mongodb

const uri = "mongodb://127.0.0.1:27017/myDatabase";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log("Mongoose Error ", err));

const userschem = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
  },
  EmailId: {
    type: String,
    required: true,
    unique: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Job_title: {
    type: String,
  },
});

const user = mongoose.model("user", userschem);

app.use((req, res, next) => {
  console.log("midleware 1");
  req.myname = "revansidda";
  res.setHeader("X-lastName", "NIMBAL");
  next();
});

app.use((req, res, next) => {
  res.setHeader("X-myname", "REVANASIDDA");
  console.log("second midleware", req.myname);
  next();
});

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET one user by id
// app.get("/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((u) => u.id === id);
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).send("User not found");
//   }
// });
// app.patch("/users/:id", (req, res) => {
//   res.json("Responce pending");
// });
// app.delete("/users/:id", (req, res) => {
//   res.json("responce pending");
// });
//Or

app
  .route("/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((u) => u.id === id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  })
  .patch((req, res) => {
    return res.json("Responce pending");
  })
  .put((req, res) => {
    //edit user with id
    return res.send(`Update user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    return res.json("Responce not found");
  });

// POST new user

app.post("/users", async (req, res) => {
  users.push(req.body);
  // if (
  //   !req.body.FirstName ||
  //   !req.body.LastName ||
  //   !req.body.EmailId ||
  //   !req.body.Gender ||
  //   !req.body.Job_title
  // ) {
  //   res.status(400).json({ mag: "Requires all the informations." });
  // }
  const result = await user.create({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    EmailId: req.body.EmailId,
    Gender: req.body.Gender,
    Job_title: req.body.Job_title,
  });
  console.log("Result:", result);
  res.status(200).json({ msg: "success" });
});

app.listen(port, () => {
  console.log(`server http://localhost:${port} started...`);
});
