import { MapPin } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";


export function Cardnearbyservice() {
  return (
    <Card>
      {/* info principal */}
      <CardTitle className="flex justify-between px-6">
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold">Pintura de salas e quartos</h2>
          <p>Cliente: Carlos</p>
        </div>
        <p>Atividade</p>
      </CardTitle>
      {/* info do cliente */}
      <CardContent>
        <p>Pintura completa de 2 quartos e 1 sala. Aproximadamente 60 m².</p>
        <div className="mt-2 flex items-center gap-2">
          <MapPin className="size-5" />
          <p>Rua das Flores, 456 - 2.6 km</p>
        </div>
      </CardContent>
      <Separator />
      {/* dados do serviço */}
      <CardFooter className="flex justify-between">
        <div className="flex justify-start gap-10">
          <div>
            <p>Data prevista</p>
            <h2>20/10/2023</h2>
          </div>
          <div>
            <p>Valor estimado</p>
            <h1>R$1.200,00</h1>
          </div>
        </div>
        <div>
          <button className="cursor-pointer rounded-md bg-blue-500 p-2 text-white transition-colors hover:bg-blue-700">
            Aceitar serviço
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}
