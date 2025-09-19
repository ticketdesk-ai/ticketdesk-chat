import { MessageCircle, X } from 'lucide-react';
import type { ChatBotConfig } from '../types/widget';

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
  config: ChatBotConfig;
}

export function ChatButton({ isOpen, onClick, config }: ChatButtonProps) {
  const buttonClasses = `
    fixed bottom-6 right-6 p-4 text-white shadow-lg transition-all duration-300
    ${config.shape === 'round' ? 'rounded-full' : 'rounded-lg'}
  `;

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: config.color }}
      className={buttonClasses}
    >
      {isOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <MessageCircle className="h-6 w-6" />
      )}
    </button>
  );
}
