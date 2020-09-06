import React, {Component} from 'react'
import './Navbar.css'
import SocialLogin from '../SocialLogin'
import {Link} from 'react-router-dom'
import PhoneNav from './PhoneNav'
import User from '../User/User'
export default class Navbar extends Component{
  constructor(props){
    super(props)
    this.state={
      active: "dhome",
      name: ''
    }
  }
  componentDidMount(){
    document.getElementById("dhome").classList.add("navbar-active")
    const pass = localStorage.getItem("pass")
    if(pass){
        const user = localStorage.getItem("user")
        this.setState({name: user})
    }
  }
  onNavClick = (id) => {
    this.setState({active: id})
  }
  componentDidUpdate(prevProps, prevState){
    document.getElementById(this.state.active).classList.add("navbar-active")
    document.getElementById(prevState.active).classList.remove("navbar-active")

  }
  render(){
    const rightEle = (this.state.name === '') ? <SocialLogin  handleSocialRegister={(data) => this.props.handleSocialRegister(data)}  handleSocialLogin={(data) => this.props.handleSocialLogin(data)} className="login-btn" value="Login"/> : <User />
    return(
      <React.Fragment>
        <PhoneNav  handleSocialRegister={(data) => this.props.handleSocialRegister(data)}  handleSocialLogin={(data) => this.props.handleSocialLogin(data)}/>
        <div className="navbar desktop">
          <div className="navbar-left">
            <Link to ="/"><img src={require('../noteslelo.svg')} className="logo" alt="logo" /></Link>
            <Link to ="/"><span id="dhome" onClick={() => this.onNavClick("dhome")}>Home</span></Link>
            <Link to ="/about"><span id="dabout" onClick={() => this.onNavClick("dabout")}>About Us</span></Link>
            <Link to ="/courses"><span id="dcourses" onClick={() => this.onNavClick("dcourses")}>Courses</span></Link>
            <Link to ="/contact"><span id="dcontact" onClick={() => this.onNavClick("dcontact")}>Contact Us</span></Link>
          </div>
          <div className="navbar-right" id="gbtn">
            {rightEle}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
