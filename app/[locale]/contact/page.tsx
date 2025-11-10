import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import FAQ from "./components/FAQ"; // აქ დაამატეთ FAQ

const page = () => {
  return (
    <div className="container px-4 py-8 md:py-12 flex flex-col gap-8">
      {/* Contact section */}
      <div className="flex flex-col md:flex-row gap-6 border rounded-xl py-6 border-light-gray bg-white shadow-xl p-4">
        <ContactInfo />
        <ContactForm />
      </div>

      {/* FAQ section */}
      <div className="mt-8 mb-8">
        <FAQ />
      </div>
    </div>
  );
};

export default page;
