import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

const page = () => {
  return (
    <div className="container px-4">
      <div className="flex flex-col gap-4 border rounded-xl py-6 border-light-gray bg-white shadow-xl p-4 mt-11 md:flex-row">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
