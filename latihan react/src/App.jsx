import { useState } from 'react'
import './App.css'
import Headers from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Team from './components/Team'
import Contact from './components/Contact'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Headers />
      <Content />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
