import { Cardactiveservices } from "@/components/profissional/Cardactiveservices";
import { Carddados } from "@/components/profissional/Carddados";
import { Cardnearbyservice } from "@/components/profissional/Cardnearbyservice";
import { Separator } from "@radix-ui/react-separator";
import { LogOut, User } from "lucide-react";

export function Professional() {
  return (
    <div className="pl-64">
      <aside className="fixed top-0 left-0 h-full w-64 border border-r bg-gray-100 p-4">
      <div>
        <div className="flex text-center">
          <a
            href="/"
            className="cursor-pointer bg-linear-to-r from-blue-600 to-yellow-500 bg-clip-text text-2xl font-bold text-transparent"
          >
            PintaJá
          </a>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col gap-4">
          <a
            href="/professional"
            className="w-full cursor-pointer rounded-md p-2 hover:bg-blue-600 hover:text-white"
          >
            <button>Trabalhos</button>
          </a>

          <a
            href="/perfil-do-pintor"
            className="flex w-full cursor-pointer rounded-md p-2 hover:bg-blue-600 hover:text-white"
          >
            <User />
            <button>Perfil</button>
          </a>

          <a
            href="/"
            className="flex w-full cursor-pointer rounded-md p-2 hover:bg-red-600 hover:text-white"
          >
            <LogOut />
            <button>Sair</button>
          </a>
        </div>
      </div>
    </aside>
      {/* header */}
      <div className="pestrelas-8">
        <div className="mb-8 space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Painel do profissional</h1>
            <p>Acompanhe seus serviços e gerencie seus pedidos</p>
          </div>
          {/* cards info */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Carddados />
            <Carddados />
            <Carddados />
            <Carddados />
          </div>
        </div>
        <div className="space-y-4">
          {" "}
          {/* meus serviços */}
          <div>
            <div>
              <h2 className="mb-5 text-2xl font-bold">Meus Serviços</h2>
            </div>
            <div>
              <Cardactiveservices />
            </div>
          </div>
          {/* serviços disponiveis */}
          <div className=" ">
            <div>
              <h2 className="text-2xl font-bold">
                Serviços disponiveis proximos a você
              </h2>
            </div>
            <div className="mt-4 space-y-4">
              <Cardnearbyservice />
              <Cardnearbyservice />
              <Cardnearbyservice />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}