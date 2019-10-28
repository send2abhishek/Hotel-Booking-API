const mongoose=require('mongoose');

const OrderSchema=mongoose.Schema;

const userSchema=new OrderSchema({

    _id:mongoose.Schema.Types.ObjectId,
    hotelId:{type:mongoose.Schema.Types.ObjectId, ref:'Hotel',required:true},
    userId:{type:mongoose.Schema.Types.ObjectId, ref:'UserSignUp',required:true},
    persons:{type:Number,default:1}
    

});

module.exports=mongoose.model("Order",userSchema);