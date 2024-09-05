// Add Express
const express = require("express");
const fs = require("fs");
const path = require("path");

// Initialize Express
const app = express();

// Read JSON files
const vocaloids = JSON.parse(fs.readFileSync(path.join(__dirname, "json/vocaloids.json"), "utf-8"));
const mikuTimeLine = JSON.parse(fs.readFileSync(path.join(__dirname, "json/mikuTimeLine.json"), "utf-8"));
const mikuFacts = JSON.parse(fs.readFileSync(path.join(__dirname, "json/mikuFacts.json"), "utf-8"));

// Create GET request
app.get("/", (req, res) => {
  res.send("up and running! welcome too miku api read docs on how too use. https://github.com/LeahJKH/MikuApiGithub");
});
app.get("/vocaloids", (req, res) => {
  res.json(vocaloids);
});

app.get("/mikuTimeLine", (req, res) => {
  res.json(mikuTimeLine);
});

app.get("/mikuFacts", (req, res) => {
  res.json(mikuFacts);
});
// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;