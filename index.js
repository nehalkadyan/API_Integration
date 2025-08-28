const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// app

const firstRoute = require("./routes/FirstRoute");

const app = express();
// server
app.use("/api", firstRoute);

// connect to db

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connetced to DB");
  })
  .catch((err) => console.log("err", err));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// 4EyXo0nbe0YjpCfX
