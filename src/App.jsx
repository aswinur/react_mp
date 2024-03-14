import { useState } from 'react'

import './App.css'
import './bootstrap.min.css'
import Landing from './pages/Landing'
import History from './pages/History'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'

function App() {


  return (
    <>
    <Header/>
      <Routes>
        {/* localhost:5173/land  */}
        <Route path='/' Component={Landing} />
        {/* localhost:5173/dash  */}
        <Route path='/dash' Component={Dashboard} />
        {/* localhost:5173/his  */}
        <Route path='/his' Component={History} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
