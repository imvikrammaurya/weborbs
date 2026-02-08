import React, { useState, useEffect, useRef } from 'react';
import { getMessages, sendMessage, markMessagesAsRead } from '../../api/chat.api';

const ChatWindow = ({ recipientId, currentUserId, recipientName }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const fetchMessages = async () => {
        try {
            const response = await getMessages(recipientId);
            if (response.success) {
                setMessages(response.data);
                // Mark as read when we fetch
                // await markMessagesAsRead(recipientId); // Optional: Mark as read logic
            }
        } catch (error) {
            console.error("Error fetching messages:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
        scrollToBottom();

        // Polling every 5 seconds
        const intervalId = setInterval(fetchMessages, 5000);

        return () => clearInterval(intervalId);
    }, [recipientId]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        try {
            await sendMessage(recipientId, newMessage);
            setNewMessage('');
            fetchMessages(); // Refresh immediately
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    if (loading) return <div className="text-center p-4">Loading chat...</div>;

    return (
        <div className="flex flex-col h-[500px] border border-zinc-800 rounded-lg bg-zinc-900 overflow-hidden">
            {/* Header */}
            <div className="bg-zinc-800 p-3 border-b border-zinc-700">
                <h3 className="font-semibold text-white">{recipientName || 'Chat'}</h3>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 ? (
                    <div className="text-center text-zinc-500 mt-10">No messages yet. Start a conversation!</div>
                ) : (
                    messages.map((msg) => {
                        const isMyMessage = msg.sender === currentUserId;
                        return (
                            <div
                                key={msg._id}
                                className={`flex ${isMyMessage ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[70%] px-4 py-2 rounded-lg ${isMyMessage
                                            ? 'bg-blue-600 text-white rounded-br-none'
                                            : 'bg-zinc-700 text-zinc-200 rounded-bl-none'
                                        }`}
                                >
                                    <p className="text-sm">{msg.content}</p>
                                    <span className="text-[10px] opacity-70 block text-right mt-1">
                                        {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        );
                    })
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-3 bg-zinc-800 border-t border-zinc-700 flex gap-2">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-zinc-900 text-white border border-zinc-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    disabled={!newMessage.trim()}
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatWindow;
