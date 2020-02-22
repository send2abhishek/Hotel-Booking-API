const express = require("express");
const router = express.Router();
const HotelControllers = require("../Controllers/HotelControllers");
const AuthCheck = require("../Helpers/CheckAuth");
const Order = require("../Controllers/OrderController");
const validate = require("../Helpers/ValidateUser");
router.get("/orders", AuthCheck, Order.GetAllOrder);
router.get("/", AuthCheck, HotelControllers.GetAllHotel);
router.get("/:city", AuthCheck, HotelControllers.HotelByQuery);
router.post(
  "/",
  AuthCheck,
  validate.validateNewHotel,
  HotelControllers.NewHotel
);
router.post("/orders", AuthCheck, validate.ValidateOrders, Order.HotelOrder);

module.exports = router;
