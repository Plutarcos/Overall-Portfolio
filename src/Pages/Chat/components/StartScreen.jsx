import React from 'react'
import './StartScreen.css'

const StartScreen = ({start}) => {
  return (
    <div className='start'>
        <h1>Palavra Secreta</h1>
        <p>Clique no botão abaixo para começar a jogar.</p>
        <button onClick={start}>Começar</button>
        <h2>Este jogo foi retirado <a target='blank' href='https://github.com/GuilhermeNono/SecretWord-Reactjs'>DAQUI</a></h2>
    </div>
  )
}

export default StartScreen;