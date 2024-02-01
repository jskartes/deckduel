const Card = require('../models/card');

const getCards = async (req, res) => {
  try {
    const cards = await Card.aggregate().sample(5);
    res.json(cards);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  getCards
}
