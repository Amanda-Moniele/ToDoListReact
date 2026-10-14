const Login = () => {
    return (
        <div className="h-screen w-full bg-[#ffffff] rounded-lg flex justify-center">
            <div className="bg-[#8c5120] w-[50%] h-[95vh] rounded-lg flex flex-col">
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        <h1 className="text-3xl text-white mb-5 mt-5">To Do List</h1>
                        <img src="cat.gif" alt="" className="h-40 rounded-full" />
                    </div>
                </div>

                <div className="flex justify-center text-white pt-5">
                    <span className="text-lg">Anote suas tarefas para ter controle da sua rotina</span>
                </div>

                <div className="flex flex-col flex-1 justify-center">
                    <div className="flex flex-col p-5">
                        <div className="flex flex-col pb-8">
                            <label className="text-white">Email</label>
                            <input type="email" id="" className="border border-white outline-none rounded-lg w-[100%] h-10 bg-white" />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white">Senha</label>
                            <input type="password" id="" className="border border-white outline-none rounded-lg w-[100%] h-10 bg-white" />
                        </div>
                    </div>

                    <div className="flex justify-end p-5">
                        <button className="cursor-pointer text-[#f2dfd3]">Criar conta</button>
                    </div>

                    <div className="flex justify-center">
                        <button className="bg-white cursor-pointer text-[#4b280a] w-50 h-10 rounded-lg">Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login