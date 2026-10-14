import { GoPlusCircle } from "react-icons/go";
import { useState, type Dispatch, type SetStateAction } from "react";

interface Tarefa {
  id: number;
  tituloTarefa: string;
  categoria: string;
  status: "Pendente" | "Concluída";
}

interface NovaTarefaProps {
  setTarefas: Dispatch<SetStateAction<Tarefa[]>>;
}

const NovaTarefa = ({ setTarefas }: NovaTarefaProps) => {
  const [tituloTarefa, setTituloTarefa] = useState("");
  const [categoria, setCategoria] = useState("");

  function adicionarTarefa() {
    if (!tituloTarefa.trim() || !categoria) {
      alert("Preencha o título e selecione uma categoria!");
      return;
    }

    const novaTarefa: Tarefa = {
      id: Date.now(),
      tituloTarefa: tituloTarefa,
      categoria: categoria,
      status: "Pendente",
    };

    setTarefas((tarefasAtuais) => [
      ...tarefasAtuais,
      novaTarefa,
    ]);

    setTituloTarefa("");
    setCategoria("");
  }

  return (
    <div className="w-full border border-[#E2E8F0] rounded-lg p-4">
      <div className="flex items-center gap-3">
        <GoPlusCircle className="text-amber-800 text-xl" />

        <p className="text-xl font-bold">
          Adicionar nova tarefa
        </p>
      </div>

      <div className="flex items-end gap-4 pt-5">
        <div className="flex flex-col flex-1 gap-2">
          <label>Título da tarefa</label>

          <input
            value={tituloTarefa}
            onChange={(e) => setTituloTarefa(e.target.value)}
            type="text"
            placeholder="Digite o que precisa ser feito..."
            className="border border-[#E2E8F0] outline-none h-10 rounded-lg px-3"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Categoria</label>

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="border border-[#E2E8F0] h-10 rounded-lg px-3"
          >
            <option value="">Selecione uma categoria</option>
            <option value="Estudos">Estudos</option>
            <option value="Saúde">Saúde</option>
            <option value="Lazer">Lazer</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Trabalho">Trabalho</option>
          </select>
        </div>

        <button
          type="button"
          onClick={adicionarTarefa}
          className="text-white bg-amber-800 h-10 rounded-lg px-5 cursor-pointer"
        >
          + Adicionar tarefa
        </button>
      </div>
    </div>
  );
};

export default NovaTarefa;