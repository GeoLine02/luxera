import { useUpload } from "@/app/hooks/useUpload";
import { manageFirstPage } from "@/app/store/features/cardEditorSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

interface CoverImageProps {
  setFile: (file: File | null) => void;
  file: File | null;
}

const CoverImage = ({ setFile, file }: CoverImageProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    inputRef.current?.click();
  };

  const { firstPage } = useSelector(
    (state: RootState) => state.cardEditorSlice
  );

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      {!file && !firstPage.userImage && (
        <div
          onClick={handleImageClick}
          className="w-[90%] sm:w-[80%] h-[180px] sm:h-[250px] md:h-[300px] m-4 sm:m-6 bg-white rounded-xl cursor-pointer flex items-center justify-center"
        >
          <span className="text-gray-400 text-sm sm:text-base">
            Click to upload
          </span>
        </div>
      )}
      {firstPage.userImage && (
        <div className="relative w-[90%] sm:w-[80%] m-4 sm:m-6 rounded-xl overflow-hidden">
          <Image
            width={600}
            height={400}
            src={firstPage.userImage}
            alt="Cover"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
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
    if (!file) return;
    const fileUrl = URL.createObjectURL(file);

    dispatch(manageFirstPage({ userImage: fileUrl }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(manageFirstPage({ userText: e.target.value }));
  };

  const { firstPage } = useSelector(
    (state: RootState) => state.cardEditorSlice
  );

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <CoverImage file={file} setFile={setFile} />

      <input
        name="coverText"
        onChange={onChange}
        value={firstPage.userText}
        className="w-[90%] sm:w-[80%] border border-gray-400 rounded-md px-3 py-2 text-sm sm:text-base outline-none focus:ring-2 focus:ring-pink-300"
        type="text"
        placeholder="Enter cover text..."
      />
    </div>
  );
};

export default FirstPage;
