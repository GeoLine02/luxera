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
    <div className="w-full">
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      {!file && !firstPage.userImage && (
        <div
          onClick={handleImageClick}
          style={{
            top: firstPage.userImageCordinates.top,
            left: firstPage.userImageCordinates.left,
            bottom: firstPage.userImageCordinates.bottom,
            right: firstPage.userImageCordinates.right,
            rotate: `${firstPage.imagePlaceholderAngle}deg`,
          }}
          className="absolute w-[90%] sm:w-[80%] h-[180px] sm:h-[250px] md:h-[300px] m-4 sm:m-6 bg-white rounded-xl cursor-pointer"
        ></div>
      )}
      {firstPage.userImage && (
        <div
          style={{
            top: firstPage.userImageCordinates.top,
            left: firstPage.userImageCordinates.left,
            bottom: firstPage.userImageCordinates.bottom,
            right: firstPage.userImageCordinates.right,
            rotate: `${firstPage.imagePlaceholderAngle}deg`,
          }}
          className="absolute w-[90%] sm:w-[80%] h-[180px] sm:h-[250px] md:h-[300px] m-4 sm:m-6 rounded-xl overflow-hidden cursor-pointer"
        >
          <Image
            fill
            src={firstPage.userImage}
            alt="Cover"
            className="object-cover"
          />
        </div>
      )}
    </div>
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
  }, [file, dispatch]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(manageFirstPage({ userText: e.target.value }));
  };

  const { firstPage } = useSelector(
    (state: RootState) => state.cardEditorSlice
  );

  return (
    <div className="w-full h-full gap-4 relative">
      <CoverImage file={file} setFile={setFile} />

      <input
        name="coverText"
        onChange={onChange}
        value={firstPage.userText}
        style={{
          top: firstPage.userTextCordinates.top,
          bottom: firstPage.userTextCordinates.bottom,
          left: firstPage.userTextCordinates.left,
          right: firstPage.userTextCordinates.right,
          rotate: `${firstPage.textAngle}deg`,
        }}
        className="absolute w-[90%] sm:w-[80%] rounded-md px-3 py-2 text-sm sm:text-base outline-none focus:ring-2 bg-white focus:ring-pink-300"
        type="text"
        placeholder="Enter cover text..."
      />
    </div>
  );
};

export default FirstPage;
