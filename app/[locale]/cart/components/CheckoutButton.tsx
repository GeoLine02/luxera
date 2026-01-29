import Button from "@/app/ui/Button";

interface CheckoutButtonProps {
  itemsCount: number;
}

const CheckoutButton = ({ itemsCount }: CheckoutButtonProps) => {
  return (
    <div>
      <Button
        rounded="full"
        type="submit"
        bgcolor="lightPink"
        className="py-2 flex items-center justify-center font-medium"
        titleColor="black"
        title={`Checkout (${itemsCount})`}
      />
    </div>
  );
};

export default CheckoutButton;
