import React, {Component} from 'react'
import './Navbar.css'
import SocialLogin from '../SocialLogin'
import {Link} from 'react-router-dom'
import PhoneNav from './PhoneNav'
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
  }
  componentDidUpdate(prevProps, prevState){
    document.getElementById(this.state.active).classList.add("navbar-active")
    document.getElementById(prevState.active).classList.remove("navbar-active")
  }
  render(){
    return(
      <React.Fragment>
        <PhoneNav />
        <div className="navbar desktop">
          <div className="navbar-left">
            <Link to ="/"><img src={require('../noteslelo.svg')} className="logo" alt="logo" /></Link>
            <Link to ="/"><span id="home" onClick={() => this.onNavClick("home")}>Home</span></Link>
            <Link to ="/about"><span id="about" onClick={() => this.onNavClick("about")}>About Us</span></Link>
            <Link to ="/courses"><span id="courses" onClick={() => this.onNavClick("courses")}>Courses</span></Link>
            <Link to ="/contact"><span id="contact" onClick={() => this.onNavClick("contact")}>Contact Us</span></Link>
          </div>
          <div className="navbar-right">
            <SocialLogin className="login-btn" value="Login"/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
