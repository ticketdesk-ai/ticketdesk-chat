import React, { useRef } from 'react';
import { Paperclip } from 'lucide-react';
import type { ChatBotConfig } from '../types/widget';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  config: ChatBotConfig;
}

export function FileUpload({ onFileSelect }: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }

      // Check file type
      const allowedTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
        'audio/webm',
        'audio/mp3',
        'audio/wav',
        'audio/ogg',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
      ];

      if (!allowedTypes.includes(file.type)) {
        alert(
          'File type not supported. Please upload images, audio files, PDF, Word documents, or text files.'
        );
        return;
      }

      onFileSelect(file);
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileSelect}
        accept="image/*,audio/*,.pdf,.doc,.docx,.txt"
        className="hidden"
      />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
        title="Upload file"
      >
        <Paperclip className="h-5 w-5" />
      </button>
    </>
  );
}
