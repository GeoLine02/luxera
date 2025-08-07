"use client";

import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import MainSection from "./mainSection/MainSection";
import NewProductSection from "./newProductSection/NewProductSection";
import MyProductsSection from "./myProductsSection/MyProductsSection";
import FinancesSection from "./financesSection/FinancesSection";
import AdvertismentSection from "./advertisment/AdvertismentSection";
import SettingsSection from "./settingsSection/SettingsSection";

const Sections = () => {
  const { activeSection } = useSelector((state: RootState) => state.shopSLice);
  console.log(activeSection);
  return (
    <div className=" bg-ice-blue w-full min-h-[calc(100vh-80px)] md:min-h-screen h-full p-4">
      {activeSection === "main" && <MainSection />}
      {activeSection === "addProduct" && <NewProductSection />}
      {activeSection === "myProducts" && <MyProductsSection />}
      {activeSection === "finances" && <FinancesSection />}
      {activeSection === "advertisment" && <AdvertismentSection />}
      {activeSection === "settings" && <SettingsSection />}
    </div>
  );
};

export default Sections;
