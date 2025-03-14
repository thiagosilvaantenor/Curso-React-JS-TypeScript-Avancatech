import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contato from "./pages/Contato";
import Menu from "./pages/Menu";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>

      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}