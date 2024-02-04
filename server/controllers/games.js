const Game = require('../models/game');

const createGame = async (req, res) => {
  try {
    const game = await Game.create({players: [req.user, req.body]});
    console.log(game);
    res.json(game);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  createGame
}
