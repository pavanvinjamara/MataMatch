import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHeart,
faEnvelope,
faUser,
faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
       <Link to="/contact"><FontAwesomeIcon icon={faNoteSticky} className="iconprofile4"/></Link>
        <FontAwesomeIcon icon={faEnvelope} className="iconprofile4"/>
        <FontAwesomeIcon icon={faHeart} className="iconprofile4"/>
      <Link to="/profile"> <FontAwesomeIcon icon={faUser} className="iconprofile4"/>
      </Link> 
    </div>
  )
}

export default Navbar