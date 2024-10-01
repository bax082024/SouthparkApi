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
  res.send("Welcome to my South Park Api! currently it has information about Characters, episodes and some songs. i will add more. feel free to use the README.md file if you need instructions");
});

// Get json files
app.get("/southParkEpisodes", (req, res) => {
  res.json(southParkEpisodes);
});

app.get("/southParkCharacters", (req, res) => {
  res.json(southParkCharacters);
});

app.get("/southParkSongs", (req, res) => {
  res.json(southParkSongs);
});
// Get json files

// Initialize server
app.listen(8001, () => {
  console.log("Running on port 8001.");
});

module.exports = app;