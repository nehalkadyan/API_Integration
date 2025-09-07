// import express

const express = require("express");
const { register, login } = require("../controllers/auth.controller");

// router

const router = express.Router();

// routes/endpoints

router.post("/register", register);

// api signin

router.post("/login", login);

module.exports = router;
