import { GoPlusCircle } from "react-icons/go";
import { useState, type Dispatch, type SetStateAction } from "react";

interface Tarefa {
    tituloTarefa: string;
}

interface NovaTarefaProps {
    setTarefas: Dispatch<SetStateAction<Tarefa[]>>;
}

const NovaTarefa = ({ setTarefas }: NovaTarefaProps) => {

    const [tituloTarefa, setTituloTarefa] = useState('');
    console.log(tituloTarefa)

    function adicionarTarefa() {
        setTarefas((tarefasAtuais) => [
            ...tarefasAtuais, { tituloTarefa: tituloTarefa }
        ])
    }

    return (
        <div className="w-full border border-[#E2E8F0] rounded-lg h-35 p-3">
            <div className="flex items-center gap-3">
                <GoPlusCircle className="text-blue-600 text-xl" />
                <p className="text-xl font-bold">Adicionar nova tarefa</p>
            </div>

            <div className="flex w-full justify-evenly gap-10 pt-5">
                <div className="flex flex-col">
                    <label className="rounded-lg">Título da tarefa</label>
                    <input value={tituloTarefa} onChange={(e) => setTituloTarefa(e.target.value)} type="text" className="border border-[#E2E8F0] outline-none h-10 rounded-lg w-110" />
                </div>

                <div className="flex gap-5 w-200">
                    <form>
                        <label>Categorias</label>
                        <select>
                            <option>Selecione uma categoria</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </form>
                </div>

                <div className="flex w-full gap-5 ">
                    <button onClick={adicionarTarefa} className="text-white bg-[#0D6EFD] h-10 rounded-lg w-60 cursor-pointer">+ Adicionar tarefa</button>
                </div>
            </div>
        </div>
    )
}

export default NovaTarefa