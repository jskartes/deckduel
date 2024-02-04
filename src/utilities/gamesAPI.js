import sendRequest from "./sendRequest";

export const getAllGames = async () => {
  return sendRequest('/api/games');
}

export const createGame = async withUser => {
  return sendRequest('/api/games/create', 'POST', withUser);
}
