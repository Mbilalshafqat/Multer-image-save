const express = require("express");
const app = express();
app.use("/", express.static("./uploads"));

// -------------cors
const cors = require("cors");
app.use(cors());

// -------------- mongoose connect
require("./DB/conn");

// body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// --------router
app.use("/multer", require("./router/router"));

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
