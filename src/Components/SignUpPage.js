import React from 'react'
import SocialLogin from './SocialLogin'
class SignUpPage extends React.Component{
  render(){
    return(
      <div className="signup-page">
        <SocialLogin history={this.props.history} handleSocialLogin={(data) => this.props.handleSocialLogin(data)} />
      </div>
    )
  }
}
export default SignUpPage
