import { BrowserRouter } from "react-router-dom"
import { Contact, Home, Navbar, Projects, Skills } from './components'
// npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Home />
      </div>
      <Skills />
      <Projects />
      <Contact />
    </div>
    </BrowserRouter>
  )
}

export default App
