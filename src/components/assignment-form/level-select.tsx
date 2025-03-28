import { SelectProps } from "@radix-ui/react-select";
import { FC } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectValue,
  SelectItem,
} from "../ui";
import { CandidateLevel } from "@/data";

interface LevelSelectProps extends React.ComponentProps<FC<SelectProps>> {
  levels: CandidateLevel[];
  error?: boolean;
}

export const LevelSelect = ({ levels, error, ...props }: LevelSelectProps) => (
  <Select {...props}>
    <SelectTrigger className="w-full" aria-invalid={error}>
      <SelectValue placeholder="Select a level" />
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
