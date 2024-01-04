import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './navbar';  // Asegúrate de tener la ruta correcta
import { Componente } from './componente';  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navbar />
      <Componente />
  </React.StrictMode>,

)

