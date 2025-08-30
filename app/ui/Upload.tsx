"use client";

import { useRef, useState } from "react";

const MAX_FILE_SIZE_MB = 5; // 5 MB

const beforeUpload = (file: File): string | null => {
  const sizeInMB = file.size / (1024 * 1024);
  if (sizeInMB > MAX_FILE_SIZE_MB) {
    return `File size exceeds ${MAX_FILE_SIZE_MB}MB.`;
  }
  return null;
};

const Upload = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const errorMessage = beforeUpload(file);
      if (errorMessage) {
        setError(errorMessage);
        setFileName(null);
      } else {
        setError(null);
        setFileName(file.name);
      }
    }
  };

  return (
    <div aria-labelledby="image upload" className="w-full">
      <div
        onClick={handleClick}
        className="h-48 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center text-gray-600 cursor-pointer hover:border-gray-600 transition"
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <span>
          {fileName ? `Selected: ${fileName}` : "Click to upload a file"}
        </span>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default Upload;
