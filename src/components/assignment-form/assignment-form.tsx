import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@/components/ui";
import { InputField } from "./input-field";

export const AssignmentForm = () => {
  return (
    <form className="flex flex-col space-y-8 w-full p-6">
      <InputField label="Name*" htmlFor="name">
        <Input className="max-w-[300px]" id="name" type="text" />
      </InputField>

      <InputField label="Email*" htmlFor="email">
        <Input className="max-w-[300px]" id="email" type="email" />
      </InputField>

      <InputField
        label="Assignment Description*"
        htmlFor="assignment_description"
        className="items-start"
      >
        <Textarea className="max-w-[300px]" id="assignment_description" />
      </InputField>

      <InputField label="Github Repository URL*" htmlFor="github_repo_url">
        <Input className="max-w-[300px]" id="github_repo_url" />
      </InputField>

      <InputField label="Candidate Level*">
        <Select>
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="Select a level" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </InputField>

      <Button className="self-center w-[300px]">Submit Assignment</Button>
    </form>
  );
};
