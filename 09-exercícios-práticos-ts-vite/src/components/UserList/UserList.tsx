import { useState } from 'react';
import './userlist.css'

interface Usuario{
    id: number;
    nome: string;
    email: string;
}

interface UserListProps{
    usuarios: Array<Usuario>;
}

const UserList:React.FC<UserListProps> = ({usuarios}) => {
    const [userList, setUserList] = useState<Usuario[]>(usuarios);

    const removeUser = (id:number) => {
        const novaLista = userList.filter(usuario => usuario.id !==  id);
        setUserList(novaLista);

    }

    return (
        <div className='user-list'>
            <ul>
                {userList.map((usuario) =>(
                    <li key={usuario.id}>
                        <p>{usuario.nome}</p>
                        <p>{usuario.email}</p>
                        <button 
                        key={usuario.id}
                        onClick={() => removeUser(usuario.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default UserList