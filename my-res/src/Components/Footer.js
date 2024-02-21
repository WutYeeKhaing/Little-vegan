import React from 'react'
import logo from '../Images/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMap} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer>
        <section>
            <div className='footer-img'>
             <img src={logo} alt=""/>
             <h2>Little Vegan </h2>
            </div>
            <div>
            <h3> Connect from SocialMedia</h3>
                <ul>
                    <a href='/'><li>Facebook</li></a>
                    <a href='/'><li>Instragram</li></a>
                    <a href='/'><li>TikTok</li></a>
                </ul>
            </div>
            <div className='contact-info'>
                <h3> Restaurant Direction</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faMap}/></li>
                    <li>Address:<br/>No(168),Laksi,Thailand</li>
                    <li>Phone:<br/>+6691 092 254</li>
                    <li>Email:<br/>little1vegan@gmail.com</li>
                </ul>
            </div>
        </section>
    </footer>
  )
}

export default Footer