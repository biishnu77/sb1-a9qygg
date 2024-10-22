import React, { useState } from 'react';
import { Upload, FileText, Download, AlertCircle } from 'lucide-react';
import FileUpload from './components/FileUpload';
import TranslationProgress from './components/TranslationProgress';
import DownloadButton from './components/DownloadButton';

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [translationProgress, setTranslationProgress] = useState<number>(0);
  const [translatedFileUrl, setTranslatedFileUrl] = useState<string | null>(null);

  const handleFileUpload = (uploadedFile: File) => {
    setFile(uploadedFile);
    // Simulating translation progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setTranslationProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTranslatedFileUrl('https://example.com/translated-file.pdf'); // Replace with actual URL
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">Nepali to English Document Translator</h1>
        
        <div className="space-y-6">
          <FileUpload onFileUpload={handleFileUpload} />
          
          {file && (
            <div className="bg-indigo-50 rounded-lg p-4 flex items-center space-x-3">
              <FileText className="text-indigo-500" />
              <span className="text-sm text-indigo-700">{file.name}</span>
            </div>
          )}
          
          {translationProgress > 0 && translationProgress < 100 && (
            <TranslationProgress progress={translationProgress} />
          )}
          
          {translatedFileUrl && (
            <DownloadButton url={translatedFileUrl} />
          )}
        </div>

        <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-blue-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">Instructions</h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>1. Upload a DOC or PDF file in Nepali (max 10MB).</p>
                <p>2. Wait for the translation to complete.</p>
                <p>3. Download the translated English version.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;