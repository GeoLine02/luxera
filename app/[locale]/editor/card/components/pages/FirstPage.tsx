import { useUpload } from "@/app/hooks/useUpload";
import { setFirstPageImage } from "@/app/store/features/cardEditorSlice";
import { AppDispatch } from "@/app/store/store";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

interface CoverImageProps {
  setFile: (file: File | null) => void;
  file: File | null;
}

const CoverImage = ({ setFile, file }: CoverImageProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    inputRef.current?.click(); // trigger hidden input
  };

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      {!file && (
        <div
          onClick={handleImageClick}
          className="w-[90%] h-[300px] m-6 bg-white rounded-xl cursor-pointer"
        ></div>
      )}
      {file && (
        <Image
          width={300}
          height={200}
          src={URL.createObjectURL(file)}
          alt=""
          className="m-6"
        />
      )}
    </>
  );
};

const FirstPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { file, setFile } = useUpload({ onUpload });

  async function onUpload() {
    return;
  }

  useEffect(() => {
    const handleUplaodImage = () => {
      if (!file) return;

      const fileUrl = URL.createObjectURL(file);

      dispatch(setFirstPageImage(fileUrl));

      return () => {
        URL.revokeObjectURL(fileUrl);
      };
    };

    handleUplaodImage();
  }, [file, dispatch]);

  return (
    <div>
      <CoverImage file={file} setFile={setFile} />
    </div>
  );
};

export default FirstPage;
