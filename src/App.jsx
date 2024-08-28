import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Cards from './components/Cards'
import Section from './components/Section'
import Serve from './components/Serve'
import Sects from './components/Sects'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <div className='w-full min-h-screen text-white bg-black'>
        <Navbar />
        <Landing />
        <Cards />
        <Serve />
        <Section />
        <Sects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
