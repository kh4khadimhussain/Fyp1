const mongoose = require("mongoose");
const createschema = new mongoose.Schema({


    email: {

        type: String
    },
    firstname: {

        type: String
    },
    lastname: {

        type: String
    },
    password: {

        type: String
    },
    address:{
        type:String
    },
    cellno:{
        type:String
    }


})

module.exports = mongoose.model("User", createschema);