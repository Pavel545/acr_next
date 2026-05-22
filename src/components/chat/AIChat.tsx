"use client";
import React, { useState, useEffect, useRef } from 'react';
import "./ai-chat.css";
import { useChat } from '@/contexts/ChatContext';

interface Message {
    id: string;
    type: 'user' | 'assistant';
    content: string;
    timestamp?: string;
}

interface AIChatProps {
    suggestedQuestions?: string[];
    welcomeMessage?: string;
    isCardFloating?: boolean;
}

const normalizeResponse = (raw: unknown): string => {
    if (typeof raw === 'string') {
        try {
            const parsed = JSON.parse(raw);
            return parsed.reply || parsed.answer || raw;
        } catch {
            return raw;
        }
    }
    if (raw && typeof raw === 'object') {
        return (raw as any).reply || (raw as any).answer || 'Получен ответ';
    }
    return 'Извините, не удалось обработать ответ';
};

const generateSessionId = (): string => {
    return `session_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
};

const formatTime = (timestamp: string): string => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit'
    });
};

const AIChat: React.FC<AIChatProps> = ({
    suggestedQuestions = [
        "Расскажите о продуктах ACR",
        "Какие у вас цены?",
        "Как связаться с поддержкой?",
        "Есть ли скидки?"
    ],
    welcomeMessage = "👋 Здравствуйте! Я AI ассистент компании ACR. Чем могу помочь?",
    isCardFloating = false
}) => {
    const { isChatOpen, closeChat, openChat } = useChat(); // используем контекст
    const [messages, setMessages] = useState<Message[]>([]);

    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState<string>('');
    const [unreadCount, setUnreadCount] = useState(0);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const chatWindowRef = useRef<HTMLDivElement>(null);

    // Загрузка сохраненной сессии
    useEffect(() => {
        const storedSessionId = localStorage.getItem('chat_session_id');
        const storedMessages = localStorage.getItem('chat_messages');

        if (storedSessionId) {
            setSessionId(storedSessionId);
        } else {
            const newSessionId = generateSessionId();
            setSessionId(newSessionId);
            localStorage.setItem('chat_session_id', newSessionId);
        }

        if (storedMessages) {
            try {
                const parsed = JSON.parse(storedMessages) as Message[];
                setMessages(parsed);
            } catch (error) {
                console.error('Failed to parse stored messages:', error);
            }
        }
    }, []);

    // Сохранение сообщений
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem('chat_messages', JSON.stringify(messages));
        }
    }, [messages]);

    // Автоскролл
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    // Приветственное сообщение
    useEffect(() => {
        if (isChatOpen && messages.length === 0) {
            setMessages([
                {
                    id: Date.now().toString(),
                    type: 'assistant',
                    content: welcomeMessage,
                    timestamp: new Date().toISOString()
                }
            ]);
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isChatOpen, welcomeMessage, messages.length]);

    // Подсчет непрочитанных
    useEffect(() => {
        if (!isChatOpen && messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            if (lastMessage.type === 'assistant') {
                setUnreadCount(prev => prev + 1);
            }
        }
    }, [messages, isChatOpen]);

    useEffect(() => {
        if (isChatOpen) {
            setUnreadCount(0);
        }
    }, [isChatOpen]);





    const clearHistory = () => {
        const newSessionId = generateSessionId();
        setSessionId(newSessionId);
        localStorage.setItem('chat_session_id', newSessionId);
        localStorage.removeItem('chat_messages');
        setMessages([]);
        setUnreadCount(0);
        setMessages([
            {
                id: Date.now().toString(),
                type: 'assistant',
                content: welcomeMessage,
                timestamp: new Date().toISOString()
            }
        ]);
    };

    const sendMessage = async (content: string) => {
        if (!content.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            type: 'user',
            content: content.trim(),
            timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: content.trim(),
                    history: messages.slice(-10),
                    session_id: sessionId
                }),
            });

            if (!response.ok) throw new Error(`API error: ${response.status}`);

            const data = await response.json();
            const replyText = normalizeResponse(data);

            const assistantMessage: Message = {
                id: Date.now().toString(),
                type: 'assistant',
                content: replyText,
                timestamp: new Date().toISOString()
            };
            setMessages(prev => [...prev, assistantMessage]);

        } catch (error) {
            console.error('Chat error:', error);
            const errorMessage: Message = {
                id: Date.now().toString(),
                type: 'assistant',
                content: '⚠️ Извините, не удалось получить ответ. Проверьте соединение.',
                timestamp: new Date().toISOString()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
            inputRef.current?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLoading && inputValue.trim()) {
            sendMessage(inputValue);
        }
    };

    const handleSuggestedQuestion = (question: string) => {
        sendMessage(question);
    };

    return (
        <>
            {/* Оверлей */}
            {isChatOpen && (
                <div className="chat-overlay" onClick={closeChat} />
            )}
            {/* Окно чата */}
            <div className={`ai-chat-window ${isChatOpen ? 'open' : ''}`} ref={chatWindowRef}>
                <div className="ai-chat-header">
                    <div className="header-info">
                        <img src="/img/eva1.png" alt="" className="header-icon" />
                        <h3 className="h3">ИИ Ассистент</h3>
                    </div>
                    <div className="header-actions">
                        {messages.length > 1 && (
                            <button
                                onClick={clearHistory}
                                className="clear-history-btn"
                                title="Очистить историю"
                            >
                                🗑️
                            </button>
                        )}
                        <button onClick={closeChat} className="close-chat-btn">
                            ✕
                        </button>
                    </div>
                </div>

                <div className="ai-chat-messages">
                    {messages.map((message) => (
                        <div key={message.id} className={`chat-message ${message.type}`}>
                            <div className="message-bubble">
                                {message.content}
                                <span className="message-time">
                                    {message.timestamp && formatTime(message.timestamp)}
                                </span>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="chat-message assistant">
                            <div className="message-bubble typing-indicator">
                                <span>.</span><span>.</span><span>.</span>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Подсказки */}
                {messages.length === 1 && suggestedQuestions.length > 0 && (
                    <div className="chat-suggestions">
                        <p className="suggestions-title">💡 Попробуйте спросить:</p>
                        <div className="suggestions-grid">
                            {suggestedQuestions.slice(0, 4).map((question, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSuggestedQuestion(question)}
                                    className="suggestion-btn butt"
                                    disabled={isLoading}
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="chat-input-form">
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Введите сообщение..."
                        className="chat-input-field"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !inputValue.trim()}
                        className="butt"
                    >
                        {isLoading ? '...' : '→'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default AIChat;