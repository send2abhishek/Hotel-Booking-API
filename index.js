const express = require("express");
const mongoose = require("mongoose");
const app = express();
const signUp = require("./Routes/SignUp");
const bodyParser = require("body-parser");
const signIn = require("./Routes/SignIn");
const hotelRoutes = require("./Routes/HotelRoutes");

// It will parse incomming post request body
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");

  next();
});

//mongodb+srv://send2abhishek:aryan@cluster0-orw7v.mongodb.net/hotel
//mongodb://localhost:27017/hotelDb
mongoose
  .connect(
    "mongodb+srv://send2abhishek:aryan@cluster0-orw7v.mongodb.net/hotel",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )

  .then(() => {
    console.log("Db Connected");
  })
  .catch(err => {
    console.log("Error in connecting db", err.message);
  });

app.use("/signup", signUp);
app.use("/signin", signIn);
app.use("/hotels", hotelRoutes);

app.use((req, res, next) => {
  const error = new Error("Page Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
