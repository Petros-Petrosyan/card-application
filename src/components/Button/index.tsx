import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import classNames from "classnames";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "promary" | "secundary" | "dangerous";
}

enum VARIANTS {
  promary = "bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded border border-green-700",
  secundary = "bg-transparent hover:bg-green-700 text-green-800 font-bold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded disabled:bg-gray-200 disabled:text-gray-400 disabled:border-none",
  dangerous = "text-red-800 bg-transparent hover:bg-red-100 py-2 px-4 rounded border border-red-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:border-none",
}

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
