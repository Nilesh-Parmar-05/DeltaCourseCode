const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

main()
  .then(() => {
    console.log("connection succesful!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.listen(3000, () => {
  console.log("server is listening on port 3000.");
});

app.get("/", (req, res) => {
  res.send("Root is Working!");
});
