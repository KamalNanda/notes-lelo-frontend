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
            <p>Notes ka Social Network</p>
            <div className="landing-page-flex" style={{margin:"unset", justifyContent:"unset"}}>
            <button onClick={() => {this.props.history.history.push('/courses')}} className="get-started-btn">Get Started</button>
            <button onClick={() => {
              localStorage.getItem("pass") ? (this.props.history.history.push('/upload')) : (window.alert("Please Sign In to upload your Notes"))
            }} className="get-started-btn">Upload your Notes</button>
            </div>
          </div>
          <div className="landing-page-right">
            <img src={require('../noteslelo.svg')} alt="landing" className="landing-image" />
          </div>
        </div>
      </div>
    )
  }
}
