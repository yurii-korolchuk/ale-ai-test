export type CandidateLevel = 'Junior' | 'Middle' | 'Senior' | 'Principal';

export interface AssignmentFormValues {
  name: string;
  email: string;
  assignment_description: string;
  github_repo_url: string;
  candidate_level: CandidateLevel;
}
