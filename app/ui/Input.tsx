import classNames from "classnames";
import React, { ChangeEvent } from "react";

interface InputProps {
  label?: string;
  labelColor?: "darkGray";
  name: string;
  type?: "text" | "email" | "password" | "radio" | "checkbox" | "button";
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  error?: string;
  bgColor?: "lightGray" | "transparent" | "white";
  className?: string;
  checked?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  border?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  defaultValue = "",
  required = false,
  error,
  bgColor = "transparent",
  className = "",
  checked,
  labelColor,
  value,
  onChange,
  border,
}) => {
  const inputBackgroundStyles = classNames({
    "bg-light-gray": bgColor === "lightGray",
    "bg-transparent": bgColor === "transparent",
    "bg-white": bgColor === "white",
  });

  const LabelStyles = classNames("label", {
    "text-medium-gray": labelColor === "darkGray",
  });

  return (
    <div className={className}>
      {type === "checkbox" ? (
        <div className="flex items-center space-x-2">
          <input
            onChange={onChange}
            type="checkbox"
            value={value}
            id={name}
            name={name}
            required={required}
            defaultChecked={checked}
            className={classNames(
              "h-4 w-4 text-green-600 rounded focus:outline-none",
              border
            )}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
          />
          <label htmlFor={name} className={`${LabelStyles} text-sm`}>
            {label}
          </label>
        </div>
      ) : (
        <>
          {label && (
            <label
              htmlFor={name}
              className="block mb-1 font-medium text-gray-700"
            >
              {label}
            </label>
          )}
          <div className={`${border} w-full`}>
            <input
              type={type}
              id={name}
              name={name}
              placeholder={placeholder}
              defaultValue={defaultValue}
              required={required}
              className={classNames(
                "w-full px-3 py-2 rounded-md focus:outline-none",
                inputBackgroundStyles,
                border
              )}
              aria-invalid={!!error}
              aria-describedby={error ? `${name}-error` : undefined}
            />
          </div>
        </>
      )}
      {error && (
        <p id={`${name}-error`} className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
