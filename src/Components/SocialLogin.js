import React, { Component } from "react";
import {GoogleLogin} from "react-google-login";

class SocialLogin extends Component {
  responseGoogle = (response) => {
    let {email , name, googleId} = response.profileObj
    let userData = {
      email:email,
      name:name,
      pass: googleId
    }
    this.props.handleSocialLogin(userData)
    this.props.history.history.push('/register')
  }

    render() {
        return (
            <div className="container">
                <GoogleLogin
                    clientId="147085937555-1momoofoqqhoalss6nibu9tne68p072e.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
}

export default SocialLogin;
