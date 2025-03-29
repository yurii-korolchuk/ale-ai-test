import { AssignmentFormValues } from './types';

export const transformAssignmentFormLabels = (
  key: keyof AssignmentFormValues
): string => {
  const transformedValues: { [key in keyof AssignmentFormValues]: string } = {
    name: 'Name',
    email: 'Email',
    assignment_description: 'Assignment Description',
    github_repo_url: 'Github Repository URL',
    candidate_level: 'Candidate Level',
  };

  return transformedValues[key];
};
