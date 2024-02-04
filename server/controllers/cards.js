const Card = require('../models/card');

const getSplashCards = async (req, res) => {
  try {
    const cards = await Card.aggregate().sample(8);
    res.json(cards);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  getSplashCards
}
