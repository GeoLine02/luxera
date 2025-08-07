import Button from "@/app/ui/Button";

const DangerZone = () => {
  return (
    <section className="border-t border-red-500 w-full mt-6 space-y-4">
      <h2 className="text-2xl text-red-500 font-medium mt-4">საშიში ზონა</h2>

      <div className="border border-red-500 bg-red-200 rounded-xl p-4 flex flex-col justify-between items-center md:flex-row gap-4">
        <div>
          <h3 className="text-red-700 font-medium">მაღაზიის გაუქმება</h3>
          <p className="text-red-500">
            ამ მოქემედების შემდეგ თქვენი მაღაზია და ყველა პროდუქტი წაიშლება. ეს
            ქმედება შეუცვლადია.
          </p>
        </div>
        <Button
          rounded="lg"
          title="მაღაზიის დახურვა"
          type="button"
          bgColor="red"
          className="py-2 px-4 font-medium md:!w-fit"
          titleColor="white"
        />
      </div>
    </section>
  );
};

export default DangerZone;
