import {
  X,
  Maximize2,
  Minimize2,
  MoreVertical,
  Plus,
  MessageSquare,
  Power,
  ArrowLeft,
} from 'lucide-react';
import { useState } from 'react';
import type { ChatBotConfig } from '../types/widget';

interface HeaderProps {
  onClose: () => void;
  onToggleMaximize: () => void;
  isMaximized: boolean;
  isConnected: boolean;
  currentView: 'chat' | 'recent-chats' | 'profile';
  onBackToChat: () => void;
  onStartNewChat: () => void;
  onEndChat: () => void;
  onViewRecentChats: () => void;
  config: ChatBotConfig
}

export function Header({
  onClose,
  onToggleMaximize,
  isMaximized,
  isConnected,
  currentView,
  onBackToChat,
  onStartNewChat,
  onEndChat,
  onViewRecentChats,
  config,
}: HeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const getHeaderTitle = () => {
    switch (currentView) {
      case 'recent-chats':
        return 'Recent chats';
      case 'profile':
        return 'Update Profile';
      default:
        return 'Chat with us';
    }
  };

  const showBackButton = currentView !== 'chat';
  const showConnectionStatus = currentView === 'chat';

  return (
    <div
      style={{ backgroundColor: config.color }}
      className="p-6 rounded-t-lg text-white"
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-3">
            {showBackButton && (
              <button
                onClick={onBackToChat}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <div>
              <h3 className="font-semibold text-lg">{getHeaderTitle()}</h3>
              {showConnectionStatus && (
                <div className="flex items-center gap-2 mt-1">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isConnected ? 'bg-green-400' : 'bg-red-400'
                    }`}
                  />
                  <p className="text-sm opacity-90">
                    {isConnected ? 'Online' : 'Connecting...'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <MoreVertical className="h-4 w-4" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg py-2 min-w-48 z-50">
                <button
                  onClick={() => {
                    onStartNewChat();
                    setShowDropdown(false);
                  }}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Start New Chat
                </button>
                <button
                  onClick={() => {
                    onEndChat();
                    setShowDropdown(false);
                  }}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <Power className="h-4 w-4" />
                  End Chat
                </button>
                <button
                  onClick={() => {
                    onViewRecentChats();
                    setShowDropdown(false);
                  }}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  View Recent Chats
                </button>
                <hr />
                <button
                  onClick={() => {
                    onToggleMaximize();
                    setShowDropdown(false);
                  }}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  {isMaximized ? (
                    <>
                      <Minimize2 className="h-4 w-4" /> Minimize
                    </>
                  ) : (
                    <>
                      <Maximize2 className="h-4 w-4" /> Maximize
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    onClose();
                    setShowDropdown(false);
                  }}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <X className="h-4 w-4" /> Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
