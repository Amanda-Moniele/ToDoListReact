import { FaRegTrashAlt } from "react-icons/fa";

interface Tarefa {
  tituloTarefa: string;
}

type TarefasListaProps = {
    tarefas: Tarefa[]
}

const TarefasLista = ({tarefas} : TarefasListaProps) => {
    return (
        <div className="flex justify-between">
            <div>
                <li className="list-none"></li>
            </div>

            <div className="flex gap-30">
                <span>Categoria</span>
                <span>status</span>
                <FaRegTrashAlt className="h-10 bg-red-300 text-red-700 rounded-lg text-lg w-10 p-3 cursor-pointer" />
            </div>
        </div>
    )
}

export default TarefasLista