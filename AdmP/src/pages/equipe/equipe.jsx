function Equipe() {
    return(
        <div className="w-[90%] m-auto mt-4">
            <h1 className="text-2xl text-black">Equipe</h1>
            <h1 className="text-2xl text-principal">Nome da equipe</h1>
            <div className="w-[90%] mt-4 h-[600px]  m-auto rounded-lg shadow-lg overflow-auto ">
                <h1 className="text-xl text-principal mt-6 ml-6">INTEGRANTES</h1>
                <div className="text-left ml-4 mt-6">
                 <table>
                    <tr>
                        <th className="w-[300px] break-words">Nome</th>
                        <th className="w-[300px] break-words">Cargo</th>
                        <th className="w-[300px] break-words">Email</th>
                        <th className="w-[300px] break-words">telefone</th>
                    </tr>
                    <tr>
                        <td className="w-[300px] break-words">Flavio</td>
                        <td className="w-[300px] break-words">Desenvolvedor front-end</td>
                        <td className="w-[300px] break-words">fgbrancalhao@gmail.com</td>
                        <td className="w-[300px] break-words">11987704919</td>
                    </tr>
                 </table>
                </div>
            </div>

            <h4 className="mt-[10vh]">*Integrantes editado apenas pela gestor de  dados</h4>
        </div>
    )
}

export default Equipe