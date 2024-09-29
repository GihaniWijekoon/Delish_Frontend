import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
   <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt=''/>
                <p>Delicious meals delivered to your door, anytime. From fresh salads to indulgent desserts, we bring a variety of dishes to satisfy your cravings. Fast, reliable, and made with the freshest ingredients—experience hassle-free food delivery today!</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94 712536125</li>
                    <li>contact@delish.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 Delish.com - All Right Reserves.</p>
   </div>
  )
}

export default Footer