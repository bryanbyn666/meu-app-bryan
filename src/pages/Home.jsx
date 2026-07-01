import { Posts } from '../Componentes/Posts';
import { Buscar } from '../Componentes/Posts';
import { useEffect } from 'react';

function Home () {
  return (
    <>
    <div>
      <h1>Home</h1>
      <p>Esta é a página inicial.</p>
    </div> 
    <Posts/>
    </>
  );
}

export { Home }