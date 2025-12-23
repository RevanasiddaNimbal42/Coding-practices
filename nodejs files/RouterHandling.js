//This is the Router folder syntax

const express = require("express");
const router = express.Router();

//midleware specific to the router
function timelog(req, res, next) {
  console.log("Time: ", Date.now);
  next();
}

router.use(timelog);

router.get("/", (req, res) => {
  res.send("Router get request");
});
router.post("/singup", (req, res) => {
  res.send("Router post request ");
});

module.exports = router;
