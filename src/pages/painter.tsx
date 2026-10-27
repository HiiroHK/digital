import { Header } from "@/components/Header";

export function Painter() {
  return (
    <div>
      <Header />
      <div className="h-16.5" />
      <div className="m-4 rounded-2xl bg-linear-to-r from-blue-500 via-purple-400 to-orange-500 p-4 md:m-7 md:p-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <div>
            <img
              className="size-32 shrink-0 rounded-full object-cover md:size-48"
              src="src/assets/pintor-simpatico.jpg"
              alt="pintor-simpatia"
            />
          </div>
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <div className="inline-flex items-center justify-center rounded-full bg-orange-300 px-3 py-1 text-xs">
              <h2>✅ Profissional verificado</h2>
            </div>
            <div>
              <h1 className="text-5xl text-white">Pintor Simpático</h1>
              <p className="mt-4 text-gray-800">
                Pintor artístico e residencial mais famoso da Alemanha
              </p>
            </div>
            <div className="flex space-x-10">
              <div>
                <h2 className="text-amber-300">★5,0</h2>
                <p className="text-gray-800">6900 avaliações</p>
              </div>
              <div>
                <h2>32 anos</h2>
                <p>de experiência</p>
              </div>
              <div>
                <h2>690</h2>
                <p>obras concluídas</p>
              </div>
            </div>
            <div className="mt-4 flex space-x-50">
              <button className="rounded-2xl bg-orange-600 p-2 text-white">
                Adicionar trabalhos
              </button>
              <button className="rounded-2xl border border-gray-300 p-2 text-white">
                Editar perfil
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-border flex flex-wrap gap-2 border-b">
        <button className="border-primary text-primary -mb-px cursor-pointer border-b-2 px-4 py-3 text-sm transition hover:border-amber-600 hover:text-amber-600">
          Trabalhos de exemplo
        </button>
        <button className="border-primary text-primary -mb-px cursor-pointer border-b-2 px-4 py-3 text-sm transition hover:border-amber-600 hover:text-amber-600">
          Biografia
        </button>
        <button className="border-primary text-primary -mb-px cursor-pointer border-b-2 px-4 py-3 text-sm transition hover:border-amber-600 hover:text-amber-600">
          Conhecimento profissional
        </button>
        <button className="border-primary text-primary -mb-px cursor-pointer border-b-2 px-4 py-3 text-sm transition hover:border-amber-600 hover:text-amber-600">
          Avaliações
        </button>
      </div>
    </div>
  );
}
