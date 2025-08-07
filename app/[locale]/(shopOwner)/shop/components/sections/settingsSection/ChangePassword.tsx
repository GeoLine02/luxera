import Button from "@/app/ui/Button";
import Input from "@/app/ui/Input";

const ChangePassword = () => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-medium text-dark-gray">პაროლის შეცვლა</h2>
      <div className="mt-4 space-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="currentPassword">მიმდინარე პაროლი</label>
          <Input
            className="md:w-fit"
            name="currentPassword"
            bgColor="white"
            border="border border-light-gray rounded-xl"
            type="password"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="newPassword">ახალი პაროლი</label>
          <Input
            className="md:w-fit"
            name="newPassword"
            bgColor="white"
            border="border border-light-gray rounded-xl"
            type="password"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="repeatPassword">გაიმეორეთ ახალი პაროლი</label>
          <Input
            className="md:w-fit"
            name="currentPassword"
            bgColor="white"
            border="border border-light-gray rounded-xl"
            type="password"
          />
        </div>

        <Button
          rounded="lg"
          title="პაროლის განახლება"
          type="button"
          bgColor="darkGray"
          className="py-2 px-4 md:!w-fit"
          titleColor="white"
        />
      </div>
    </div>
  );
};

export default ChangePassword;
