import { useState } from 'react'

import './App.css'
import TipAmount from './components/tip-amount'
import Options from './components/options'

function App() {

  return (

    <div >
      <Options />
      <TipAmount />
    </div>
  )
}

export default App
