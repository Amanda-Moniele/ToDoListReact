// import { useState } from "react";
// import Cabecalho from "./Components/Cabecalho";
// import NovaTarefa from "./Components/NovaTarefa";
// import TarefasLista from "./Components/TarefasListas";
import Login from "./Login";

// interface Tarefa {
//   id: number;
//   tituloTarefa: string;
//   categoria: string;
//   descricao?: string;
//   data?: string;
//   status: "Pendente" | "Concluída";
// }

function App() {
//   const [tarefas, setTarefas] = useState<Tarefa[]>([]);

 return (
  < Login />
//     <div className="bg-[#F1F5F9] w-full min-h-screen flex justify-center items-start p-5">
//       <div className="bg-white w-[60%] h-[95vh] rounded-lg p-5 flex flex-col">

//         <div className="mb-5 shrink-0">
//           <Cabecalho />
//         </div>

//         <div className="shrink-0">
//           <NovaTarefa setTarefas={setTarefas} />
//         </div>

//         <div className="flex-1 min-h-0 mt-5">
//           <TarefasLista tarefas={tarefas} />
//         </div>

//       </div>
//     </div>
  );
}

export default App;

