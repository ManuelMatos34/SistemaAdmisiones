import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Autenticacion from './pages/autenticacion/autenticacion.js';
import Registro from './pages/registro/registro.js';
import Inicio from './pages/inicio/inicio.js';
import Admin from './pages/admin/admin.js';
import Backups from './pages/respaldos/respaldos.js';
import Documentos from './pages/documentos/documentos.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Autenticacion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/respaldos" element={<Backups />} />
        <Route path="/documentos" element={<Documentos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
