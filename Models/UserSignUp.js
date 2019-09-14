const mongoose=require('mongoose');

const UserSignUpSchema=mongoose.Schema;

const userSchema=new UserSignUpSchema({

    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true},
    country:{type:String,required:true},
    city:{type:String,required:true}
    

});

module.exports=mongoose.model("UserSignUp",userSchema);