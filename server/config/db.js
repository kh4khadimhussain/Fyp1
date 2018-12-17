var mongoose=require("mongoose");
if(mongoose.connect("mongodb://khadim:khadim123@ds021326.mlab.com:21326/sastaroom")){
    console.log("connected")
}
else{
    console.log("error")
}