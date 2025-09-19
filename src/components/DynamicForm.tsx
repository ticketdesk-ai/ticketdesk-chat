import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { ChatBotConfig } from '../types/widget';

interface DynamicFormProps {
  onSubmit: (data: Record<string, string>) => void;
  config: ChatBotConfig
}

export function DynamicForm({ onSubmit, config }: DynamicFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !email.includes('@')) {
      return;
    }

    setIsSubmitting(true);
    try {
      onSubmit({ email });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValidEmail = email.trim() && email.includes('@');

  return (
    <div className="py-2">
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <div className="flex-1 flex items-center gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50"
            style={
              { '--tw-ring-color': config.color } as React.CSSProperties
            }
            disabled={isSubmitting}
            required
          />

          <button
            type="submit"
            disabled={!isValidEmail || isSubmitting}
            style={{
              backgroundColor: isValidEmail ? config.color : '#d1d5db',
              cursor: isValidEmail ? 'pointer' : 'not-allowed',
            }}
            className="px-3 py-2 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-1"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
