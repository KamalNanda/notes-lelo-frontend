import React, {Component} from 'react'
import './Navbar.css'
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
  }
  componentDidUpdate(prevProps, prevState){
    document.getElementById(this.state.active).classList.add("navbar-active")
    document.getElementById(prevState.active).classList.remove("navbar-active")
  }
  render(){
    return(
      <div className="navbar">
        <div className="navbar-left">
          <Link to ="/"><img src={require('../noteslelo.svg')} className="logo" alt="logo" /></Link>
          <Link to ="/"><span id="home" onClick={() => this.onNavClick("home")}>Home</span></Link>
          <Link to ="/about"><span id="about" onClick={() => this.onNavClick("about")}>About Us</span></Link>
          <span id="courses" onClick={() => this.onNavClick("courses")}><Link to ="/courses">Courses</Link>
            <div className="dropdown-courses">
              <Link to ="/courses/bca"><span>BCA</span></Link>
              <Link to ="/courses/bba"><span>BBA</span></Link>
              <Link to ="/courses/bcom"><span>BCom</span></Link>
              <Link to ="/courses/bjmc"><span>BJMC</span></Link>
              <Link to ="/courses/eco"><span>Eco Hons</span></Link>
            </div>
          </span>
          <Link to ="/contact"><span id="contact" onClick={() => this.onNavClick("contact")}>Contact Us</span></Link>
        </div>
        <div className="navbar-right">
          <SocialLogin className="login-btn" value="Login"/>
        </div>
      </div>
    )
  }
}
