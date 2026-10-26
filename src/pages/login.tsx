export function Login() {
  return (
    <div className="flex h-screen">
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-blue-400 p-4">
        <h1 className="text-4xl font-bold text-white">Login</h1>
        <div>
          <div className="flex flex-col gap-2 p-2">
            <span className="text-xl">
              Coloque seu nome de usuario ou e-mail
            </span>
            <input
              type="text"
              placeholder="Usuario/e-mail"
              className="rounded-2xl border p-4"
            />
          </div>
          <div className="flex flex-col gap-2 p-2">
            <span className="text-xl">Coloque sua senha</span>
            <input
              type="password"
              placeholder="Senha"
              className="rounded-2xl border p-4"
            />
          </div>
          <div className="flex space-x-1.5">
            <p>Não tem conta?</p>{" "}
            <a
              href="/cadastro"
              className="cursor-pointer transition-colors hover:text-red-500"
            >
              Cadastre-se agora
            </a>
          </div>
          <a href="/home" className="w-full">
            <button className="w-full cursor-pointer rounded-2xl bg-blue-700 py-5 text-xl transition-colors hover:bg-blue-800">
              Entrar
            </button>
          </a>
        </div>
      </div>
      <div className="w-full">
        <img src="/src/assets/bgImage.jpg" alt="Login" />
      </div>
    </div>
  );
}
