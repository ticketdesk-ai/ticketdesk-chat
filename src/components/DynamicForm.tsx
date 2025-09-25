import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { ChatBotConfig } from '../types/widget';

interface DynamicFormProps {
  onSubmit: (data: Record<string, string>) => void;
  config: ChatBotConfig;
}

export function DynamicForm({ onSubmit, config }: DynamicFormProps) {
  const initialState = (config.fields || []).reduce((acc, field) => {
    acc[field] = '';
    return acc;
  }, {} as Record<string, string>);

  const [formData, setFormData] =
    useState<Record<string, string>>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      onSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-2">
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <div className="flex-1 flex items-center gap-2">
          {config.fields?.map((field) => (
            <input
              key={field}
              type={field === 'email' ? 'email' : 'text'}
              value={formData[field]}
              onChange={(e) => handleChange(field, e.target.value)}
              placeholder={`Your ${field}`}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{ '--tw-ring-color': config.color } as React.CSSProperties}
              disabled={isSubmitting}
              required
            />
          ))}

          <button
            type="submit"
            style={{
              backgroundColor: config.color,
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
