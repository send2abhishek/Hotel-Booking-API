
const registerUser=(req,res,next) =>{
    res.status(201).json({
        message: "Hi From User SignUp "
    })
};

module.exports=registerUser;