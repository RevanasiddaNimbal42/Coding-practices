const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 2000;

// Middleware to parse form data & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection
// mongoose.set("strictQuery", true);
const uri = "mongodb://127.0.0.1:27017/myDatabase";
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongoose Error:", err));

// User Schema
const userschem = new mongoose.Schema(
  {
    FirstName: { type: String, required: true },
    LastName: { type: String },
    EmailId: { type: String, required: true, unique: true },
    Gender: { type: String, required: true },
    Job_title: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userschem);

// Middleware examples
app.use((req, res, next) => {
  console.log("Middleware 1");
  req.myname = "revansidda";
  res.setHeader("X-lastName", "NIMBAL");
  next();
});

app.use((req, res, next) => {
  res.setHeader("X-myname", "REVANASIDDA");
  console.log("Second middleware", req.myname);
  next();
});

// GET all users (from MongoDB)
app.get("/users", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// GET, PATCH, PUT, DELETE one user by ID
app
  .route("/users/:id")
  .get(async (req, res) => {
    try {
      const foundUser = await User.findById(req.params.id);
      if (!foundUser) return res.status(404).send("User not found");
      res.status(200).json(foundUser);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })
  .patch(async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedUser) return res.status(404).send("User not found");
      res.status(200).json({ msg: "User updated", data: updatedUser });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })
  .put(async (req, res) => {
    try {
      const replacedUser = await User.findOneAndReplace(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
      );
      if (!replacedUser) return res.status(404).send("User not found");
      res.status(200).json({ msg: "User replaced", data: replacedUser });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })
  .delete(async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) return res.status(404).send("User not found");
      res.status(200).json({ msg: "User deleted" });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  });

// POST new user
app.post("/users", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ msg: "User created", data: newUser });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
