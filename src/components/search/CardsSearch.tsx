import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function CardsSearch() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>nome do pintor</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p>descrição do pintor</p>
        </div>
        <div>
          <p>avaliação em estrela</p>
        </div>
      </CardContent>
      <CardFooter>
        <button>Ver mais</button>
      </CardFooter>
    </Card>
  );
}
