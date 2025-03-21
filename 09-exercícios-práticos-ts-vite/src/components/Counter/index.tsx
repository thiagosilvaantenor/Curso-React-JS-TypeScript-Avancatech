import { useState } from "react"
import './counter.css'

const Counter = () => {
    const [contador, setContador] = useState(0);
    //TODO: usar useState pra lidar com erro em vez de usar innerHTML
    const incrementar = () => {
        let valorInicial = contador;
        setContador(++valorInicial);
    }

    const decrementar = () => {
        let valorInicial = contador;
        if (valorInicial == 0){
            let conter : HTMLElement | null = document.getElementById('conter');
            conter!.innerHTML += `<p>Contador não pode ficar abaixo de 0 </p>`;
        } else {
            setContador(--valorInicial);
        }

    }


    return (
        <div className="counter">
            <p id="conter">Contador: {contador}</p>
            <div className="btns">
                <button
                className="btn-in" 
                onClick={incrementar}>Incrementar +1</button>
                <button 
                className="btn-d"
                onClick={decrementar}>Decrementar -1</button>
            </div>
        </div>
    )
}
export default Counter