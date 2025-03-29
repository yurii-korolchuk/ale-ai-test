'use client';

import { Button, Input, Textarea } from '@/components/ui';
import { AssignmentFormValues, CandidateLevel, submitAssignment } from '@/data';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import * as qs from 'qs';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as yup from 'yup';

import { CandidateLevelSelect } from './candidate-level-select';
import { FormField } from './form-field';

const schema = yup
  .object({
    name: yup.string().required('Please provide full name.'),
    email: yup
      .string()
      .email('Please provide a valid email address.')
      .required('Please provide an email address.'),
    assignment_description: yup
      .string()
      .required('Please provide an assignment description.')
      .min(10, 'Description must be at least 10 characters long.'),
    github_repo_url: yup
      .string()
      .url('Please provide a valid URL.')
      .required('Please provide a github repository URL.'),
    candidate_level: yup
      .mixed<CandidateLevel>()
      .required('Please select level.'),
  })
  .required();

interface AssignmentFormProps {
  candidateLevels: CandidateLevel[];
}

export const AssignmentForm = ({ candidateLevels }: AssignmentFormProps) => {
  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AssignmentFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<AssignmentFormValues> = async (data) => {
    const result = await submitAssignment(data);

    if (!result.success) {
      toast.error('Something went wrong while submitting your assignment.', {
        description: result.errors?.join(' '),
      });

      return;
    }

    const params = qs.stringify(data);
    router.push(`/thank-you?${params}`);

    reset();
  };

  return (
    <form
      className='flex w-full flex-col space-y-5 p-6 sm:space-y-8'
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormField label='Name*' htmlFor='name' error={errors.name?.message}>
        <Input
          {...register('name')}
          aria-invalid={Boolean(errors.name)}
          disabled={isSubmitting}
          id='name'
          type='text'
        />
      </FormField>

      <FormField label='Email*' htmlFor='email' error={errors.email?.message}>
        <Input
          {...register('email')}
          aria-invalid={Boolean(errors.email)}
          disabled={isSubmitting}
          id='email'
        />
      </FormField>

      <FormField
        label='Assignment Description*'
        htmlFor='assignment_description'
        error={errors.assignment_description?.message}
      >
        <Textarea
          {...register('assignment_description')}
          aria-invalid={Boolean(errors.assignment_description)}
          disabled={isSubmitting}
          className='max-h-[200px]'
          id='assignment_description'
        />
      </FormField>

      <FormField
        label='Github Repository URL*'
        htmlFor='github_repo_url'
        error={errors.github_repo_url?.message}
      >
        <Input
          {...register('github_repo_url')}
          aria-invalid={Boolean(errors.github_repo_url)}
          disabled={isSubmitting}
          id='github_repo_url'
        />
      </FormField>

      <FormField
        label='Candidate Level*'
        error={errors.candidate_level?.message}
      >
        <Controller
          {...register('candidate_level')}
          control={control}
          render={({ field }) => (
            <CandidateLevelSelect
              {...field}
              levels={candidateLevels}
              error={Boolean(errors.candidate_level)}
              disabled={isSubmitting}
              onValueChange={field.onChange}
            />
          )}
        ></Controller>
      </FormField>

      <Button
        className='w-full self-center sm:w-[300px]'
        disabled={isSubmitting}
      >
        Submit Assignment
      </Button>
    </form>
  );
};
