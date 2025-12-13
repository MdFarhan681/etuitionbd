import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Router.jsx'
import { RouterProvider } from 'react-router'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
    <Toaster position='top-center'></Toaster>
  </StrictMode>,
)
