import React, { Component } from "react";
import {GoogleLogin} from "react-google-login";
import Axios from 'axios'
class SocialLogin extends Component {
  responseGoogle = (response) => {
    let {email , name, googleId} = response.profileObj
    let userData = {
      email:email,
      name:name,
      pass: googleId
    }
     Axios.post(`http://localhost:2000/api/socialRegister` , userData)
                .then(response => {
                  console.log(response)
                  if(response.data.user === "false") {
                    this.props.handleSocialRegister(userData)
                    this.props.history.history.push('/register')
                  }
                  else {
                    this.props.handleSocialLogin(response.data)
                    this.props.history.history.push('/')
                  }
                })
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
