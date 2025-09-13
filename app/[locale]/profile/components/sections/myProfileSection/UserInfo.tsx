"use client";

import Button from "@/app/ui/Button";
import { useEffect, useState } from "react";
import { getUser } from "../../../../../[locale]/(auth)/services/login";
import { User } from "../../../../../types/user";

const UserInfo = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <section className="border-b border-light-gray space-y-4 py-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
          <div className="h-6 bg-gray-200 rounded w-40"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
          <div className="h-6 bg-gray-200 rounded w-60"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-light-gray space-y-4 py-4">
      <div>
        <label className="text-xs md:text-sm text-medium-gray">Full Name</label>
        <h2 className="font-medium text-sm md:text-lg text-dark-gray">
          {user?.fullname || 'Not provided'}
        </h2>
      </div>
      <div>
        <label className="text-xs md:text-sm text-medium-gray">
          Email Address
        </label>
        <h2 className="font-medium text-sm md:text-lg text-dark-gray">
          {user?.email || 'Not provided'}
        </h2>
      </div>
      <div>
        <Button
          rounded="lg"
          title="Edit Profile"
          type="button"
          bgColor="darkGray"
          className="!w-fit px-2 md:px-4 py-1 md:py-2"
          titleColor="white"
        />
      </div>
    </section>
  );
};

export default UserInfo;
