// user model

const User = require("../Models/User.model");

// update controller

const updateUsername = async (req, res) => {
  try {
    const { id, username } = req.body;

    // find user by id

    const user = await User.findById(id);

    // verify whether user exists

    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    // update
    user.username = username;
    await user.save();

    return res.status(200).json({ message: "User updated successfully", user });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  updateUsername,
};
