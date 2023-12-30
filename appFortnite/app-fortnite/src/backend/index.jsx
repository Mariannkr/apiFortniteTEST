import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '/Navbar';  // Asegúrate de tener la ruta correcta

const App = () => {
  return (
    <React.StrictMode>
      <Navbar />
      {/* Tu contenido principal va aquí */}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
