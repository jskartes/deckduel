import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');
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
