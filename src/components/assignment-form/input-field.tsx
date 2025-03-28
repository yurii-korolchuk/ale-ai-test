import { Label } from "@radix-ui/react-label";

import cx from "classnames";

interface InputFieldProps {
  children: React.ReactNode;
  label: string;
  htmlFor?: string;
  className?: string;
  error?: string;
}

export const InputField = ({
  children,
  label,
  htmlFor,
  className,
  error,
}: InputFieldProps) => (
  <div
    className={cx(
      "w-full flex flex-col sm:flex-row items-start justify-between ",
      className,
    )}
  >
    <Label htmlFor={htmlFor} className="mb-1 sm:mb-0">
      {label}
    </Label>
    <div className="w-full sm:w-[300px]">
      {children}
      {error ? <span className="mt-1 text-[#ef5350]">{error}</span> : null}
    </div>
  </div>
);
