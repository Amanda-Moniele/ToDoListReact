import { BsCheck2 } from "react-icons/bs";

const Cabecalho = () => {
    return (
        <div className="flex gap-8">
        <BsCheck2 className="text-white bg-green-600 text-5xl rounded-lg" />
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">Todo List</h1>
          <p>Organize suas tarefas</p>
        </div>
      </div>
    )
}

export default Cabecalho