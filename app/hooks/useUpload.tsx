import { useState } from "react";

interface UseUploadOptions {
  onUpload: (file: File) => Promise<void>; // actual upload action
  maxSizeMB?: number; // optional size check
  allowedTypes?: string[]; // e.g. ["image/png", "image/jpeg"]
}

export function useUpload({
  onUpload,
  maxSizeMB,
  allowedTypes,
}: UseUploadOptions) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // ✅ Internal beforeUpload function
  const beforeUpload = (file: File): boolean => {
    if (maxSizeMB && file.size > maxSizeMB * 1024 * 1024) {
      setError(`File must be smaller than ${maxSizeMB}MB`);
      return false;
    }
    if (allowedTypes && !allowedTypes.includes(file.type)) {
      setError(`File type ${file.type} is not allowed`);
      return false;
    }
    setError(null);
    return true;
  };

  const handleFileChange = (newFile: File | null) => {
    if (!newFile) return;
    if (!beforeUpload(newFile)) return;

    setFile(newFile);
    uploadFile(newFile);
  };

  const uploadFile = async (f: File) => {
    setUploading(true);
    setProgress(0);

    try {
      await onUpload(f);
      setProgress(100);
    } catch (err) {
      console.error("Upload failed:", err);
      setError("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return {
    file,
    setFile: handleFileChange,
    uploading,
    progress,
    error,
  };
}
