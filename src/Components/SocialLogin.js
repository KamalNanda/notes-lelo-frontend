import React, { Component } from "react";
import {GoogleLogin} from "react-google-login";

class SocialLogin extends Component {
  responseGoogle = (response) => {
    console.log(response);
  }

    render() {
        return (
            <div className="container">
                <GoogleLogin
                    clientId="924954467240-91fda1ic9u3in43fa1n3k5icshck8681.apps.googleusercontent.com"
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
