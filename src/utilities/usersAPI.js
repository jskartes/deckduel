import sendRequest from './sendRequest';

export const registerUser = payload => {
  return sendRequest('/api/users/register', 'POST', payload);
}

export const loginUser = credentials => {
  return sendRequest('/api/users/login', 'POST', credentials);
}

export const logoutUser = () => {
  sendRequest('/api/users/logout');
}

export const getFriends = () => {
  
}

export const getAllUsers = () => {
  return sendRequest('/api/users/');
}
