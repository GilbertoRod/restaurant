import { BrowserRouter as Router, Route,Routes, } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
function App() {


  return (


     

      <Router>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/> 
          </Routes>
        </div>
      </Router>



  )
}

export default App