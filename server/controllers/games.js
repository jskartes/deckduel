const Game = require('../models/game');
const Card = require('../models/card');

const getAllGames = async (req, res) => {
  try {
    const games = await (
      Game.find({'players.player': req.user})
          .populate('players.player')
          .exec()
    );
    res.json(games);
  } catch (error) {
    res.status(400).json(error);
  }
}

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
          .populate({
            path: 'players.player',
            populate: {path: 'userCollection.cards'}
          })
          .exec()
    );

    const mana = await Card.findOne({name: 'Mana'});
    for (const player of populatedGame.players) {
      const deck = [];
      for (const card of player.player.userCollection.cards) {
        deck.push(card, card);
      }
      for (let i = 0; i < 15; i++) deck.push(mana);
      const shuffledDeck = deck.sort(() => Math.random() - 0.5);
      player.zones[1].cards.push(...shuffledDeck.slice(0, 5));
      player.zones[0].cards.push(...shuffledDeck.slice(5));
    }
    await populatedGame.save();

    res.json(populatedGame);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  createGame,
  getAllGames
}
