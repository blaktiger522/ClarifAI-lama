import { HistoryItem } from '../types';

export const simulateOCR = (
  file: File, 
  type: 'camera' | 'gallery',
  onProgress?: (progress: number) => void
): Promise<string> => {
  return new Promise((resolve) => {
    const mockTexts = [
      "This is sample text extracted from the image. The OCR technology recognizes both printed and handwritten text accurately with high precision.",
      "Document content successfully processed. ClarifAI's advanced algorithms can detect text in multiple formats and languages.",
      "Text extraction completed. The system has identified and converted the visual text into editable digital format.",
      "OCR processing finished. All text elements have been recognized and are now available for editing and copying.",
      "Handwriting recognition successful. The AI has successfully converted the handwritten content into digital text with 98% accuracy.",
      "Multi-language text detected and processed. The system has identified text in multiple languages and provided accurate translations."
    ];
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      onProgress?.(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        const randomText = mockTexts[Math.floor(Math.random() * mockTexts.length)];
        resolve(randomText);
      }
    }, 400);
  });
};

export const createHistoryItem = (
  type: 'camera' | 'gallery',
  text: string,
  fileName?: string
): HistoryItem => {
  return {
    id: Date.now().toString(),
    type,
    text,
    timestamp: new Date(),
    fileName
  };
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch (err) {
      document.body.removeChild(textArea);
      return false;
    }
  }
};