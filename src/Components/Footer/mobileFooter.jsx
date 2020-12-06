import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
function Footer(){
  return(
    <div className="footer">
      <div className="footer-left">
      	<p>Noteslelo</p>
      </div>
      <div className="footer-right">
      <div className="telegram-button">
          <a style={{textDecoration:"none"}} href="#/">Telegram</a>
          <div className="telegram-dropdown">
            <a href="https://t.me/joinchat/HdzUlEUri7PBLRDZy7ZGtw" rel="noopener noreferrer" target="_blank">Telegram BCA</a>
            <a href="https://t.me/joinchat/HdzUlEe0K_5fKDN4Gv3t9w" rel="noopener noreferrer" target="_blank">Telegram BED</a>
          </div>
        </div> 
      	<a href="https://www.instagram.com/noteslelo/?igshid=13k9dvc55p6mc" rel="noopener noreferrer" target="_blank"><p>Instagram</p></a>
      	<Link to="/disclaimer"><p>Disclaimer</p></Link>
      	{/*<a href="#/"><p>Privacy Policy</p></a>*/}
      </div>
    </div>
  )
}
export default Footer
