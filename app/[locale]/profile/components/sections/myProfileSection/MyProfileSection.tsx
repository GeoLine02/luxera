import ChangePassword from "./ChangePassword";
import UserInfo from "./UserInfo";

const MyProfileSection = () => {
  return (
    <div className="p-4 rounded-lg bg-white space-y-4">
      <h1 className="text-xl md:text-3xl font-bold text-dark-gray">Profile</h1>
      <UserInfo />
      <ChangePassword />
    </div>
  );
};

export default MyProfileSection;
