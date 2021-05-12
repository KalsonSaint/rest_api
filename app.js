const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

// enironment variables
const { PORT, DB_CONNECTION } = process.env;

// consants
const db = DB_CONNECTION;
const port = PORT || 4000;

// Import Routes
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");

// Middlewares
app.use(express.json());
app.use("/posts", postRoutes);
app.use("/users", userRoutes);

// Routes
app.get("/", (_req, res) => {
  res.send("Welcome Home!!!");
});

// Connect to DB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connection successful"))
  .catch(() => console.log("DB Connection error!!!"));

// Listen to server
app.listen(port, (err) => {
  if (err) console.error(err);
  console.log("App lsitening to port 4000");
});
