interface tabuadaProps {
    num: number;
}



const Tabuada: React.FC<tabuadaProps> = ({ num }) => {


    return (
        <div>
            <p>Tabuada do {num} </p>
            <ul>
                {Array.from({ length: 10 }, (_, index) => (
                    <li key={index}>
                        {num} x {index + 1} = {num * (index + 1)}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Tabuada