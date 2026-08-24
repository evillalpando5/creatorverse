import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import ShowCreators from './pages/ShowCreators.jsx'
import AddCreator from './pages/AddCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
    {path:"/", element:<App/>, children: [{index: true, element : <section id="show_creators"> <ShowCreators/> </section>}]},
    {path:"/AddCreator", element:<AddCreator/>},
    {path:"/EditCreator/:id", element:<EditCreator/>},
    {path:"/ViewCreator/:id", element:<ViewCreator/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
