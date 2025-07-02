const express = require("express");
const app = express();
const ExpressError = require("./ExpressError.js");

// app.use(express.urlencoded({extended:true}));

// app.use((req,res,next)=>{
//     console.log("Hello,I am Middleware");
//     next();
// });

// app.use("/random",(req,res,next)=>{
//     req.time = Date.now();
//     console.log(req.method, req.hostname,req.path,req.time);
//     next();
// })

app.get("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token === "give"){
        next()
    }
    throw new ExpressError(404,"ACCESS DENIED!");
});

app.use((err,req,res,next)=>{
    res.send(err);
})

app.get("/api",(req,res)=>{
    res.send("data");
});

app.get("/",(req,res)=>{
    res.send("Hello i am root");
});

app.get("/random",(req,res)=>{
    res.send("Hello i am random");
})

app.listen(8080,()=>{
    console.log("app is listening on 8080");
}); 