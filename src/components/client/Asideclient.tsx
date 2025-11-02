import { Separator } from "../ui/separator";

export function Asideclient() {
  return (
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
  );
}
