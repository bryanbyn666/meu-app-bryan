import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


  function ButaoSenai() {

  const handleClick = () => {
    alert('Você clicou no botão!')
  }

  return (
    <button
    style={{
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      fontWeight: 'bold',
      border: 'none',

    }}
    onClick={handleClick}
    >
     Clique aqui
    </button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>  
      <h1>Meu app senai</h1>
      <ButaoSenai text="Clique aqui" />
    
</div>
  );
  }
  export default App