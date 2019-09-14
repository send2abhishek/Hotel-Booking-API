const mongoose=require("mongoose");
const UsersignUpModel=require('../Models/UserSignUp');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const ValidateUser= (req,res,next)=>{
    UsersignUpModel.find({email:req.body.username})
        .then(result=>{
            
            if(result.length < 1){

                return res.status(404).json({
                     message:'Username and Password Invalid'
                 })
             }

             bcrypt.compare(req.body.password,result[0].password,(error,resp)=>{
                // console.log("Error is",error);
                // console.log("Success is ",resp);
                // console.log(result)
                if(error){

                    return res.status(401).json({
                        message:'Invalid password'
                    });
                }

                if(resp){
                    
                    const Token=jwt.sign({

                        email:result[0].email,
                        country:result[0].country,
                        city:result[0].city

                    },'secret',{
                        expiresIn: "1h",
                    });

                    return res.status(200).json({
                        message:'Auth Success',
                        responseCode:800,
                        token:Token,
                        email:result[0].email,
                        city:result[0].city,
                        country:result[0].country,
                    });
                }
                return res.status(401).json({
                    message:'Auth Failed'
                });

             })
        })
        .catch(error =>{
                        
            res.status(500).json({
                message:"Something Went Wrong",
                info:error.message
            })
        })


    
}

module.exports={

    ValidateUSerDetails:ValidateUser
}