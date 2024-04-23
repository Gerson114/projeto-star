import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <header>
      <div className='fundo'>
      <div className='logo'><h1><strong>Mercado</strong></h1></div>
      <div className='menu'>
          <nav>
             <a href="#">home</a>
             <a href="#">contato</a>
             <a href="#">sobre nois</a>
             <a className='conta' href="#">Criar conta</a>
          </nav>
        </div>
          <div className='social'>
            <button>entrar</button>

          </div>
       </div> 



    </header>
  )
}

export default App
