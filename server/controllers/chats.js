const Chat = require('../models/chat');

const initiateChat = async (req, res) => {
  try {
    const existingChat = await (
      Chat.findOne({players: {$all: [req.user._id, req.body._id]}})
          .populate('players', 'username')
          .populate('messages')
          .exec()
    );
    if (existingChat) {
      res.json(existingChat);
    } else {
      let newChat = await (
        Chat.create({players: [req.user._id, req.body._id]})
      );
      newChat = await newChat.populate('players', 'username');
      res.json(newChat);
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

const getMessageHistory = async (req, res) => {
  try {
    const chat = await Chat.findById(req.body._id);
    res.json(chat.messages);
  } catch (error) {
    res.status(400).json(error);
  }
}

const saveMessage = async (req, res) => {
  try {
    const chat = await Chat.findById(req.body.chatId);
    chat.messages.push({
      author: req.body.author,
      content: req.body.content
    });
    await chat.save();
    res.json(chat.messages);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  getMessageHistory,
  initiateChat,
  saveMessage
}
