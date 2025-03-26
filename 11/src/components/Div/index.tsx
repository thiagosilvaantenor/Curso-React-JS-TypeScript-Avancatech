import './Div.css'
interface divProps {
    aparece: boolean
}

const Div: React.FC<divProps> = ({ aparece }) => {
    return (
        <div>

            {
                aparece ? (<div className='ligado'> <p>DIV de Schrodinger está viva e aparecendo 😺</p></div >) : (
                    <div className='desligado'>
                        <p>DIV de Schrödinger não está aparecendo 😿</p>
                    </div>
                )
            }

        </div>
    )
}
export default Div;