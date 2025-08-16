"use client";

import React, { useState } from "react";
import classNames from "classnames";
import { ages, popular, recipients, styles } from "./data/categoriesData";

// Category data

const AllCategoriesModal = () => {
  const [selected, setSelected] = useState({
    recipient: "",
    style: "",
    age: "",
    popular: "",
  });

  const handleSelect = (category: keyof typeof selected, value: string) => {
    setSelected((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const listItemClasses = (
    category: keyof typeof selected,
    value: string,
    isNew?: boolean
  ) =>
    classNames(
      "cursor-pointer px-3 py-1 rounded-md transition-colors duration-200",
      {
        "bg-black text-white": selected[category] === value,
        "hover:bg-gray-100": selected[category] !== value,
        "text-red-500 font-semibold": isNew && selected[category] !== value,
      }
    );

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-12 px-8 py-6">
        {/* RECIPIENT */}
        <div className="flex flex-col max-h-64">
          <h3 className="font-bold mb-3">RECIPIENT</h3>
          <ul className="space-y-2 pr-2">
            {recipients.map((item) => (
              <li
                key={item}
                className={listItemClasses("recipient", item)}
                onClick={() => handleSelect("recipient", item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* STYLES */}
        <div className="flex flex-col max-h-64">
          <h3 className="font-bold mb-3">STYLES</h3>
          <ul className="space-y-2 pr-2">
            {styles.map((item) => (
              <li
                key={item}
                className={listItemClasses("style", item)}
                onClick={() => handleSelect("style", item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* AGE */}
        <div className="flex flex-col max-h-64">
          <h3 className="font-bold mb-3">AGE</h3>
          <ul className="space-y-2 pr-2">
            {ages.map((item) => (
              <li
                key={item}
                className={listItemClasses("age", item)}
                onClick={() => handleSelect("age", item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* POPULAR */}
        <div className="flex flex-col max-h-64">
          <h3 className="font-bold mb-3">POPULAR</h3>
          <ul className="space-y-2  pr-2">
            {popular.map(({ label, isNew }) => (
              <li
                key={label}
                className={listItemClasses("popular", label, isNew)}
                onClick={() => handleSelect("popular", label)}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllCategoriesModal;
