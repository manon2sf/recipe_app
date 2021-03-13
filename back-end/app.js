/**
 * app.js - Main App Configuration
 */

/**
 * Module imports
 */
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const package =
  process.env.NODE_ENV !== "production" ? require("../package.json") : {};
const cors = require("./middlewares/cors");

/**
 * Router imports
 */
const indexRouter = require("./routes/index");

/**
 *  Create app
 */
const app = express();

/**
 *  Database connection
 */

/* Get Database address */
const database = process.env.DB || "mongodb://localhost:27017/" + package.name;

/* Connect to database*/
mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true });

/* Check connection to data base */
mongoose.connection.on("error", (error) => {
  console.error(error);
  process.exit(1);
});

mongoose.connection.once("open", () => {
  console.log("database connected on" + database);
});

/**
 *  Middlewares
 */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors.handle);

/**
 * Routes
 */
app.use("/", indexRouter);

module.exports = app;
