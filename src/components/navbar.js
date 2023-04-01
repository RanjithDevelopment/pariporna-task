import React from 'react'
import {Link} from "react-router-dom";
import "../css/NavbarStyles.css"
const Navbar = () => {
  return (
    <div>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid ">
   <h1>Pariporna Task</h1>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="nav justify-content-center">
        <li className="nav-item">
         <Link to="/screenone" style={{ textDecoration: 'none' }} >screenone</Link>
        </li>
        <li className="nav-item ">
          <Link to="/screenTwo">screenTwo</Link>
        </li>
        
    
        </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
