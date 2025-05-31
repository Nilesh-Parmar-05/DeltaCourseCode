const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello i am root");
});

// app.get("/:username", (req, res) => {
//   console.log(req.params);
//   res.send("hello i am root");
// });

app.get("/search", (req, res) => {
  console.log(req.query);
  res.send("no results");
});
   