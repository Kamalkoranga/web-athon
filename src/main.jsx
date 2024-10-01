import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'

import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Event from './pages/events.jsx';
import SkillDevelopment from './pages/skillDevelopment.jsx';
import Incubation from './pages/incubation.jsx';
import Resource from './pages/resources.jsx';
import Community from './pages/community.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/events",
    element: <Event />,
  },
  {
    path: "/skillDevelopment",
    element: <SkillDevelopment />,
  },
  {
    path: "/incubation",
    element: <Incubation />,
  },
  {
    path: "/resources",
    element: <Resource />,
  },
  {
    path: "/community",
    element: <Community />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
