import { useState } from "react"
import './CRUD.css'

const TodoApp = () => {
    // Declarando as variáveis com useState
    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")
    const [editando, setEditando] = useState(null)
    const [textoEditado, setTextoEditado] = useState([])

    //Criando as Arrows Functions:
    //Função para criar uma nova tarefa
    const adicionarTarefa = () => {
        //usar trim() para remover espaços em branco
        if (novaTarefa.trim() === "") return
        setTarefas([...tarefas,
        {
            id: Date.now(),
            texto: novaTarefa,
            concluida: false
        }
        ])
        setNovaTarefa("");
    };
    //Função para remover uma tarefa da lista:
    const removerTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));

    };

    //Função para marcar Tarefa como concluida:
    const marcarConcluida = (id) => {
        setTarefas(tarefas.map(tarefa =>
            tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        ))
    };
    // Criando a função para editar tarefa:
    const iniciarEdicao = (tarefa) => {
        setEditando(tarefa.id);
        setTextoEditado(tarefa.texto);
    };
    // Função salvar edição:
    const salvarEdicao = (id) => {
        setTarefas(tarefas.map(tarefa =>
            tarefa.id === id ? { ...tarefa, texto: textoEditado } : tarefa
        ));
        setTextoEditado(null)
        setTextoEditado("")
    };

    return (
        <div className="to-do-list" style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
            <h1>Lista de Tarefas 📝</h1>

            {/* Campo de Entrada e Botão Adicionar */}
            <input
                type="text"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                placeholder="Digite uma tarefa..."
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
            {/* Lista de Tarefas */}
            <ul style={{ listStyle: "none", padding: 0 }}>
                {tarefas.map((tarefa) => (
                    <li key={tarefa.id}
                        style={{
                            textDecoration: tarefa.concluida ? "line-through" : "none",
                            background: tarefa.concluida ? "#d4edda" : "#f8d7da",
                            padding: "8px",
                            fontWeight: "500",
                            margin: "10px 0",
                            border: "3px solid black",
                            borderRadius: "40px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        {editando === tarefa.id ? (
                            <>
                                <input
                                    type="text"
                                    value={textoEditado}
                                    onChange={(e) => setTextoEditado(e.target.value)}
                                />
                                <button onClick={() => salvarEdicao(tarefa.id)}>Salvar</button>
                            </>
                        ) : (
                            <>
                                <span onClick={() => marcarConcluida(tarefa.id)}
                                    style={{ cursor: "pointer", flexGrow: 1 }}>
                                    {tarefa.texto}
                                </span>
                                <button onClick={() => iniciarEdicao(tarefa)}>✏</button>
                                <button id="btn-remover" onClick={() => removerTarefa(tarefa.id)}>❌</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TodoApp;