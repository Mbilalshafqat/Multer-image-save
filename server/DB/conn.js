const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Multer")
  .then(() => {
    console.log("mongoose connect successfuly");
  })
  .catch((error) => {
    console.log(error.message);
  });
