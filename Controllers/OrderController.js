const hotelModel = require("../Models/HotelModel");
const orderModel = require("../Models/OrderModel");
const mongoose = require("mongoose");
const hotelOrder = (req, res, next) => {
  hotelModel
    .findById({ _id: req.body.hotelId })

    .then(response => {
      if (!response) {
        return res.status(400).json({
          msg: "Hotel Not Found with passed id"
        });
      }
      orderModel
        .find({ hotelId: req.body.hotelId })
        .then(resu => {
          if (resu.length == 0) {
            const order = new orderModel({
              _id: new mongoose.Types.ObjectId(),
              hotelId: req.body.hotelId,
              userId: req.body.userId,
              persons: req.body.persons
            });
            order
              .save()
              .then(async result => {
                const updateHotel = await hotelModel.update(
                  { _id: req.body.hotelId },
                  { $set: { status: true } }
                );

                if (updateHotel != null) {
                  return res.status(201).json({
                    msg: "Order successful",
                    orderId: result._id
                  });
                } else {
                  return res.status(500).json({
                    errMsg: "something went wrong, in order to place your order"
                  });
                }
              })
              .catch(err => {
                res.satus(500).json({
                  msg: "Something Went Wrong",
                  err
                });
              });
          } else {
            return res.status(400).json({
              msg: "hotel Already Ordered"
            });
          }
        })
        .catch(err => {
          return res.status(500).json({
            errMsg: "Invalid Hotel Id, something went wrong"
          });
        });
    })
    .catch(err => {
      res.status(500).json({
        errMsg: "Invalid Hotel Id"
      });
    });
};

const getAllOrderedHotels = (req, res, next) => {
  orderModel
    .find()
    .select("persons")
    .populate("hotelId userId", "Name Location Aminity name email city country")
    .then(result => {
      res.status(200).json({
        result
      });
    })
    .catch(err => {
      res.satus(500).json({
        err
      });
    });
};

module.exports = {
  HotelOrder: hotelOrder,
  GetAllOrder: getAllOrderedHotels
};
