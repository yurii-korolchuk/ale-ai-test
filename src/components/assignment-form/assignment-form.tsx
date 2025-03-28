"use client";

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

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { AssignmentFormValues } from "@/data";

export const AssignmentForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<AssignmentFormValues>();

  const onSubmit: SubmitHandler<AssignmentFormValues> = (data) =>
    console.log(data);

  return (
    <form
      className="flex flex-col space-y-5 sm:space-y-8 w-full p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        label="Name*"
        htmlFor="name"
        error={errors.name && "Please provide full name."}
      >
        <Input
          {...register("name", { required: true })}
          aria-invalid={errors.name ? "true" : "false"}
          id="name"
          type="text"
        />
      </InputField>

      <InputField
        label="Email*"
        htmlFor="email"
        error={errors.email && "Please provide a valid email address."}
      >
        <Input
          {...register("email", {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
          aria-invalid={errors.email ? "true" : "false"}
          id="email"
        />
      </InputField>

      <InputField
        label="Assignment Description*"
        htmlFor="assignment_description"
        error={
          errors.assignment_description &&
          "Please provide a valid assignment description with a minimum length of 10 characters."
        }
      >
        <Textarea
          {...register("assignment_description", {
            required: true,
            minLength: 10,
          })}
          aria-invalid={errors.assignment_description ? "true" : "false"}
          className="max-h-[200px]"
          id="assignment_description"
        />
      </InputField>

      <InputField
        label="Github Repository URL*"
        htmlFor="github_repo_url"
        error={errors.github_repo_url && "Please provide a valid URL."}
      >
        <Input
          {...register("github_repo_url", {
            required: true,
            pattern:
              /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
          })}
          aria-invalid={errors.github_repo_url ? "true" : "false"}
          id="github_repo_url"
        />
      </InputField>

      <InputField
        label="Candidate Level*"
        error={errors.candidate_level && "Please select level."}
      >
        <Controller
          {...register("candidate_level", { required: true })}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              onValueChange={(e) => {
                field.onChange(e);
                clearErrors("candidate_level");
              }}
            >
              <SelectTrigger
                className="w-full"
                aria-invalid={errors.candidate_level ? "true" : "false"}
              >
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
          )}
        ></Controller>
      </InputField>

      <Button className="self-center w-full sm:w-[300px]">
        Submit Assignment
      </Button>
    </form>
  );
};
