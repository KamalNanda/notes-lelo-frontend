import React, {Component} from 'react'
import SocialLogin from '../SocialLogin'
import {Link} from 'react-router-dom'
export default class Navbar extends Component{
  constructor(props){
    super(props)
    this.state={
      active: "home"
    }
  }
  componentDidMount(){
    document.getElementById("home").classList.add("navbar-active")
  }
  onNavClick = (id) => {
    this.setState({active: id})
    this.onCloseClick()
  }
  componentDidUpdate(prevProps, prevState){
    document.getElementById(this.state.active).classList.add("navbar-active")
    document.getElementById(prevState.active).classList.remove("navbar-active")
  }
  onHamburgerClick = () =>{
		var phoneNav = document.getElementById('phoneNav')
		var hamburger = document.getElementById('hamburger')
		var navClose = document.getElementById('navClose')
		phoneNav.style.animation = "moveDown 2s"
		 phoneNav.style.display = "block"
		hamburger.style.display = "none"
		navClose.style.display = "block"
		phoneNav.style.zIndex = "5"
	}
	onCloseClick = () =>{
		var phoneNav = document.getElementById('phoneNav')
		var hamburger = document.getElementById('hamburger')
		var navClose = document.getElementById('navClose')
		phoneNav.style.animation = "moveUp 2s"
		setTimeout(()=>{
			phoneNav.style.display="none"
			hamburger.style.display = "block"
			navClose.style.display = "none"
		},2000)
	}
  render(){
    return(<>
      <div className="navbar-phone phone">
				<div id="hamburger" onClick={this.onHamburgerClick}>
					<div className="hamburger-bar"></div>
					<div className="hamburger-bar"></div>
					<div className="hamburger-bar"></div>
				</div>
				<img alt="close" src='https://ik.imagekit.io/hbj42mvqwv/close_jpFLuKZyl.png' onClick={this.onCloseClick} id="navClose"/>
			</div>
      <div className="phone-header" ><Link to ="/"><img src={require('../noteslelo.svg')} className="logo" alt="logo" /></Link></div>
      <div className=" phone-nav"  id="phoneNav">
        <div className="navbar-left">

          <Link to ="/"><span id="home" onClick={() => this.onNavClick("home")}>Home</span></Link>
          <Link to ="/about"><span id="about" onClick={() => this.onNavClick("about")}>About Us</span></Link>
          <Link to ="/courses"><span id="courses" onClick={() => this.onNavClick("courses")}>Courses</span></Link>
          <Link to ="/contact"><span id="contact" onClick={() => this.onNavClick("contact")}>Contact Us</span></Link>
        </div>
        <div className="navbar-right">
          <SocialLogin className="login-btn" value="Login"/>
        </div>
      </div>
    </>)
  }
}
