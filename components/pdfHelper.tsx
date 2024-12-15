'use client';

import { Download } from 'lucide-react';

const ExportButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 print:hidden"
    >
      <Download className="w-5 h-5" />
      <span>Export PDF</span>
    </button>
  );
};

export default ExportButton;