"use client ";

import Vimeo from "@u-wave/react-vimeo";

const PromoVideo = () => {
  return (
    <div className="max-w-[820px]">
      <Vimeo video={"https://vimeo.com/123456789"} autoplay />
    </div>
  );
};

export default PromoVideo;
