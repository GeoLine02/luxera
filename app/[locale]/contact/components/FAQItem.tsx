"use client";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-medium text-gray-800 hover:text-pink-500 transition-colors px-4 py-7"
      >
        <span className="text-lg md:text-xl">{question}</span>
        <span
          className={`ml-2 text-2xl font-bold text-pink-500 transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out px-4 ${
          isOpen ? "max-h-96 py-3 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 text-sm md:text-base">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
