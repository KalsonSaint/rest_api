const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

// Import Routes
const postRoute = require("./routes/posts");

// Middleware
app.use(bodyParser.json());
app.use("/posts", postRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome Home!!!");
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB!");
  }
);

// Listen to server
app.listen(4000, () => {
  console.log("App lsitening to port 4000");
});
