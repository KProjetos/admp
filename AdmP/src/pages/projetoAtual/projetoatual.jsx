function Novoprojeto() {
    return(
        <div className="flex flex-col w-[90%] m-auto mt-4">
            <div className="flex justify-between">
                <div className="w-[100vh]">
                    <h1 className=" text-principal text-2xl">Nome do projeto</h1>
                    <h2 className=" mt-4 text-xl">P001</h2>
                </div>
                <div className="w-auto">
                     <h2 className="  text-2xl">Data de inicio:11/02/23</h2>
                </div>
            </div>
            <div className="border-y-1 shadow-lg rounded-lg overflow-x-auto">
                <h1 className="mt-4 text-lg ml-2 mb-2">ETAPAS</h1>
                <div className="snap-x w-[100%]">
                    <table className="snap-x w-[100%]">
                    <thead>
                        <tr className="">
                            <th className="bg-[green] w-[350px] border-b-2">LEVANTAMENTO DE REQUISITO</th>
                            <th className="w-[350px] border-b-2">PLANEJAMENTO</th>
                            <th className="w-[350px] border-b-2">IMPLEMENTACAO / TESTE</th>
                            <th className="w-[350px] border-b-2"> AVALIAÇÃO / FEEDBACK</th>
                            <th className="w-[350px] border-b-2">INTERAÇÃO</th>
                            <th className="w-[350px] border-b-2">IMPLEMENTAÇÃO</th>
                            <th className="w-[350px] border-b-2">MANUTENÇÃO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td className="space-y-2" ><p>Data:11/02/23</p><p>Link:</p></td>
                            <td className="space-y-2"><p>Data:11/02/23</p><p>Link:</p></td>
                            <td className="space-y-2"><p>Data:11/02/23</p><p>Link:</p></td>
                            <td className="space-y-2"><p>Data:11/02/23</p><p>Link:</p></td>
                            <td className="space-y-2"><p>Data:11/02/23</p><p>Link:</p></td>
                            <td className="space-y-2"><p>Data:11/02/23</p><p>Link:</p></td>
                            <td className="space-y-2"><p>Data:11/02/23</p><p>Link:</p></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <button className="btn-primary hover:btn-secundary mt-4 ml-2">SALVAR</button>
            </div>
            <div className="flex flex-col w-[90%] m-auto mt-4">
                <div className="flex justify-between">
                    <div className="">
                        <h1 className=" text-principal text-2xl">EQUIPE</h1>
                        <p className="text-xl space-y-2 ">Equipe: Front 1</p>
                        <p className="text-xl space-y-2 ">Nome do gerente: Carla</p>
                        <p className="text-xl space-y-2 ">Email do gerente: Carla@gmail.com </p>
                        <p className="text-xl space-y-2 ">Telefone do gerente: 11940028922</p>
                    </div>
                    <div className="">
                    <h1 className=" text-principal text-2xl">Empresa contratante</h1>
                        <p className="text-xl space-y-2 ">Nome da Empresa: Tim</p>
                        <p className="text-xl space-y-2 ">Email da Empresa: Tim@timbrasil.com</p>
                        <p className="text-xl space-y-2 ">Telefone da Empresa: 11940028922</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-[90%]  mt-4">
                <div className="flex justify-between">
                <div className="">
                    <a href="/equipe"><button className="btn-primary hover:btn-secundary mt-4 ml-2">GERENCIAR EQUIPE</button></a>
                </div>
                <div className="">
                    <button className="btn-primary hover:btn-secundary mt-4 ml-2">RETORNAR ETAPA</button>
                    <button className="btn-primary hover:btn-secundary mt-4 ml-2">PROXIMA ETAPA</button>
                </div>
                </div>
            
            </div>
        </div>
    )
}

export default Novoprojeto