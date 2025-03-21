import { useState } from "react"

//Cria o hook para retornar um estado booleano 
export default function useToogle(inicial:boolean = false):[boolean, () => void] {
    const [estado, setEstado] = useState<boolean>(inicial);

    //Alterna o estado do hook
    const toggle = () => setEstado(prevEstado => !prevEstado);
    
    return [ estado, toggle];
}
