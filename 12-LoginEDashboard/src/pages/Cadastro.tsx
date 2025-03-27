import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

import './Cadastro.css'

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { addUser, users } = useUser(); // Obtenha os usuários também

  // Inicializando o navigate
  const navigate = useNavigate(); 

  // Exibindo a lista de usuários no console
  console.log('Lista de usuários cadastrados:', users);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Criando o novo usuário
    const novoUsuario = {
      id: Math.random().toString(36).substr(2, 9), // Gerando um id simples
      name: nome,
      email: email,
      senha: senha,
    };

    // Adicionando o usuário à lista no contexto
    addUser(novoUsuario);

    alert('Usuário cadastrado com sucesso!');
  };

  return (
    <div className='cadastro'>
      <h1>Novo Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div className='form'>
          <label htmlFor="usuario">Nome Usuário:</label>
          <input
            type="text"
            id="usuario"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit">Salvar</button>
          <button type="button" onClick={() => alert('Cadastro cancelado!')}>
            Cancelar
          </button>
        </div>
      </form>
      
      {/* Botão para redirecionar para o login */}
      <button onClick={() => navigate('/users/login')}>Ir para Login</button>
    </div>
  );
};

export default Cadastro;
