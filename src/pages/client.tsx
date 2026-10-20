import { Asideclient } from "@/components/client/Asideclient";
import { CardclientD } from "@/components/client/CardclientD";
import { CardclientS } from "@/components/client/CardclientS";

export function Client() {
  return (
    <div className="pl-64">
      <Asideclient />
      <div className="p-8">
        <div className="mb-8 space-y-8">
          {/* header */}
          <div>
            <h1 className="text-2xl font-bold">Painel do cliente</h1>
            <p>Acompanhe seus serviços e gerencie seus pedidos</p>
          </div>

          {/* dados do cliente */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <CardclientD title="Serviços Ativos" value="2" color="orange" />
            <CardclientD title="Finalizados" value="8" color="blue" />
            <CardclientD
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
            <CardclientS
              title="Parede de cimento queimado"
              status="Em execução"
              name="Robson"
              endereco="Rolândia"
              data="16/10/2026"
              valor={200}
            />
            <CardclientS
              title="Pintura externa e fachada"
              status="Finalizado"
              name="Mariana"
              endereco="Londrina"
              data="20/10/2026"
              valor={350}
            />
            <CardclientS
              title="Aplicação de textura projetada"
              status="Em execução"
              name="Carlos"
              endereco="Arapongas"
              data="25/10/2026"
              valor={500}
            />
            <CardclientS
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
