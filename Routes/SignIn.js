const express = require("express");
const router=express.Router();
const validate=require('../Helpers/ValidateUser');
const UserCheck =require('../Controllers/signIn')
router.post("/",validate.ValidateSignInUser,UserCheck.ValidateUSerDetails);

module.exports=router;