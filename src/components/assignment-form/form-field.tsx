import { Label } from '@radix-ui/react-label';
import cx from 'classnames';

interface FormFieldProps {
  children: React.ReactNode;
  label: string;
  htmlFor?: string;
  className?: string;
  error?: string;
}

export const FormField = ({
  children,
  label,
  htmlFor,
  className,
  error,
}: FormFieldProps) => (
  <div
    className={cx(
      'flex w-full flex-col items-start justify-between sm:flex-row',
      className
    )}
  >
    <Label htmlFor={htmlFor} className='mb-1 sm:mb-0'>
      {label}
    </Label>
    <div className='w-full sm:w-[300px]'>
      {children}
      {error ? <span className='mt-1 text-[#ef5350]'>{error}</span> : null}
    </div>
  </div>
);
