import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import {  RouterProvider, createBrowserRouter} from 'react-router-dom'

import NotelistPage from './page/NotelistPage.jsx'
import Note from './page/Note.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:'',
      element:<NotelistPage/>
    },
  {
    path:'/note/:id',
    element:<Note/>
  }
]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
