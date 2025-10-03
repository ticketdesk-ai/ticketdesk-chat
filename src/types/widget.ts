export interface ChatBotConfig {
  name: string;
  color?: string;
  shape?: 'square' | 'round';
  icon?: string;
  welcome_message?: string;
  fields?: string[];
}

export interface Message {
  id?: string;
  from: 'operator' | 'user' | 'agent';
  content: string;
  type: 'text' | 'image' | 'file' | 'form' | 'audio';
  timestamp: number;
  status?: 'sent' | 'read' | 'failed';
  file?: {
    url?: string;
    name?: string;
    type?: string;
  };
  meta?: Record<string, unknown>;
  fields?: string[];
}

export interface ChatSession {
  session_id: string;
  state: 'open' | 'resolved' | 'pending';
  created_at: number;
  updated_at: number;
  last_message?: string;
  last_message_at?: number;
  last_message_from?: string;
  name?: string;
  email?: string;
  phone?: string;
}

export interface CustomerProfile {
  name?: string;
  email?: string;
  phone?: string;
}

export interface ChatOperator {
  user_id: string;
  name: string;
  avatar?: string;
}
