//chat name
//group or personal chat
//users who is in the chat
//messages to show
//chat group admin

const mongoose = require("mongoose");
const chatModal = mongoose.Schema({
  chatName: {
    type: String,
    trim: true,
  },
  isGroupChat: {
    type: Boolean,
    default: false,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  latestMassage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
  },
  groupAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
},{
    timestamps:true,
});
const Chat = mongoose.model("Chat",chatModel);
module.exports = Chat
