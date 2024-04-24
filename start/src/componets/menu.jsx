 import React from 'react'

 const menu = ({menuu}) => {
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
 
 export default menu