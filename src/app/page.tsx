import { AppCard } from "@/components/app-card";
import { AssignmentForm } from "@/components/assignment-form";

export default function Home() {
  return (
    <AppCard header="Assignment Submission">
      <AssignmentForm />
    </AppCard>
  );
}
