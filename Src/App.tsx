import React, { useState, useRef } from 'react';
import { Camera, Image, Home, Clock, Settings, Scan, CheckCircle, Star, X, Upload, FileText, Globe, PenTool, Zap, Brain, FileSearch, ArrowRight, Mail, Shield, HelpCircle, Github, Twitter, ExternalLink, Award, Users, Lightbulb, Languages, FileCheck, PenTool as Pen, FileText as Document, ChevronLeft } from 'lucide-react';

interface HistoryItem {
  id: string;
  type: 'camera' | 'gallery';
  text: string;
  timestamp: Date;
  fileName?: string;
}

export default function ClarifAIApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedText, setExtractedText] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: '1',
      type: 'camera',
      text: 'Sample extracted text from camera...',
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: '2',
      type: 'gallery',
      text: 'Sample text from gallery image...',
      timestamp: new Date(Date.now() - 7200000)
    }
  ]);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  const simulateOCR = (file: File, type: 'camera' | 'gallery') => {
    setIsProcessing(true);
    
    // Simulate OCR processing
    setTimeout(() => {
      const mockTexts = [
        "This is sample text extracted from the image. The OCR technology recognizes both printed and handwritten text accurately with high precision.",
        "Document content successfully processed. ClarifAI's advanced algorithms can detect text in multiple formats and languages.",
        "Text extraction completed. The system has identified and converted the visual text into editable digital format.",
        "OCR processing finished. All text elements have been recognized and are now available for editing and copying."
      ];
      
      const randomText = mockTexts[Math.floor(Math.random() * mockTexts.length)];
      setExtractedText(randomText);
      setIsProcessing(false);
      
      const newItem: HistoryItem = {
        id: Date.now().toString(),
        type: type,
        text: randomText,
        timestamp: new Date(),
        fileName: file.name
      };
      setHistory([newItem, ...history]);
    }, 2000);
  };

  const handleTakePhoto = () => {
    cameraInputRef.current?.click();
  };

  const handleChooseFromGallery = () => {
    galleryInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>, type: 'camera' | 'gallery') => {
    const file = event.target.files?.[0];
    if (file) {
      simulateOCR(file, type);
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    
    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 24) return `${hours} hours ago`;
    return date.toLocaleDateString();
  };

  const renderTermsOfUse = () => (
    <div className="flex-1 px-6 py-8 overflow-y-auto">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => setShowTerms(false)}
          className="mr-3 text-purple-600"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className={`${darkMode ? 'text-white' : 'text-black'} font-bold text-xl`}>Terms of Use</h2>
      </div>
      
      <div className="space-y-6">
        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>1. Acceptance of Terms</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
            By downloading, installing, or using ClarifAI ("the App"), you agree to be bound by these Terms of Use. 
            If you do not agree to these terms, please do not use the App.
          </p>
        </section>

        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>2. Description of Service</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed mb-3`}>
            ClarifAI is an AI-powered Optical Character Recognition (OCR) application that:
          </p>
          <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm space-y-2 ml-4`}>
            <li>• Extracts text from images and documents</li>
            <li>• Supports both printed and handwritten text recognition</li>
            <li>• Provides multi-language text extraction</li>
            <li>• Allows editing and copying of extracted text</li>
          </ul>
        </section>

        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>3. User Responsibilities</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed mb-3`}>
            As a user of ClarifAI, you agree to:
          </p>
          <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm space-y-2 ml-4`}>
            <li>• Use the App only for lawful purposes</li>
            <li>• Not upload copyrighted material without permission</li>
            <li>• Not attempt to reverse engineer or circumvent security features</li>
            <li>• Respect the privacy and intellectual property rights of others</li>
          </ul>
        </section>

        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>4. Intellectual Property</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
            ClarifAI and its original content, features, and functionality are owned by ClarifAI Inc. and are protected 
            by international copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>5. Limitation of Liability</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
            ClarifAI is provided "as is" without warranties of any kind. We are not liable for any damages arising 
            from your use of the App, including but not limited to errors in text extraction or data loss.
          </p>
        </section>

        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>6. Termination</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
            We reserve the right to terminate or suspend your access to the App at any time, with or without cause, 
            without prior notice.
          </p>
        </section>

        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>7. Changes to Terms</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
            We may update these Terms of Use from time to time. Continued use of the App after changes constitutes 
            acceptance of the new terms.
          </p>
        </section>

        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>8. Contact Information</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
            If you have questions about these Terms of Use, please contact us at: legal@clarifai.com
          </p>
        </section>

        <div className="pt-4 border-t border-gray-200">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs`}>
            Last updated: January 1, 2025
          </p>
        </div>
      </div>
    </div>
  );

  const renderPrivacyPolicy = () => (
    <div className="flex-1 px-6 py-8 overflow-y-auto">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => setShowPrivacy(false)}
          className="mr-3 text-purple-600"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className={`${darkMode ? 'text-white' : 'text-black'} font-bold text-xl`}>Privacy Policy</h2>
      </div>
      
      <div className="space-y-6">
        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>1. Information We Collect</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed mb-3`}>
            ClarifAI collects the following information:
          </p>
          <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm space-y-2 ml-4`}>
            <li>• Images you upload for text extraction</li>
            <li>• Extracted text results</li>
            <li>• App usage data and analytics</li>
            <li>• Device information and technical data</li>
          </ul>
        </section>

        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>2. How We Use Your Information</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed mb-3`}>
            We use your information to:
          </p>
          <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm space-y-2 ml-4`}>
            <li>• Provide OCR text extraction services</li>
            <li>• Improve our AI algorithms and accuracy</li>
            <li>• Analyze app performance and usage patterns</li>
            <li>• Provide customer support</li>
          </ul>
        </section>

        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>3. Data Processing & Storage</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed mb-3`}>
            Your data is processed with the following principles:
          </p>
          <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm space-y-2 ml-4`}>
            <li>• Images are processed locally on your device when possible</li>
            <li>• Cloud processing uses encrypted connections</li>
            <li>• Extracted text is stored securely in your app history</li>
            <li>• We retain data only as long as necessary for service provision</li>
          </ul>
        </section>

        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>4. Data Security</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
            We implement industry-standard security measures including encryption, secure data transmission, 
            and regular security audits to protect your information from unauthorized access.
          </p>
        </section>

        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>5. Third-Party Sharing</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
            ClarifAI does not sell, trade, or otherwise transfer your personal information to third parties, 
            except as required by law or with your explicit consent.
          </p>
        </section>

        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>6. Your Rights</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed mb-3`}>
            You have the right to:
          </p>
          <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm space-y-2 ml-4`}>
            <li>• Access your data and history</li>
            <li>• Delete your data and account</li>
            <li>• Export your extracted text data</li>
            <li>• Opt-out of analytics collection</li>
          </ul>
        </section>

        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>7. Cookies & Analytics</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
            We use analytics tools to understand how our app is used. This helps us improve features and performance. 
            You can disable analytics in the app settings.
          </p>
        </section>

        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>8. Children's Privacy</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
            ClarifAI is not intended for children under 13. We do not knowingly collect personal information 
            from children under 13.
          </p>
        </section>

        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>9. International Data Transfers</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
            Your data may be transferred to and processed in countries other than your own. We ensure appropriate 
            safeguards are in place for international data transfers.
          </p>
        </section>

        <section>
          <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-lg mb-3`}>10. Contact Information</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
            For privacy-related questions or to exercise your rights, contact us at: privacy@clarifai.com
          </p>
        </section>

        <div className="pt-4 border-t border-gray-200">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs`}>
            Last updated: January 1, 2025
          </p>
        </div>
      </div>
    </div>
  );

  const renderHome = () => (
    <div className="flex-1 px-6 py-8 overflow-y-auto">
      {/* Title and Subtitle */}
      <div className="text-center mb-8">
        <h2 className={`${darkMode ? 'text-white' : 'text-black'} font-bold text-3xl mb-2`}>ClarifAI</h2>
        <p className="text-purple-600 text-sm font-medium">AI-POWERED OCR</p>
      </div>

      {/* Icons and Text */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-2">
              <Scan className="w-8 h-8 text-purple-600" />
            </div>
            <span className={`${darkMode ? 'text-white' : 'text-black'} text-sm`}>Scan</span>
          </div>
          
          <div className="w-12 h-0.5 bg-purple-600 mx-4"></div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-2">
              <CheckCircle className="w-8 h-8 text-purple-600" />
            </div>
            <span className={`${darkMode ? 'text-white' : 'text-black'} text-sm`}>Clarify</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-4 mb-8">
        <button 
          onClick={handleTakePhoto}
          disabled={isProcessing}
          className="w-full bg-purple-600 rounded-2xl py-4 px-6 flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Camera className="w-6 h-6 text-white mr-3" />
          <div className="text-left">
            <p className="text-white font-bold text-lg">Take Photo</p>
            <p className="text-purple-200 text-sm">Use camera to capture text</p>
          </div>
        </button>

        <button 
          onClick={handleChooseFromGallery}
          disabled={isProcessing}
          className="w-full bg-white border-2 border-purple-600 rounded-2xl py-4 px-6 flex items-center justify-center hover:bg-purple-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Image className="w-6 h-6 text-purple-600 mr-3" />
          <div className="text-left">
            <p className="text-purple-600 font-bold text-lg">Choose from Gallery</p>
            <p className="text-purple-400 text-sm">Select existing image</p>
          </div>
        </button>
      </div>

      {/* How It Works Section */}
      <div className="mb-8">
        <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-bold text-lg mb-4 text-center`}>How It Works</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600 font-bold text-sm">1</span>
            </div>
            <div className="flex-1">
              <h4 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-sm mb-1`}>Capture or Upload</h4>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-xs`}>Take a photo or select an image containing text from your gallery</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600 font-bold text-sm">2</span>
            </div>
            <div className="flex-1">
              <h4 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-sm mb-1`}>AI Processing</h4>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-xs`}>Our advanced OCR algorithms analyze and detect text in the image</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600 font-bold text-sm">3</span>
            </div>
            <div className="flex-1">
              <h4 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-sm mb-1`}>Extract & Edit</h4>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-xs`}>Get accurate text extraction ready for copying, editing, or sharing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Key Features Section */}
      <div className="mb-8">
        <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-bold text-lg mb-4 text-center`}>Key Features</h3>
        <div className="space-y-3">
          {/* Handwriting Recognition */}
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow`}>
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Pen className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h4 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-sm mb-1`}>Handwriting Recognition</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-xs mb-2`}>Advanced AI algorithms accurately read and convert handwritten notes, signatures, and annotations into editable text</p>
                <div className="flex items-center space-x-2">
                  <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full font-medium">98% Accuracy</span>
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-medium">Neural Network</span>
                </div>
              </div>
            </div>
          </div>

          {/* Printed Text Extraction */}
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow`}>
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-sm mb-1`}>Printed Text Extraction</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-xs mb-2`}>High-precision extraction of printed text from documents, books, receipts, and any printed materials with perfect formatting</p>
                <div className="flex items-center space-x-2">
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">99% Accuracy</span>
                  <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full font-medium">Layout Preserved</span>
                </div>
              </div>
            </div>
          </div>

          {/* Multi-language Support */}
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow`}>
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Languages className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-sm mb-1`}>Multi-language Support</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-xs mb-2`}>Support for 120+ languages including Arabic, Chinese, Japanese, and right-to-left scripts with automatic language detection</p>
                <div className="flex items-center space-x-2">
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-medium">120+ Languages</span>
                  <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full font-medium">Auto-Detect</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Did You Know Section */}
      <div className="mb-8">
        <div className={`${darkMode ? 'bg-gradient-to-r from-purple-900 to-blue-900' : 'bg-gradient-to-r from-purple-50 to-blue-50'} rounded-2xl p-6 border ${darkMode ? 'border-purple-700' : 'border-purple-200'}`}>
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className={`${darkMode ? 'text-white' : 'text-purple-900'} font-bold text-lg mb-3`}>Did You Know?</h3>
              <p className={`${darkMode ? 'text-purple-100' : 'text-purple-800'} text-sm leading-relaxed`}>
                Did you know that unclear handwriting is one of the biggest causes of daily miscommunication?
                From school notes to workplace messages, unreadable text leads to mistakes and wasted time. ClarifAI solves this instantly by converting messy handwriting into clean, readable digital text, making every note clear and actionable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Extracted Text Display */}
      {extractedText && (
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-xl">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-green-800 font-semibold">Extracted Text</h3>
            <button 
              onClick={() => setExtractedText('')}
              className="text-green-600 hover:text-green-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-green-700 text-sm">{extractedText}</p>
          <button className="mt-3 text-green-600 text-sm font-medium hover:text-green-700">
            Copy to Clipboard →
          </button>
        </div>
      )}
    </div>
  );

  const renderHistory = () => (
    <div className="flex-1 px-6 py-8 overflow-y-auto">
      <h2 className={`${darkMode ? 'text-white' : 'text-black'} font-bold text-2xl mb-6`}>History</h2>
      
      {history.length === 0 ? (
        <div className="text-center py-12">
          <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No history yet</p>
          <p className="text-gray-400 text-sm mt-2">Start scanning to see your history</p>
        </div>
      ) : (
        <div className="space-y-3">
          {history.map((item) => (
            <div key={item.id} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-4 shadow-sm`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  {item.type === 'camera' ? (
                    <Camera className="w-4 h-4 text-purple-600 mr-2" />
                  ) : (
                    <Image className="w-4 h-4 text-purple-600 mr-2" />
                  )}
                  <span className="text-xs text-gray-500">{formatTime(item.timestamp)}</span>
                </div>
              </div>
              <p className={`${darkMode ? 'text-white' : 'text-black'} text-sm line-clamp-2 mb-2`}>{item.text}</p>
              {item.fileName && (
                <p className="text-xs text-gray-400 mb-2">📄 {item.fileName}</p>
              )}
              <div className="flex gap-3">
                <button className="text-purple-600 text-xs hover:text-purple-700">
                  View Details →
                </button>
                <button className="text-purple-600 text-xs hover:text-purple-700">
                  Copy Text →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderSettings = () => (
    <div className="flex-1 px-6 py-8 overflow-y-auto">
      <h2 className={`${darkMode ? 'text-white' : 'text-black'} font-bold text-2xl mb-6`}>Settings</h2>
      
      <div className="space-y-6">
        {/* Language Settings */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-4`}>
          <div className="flex items-center mb-3">
            <Globe className="w-5 h-5 text-purple-600 mr-3" />
            <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold`}>Language</h3>
          </div>
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg text-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
            <option value="ja">Japanese</option>
          </select>
        </div>

        {/* App Settings - Only Dark Mode */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-4`}>
          <div className="flex items-center mb-3">
            <Settings className="w-5 h-5 text-purple-600 mr-3" />
            <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold`}>App Settings</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>Dark Mode</span>
              <input 
                type="checkbox" 
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                className="w-4 h-4 text-purple-600" 
              />
            </label>
          </div>
        </div>

        {/* About Us Section */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-4`}>
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-purple-600 mr-3" />
            <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold`}>About Us</h3>
          </div>
          
          <div className="space-y-3">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
              ClarifAI is an advanced AI-powered OCR application that transforms images into editable text with exceptional accuracy.
            </p>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Version</span>
              <span className={`${darkMode ? 'text-white' : 'text-black'} text-sm font-medium`}>1.0.0</span>
            </div>
            
            <div className="pt-3 text-center">
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs`}>© 2025 ClarifAI Inc.</p>
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-4`}>
          <div className="flex items-center mb-4">
            <Document className="w-5 h-5 text-purple-600 mr-3" />
            <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold`}>Legal</h3>
          </div>
          
          <div className="space-y-3">
            <button 
              onClick={() => setShowTerms(true)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center">
                <Document className="w-4 h-4 text-purple-600 mr-3" />
                <span className={`${darkMode ? 'text-white' : 'text-black'} text-sm`}>Terms of Use</span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </button>
            
            <button 
              onClick={() => setShowPrivacy(true)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-purple-600 mr-3" />
                <span className={`${darkMode ? 'text-white' : 'text-black'} text-sm`}>Privacy Policy</span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen flex flex-col max-w-md mx-auto transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Header Section */}
      <header className="bg-purple-600 px-4 py-3 flex items-center">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
          <Star className="w-6 h-6 text-purple-600 fill-purple-600" />
        </div>
        <div>
          <h1 className="text-white font-bold text-xl">ClarifAI</h1>
          <p className="text-green-400 text-xs font-medium">AI VISION</p>
        </div>
      </header>

      {/* Processing Overlay */}
      {isProcessing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 text-center`}>
            <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className={`${darkMode ? 'text-white' : 'text-black'} font-semibold`}>Processing Image...</p>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} text-sm mt-2`}>Extracting text with AI</p>
          </div>
        </div>
      )}

      {/* Hidden File Inputs */}
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={(e) => handleFileSelect(e, 'camera')}
        className="hidden"
      />
      <input
        ref={galleryInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => handleFileSelect(e, 'gallery')}
        className="hidden"
      />

      {/* Main Content */}
      {showTerms ? renderTermsOfUse() : 
       showPrivacy ? renderPrivacyPolicy() : 
       activeTab === 'home' ? renderHome() : 
       activeTab === 'history' ? renderHistory() : 
       renderSettings()}

      {/* Footer Navigation - Hide when viewing legal pages */}
      {!showTerms && !showPrivacy && (
        <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} px-4 py-2`}>
          <div className="flex justify-around">
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center py-2 px-4 transition-colors ${
                activeTab === 'home' ? 'text-purple-600' : darkMode ? 'text-gray-300 hover:text-purple-600' : 'text-black hover:text-purple-600'
              }`}
            >
              <Home className="w-5 h-5 mb-1" />
              <span className="text-xs">Home</span>
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              className={`flex flex-col items-center py-2 px-4 transition-colors ${
                activeTab === 'history' ? 'text-purple-600' : darkMode ? 'text-gray-300 hover:text-purple-600' : 'text-black hover:text-purple-600'
              }`}
            >
              <Clock className="w-5 h-5 mb-1" />
              <span className="text-xs">History</span>
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`flex flex-col items-center py-2 px-4 transition-colors ${
                activeTab === 'settings' ? 'text-purple-600' : darkMode ? 'text-gray-300 hover:text-purple-600' : 'text-black hover:text-purple-600'
              }`}
            >
              <Settings className="w-5 h-5 mb-1" />
              <span className="text-xs">Settings</span>
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}