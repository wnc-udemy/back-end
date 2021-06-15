const express = require('express');
const chatbotController = require('../../controllers/chatbot.controller');

const router = express.Router();

router.route('/').post(chatbotController.postWebhook).get(chatbotController.getWebhook);

module.exports = router;
