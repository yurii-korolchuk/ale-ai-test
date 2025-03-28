import { Card, CardHeader, CardTitle, CardContent, Separator } from "../ui";

interface AppCardProps {
  header: string;
  children: React.ReactNode;
}

export const AppCard = ({ header, children }: AppCardProps) => (
  <Card className="md:h-auto w-full md:w-[720px] py-0 border-none gap-0">
    <CardHeader className="flex items-center justify-center p-4">
      <CardTitle className="text-center text-xl">{header}</CardTitle>
    </CardHeader>

    <Separator />

    <CardContent className="p-0">{children}</CardContent>
  </Card>
);
