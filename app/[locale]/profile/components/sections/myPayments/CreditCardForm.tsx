import Input from "@/app/ui/Input";

const CreditCardForm = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-medium">Add new credit card</h1>
      <div className="space-y-4">
        <Input
          bgColor="white"
          name="cardNumber"
          label="CARD NUMBER"
          labelColor="darkGray"
          type="text"
          className="w-full"
          border="border-2 border-light-gray rounded-lg"
        />
        <div className="w-full flex items-center gap-5 justify-between">
          <Input
            bgColor="white"
            name="expirationDate"
            label="EXPIRATION DATE"
            labelColor="darkGray"
            type="text"
            border="border-2 rounded-lg border-light-gray"
            className="w-full"
            placeholder="MM/YY"
          />
          <Input
            bgColor="white"
            name="cvc"
            label="CVC"
            labelColor="darkGray"
            type="text"
            border="border-2 rounded-lg border-light-gray"
            className="w-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <Input
            type="checkbox"
            bgColor="transparent"
            name="saveCard"
            checked={true}
          />
          <span>Save Card</span>
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
