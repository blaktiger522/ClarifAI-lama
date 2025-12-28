export interface HistoryItem {
  id: string;
  type: 'camera' | 'gallery';
  text: string;
  timestamp: Date;
  fileName?: string;
}

export interface ProcessingState {
  isProcessing: boolean;
  progress: number;
  message: string;
}

export interface AppSettings {
  darkMode: boolean;
  language: string;
  autoSave: boolean;
  notifications: boolean;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accuracy: string;
  tags: string[];
  color: string;
}