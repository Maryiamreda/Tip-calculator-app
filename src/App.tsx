import { useState } from 'react'

import './App.css'
import TipAmount from './components/tip-amount'
import Options from './components/options'
import Logo from '../public/images/logo.svg';
function App() {

  return (

    <div className='flex flex-col items-center gap-7  '>
      <img src={Logo} className='max-w-12 max-h-12' />
      <div className='flex gap-5 bg-white p-7 rounded-xl '>
        <Options />
        <TipAmount />
      </div>

    </div>
  )
}

export default App
