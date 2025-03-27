import { useLocation, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import './Dashboard.css'

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { nome, email } = location.state || {}; // Pegando os dados do usuário (nome e email)

  const handleNavigateToListaUsuarios = () => {
    navigate('/listar-usuarios');
  };

  return (
    <div>
      <Menu nome={nome || 'Usuário'} email={email || 'sem_email@dominio.com'} />
      <div className='dashboard'>
        <h1>Dashboard</h1>
        <button onClick={handleNavigateToListaUsuarios}>Ir  para Lista de Usuários</button>
      </div>
    </div>
  );
};

export default Dashboard;
