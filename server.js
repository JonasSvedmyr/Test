const express = require("express");

const app = express();
const hbs = require("hbs");
app.set("view engine", "hbs");



hbs.registerPartials(__dirname + "/views/partial");

app.get("/", function (req, res){
    res.render("index.hbs");
}) 

app.get("/home", function (req, res){
    res.render("index.hbs");
}) 

app.get("/about", function (req, res){
    res.render("index.hbs");
}) 

app.get("/kontakt", function (req, res){
    res.render("index.hbs");
}) 
app.listen(3000);

