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
  <div className={cx("w-full flex items-center justify-between", className)}>
    <Label htmlFor={htmlFor}>{label}</Label>
    {children}
  </div>
);
