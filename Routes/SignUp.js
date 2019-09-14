const express = require("express");
const router=express.Router();
const signup=require('../Controllers/signUp');
const validate=require('../Helpers/ValidateUser');

router.post("/",validate.ValidateUser,signup.RegisterUser);


module.exports=router;