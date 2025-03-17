//Importando recursos:
import { useState } from "react";

// Criando a interface para declarar os tipos das variáveis no TypeScript:
interface CepFormProps {
    onSearch: (cep: string) => void;
}

// Função para carregar o cep: =============================
const CepForm: React.FC<CepFormProps> = ({ onSearch }) => {
    const [cep, setCep] = useState<string>("");
}
//Função para lidar com formulário vazio: ================
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (/^\d{8}$/.test(cep)) {
        onSearch(cep);
    } else {
        alert("Digite um CEP válido de 8 números!")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Digite o CEP com 8 números"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                maxLength={8}
            />
            <button type="submit">Buscar CEP</button>
        </form>


    );
};
export default CepForm;

