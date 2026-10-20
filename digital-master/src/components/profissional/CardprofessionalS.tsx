import { MapPin } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

export function CardprofessionalS() {
  return (
    <Card>
      <CardTitle className="flex justify-between px-6">
        <div className="flex flex-col justify-center space-y-2">
          <h1 className="text-2xl font-bold">Pintura de apartamento</h1>
          <p>Cliente: Hitler</p>
        </div>
        <p>atividade</p>
      </CardTitle>
      {/* dados do profissional */}
      <CardContent>
        <div className="mt-2 flex items-center gap-2">
          <MapPin className="size-5" />
          <p>Rua central, 123</p>
        </div>
        <div>
          <p>Status: serviço iniciado</p>
        </div>
      </CardContent>
      <Separator className="my-4" />
      <CardFooter className="flex justify-start gap-2">
        <button className="cursor-pointer rounded-md bg-blue-500 p-2 text-white transition-colors hover:bg-blue-700">
          Finalizar serviço
        </button>
        <button className="cursor-pointer rounded-md border p-2 font-semibold transition-colors hover:bg-yellow-500">
          Enviar fotos
        </button>
      </CardFooter>
    </Card>
  );
}
