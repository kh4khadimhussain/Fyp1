var express=require("express");
var User=require("../models/user");
var app=express();
app.get("/signup",(req,res)=>{
    // let obj={
    //     email:req.body.email,
    //     firtname:req.body.firstname,
    //     lastname:req.body.lastname,
    //     password:req.body.password,
    //     address:req.body.address,
    //     cellno:req.body.cellno
    // }
    console.log("requesting ....")
})
app.post("/login")
module.exports =app;