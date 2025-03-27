import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

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
    <div>
      <h1>Lista de Usuários</h1>
      <button onClick={() => navigate('/')}>Criar Novo Usuário</button>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <button onClick={() => handleEditUser(user.id)}>Editar</button>
                <button onClick={() => handleDeleteUser(user.id)}>Excluir</button>
              </div>
            </li>
          ))
        ) : (
          <p>Nenhum usuário cadastrado</p>
        )}
      </ul>
    </div>
  );
};

export default ListaUsuarios;
