import ProfileSectionSelector from "./ProfileSectionSelector";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 container bg-light-pink">
      <ProfileSectionSelector />
      {children}
    </div>
  );
};

export default ProfileLayout;
