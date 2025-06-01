import Image from "next/image";
import AboutLuxera from "./AboutLuxera";
import SiteRoutes from "./SiteRoutes";
import EnvelopeHeartImage from "@/public/EnvelopeHartImage.png";
import ContactUs from "./ContactUs";
import FooterEnd from "./FooterEnd";

const Footer = () => {
  return (
    <footer className="mt-11">
      <AboutLuxera />
      <div className="flex justify-between items-center px-11 pt-[52px] pb-[33px] bg-[#EFDDD6] mt-4">
        <SiteRoutes />
        <Image src={EnvelopeHeartImage} alt="" />
        <ContactUs />
      </div>
      <FooterEnd />
    </footer>
  );
};

export default Footer;
