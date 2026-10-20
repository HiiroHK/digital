import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function CardsSearch() {
  return (
    <Card className="grid grid-cols-2">
      <div>
        <CardHeader>
          <CardTitle>nome do pintor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <p>descrição do pintor</p>
          </div>
          <div>
            <p>avaliação em estrela</p>
          </div>
        </CardContent>
        <CardFooter>
          <button className="cursor-pointer hover:text-blue-500">
            Ver mais
          </button>
        </CardFooter>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </Card>
  );
}
