import CreditCardForm from "./CreditCardForm";
import PaymentMethod from "./PaymentMethod";

const MyPayments = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">My Payments</h1>
      <PaymentMethod />
      <CreditCardForm />
    </div>
  );
};

export default MyPayments;
