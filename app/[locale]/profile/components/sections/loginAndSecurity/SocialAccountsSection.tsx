import Button from "@/app/ui/Button";

const SocialAccountsSection = () => {
  return (
    <section className="py-11">
      <h1 className="text-2xl font-semibold">Social Accounts</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between w-full max-w-[40%]">
          <div>
            <h2 className="text-lg font-medium">Facebook</h2>
            <p className="text-sm text-medium-gray">Not connected</p>
          </div>
          <Button
            rounded="full"
            title="Connect"
            type="button"
            bgColor="transparent"
            className="py-2 border-2 border-light-gray max-w-[100px] font-medium duration-300 transition-all hover:bg-black hover:text-white hover:border-black"
            titleColor="black"
          />
        </div>
        {/* middle line */}
        <span className="w-[2px] h-[50px] bg-light-gray"></span>
        <div className="flex items-center justify-between w-full max-w-[40%]">
          <div>
            <h2 className="text-lg font-medium">Apple Account</h2>
            <p className="text-sm text-medium-gray">Not connected</p>
          </div>
          <Button
            rounded="full"
            title="Connect"
            type="button"
            bgColor="transparent"
            className="py-2 border-2 border-light-gray max-w-[100px] font-medium duration-300 transition-all hover:bg-black hover:text-white hover:border-black"
            titleColor="black"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialAccountsSection;
