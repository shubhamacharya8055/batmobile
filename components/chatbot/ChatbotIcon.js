"use client"

import React, { useState } from 'react';
import { BotMessageSquare, MessageSquare } from 'lucide-react'; 
import ConversationBox from './ConversationBox';

function ChatbotIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-7 right-20 z-[99999999999]">
      <button 
        className="bg-teal hover:bg-blue-700 text-white rounded-full p-3 shadow-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BotMessageSquare size={24} />
      </button>

      {isOpen && <ConversationBox isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default ChatbotIcon;
