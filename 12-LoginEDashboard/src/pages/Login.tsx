import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const { users } = useUser(); // Acessando a lista de usuários no contexto
  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    // Verificar se o usuário existe na lista e as credenciais estão corretas
    const usuario = users.find(
      (user) => user.email === email && user.senha === senha
    );

    if (usuario) {
      // Caso as credenciais estejam corretas, redirecionar para o Dashboard
      navigate('/dashboard', {
        state: { nome: usuario.name, email: usuario.email }, // Passando dados do usuário
      });
      setErro('');
    } else {
      setErro('Credenciais inválidas! Tente novamente.');
    }
  };

  return (
    <div className='login'>
      <h1>Login</h1>
      <form className='form' onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="senha">Senha: </label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        {erro && <div className='erro'>{erro}</div>}

        <div>
          <button className='btn-entrar' type="submit">Entrar</button>
          <button
            className='btn-canc'
            type="button"
            onClick={() => {
              setEmail('');
              setSenha('');
              setErro('');
              alert('Login cancelado!');
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
