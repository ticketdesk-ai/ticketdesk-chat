import type { Message, ChatSession } from '../types/widget';
import { Header } from './Header';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { RecentChats } from './RecentChats';
import { EmailWarning } from './EmailWarning';
import { useState } from 'react';
import type { ChatBotConfig } from '../types/widget';

interface ChatWindowProps {
  isOpen: boolean;
  isMaximized: boolean;
  isConnected: boolean;
  config: ChatBotConfig;
  messages: Message[];
  sessions: ChatSession[];
  selectedSession: ChatSession | null;
  onStartNewChat: () => void;
  onEndChat: () => void;
  onLoadSession: (sessionId: string) => void;
  onGetRecentChats: () => void;
  onUpdateProfile: (profile: {
    name?: string;
    email?: string;
    phone?: string;
  }) => void;
  onClose: () => void;
  onToggleMaximize: () => void;
  onSendMessage: (message: string) => void;
  onFileUpload: (file: File) => void;
  onRetryMessage: (messageId: string) => void;
}

export function ChatWindow({
  isOpen,
  isMaximized,
  isConnected,
  config,
  messages,
  sessions,
  selectedSession,
  onStartNewChat,
  onEndChat,
  onLoadSession,
  onGetRecentChats,
  onUpdateProfile,
  onClose,
  onToggleMaximize,
  onSendMessage,
  onFileUpload,
  onRetryMessage,
}: ChatWindowProps) {
  const [currentView, setCurrentView] = useState<'chat' | 'recent-chats'>(
    'chat'
  );
  if (!isOpen) return null;

  const windowClasses = isMaximized
    ? 'fixed inset-4 w-auto h-auto max-w-none max-h-none min-h-0'
    : 'fixed bottom-24 right-6 w-[400px] max-w-[calc(100vw-3rem)] h-[75vh] max-h-[800px] min-h-[400px]';

  const handleViewRecentChats = () => {
    setCurrentView('recent-chats');
    onGetRecentChats();
  };

  const handleBackToChat = () => {
    setCurrentView('chat');
  };

  const handleLoadSession = (sessionId: string) => {
    onLoadSession(sessionId);
    setCurrentView('chat');
  };

  const handleProfileUpdate = (profile: {
    name?: string;
    email?: string;
    phone?: string;
  }) => {
    onUpdateProfile(profile);
    setCurrentView('chat');
  };

  const hasEmailWarning =
    selectedSession &&
    !selectedSession.email &&
    messages.filter((x) => x.from === 'user').length > 1;

  return (
    <div
      className={`${windowClasses} bg-white rounded-lg shadow-2xl flex flex-col animate-slide-up z-50`}
    >
      <Header
        onClose={onClose}
        onToggleMaximize={onToggleMaximize}
        isMaximized={isMaximized}
        isConnected={isConnected}
        currentView={currentView}
        onBackToChat={handleBackToChat}
        onStartNewChat={onStartNewChat}
        onEndChat={onEndChat}
        onViewRecentChats={handleViewRecentChats}
        config={config}
      />

      {currentView === 'chat' && (
        <>
          <MessageList
            messages={messages}
            onRetryMessage={onRetryMessage}
            onFormSubmit={handleProfileUpdate}
            config={config}
          />

          {/* Email warning at bottom */}
          {hasEmailWarning && (
            <EmailWarning config={config} onFormSubmit={handleProfileUpdate} />
          )}

          <MessageInput
            onSendMessage={onSendMessage}
            onFileUpload={onFileUpload}
            config={config}
          />
        </>
      )}

      {currentView === 'recent-chats' && (
        <RecentChats
          sessions={sessions}
          onLoadSession={handleLoadSession}
          config={config}
        />
      )}
    </div>
  );
}
