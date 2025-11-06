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
            <CardclientD title="Serviços Ativos" value="2" />
            <CardclientD title="Finalizados" value="8" />
            <CardclientD title="Total investido" value="R$ 1000" />
          </div>
        </div>

        {/* contratos do cliente */}
        <div>
          <div>
            <h1 className="text-2xl font-bold">Meus serviços</h1>
          </div>
          <div className="mt-4 space-y-4">
            <CardclientS />
            <CardclientS />
            <CardclientS />
            <CardclientS />
          </div>
        </div>
      </div>
    </div>
  );
}
