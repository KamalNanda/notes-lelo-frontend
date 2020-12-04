import React from 'react'
import './Footer.css'
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
            <a href="#/">Telegram BCA</a>
            <a href="#/">Telegram BCOM</a>
          </div>
        </div> 
      	<a href="#/"><p>Instagram</p></a>
      	<a href="#/"><p>Disclaimer</p></a>
      	<a href="#/"><p>Privacy Policy</p></a>
      </div>
    </div>
  )
}
export default Footer
