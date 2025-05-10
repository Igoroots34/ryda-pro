import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import { useChat } from '@/hooks/useChat';

export default function ChatWindow() {
  const { messages, sendMessage } = useChat();

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-[#030303] text-[#D9D9D9]">
      <div className="flex overflow-y-auto p-4 space-y-2">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>
      <div ><MessageInput onSend={sendMessage}  /></div>
      
    </div>
  );
}
