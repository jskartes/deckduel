const router = require('express').Router();
const gamesController = require('../../controllers/games');

router.get('/', gamesController.getAllGames);
router.post('/create', gamesController.createGame);

module.exports = router;
