import Button from "@/app/ui/Button";
import { Dropdown } from "@/app/ui/DropDown";

const BankAccount = () => {
  return (
    <div className="bg-white p-4 rounded-xl space-y-6 w-full max-w-full flex-1 shadow-xl shadow-gray-300">
      <h1 className="text-xl md:text-2xl font-medium text-dark-gray">
        Bank Account
      </h1>

      <p className="text-medium-gray">
        მიუთითეთ თქვენი საბანკო ანგარიშის ნომერი (IBAN), რომელზეც გსურთ თანხის
        მიღება.
      </p>

      <div className="flex flex-col gap-2">
        <span className="text-medium-gray text-sm">ბანკის დასახელება</span>
        <Dropdown>
          <Dropdown.Trigger className="text-left">
            საქართველოს ბანკი
          </Dropdown.Trigger>
          <Dropdown.Menu expandMode="absolute" className="!top-10">
            <Dropdown.Item>საქართველოს ბანკი</Dropdown.Item>
            <Dropdown.Item>თიბისი ბანკი</Dropdown.Item>
            <Dropdown.Item>კრედო ბანკი</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-medium-gray text-sm">ანგარიშის ნომერი</span>
        <input
          className="font-medium"
          type="text"
          placeholder="GE00B000000000000"
        />
      </div>
      <div>
        <Button
          rounded="lg"
          title="ინფორმაციის შენახვა"
          type="button"
          bgcolor="darkGray"
          titleColor="white"
          className="py-2 px-4 font-medium md:!w-fit "
        />
      </div>
    </div>
  );
};

export default BankAccount;
