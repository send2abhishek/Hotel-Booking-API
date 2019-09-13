const express = require("express");
const router=express.Router();
const signup=require('../Controllers/signUp');

router.get("/",signup);

module.exports=router;