const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");
main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakeWhatsapp");
}

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.listen(8080, () => {
  console.log("port listening on 8080");
});

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

app.get("/chats/new",  (req, res) => {
  throw new ExpressError(401,"page not found");
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  let { from, to, Msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: Msg,
    created_at: new Date(),
  });
  newChat.save().then((res)=>{
    console.log("saved");
  }).catch(err=>{
    console.log(err);
  });
  res.redirect("/chats");
});

//new show routes
app.get("/chats/:id",async(req,res,next)=>{
  let {id} = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs",{chat})
});

app.get("/chats/:id/edit",async(req,res)=>{
  let {id} = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", {chat});
});

app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg }, 
    { runValidators: true, new: true }
  );
  res.redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let chatDelete = await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

function wrapAsync(fn){
  return function(req,res,next){
    fn(req,res,next).catch((err)=> next(err));
  }
};

app.use((err,req,res,next)=>{
  let {status=500,message="some error occured"} = err;
  res.status(status).send(message);
})

app.get("/", (req, res) => {
  res.send("working root");
});
