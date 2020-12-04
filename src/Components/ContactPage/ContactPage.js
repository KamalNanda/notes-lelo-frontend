import React, {Component} from 'react'
import './ContactPage.css'
import axios from 'axios'
export default class ContactPage extends Component{
	constructor(props){
		super(props)
		this.state={
			name: '',
			email: '',
			message: ''
		}
	}
	onInputChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	onFormSubmit = (e) => {
		e.preventDefault()
		if(this.state.name !== "" && this.state.email !== "" && this.state.message !== ""){
			axios.post('https://notes-lelo.herokuapp.com/api/messages', {
			name : this.state.name, 
			email: this.state.email,
			message: this.state.message
			}).then(res => {
				if(res.status=== 201){
					document.getElementById('success-msg').style.display="block" 
				}
				console.log(res)
			})
		}
		else{
			document.getElementById('error-msg').style.display="block"
		}
	}
	render(){
		return(<>
				<h1 className="pageHeader">Contact Us</h1>
				<form className="contact-form" onSubmit={this.onFormSubmit}>
					<div className="form-group">
						Name : <input required onChange={this.onInputChange} type="text" placeholder="Your name here " name="name"/>
					</div>
					<div className="form-group">
						Email : <input required onChange={this.onInputChange} type="email" placeholder="Your email here " name="email"/>
					</div>
					<div className="form-group">
						Message : <textarea required onChange={this.onInputChange} placeholder="Your message here....." name="message" />
					</div>
					<p id="success-msg">Message Sent</p>
					<p id="error-msg">Please fill mandatory Fields</p>
					<div className="form-group">
			            <input type = "submit" className="submit-btn" value="Submit" />
			        </div>
				</form>
		</>)
	}
}