import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BusSchedule from './components/BusSchedule'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="site-root">
      <Navbar />
      <main>
        <Hero />
        <BusSchedule />
      </main>
      <Footer />
    </div>
  )
}

export default App
