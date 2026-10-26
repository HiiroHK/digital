export function Footer() {
  return (
    <footer className="w-full items-center bg-blue-600 py-4">
      <div className="mx-auto flex w-full max-w-7xl justify-between px-5">
        <div className="space-y-3 text-white">
          <h2>Pinta já</h2>
          <p>Site especializado em busca de pintores</p>
          <div className="flex gap-2">
            <a href="https://www.facebook.com" target="_blank"></a>
            <a href="https://www.instagram.com" target="_blank"></a>
          </div>
        </div>
        <div className="grid space-y-3 text-white">
          <h2 className="text-3xl">Links rapidos</h2>
          <a href="/home">home</a>
          <a href="/professional">Painel do pintor</a>
          <a href="/cliente">Quero Pintar</a>
          <a href="/cadastro">Cadastro</a>
        </div>
        <div className="space-y-3 text-white">
          <h2 className="text-3xl">Oque o site oferece</h2>
          <p>
            Busca por pintores de alta qualidade e baixo
            <br /> custo atraves de avaliações de outros clientes.
          </p>
        </div>
        <div className="space-y-3 text-white">
          <h2 className="text-3xl">Contato</h2>
          <div className="flex items-center gap-2">
            <p>email</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
