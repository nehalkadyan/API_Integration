// import the User model

const User = require("../Models/User.model");

// signup controller

async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    console.log("username", username);
    console.log("email", email);
    console.log("password", password);
  } catch (err) {
    console.log("err", err);
  }
}
