const express = require("express");
const app = express();

app.set("view engine" , "ejs");

app.get("/upload",(req,res) => {
    res.render("upload");
})

app.post("/upload" , (req,res) =>{
    res.send("Image upload");
})

app.listen(3001,()=>{
    console.log("3001 is the port");
})
