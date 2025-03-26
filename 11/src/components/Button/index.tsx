import { useState } from "react"

interface btnProps {
    label:string;
}

const Button: React.FC<btnProps> = ({label}) => {

    return (
        <div>
            <button>{label}</button>

        </div>
    )
}
export default Button;