import classNames from "classnames";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelColor?: "darkGray";
  error?: string;
  bgColor?: "lightGray" | "transparent" | "white";
  border?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  error,
  bgColor = "transparent",
  className = "",
  labelColor,
  border,
  ...rest
}) => {
  const inputBackgroundStyles = classNames({
    "bg-light-gray": bgColor === "lightGray",
    "bg-transparent": bgColor === "transparent",
    "bg-white": bgColor === "white",
  });

  const labelStyles = classNames("label", {
    "text-medium-gray": labelColor === "darkGray",
  });

  const inputBorderStyles = classNames(
    "w-full px-3 py-2 rounded-md focus:outline-none",
    inputBackgroundStyles,
    border,
    {
      "border border-red-500 focus:ring-1 focus:ring-red-500": !!error, // highlight when error exists
      "border border-gray-300 focus:ring-1 focus:ring-black": !error, // default border
    }
  );

  return (
    <div className={className}>
      {type === "checkbox" ? (
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={rest.id ?? rest.name}
            {...rest}
            className={classNames(
              "h-4 w-4 text-green-600 rounded focus:outline-none",
              border,
              {
                "border border-red-500": !!error,
              }
            )}
            aria-invalid={!!error}
            aria-describedby={error ? `${rest.name}-error` : undefined}
          />
          {label && (
            <label
              htmlFor={rest.id ?? rest.name}
              className={`${labelStyles} text-sm`}
            >
              {label}
            </label>
          )}
        </div>
      ) : (
        <>
          {label && (
            <label
              htmlFor={rest.id ?? rest.name}
              className="block mb-1 font-medium text-gray-700"
            >
              {label}
            </label>
          )}
          <div className="w-full">
            <input
              type={type}
              id={rest.id ?? rest.name}
              {...rest}
              className={inputBorderStyles}
              aria-invalid={!!error}
              aria-describedby={error ? `${rest.name}-error` : undefined}
            />
          </div>
        </>
      )}
      {error && (
        <p id={`${rest.name}-error`} className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
