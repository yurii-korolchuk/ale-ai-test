import { Card, CardContent, CardHeader, CardTitle, Separator } from '../ui';

interface AppCardProps {
  header: string;
  children: React.ReactNode;
}

export const AppCard = ({ header, children }: AppCardProps) => (
  <Card className='w-full gap-0 border-none py-0 md:h-auto md:w-[720px]'>
    <CardHeader className='flex items-center justify-center p-4'>
      <CardTitle className='text-center text-xl'>{header}</CardTitle>
    </CardHeader>

    <Separator />

    <CardContent className='p-0'>{children}</CardContent>
  </Card>
);
