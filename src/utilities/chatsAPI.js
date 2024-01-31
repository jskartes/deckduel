import sendRequest from './sendRequest';

export const initiateChat = async withUser => {
  try {
    const chat = await sendRequest('/api/chats/initiate', 'POST', withUser);
    return chat;
  } catch (error) {
    throw new Error(error);
  }
}

export const getMessageHistory = chat => {
  return sendRequest('/api/chats', 'GET', chat);
}
