import { AppCard } from '@/components/app-card';
import { Button, Separator } from '@/components/ui';
import { AssignmentFormValues, transformAssignmentFormLabels } from '@/data';
import Link from 'next/link';

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<AssignmentFormValues>;
}) {
  const queryParams = await searchParams;

  return (
    <AppCard header='Thank you for submitting your assignment !'>
      <div className='flex w-full flex-col space-y-8 p-6'>
        {Object.entries(queryParams).map(([key, value]) => (
          <div
            key={key}
            className='flex flex-col items-start justify-between sm:flex-row'
          >
            <span className='mb-2 font-bold sm:mb-0'>
              {transformAssignmentFormLabels(key as keyof AssignmentFormValues)}
            </span>
            <span className='sm:max-w-[300px]'>{value}</span>
          </div>
        ))}
        <Separator />
        <Link href='/' className='w-full self-center sm:w-[300px]'  >
          <Button className='w-full'>Go back</Button>
        </Link>
      </div>
    </AppCard>
  );
}
