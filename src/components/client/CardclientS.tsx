import { MapPin, Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";

export function CardclientS() {
  return (
    <Card className="w-full p-4">
      {/* tipo de serviço */}
      <CardTitle className="flex items-center justify-between">
        <div className="text-3xl font-bold">
          <h1>teste</h1>
        </div>
        <div>
          <p>atividade</p>
        </div>
      </CardTitle>

      {/* dados do profissional */}
      <CardContent>
        <p>Profissional: Hitler</p>
        <div className="mt-2 flex items-center gap-2">
          <MapPin className="size-5" />
          <p>Endereço: Berlim, Alemanha</p>
        </div>
      </CardContent>

      {/* footer do card */}
      <Separator />
      <CardFooter className="flex justify-between">
        <div>
          <p>Data</p>
          <h1 className="text-2xl font-semibold">01/01/2023</h1>
        </div>
        <div>
          <p>Valor</p>
          <h1 className="text-2xl font-semibold text-blue-600">R$ 100,00</h1>
        </div>
        {/* div de botões */}

        <div className="flex gap-4">
          {/* botão de avaliação */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex cursor-pointer items-center gap-2 rounded-md border p-2 font-semibold transition-colors hover:bg-yellow-500">
                <Star className="size-4" />
                <h1>Avaliar</h1>
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="mb-4 space-y-3">
                  <h1>Avaliar serviço</h1>
                  <p>Como foi sua experiencia?</p>
                </DialogTitle>
              </DialogHeader>
              <div className="my-4 flex items-center justify-center gap-2">
                <button
                  type="button"
                  className="cursor-pointer transition-transform hover:scale-110"
                  onClick={() => {
                    <Star className="fill-accent text-accent size-8" />;
                  }}
                >
                  <Star className="size-8" />
                </button>
                <button
                  type="button"
                  className="cursor-pointer transition-transform hover:scale-110"
                  onClick={() => {
                    <Star className="fill-accent text-accent size-8" />;
                  }}
                >
                  <Star className="size-8" />
                </button>
                <button
                  type="button"
                  className="cursor-pointer transition-transform hover:scale-110"
                  onClick={() => {
                    <Star className="fill-accent text-accent size-8" />;
                  }}
                >
                  <Star className="size-8" />
                </button>
                <button
                  type="button"
                  className="cursor-pointer transition-transform hover:scale-110"
                  onClick={() => {
                    <Star className="fill-accent text-accent size-8" />;
                  }}
                >
                  <Star className="size-8" />
                </button>
                <button
                  type="button"
                  className="cursor-pointer transition-transform hover:scale-110"
                  onClick={() => {
                    <Star className="fill-accent text-accent size-8" />;
                  }}
                >
                  <Star className="size-8" />
                </button>
              </div>
              <div>
                <Textarea placeholder="Deixe sua avaliação" />
              </div>
              <div>
                <button className="w-full cursor-pointer rounded-md border bg-blue-500 p-2 font-semibold text-white transition-colors hover:bg-blue-600">
                  Enviar
                </button>
              </div>
            </DialogContent>
          </Dialog>

          {/* botão de detalhes */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="cursor-pointer rounded-md border p-2 font-semibold transition-colors hover:bg-yellow-500">
                <h1>Ver detalhes</h1>
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <h1>Detalhes do serviço</h1>
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </CardFooter>
    </Card>
  );
}
