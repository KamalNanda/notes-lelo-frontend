import React from 'react'
import axios from 'axios'
export default class Settings extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            gender: '',
            course: '',
            semester: '',
            college: ''
        }
    }
    componentDidMount(){
        let name= localStorage.getItem("user")
        let gender= localStorage.getItem("gender")
        let course= localStorage.getItem("course")
        let semester= localStorage.getItem("sem")
        let college= localStorage.getItem("college")
        this.setState({
            name,
            gender,
            course,
            semester,
            college
        })
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })
        console.log(this.state)
      }
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.name !== "" && this.state.gender !== "" && this.state.semester !== "" && this.state.college !== "" && this.state.course !== "" ){
            axios.put(`https://notes-lelo.herokuapp.com/api/edituser/${localStorage.getItem("userId")}`,{
                name: this.state.name,
                gender: this.state.gender,
                course: this.state.course,
                semester: this.state.semester,
                college: this.state.college,
            }).then(res => {
                console.log(res)
                if(res.status === 200) {
                    localStorage.setItem("user", this.state.name)
                    localStorage.setItem("sem", this.state.semester)
                    localStorage.setItem("course", this.state.course)
                    localStorage.setItem("college", this.state.college) 
                    localStorage.setItem("gender", this.state.gender)
                    document.getElementById('success-msg').style.display="block"
                    window.open("https://notes-lelo-frontend.netlify.app/", "_self")
                }
            })
        } else {
            document.getElementById('error-msg').style.display="block"
        }
    }
    render(){
        return(
            <div>
            <h1 className="pageHeader">Edit your Profile</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            Name : <input type = "text" defaultValue={this.state.name} required name = "name" onChange = {this.handleChange}/>
        </div>
        <div className="form-group">
            Course :
            <select required className="semester-drop" defaultValue={this.state.course} name = "course" onChange = {this.handleChange} >
              <option value={this.state.course}>{this.state.course}</option>
              <option value="BCA">BCA</option>
              <option value="BCOM">BCOM</option>
              <option value="BBA">BBA</option>
              <option value="BJMC">BJMC</option>
              <option value="ENG HONS.">ENG HONS.</option>
              <option value="other">other</option>
            </select>
        </div>
        <div className="form-group">
            Semester : 
            <select required className="semester-drop" defaultValue={this.state.semester} name = "semester" onChange = {this.handleChange} >
              <option value={this.state.semester}>{this.state.semester}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
        </div>
        <div className="form-group">
            College : <input type = "text" defaultValue={this.state.college} required name = "college" onChange = {this.handleChange}/>
        </div>
        <div className="form-group">
            Gender : 
            <select className="gender-drop" required defaultValue={this.state.gender} name = "gender" onChange = {this.handleChange} >
              <option value={this.state.gender}>{this.state.gender}</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
        </div>
        <p id="error-msg">You can't leave any of these fields empty</p>
        <p id="success-msg">Profile Successfully Edited</p>
        <div className="form-group">
            <input className="submit-btn" type = "submit" value="Submit" />
        </div>
        </form>
      </div>
        )
    }
}