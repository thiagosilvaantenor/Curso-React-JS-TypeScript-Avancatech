import './estilo.css'
import Menu from "./Menu";

export default function Servicos() {
    return(
        <div>
            <Menu />
            <h1>Conheça nossos serviços: </h1>
            <ul className='servicos-lista'>
                <li>Design 🎨</li>
                <li>Construção de sites 👩‍💻👨‍💻</li>
                <li>Construção de aplicativos 📱</li>
            </ul>
            
        </div>
    )
}