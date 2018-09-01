const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const knex = require("knex");
const register = require("./controllers/register");
const signin = require("./controllers/signin");
const image = require("./controllers/image");
const profile = require("./controllers/profile");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "bhaskar",
    database: "smart-brain"
  }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(database.users);
});
app.post("/signin", (req, res) => {
  signin.signinHandler(req, res, db, bcrypt);
});

app.post("/register", (req, res) => {
  register.registerHandler(req, res, db, bcrypt);
});

app.get("/profile/:id", (req, res) => {
  profile.profileHandler(req, res, db);
});

app.put("/image", (req, res) => {
  image.imageShow(req, res, db);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("app is running on port 3000");
});
