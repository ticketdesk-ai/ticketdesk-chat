import { MessageCircle, User, Bot } from 'lucide-react';
import type { ChatSession } from '../types/widget';
import type { ChatBotConfig } from '../types/widget';

interface RecentChatsProps {
  sessions: ChatSession[];
  onLoadSession: (sessionId: string) => void;
  config: ChatBotConfig;
}

export function RecentChats({
  sessions,
  onLoadSession,
}: RecentChatsProps) {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
    } else if (diffInHours < 168) {
      // 7 days
      return date.toLocaleDateString('en-US', { weekday: 'short' });
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
    }
  };

  const getStatusColor = (state: string) => {
    switch (state) {
      case 'active':
        return 'text-green-600 bg-green-100';
      case 'resolved':
        return 'text-gray-600 bg-gray-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      {sessions.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-gray-500">
          <MessageCircle className="h-12 w-12 mb-4 opacity-50" />
          <p>No recent chats found</p>
        </div>
      ) : (
        <div className="divide-y">
          {sessions.map((session) => (
            <button
              key={session.session_id}
              onClick={() => onLoadSession(session.session_id)}
              className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors text-left"
            >
              {/* Avatar / Icon */}
              <div className="flex-shrink-0">
                {session.last_message_from === 'user' ? (
                  <User className="h-8 w-8 text-gray-400" />
                ) : (
                  <Bot className="h-8 w-8 text-indigo-500" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-start items-center gap-3 mb-1">
                  <span className="font-medium truncate">
                    {session.last_message_from === 'user'
                      ? 'You'
                      : session.last_message_from}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatDate(session.updated_at)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  {session.last_message}
                </p>
              </div>

              {/* Status */}
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  session.state
                )}`}
              >
                {session.state}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
