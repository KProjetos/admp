

function Login() {
    return(
        <div className="w-[100%] h-[100vh] bg-login fixed top-0 bg-cover flex justify-center flex-row items-center ">
            <div className="w-[40ch] h-[50ch] flex justify-center bg-div-login flex-col items-center rounded-lg">
                <h1 className="text-principal font-sans text-[2em]">LOGIN</h1>
                <div className="">
                <p className="font-sans text-[1.5em] mt-[1vh] mb-[1vh] "  >Usuario</p>
                <input type="text" className="rounded-lg p-2 font-medium"/>
                <p className="font-sans text-[1.5em] mt-[1vh] mb-[1vh] ">Senha</p>
                <input type="password" name="" id="" className="rounded-lg p-2 font-medium"/>
                </div>
                <a href="/projetos"> <button className="btn-primary w-[100px] mt-[3vh] rounded font-medium hover:btn-secundary">LOGAR</button></a>
            </div>
        </div>
        
    )
}

export default Login