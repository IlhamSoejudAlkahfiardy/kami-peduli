import { useState } from 'react'
import Berbagi from './pages/Berbagi'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Berbagi />
      <Footer />
    </>
  )
}

export default App
