import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element:<Home/>
      },
      {
        path: 'Header',
        element:<Header/>
      },
      {
        path: 'Footer',
        element:<Footer/>
      },
      {
        path: 'About',
        element:<About/>
      },
      {
        path: 'Contact',
        element:<Contact/>
      },
      {
        path: 'User/:userid',  
        element:<User/>
      },
      {
        // loader:{githubInfoLoader},
        path: '/github',  
        element:<Github/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>,
)
