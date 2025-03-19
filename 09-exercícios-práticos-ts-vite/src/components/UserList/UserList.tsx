import './userlist.css'

interface Usuario{
    id: number;
    nome: string;
    idade: number;
}

interface UserListProps{
    usuarios: Array<Usuario>;
}

const UserList:React.FC<UserListProps> = ({usuarios}) => {
    return (
        <div className='user-list'>
            <ul>
                {usuarios.map((usuario) =>(
                    <li key={usuario.id}>
                        {usuario.nome} - {usuario.idade}
                        <button key={usuario.id}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default UserList