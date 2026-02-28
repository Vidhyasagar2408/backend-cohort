const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://Vidhya:Vidhya123@cluster0.zpbkbue.mongodb.net/Day-6",
    )
    .then(() => {
      console.log("DataBase is connected");
    });
}

connectToDb();

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
