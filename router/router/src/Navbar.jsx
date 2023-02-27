import React from 'react' 
import { Routes, Route, Link} from "react-router-dom"
import Home from './components/Home.jsx'
import About from './components/About.jsx' 
import Services from './components/Services.jsx';


 
function Navbar() { 
    return ( 

        <div className='navbar'>

            <nav style={{ margin: 0 }} > 
                <Link to="/Home" style={{ padding: 5 }} className='link'> 
                Home
                </Link> 
                <Link to="/About" style={{ padding: 5 }} className='link'> 
                About
                </Link>
                <Link to="/Services" style={{ padding: 5 }} className='link'> 
                Services
                </Link>
            </nav> 
            
            <Routes>
                <Route path='Home' element={<Home />} />
                <Route path ="About" element={<About />} />
                <Route path ="Services" element={<Services />} />
             </Routes>
        
        </div> 
    ); 
  } 
export default Navbar;