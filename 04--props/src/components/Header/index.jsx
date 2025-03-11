//Chamando o CSS
import './header.css'
//Componente criado com sucesso:
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <li>
                        <a href="inicio.html">Início</a>
                        <a href="sobre.html">Sobre</a>
                        <a href="servicos.html">Serviços</a>
                        <a href="contato.html">Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Header;