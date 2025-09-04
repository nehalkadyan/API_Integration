// import the User model
const User = require("../Models/User.model");
// importing bcrypt
const bcrypt = require("bcryptjs");

// signup controller

async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    // console.log("username", username);
    // console.log("email", email);
    // console.log("password", password);

    // check whether user already exists

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password

    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user
    const newuser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // storing user in db
    await newuser.save();

    return res.json({
      message: "User created successfully",
      user: newuser,
    });
  } catch (err) {
    console.log("err", err);
  }
}

module.exports = {
  register,
};
