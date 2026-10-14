import { FaRegTrashAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";

interface Tarefa {
    id: number;
    tituloTarefa: string;
    categoria: string;
    status: "Pendente" | "Concluída";
}

type TarefasListaProps = {
    tarefas: Tarefa[]
}

function corCategoria(categoria: string) {
    switch (categoria) {
        case "Estudos":
            return "bg-blue-100 text-blue-700 border border-blue-200";

        case "Saúde":
            return "bg-green-100 text-green-700 border border-green-200";

        case "Lazer":
            return "bg-purple-100 text-purple-700 border border-purple-200";

        case "Pessoal":
            return "bg-amber-100 text-amber-700 border border-amber-200";

        case "Trabalho":
            return "bg-rose-100 text-rose-700 border border-rose-200";

        default:
            return "bg-gray-100 text-gray-700 border border-gray-200";
    }
}

const TarefasLista = ({ tarefas }: TarefasListaProps) => {
    return (
        <div className="flex flex-col rounded-lg items-center">
            {tarefas.map((tarefa) => (
                <div className="flex items-center justify-between p-5 w-full h-20 rounded-lg mt-3 mb-3 border-b border-amber-800">
                    <div key={tarefa.id}>
                        {tarefa.tituloTarefa}
                    </div>

                    <div className="flex gap-25">
                        <div className={`rounded-full w-30 text-center h-10 p-2 ${corCategoria(tarefa.categoria)}`}>
                            {tarefa.categoria}
                        </div>

                        <div>
                            {tarefa.status}
                        </div>

                        <div>
                            <FaRegTrashAlt className="h-10 bg-red-300 text-red-700 rounded-lg text-lg w-10 p-3 cursor-pointer" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TarefasLista