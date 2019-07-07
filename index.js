const express = require("express")
const hbs = require("hbs")
const app = express()
const axios = require("./axios")

console.log(__dirname)

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.use("/static", express.static("static"));
app.use("/images", express.static("images"));

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.render("body.hbs")
})
 
app.listen(3000)

// TODO: 2 weeks from 6/29/2019
// https://github.com/thomason84/Portfolio---Node/blob/master/server.js
// http://localhost:3000/
// in views folder, create new view
// head, header, footer, create body
// inject api call information into body
// try to figure out data interpolation
// handlebars, axios. make request and show request/call on page
// at least console log response
// message on slack if need help
// https://charlestonhackers.slack.com
// inspect and see console log response