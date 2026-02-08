import { useState, useEffect, useCallback } from 'react';
import { getConversation } from '../api/chat.api';

export const useChatPolling = (otherUserId, interval = 5000) => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMessages = useCallback(async () => {
        if (!otherUserId) return;
        try {
            const data = await getConversation(otherUserId);
            if (data.success) {
                setMessages(data.data);
            }
        } catch (err) {
            console.error("Failed to fetch messages", err);
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [otherUserId]);

    useEffect(() => {
        fetchMessages(); // Initial fetch

        const pollId = setInterval(fetchMessages, interval);

        return () => clearInterval(pollId);
    }, [fetchMessages, interval]);

    return { messages, loading, error, refresh: fetchMessages };
};
