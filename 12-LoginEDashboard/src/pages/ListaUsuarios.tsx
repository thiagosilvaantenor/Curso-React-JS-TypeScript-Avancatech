import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './ListaUsuarios.css'

const ListaUsuarios = () => {
  const { users, setUsers } = useUser();
  const navigate = useNavigate();

  // Função para editar um usuário
  const handleEditUser = (userId: string) => {
    // Aqui você pode redirecionar para uma página de edição (crie uma nova página para edição se necessário)
    console.log('Editar usuário com ID:', userId);
    alert('Função de edição ainda não implementada!');
  };

  // Função para excluir um usuário
  const handleDeleteUser = (userId: string) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers); // Atualizando a lista de usuários no contexto
    alert('Usuário excluído!');
  };

  return (
    <div className='lista-usuarios'>
      <h1>Lista de Usuários</h1>
      <button className='novo-usuario' onClick={() => navigate('/')}>Criar Novo Usuário</button>
      <ul className='lista'>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              <div className='users'>
                <h3>Id: {user.id}</h3>
                <h3>Nome: {user.name}</h3>
                <h3>Email: {user.email}</h3>
                <button className='btn-edit' onClick={() => handleEditUser(user.id)}>Editar</button>
                <button className='btn-del' onClick={() => handleDeleteUser(user.id)}>Excluir</button>
              </div>
            </li>
          ))
        ) : (
          <p>Nenhum usuário cadastrado</p>
        )}
      </ul>
      <button className='btn-dashboard' onClick={() => navigate('/dashboard')}>Voltar ao Dashboard</button>
    </div>
  );
};

export default ListaUsuarios;
