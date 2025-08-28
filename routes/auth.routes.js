// import express

const express = require("express");
const { register } = require("../controllers/auth.controller");

// router

const router = express.Router();

// routes/endpoints

router.post("/register", register);

module.exports = router;
