
import React, { useState } from 'react'
import {Link} from "react-router-dom";
import "../css/NavbarStyles.css"
import Screentwo from "../components/screentwo";
import Screenone from "../components/screenone";
const Navbar = () => {
  const [displayscreen,setdisplayscreen] =useState(true);
  console.log(displayscreen);
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
  <div className="container-fluid ">
   <h1 style={{ color: 'white' }}>Pariporna Task</h1>
    <div className="collapse navbar-collapse" id="navbarText" >
      <ul className="nav justify-content-center" >
        <li className="nav-item">
         <Link onClick={()=>setdisplayscreen(true)} className=" btn-info"  >screeone</Link>
        </li>
        <li className="nav-item ">
          <Link onClick={()=>setdisplayscreen(false)} className="btn-info">screenTwo</Link>
        </li>
        
    
        </ul>
    </div>
  </div>
</nav>
{displayscreen ? <Screenone/> : <Screentwo/>}
    </div>
  )
}

export default Navbar
