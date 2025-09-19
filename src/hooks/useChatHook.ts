import { useState, useCallback, useEffect } from 'react';
import { usePartySocket } from 'partysocket/react';
import type { Message, ChatSession } from '../types/widget';
import type { ChatBotConfig } from '../types/widget';

// Helper functions for localStorage
const setLocalStorage = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn('Failed to save to localStorage:', error);
  }
};

const getLocalStorage = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn('Failed to read from localStorage:', error);
    return null;
  }
};

const generateId = (): string => {
  return `m_` + crypto.randomUUID();
};

export function useChatHook({ chatbotId }: { chatbotId: string }) {
  const [config, setConfig] = useState<ChatBotConfig>({
    color: '#3b82f6',
    shape: 'round',
    welcome_message: 'Hi there!',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [clientId, setClientId] = useState<string | null>(null);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(
    null
  );

  const socket = usePartySocket({
    host: 'http://localhost:8787',
    party: 'chatroom',
    room: chatbotId,
    onOpen() {
      console.log('Connected to chat server');

      // Get existing session data from localStorage
      const existingSessionId = getLocalStorage(`ti_${chatbotId}_session_id`);
      const existingClientId = getLocalStorage(`ti_${chatbotId}_client_id`);

      // Send session:join message
      const joinPayload = {
        type: 'session:join',
        client_id: existingClientId,
        session_id: existingSessionId,
      };

      socket.send(JSON.stringify(joinPayload));
    },
    onMessage(e) {
      const { type, data } = JSON.parse(e.data);
      console.log('Received data:', { type, data });

      if (type === 'session:joined') {
        // Server sends back session details
        if (data.session_id) {
          setSessionId(data.session_id);
          setLocalStorage(`ti_${chatbotId}_session_id`, data.session_id);
        }

        if (data.client_id) {
          setClientId(data.client_id);
          setLocalStorage(`ti_${chatbotId}_client_id`, data.client_id);
        }
        setMessages(data.messages || []);
        setSelectedSession(data.session);

        // Connected with server
        setConfig({
          color: '#3b82f6',
          shape: 'round',
          welcome_message: 'Hi! How can I help you today?',
          ...data.config,
        });
        setIsLoading(false);
      } else if (type === 'session:list') {
        setSessions(data.sessions);
      } else if (type === 'message:recieved') {
        setMessages((prev) => [...prev, data.message]);
      } else if (type === 'message:read') {
        // Update message status using message ID
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === data.message_id ? { ...msg, status: data.status } : msg
          )
        );
      } else {
        console.log('Unhandled message type:', type, data);
      }
    },
    onClose() {
      console.log('Disconnected from chat server');
    },
    onError(error) {
      console.error('Socket error:', error);
    },
  });

  useEffect(() => {
    // Load existing session data on mount
    const existingSessionId = getLocalStorage(`ti_${chatbotId}_session_id`);
    const existingClientId = getLocalStorage(`ti_${chatbotId}_client_id`);

    if (existingSessionId) {
      setSessionId(existingSessionId);
    }

    if (existingClientId) {
      setClientId(existingClientId);
    }

    // Add initial message if provided
    if (config?.welcome_message) {
      const welcomeMessage: Message = {
        id: generateId(),
        from: 'agent',
        content: config?.welcome_message,
        type: 'text',
        timestamp: Date.now(),
      };
      setMessages([welcomeMessage]);
    }
  }, [chatbotId, config?.welcome_message]);

  const sendMessage = useCallback(
    (content: string) => {
      if (!sessionId || !clientId) {
        console.log('No session details yet, cannot send message');
        return;
      }

      const userMessage: Message = {
        id: generateId(),
        from: 'user',
        content,
        type: 'text',
        timestamp: Date.now(),
        status: socket ? 'sent' : 'failed',
      };

      setMessages((prev) => {
        const nextMessages = [...prev, userMessage];

        // Show dynamic form after first user message
        if (
          selectedSession &&
          !selectedSession.email &&
          !prev.find((x) => x.type === 'form') // check against latest prev state
        ) {
          setTimeout(() => {
            const emailPromptMessage: Message = {
              id: generateId(),
              from: 'agent',
              content: 'What is your email address?',
              type: 'form',
              fields: ['email'],
              timestamp: Date.now(),
            };
            setMessages((prev2) => [...prev2, emailPromptMessage]);
          }, 1000);
        }

        return nextMessages;
      });

      if (socket) {
        const messagePayload = {
          type: 'message:new',
          session_id: sessionId,
          client_id: clientId,
          message: {
            id: userMessage.id,
            from: 'user',
            content,
            type: 'text',
            timestamp: Date.now(),
          },
        };

        socket.send(JSON.stringify(messagePayload));
      }
    },
    [sessionId, clientId, socket, selectedSession]
  );

  const sendFile = useCallback(
    async (file: File) => {
      // Don't send files if we don't have session details yet
      if (!sessionId || !clientId) {
        console.log('No session details yet, cannot send file');
        return;
      }

      // Create a file message
      const fileMessage: Message = {
        id: generateId(),
        from: 'user',
        content: `Uploading ${file.name}...`,
        type: 'file',
        timestamp: Date.now(),
        status: socket ? 'sent' : 'failed',
        file: {
          name: file.name,
          type: file.type,
        },
      };

      setMessages((prev) => [...prev, fileMessage]);

      try {
        // In a real implementation, you would upload the file to your server
        // For demo purposes, we'll simulate a file upload
        const formData = new FormData();
        formData.append('file', file);
        formData.append('chatbotId', chatbotId);
        formData.append('session_id', sessionId);
        formData.append('client_id', clientId);

        // Simulate upload delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Update message with file URL (simulated)
        const fileUrl = URL.createObjectURL(file);

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === fileMessage.id
              ? {
                  ...msg,
                  content: '',
                  status: 'sent',
                  file: {
                    ...msg.file!,
                    url: fileUrl,
                  },
                }
              : msg
          )
        );

        // Send file info to server if connected
        if (socket) {
          const filePayload = {
            type: 'message:file',
            session_id: sessionId,
            client_id: clientId,
            message: {
              id: fileMessage.id,
              from: 'user',
              type: 'file',
              timestamp: Date.now(),
              file: {
                name: file.name,
                type: file.type,
                url: fileUrl,
              },
            },
          };

          socket.send(JSON.stringify(filePayload));
        }
      } catch (error: unknown) {
        console.log('Error', error);
        // Update message status to failed
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === fileMessage.id
              ? {
                  ...msg,
                  status: 'failed',
                  content: `Failed to upload ${file.name}`,
                }
              : msg
          )
        );
      }
    },
    [socket, sessionId, clientId, chatbotId]
  );

  const startNewChat = useCallback(() => {
    if (socket) {
      // Clear current messages
      setMessages([]);
      setSessionId(null);

      // Send request to start new session
      const newSessionPayload = {
        type: 'session:new',
        client_id: clientId,
      };

      socket.send(JSON.stringify(newSessionPayload));

      // Add initial message if provided
      if (config?.welcome_message) {
        setTimeout(() => {
          const welcomeMessage: Message = {
            id: generateId(),
            from: 'agent',
            content: config.welcome_message!,
            type: 'text',
            timestamp: Date.now(),
          };
          setMessages([welcomeMessage]);
        }, 100);
      }
    }
  }, [socket, clientId, config?.welcome_message]);

  const endCurrentChat = useCallback(() => {
    if (socket && sessionId) {
      const endSessionPayload = {
        type: 'session:end',
        session_id: sessionId,
        client_id: clientId,
      };

      socket.send(JSON.stringify(endSessionPayload));
    }
  }, [socket, sessionId, clientId]);

  const loadSession = useCallback(
    (sessionId: string) => {
      if (socket) {
        const loadSessionPayload = {
          type: 'session:join',
          session_id: sessionId,
          client_id: clientId,
        };

        socket.send(JSON.stringify(loadSessionPayload));
        setSessionId(sessionId);
      }
    },
    [socket, clientId]
  );

  const getRecentChats = useCallback(() => {
    if (socket && clientId) {
      const getSessionsPayload = {
        type: 'session:list',
        client_id: clientId,
      };

      socket.send(JSON.stringify(getSessionsPayload));
    }
  }, [socket, clientId]);

  const updateProfile = useCallback(
    (profile: Record<string, string>) => {
      if (socket && clientId) {
        const updateProfilePayload = {
          type: 'profile:update',
          client_id: clientId,
          profile,
        };

        socket.send(JSON.stringify(updateProfilePayload));
      }

      setSelectedSession((prev) =>
        prev
          ? {
              ...prev,
              ...profile,
            }
          : prev
      );
    },
    [socket, clientId]
  );

  const retryMessage = useCallback(
    (messageId: string) => {
      // Don't retry if we don't have session details yet
      if (!sessionId || !clientId) {
        console.log('No session details yet, cannot retry message');
        return;
      }

      const message = messages.find((msg) => msg.id === messageId);
      if (message && message.from === 'user') {
        // Update status to sending
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId ? { ...msg, status: 'sent' } : msg
          )
        );

        if (socket) {
          if (message.file) {
            // Retry file message
            const filePayload = {
              type: 'message:file',
              session_id: sessionId,
              client_id: clientId,
              message: {
                id: message.id,
                from: 'user',
                type: 'file',
                timestamp: Date.now(),
                file: message.file,
              },
            };

            socket.send(JSON.stringify(filePayload));
          } else {
            // Retry text message
            const messagePayload = {
              type: 'message:new',
              session_id: sessionId,
              client_id: clientId,
              message: {
                id: message.id,
                from: 'user',
                content: message.content,
                type: 'text',
                timestamp: Date.now(),
              },
            };

            socket.send(JSON.stringify(messagePayload));
          }
        } else {
          // If not connected, mark as failed again
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === messageId ? { ...msg, status: 'failed' } : msg
            )
          );
        }
      }
    },
    [messages, sessionId, clientId, socket]
  );

  return {
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
    isConnected: !!socket,
    isLoading,
    config,
    sessionId,
    clientId,
  };
}
