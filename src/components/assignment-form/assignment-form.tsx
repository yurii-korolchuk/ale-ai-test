"use client";

import { Button, Input, Textarea } from "@/components/ui";
import { FormField } from "./form-field";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { AssignmentFormValues, CandidateLevel } from "@/data";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LevelSelect } from "./level-select";

const schema = yup
  .object({
    name: yup.string().required("Please provide full name."),
    email: yup
      .string()
      .email("Please provide a valid email address.")
      .required("Please provide an email address."),
    assignment_description: yup
      .string()
      .required("Please provide an assignment description.")
      .min(10, "Description must be at least 10 characters long."),
    github_repo_url: yup
      .string()
      .url("Please provide a valid URL.")
      .required("Please provide a github repository URL."),
    candidate_level: yup
      .mixed<CandidateLevel>()
      .required("Please select level."),
  })
  .required();

interface AssignmentFormProps {
  candidateLevels: CandidateLevel[];
}

export const AssignmentForm = ({ candidateLevels }: AssignmentFormProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<AssignmentFormValues>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<AssignmentFormValues> = (data) =>
    console.log(data);

  return (
    <form
      className="flex flex-col space-y-5 sm:space-y-8 w-full p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormField label="Name*" htmlFor="name" error={errors.name?.message}>
        <Input
          {...register("name")}
          aria-invalid={Boolean(errors.name)}
          id="name"
          type="text"
        />
      </FormField>

      <FormField label="Email*" htmlFor="email" error={errors.email?.message}>
        <Input
          {...register("email")}
          aria-invalid={Boolean(errors.email)}
          id="email"
        />
      </FormField>

      <FormField
        label="Assignment Description*"
        htmlFor="assignment_description"
        error={errors.assignment_description?.message}
      >
        <Textarea
          {...register("assignment_description")}
          aria-invalid={Boolean(errors.assignment_description)}
          className="max-h-[200px]"
          id="assignment_description"
        />
      </FormField>

      <FormField
        label="Github Repository URL*"
        htmlFor="github_repo_url"
        error={errors.github_repo_url?.message}
      >
        <Input
          {...register("github_repo_url")}
          aria-invalid={Boolean(errors.github_repo_url)}
          id="github_repo_url"
        />
      </FormField>

      <FormField
        label="Candidate Level*"
        error={errors.candidate_level?.message}
      >
        <Controller
          {...register("candidate_level")}
          control={control}
          render={({ field }) => (
            <LevelSelect
              {...field}
              levels={candidateLevels}
              error={Boolean(errors.candidate_level)}
              onValueChange={(e) => {
                field.onChange(e);
                clearErrors("candidate_level");
              }}
            />
          )}
        ></Controller>
      </FormField>

      <Button className="self-center w-full sm:w-[300px]">
        Submit Assignment
      </Button>
    </form>
  );
};
