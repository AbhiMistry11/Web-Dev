const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));



app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/ig/:username",(req,res)=>{
  let {username} = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
 if(data){
  res.render("instagram.ejs", {data});
 }else{
  res.render("error.ejs");
 };
});

app.get("/rolldice",(req,res)=>{
  const diceValue = Math.floor(Math.random() * 6) + 1 ;
    res.render("rolldice.ejs", {num : diceValue});
});

app.listen(port, () => {
  console.log(`app is listening the ${port}`);
});