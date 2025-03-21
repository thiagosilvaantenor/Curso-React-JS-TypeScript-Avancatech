import Button from "./components/Button";
import './App.css'
import Counter from "./components/Counter";
import UserList from "./components/UserList/UserList";
import ToggleComponent from "./components/ToggleComponent";
export default function App() {
  return (
    <div className="container">
      <h1>Exercícios de React com TypeScript</h1>

      <h2>Exercício 1: Componente botão com props</h2>
      <Button
        label="Agora vai"
        onClick={() => alert('Botão foi clicado!')}
      />

      <h2>Exercício 2: Contador 🕰️</h2>
      <Counter />
      
      <h2>Lista de Usuários 👨‍💻👩‍💻</h2>
      <UserList
      usuarios={[
        {
        id: 1,
        nome: 'Geralt',
        email: 'geralt@email.com'
        },
        {
          id: 2,
          nome: 'Yenneffer',
          email: 'yenna@email.com'
        },
        {
          id: 3,
          nome: 'Cirilla',
          email: 'ciri@email.com'
        }
    ]}
      />
      <h2>Hook Personalizado 🪝</h2>
        <ToggleComponent />  
    </div>
  )
}