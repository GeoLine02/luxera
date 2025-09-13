"use client";

import LuxeraLogo from "@/public/LuxeraLogo.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IoCartOutline } from "react-icons/io5";

import Button from "../../ui/Button";
import { FaBars } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { openMenu } from "../../store/features/sideMenuSlice";
import SearchContainer from "../search/SearchContainer";
import Navigation from "./Navigation";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FiLogOut, FiUser } from "react-icons/fi";
import { User } from "../../types/user";
import { getUser, logoutService } from "../../[locale]/(auth)/services/login";

const Header = () => {
  const pathName = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenMenu = () => {
    dispatch(openMenu());
  };

  const handleLogout = async () => {
    try {
      // Call logout service to clear token on server
      await logoutService();
      
      // Update state
      setUser(null);
      setShowDropdown(false);
      
      // Redirect to home
      router.push('/');
    } catch {
      console.error('Logout error');
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Listen for login events to refresh user data
  useEffect(() => {
    const handleAuthChange = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch {
        setUser(null);
      }
    };

    // Listen for custom auth events
    window.addEventListener('auth-change', handleAuthChange);
    return () => {
      window.removeEventListener('auth-change', handleAuthChange);
    };
  }, []);
  if (
    pathName.includes("/signup") ||
    pathName.includes("/signin") ||
    pathName.includes("/luxera-ai") ||
    pathName.includes("/shop") ||
    pathName.includes("/editor/card")
  )
    return null;

  return (
    <>
      <header className="flex items-center justify-between px-6 lg:px-11 py-4 lg:py-5">
        <Image
          width={200}
          onClick={() => router.push("/")}
          src={LuxeraLogo}
          alt="Luxera logo"
        />
        <div className="w-full hidden md:flex">
          <SearchContainer />
        </div>

        <div className="flex items-center md:gap-6">
          <Button
            rounded="full"
            title="Luxera AI"
            type="button"
            bgColor="black"
            className="py-2 px-4 font-medium min-w-[120px] w-full hidden md:block"
            titleColor="white"
            onClick={() => router.push("/luxera-ai")}
          />
          <div className="hidden lg:block cursor-pointer">
            <IoCartOutline onClick={() => router.push("/cart")} size={30} />
          </div>

          <div className="md:hidden cursor-pointer">
            <FaBars onClick={handleOpenMenu} size={25} />
          </div>
          {loading ? (
            <div className="hidden md:block w-20 h-10 bg-gray-200 animate-pulse rounded-lg"></div>
          ) : user ? (
            <div className="hidden md:flex items-center gap-3 relative" ref={dropdownRef}>
              <div className="flex flex-col text-right">
                <span className="text-sm font-medium text-gray-800">{user.fullname}</span>
                <span className="text-xs text-gray-500">{user.email}</span>
              </div>
              <div 
                className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {user.fullname?.charAt(0).toUpperCase() || user.email.charAt(0).toUpperCase()}
              </div>
              
              {showDropdown && (
                <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-48 z-50">
                  <button
                    onClick={() => {
                      router.push("/profile");
                      setShowDropdown(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                  >
                    <FiUser size={16} />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors text-red-600"
                  >
                    <FiLogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href={"/signin"}>
              <Button
                bgColor="lightPink"
                rounded="lg"
                title="Sign in"
                type="button"
                className="hidden md:block !w-fit whitespace-nowrap py-2 px-6 font-medium transition-all duration-200 hover:bg-dark-pink"
                titleColor="black"
              />
            </Link>
          )}
        </div>
      </header>

      <Navigation />
    </>
  );
};

export default Header;
