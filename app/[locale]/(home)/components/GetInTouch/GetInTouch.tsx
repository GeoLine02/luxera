import ContactInfo from "./ContactInfo";

const GetInTouch = () => {
  return (
    <div className="space-y-10 lg:space-y-20 flex flex-col justify-center items-center">
      <div className="space-y-5 flex flex-col items-center justify-center">
        <h2 className="text-2xl">Get In Touch</h2>
        <h1 className="text-3xl">Join Our Newsletter</h1>
      </div>

      <ContactInfo />
    </div>
  );
};

export default GetInTouch;
