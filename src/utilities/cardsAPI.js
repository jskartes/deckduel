import sendRequest from "./sendRequest";

export const getSplashCards = () => {
  return sendRequest('/api/cards/splash');
}
