const router = require('express').Router();
const usersController = require('../../controllers/users');

router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);
router.get('/logout', usersController.logoutUser);

module.exports = router;
