import { AppCard } from "@/components/app-card";
import { AssignmentForm } from "@/components/assignment-form";
import { CandidateLevel } from "@/data";

const apiUrl = "https://tools.qa.ale.ai/api/tools/candidates/levels";

export default async function Home() {
  const data = await fetch(apiUrl);

  if (!data.ok) {
    throw new Error(
      "Something went wrong while loading candidate levels. Please try again later.",
    );
  }

  const candidateLevels: { levels: CandidateLevel[] } = await data.json();

  return (
    <AppCard header="Assignment Submission">
      <AssignmentForm candidateLevels={candidateLevels.levels} />
    </AppCard>
  );
}
