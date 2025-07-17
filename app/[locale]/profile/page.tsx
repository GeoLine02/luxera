import ProfileSectionSelector from "./components/ProfileSectionSelector";
import Sections from "./components/sections/Sections";

const Profile = () => {
  return (
    <div>
      <div className="bg-warm-white w-full max-w-[1200px] flex container p-11 gap-14">
        <ProfileSectionSelector />
        <Sections />
      </div>
    </div>
  );
};

export default Profile;
