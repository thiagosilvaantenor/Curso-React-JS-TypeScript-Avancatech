import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// Definir o tipo de um usuário
type User = {
  id: string;
  name: string;
  email: string;
  senha: string;
};

// Definir o tipo de contexto
type UserContextType = {
  users: User[];
  setUsers: (users: User[]) => void;
  addUser: (user: User) => void;
};

const UserContext = createContext<UserContextType>({
  users: [],
  setUsers: () => {},
  addUser: () => {},
});

// Criar o Provider para envolver a aplicação
export const UserProvider = ({ children }: { children: ReactNode }) => {
  // Tentar carregar a lista de usuários do localStorage
  const storedUsers = localStorage.getItem('users');
  const initialUsers = storedUsers ? JSON.parse(storedUsers) : [];

  const [users, setUsers] = useState<User[]>(initialUsers);

  // Sempre que a lista de usuários for alterada, salvar no localStorage
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      localStorage.removeItem('users');
    }
  }, [users]);

  // Função para adicionar um novo usuário
  const addUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <UserContext.Provider value={{ users, setUsers, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
