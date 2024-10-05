const mongoose = require("mongoose");

const dbUrl = 'mongodb://127.0.0.1:27017/mr1apidb';

const connectToMongo = ()=>{
    mongoose.connect(dbUrl, ()=>{
        console.log("YOur mr1apidb is connected to the db");
    })
}

module.exports = connectToMongo;