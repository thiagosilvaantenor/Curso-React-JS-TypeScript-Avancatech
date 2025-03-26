
interface pProps{
    color:string;
}


const Paragraph : React.FC<pProps> = ({color}) => {
    return(
        <div>
            <p style={{color:color}}
            >Esse texto muda de cor</p>
        </div>
    )
}

export default Paragraph