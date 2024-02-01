const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");

const app = express();

app.use(express.static("public"));

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/bio", (req, res) => {
  res.render("bio");
});

app.get("/experience", (req, res) => {
  res.render("experience");
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

app.listen(3000, () => {
  console.log("Serving on port 3000!");
});
