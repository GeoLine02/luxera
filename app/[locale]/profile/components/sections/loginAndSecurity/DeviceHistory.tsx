import Button from "@/app/ui/Button";

const DeviceHistory = () => {
  return (
    <section className="py-11">
      <h1 className="text-2xl font-semibold">Device History</h1>
      <div className="flex items-center justify-between py-4 border-b-2 border-light-gray">
        <div>
          <h2 className="font-medium">Session</h2>
          <p className="text-medium-gray">May 14, 2024 at 08:36pm</p>
        </div>
        <Button
          rounded="full"
          title="Log out device"
          type="button"
          bgColor="transparent"
          className="py-2 border-2 border-light-gray max-w-[140px] font-medium duration-300 transition-all hover:bg-black hover:text-white hover:border-black"
          titleColor="black"
        />
      </div>
      <div className="flex items-center justify-between py-4 border-b-2 border-light-gray">
        <div>
          <h2 className="font-medium">Session</h2>
          <p className="text-medium-gray">May 14, 2024 at 08:36pm</p>
        </div>
        <Button
          rounded="full"
          title="Log out device"
          type="button"
          bgColor="transparent"
          className="py-2 border-2 border-light-gray max-w-[140px] font-medium duration-300 transition-all hover:bg-black hover:text-white hover:border-black"
          titleColor="black"
        />
      </div>
      <div className="flex items-center justify-between py-4 border-b-2 border-light-gray">
        <div>
          <h2 className="font-medium">Session</h2>
          <p className="text-medium-gray">May 14, 2024 at 08:36pm</p>
        </div>
        <Button
          rounded="full"
          title="Log out device"
          type="button"
          bgColor="transparent"
          className="py-2 border-2 border-light-gray max-w-[140px] font-medium duration-300 transition-all hover:bg-black hover:text-white hover:border-black"
          titleColor="black"
        />
      </div>
    </section>
  );
};

export default DeviceHistory;
