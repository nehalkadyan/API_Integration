const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser")
dotenv.config();

const cors = require("cors");
// app

const firstRoute = require("./routes/FirstRoute");

const authRouter = require("./routes/auth.routes");

// update router

const updateRouter = require("./routes/update.routes");

const app = express();

app.use(cookieParser())

app.use(cors(
  {origin: "http://localhost:5173",
  credentials: true
  },
))

//middleware

app.use(express.json());

// server
app.use("/api", firstRoute);
app.use("/api/auth", authRouter);
app.use("/update", updateRouter);

// connect to db

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connetced to DB");
  })
  .catch((err) => console.log("err", err));

app.listen(8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// 4EyXo0nbe0YjpCfX
