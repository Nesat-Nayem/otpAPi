const express = require("express");
const cors = require("cors");
// const ObjectId = require("mongodb").ObjectId;
const port = process.env.PORT || 7070;
// const dotenv = require("dotenv");
// const path = require("path");
// const fs = require("fs");

const connectDB = require("./config/db");
// dotenv.config();

// route handler

const usersRoutes = require("./routes/usersRoutes");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

// db connernt

connectDB();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api/users", usersRoutes);

app.use(errorHandler);

// for heroku make this comment

// test route

app.get("/", (req, res) => {
  res.send("Trans23 server is running  ...");
});

app.listen(port,()=> {
  console.log("listening port" + port);
});
