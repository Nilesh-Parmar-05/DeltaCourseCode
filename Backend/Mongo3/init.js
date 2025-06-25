const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection succesful!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
  },
  {
    from: "rohan",
    to: "amit",
    msg: "are you coming to class today?",
    created_at: new Date(),
  },
  {
    from: "priya",
    to: "neha",
    msg: "I'll send them by evening",
    created_at: new Date(),
  },
  {
    from: "sneha",
    to: "rahul",
    msg: "can you share the assignment pdf?",
    created_at: new Date(),
  },
  {
    from: "amit",
    to: "rohan",
    msg: "no, I'm on leave today",
    created_at: new Date(),
  },
  {
    from: "rahul",
    to: "sneha",
    msg: "sent it on WhatsApp",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
