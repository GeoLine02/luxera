import classNames from "classnames";
import React from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "name"> {
  label?: string;
  labelColor?: "darkGray";
  error?: string | FieldError;
  bgcolor?: "lightGray" | "transparent" | "white";
  name: string;
  register?: UseFormRegisterReturn;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = "text",
      error,
      className = "",
      labelColor,
      name,
      register,
      ...rest
    },
    ref
  ) => {
    const labelStyles = classNames("label", {
      "text-medium-gray": labelColor === "darkGray",
    });

    const inputBorderStyles = classNames(
      "w-full px-3 py-2 rounded-md border-1 border-light-gray focus:outline-none"
    );

    // Extract error message if error is a FieldError object
    const errorMessage = typeof error === "string" ? error : error?.message;

    // Merge register props with component props
    const inputProps = register ? { ...register, ...rest } : { ...rest, name };

    // Handle ref - use register's ref if available, otherwise use forwarded ref
    const inputRef = register?.ref || ref;

    return (
      <div className={className}>
        {type === "checkbox" ? (
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox"
              ref={inputRef}
              {...inputProps}
            />
            {label && <span className={labelStyles}>{label}</span>}
          </label>
        ) : (
          <>
            {label && (
              <label htmlFor={name} className={labelStyles}>
                {label}
              </label>
            )}
            <div className="border-2 border-light-gray rounded-lg">
              <input
                type={type}
                id={name}
                className={inputBorderStyles + "border-2 border-light-gray"}
                ref={inputRef}
                {...inputProps}
              />
            </div>
          </>
        )}
        {errorMessage && (
          <div className="text-red-500 text-sm mt-1">{errorMessage}</div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
