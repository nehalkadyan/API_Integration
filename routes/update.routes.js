const express = require("express");

// import update controller
const { updateUsername } = require("../controllers/update.controller");

// import middleware
const verifyUser = require("../middlewares/verifyUser");

const router = express.Router();

// update route

// PUT vs PATCH

router.patch("/username", verifyUser, updateUsername);

module.exports = router;
