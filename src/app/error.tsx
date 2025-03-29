"use client";

import { AppCard } from "@/components/app-card";
import { Button } from "@/components/ui";

export default function HomeErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <AppCard header="Oops ! Something went wrong...">
      <div className="flex flex-col space-y-5 sm:space-y-8 w-full p-6">
        <span className="text-center">{error.message}</span>
        <Button className="self-center w-full sm:w-[300px]" onClick={reset}>
          Try again
        </Button>
      </div>
    </AppCard>
  );
}
