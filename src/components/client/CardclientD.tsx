import { Card, CardContent } from "../ui/card";

export type colorTypes = "green" | "red" | "orange" | "blue";
interface CardClientProps {
  title: string;
  value: string;
  color?: colorTypes;
}

export function CardclientD({ title, value, color }: CardClientProps) {
  return (
    <div>
      {color === "green" && (
        <Card className="w-full p-4 border border-green-500">
          <CardContent className="space-y-4">
            <h1 className="text-xl text-green-500">{title}</h1>

            <h6 className="text-3xl font-bold">{value}</h6>
          </CardContent>
        </Card>
      )}
      {color === "blue" && (
        <Card className="w-full p-4 border border-blue-500">
          <CardContent className="space-y-4">
            <h1 className="text-xl text-blue-500">{title}</h1>

            <h6 className="text-3xl font-bold">{value}</h6>
          </CardContent>
        </Card>
      )}
      {color === "orange" && (
        <Card className="w-full p-4 border border-orange-500">
          <CardContent className="space-y-4">
            <h1 className="text-xl text-orange-500">{title}</h1>

            <h6 className="text-3xl font-bold">{value}</h6>
          </CardContent>
        </Card>
      )}

    </div>
  );
}
