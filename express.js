const express = require("express");
const { dirname } = require("path")
const app = express();

app.get("/Contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html")
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html")
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/home.html")
});

app.listen(5000, () => {
  console.log("server at start 5000");
});