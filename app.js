const express = require("express");
const connectToMongo = require("./db/conn");
const app = express();

connectToMongo();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/api", require("./routers/api"));

app.listen(5000, ()=>{
    console.log("YOur Express Server is running on port 5000");
});
