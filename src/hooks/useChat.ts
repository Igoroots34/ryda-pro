import { useState } from 'react';
import { Message } from '@/types/message';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (text: string) => {
    const newMsg: Message = {
      id: crypto.randomUUID(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMsg]);

    // Simula resposta do bot
    setTimeout(() => {
      const botMsg: Message = {
        id: crypto.randomUUID(),
        text: `Echo: ${text}`,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 500);
  };

  return { messages, sendMessage };
}
