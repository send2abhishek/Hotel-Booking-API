// to parse form data(multipart), body parser only parse json and url encoded
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

const uploadFile = (req, res, next) => {
  upload.single("file");
  console.log("File is ", req.file);
  console.log("body is ", req.body);
};

module.exports = {
  UploadImageFile: uploadFile
};
