import { io } from 'socket.io-client';

const socket = io();
let updateChat;

export const joinChat = chatId => {
  socket.emit('join', chatId);
}

export const registerUpdateChat = func => {
  updateChat = func;
}

export const sendMessage = (chatId, user, message) => {
  socket.emit('message', chatId, user, message);
}

socket.on('update chat', chat => {
  updateChat(chat);
});
