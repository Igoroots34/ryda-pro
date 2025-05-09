import { useState } from 'react';

interface Props {
  onSend: (text: string) => void;
}

export default function MessageInput({ onSend }: Props) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-chat flex items-start rounded-4xl p-4 border border-[#686868]">
      <input
        className="flex-1 rounded px-3 text-sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Pergunte alguma coisa"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  );
}
