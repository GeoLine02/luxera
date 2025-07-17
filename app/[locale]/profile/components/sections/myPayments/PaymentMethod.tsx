import Button from "@/app/ui/Button";

const PaymentMethod = () => {
  return (
    <section className="py-11">
      <h2 className="text-xl font-semibold">Credit Card</h2>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">Visa.....9999</h3>
          <p className="text-medium-gray">Expiration: 02/2028</p>
        </div>
        <Button
          rounded="full"
          title="Add payment method"
          type="button"
          bgColor="transparent"
          className="py-2 border-2 border-light-gray max-w-[190px] font-medium duration-300 transition-all hover:bg-black hover:text-white hover:border-black"
          titleColor="black"
        />
      </div>
    </section>
  );
};

export default PaymentMethod;
