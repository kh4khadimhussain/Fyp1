var express=require("express");
var db=require("./config/db");
var app=express();

var user=require("./routes/user");

app.use("/api/user",user);

app.listen("4000")