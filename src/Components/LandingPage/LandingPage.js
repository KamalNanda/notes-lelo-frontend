import React, {Component} from 'react'
import './LandingPage.css'
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
            <p>Share your notes with the world</p>
            <button onClick={() => {
              localStorage.getItem("pass") ? (this.props.history.history.push('/upload')) : (window.alert("Please Sign In to upload your Notes"))
            }} className="get-started-btn">Get Started</button>
          </div>
          <div className="landing-page-right">
            <img src={require('../noteslelo.svg')} alt="landing" className="landing-image" />
          </div>
        </div>
      </div>
    )
  }
}
