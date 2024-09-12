import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashBoard from './pages/DashBoard.jsx'
import Products from './pages/Products.jsx'
import Reports from './pages/Reports.jsx'
import Settings from './pages/Settings.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    children: [
      { index: true, element: <Products /> }, // This sets Products as the default route
      { path: "reports", element: <Reports /> },
      { path: "settings", element: <Settings /> }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
