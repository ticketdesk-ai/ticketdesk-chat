import { useState } from 'react';
import { ChatButton } from './components/ChatButton';
import { ChatWindow } from './components/ChatWindow';
import { useChatHook } from './hooks/useChatHook';
import shadow from 'react-shadow';
import styles from './index.css?inline';

// --- Tailwind normalizer for ShadowRoot ---
function normalizeTailwind(css: string): string {
  return css
    .replace(/:root\b/g, ':host')
    .replaceAll('((-webkit-hyphens:none)) and ', '')
    .replaceAll('(-webkit-hyphens: none) and ', '');
}

export function ChatWidget({ chatbotId }: { chatbotId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const {
    messages,
    sendMessage,
    sendFile,
    retryMessage,
    startNewChat,
    endCurrentChat,
    loadSession,
    getRecentChats,
    updateProfile,
    sessions,
    selectedSession,
    isConnected,
    isLoading,
    config,
  } = useChatHook({
    chatbotId,
  });

  if (isLoading === true || !config) {
    return null;
  }

  return (
    <shadow.div>
      <style>{normalizeTailwind(styles)}</style>

      <ChatButton
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        config={config}
      />

      <ChatWindow
        isOpen={isOpen}
        isMaximized={isMaximized}
        isConnected={isConnected}
        config={config}
        messages={messages}
        sessions={sessions}
        selectedSession={selectedSession}
        onStartNewChat={startNewChat}
        onEndChat={endCurrentChat}
        onLoadSession={loadSession}
        onGetRecentChats={getRecentChats}
        onUpdateProfile={updateProfile}
        onClose={() => setIsOpen(false)}
        onToggleMaximize={() => setIsMaximized(!isMaximized)}
        onSendMessage={sendMessage}
        onFileUpload={sendFile}
        onRetryMessage={retryMessage}
      />
    </shadow.div>
  );
}
