const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  author:{
    type:String,
   },
  Price: {
    type:Number
  },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title:"Never Give Up",
    author:"JOHN CENA",
    Price:1111
});

book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});