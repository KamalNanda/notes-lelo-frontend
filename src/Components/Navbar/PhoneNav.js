import React, {Component} from 'react'
import SocialLogin from '../SocialLogin'
import {Link} from 'react-router-dom'
import User from '../User/MobileUser'
export default class Navbar extends Component{
  constructor(props){
    super(props)
    this.state={
      active: "home",
      name: ''
    }
  }
  componentDidMount(){
    document.getElementById("home").classList.add("navbar-active")
    const pass = localStorage.getItem("pass")
    if(pass){
        const user = localStorage.getItem("user")
        this.setState({name: user})
    }
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
		phoneNav.style.animation = "moveDown 1s"
		 phoneNav.style.display = "block"
		hamburger.style.display = "none"
		navClose.style.display = "block"
		phoneNav.style.zIndex = "5"
	}
	onCloseClick = () =>{
		var phoneNav = document.getElementById('phoneNav')
		var hamburger = document.getElementById('hamburger')
		var navClose = document.getElementById('navClose')
		phoneNav.style.animation = "moveUp 1s"
		setTimeout(()=>{
			phoneNav.style.display="none"
			hamburger.style.display = "block"
			navClose.style.display = "none"
		},1000)
	}
  render(){
    const rightEle = (this.state.name === '') 
    ? <SocialLogin  handleSocialRegister={(data) => this.props.handleSocialRegister(data)}  handleSocialLogin={(data) => this.props.handleSocialLogin(data)} className="login-btn" value="Login"/> 
    : <>
	  <Link to="/settings"><h4 style={{textAlign:"left",marginTop:"10px" ,color: "var(--red)",cursor: "pointer"}}>EDIT PROFILE</h4></Link>
	  <h4 onClick={() => {localStorage.clear() ; sessionStorage.clear();  window.open("https://notes-lelo-frontend.netlify.app", "_self")}} style={{color: "var(--red)",cursor: "pointer"}}>LOGOUT</h4>
	</>
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
          <span><User/></span>
          <Link to ="/"><span id="home" onClick={() => this.onNavClick("home")}>Home</span></Link>
          <Link to ="/about"><span id="about" onClick={() => this.onNavClick("about")}>About Us</span></Link>
          <Link to ="/courses"><span id="courses" onClick={() => this.onNavClick("courses")}>Courses</span></Link>
          <Link to ="/contact"><span id="contact" onClick={() => this.onNavClick("contact")}>Contact Us</span></Link>
          <span>{rightEle}</span>
        </div>
        <div className="footer-right" style={{position:"absolute", bottom:"0", display:"flex", justifyContent:"space-evenly", margin:"auto", width:"90%"}}>
      <div className="telegram-button" style={{display:"flex", alignItems:"center"}}>
          <a style={{textDecoration:"none", textAlign:"center"}}  href="#/">Telegram</a>
          <div className="telegram-dropdown">
            <a href="https://t.me/joinchat/HdzUlEUri7PBLRDZy7ZGtw" rel="noopener noreferrer" target="_blank">Telegram BCA</a>
            <a href="https://t.me/joinchat/HdzUlEe0K_5fKDN4Gv3t9w" rel="noopener noreferrer" target="_blank">Telegram BED</a>
          </div>
        </div> 
      	<a href="https://www.instagram.com/noteslelo/?igshid=13k9dvc55p6mc" rel="noopener noreferrer" target="_blank"><p>Instagram</p></a>
      	<Link to="/disclaimer"><p>Disclaimer</p></Link>
      	{/*<a href="#/"><p>Privacy Policy</p></a>*/}
      </div>
        <div className="navbar-right">

        </div>
      </div>

      
    </>)
  }
}
