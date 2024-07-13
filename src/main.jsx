import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

import { AuthProvider } from './Context/AuthContext'
import { UserProvider } from './Context/UserContext'
import { PostsProvider } from './Context/PostContext'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <PostsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </PostsProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
)