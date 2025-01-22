import { BrowserRouter as Router, Route,Routes, } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './AboutUs/AboutUs'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react'
import ScrollToTop from './components/ScrollToTop'
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset:200});
  }, [])

  return (


     

      <Router>
        <div className="App">
          <Navbar/>
          <ScrollToTop/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>



  )
}

export default App
