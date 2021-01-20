import React from 'react'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Sidebar />
      <Footer />
    </div>
  )
}

export default App
