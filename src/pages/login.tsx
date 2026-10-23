export function Login() {
  return (
    <div className="flex h-screen">
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-blue-400 p-4">
        <h1 className="text-white text-4xl font-bold">Login</h1>
        <div>
          <div className="flex flex-col gap-2 p-2">
            <span className="text-xl">Coloque seu nome de usuario ou e-mail</span>
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
          <a href="/home" className="w-full"><button className="bg-blue-700 py-5 rounded-2xl w-full hover:bg-blue-800 transition-colors cursor-pointer text-xl">Entrar</button></a>
        </div>
      </div>
      <div className="w-full">
        <img src="/src/assets/bgImage.jpg" alt="Login" />
      </div>
    </div>
  );
}
