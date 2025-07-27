import ProfileSectionSelector from "./components/ProfileSectionSelector";
import Sections from "./components/sections/Sections";

const Profile = () => {
  return (
    <div>
      <div className="bg-light-pink w-full max-w-[1200px] flex flex-col container p-4 md:p-11 gap-6 lg:gap-14 md:flex-row">
        <ProfileSectionSelector />
        <Sections />
      </div>
    </div>
  );
};

export default Profile;
