import './App.css'
import About from './components/templates/landing/About'
import Contact from './components/templates/landing/Contact'
import Educamás from './components/templates/landing/Educamás'
import Footer from './components/templates/landing/Footer'



function App() {


  return (
    <div className="App  bg-dark">
      <About />
      <Contact />
      <Educamás />
      <Footer />
    </div>
  )
}

export default App
