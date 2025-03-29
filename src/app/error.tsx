'use client';

import { AppCard } from '@/components/app-card';
import { Button } from '@/components/ui';

export default function HomeErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <AppCard header='Oops ! Something went wrong...'>
      <div className='flex w-full flex-col space-y-5 p-6 sm:space-y-8'>
        <span className='text-center'>{error.message}</span>
        <Button className='w-full self-center sm:w-[300px]' onClick={reset}>
          Try again
        </Button>
      </div>
    </AppCard>
  );
}
