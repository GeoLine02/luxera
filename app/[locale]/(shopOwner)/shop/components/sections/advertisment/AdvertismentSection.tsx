import AdvertismentBalance from "./AdvertismentBalance";
import Pricing from "./Pricing";

const AdvertismentSection = () => {
  return (
    <div>
      <section>
        <h1 className="text-dark-gray text-2xl md:text-3xl font-medium">
          გაზარდე გაყიდვები
        </h1>
        <p className="text-medium-gray">
          აირჩიეთ სარეკლამო პაკეტი თქვენი პროდუქტების პოპულარიზაციისთვის
        </p>
      </section>

      <AdvertismentBalance />

      <Pricing />
    </div>
  );
};

export default AdvertismentSection;
