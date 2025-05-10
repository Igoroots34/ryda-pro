import { useState } from 'react';
import { ArrowDown, SendHorizontal } from 'lucide-react';

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
    
    <div className="relative">
      {/* 🔷 Formas decorativas */}
      <div className='box absolute left-[-1px] top-[-1px] flex flex-col rounded-4xl p-4 bg-black/10 backdrop-blur-3xl '></div>
      <div className="absolute bottom-1 right-1 w-24 h-24 bg-[#E9D362] rounded-full z-0" />
      
      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex bg-chat flex-col justify-between rounded-4xl p-4 bg-black/10 backdrop-blur-3xl "
      >
        
        <textarea
          className="flex rounded px-3 text-sm text-white bg-transparent outline-none resize-none"
          value={text}
          rows={3}
          onChange={(e) => setText(e.target.value)}
          placeholder="Pergunte alguma coisa"
        />
        <div className="flex justify-between mt-4">
          <div className="flex gap-3">
            <button
              type="submit"
              className="animate-bounce bg-[#121212] border border-[#686868] px-2 py-2 rounded-4xl hover:bg-[#242424]"
            >
              <ArrowDown className="text-[#d9d9d9]" />
            </button>
            <button
              type="submit"
              className="flex gap-2 bg-[#121212] border border-[#686868] text-[#d9d9d9] px-6 py-2 rounded-4xl hover:bg-[#242424]"
            >
              Dashboard
            </button>
            <button
              type="submit"
              className="flex gap-2 text-[#d9d9d9] border border-[#686868] bg-[#121212] px-6 py-2 rounded-4xl hover:bg-[#242424]"
            >
              Relatórios
            </button>
          </div>
          
          <button
            type="submit"
            className=" bg-[#E9D362] border border-[#686868] px-2 py-2 rounded-full hover:bg-[#e0bb2f]"
          >
            <SendHorizontal className="text-[#030303]" />
          </button>
          
        </div>
        
      </form>
      
    </div>
    
  );
}
