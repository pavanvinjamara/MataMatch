import React from 'react'
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPen,
    faArrowLeft,
faCheck } from '@fortawesome/free-solid-svg-icons';
    import { 
  
        faFacebookMessenger,
    faTelegram,
faDiscord,
faLinkedin
 } from '@fortawesome/free-brands-svg-icons';
    import Profile6 from '../assets/profile6.jpg'
import Profile7 from '../assets/profile7.jpg'
import Profile8 from '../assets/profile8.jpg'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="profile-container">
        <div className="profile-info">
        <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className="iconprofile"/></Link>
        <h1>Profile</h1>
        <FontAwesomeIcon icon={faPen} className="iconprofile1"/>
        </div>
        <div className="profile-info1">
            <img src={Profile6} alt="" className='img1'/>
            <img src={Profile8} alt="" className='img2'/>
            <img src={Profile7} alt="" className='img3'/>
        </div>
        <div className='profile-info2'>
            <h1>Lay, 25 <FontAwesomeIcon icon={faCheck} className="iconcheck"/></h1>
            <p>Prague,Czech Republic</p>
        </div>
        <div className='profile-info3'>
        <FontAwesomeIcon icon={faTelegram} className="icontele"/>
        <FontAwesomeIcon icon={faDiscord} className="icondis"/>
        <FontAwesomeIcon icon={faFacebookMessenger} className="iconfac"/>
        <FontAwesomeIcon icon={faLinkedin} className="iconlink"/>
        </div>
        <div className='profile-info4'>
            <div className='sub-profile1'>
                <p>Interest</p>
                <p>Edit</p>
            </div>
            <div className='sub-profile2'>
                <button>Dribbble</button>
                <button>Boxing</button>
                <button>Coffee</button>

            </div >
            <div className='sub-profile3'>
            <button>Music</button>
            <button>Design</button>
            <button>Cycling</button>

            </div>
        </div>
        <Navbar/>
    </div>
  )
}

export default Profile