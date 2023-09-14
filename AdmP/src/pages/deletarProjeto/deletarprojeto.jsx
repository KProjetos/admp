
function Deletarprojeto() {
    return(
        <div className="w-[100%] h-[100vh] flex justify-center items-center bg-black">
            <div className="w-[70%] h-[60vh] bg-div-login text-white rounded-2xl text-center p-6 space-y-8 ">
                <h1>Deletar Projeto</h1>
                <h2>Escreva o codigo do projeto a ser deletado</h2>
                <input type="text" name="cod" id="cod" className="rounded-2xl text-center h-[5vh] text-black font-bold"/>
                <h2>Digite o pin de 6 digitos</h2>
                <input type="text" name="pin" id="pin" className="rounded-2xl text-center h-[5vh] text-black font-bold"/><br/>
                <button className="btn-primary hover:btn-secundary mt-4 ml-2">DELETAR</button>
            </div>
            
        </div>
    )
}

export default Deletarprojeto