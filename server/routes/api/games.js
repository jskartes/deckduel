const router = require('express').Router();
const gamesController = require('../../controllers/games');

router.post('/create', gamesController.createGame);

module.exports = router;
