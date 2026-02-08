const chatService = require('../services/chat.service');

const sendMessage = async (req, res) => {
    try {
        const { recipientId, content } = req.body;
        const senderId = req.user.id;

        const message = await chatService.sendMessage(senderId, recipientId, content);

        res.status(201).json({
            success: true,
            data: message
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getConversation = async (req, res) => {
    try {
        const { userId } = req.params; // The other person in the chat
        const currentUserId = req.user.id;

        const messages = await chatService.getMessages(currentUserId, userId);

        res.status(200).json({
            success: true,
            data: messages
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const markRead = async (req, res) => {
    try {
        const { senderId } = req.body; // The user whose messages we are marking as read
        const currentUserId = req.user.id; // The recipient (us)

        await chatService.markMessagesAsRead(senderId, currentUserId);

        res.status(200).json({
            success: true,
            message: 'Messages marked as read'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    sendMessage,
    getConversation,
    markRead
};
