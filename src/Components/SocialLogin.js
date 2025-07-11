import React, { Component } from "react";
import {GoogleLogin} from "react-google-login";
import Axios from 'axios'
import {Link} from 'react-router-dom'
import {apiUrl,url} from '../config.json'
class SocialLogin extends Component {
  responseGoogle = (response) => {
    let {email , name, googleId,imageUrl} = response.profileObj
    console.log(response.profileObj)
    let userData = {
      email:email,
      name:name,
      pass: googleId,
      imgUrl : imageUrl
    }
    Axios.post(`${apiUrl}/api/socialRegister` , userData)
                .then(response => {
                  console.log(response)
                  if(response.data.user === "false") {
                    this.props.handleSocialRegister(userData)
                    document.getElementById('link').click()
                  }
                  else {
                    this.props.handleSocialLogin(response.data)
                    window.open(url, "_self")
                  }
                })
              }

    render() {
        return (
            <div className="container" style={{width:"100%"}}>
              <Link to="/register" id="link"></Link>
              <div className="flex">
                <GoogleLogin
                    clientId="147085937555-1momoofoqqhoalss6nibu9tne68p072e.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    render={renderProps => (
                      <button className={this.props.className} onClick={renderProps.onClick} disabled={renderProps.disabled}><img alt="g-logo" className="g-logo" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" />{this.props.value}</button>
                    )}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <abbr title="Login not working? Try enabling cookies :)">
                  <div  className="i-icon">
                    <span>
                      <p>i</p>
                    </span>
                    <div className="info-dropdown">
                    Login not working? Allow Cookies and try again :)
                    </div>
                  </div>
                </abbr>
                </div>
            </div>
        );
    }
}

export default SocialLogin;
