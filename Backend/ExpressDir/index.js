const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.use((req, res) => {
  console.log("request recieved");
  let code =
    "<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>";
  res.send(code);
});
