import { useState } from "react"


const Counter = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        let valorInicial = contador;
        setContador(++valorInicial);
    }

    const decrementar = () => {
        let valorInicial = contador;
        if (valorInicial == 0){
            let conter : HTMLElement | null = document.getElementById('conter');
            conter!.innerHTML += `<p>Contador não pode ficar abaixo de 0 </p>` 
        }
        setContador(--valorInicial);
    }


    return (
        <div>
            <p id="conter">Contador: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )
}
export default Counter