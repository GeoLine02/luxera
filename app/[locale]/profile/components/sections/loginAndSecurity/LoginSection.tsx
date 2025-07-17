import Button from "@/app/ui/Button";

const LoginSection = () => {
  return (
    <section className="w-full py-12 border-b-2 border-light-gray">
      <h2 className="text-2xl font-semibold">Login</h2>
      <div className="flex items-center justify-between flex-1 mt-4">
        <div>
          <h3 className="font-medium text-xl">Password</h3>
          <span className="text-medium-gray">Last updated 1 month ago</span>
        </div>
        <Button
          rounded="full"
          title="Update Password"
          type="button"
          titleColor="black"
          bgColor="transparent"
          className="border-2 border-light-gray py-2 font-medium max-w-[160px] duration-300  transition-all hover:text-white hover:bg-black hover:border-black"
        />
      </div>
    </section>
  );
};

export default LoginSection;
