const express = require("express");
const app = express();

// app.use("/random", (req, res, next) => {
//   console.log("Only for Random");
//   next();
// });

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  res.send("ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res, next) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("root Page");
});

app.get("/random", (req, res) => {
  res.send("random Page");
});

// //logger - morgon
// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });

//404
app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000.");
});
