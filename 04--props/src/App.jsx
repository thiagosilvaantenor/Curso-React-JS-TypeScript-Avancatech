import './app.css';
import Titulo from "./components/Titulo";
const App = () => {
    return (
        <div>

            <Titulo
                nome="Homem Aranha"
                paragrafo={true}
                cor={"rgba(255, 0, 0, 1)"}
                bg={"rgba(0, 0, 255, 1)"}
                border={"2px solid black"}
                radius={"130px"}
                pad={"40px"}
                />

            <Titulo
                nome="Tempestade"
                paragrafo={true}
                cor={"rgba(0, 0, 128, 1)"}
                bg={"rgba(255, 255, 255, 1)"}
                border={"5px dotted black"}
                radius={"100px"}
                pad={"40px"}
            />
            <Titulo
                nome="Pantera Negra"
                paragrafo={true}
                cor={"rgb(0, 0, 1)"}
                bg={"rgba(255, 215, 0, 1)"}
                border={"1px solid purple"}
                radius={"90px"}
                pad={"40px"}
            />

        </div>
    )
}
export default App;