const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const muterSchema = new Schema({
  images: {
    type: String,
    required: true,
  },
});

const MulterModel = mongoose.model("multer", muterSchema);
module.exports = MulterModel;
