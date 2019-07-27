const express = require("express")
const hbs = require("hbs")
const app = express()
const fetch = require('node-fetch');

const port = process.env.PORT || 3000;

console.log(__dirname)

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.use("/static", express.static("static"));
app.use("/images", express.static("images"));

app.use(express.static(__dirname + "/public"));

const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=a611315ba9b178c672528a504436308c"

fetch(url)
.then(
    function(response) {
        var json = response.json()
        return json;
    }
)
.then(
    function(json){
        var results = json.results
        app.get('/', function (req, res, next) {
          res.render("body.hbs", {
            data: results
          });
        });
    }
)

app.listen(port, () => {
  console.log(`Sever is up on port ${port}`);
});

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
