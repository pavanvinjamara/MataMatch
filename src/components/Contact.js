import React from 'react'
import Navbar from './Navbar'
import Profile8 from '../assets/profile8.jpg'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faLocationDot,
faBell,
faXmark,
faHeart,

} from '@fortawesome/free-solid-svg-icons';
import Profile11 from '../assets/profile6.jpg';
import Profile12 from '../assets/profile7.jpg'
import Profile13 from '../assets/profile8.jpg'

function Contact() {
  return (
    <div className='contact-container'>
        <div className='sub-info10'>
          <div className='sub-info11'>
            <img src={Profile8} alt="" className='img4'/>
            <p>Hi, <strong>Lay</strong></p>
            </div>
            <div className='sub-info12'>
              <FontAwesomeIcon icon={faLocationDot} className='icon-contact'/>
              <FontAwesomeIcon icon={faBell} className='icon-contact'/>
            </div>
        </div>
        <div className='sub-info13'>
        <img src={Profile11} alt="" className='img10'/>
        </div>
        <div className='sub-info15'>
              <FontAwesomeIcon icon={faXmark} className='icon-contact1'/>
              <FontAwesomeIcon icon={faHeart} className='icon-contact2'/>
        </div>
        <div className='sub-info14'>
        <Navbar/>
        </div>
    </div>
  )
}

export default Contact