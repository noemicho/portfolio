import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home.jsx';
import Sobre from '../pages/Sobre.jsx';
import Experiencia from '../pages/Experiencia.jsx';
import Competencias from '../pages/Competencias.jsx';
import Contato from '../pages/Contato.jsx';


export function RoutesApp() {

    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/sobre' element={<Sobre />}/>
            <Route path='/experiencia' element={<Experiencia />}/>
            <Route path='/competencias' element={<Competencias />}/>
            <Route path='/contato' element={<Contato />}/>
        </Routes>
    ) 
}
