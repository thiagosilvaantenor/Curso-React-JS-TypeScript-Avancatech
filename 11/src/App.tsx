import Button from "./components/Button";
import Div from "./components/Div";
import Filme from "./components/Filme";
import Paragraph from "./components/Paragraph";
import Tabuada from "./components/Tabuada";

export default function App() {
  let txt = '';
  return(
    <div>
      <h1>Exercícios em React-TS: Criar 5 componentes com Props</h1>
      <div className="ex1">
        <h2>Componente 1: Botão com label personalizada: </h2>
        {/* <input type="text" placeholder="digite a label do botão" name="txtbtn"/>
        <input type="submit" onSubmit={ (e) => {
                            e.preventDefault()

          }}/> */}
        <Button 
        label="Botão personalizado topzera 🔝"
        />
      </div>
      <div className="ex2">
        <h2>Componente 2: Div de schrödinger 😺 | 😿</h2>
        <Div
        aparece={true}
        />
      </div>
      <div className="ex3">
        <h2>Componente 3: Texto com cor personalizada</h2>
        <Paragraph
        color="orange"
        />
      </div>
      <div className="ex4">
        <h2>Componente 4: Nome do melhor filme</h2>
          <Filme
            titulo="Django Livre"
          />
      </div>
      <div className="ex5">
        <h2>Componente 5: Tabuada</h2>
          <Tabuada
          num={5}
          />
      </div>
    </div>
  )
}