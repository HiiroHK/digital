import { Card, CardContent } from "../ui/card";

interface CardClientProps {
  title: string;
  value: string;
}

export function CardclientD({ title, value }: CardClientProps) {
  return (
    <Card className="w-full p-4">
      <CardContent className="space-y-4">
        <h1 className="text-xl">{title}</h1>

        <h6 className="text-3xl font-bold">{value}</h6>
      </CardContent>
    </Card>
  );
}
