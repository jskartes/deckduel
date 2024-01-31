const router = require('express').Router();
const chatsController = require('../../controllers/chats');

router.get('/', chatsController.getMessageHistory);
router.post('/initiate', chatsController.initiateChat);
router.post('/save-message', chatsController.saveMessage);

module.exports = router;
