var express = require("express");
var ejs = require("ejs");

var app = express();
var router = express.Router();

router.get(["/", "/index"], function(req, res) {
  res.render("index.ejs", { peuple: ["Michel", "Pablo", "Escanor", "Gokū"] });
});
app.use(router);

router.get("/profile/:name", function(req, res) {
    res.render("profile.ejs", { name: req.params.name });
  });
app.use(router);

app.listen(1337, function() {
    console.log("Le serveur écoute sur le port 1337");
  });