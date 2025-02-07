import { useState } from 'react'

import './App.css'
import TipAmount from './components/tip-amount'
import Options from './components/options'
import Logo from '../public/images/logo.svg';
function App() {

  return (

    <div className='flex flex-col items-center'>
      <img src={Logo} />
      <div className='flex gap-5 bg-white p-5'>
        <Options />
        <TipAmount />
      </div>

    </div>
  )
}

export default App
