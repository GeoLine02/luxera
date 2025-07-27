import Button from "@/app/ui/Button";
import Input from "@/app/ui/Input";

const ChangePassword = () => {
  return (
    <section>
      <h1 className="text-xl md:text-3xl text-dark-gray font-bold">
        Change Password
      </h1>

      <div className="mt-4 space-y-4">
        <div>
          <label htmlFor="newPassword">New Password</label>
          <Input
            name="newPassword"
            bgColor="white"
            border="border rounded-lg border-light-gray"
            type="password"
            className="max-w-[300px] mt-2"
          />
        </div>
        <div>
          <label htmlFor="confirmNewPassword">Confirm new password</label>
          <Input
            name="confirmNewPassword"
            bgColor="white"
            border="border rounded-lg border-light-gray"
            type="password"
            className="max-w-[300px] !py-0 mt-2"
          />
        </div>
        <div>
          <Button
            rounded="lg"
            title="Change Password"
            type="button"
            bgColor="darkGray"
            className="!w-fit px-2 md:px-4 py-1 md:py-2"
            titleColor="white"
          />
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
