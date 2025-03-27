
interface menuProps {
    nome:string;
    email:string;
}

const Menu : React.FC<menuProps> = ({nome, email}) => {
    return(
        <div className="menu">
            <p>Bem vindo, {nome}</p>
            <p>{email}</p>
            <button>Logout</button>
        </div>
    )
}
export default Menu