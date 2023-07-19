import { forwardRef, useMemo } from "react";
import type { ButtonProps } from "components/types";
import ButtonLoading from "./ButtonLoading";
import { twMerge } from "tailwind-merge";
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      type = "button",
      buttonSize = "medium",
      fullWidth = false,
      loading = false,
      buttonLoadingProps,
      ...rest
    },
    ref
  ) => {
    const classNames = useMemo(() => {
      let buttonClassName = `block bg-blue-light hover:bg-opacity-95 transition-colors text-white rounded-md disabled:opacity-50 disabled:hover:bg-blue-light ${
        className ?? ""
      }`;

      if (fullWidth) {
        buttonClassName += " w-full";
      }

      if (buttonSize === "large") {
        buttonClassName += " py-4 px-5 text-lg";
      } else if (buttonSize === "small") {
        buttonClassName += " py-2 px-3 text-sm";
      } else {
        buttonClassName += " py-3 px-4 text-base";
      }

      return { buttonClassName };
    }, [buttonSize, className, fullWidth]);

    return (
      <button
        className={twMerge(
          `${classNames.buttonClassName} ${loading ? " opacity-50" : " "}`,
          className
        )}
        type={type}
        ref={ref}
        {...rest}
      >
        {loading ? <ButtonLoading {...buttonLoadingProps} /> : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
