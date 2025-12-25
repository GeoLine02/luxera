"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const MAX_FILE_SIZE_MB = 5;
const MAX_TOTAL_FILES = 5;

const beforeUpload = (file: File): string | null => {
  const sizeInMB = file.size / (1024 * 1024);
  return sizeInMB > MAX_FILE_SIZE_MB
    ? `File size exceeds ${MAX_FILE_SIZE_MB}MB`
    : null;
};

interface UploadProps {
  value: (File | { id: number; image: string })[];
  onChange: (files: (File | { id: number; image: string })[]) => void;
  multiple?: boolean;
}

const Upload = ({ value, onChange, multiple = false }: UploadProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleClick = () => fileInputRef.current?.click();

  // ✅ Sync previews directly from value
  useEffect(() => {
    const urls = value.map((item) => {
      if (item instanceof File) return URL.createObjectURL(item);
      if (typeof item === "string") return item;
      return item.image; // ← existing DB file object
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPreviews(urls);

    return () => {
      urls.forEach((url, i) => {
        if (value[i] instanceof File) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [value]);

  const handleRemoveImage = (index: number) => {
    const updatedImages = value.filter((_, i) => i !== index);
    onChange(updatedImages); // <-- updates RHF state
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
    if (!selectedFiles.length) return;

    const errorMessages: string[] = [];
    const validFiles: File[] = [];

    for (const file of selectedFiles) {
      const err = beforeUpload(file);
      if (err) errorMessages.push(`${file.name}: ${err}`);
      else validFiles.push(file);
    }

    // Merge old and new files
    const updatedFiles = [...value, ...validFiles].slice(0, MAX_TOTAL_FILES);

    if (updatedFiles.length > MAX_TOTAL_FILES) {
      errorMessages.push(`You can upload up to ${MAX_TOTAL_FILES} images.`);
    }

    setError(errorMessages.length ? errorMessages.join(", ") : null);
    onChange(updatedFiles); // <-- update RHF state
  };

  return (
    <div className="w-full space-y-3">
      {!previews.length && (
        <div
          onClick={handleClick}
          className="h-40 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-700 transition"
        >
          <input
            type="file"
            ref={fileInputRef}
            multiple={multiple}
            onChange={handleFileChange}
            className="hidden"
          />
          <span>
            {value.length
              ? "Click to upload more images"
              : "Click to upload images"}
          </span>
        </div>
      )}

      {previews.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {previews.map((src, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden max-h-[150px]"
            >
              <Image
                src={src}
                alt={`Preview ${index}`}
                width={150}
                height={150}
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="absolute top-1 right-1 bg-black/60 text-white rounded-full flex items-center justify-center text-xs"
              >
                <IoClose size={25} />
              </button>
            </div>
          ))}

          {previews.length < MAX_TOTAL_FILES && (
            <div
              onClick={handleClick}
              className="border-2 border-dashed w-[150px] aspect-square border-gray-400 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-700 transition"
            >
              <input
                type="file"
                ref={fileInputRef}
                multiple={multiple}
                onChange={handleFileChange}
                className="hidden"
              />
              <FaPlus size={35} color="gray" />
            </div>
          )}
        </div>
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Upload;
