const app = require("./src/app");
const mongoose = require("mongoose");
const connectToDb = require("./src/config/Database");
require("dotenv").config();
connectToDb();
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
