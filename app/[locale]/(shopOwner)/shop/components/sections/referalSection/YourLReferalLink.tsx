import Button from "@/app/ui/Button";

const YourLReferalLink = () => {
  return (
    <div className="w-full bg-light-pink rounded-xl space-y-6 p-4 md:p-8">
      <h1 className=" text-lg sm::text-xl font-medium">შენი უნიკალური ლინკი</h1>
      <div className="rounded-xl w-full flex gap-6 flex-col md:flex-row items-center justify-between md:max-w-[70%]">
        <input className="w-full py-2 rounded-md bg-white" type="text" />
        <Button
          rounded="lg"
          title="კოპირება"
          type="button"
          bgcolor="black"
          className="py-2 px-4 font-medium md:!w-fit"
          titleColor="white"
        />
      </div>
    </div>
  );
};

export default YourLReferalLink;
