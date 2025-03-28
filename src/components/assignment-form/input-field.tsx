import { Label } from "@radix-ui/react-label";

import cx from "classnames";

interface InputFieldProps {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

export const InputField = ({
  label,
  htmlFor,
  children,
  className,
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
    {children}
  </div>
);
