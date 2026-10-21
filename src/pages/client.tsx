import { Carddados } from "@/components/client/Carddados";
import { Cardinfo } from "@/components/client/Cardinfo";
import { Separator } from "@/components/ui/separator";

export function Client() {
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
            href="/client"
            className="w-full cursor-pointer rounded-md p-2 hover:bg-blue-600 hover:text-white"
          >
            <button>Painel</button>
          </a>

          <a
            href="/client/profile"
            className="w-full cursor-pointer rounded-md p-2 hover:bg-blue-600 hover:text-white"
          >
            <button>Perfil</button>
          </a>

          <a
            href="/"
            className="w-full cursor-pointer rounded-md p-2 hover:bg-red-600 hover:text-white"
          >
            <button>Sair</button>
          </a>
        </div>
      </div>
    </aside>
      <div className="p-8">
        <div className="mb-8 space-y-8">
          {/* header */}
          <div>
            <h1 className="text-2xl font-bold">Painel do cliente</h1>
            <p>Acompanhe seus serviços e gerencie seus pedidos</p>
          </div>

          {/* dados do cliente */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Carddados title="Serviços Ativos" value="2" color="orange" />
            <Carddados title="Finalizados" value="8" color="blue" />
            <Carddados
              title="Total investido"
              value="R$ 1000"
              color="green"
            />
          </div>
        </div>

        {/* contratos do cliente */}
        <div>
          <div>
            <h1 className="text-2xl font-bold">Meus serviços</h1>
          </div>
          <div className="mt-4 space-y-4">
            <Cardinfo
              title="Parede de cimento queimado"
              status="Em execução"
              name="Robson"
              endereco="Rolândia"
              data="16/10/2026"
              valor={200}
            />
            <Cardinfo
              title="Pintura externa e fachada"
              status="Finalizado"
              name="Mariana"
              endereco="Londrina"
              data="20/10/2026"
              valor={350}
            />
            <Cardinfo
              title="Aplicação de textura projetada"
              status="Em execução"
              name="Carlos"
              endereco="Arapongas"
              data="25/10/2026"
              valor={500}
            />
            <Cardinfo
              title="Pintura de portas e rodapés"
              status="Finalizado"
              name="Fernanda"
              endereco="Maringá"
              data="02/11/2026"
              valor={180}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
