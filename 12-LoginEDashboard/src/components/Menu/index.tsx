import './Menu.css'
interface menuProps {
    nome: string;
    email: string;
}

const Menu: React.FC<menuProps> = ({ nome, email }) => {
    return (
        <div className="menu">
            <div className="menu-user-info">
                <p>Bem vindo, <strong>{nome}, {email}</strong></p>
               
            </div>
            <div className="menu-logout">
                <button>Logout</button>
            </div>

        </div>
    )
}
export default Menu