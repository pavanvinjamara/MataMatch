import React from 'react'
import'./StartPage.css'
import Profile1 from '../assets/profile1.jpg'
import Profile2 from '../assets/profile2.jpg'
import Profile3 from '../assets/profile3.jpg'
import Profile4 from '../assets/profile4.jpg'
import Profile5 from '../assets/profile5.jpg'
import Profile6 from '../assets/profile6.jpg'
import Profile7 from '../assets/profile7.jpg'
import Google from '../assets/google.png'

import { 
  
  faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
  import { 
  
    faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

function StartPage() {
  return (
    <div className='startpage-container'>
      <div className='sub-info1'>
        <p className='startpage-header'><strong>META</strong>MATCH</p>
        <img src={Profile1} alt="" className='profile1'/>
        <img src={Profile2} alt="" className='profile2'/>
        <img src={Profile3} alt="" className='profile3'/>
        <img src={Profile4} alt="" className='profile4'/>
        <img src={Profile5} alt="" className='profile5'/>
        <img src={Profile6} alt="" className='profile6'/>
        <img src={Profile7} alt="" className='profile7'/>
        </div>
        <div className='sub-info2'>
          <h1>Find your <span>first meta</span> matches</h1>
          <p>Join us and socialize with millions of meta humans</p>
          <div className="sub-info3">
            <Link to="/profile"><button className="btn1">Get started <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-btn1"/></button></Link>
            <button className="btn2"><FontAwesomeIcon icon={faApple} /></button>
            <button className="btn3"><img src={Google} alt="" className='google'/></button>
          </div>
          <p>Already have an account? <span>Sign in</span></p>
        </div>
    </div>
  )
}

export default StartPage