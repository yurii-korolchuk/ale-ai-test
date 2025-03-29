import { AppCard } from "@/components/app-card";
import { Button } from "@/components/ui";
import { AssignmentFormValues, transformAssignmentFormLabels } from "@/data";
import Link from "next/link";

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<AssignmentFormValues>;
}) {
  const queryParams = await searchParams;

  return (
    <AppCard header="Thank you for submitting your assignment !">
      <div className="flex flex-col space-y-8 w-full p-6">
        {Object.entries(queryParams).map(([key, value]) => (
          <div
            key={key}
            className="flex flex-col sm:flex-row items-start justify-between"
          >
            <span className="font-bold mb-2 sm:mb-0">
              {transformAssignmentFormLabels(key as keyof AssignmentFormValues)}
            </span>
            <span className="sm:max-w-[300px]">{value}</span>
          </div>
        ))}
        <Link href="/" className="self-center">
          <Button>Go back</Button>
        </Link>
      </div>
    </AppCard>
  );
}
