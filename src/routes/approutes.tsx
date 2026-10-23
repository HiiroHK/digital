import { Register } from "@/pages/register";
import { Client } from "@/pages/client";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/login";
import { Painter } from "@/pages/painter";
import { Professional } from "@/pages/professional";
import { ProfessionalSearch } from "@/pages/professionalSearch";
import { BrowserRouter, Route, Routes } from "react-router";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/cliente" element={<Client />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/procura-do-profissional" element={<ProfessionalSearch />} />
        <Route path="/perfil-do-pintor" element={<Painter />} />
      </Routes>
    </BrowserRouter>
  );
}
