const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

app.listen("8080", () => {
  console.log("app is running on 8080");
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Hail_app",
  password: "Abhi@369",
});

let createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};

app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (e) {
    console.log(e);
    res.send("some error occured in Db");
  }
});

app.get("/users", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("show.ejs", { users });
    });
  } catch (e) {
    console.log(e);
    res.send("some error occured in Db");
  }
});

app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (e) {
    console.log(e);
    res.send("some error occured in Db");
  }
});

app.patch("/users/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (user.password != formPass) {
        res.send("WRONG PASSWORD");
      } else {
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/users");
        });
      }
    });
  } catch (e) {
    console.log(e);
    res.send("some error occured in Db");
  }
});

app.get("/users/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/users", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();

  let q = `INSERT INTO user (id, username, email, password) 
           VALUES ('${id}', '${username}', '${email}', '${password}')`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.redirect("/users");
    });
  } catch (e) {
    console.log(e);
    res.send("Some error occurred in DB");
  }
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const q = `DELETE FROM user WHERE id = '${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.redirect("/users");
    });
  } catch (e) {
    console.log(e);
    res.send("Some error occurred in DB");
  }
});


//inserting data
// let q = "INSERT INTO user (id ,username,email,password) VALUES ?";
// let data = [];

// for(let i=1;i<=100;i++){
//   data.push(createRandomUser()); //100 fake users
// }

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (e) {
//   console.log(e);
// }

// connection.end();

// console.log(createRandomUser());
