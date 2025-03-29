'use server';

import { AssignmentFormValues } from './types';

interface SubmitAssignmentResponse {
  status: 'success' | 'error';
  message: string;
  errors: string[];
}

interface SubmitAssignmentReturnValue {
  success: boolean;
  errors?: string[];
}

export const submitAssignment = async (
  data: AssignmentFormValues
): Promise<SubmitAssignmentReturnValue> => {
  try {
    const response = await fetch(
      'https://tools.qa.ale.ai/api/tools/candidates/assignments',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );

    const responseData: SubmitAssignmentResponse = await response.json();

    if (responseData.status === 'success') {
      return { success: true };
    } else {
      return { success: false, errors: responseData.errors };
    }
  } catch (e: unknown) {
    return { success: false, errors: [String(e)] };
  }
};
