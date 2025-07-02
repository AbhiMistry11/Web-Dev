const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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

let allChats =[
     {
    from: "Foram",
    to: "Sakshi",
    msg: "Khudka Paisa Khud bhar",
    created_at: new Date(),
  }, 
  {
    from: "Paras",
    to: "Nihar",
    msg: "COC khelne ke liye dimag lagta he",
    created_at: new Date(),
  },
   {
    from: "Paras",
    to: "Parth",
    msg: "KD matter nai karti skill matter karti he",
    created_at: new Date(),
  },
   {
    from: "Abhi",
    to: "Foram",
    msg: "Kitna Gyaan deti he bas kar",
    created_at: new Date(),
  },
   {
    from: "Sakshi",
    to: "Abhi",
    msg: "Chal re Hater, i am kalol ki chapri",
    created_at: new Date(),
  },
   {
    from: "Nihar",
    to: "Abhi",
    msg: "Bhai Pan mat kara kar me ro deta hu",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
