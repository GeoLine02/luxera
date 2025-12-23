import Button from "@/app/ui/Button";

const Notifications = () => {
  return (
    <section className="pb-6 border-b border-light-gray w-full space-y-4">
      <h1 className="text-2xl font-medium text-dark-gray">შეტყობინებები</h1>

      <div className="flex flex-col justify-between md:flex-row gap-4 md:items-center 2xl:gap-11 2xl:justify-start">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">ელ. ფოსტა შეტყობინებებისთვის</label>
          <input type="email" name="email" placeholder="contact@example.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone">ტელეფონი SMS დასტურისთვის</label>
          <input type="number" name="phone" placeholder="555 12 24 45" />
        </div>
      </div>
      <Button
        rounded="lg"
        title="შენახვა"
        type="button"
        bgcolor="darkGray"
        className="py-2 px-4 !w-fit"
        titleColor="white"
      />
    </section>
  );
};

export default Notifications;
