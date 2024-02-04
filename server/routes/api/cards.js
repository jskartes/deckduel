const router = require('express').Router();
const cardsController = require('../../controllers/cards');

router.get('/splash', cardsController.getSplashCards);

module.exports = router;
