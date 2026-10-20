import { PaintBucket } from "lucide-react";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="fixed z-50 w-full columns-2 bg-white/50 px-20 backdrop-blur-lg">
      {/* Coluna 1 - Logotipo */}
      <div className="py-3.5">
        <a href="/" className="flex w-fit gap-x-2">
          <Button variant={"textonly"}>
            <PaintBucket className="size-6 text-blue-600" />
            <h1 className="bg-linear-to-r from-blue-600 to-yellow-600 bg-clip-text text-lg font-bold text-transparent">
              PintaJá
            </h1>
          </Button>
        </a>
      </div>
      {/* Coluna 2 - Botões */}
      <div className="flex justify-end py-3.5">
        <a href="#como-funciona">
          <Button variant={"textonly"}>Como Funciona</Button>
        </a>
        <a href="/search">
          <Button variant={"textonly"}>Buscar Profissionais</Button>
        </a>
        <a href="/professional">
          <Button variant={"textonly"}>Sou Pintor</Button>
        </a>
        {/* Botão de "Entrar" inacabado, falta direcionar à determinada página */}
        <a href="/login">
          <Button variant={"textonly"} className="mr-2">
            Entrar
          </Button>
        </a>
        <a href="/client">
          <Button>Quero pintar agora</Button>
        </a>
      </div>
    </header>
  );
}
