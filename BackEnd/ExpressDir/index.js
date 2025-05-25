const express = require("express");
const app = express();

console.dir(app);

let port = 8080;

app.listen(port, () => {
  console.log(`app is listening the ${port}`);
});

app.get("/", (req, res) => {
  res.send("you conatcted the root path");
});

app.get("/apple", (req, res) => {
  res.send("you conatcted the apple path");
});

app.get("/banana", (req, res) => {
  res.send("you conatcted the banana path");
});

// app.get("*", (req, res) => {
//   res.send("this page is not available!!");
// });

app.post("/",(req,res)=>{
    res.send("you sent a post request");
});

// app.use((req,res)=>{
//     console.log("request received");
//     // res.send("hello this is abhi");
//     res.send({
//         name:"apple",
//         color:"red"
//     })
// });
