import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contato from "./pages/Contato";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";

export default function App() {
  return (
    <div>

      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Servicos" element={<Servicos />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}