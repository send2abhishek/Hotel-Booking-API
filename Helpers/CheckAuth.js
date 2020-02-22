const jwt = require("jsonwebtoken");

const AuthCheck = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    const decode = jwt.verify(token, "secret");
    // console.log("UserData",decode);
    req.userData = decode;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "UnAuthorize ",
      errorMsg: "Invalid token or you are missing header token"
    });
  }
};

module.exports = AuthCheck;
