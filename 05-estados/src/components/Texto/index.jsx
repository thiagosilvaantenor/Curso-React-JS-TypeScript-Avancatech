import { useState } from "react"

const Texto = ({ cor }) => {
    const [texto, setTexto] = useState("Texto Inicial")
    const [entradaTexto, setEntradaTexto] = useState("")

    function clicou() {
        setTexto(entradaTexto);
    }

    return (
        <div>
            <h1 style={{ color: cor }}> {texto} </h1>

            <input
                value={entradaTexto}
                onChange={(e) => {
                    setEntradaTexto(e.target.value)
                }}
            />

            <button onClick={clicou} >Mudar</button>

        </div>
    )
}
export default Texto