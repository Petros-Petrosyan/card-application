import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

type ButtonVariant = "primary" | "secondary" | "dangerous";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-green-700 hover:bg-green-800 text-white rounded border border-green-700 py-1 px-2 md:py-2 md:px-4",
  secondary:
    "bg-transparent hover:bg-green-700 text-green-800 hover:text-white border border-green-700 hover:border-transparent rounded disabled:bg-gray-200 disabled:text-gray-400 disabled:border-none py-1 px-2 md:py-2 md:px-4",
  dangerous:
    "text-red-800 bg-transparent hover:bg-red-100 rounded border border-red-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:border-none py-1 px-2 md:py-2 md:px-4",
};

const Button = ({
  children,
  variant,
  className,
  ...resrProps
}: ButtonProps) => {
  return (
    <button className={classNames(VARIANTS[variant], className)} {...resrProps}>
      {children}
    </button>
  );
};

export default Button;
