
interface filmeProps{
    titulo:string;
}

const Filme : React.FC<filmeProps> = ({titulo}) =>{
    return(
        <p>O melhor filme já feito é: <strong>{titulo}</strong></p>
    )
}

export default Filme