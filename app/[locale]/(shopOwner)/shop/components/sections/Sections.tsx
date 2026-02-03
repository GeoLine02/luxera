"use client";

import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import MainSection from "./mainSection/MainSection";
import NewProductSection from "./newProductSection/NewProductSection";
import MyProductsSection from "./myProductsSection/MyProductsSection";
import FinancesSection from "./financesSection/FinancesSection";
import AdvertismentSection from "./advertisment/AdvertismentSection";
import SettingsSection from "./settingsSection/SettingsSection";
import ReferalSection from "./referalSection/ReferalSection";
import UpdateProductSection from "./updateSection/UpdateProductSection";
import NotificationsSection from "./notificationsSection/NotificationsSection";

const Sections = () => {
  const { activeSection } = useSelector((state: RootState) => state.shopSLice);
  return (
    <div className=" bg-ice-blue w-full min-h-[calc(100vh-80px)] md:min-h-screen h-full p-4">
      {activeSection === "main" && <MainSection />}
      {activeSection === "addProduct" && <NewProductSection />}
      {activeSection === "myProducts" && <MyProductsSection />}
      {activeSection === "finances" && <FinancesSection />}
      {activeSection === "advertisment" && <AdvertismentSection />}
      {activeSection === "settings" && <SettingsSection />}
      {activeSection === "referal" && <ReferalSection />}
      {activeSection === "updateProduct" && <UpdateProductSection />}
      {activeSection === "notifications" && <NotificationsSection />}
    </div>
  );
};

export default Sections;
