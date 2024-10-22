import React from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  url: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ url }) => {
  return (
    <a
      href={url}
      download
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <Download className="mr-2 h-5 w-5" />
      Download Translated File
    </a>
  );
};

export default DownloadButton;