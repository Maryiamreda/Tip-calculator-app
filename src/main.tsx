import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import store from './store/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)