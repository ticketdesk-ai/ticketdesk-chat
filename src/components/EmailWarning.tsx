import { Mail, AlertCircle } from 'lucide-react';
import { DynamicForm } from './DynamicForm';
import { useState } from 'react';
import type { ChatBotConfig } from '../types/widget';

interface EmailWarningProps {
  onFormSubmit: (data: Record<string, string>) => void;
  config: ChatBotConfig;
}

export function EmailWarning({ onFormSubmit, config }: EmailWarningProps) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="px-6 py-3 bg-yellow-50 border-t border-yellow-200">
      {!showForm ? (
        <button
          className="w-full flex items-center gap-2 text-left text-yellow-800 hover:text-yellow-900 transition-colors group"
          onClick={() => setShowForm(true)}
        >
          <AlertCircle className="h-4 w-4 text-yellow-600" />
          <span className="text-sm flex-1">
            Click here to set your email to get notifications
          </span>
          <Mail className="h-4 w-4 text-yellow-600 group-hover:text-yellow-700" />
        </button>
      ) : (
        <DynamicForm
          config={config}
          onSubmit={(value) => {
            onFormSubmit(value);
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
}
