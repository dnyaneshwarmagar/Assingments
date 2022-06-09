const express=require("express");
const mongoose=require("mongoose");
const userrouter= require("./controller/User");
const productrouter= require("./controller/Product");
const brandrouter= require("./controller/Brand");
const app=express();


mongoose.connect("mongodb+srv://dnyaneshm:magar123@cluster0.zktqv.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected to database");
})
.catch(()=>{
    console.log("not connected to database");
})

app.use(express.json());
app.use("/api/users",userrouter);
app.use("/api/products",productrouter);
app.use("/api/brands",brandrouter);


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
