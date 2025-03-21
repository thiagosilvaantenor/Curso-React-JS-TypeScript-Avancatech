import useToogle from '../hooks/useToogle'
import './toggleComponent.css'

const ToggleComponent = () => {

    const [estado, toggle] = useToogle(false);
    
    return (
        <div className='container-toggle'>
            <p>{estado ? 'Estado é TRUE' : 'Estado é FALSE'}</p>
            <button 
            onClick={toggle}
            className={estado ? 'ligado' : 'desligado'}
            >Clique para mudar o Estado</button>
        </div>
    )
}
export default ToggleComponent