const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.append("Link", ["<http://localhost/>", "<http://localhost:3000/>"]); //which sets this in the header
  res.attachment();
  res.attachment("example.pdf"); //they will force the client to dowload the files instade of opening
  res.get("Content-Type"); //returns the header stored value
  res.json({ massage: "This donot allow the cross domain accesment" });
  res.end(); //used when ending the response\
  res.jsonp({ massage: "This allows cross domain accessment" });
  res.links({
    next: "http://api.example.com/items?page=2",
    last: "http://api.example.com/items?page=10",
  }); // sets the link http header
  res.redirect("google.com"); //which redirects means opens google.com when i called /google
});
