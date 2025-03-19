import { useState } from 'react';
import useToogle from '../hooks/useToogle'
import './toggleComponent.css'

const ToggleComponent = () => {

    const estado = useToogle();

    const trocaEstado = () =>{
        return !estado;
    }


    return (
        <button id='btn-hook' onClick={
            () => trocaEstado()}> Clique para mudar o cor do Botão</button>
    )
}
export default ToggleComponent