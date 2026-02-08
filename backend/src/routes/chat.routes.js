const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chat.controller');
const authMiddleware = require('../middleware/auth.middleware');

const { ensureProfileCompleted } = require('../middleware/profile.middleware');

// Send a message
router.post('/send', authMiddleware.protect, ensureProfileCompleted, chatController.sendMessage);

// Get conversation with a specific user
router.get('/:userId', authMiddleware.protect, ensureProfileCompleted, chatController.getConversation);

// Mark messages as read
router.put('/read', authMiddleware.protect, ensureProfileCompleted, chatController.markRead);

module.exports = router;
