const expressAsyncHandler = require("express-async-handler");

const Chat = require("../models/chatModals");
const User = require("../models/User");
const { registerUser } = require("./userControllers");
const accessChat = expressAsyncHandler(async (req,res) => {
  const { userId } = req.body;
  if (!userId) {
    console.log("UserId params no req sent");
    return res.sendStatus(400);
  }
  let isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      {
        users: { $elemMatch: { $eq: req.user._id } },
      },
      {
        users: { $elemMatch: { $eq: userId } },
      },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");
  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });
  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    let ChatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };
    try {
      const createdChat = await Chat.create(ChatData);
      const fullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).send(fullChat);
    } catch (err) {
      res.status(400);
      throw new error(error.message);
    }
  }
});

const fetchChats = expressAsyncHandler(async (req,res) => {
  try{
    Chat.find({users:{$elemMatch :{$eq:req.user._id}}}).then((result)=>res.send(result))
  }catch(err){

  }
});

module.exports = accessChat,fetchChats;
