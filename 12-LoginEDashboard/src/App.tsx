import { BrowserRouter, Route, Routes } from "react-router"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import ListaUsuarios from "./pages/ListaUsuarios"

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cadastro/>} />
          <Route path="/users/login" element={ <Login />} />
          <Route path="/dashboard" element={ <Dashboard />} />
          <Route path="/listar-usuarios" element={ <ListaUsuarios />} />
        </Routes>
      </BrowserRouter>
      
     
    </div>
  )
}
export default App