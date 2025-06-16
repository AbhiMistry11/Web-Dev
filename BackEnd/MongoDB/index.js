const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User({
//   name: "Abhi",
//   email: "abhi@gmail.com",
//   age: 22,
// });

// const user2 = new User({
//   name: "Paras",
//   email: "paras@gmail.com",
//   age: 21,
// });

// user2.save();

// User.insertMany([
//   { name: "Nihar", email: "nihar@gmail.com", age: 21 },
//   { name: "Sakshi", email: "Sakshi@gmail.com", age: 21 },
//   { name: "Foram", email: "Form@gmail.com", age: 21 },
// ])
//   .then((res) => {
//     console.log(res);
//   });

// User.find({age:{$gt:19}})
// .then((res)=>{
//     console.log(res[0].name);
// }).catch((err)=>{
//     console.log(err);
// });

// User.updateOne({name:"Foram"},{email:"foram@gmail.com"}).then((data)=>{
//     console.log(data);
// });

User.deleteMany({age:21}).then((res)=>{
    console.log(res);
});

// const user3 = new User({
//   name: "Parth",
//   email: "parth@gmail.com",
//   age: 20,
// });

// user3
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
