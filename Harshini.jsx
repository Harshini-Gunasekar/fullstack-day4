
import './Harshini.css'
import Home from './home.jsx'
import Aboutus from './aboutus.jsx'
import Contactus from './Contactus.jsx'
import Dashboard from './Dashboard.jsx'

import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';


function Harshini() {
 

  return (
    <Router>
      <nav>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Aboutus">About us</Link></li>
          <li><Link to="/Contactus">Contact us</Link></li>

        </ol>
      </nav>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/Aboutus"element={<Aboutus/>}/>
        <Route path="/Contactus"element={<Contactus/>}/>
      </Routes>
    </Router>
   
  )
}

export default Harshini
