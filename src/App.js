import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './paginas/Inicio/Index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './componentes/Menu/index.js';
import Adicionar from './paginas/Adicionar/index.js';
import Remover from './paginas/Remover/index.js';
import LerFilme from './paginas/LerFilme/index.js';
import Alterar from './paginas/Alterar/index.js';


function App() {
return (
    <BrowserRouter>
        <Menu/>
        
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/adicionar' element={<Adicionar />} />
            <Route path='/remover' element={<Remover />} />
            <Route path='/filmes/:id' element={<LerFilme/>}/>
            <Route path='/alterar' element={<Alterar/>}/>
            <Route path="*" element={<h1>Página não encontrada!</h1>} />

        </Routes>

        
    </BrowserRouter>
);
}

export default App;
