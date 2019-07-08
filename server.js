const express = require("express");
const hbs = require("hbs");
const fs = require("fs")

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile("server.log", log + "\n", err => {
    if (err) {
      console.log("unable to append to server.log.");
    }
  });
  next();
});

app.use("/static", express.static("static"));
app.use("/files", express.static("files"));

app.use("/images", express.static("images"));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("body.hbs");
});

app.listen(port, () => {
  console.log(`Sever is up on port ${port}`);
});