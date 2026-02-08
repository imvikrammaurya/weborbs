const Message = require('../models/Message.model');

/**
 * Send a message
 * @param {string} senderId - ID of the sender
 * @param {string} recipientId - ID of the recipient
 * @param {string} content - Message content
 */
const sendMessage = async (senderId, recipientId, content) => {
    const message = await Message.create({
        sender: senderId,
        recipient: recipientId,
        content
    });
    return message;
};

/**
 * Get conversation between two users
 * @param {string} userId1 - ID of the first user
 * @param {string} userId2 - ID of the second user
 */
const getMessages = async (userId1, userId2) => {
    const messages = await Message.find({
        $or: [
            { sender: userId1, recipient: userId2 },
            { sender: userId2, recipient: userId1 }
        ]
    }).sort({ createdAt: 1 }); // Oldest first
    return messages;
};

/**
 * Mark messages as read
 * @param {string} senderId - ID of the sender (whose messages are being read)
 * @param {string} recipientId - ID of the recipient (who is reading)
 */
const markMessagesAsRead = async (senderId, recipientId) => {
    await Message.updateMany(
        { sender: senderId, recipient: recipientId, isRead: false },
        { isRead: true }
    );
};

module.exports = {
    sendMessage,
    getMessages,
    markMessagesAsRead
};
