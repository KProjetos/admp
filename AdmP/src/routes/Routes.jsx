import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login';
import Deletarprojeto from '../pages/deletarProjeto/deletarprojeto';
import Equipe from '../pages/equipe/equipe';
import Novoprojeto from '../pages/novoProjeto/novoprojeto';
import Projetos from '../pages/projetos/projetos';
import Projetoatual from '../pages/projetoAtual/projetoatual';

function RoutesApp(){
    return(
        <Router>

        <Routes>
            <Route  path="/" element = {<Login/>}/>
            <Route  path="/deletarprojeto" element = {<Deletarprojeto/>}/>
            <Route  path="/equipe" element = {<Equipe/>}/>
            <Route  path="/novoprojeto" element = {<Novoprojeto/>}/>
            <Route  path="/projetos" element = {<Projetos/>}/>
            <Route  path="/projetoatual" element = {<Projetoatual/>}/>
            
            
        </Routes>

        </Router>
        
        
    )
}
export default RoutesApp