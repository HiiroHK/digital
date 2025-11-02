import { Home } from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
