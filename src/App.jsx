import { BrowserRouter as Router, Route,Routes, } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react'
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, });
  }, [])

  return (


     

      <Router>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/> 
          </Routes>
          <Footer/>
        </div>
      </Router>



  )
}

export default App
