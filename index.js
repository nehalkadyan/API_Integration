const express = require("express");
// const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// app

const firstRoute = require("./routes/FirstRoute");

const app = express();
// server
app.use("/api", firstRoute);
// mongoose.connect(process.env.MONGO_URL).then(() => {
//     console.log("Connected to MongoDB");
// }).catch((err) => console.log(err))

// app.use("/", (req, res) => {
//   return res.send("<h1>Hello<h1>");
// });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
