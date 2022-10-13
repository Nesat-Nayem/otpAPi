const express = require("express");
const { otpLogin, verifyOTP } = require("../controllers/userController");
const router = express.Router();

router.post("/otpLogin", otpLogin);
router.post("/verifyOTP", verifyOTP);

module.exports = router;
