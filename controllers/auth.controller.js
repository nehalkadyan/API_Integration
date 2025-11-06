// import the User model
const User = require("../Models/User.model");
// importing bcrypt
const bcrypt = require("bcryptjs");
// importing jwt
const jwt = require('jsonwebtoken');

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

    return res.status(201).json({
      message: "User created successfully",
      user: newuser,
    });
  } catch (err) {
    console.log("err", err);
  }
}

// sign in controller

async function login(req, res) {
  try {
    const { email, password } = req.body;

    // verify whether user exists with the email or not

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User does not exist" });
    }

    // step 2 -> verify password

    const isPasswordSame = await bcrypt.compareSync(
      password,
      existingUser.password
    );

    console.log("isPasswordSame", isPasswordSame);

    if (!isPasswordSame) {
      return res.json({ message: "Password Incorrect!" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // set cookie
    res.cookie("access_token", token, {httpOnly: true})

    return res.status(200).json({
      message: "User successfully logged In",
      user: existingUser,
      token: token
    });

  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error", err });
  }
}

module.exports = {
  register,
  login,
};
