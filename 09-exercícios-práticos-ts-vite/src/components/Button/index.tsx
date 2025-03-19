import './button.css'
interface ButtonProps{
    label:string;
    // o ? deixa como opcional
    onClick?:React.MouseEventHandler;
}

const Button: React.FC<ButtonProps> = ({label, onClick}) =>  {
    return(
        <div className='btn'>
            <button onClick={onClick}>{label}</button>
        </div>
    )
}
export default Button