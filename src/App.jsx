import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Pages/Navbar'
import Landing from './Pages/Landing'
import Cards from './Pages/Cards'
import Footer from './Pages/Footer'
function App() {
  

  return (
    <>
      <Navbar />
      <Landing />
      <Cards />
      <Footer />
    </>
  )
}

export default App
