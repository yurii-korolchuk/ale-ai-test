import { CandidateLevel } from '@/data';
import { SelectProps } from '@radix-ui/react-select';
import { FC, useEffect, useState } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui';

interface CandidateLevelSelectProps
  extends React.ComponentProps<FC<SelectProps>> {
  levels: CandidateLevel[];
  error?: boolean;
}

export const CandidateLevelSelect = ({
  levels,
  error,
  value,
  onValueChange,
  ...props
}: CandidateLevelSelectProps) => {
  // Internal state to properly reset field. See https://github.com/shadcn-ui/ui/issues/549
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return (
    <Select
      value={internalValue || ''}
      onValueChange={(val) => {
        setInternalValue(val);
        onValueChange?.(val);
      }}
      {...props}
    >
      <SelectTrigger className='w-full' aria-invalid={error}>
        <SelectValue placeholder='Select a level' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {levels.map((level) => (
            <SelectItem value={level} key={level}>
              {level}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
