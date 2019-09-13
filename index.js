const express=require('express');
const mongoose=require('mongoose');
const app=express();

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Header","*");

    next();
});

// app.use('/',(req,res,next)=>{

//     res.status(200).json({
//         message:"API is ready, lets go ahead",
//         data:"You are good to go"
//     });
// })

mongoose.connect("mongodb://localhost:27017/hotelDb",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(()=>{
    console.log("Db Connected");
})
.catch((err)=>{
    console.log("Error in connecting db",err.message);
})

app.use((req,res,next)=>{
    const error=new Error('Page Not found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({

        error:{
            message: error.message
        }


    });
});

module.exports=app;