const hotelModel = require("../Models/HotelModel");
const mongoose = require("mongoose");
const CreateNewHotel = (req, res, next) => {
  hotelModel
    .find({ regId: req.body.regId })
    .then(response => {
      if (response.length >= 1) {
        return res.status(409).json({
          message: "Hotel Already Exists"
        });
      } else {
        const hotelReg = new hotelModel({
          _id: new mongoose.Types.ObjectId(),
          regId: req.body.regId,
          Name: req.body.name,
          Description: req.body.desc,
          Location: req.body.location,
          Price: req.body.price,
          Aminity: req.body.aminity
        });

        hotelReg
          .save()
          .then(result => {
            res.status(201).json({
              message: "Hotel Registered",
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
    })
    .catch(error => {
      res.status(500).json({
        message: "Something Went Wrong",
        info: error.message
      });
    });
};

const getAllHotels = (req, res, next) => {
  // console.log("My Auth",req.userData);

  hotelModel
    .find()
    .select(" regId Name Description Location Price Aminity status")
    .then(hotels => {
      res.status(200).json({
        hotels
      });
    })

    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Something Went Wrong",
        info: error.message
      });
    });
};

const getHotelQueried = (req, res, next) => {
  hotelModel
    .find({ Location: req.params.city })
    .select(" regId Name Description Location Price Aminity")
    .then(result => {
      res.status(200).json({
        result
      });
    })

    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Something Went Wrong",
        info: error.message
      });
    });
};

module.exports = {
  GetAllHotel: getAllHotels,
  HotelByQuery: getHotelQueried,
  NewHotel: CreateNewHotel
};
