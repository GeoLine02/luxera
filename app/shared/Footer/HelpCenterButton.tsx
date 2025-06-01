"use client";

import Button from "@/app/ui/Button";
import { useRouter } from "next/navigation";

const HelpCenterButton = () => {
  const router = useRouter();

  return (
    <div>
      <Button
        rounded="lg"
        title="Go to Help Center"
        type="button"
        bgColor="dirtyPink"
        className=" py-2 px-6 border-2 border-black !w-fit"
        titleColor="black"
        onClick={() => router.push("/help-center")}
      />
    </div>
  );
};

export default HelpCenterButton;
