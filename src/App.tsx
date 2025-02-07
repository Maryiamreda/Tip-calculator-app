import { useState } from 'react'

import './App.css'
import TipAmount from './components/tip-amount'
import Options from './components/options'

function App() {

  return (

    <div >
      <div className='flex'>
        <Options />
        <TipAmount />
      </div>

    </div>
  )
}

export default App
