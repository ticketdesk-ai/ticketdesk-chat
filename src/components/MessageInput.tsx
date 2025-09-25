import React, { useRef, useState } from 'react';
import { Paperclip, Send, Smile } from 'lucide-react';
import { EmojiPicker } from './EmojiPicker';
import type { ChatBotConfig, ChatSession, Message } from '../types/widget';
import { AudioRecorder } from './AudioRecorder';

interface MessageInputProps {
  chatbotId: string;
  selectedSession: ChatSession | null;
  config: ChatBotConfig;
  onSendMessage: (message: Message) => void;
}

export function MessageInput({
  chatbotId,
  selectedSession,
  config,
  onSendMessage,
}: MessageInputProps) {
  const [input, setInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage: Message = {
        from: 'user',
        content: input.trim(),
        type: 'text',
        timestamp: Date.now(),
        status: 'sent',
      };
      onSendMessage(newMessage);
      setInput('');
    }
  };

  const onEmojiSelect = (emoji: string) => {
    setInput((prev) => prev + emoji);
  };

  const fileUploader = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(
      `https://api.ticketdesk.ai/v1/uploader?session_id=${selectedSession?.session_id}&site_id=${chatbotId}`,
      {
        method: 'POST',
        body: formData,
      }
    );
    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.message);
    }
    return json;
  };

  const handleFileUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const fileResponse = await fileUploader(file);
      const newMessage: Message = {
        from: 'user',
        content: file.name,
        type:
          file.type === 'audio/wav'
            ? 'audio'
            : file.type.startsWith('image/')
            ? 'image'
            : 'file',
        timestamp: Date.now(),
        status: 'sent',
        file: fileResponse,
      };
      onSendMessage(newMessage);
    } catch (error) {
      console.error('File upload failed:', error);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleUploadClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    handleFileUpload(file);
  };

  const handlePaste = async (e: React.ClipboardEvent) => {
    const items = Array.from(e.clipboardData.items);
    const item = items[0];

    if (item.type.indexOf('image') !== -1 || item.kind === 'file') {
      e.preventDefault();
      const file = item.getAsFile();
      if (file) {
        handleFileUpload(file);
      }
    }
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
            style={{ '--tw-ring-color': config.color } as React.CSSProperties}
            onPaste={handlePaste}
            disabled={isUploading}
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
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            title="Upload file"
          >
            <Paperclip className="h-5 w-5" />
          </button>
          <AudioRecorder onAudioRecorded={handleFileUpload} config={config} />
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
          {isUploading && <span className='text-sm text-gray-700'>Uploading...</span>}
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

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleUploadClick}
          className="hidden"
          accept="image/*,audio/*,.pdf,.doc,.docx,.txt,.xls,.xlsx,.csv,.tsv,.xlsm"
        />
      </div>
    </div>
  );
}
