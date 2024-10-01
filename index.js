const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors"); // Import the cors package

const app = express();

// Use CORS middleware
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Read JSON files
const southParkEpisodes = JSON.parse(fs.readFileSync(path.join(__dirname, "json/southParkEpisodes.json"), "utf-8"));
const southParkCharacters = JSON.parse(fs.readFileSync(path.join(__dirname, "json/southParkCharacters.json"), "utf-8"));
const southParkSongs = JSON.parse(fs.readFileSync(path.join(__dirname, "json/southParkSongs.json"), "utf-8"));

// Create GET requests
app.get("/", (req, res) => {
  res.send("up and running! Welcome to the Miku API. Read docs on how to use: https://github.com/LeahJKH/MikuApiGithub");
});

// Get json files
app.get("/vocaloids", (req, res) => {
  res.json(vocaloids);
});

app.get("/mikuTimeLine", (req, res) => {
  res.json(mikuTimeLine);
});

app.get("/mikuFacts", (req, res) => {
  res.json(mikuFacts);
});
// Get json files

// Initialize server
app.listen(8001, () => {
  console.log("Running on port 8001.");
});

module.exports = app;