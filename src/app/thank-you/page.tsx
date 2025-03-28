import { AppCard } from "@/components/app-card";
import { AssignmentFormValues, transformFormLabels } from "@/data";

// TODO: REMOVE
const EXAMPLE: AssignmentFormValues = {
  name: "Yurii Korolchuk",
  email: "yura.korolchuk82@gmail.com",
  assignment_description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cum, ipsam cumque illum corrupti doloribus unde, nostrum laudantium ea nulla perspiciatis, nihil officia temporibus eos beatae quo? Facilis, qui eligendi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cum, ipsam cumque illum corrupti doloribus unde, nostrum laudantium ea nulla perspiciatis, nihil officia temporibus eos beatae quo? Facilis, qui eligendi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cum, ipsam cumque illum corrupti doloribus unde, nostrum laudantium ea nulla perspiciatis, nihil officia temporibus eos beatae quo? Facilis, qui eligendi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cum, ipsam cumque illum corrupti doloribus unde, nostrum laudantium ea nulla perspiciatis, nihil officia temporibus eos beatae quo? Facilis, qui eligendi!",
  github_repo_url:
    "https://github.com/yurii-korolchuk/pictures-native-js-project",
  candidate_level: "Middle",
};

export default function ThankYouPage() {
  return (
    <AppCard header="Thank you for submitting your assignment !">
      <div className="flex flex-col space-y-8 w-full p-6">
        {Object.entries(EXAMPLE).map(([key, value]) => (
          <div
            key={key}
            className="flex flex-col sm:flex-row items-start justify-between"
          >
            <span className="font-bold mb-2 sm:mb-0">
              {transformFormLabels(key as keyof AssignmentFormValues)}
            </span>
            <span className="sm:max-w-[300px]">{value}</span>
          </div>
        ))}
      </div>
    </AppCard>
  );
}
