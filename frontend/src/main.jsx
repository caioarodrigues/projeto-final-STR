import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home/Index.module.jsx';
import ListaCards from './routes/ListaCards/Index.module.jsx';
import EditaPlanta from './routes/EditaPlanta/Index.module.jsx';
import ListaRegistros from './components/ListaRegistros/Index.module.jsx';
import AdicionaPlanta from './routes/AdicionaPlanta/Index.module.jsx';
import RemovePlanta from './routes/RemovePlanta/Index.module.jsx';
import CriaRegistro from './routes/CriaRegistro/Index.module.jsx';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/lista",
    element: <ListaCards />
  },
  {
    path: "/edita-planta",
    element: <EditaPlanta />
  },
  {
    path: "/lista-registros/:id",
    element: <ListaRegistros/>
  },
  {
    path: "/adiciona-planta",
    element: <AdicionaPlanta />
  },
  {
    path: "/remove-planta",
    element: <RemovePlanta />
  },
  {
    path: "/cria-registro",
    element: <CriaRegistro/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);