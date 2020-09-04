import React, {Component} from 'react'
import './LandingPage.css'
import {Link} from 'react-router-dom'
import ReactGA from 'react-ga'
export default class LandingPage extends Component{
  componentDidMount(){
    ReactGA.pageview(window.location.pathname);
  }
  render(){
    return(
      <div className="landing-page">
        <div className="landing-page-flex">
          <div className="landing-page-left">
            <h1>Noteslelo</h1>
            <p>Everything you need for your exams</p>
            <Link to="/courses"><button className="get-started-btn">Get Started</button></Link>
          </div>
          <div className="landing-page-right">
            <img src={require('../noteslelo.svg')} alt="landing" className="landing-image" />
          </div>
        </div>
      </div>
    )
  }
}
