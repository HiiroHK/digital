import { useState } from "react";

export function Register() {
  const [confirmarsenha, setConfirmarsenha] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setErro("");

    if (senha !== confirmarsenha) {
      setErro("As senhas não estão iguais");
      return;
    }
    console.log("sucesso");
  };
  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <p>Coloque seu nome</p>
            <input type="text" placeholder="ex: usuário" required />
          </div>
          <div>
            <p>Adicione seu email</p>
            <input type="email" placeholder="ex: exemplo@gmail.com" required />
          </div>
          <div>
            <p>Coloque seu número de celular</p>
            <input type="number" placeholder="ex: 32123456789" required />
          </div>
          <div>
            <p>Crie uma senha</p>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="ex: 123456"
              id="password1"
              required
            />
          </div>
          <div>
            <p>Confirme sua senha</p>
            <input
              type="password"
              value={confirmarsenha}
              onChange={(e) => setConfirmarsenha(e.target.value)}
              placeholder="ex: 123456"
              id="password2"
              required
            />
          </div>
          {erro && <p className="text-red-500">{erro}</p>}
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
