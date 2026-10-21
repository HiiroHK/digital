import { Asideprofessional } from "@/components/profissional/Asideporfissional";
import { CardprofessionalD } from "@/components/profissional/CardprofessionalD";
import { CardprofessionalS } from "@/components/profissional/CardprofessionalS";
import { CardprofessionalT } from "@/components/profissional/CardprofessionalT";

export function Professional() {
  return (
    <div className="pl-64">
      <Asideprofessional />
      {/* header */}
      <div className="pestrelas-8">
        <div className="mb-8 space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Painel do profissional</h1>
            <p>Acompanhe seus serviços e gerencie seus pedidos</p>
          </div>
          {/* cards info */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <CardprofessionalD />
            <CardprofessionalD />
            <CardprofessionalD />
            <CardprofessionalD />
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
              <CardprofessionalS />
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
              <CardprofessionalT />
              <CardprofessionalT />
              <CardprofessionalT />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
