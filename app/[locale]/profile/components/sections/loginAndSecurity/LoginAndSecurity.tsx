import DeviceHistory from "./DeviceHistory";
import LoginSection from "./LoginSection";
import SocialAccountsSection from "./SocialAccountsSection";

const LoginAndSecurity = () => {
  return (
    <div className="rounded-xl w-full p-6">
      <h1 className="text-4xl font-bold">Login and security</h1>
      <LoginSection />
      <SocialAccountsSection />
      <DeviceHistory />
    </div>
  );
};

export default LoginAndSecurity;
