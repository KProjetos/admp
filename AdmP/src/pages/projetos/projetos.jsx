function projetos() {
    return(
        <div className="w-[100%] place-content-center h-auto justify-items-center  ">
            <h1 className="h-[10vh] flex items-center justify-center">PROJETOS</h1>
            <div className="">
                <table className="w-[90%] border-l-4  border-l-principal rounded-[100px] m-auto">
                    <thead>
                        <tr className="bg-secundaria  place-items-center">
                            <th className="pt-4 pb-4 pr-4 pl-4">Codigo Busca</th>
                            <th className="pt-4 pb-4 pr-4 pl-4" >Nome Projeto</th>
                            <th  className="pt-4 pb-4 pr-4 pl-4">Data Criação</th>
                            <th  className="pt-4 pb-4 pr-4 pl-4">Data Entrega</th>
                            <th  className="pt-4 pb-4 pr-4 pl-4">Empresa</th>
                            <th className="pt-4 pb-4 pr-4 pl-4">Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" place-items-center">
                            <td className="pt-4 pb-4 pr-4 pl-4 max-w-[200px] break-words">P001</td>
                            <td className="pt-4 pb-4 pr-4 pl-4 max-w-[200px] break-words">Nome Projeto</td>
                            <td className="pt-4 pb-4 pr-4 pl-4 max-w-[200px] break-words">11/02/23</td>
                            <td className="pt-4 pb-4 pr-4 pl-4 max-w-[200px] break-words">20/03/23</td>
                            <td className="pt-4 pb-4 pr-4 pl-4 max-w-[200px] break-words">Empresa</td>
                            <td className="pt-4 pb-4 pr-4 pl-4 max-w-[200px] break-words flex justify-center"><a href="/projetoatual">icone</a></td>
                        </tr>
                        <tr className=" place-items-center">
                            <td className="pt-4 pb-4 pr-4 pl-4 max-w-[200px] break-words">P002</td>
                            <td className="pt-4 pb-4 pr-4 pl-4 max-w-[200px] break-words">Nome Projeto</td>
                            <td className="pt-4 pb-4 pr-4 pl-4 max-w-[200px] break-words">11/02/23</td>
                            <td className="pt-4 pb-4 pr-4 pl-4 max-w-[200px] break-words">20/03/23</td>
                            <td className="pt-4 pb-4 pr-4 pl-4 max-w-[200px] break-words ">Empresa</td>
                            <td className="pt-4 pb-4 pr-4 pl-4 max-w-[200px] break-words flex justify-center"><a href="/projetoatual">icone</a></td>
                        </tr>
                    </tbody>
                </table>
                <div className="h-[10vh] w-[100%] flex flex-row justify-around absolute bottom-0">
                <a href="/novoprojeto"> <button className="btn-primary w-[100%] mt-[3vh] mr-6 rounded font-medium hover:btn-secundary">NOVO PROJETO</button></a>
                <a href="/deletarprojeto"> <button className="btn-primary w-[100%]  mt-[3vh] rounded font-medium hover:btn-secundary">DELETAR PROJETO</button></a>
                </div>
                
                

            </div>

        </div>
    )
}

export default projetos