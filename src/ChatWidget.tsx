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
    operators,
    lastActive,
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
        chatbotId={chatbotId}
        isOpen={isOpen}
        isMaximized={isMaximized}
        isConnected={isConnected}
        config={config}
        operators={operators}
        lastActive={lastActive}
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
        onRetryMessage={retryMessage}
      />
    </shadow.div>
  );
}
