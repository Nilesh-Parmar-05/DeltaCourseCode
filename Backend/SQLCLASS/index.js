const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "nilesh@3205",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//Home Route
app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["COUNT(*)"];
      res.render("home.ejs", { count });
    });
  } catch (error) {
    console.log(error);
    res.send("some error in database");
  }
});

//Show Users Route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showUsers.ejs", { users });
    });
  } catch (error) {
    console.log(error);
    res.send("some error in database");
  }
});

//Edit Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (error) {
    console.log(error);
    res.send("some error in database");
  }
});

//update route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("Wrong Password!");
      } else {
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (error, result) => {
          if (error) throw error;
          res.redirect("/user");
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.send("some error in database");
  }
});

//Delete Route
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (error) {
    console.log(error);
    res.send("some error in database");
  }
});

//Deleting Process Route
app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("Wrong Password!");
      } else {
        let q2 = `DELETE FROM user WHERE id='${id}'`;

        connection.query(q2, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.redirect("http://localhost:3000/");
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.send("some error in database");
  }
});

//New User Form
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

//Creating new user
app.post("/user/new", (req, res) => {
  let { id, username, email, password } = req.body;
  let details = [id, username, email, password];
  let q = `INSERT INTO user VALUES (?, ?, ?, ?) `;

  try {
    connection.query(q, details, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (error) {
    console.log(error);
    res.send("some error in database");
  }
});

//Server Listening on Port 3000
app.listen("3000", () => {
  console.log("listening on port 3000");
});
