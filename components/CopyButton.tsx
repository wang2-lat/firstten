'use client';

import { useState } from 'react';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export default function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`text-sm px-3 py-1.5 rounded-lg transition-all ${
        copied
          ? 'bg-green-100 text-green-700'
          : 'bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-700'
      } ${className}`}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}
