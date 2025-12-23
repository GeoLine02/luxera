import ChangePassword from "./ChangePassword";
import DangerZone from "./DangerZone";
import LocationSection from "./LocationSection";
import Notifications from "./Notifications";

const SettingsSection = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl text-dark-gray font-medium">
        მაღაზიის პარამეტრები
      </h1>

      <div className="bg-white p-4 rounded-xl mt-4">
        <Notifications />
        <LocationSection />
        <ChangePassword />

        <DangerZone />
      </div>
    </div>
  );
};

export default SettingsSection;
