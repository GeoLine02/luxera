"use client";

import React from "react";
import classNames from "classnames";

interface Referral {
  name: string;
  date: string;
  status: "sold" | "registered" | "canceled";
  amount: number;
}

const referrals: Referral[] = [
  {
    name: "მომხმარებელი",
    date: "25 ივლისი, 2024",
    status: "sold",
    amount: 12.5,
  },
  {
    name: "ანა ბეგიძე",
    date: "22 ივლისი, 2024",
    status: "registered",
    amount: 8,
  },
  {
    name: "გიორგი მაჭავარიანი",
    date: "19 ივლისი, 2024",
    status: "canceled",
    amount: 0,
  },
];

const statusColors: Record<Referral["status"], string> = {
  sold: "bg-green-100 text-green-600",
  registered: "bg-yellow-100 text-yellow-700",
  canceled: "bg-light-gray text-medium-gray",
};

const ReferralTable = () => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-y-auto bg-white">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr className="text-left text-gray-600 font-medium">
            <th className="py-3 px-4">შენი რეკომენდაციები</th>
            <th className="py-3 px-4">თარიღი</th>
            <th className="py-3 px-4">სტატუსი</th>
            <th className="py-3 px-4">შენი ბონუსი</th>
          </tr>
        </thead>
        <tbody>
          {referrals.map((referral, index) => (
            <tr key={index} className="border-t border-gray-200 text-gray-800">
              <td className="py-3 px-4">{referral.name}</td>
              <td className="py-3 px-4">{referral.date}</td>
              <td className="py-3 px-4">
                <span
                  className={classNames(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    statusColors[referral.status]
                  )}
                >
                  {referral.status}
                </span>
              </td>
              <td
                className={classNames(
                  "py-3 px-4 font-medium",
                  referral.amount > 0 ? "text-green-600" : "text-gray-500"
                )}
              >
                {referral.amount > 0
                  ? `+ ${referral.amount.toFixed(2)} GEL`
                  : "0.00 GEL"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReferralTable;
