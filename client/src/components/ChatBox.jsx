import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useChatPolling } from '../hooks/useChatPolling';
import { sendMessage, markRead } from '../api/chat.api';

const ChatBox = ({ otherUserId, otherUserName, onClose }) => {
    const { user } = useAuth();
    const { messages, refresh } = useChatPolling(otherUserId, 3000); // Poll every 3s
    const [newMessage, setNewMessage] = useState('');
    const [sending, setSending] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
        // Mark as read when opening chat or receiving new messages
        if (messages.length > 0) {
            markRead(otherUserId).catch(err => console.error(err));
        }
    }, [messages, otherUserId]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        setSending(true);
        try {
            await sendMessage(otherUserId, newMessage);
            setNewMessage('');
            refresh(); // Immediate refresh after sending
        } catch (error) {
            console.error("Failed to send", error);
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl flex flex-col overflow-hidden z-50">
            {/* Header */}
            <div className="bg-zinc-800 p-4 border-b border-zinc-700 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white text-sm">
                        {otherUserName?.[0]?.toUpperCase() || 'U'}
                    </div>
                    <div>
                        <h3 className="text-white font-medium text-sm">{otherUserName || 'Chat'}</h3>
                        <span className="text-xs text-green-500 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            Online (Polling)
                        </span>
                    </div>
                </div>
                <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20">
                {messages.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-zinc-500 text-sm opacity-60">
                        <p>No messages yet.</p>
                        <p>Start the conversation!</p>
                    </div>
                ) : (
                    messages.map((msg) => {
                        const isMe = msg.sender === user._id;
                        return (
                            <div key={msg._id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${isMe
                                        ? 'bg-blue-600 text-white rounded-br-none'
                                        : 'bg-zinc-800 text-zinc-200 rounded-bl-none border border-zinc-700'
                                    }`}>
                                    <p>{msg.content}</p>
                                    <p className={`text-[10px] mt-1 ${isMe ? 'text-blue-200' : 'text-zinc-500'} text-right`}>
                                        {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-zinc-800/50 border-t border-zinc-700">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <button
                        type="submit"
                        disabled={!newMessage.trim() || sending}
                        className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-10 h-10"
                    >
                        {sending ? (
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatBox;
