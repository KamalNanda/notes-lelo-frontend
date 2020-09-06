import React,{Component} from 'react'
import axios from 'axios'
export default class adminLogin extends Component{
  constructor(props){
    super(props)
    this.state={
      email: '',
      password: ''
    }
    this.onFieldChange= this.onFieldChange.bind(this)
    this.onAdminLogin = this.onAdminLogin.bind(this)
  }
  onFieldChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
    console.log(this.state)
  }
  async onAdminLogin(e){
    e.preventDefault()
    JSON.stringify(this.state)
    await axios.post('https://notes-lelo.herokuapp.com/api/adminLogin', this.state )
          .then(response => {
            console.log(response)
            localStorage.setItem('adminToken', response.data.token)
            localStorage.setItem('adminName', response.data.name)
            window.location.reload()
          })
  }
  render(){
    return(
      <div className="admin-login">
        <h1>ADMIN LOGIN</h1>
        <center><form onSubmit={this.onAdminLogin}>
          <div className="form-group">
            Email : <input type="email" onChange={this.onFieldChange} name="email" />
          </div>
            <div className="form-group">
              Password : <input type="Password" onChange={this.onFieldChange} name="password" />
            </div>
            <div className="form-group">
                <input type = "submit" value="Submit" />
            </div>
        </form></center>
      </div>
    )
  }
}
