// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './components/Routes/Routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}/>
)
