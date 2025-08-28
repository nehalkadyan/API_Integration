const User = require('../Models/User.model');

const storeUser = async (req, res) => {
    let user = {
        username: "raghav",
        email: "raghav@gmail.com",
        password: "raghav123",
    }

    const insertedUser = await User.create(user);

    return res
    .status(200)
    .json({message:"User created successfully", user: insertedUser});

};