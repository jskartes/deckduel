const router = require('express').Router();
const usersController = require('../../controllers/users');

router.get('/', usersController.getAllUsers);
router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);
router.get('/get-friends', usersController.getFriends);
router.post('/add-friend', usersController.addFriend);
router.post('/unfriend', usersController.unfriend);
router.get('/logout', usersController.logoutUser);
router.get('/cards', usersController.getCards);

module.exports = router;
