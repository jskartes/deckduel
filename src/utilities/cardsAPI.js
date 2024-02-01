import sendRequest from "./sendRequest";

export const getCards = () => {
  return sendRequest('/api/cards');
}
