const express = require("express");
const cors = require("cors");
const path = require("path");
// const mongoose = require('mongoose');
const formidable = require("express-formidable");
const uniqid = require("uniqid");
const connectToDB = require("./db");
const requestIp = require("request-ip");

// start express server
const app = express();
const server = app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running...");
});

// connect to DB
connectToDB();

// add middleware
app.use(cors());
app.use(requestIp.mw());

app.use(function(req, res, next) {
  const ip = req.clientIp;
  req.ip = ip;
  next();
});

// s
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/client/build")));

// add photo routes
app.use("/api", require("./routes/photos.routes"));
app.use("/api", require("./routes/voters.routes"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.use((req, res) => {
  res.status(404).send({ message: "Not found..." });
});
