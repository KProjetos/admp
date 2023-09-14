function Novoprojeto() {
    return(
        <div className="w-[90%] m-auto">

            <form action="">
                <div className="flex w-full justify-between">
                        <div className="">
                            <h1 className="text-principal text-2xl mt-4">Novo projeto</h1>
                            <input type="text" name="" id="" placeholder="Nome do projeto" className="border rounded-lg h-[5vh] pl-2 w-[300px] mt-2" /> <br />
                            <input type="datetime" placeholder="Data de entrega" name="" id="" className="border rounded-lg h-[5vh] pl-2 w-[300px] mt-2"  /><br />
                            <input type="password" name="" placeholder="PIN"  id="" className="border rounded-lg h-[5vh] pl-2 w-[300px] mt-2"/>
                    
                        </div>
                    <div className="">
                    <h2 className="text-principal text-2xl mt-4" >Data Criação: <span className="text-black"> data atual</span></h2>
                    <h3 className="text-xl mt-2">Código:P001</h3>
                    </div>
                </div>
                <hr className="mt-6" />
                <div className="">
                <h1 className="text-principal text-2xl mt-4">Empresa contratante</h1>
                <input type="text" name="" id="" placeholder="Nome da empresa" className="border rounded-lg h-[5vh] pl-2 w-[300px] mt-2" /> <br />
                <h2 className="mt-2">Email:</h2>
                <input type="email" name="" id="" placeholder="Email da empresa" className="border rounded-lg h-[5vh] pl-2 w-[300px] mt-2" /><br />
                <h2 className="mt-2">Telefone:</h2>
                <input type="number" name="" id="" placeholder="Tell da empresa" className="border rounded-lg h-[5vh] pl-2 w-[300px] mt-2" />
                </div>
                <hr className="mt-6" />
                <h1 className="text-principal text-2xl mt-4">Equipe</h1>
                            <input type="text" name="" id="" placeholder="Nome da Equipe" className="border rounded-lg h-[5vh] pl-2 w-[300px] mt-2" />
               
                <div className="flex w-full justify-between">
                        <div className="">
                            <h1 className="text-principal text-2xl mt-4">Adicionar Integrante</h1>
                            <p>Nome:</p>
                            <input type="text" name="" id="" placeholder="Nome do integrante" className="border rounded-lg h-[5vh] pl-2 w-[100%] mt-2 " />
                            <p>Cargo:</p>
                            <input type="text" name="" id="" placeholder=" Cago" className="border rounded-lg h-[5vh] pl-2 w-[300px] mt-2 " />
                            <p>Email:</p>
                            <input type="text" name="" id="" placeholder="Email do integrante" className="border rounded-lg h-[5vh] pl-2 w-[100%] mt-2 " />
                            <p>Telefone:</p>
                            <input type="text" name="" id="" placeholder="Telefone do integrante" className="border rounded-lg h-[5vh] pl-2 w-[100%] mt-2 " />
                            <button className="btn-primary w-[100%]  mt-[3vh] rounded font-medium hover:btn-secundary">ADICIONAR</button>
                        </div>
                    <div className="w-[50%] border-2 rounded-lg text-center shadow-lg h-[30vh] overflow-y-auto">
                        <h1 className="text-principal text-xl border-b-2 ">ITEGRNATES</h1>
                        <div className="text-left ml-4">
                        <li className="text-xl">nome</li>
                        <li className="text-xl">nome</li>
                        <li className="text-xl">nome</li>
                        <li className="text-xl">nome</li>
                        <li className="text-xl">nome</li>
                        <li className="text-xl">nome</li>
                        <li className="text-xl">nome</li>
                        <li className="text-xl">nome</li>
                        <li className="text-xl">nome</li>
                        <li className="text-xl">nome</li>
                        </div>
                    
                    </div>
                
                </div>
                <hr className="mt-6" />
                    <div className="">
                            <h1 className="text-principal text-2xl mt-4">Gerente</h1>
                            <p>Nome:</p>
                            <input type="text" name="" id="" placeholder="Nome do Gerente" className="border rounded-lg h-[5vh] pl-2 w-[300px] mt-2 " />
                            <p>Email:</p>
                            <input type="text" name="" id="" placeholder="Email do Gerente" className="border rounded-lg h-[5vh] pl-2 w-[300px] mt-2 " />
                            <p>Telefone:</p>
                            <input type="text" name="" id="" placeholder="Telefone do Gerente" className="border rounded-lg h-[5vh] pl-2 w-[300px] mt-2 " />
                            
                        </div>
                        <button className="btn-primary w-[100%]  mt-[3vh] rounded font-medium hover:btn-secundary">STARTAR PROJETO</button>
            </form>
        </div>
    )
}

export default Novoprojeto