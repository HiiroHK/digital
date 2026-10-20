export function Footer() {
  return (
    <footer className="w-full items-center bg-blue-600 py-4">
      <div className="mx-auto flex w-full max-w-7xl justify-between px-5">
        <div className="space-y-3 text-white">
          <h2>Pinta já</h2>
          <p>
            Especialistas em balanças comerciais, industriais e automação
            comercial há mais de 15 anos.
          </p>
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/steel.balancas"
              target="_blank"
            ></a>
            <a
              href="https://www.instagram.com/steelservicostecnicosjf?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            ></a>
          </div>
        </div>
        <div className="grid space-y-3 text-white">
          <h2 className="text-3xl">Links rapidos</h2>
          <a href="/">home</a>
          <a href="#serviços">Painel do cliente</a>
          <a href="/products">Login</a>
          <a href="#contato">Cadastro</a>
        </div>
        <div className="space-y-3 text-white">
          <h2 className="text-3xl">Servicos</h2>
          <p>vendas</p>
          <p>assistencia</p>
          <p>automação</p>
          <p>calibração</p>
          <p>suporte</p>
        </div>
        <div className="space-y-3 text-white">
          <h2 className="text-3xl">Contato</h2>
          <div className="flex items-center gap-2">
            <p>telefone</p>
          </div>
          <div className="flex items-center gap-2">
            <p>email</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
