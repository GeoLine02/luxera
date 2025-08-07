import Button from "@/app/ui/Button";
import { IoMdAddCircle } from "react-icons/io";

const AdvertismentBalance = () => {
  return (
    <section className="bg-white rounded-xl p-4 shadow-xl shadow-gray-300 flex flex-col  justify-between mt-9 md:flex-row md:items-center gap-2">
      <div className="space-y-1">
        <h2 className="font-medium">თქვენი სარეკლამო ბალანსი</h2>
        <h1 className="font-bold text-3xl">320.50 GEL</h1>
      </div>

      <Button
        icon={<IoMdAddCircle size={25} className="text-white" />}
        rounded="lg"
        title="ბალანსის შევსება"
        type="button"
        bgColor="darkGray"
        className="py-2 px-4 font-medium flex justify-center gap-2 items-center md:!w-fit"
        titleColor="white"
      />
    </section>
  );
};

export default AdvertismentBalance;
