"use client";

import Button from "@/app/ui/Button";

const UserInfo = () => {
  return (
    <section className="border-b border-light-gray space-y-4 py-4">
      <div>
        <label className="text-xs md:text-sm text-medium-gray">Full Name</label>
        <h2 className="font-medium text-sm md:text-lg text-dark-gray">
          Anna Petrova
        </h2>
      </div>
      <div>
        <label className="text-xs md:text-sm text-medium-gray">
          Email Address
        </label>
        <h2 className="font-medium text-sm md:text-lg text-dark-gray">
          anna.petrova@example.com
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
