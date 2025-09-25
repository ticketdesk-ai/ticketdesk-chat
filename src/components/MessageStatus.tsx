import { Check, CheckCheck, AlertCircle } from 'lucide-react';

interface MessageStatusProps {
  status?: 'sent' | 'read' | 'failed';
  timestamp: number;
  onRetry?: () => void;
}

export function MessageStatus({
  status,
  timestamp,
  onRetry,
}: MessageStatusProps) {
  const formatTime = (timestamp: number): string => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(new Date(timestamp));
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'sent':
        return <Check className="w-3 h-3 text-gray-500" />;
      case 'read':
        return <CheckCheck className="w-3 h-3 text-blue-500" />;
      case 'failed':
        return <AlertCircle className="w-3 h-3 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-end gap-1 text-xs text-gray-500">
      <span>{formatTime(timestamp)}</span>
      {status && getStatusIcon()}
      {status === 'failed' && onRetry && (
        <>
          <span className="text-red-500">Not sent</span>
          <button
            onClick={onRetry}
            className="text-blue-500 hover:text-blue-700 underline ml-1"
          >
            Retry
          </button>
        </>
      )}
    </div>
  );
}
