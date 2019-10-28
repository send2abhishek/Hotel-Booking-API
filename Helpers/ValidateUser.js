const joi = require('joi');


const validateUserDetails= (req,res,next) =>{

    const schema=joi.object().keys({

        name:joi.string().min(3).max(30).required(),
        password:joi.string().min(4).max(10).required(),
        email: joi.string().email({ minDomainAtoms: 2 }).required(),
        country:joi.string().alphanum().min(2).max(10).required(),
        city:joi.string().alphanum().min(2).max(10).required()

    });

    joi.validate(req.body,schema,(err,value)=>{

        if(err){

            return res.status(400).json({

                message:err.message,
                responseCode:701
                
            });
        }
        
        next();
    });
    

}

const validateSignIn=(req,res,next)=>{

    const schema=joi.object().keys({

        email:joi.string().required(),
        password:joi.string().min(4).max(10).required(),

    });

    joi.validate(req.body,schema,(err,value)=>{

        if(err){

            return res.status(400).json({

                message:err.message,
                responseCode:701
                
            });
        }
        
        next();
    });


}

const ValidateOrder=(req,res,next)=>{

    const schema=joi.object().keys({

        hotelId:joi.string().required(),
        userId:joi.string().required(),
        persons:joi.number().required()

    });


    joi.validate(req.body,schema,(err,value)=>{

        if(err){

            return res.status(400).json({

                message:err.message,
                responseCode:701,
                errorMsg:"Hotel Id is missing"
                
            });
        }
        
        next();
    });
    
}

module.exports={

    ValidateUser:validateUserDetails,
    ValidateSignInUser:validateSignIn,
    ValidateOrders:ValidateOrder
};