const express = require("express");
const app = express();
const router = express.Router();

//This is exicuted for every router requests
router.use((req, res, next) => {
  console.log("Middleware one");
  next();
});

//sub-stack middleware with http request to user/id
router.use(
  "/user/:id",
  (req, res, next) => {
    console.log("Requested URL: ", req.originalUrl);
    // res.send("middleware two"); //which is not allowed
    next();
  },
  (req, res, next) => {
    console.log("User id: ", req.params.id);
    next();
  }
);

router.get(
  "/user/:id",
  (req, res, next) => {
    //if id != 0 , next route
    if (req.params.id === "0") next("route");
    else next(); //other wise next middleware
  },
  (req, res, next) => {
    console.log("Reguler");
    res.send("Regular middleware");
  }
);

router.get("/user/:id", (req, res, next) => {
  console.log("Requested Id: ", req.params.id);
  res.send("Last middleware when id is zero in above middleware");
});
app.use("/", router);
app.listen("1000", () => {
  console.log("Router level midleware Started");
});
