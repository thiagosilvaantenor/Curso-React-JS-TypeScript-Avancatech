import './titulo.css'
const Titulo = ({ nome, paragrafo, cor, bg, border, radius, pad }) => {
    return (
        <div className='titulo'>

            {/** IF ternário Nome */}
            <h1 style={{ color:cor }}> Olá, meu nome é {nome ? nome : "Sem nome!"} </h1>

            {/* If ternário do parágrafo */}

            {
                paragrafo ?
                    <p style={{ background: bg, border: border, borderRadius: radius, padding: pad }}> Paragrafo com True ativado! </p> :
                    <p>Nada</p>
            }


        </div>
    )
}
export default Titulo;