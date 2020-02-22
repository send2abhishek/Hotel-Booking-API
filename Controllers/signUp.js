const mongoose = require("mongoose");
const UsersignUpModel = require("../Models/UserSignUp");
const bcrypt = require("bcrypt");

const registerUser = (req, res, next) => {
  UsersignUpModel.find({ email: req.body.email })

    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "User Already Exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (error, hash) => {
          if (error) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new UsersignUpModel({
              _id: new mongoose.Types.ObjectId(),
              name: req.body.name,
              password: hash,
              email: req.body.email,
              country: req.body.country,
              city: req.body.city
            });

            user
              .save()
              .then(result => {
                res.status(201).json({
                  message: "User Register",
                  responseCode: 800
                });
              })
              .catch(error => {
                console.log(error);
                res.status(500).json({
                  message: "Something Went Wrong",
                  info: error.message
                });
              });
          }
        });
      }
    })

    .catch(error => {
      res.status(500).json({
        message: "Something Went Wrong",
        info: error.message
      });
    });
};

module.exports = {
  RegisterUser: registerUser
};
