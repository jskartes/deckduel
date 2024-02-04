import sendRequest from "./sendRequest";

export const createGame = async withUser => {
  return sendRequest('/api/games/create', 'POST', withUser);
}
