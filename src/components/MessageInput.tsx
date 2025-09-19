import React, { useState } from 'react';
import { Send, Smile } from 'lucide-react';
import { EmojiPicker } from './EmojiPicker';
import { FileUpload } from './FileUpload';
import { AudioRecorder } from './AudioRecorder';
import type { ChatBotConfig } from '../types/widget';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  onFileUpload: (file: File) => void;
  config: ChatBotConfig;
}

export function MessageInput({
  onSendMessage,
  onFileUpload,
  config,
}: MessageInputProps) {
  const [input, setInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  const onEmojiSelect = (emoji: string) => {
    setInput((prev) => prev + emoji);
  };

  return (
    <div className="border-t bg-white">
      <form onSubmit={handleSubmit} className="p-4 pb-2 relative">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a message..."
            className="flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50"
            style={
              { '--tw-ring-color': config.color } as React.CSSProperties
            }
          />
          <button
            type="submit"
            style={{ backgroundColor: config.color }}
            className="p-3 text-white rounded-full hover:opacity-90 transition-opacity"
            disabled={!input.trim()}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>

      <div className="px-4 pb-1 flex items-center justify-between gap-2 relative">
        {/* Left side: file upload + emoji button */}
        <div className="flex items-center gap-1">
          <FileUpload onFileSelect={onFileUpload} config={config} />
          <AudioRecorder onAudioRecorded={onFileUpload} config={config} />
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-full"
          >
            <Smile className="h-4 w-4" />
          </button>

          {showEmojiPicker && (
            <EmojiPicker
              onEmojiSelect={onEmojiSelect}
              onClose={() => setShowEmojiPicker(false)}
            />
          )}
        </div>

        {/* Right side: powered by */}
        <div className="flex-1 flex justify-end">
          <a
            href="https://ticketdesk.ai/?utm_source=chat-widget&utm_medium=referral&utm_campaign=powered-by"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            Powered by <span className="font-semibold">Ticketdesk AI</span>
          </a>
        </div>
      </div>
    </div>
  );
}
