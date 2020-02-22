const express = require("express");
const router = express.Router();
const signup = require("../Controllers/signUp");
const validate = require("../Helpers/ValidateUser");

router.post("/", validate.ValidateUser, signup.RegisterUser);

router.get("/", (req, res, next) => {
  return res.status(201).json({
    message: "test"
  });
});
module.exports = router;
