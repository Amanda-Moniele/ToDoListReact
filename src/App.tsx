import { useState } from 'react';
import Cabecalho from "./Components/Cabecalho"
import NovaTarefa from "./Components/NovaTarefa"
import TarefasLista from "./Components/TarefasListas"

interface Tarefa {
  id: number;
  tituloTarefa: string;
  categoria: string;
  status: "Pendente" | "Concluída";
}

function App() {

  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  console.log(tarefas)

  return (
    <div className="bg-[#F1F5F9] w-full h-screen flex justify-center">
      <div className="bg-white w-[60%] h-220 mt-10 rounded-lg p-5">
        <div className="mb-10">
          < Cabecalho />
        </div>

        < NovaTarefa setTarefas={setTarefas} />

        <div className="p-5">
          < TarefasLista tarefas={tarefas} />
        </div>

        <div>
          
        </div>
      </div>
    </div>
  )
}

export default App
