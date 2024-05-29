import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import { ListaComprasProvider } from "./context/ListaComprasContext";

// import RootLayout from './layouts/RootLayout';

import Home from './routes/Home';
import ListaComprasSimples from './routes/ListaComprasSimples';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/lista-compras',
    element: <ListaComprasSimples />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
