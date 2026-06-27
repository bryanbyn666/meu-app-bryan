import { Routes, Route, Link }
  from 'react-router-dom';

import {Home} from './pages/Home';
import {Sobre} from './pages/Sobre';
import {Contato} from './pages/Contato';


function App() {
 
  return (
    <>
      <div>
        <nav>
            <Link to="/">Home</Link><br />
            <Link to="/sobre">Sobre</Link><br />
            <Link to="/contato">Contato</Link><br />
            
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<div>não encontrado</div>} />
        </Routes>
      </div>
    </>
  )
}

export default App