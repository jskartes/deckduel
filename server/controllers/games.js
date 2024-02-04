const Game = require('../models/game');
const User = require('../models/user');

const createGame = async (req, res) => {
  try {
    const game = await Game.create({
      players: [
        {player: req.user._id},
        {player: req.body._id}
      ]
    });
    const populatedGame = await (
      Game.findById(game._id)
          .populate('players.player')
          .exec()
    );
    res.json(populatedGame);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  createGame
}
