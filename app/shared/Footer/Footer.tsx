"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  CiDeliveryTruck,
  CiClock1,
  CiGift,
  CiDiscount1,
  CiGlobe,
  CiFacebook,
  CiInstagram,
} from "react-icons/ci";
import { PiHandHeartLight } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  const router = useRouter();
  const pathName = usePathname();

  // Hide footer on certain routes
  if (
    pathName.includes("/signin") ||
    pathName.includes("/signup") ||
    pathName.includes("/luxera-ai") ||
    pathName.includes("/cart") ||
    pathName.includes("/shop")
  ) {
    return null;
  }

  return (
    <footer className="mt-11 mb-[80px] xs:mb-0">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 px-11 pt-[52px] pb-[33px] bg-light-pink mt-4">
        {/* Earn & Company */}
        <div className="flex gap-20 font-semibold">
          <div className="space-y-4">
            <h1 className="text-lg">Earn</h1>
            <ul className="space-y-2 font-normal">
              <li className="cursor-pointer">Become Affiliate</li>
              <li className="cursor-pointer">Open Shop</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h1 className="text-lg">Company</h1>
            <ul className="space-y-2 font-normal">
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Promotions</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Social Icons */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-3">
            {/* Replace with your own icons */}
            <div className="bg-white w-9 aspect-square rounded-md flex items-center justify-center">
              <FiPhone size={20} />
            </div>
            <div className="bg-white p-2 w-9 rounded-md flex items-center justify-center">
              <CiFacebook size={20} />
            </div>
            <div className="bg-white p-2 w-9 rounded-md flex items-center justify-center">
              <CiInstagram size={20} />
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white rounded-md pr-3">
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-full px-4 py-2 border border-gray-300 outline-none"
            />
            <div className="border border-black rounded-full ">
              <IoIosArrowRoundForward size={20} />
            </div>
          </div>
          <p className="text-sm">Be the first to know - subscribe now!</p>
        </div>

        {/* Why Luxera Gift */}
        <div className="space-y-4 max-w-sm">
          <h1 className="text-lg font-semibold">
            Why <span className="font-bold">Luxera Gift?</span>
          </h1>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2 items-start">
              <CiDeliveryTruck size={25} />
              Free delivery everywhere, for a purchase of 50 GEL
            </li>
            <li className="flex gap-2 items-start">
              <CiClock1 size={25} />
              Choose the time you want
            </li>
            <li className="flex gap-2 items-start">
              <CiGift size={25} />
              Free gift wrapping
            </li>
            <li className="flex gap-2 items-start">
              <CiDiscount1 size={25} />
              Discounted prices
            </li>
            <li className="flex gap-2 items-start">
              <PiHandHeartLight size={25} />
              To support artisans and small businesses. Let’s help them reach a
              wider audience!
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black text-white py-4 flex flex-col lg:flex-row gap-6 items-center justify-between px-11 text-sm">
        <div className="flex gap-2 items-center">
          <CiGlobe />
          <p>Georgia | English (US)</p>
        </div>
        <div className="text-center">
          Copyright &copy; 2025 LUXERA GIFT, All Rights Reserved.
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <span
            className="cursor-pointer"
            onClick={() => router.push("/terms")}
          >
            Terms of Use
          </span>
          <span
            className="cursor-pointer"
            onClick={() => router.push("/privacy")}
          >
            Privacy
          </span>
          <span className="cursor-pointer" onClick={() => router.push("/")}>
            Interest-based ads
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
