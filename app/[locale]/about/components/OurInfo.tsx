import Image from "next/image";
import OurStoryImage from "@/public/OurStoryImage.png";
import OurMissionImage from "@/public/OurMissionImage.png";
import OurStoryBgImage from "@/public/OurStoryBgImage.png";
import OurMissionBgImage from "@/public/OurMissionBgImage.png";

const OurInfo = () => {
  return (
    <div className="mt-[56px] space-y-14">
      <section className="flex flex-col md:flex-row items-center gap-[32px] 2xl:gap-[64px]">
        <div className="relative">
          <Image className="w-auto md:w-[50vw]" src={OurStoryBgImage} alt="" />
          <Image
            className="max-w-[200px] md:max-w-full absolute top-1/2 left-1/2 -translate-1/2"
            src={OurStoryImage}
            alt=""
          />
        </div>
        <div className="space-y-[42px] px-4">
          <h1 className="text-[32px] font-bold">Our Story</h1>

          <p className="max-w-[559px] 2xl:max-w-[650px]">
            It all started with a simple idea — to make gifting feel more
            personal, beautiful, and joyful. We noticed how often people
            struggle to find the perfect gift, one that truly says, “I thought
            of you.” So, we created a space where every item tells a story,
            sparks emotion, and makes moments memorable. From cozy mugs to
            heartfelt handwritten cards, our collection is thoughtfully curated
            to turn ordinary days into cherished memories. Whether it’s a
            birthday, anniversary, or “just because,” we’re here to help you
            show you care — effortlessly.
          </p>
        </div>
      </section>
      <section className="flex flex-col-reverse md:flex-row justify-end items-center gap-[32px] 2xl:gap-[64px]">
        <div className="space-y-[42px] px-4">
          <h1 className="text-[32px] font-bold">Our Mission</h1>

          <p className="max-w-[559px] 2xl:max-w-[650px]">
            We believe gifts are more than things — they’re gestures of love,
            celebration, and connection. Our mission is to build a gifting
            platform that brings joy not just to the recipient, but to the giver
            as well. With curated selections, beautiful packaging, and heartfelt
            details, we’re making it easier to create meaningful experiences.
            We’re also proud to support local sellers and small businesses,
            helping their crafts reach hearts and homes across the country.
            Let’s make gifting magical again — one thoughtful surprise at a
            time. 🎁
          </p>
        </div>
        <div className="relative">
          <Image
            className="w-auto md:w-[calc(50vw-100px)]"
            src={OurMissionBgImage}
            alt=""
          />

          <Image
            className="max-w-[200px] md:max-w-full absolute top-1/2 left-1/2 -translate-1/2"
            src={OurMissionImage}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default OurInfo;
