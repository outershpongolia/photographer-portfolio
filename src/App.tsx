import React from 'react'
import { Header } from './components/Header/Header'
import { Portfolio } from './pages/Portfolio/Portfolio'
import { Services } from './pages/Services/Services'
import { About } from './pages/About/About'
import { Reviews } from './pages/Reviews/Reviews'
import { Blog } from './pages/Blog/Blog'
import { Footer } from './components/Footer/Footer'

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <div className='main'>
        <Portfolio />
        <Services />
        <About />
        <Reviews />
        <Blog />
      </div>

      <Footer />
    </div>
  )
}

export default App
