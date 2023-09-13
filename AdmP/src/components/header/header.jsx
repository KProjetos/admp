import { useState } from "react";


function Header() {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function handleModalState() {
    modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
  }

  return (
    <>
      <header className="direction-col w-full p-1 bg-principal drop-shadow-lg">
        <div className="direction-row">
          <div>
            <h1 className="text-shadow shadow-black text-[1.2em] text-white uppercase">
            <a href="/projetos"> Projetos</a>
            </h1>
          </div>
          {/* // TODO alterar o "foto" pela tag img e adicionar o src */}
          <div onClick={() => handleModalState()} className="cursor-pointer">
            <div className="min-w-[45px] min-h-[45px] bg-white rounded-[100%] direction-col">
              foto
            </div>
          </div>
        </div>
      </header>

      <section className={modalIsOpen ? "absolute right-2 p-1 px-2 w-[150px] bg-secundaria drop-shadow-lg rounded" : "hidden"}>

        <a href="" className=""><p>Perfil</p></a>
        
        <a href=""><p>Sair</p></a>

      </section>
    </>
  );
}

export default Header;
