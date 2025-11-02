import { Cadastro } from "@/pages/cadastro";
import { Client } from "@/pages/client";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/login";
import { Profisional } from "@/pages/profissional";
import { BrowserRouter, Route, Routes } from "react-router";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/client" element={<Client />} />
        <Route path="/professional" element={<Profisional />} />
      </Routes>
    </BrowserRouter>
  );
}
