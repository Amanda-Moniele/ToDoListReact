import { FaRegTrashAlt } from "react-icons/fa";

interface Tarefa {
  id: number;
  tituloTarefa: string;
  categoria: string;
  descricao?: string;
  data?: string;
  status: "Pendente" | "Concluída";
}

type TarefasListaProps = {
  tarefas: Tarefa[];
};

function formatarData(data: string) {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
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
    case "Faculdade":
        return "bg-pink-400 text-pink-700 border border-pink-200";
    default:
      return "bg-gray-100 text-gray-700 border border-gray-200";
  }
}

const TarefasLista = ({ tarefas }: TarefasListaProps) => {
  return (
    <div className="h-full min-h-0 overflow-y-auto pr-2">
      {tarefas.map((tarefa) => (
        <div
          key={tarefa.id}
          className="flex items-center justify-between gap-4 p-5 w-full min-h-20 rounded-lg mt-3 border border-amber-800"
        >
          <div className="flex-1 flex-col min-w-0 break-words">
            <p className="font-bold">{tarefa.tituloTarefa}</p>
            {tarefa.descricao && (
                <p className="text-[#565555]">{tarefa.descricao}</p>
            )}
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div
              className={`rounded-full text-center px-4 py-2 ${corCategoria(tarefa.categoria)}`}
            >
              {tarefa.categoria}
            </div>

            <div className="text-amber-900">
                {tarefa.data && (
                    <span>{formatarData(tarefa.data)}</span>
                )}
            </div>

            <div className="whitespace-nowrap">
              {tarefa.status}
            </div>

            <div>
              <FaRegTrashAlt className="h-10 bg-red-300 text-red-700 rounded-lg text-lg w-10 p-3 cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TarefasLista;