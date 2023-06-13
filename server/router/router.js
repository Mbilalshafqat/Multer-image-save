const express = require("express");
const router = express.Router();
const { upload } = require("../middleware/Multer");
const MulterModel = require("../model/multerSchema");
const path = require("path");

router.post("/createImages", upload.single("file"), async (req, res) => {
  try {
    const filename = req.file.filename;
    const fileUrl = path.join(filename);
    await MulterModel.create({
      images: fileUrl,
    });
    res.status(200).json({
      success: true,
      message: "Imgaes Store Successfuly",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
