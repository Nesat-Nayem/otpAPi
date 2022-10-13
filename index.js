const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 7070;

const connectDB = require("./config/db");
const usersRoutes = require("./routes/usersRoutes");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

connectDB();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api/users", usersRoutes);

app.use(errorHandler);

// test route

app.get("/", (req, res) => {
  res.send("Trans23 server is running  ...");
});

app.listen(port, () => {
  console.log("listening port" + port);
});
