const express = require("express");

// import update controller

const { updateUsername } = require("../controllers/update.controller");

const router = express.Router();

// update route

// PUT vs PATCH

router.patch("/username", updateUsername);

module.exports = router;
