import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app.tsx'
import './index.css'

// Componentes e propiedades

// Componente = padrão de repetição, algo que aparece várias vezes ou
// quando eu consigo desconectar uma parte da interface de outra 
// que podem exister separadamente

// Componentes são funções que retornam html

// Header por exemplo não precisa existe junto da lista de participantes

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
