import { Message } from '@/types/message';

interface Props {
  message: Message;
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`rounded-2xl px-4 py-2 max-w-xs mb-2 text-white ${
          isUser ? 'bg-blue-500' : 'bg-gray-700'
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}
